// let demo = require("../sites/demo.json")
// let theme = require("../themes/theme0")
let inter = require("../interface")
let writer = require("./writer")

const path = require('path')
const mustache = require('mustache')
const fs = require('fs')
let ejs = require('ejs')

var sassc = require('node-sass');


function intersect(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
}



module.exports = {
    itemize: (theme, site) => {
        return new Promise((resolve, reject) => {
            let VALID_ITEMS = Object.keys(inter)
            let THEME_TYPES = Object.keys(theme)
            let intersection = intersect(VALID_ITEMS, THEME_TYPES)

            // Check for an incomplete theme.
            if (intersection.length != VALID_ITEMS.length || intersection.length != THEME_TYPES.length) {
                console.error("Certain elements from the interface are not defined.")
            }


            // console.log("site: ", this.site)
            let items = site.content.map(item => {
                if (VALID_ITEMS.includes(item.type)) {
                    if (THEME_TYPES.includes(item.type)) {
                        return theme[item.type](item.text)
                    } else {
                        console.error(`Item type "${item.type}" found in the interface not supported by ThemeEngine.`)
                    }
                } else {
                    console.error(`Item type "${item.type}" found in the theme definition not supported by ThemeEngine.`)
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
            let result = mustache.render(template.toString('utf8'), ms);


            resolve(result)
        })
    }

}