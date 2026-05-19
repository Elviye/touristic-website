import 'dotenv/config';
import { connectDatabase } from '../config/db.js';
import { activities, places } from '../data.js';
import { Activity } from '../models/Activity.js';
import { Place } from '../models/Place.js';
async function seed() {
    await connectDatabase();
    if (!process.env.MONGO_URI) {
        console.log('No MONGO_URI provided. Seed data is available in src/data.ts.');
        return;
    }
    await Place.deleteMany({});
    await Activity.deleteMany({});
    await Place.insertMany(places);
    await Activity.insertMany(activities);
    console.log(`Seeded ${places.length} places and ${activities.length} activities.`);
}
seed()
    .catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
    .finally(() => process.exit());
