import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://hanif.mia2233:b7LEUQtoI8Fu@ep-dry-wind-41193911.us-east-2.aws.neon.tech/leavemanagment?sslmode=require',
  }
});