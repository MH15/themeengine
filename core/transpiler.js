// let demo = require("../sites/demo.json")
// let theme = require("../themes/theme0")
let inter = require("../interface")
let writer = require("./writer")

const path = require('path')
const mustache = require('mustache')
const fs = require('fs')
let ejs = require('ejs')
const chalk = require('chalk');


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
            let THEME_TYPES = Object.keys(theme)

            // console.log("site: ", this.site)
            let items = site.content.map(item => {
                if (THEME_TYPES.includes(item.type)) {
                    return theme[item.type](item)

                } else {
                    console.log(chalk.red(`Item type "${item.type}" found in the interface not supported by ThemeEngine.`))
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
                    console.log(chalk.red("Sass won't compile."))
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