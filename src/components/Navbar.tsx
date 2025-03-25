import Link from 'next/link'
import React from 'react'
import logoImg from '../../public/logo.png'
import Image from 'next/image'
import { auth,signOut,signIn } from '@/auth'

export default async function Navbar() {
    //get user from the session
    const session=await auth()
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work0-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src={logoImg} alt="" width={174} height={30}/>
            </Link>

            <div className="flex items-center gap-5 text-black">
                {session && session?.user?(
                    <>
                    <Link href='/startup/create'>
                    <span>Create</span>
                    </Link>
                    <form action={async()=>{
                        "use server"
                        await signOut({redirectTo:"/"})
                    }}>
                    <button type='submit'>
                        <span>Logout</span>
                    </button>
                    </form>
                    <Link href={`/user/${session?.id}`}>
                        <span>{session?.user?.name}</span>
                    </Link>
                    </>
                ):(
                    <form action={async()=>{
                        "use server"
                        await signIn('github')
                    }}>
                        <button type='submit'>
                            <span>Login</span>
                        </button>
                    </form>
                )}
            </div>
        </nav>
    </div>
  )
}
