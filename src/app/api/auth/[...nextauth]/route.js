
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    session:{
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            credentials: {
              email: { label: "email", type: "text",  required:true, placeholder: "your email"},
              password: { label: "Password", type: "password", required:true, placeholder: "your password" }
            },
            async authorize(credentials) {
              if (!credentials) {
                return null
              } else {
                return true
              }
            }
        })
    ],
})

export { handler as GET, handler as POST }

