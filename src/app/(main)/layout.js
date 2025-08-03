"use client"
import { Authenticated } from "convex/react";

export default function RootLayout({children}){
    return (
        <Authenticated>
            <div className="dashboard-layout">{children}</div>
        </Authenticated>
  
)
}