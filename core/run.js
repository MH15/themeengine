
const path = require('path')
const transpiler = require('./transpiler')
const writer = require('./writer')
const configurer = require('./configurer')
const beautify = require('js-beautify').html

let site = {}

module.exports = async () => {
    console.log("runn")

    let config = configurer()
    delete require.cache[require.resolve(config.site.definition)]


    let theme = require(config.theme.definition)
    console.log("site: ", site)
    site = require(config.site.definition)
    // console.log(site)

    let items = await transpiler.itemize(theme, site)
    let combined_items = writer.combine(items)
    let compiled_sass = await transpiler.sass(config.theme.sasspath)

    // // Template all data together.
    let html = await transpiler.mustache(combined_items, compiled_sass)

    // // Beautify HTML and write to file.
    await writer.writeFilePromise(path.join(global.appRoot, "done", "demo", "demo.html"), beautify(html))
    // // console.log(html)



}
