// tagged template literals for all nodes


module.exports = {
    h2: (literals, ...expressions) => {
        let string = ``
        string += "<h2>"
        for (const [i, val] of expressions.entries()) {
            string += literals[i] + val
        }
        string += literals[literals.length - 1]
        string += "</h2>"
        return string
    },
    p: (literals, ...expressions) => {
        let string = ``
        string += "<p>"
        for (const [i, val] of expressions.entries()) {
            string += literals[i] + val
        }
        string += literals[literals.length - 1]
        string += "</p>"
        return string
    }
}