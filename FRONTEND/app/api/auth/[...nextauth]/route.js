import {NextAuth} from 'next-auth';
import {GitHubProvider} from 'next-auth/providers/github';
import {CredentialsProvider} from 'next-auth/providers/credentials';



export const OPTIONS = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ,
            clientSecret: process.env.GITHUB_SECRET ,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "soham", password: "123" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}
const handler = NextAuth(OPTIONS)
export { handler as GET, handler as POST }