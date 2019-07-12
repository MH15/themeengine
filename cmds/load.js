// library imports
const ora = require('ora')
const transpiler = require('../core/transpiler')
const writer = require('../core/writer')
let configurer = require('../core/configurer')

// TODO: promises and error handling
module.exports = (args) => {

	let config = configurer()
	console.log(config)

	let tr = new transpiler(config.theme.definition, config.site.definition)
	let items = tr.run()
	// console.log(items)
	let content = writer.combine(items)

	let sass = tr.sass(config.theme.sasspath)

	tr.mustache(content)

}