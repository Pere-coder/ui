'use client'

import {useEffect, useState} from 'react'
import { supabase } from "@/lib/supabase"


export default function Page() {
    const [blogs, setBlogs] = useState([])
 

    useEffect(() => {
        const getData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            const {data} = await supabase.from("blog").select().eq('id', user.id)
            setBlogs(data)
            
        }

        getData()
        
    }, [])

    return ( 
        <div className="mt-20 ">
            {Array.isArray(blogs) && blogs.length > 0 ? (
                blogs.map((item, index) => (
                    <div key={index} className="flex gap-2">
                        <h1>{item?.firstname} </h1> 
                        <p>{item?.blogtitle}</p>
                    </div>
                ))
            ) : (
                <p>Loading blogs...</p>
            )}
        </div>
    )
}