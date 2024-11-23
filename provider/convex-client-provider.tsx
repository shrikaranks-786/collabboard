"use client"
import { ClerkProvider , useAuth} from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import {AuthLoading,Authenticated,ConvexReactClient} from "convex/react"
import { Loading } from "@/components/auth/loading"

interface convexclientproviderprops{
    children : React.ReactNode
}

const convexurl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexurl);

export const ConvexClientProvider = ({children , } : convexclientproviderprops) =>{
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading/>
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}
