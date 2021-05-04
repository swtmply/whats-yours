import NextAuth from "next-auth";

const options = {
  database: process.env.NEXTAUTH_DATABASE_URL,

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.NEXTAUTH_TOKEN_SECRET,
  },

  callbacks: {
    signIn: async (user, account, profile) => {
      return Promise.resolve(true);
    },
    redirect: async (url, baseUrl) => {
      return Promise.resolve(baseUrl);
    },
    session: async (session, user) => {
      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      return Promise.resolve(token);
    },
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: null, // If set, new users will be directed here on first sign in
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
