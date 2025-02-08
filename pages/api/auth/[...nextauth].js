import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        accessType: { label: "Access Type", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // If accessType is provided, it's an update request
          if (credentials.accessType) {
            return {
              email: credentials.email,
              accessType: credentials.accessType,
            };
          }

          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          // console.log("Response login:", response.data);

          if (response.data.success && response.data?.data.accessToken) {
            const { user, accessToken } = response.data.data;
            return {
              id: user.id,
              role: user.role,
              name: user.name,
              email: user.email,
              profile: user.profilePicture,
              token: accessToken,
            };
          } else {
            console.error("Invalid login response format:", response.data);
            return null;
          }
        } catch (error) {
          console.error(
            "Error during authentication:",
            error.response?.data || error.message
          );
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session?.user) {
        return { ...token, accessType: session.user.accessType };
      }

      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.token = user.token;
        token.profile = user.profile;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.token = token.token;
        session.user.profile = token.profile; // Fixed 'prole' typo
      }
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export default function auth(req, res) {
  return NextAuth(req, res, options);
};
