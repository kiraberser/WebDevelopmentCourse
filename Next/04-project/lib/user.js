import db from "./db"

export const createUser = (email, password) => {
    const res = db
        .prepare('INSERT INTO users (email,password) VALUES (?,?)')
        .run(email, password)
    return res.lastInsertRowid
}

export const getUserByEmail = (email) => {
    return db
        .prepare('SELECT * FROM users where email = ?')
        .get(email)
}