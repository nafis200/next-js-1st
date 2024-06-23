
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy: 'jwt'
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
                      const currentUser = users.find((user)=> user.email === email)
                      if(currentUser){
                         if(currentUser.password === password){
                          return currentUser
                         }
                      }
                   }
                   return null
                   
             }
        })
    ],
}
const handler = NextAuth(authOptions)

const users = [
    {
        id: 1,
        name: 'nafis',
        email: "n@gmail.com",
        password: "password",
    },
    {
        id: 2,
        name: "Zihad",
        email: "z@gmail.com",
        password: "password"
    }
]

export { handler as GET, handler as POST }

