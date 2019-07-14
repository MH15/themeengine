// let demo = require("../sites/demo.json")
// let theme = require("../themes/theme0")
let inter = require("../interface")
let writer = require("./writer")

const path = require('path')
const mustache = require('mustache')
const fs = require('fs')
let ejs = require('ejs')

var sassc = require('node-sass');


class Transpiler {
    // TODO: use theme specified in site definition
    constructor(config) {
        this.theme = require(config.theme.definition)
        this.site = require(config.site.definition)
        this.config = config

        this.items = []
        this.combined = ""
        this.html = ""
        this.compiled_sass = ""
    }

    run() {
        let VALID_ITEMS = Object.keys(inter)
        let THEME_TYPES = Object.keys(this.theme)
        // console.log("site: ", this.site)
        this.items = this.site.site.content.map(item => {
            if (VALID_ITEMS.includes(item.type)) {
                if (THEME_TYPES.includes(item.type)) {
                    return this.theme[item.type](item.text)
                } else {
                    console.error(`Item type "${item.type}" found in the theme definition not supported by ThemeEngine.`)
                }
            } else {
                console.error(`Item type "${item.type}" found in the interface not supported by ThemeEngine.`)
            }
        })
    }

    combine() {
        this.combined = writer.combine(this.items)
    }

    // TODO: fuck classes
    mustache() {
        return new Promise(async function (resolve, reject) {
            let template = fs.readFileSync(path.join(global.appRoot, "reference", "default.mst"))

            console.log("casca:", this.config.theme.sasspath)
            let cs = await sass(this.config.theme.sasspath)
            console.log("cs:", cs)
            let ms = {
                content: this.combined,
                sass: cs
            }
            console.log("ms:", ms)
            let result = mustache.render(template.toString('utf8'), ms);
            console.log("resulta:", result)
            resolve(result)
        })
    }










}



function sass(sasspath) {
    return new Promise((resolve, reject) => {
        sassc.render({
            file: sasspath
        }, function (err, result) {
            if (err) {
                console.error("Sass won't compile.")
                console.log(err)
                reject(err)
            } else {
                let s = result.css.toString()
                console.log("compiled sass: ", s)
                resolve(s)
            }
        })
    })

}



module.exports = {
    itemize: (theme, site) => {
        return new Promise((resolve, reject) => {
            let VALID_ITEMS = Object.keys(inter)
            let THEME_TYPES = Object.keys(theme)
            // console.log("site: ", this.site)
            let items = site.site.content.map(item => {
                if (VALID_ITEMS.includes(item.type)) {
                    if (THEME_TYPES.includes(item.type)) {
                        return theme[item.type](item.text)
                    } else {
                        console.error(`Item type "${item.type}" found in the theme definition not supported by ThemeEngine.`)
                    }
                } else {
                    console.error(`Item type "${item.type}" found in the interface not supported by ThemeEngine.`)
                }
            })
            resolve(items)
        })

    },

    sass: (sasspath) => {
        return new Promise((resolve, reject) => {
            sassc.render({
                file: sasspath
            }, function (err, result) {
                if (err) {
                    console.error("Sass won't compile.")
                    reject(err)
                } else {
                    let s = result.css.toString()
                    resolve(s)
                }
            })
        })

    },

    mustache: (combined_items, compiled_sass) => {
        return new Promise(async function (resolve, reject) {
            let template = await writer.readFilePromise(path.join(global.appRoot, "reference", "default.mst"))

            let ms = {
                content: combined_items,
                sass: compiled_sass
            }
            console.log("ms:", ms)
            let result = mustache.render(template.toString('utf8'), ms);
            console.log("resulta:", result)

            await writer.writeFilePromise(path.join(global.appRoot, "done", "demo", "demo.html"), result)
            resolve(result)
        })
    }

}