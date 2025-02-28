import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { hash } from 'bcrypt';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  throw new Error('Please add ADMIN_EMAIL and ADMIN_PASSWORD to .env.local');
}

async function initDb() {
  try {
    const client = await MongoClient.connect(MONGODB_URI as string);
    const db = client.db('portfolio');

    // Check if users collection exists
    const collections = await db.listCollections().toArray();
    const hasUsersCollection = collections.some(
      (col: { name: string }) => col.name === 'users'
    );

    if (!hasUsersCollection) {
      console.log('Creating users collection...');
      await db.createCollection('users');
    }

    // Check if admin user exists
    const users = db.collection('users');
    const adminUser = await users.findOne({ email: ADMIN_EMAIL });

    if (!adminUser) {
      console.log('Creating admin user...');
      const hashedPassword = await hash(ADMIN_PASSWORD as string, 10);
      await users.insertOne({
        email: ADMIN_EMAIL,
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
      });
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }

    await client.close();
    console.log('Database initialization completed');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initDb();
