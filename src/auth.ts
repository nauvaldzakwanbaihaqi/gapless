import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
// Pastikan path './db' mengarah ke konfigurasi koneksi Drizzle lu yang bener
import { db } from "./db"
import { users } from "./db/schema"
import { eq } from "drizzle-orm"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [
        Google({
            // Ngasih tau TypeScript secara eksplisit biar nggak rewel
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({ session, user }: any) {
            if (session.user) {
                const userId = user?.id || session.user.id;
                if (userId) {
                    session.user.id = userId;
                    try {
                        const dbUser = await db
                            .select({ tier: users.tier })
                            .from(users)
                            .where(eq(users.id, userId))
                            .limit(1);
                        if (dbUser.length > 0 && dbUser[0].tier) {
                            session.user.tier = dbUser[0].tier;
                        }
                    } catch (e) {
                        console.error("Error fetching user tier in session:", e);
                    }
                }
                
                // Hardcode Unlimited / Pro for testing email
                if (session.user.email === 'nauvaldzakwan17@upi.edu') {
                    session.user.tier = 'Student Pro';
                }
            }
            return session;
        },
    },
    session: {
        strategy: "database", // Gunakan database strategy (karena Drizzle Adapter)
        maxAge: 24 * 60 * 60, // 24 jam dalam detik
    },
})