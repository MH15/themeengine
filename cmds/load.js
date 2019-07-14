// library imports
const path = require('path')
const fs = require('fs')
const transpiler = require('../core/transpiler')
const writer = require('../core/writer')
let configurer = require('../core/configurer')


// TODO: promises and error handling
module.exports = async (args) => {

	let config = configurer()

	let theme = require(config.theme.definition)
	let site = require(config.site.definition)


	let items = await transpiler.itemize(theme, site)
	let combined_items = writer.combine(items)
	let compiled_sass = await transpiler.sass(config.theme.sasspath)
	console.log(compiled_sass)

	let html = await transpiler.mustache(combined_items, compiled_sass)




	// let tr = new transpiler(config)
	// tr.run()
	// tr.combine()



	// // let sass = tr.sass(config.theme.sasspath)

	// let m = await tr.mustache()
	// fs.writeFile(path.join(global.appRoot, "done", "demo", "demo.html"), m, function (err) {
	// 	if (err) {
	// 		return console.log(err);
	// 	}

	// 	console.log("The file was saved!");
	// });



}