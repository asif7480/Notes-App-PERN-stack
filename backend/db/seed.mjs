import { db } from "./db.mjs";
import { notes } from "../schema/schema.mjs";

async function seed(){
    await db.insert(notes).values([
        { title: "Example title 1", description: "This is an example title 1" },
        { title: "Example title 2", description: "This is an example title 2" },
        { title: "Example title 3", description: "This is an example title 3" },
        { title: "Example title 4", description: "This is an example title 4" },
        { title: "Example title 5", description: "This is an example title 5" },
        { title: "Example title 6", description: "This is an example title 6" }
    ])

    console.log(`Seeding completed.`)
}

seed().catch( (err) => {
    console.error("Seeding error: ", err)
    process.exit(1)
})