import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import clientPromise from './mongodb';

const client = await clientPromise;
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    }
  },
  user: {
    changeEmail: { enabled: false },
    deleteUser: { enabled: false }
  },
  trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000']
});
