const cleaner = require('clean-html')
const fs = require('fs')
const path = require('path')

/**
 * Combine an array of HTML strings
 * @param {*} items 
 */
function combine(items) {
    return items.join("\n")
}

function clean(dirty) {
    console.log("Cleaning...", dirty)
    cleaner.clean(dirty, (clean) => {
        console.log("clean", clean);
    });
}

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
function writeFilePromise(path, data) {
    console.log("PATH: ", path)
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}




module.exports = {
    combine,
    clean,
    readFilePromise,
    writeFilePromise
}