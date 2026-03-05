# Commad to setup expressjs backend with drizzle orm and neondb

## Initial steps
This is starting process to create an expressjs backend with drizzle ORM and neon db

- npm init -y
    - add type="module"
- npm i express dotenv
- touch server.js dotenv .gitignroe
    - inside gitignore add node_modules and .env

## Create a Neon project
Navigate to the Projects page in the Neon Console.
Click New Project.
Specify your project settings and click Create Project.
Copy the connection string

## Install Drizzle and a driver
### Neon Serverless (HTTP)
- npm install drizzle-orm @neondatabase/serverless dotenv
- npm install -D drizzle-kit

## Configure Drizzle Kit
```
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in the .env file');
}

export default defineConfig({
  schema: './src/schema.ts', // Your schema file path
  out: './drizzle', // Your migrations folder
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
```

## Initialize the Drizzle client
### Neon Serverless (HTTP)
```
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
```

## Create a schema
```
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const demoUsers = pgTable('demo_users', {
  id: serial('id').primaryKey(),
  name: text('name'),
});
```

## Generate migrations
- npx drizzle-kit generate

## Apply migrations
- npx drizzle-kit migrate

## Execute Drizzle Studio
- npx drizzle-kit studio
