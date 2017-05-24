#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const checker = require('license-checker')

checker.init({
    start: path.join(__dirname, '..')
}, (err, json) => {
    if (err) {
        console.error(err)
    } else {
        Object.keys(json).forEach(key => {
            delete json[key].licenseFile
        })
        fs.writeFileSync('dependencies.json', JSON.stringify(json))
    }
})