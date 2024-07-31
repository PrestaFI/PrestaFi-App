

"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export default function LoginComponent() {

  const router = useRouter();

  const handleDisconnect = () => {
    // Handle the disconnect event here
    console.log("Wallet disconnected");
    router.push('/');
  };  

  const handleLogin = () => {
    router.push('/send-money');
  };  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Login to your account</CardTitle>
          <CardDescription className="mt-2">
            <a href="#" className="text-primary">
              Or register for a new account
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Button className="w-full bg-[#7c25cc] text-white" onClick={handleLogin}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}