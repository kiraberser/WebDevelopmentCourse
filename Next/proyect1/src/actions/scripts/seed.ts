import { getClient } from "@/lib/server/db"

async function seed() {
    const client = getClient()
    await client.connect()
    const res = await client.query("select 1")
    console.log(res.rows)
}

seed()