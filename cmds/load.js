// library imports
const ora = require('ora')
const transpiler = require('../core/transpiler')
const writer = require('../core/writer')

module.exports = async (args) => {

	console.log("Transpiling...")
	try {
		let items = await transpiler()

		console.log(items)

		console.log(writer.combine(items))
	} catch (err) {
		// spinner.stop()

		console.error(err)
	}
}