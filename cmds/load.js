// library imports
const ora = require('ora')
const transpiler = require('../core/transpiler')
const writer = require('../core/writer')
let configurer = require('../core/configurer')


module.exports = (args) => {

	let config = configurer()
	console.log(config)

	let tr = new transpiler(config.theme.definition, config.site.definition)
	let items = tr.run()


	console.log(items)

	console.log(writer.combine(items))
}