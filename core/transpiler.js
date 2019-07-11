let demo = require("../sites/demo.json")
let theme = require("../themes/theme0")
let interface = require("../interface")

module.exports = () => {
    return new Promise((resolve, reject) => {
        let VALID_ITEMS = Object.keys(interface)
        let THEME_TYPES = Object.keys(theme)

        items = demo.site.content.map(item => {
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
    // console.log("test")



    console.log(items)
}