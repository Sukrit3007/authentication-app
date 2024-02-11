"use client";

import React from 'react'
import {AiFillGithub,AiFillGoogleCircle} from 'react-icons/ai'
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const signup = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup  = async ()=>{

  }

  return (
    <div className='flex justify-center content-center items-center min-h-screen py-2'>
      <Card >

        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">SignUp</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <AiFillGithub className="mr-2 h-4 w-4"/>Github
            </Button>
            <Button variant="outline">
              <AiFillGoogleCircle className="mr-2 h-4 w-4" />Google  
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">UserName</Label>
            <Input 
            id="username" 
            type="text" 
            placeholder="name@example.com"
            value = {user.username}
            onChange ={(e)=> setUser({...user, username: e.target.value})}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
            id="email" 
            type="email" 
            placeholder="name@example.com"
            value ={user.email}
            onChange = {(e)=>setUser({...user, email: e.target.value})}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
            id="password" 
            type="password"  
            placeholder='password'
            value ={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button 
          onClick = {onSignup}
          className="w-full">SignUp</Button>
          <Link href='/login' className='text-sm text-blue-500' >Vist Login Page</Link>
        </CardFooter>
      </Card>
    </div> 
  )
}

export default signup
