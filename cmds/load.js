// library imports
const path = require('path')
const fs = require('fs')
const transpiler = require('../core/transpiler')
const writer = require('../core/writer')
let configurer = require('../core/configurer')
let run = require('../core/run')


// TODO: promises and error handling
module.exports = async (args) => {
	run()

	writer.watch(path.join(global.appRoot, "sites", "demo", "demo.json"), run)
	writer.watch(path.join(global.appRoot, "themes", "theme0", "theme0.js"), run)

	// Don't watch during deployment
	writer.watch(path.join(global.appRoot, "reference", "default.sass"), run)

}