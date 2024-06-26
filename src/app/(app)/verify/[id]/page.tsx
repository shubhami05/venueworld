'use client'

import { toast } from '@/components/ui/use-toast';
import { User } from '@/model/User';
import axios from 'axios';
import { Loader2Icon} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const navigate = useRouter();
    const params = useParams();
    const [userData,setUserData] = useState<User>()
    if (params.id===undefined) { 
        navigate.replace('/') 
        toast({
            title: "Something went wrong !",
            description: "Please try again later!",
            variant:'destructive'
          })
    }
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetchUserDetails(params.id)
    }, [])

    const fetchUserDetails = async (id: any) => {
        try {
            setIsLoading(true);
            const response = await axios.post("/api/users/getUserData",{id});
            setUserData(response.data.userData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false);
        }
    }
    return (
        <main className='min-h-screen flex justify-center items-center'>
            {
                isLoading?(
                    <div>
                        <Loader2Icon className='h-14 w-14 mr-2 animate-spin'/>
                    </div>
                ):(
                    <div>
                    Hello {params.id}, {userData?.firstname} {userData?.lastname}
                    </div>
                )
            }
           
        </main>
    )
}

export default page
