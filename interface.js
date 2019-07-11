// tagged template literals for all nodes


module.exports = {
    h1: (literals, ...expressions) => {
        return passthrough("h1", literals, ...expressions)
    },
    h2: (literals, ...expressions) => {
        return passthrough("h2", literals, ...expressions)
    },
    h3: (literals, ...expressions) => {
        return passthrough("h2", literals, ...expressions)
    },
    p: (literals, ...expressions) => {
        return passthrough("p", literals, ...expressions)
    }

}


function passthrough(tagName, literals, ...expressions) {
    let string = ``
    string += `<${tagName}>`
    for (const [i, val] of expressions.entries()) {
        string += literals[i] + val
    }
    string += literals[literals.length - 1]
    string += `</${tagName}>`
    return string
}