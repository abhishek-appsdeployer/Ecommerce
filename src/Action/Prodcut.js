import { type } from "@testing-library/user-event/dist/type";

export function Prodcut(name)
{
    console.log(name)
    return(
        {
            type:"add",
            payload:name
            
        }
    )
}