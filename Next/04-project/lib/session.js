import db from './db.js'

export const setUserSession = (userId, sessionId, expiresAt) => {
    const expiresTimestamp = Math.floor(expiresAt.getTime() / 1000);

    const res = db
        .prepare('INSERT INTO sessions (id, expires_at, user_id) VALUES (?,?,?)')
        .run(sessionId, expiresTimestamp, userId)
    return res.lastInsertRowid
}

export const getUserSession = (sessionId) => {
    const row = db.prepare(`
      SELECT id, user_id, expires_at
      FROM sessions
      WHERE id = ?
    `).get(sessionId);
    
    if (!row) return null;
    
    const expiresAt = new Date(row.expires_at * 1000); // convertir timestamp a Date
    
    return {
      id: row.id,
      user: { id: row.user_id }, // ajusta según tu esquema
      expiresAt
    };
}