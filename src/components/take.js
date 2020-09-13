import React from 'react'

export default function Take() {
    const value=localStorage.getItem("items");
    if(value==null){
       var items=[]
    }else{
        items=JSON.parse(value)
    }
    console.log(items)
    return (
        <>
        hi
            {
                (items.map((item)=>(
                    <h1>{item.question}</h1>
                 )))
            }
        </>
    )
}
