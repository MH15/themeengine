console.log("Starting ThemeEngine...")
const minimist = require('minimist')


let demo = require("./sites/demo.json")
let theme = require("./themes/theme0")
const interface = require("./interface")

let items = []

demo.site.content.forEach(item => {
    items.push(theme[item.type](item.text))
})

console.log(items)

// function interpolate(literals, ...expressions) {
// let string = ``
// for (const [i, val] of expressions.entries()) {
//     string += literals[i] + val
// }
// string += literals[literals.length - 1]
// return string
// }

// const interpolated = interpolate`I paid ${10}€`

// console.log(interpolated)

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

        default:
            console.error(`"${cmd}" is not a valid command!`)
            break
    }
}