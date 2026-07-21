import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
// Pastikan path './db' mengarah ke konfigurasi koneksi Drizzle lu yang bener
import { db } from "./db"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [
        Google({
            // Ngasih tau TypeScript secara eksplisit biar nggak rewel
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
    callbacks: {
        // Kita pakai ': any' biar TypeScript nggak protes soal custom parameter (tier & id)
        async session({ session, user }: any) {
            if (session.user && user) {
                session.user.id = user.id;
                session.user.tier = user.tier;
            }
            return session;
        },
    },
})