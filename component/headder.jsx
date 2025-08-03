"use client"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Button from "./ui/button/Button"
import { useStoreUser } from "../hooks/use-store-user"
import {BarLoader} from "react-spinners"
import Link from "next/link"
import { Authenticated, Unauthenticated, useMutation } from "convex/react"

export default function () {
    const {isLoading}=useStoreUser()
    
    return (<>
    <div className="nav-bar">
        <div className="nav-container">
            <Link href="/" ><div className="nav-logo">SPLITwise</div></Link>
            <div className="nav-action">
                <Link href="#featers"><div>Featers</div></Link>
                <Link href="#How-It-Works"><div>How It Works</div></Link>
            </div>
            <div className="nav-auth">
                <Unauthenticated>
                    <SignInButton><Button variant="outline" width="100px">Sign In</Button></SignInButton>
                    <SignUpButton><Button 
                                    width="150px" 
                                    backgroundColor="rgb(75, 168, 75)"
                                    borderColor="rgb(75, 168, 75)"
                                    boxShadow="0 0 5px rgb(75, 168, 75)">Get Started</Button></SignUpButton>
                </Unauthenticated>
                <Authenticated>
                    <Link href="/dashboard"><Button variant="outline" borderColor="green">Dashboard</Button></Link>
                    <UserButton/>
                </Authenticated>
            </div>
        </div>
         {isLoading&&<BarLoader width="100%" height={5} loading={true} color="#36d7d7"/>} 
        </div>
    </>)
}