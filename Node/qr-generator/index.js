import inquirer from 'inquirer'
import * as fs from 'node:fs'
import qr from "qr-image"

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Pass URL'
        }
    ])
    .then((answer) => {
        const photo = qr.image(answer.url, {type: 'png'});
        const output = fs.createWriteStream('image/qr_image.png')
        photo.pipe(output)
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Error")
        } else {
            console.log("An error ocurred", error)
        }
    })