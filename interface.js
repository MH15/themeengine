// tagged template literals for all nodes


module.exports = {
    heading: (text, props) => {
        let style = collapseStyles(props.style)
        return `<h1 class="heading--default" style="${style}">${text}</h1>`
    },
    subheading: (text, props) => {
        let style = collapseStyles(props.style)
        return `<h2 class="subheading--default" style="${style}">${text}</h2>`
    },
    paragraph: (text, props) => {
        let style = collapseStyles(props.style)
        return `<p class="paragraph--default" style="${style}">${text}</p>`
    },
    button: (text, props) => {
        let style = collapseStyles(props.style)
        return `<button class="button--default" style="${style}">${text}</button>`
    },
    image: (text, props) => {
        return `<div class="image--default">
            <img src="${props.src}" alt="${text}" width="100%" height="100%"/>
        </div>`
    },
    youtube: (text, props) => {
        return `<button class="button--default">${text}</button>`
    }
}


function collapseStyles(styles) {
    styleString = ""
    for (var key in styles) {
        if (styles.hasOwnProperty(key)) {
            styleString += `${key}: ${styles[key]};`
        }
    }
    return styleString
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