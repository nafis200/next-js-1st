"use client"
import { useEffect, useState } from "react";

const Meals = () => {
    const [search,setSearch] = useState("")
    const [meals,setMeals] = useState("")

    const leadData = async()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?email=${search}`)
        const data = await res.json()
        setMeals(data)
        return data
    }

    const handler = (e)=>{
         setSearch(e.target.value)
    }
    // useEffect(()=>{
    //    leadData()
    // },[search])
    console.log(meals,'search')
    return (
        <div>
            <div className="mt-10">
                <input onChange={handler} className="p-4 outline-none border-transparent text-slate-700" type="text" placeholder="Search meals" />
                <button onClick={leadData} className="btn bg-red-400 p-4">Search</button>
            </div>
        </div>
    );
};

export default Meals;