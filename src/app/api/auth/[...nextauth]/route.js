
import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers:[
        CredentialsProvider({
            credentials: {
              email:{ label: "email", type: "text",  required:true, placeholder: "your email"},
              password:{ label: "password", type: "password", required:true, placeholder: "your password" }
            },
            async authorize(credentials) {
              const {email, password} = credentials
                   if(!credentials){
                    return null
                   }

                   if(email){
                      const db = await connectDB()
                      // const currentUser = users.find((user)=> user.email === email)
                      const currentUser =await db.collection('users').findOne({email})
                      if(currentUser){
                         if(currentUser.password === password){
                          return {...currentUser}
                         }
                      }
                   }
                   return null
                   
             }
        })
    ],
    callbacks:{
        async session({ session, token }) {
            session.user.type = token.type
            return session
          },
          async jwt({ token, account, user }) {
            if (account) {
              token.type = user.type
            }
            return token
          }
    }
}
const handler = NextAuth(authOptions)

const users = [
    {
        id: 1,
        name: 'nafis',
        email: "n@gmail.com",
        type:'admin',
        password: "password",
    },
    {
        id: 2,
        name: "Zihad",
        email: "z@gmail.com",
        type:'user',
        password: "password"
    }
]

export { handler as GET, handler as POST }

