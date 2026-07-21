import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    tier?: string;
  }

  interface Session {
    user: {
      id: string;
      tier?: string;
    } & DefaultSession["user"];
  }
}
