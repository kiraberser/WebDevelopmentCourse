import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import fs from 'node:fs'

const db = sql('meals.db');

export const getMeals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    //throw new Error('Something went wrong')
    const meals = db.prepare('SELECT * FROM meals').all();
    return meals;
}

export const getMeal = (slug) => {
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
    return meal
}

export const saveMeal = async (meal) => {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Savinf image failed')
        }
    })

    meal.image = `/images/${fileName}`

    db.prepare(
        `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) 
        VALUES (
            @title, 
            @summary, 
            @instructions, 
            @image, 
            @creator, 
            @creator_email,
            @slug 
            )`
    ).run(meal)
}

