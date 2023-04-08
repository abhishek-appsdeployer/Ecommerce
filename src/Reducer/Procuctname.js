import React, { useState, } from 'react'
const start=[]
const Productname=(state=start,action)=>{
    
    switch(action.type)
    {
        case "add":{
            console.log("in the reduceer",action.payload)
            // const data ={name:action.payload}
            console.log(state+action.payload)
            
            return [...state,action.payload]
           

        }
        default: return state

}
}
export default Productname;