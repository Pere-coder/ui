"use client"
import { supabase } from "@/lib/supabase";
import { useState } from "react"


export default function Card() {
  const [dataz, setData] = useState({
    'firstname': '',
    'lastname': '',
    
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...dataz, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data: { user } } = await supabase.auth.getUser();
    const newData = {...dataz, id: user.id};
    const {data, error} = await supabase.from("blog").insert(newData)
    
    if (!error){
      console.log(data)
    }else{
      console.log(error)
    }
  }

  return (
    
    <>
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
        <input type="text" id="firstname" name="firstname"  onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="firstname" required />
      </div>
      <div class="mb-5">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
        <input type="text" id="lastname" name="lastname" onChange={handleChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lastname" required />
      </div>
      <button onClick={handleSubmit} type="submit" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

    </>

      )
    }