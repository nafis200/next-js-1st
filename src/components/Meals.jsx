"use client"
import { useEffect, useState } from "react";

const Meals = () => {
    const [search,setSearch] = useState("")
    const [meals,setMeals] = useState([])

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
            <div>
                {
                    meals?.map((meal)=>(
                        <div key={meal.id}>
                            <h1>{meal.postId}</h1>
                            <h1>{meal.email}</h1>
                            <h1>{meal.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Meals;