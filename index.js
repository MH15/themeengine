const minimist = require('minimist')
const ora = require('ora')


let demo = require("./sites/demo.json")
let theme = require("./themes/theme0")
const interface = require("./interface")





require('./cmds/load')()

module.exports = () => {
    const args = minimist(process.argv.slice(2))

    let cmd = args._[0] || 'help'

    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
        cmd = 'help'
    }

    switch (cmd) {
        case 'today':
            require('./cmds/today')(args)
            break
        case 'version':
            require('./cmds/version')(args)
            break
        case 'help':
            require('./cmds/help')(args)
            break
        case 'load':
            require('./cmds/load')(args)
            break
        default:
            console.error(`"${cmd}" is not a valid command!`)
            break
    }
}