// let demo = require("../sites/demo.json")
// let theme = require("../themes/theme0")
let inter = require("../interface")

const path = require('path')
const mustache = require('mustache')
const fs = require('fs')


// TODO: use theme specified in site definition
module.exports = class Transpiler {
    constructor(themePath, sitePath) {
        this.theme = require(themePath)
        this.site = require(sitePath)
    }

    run() {
        let VALID_ITEMS = Object.keys(inter)
        let THEME_TYPES = Object.keys(this.theme)
        // console.log("site: ", this.site)
        let items = this.site.site.content.map(item => {
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
        return items
    }



    sass(sasspath) {
        var sass = require('node-sass');
        sass.render({
            file: sasspath
        }, function (err, result) {
            if (err) {
                console.error("Sass won't compile.")
                console.log(err)
                return -1;
            } else {
                return result.css.toString('utf8')
            }
        })
    }


    mustache(content) {
        fs.readFile(path.join(global.appRoot, "reference", "default.mst"), (err, data) => {
            if (err) throw err;
            // console.log(data)
            let result = mustache.render(data.toString('utf8'), { content: content });
            console.log(result)
        });
    }

}




