"use client"
import { isLogged } from '@/app/utils/authUtils'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Account = () => {
    const router = useRouter();
    useEffect(()=>{
        if(!isLogged()){
            router.replace("/pages/auth")
        }
    },[router])
  return (
    <div>
      
    </div>
  )
}

export default Account