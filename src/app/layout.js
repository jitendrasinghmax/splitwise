import "./globals.css";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "../../component/convexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Headder from "../../component/headder";

const inter=Inter({subsets:["latin"]})

export const metadata = {
  title: "Expence",
  description: "The Smartest Way To Split Expance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        <ClerkProvider>
          <ConvexClientProvider>
            <Headder></Headder>
          <div style={{width:"100%",minHeight:"100vh",paddingTop:"41px"}}>
            {children}
          </div>
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
