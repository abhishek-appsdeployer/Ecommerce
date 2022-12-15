

const initialstate=0
const id=0
const getId=(state=id,action)=>{
    switch (action.type){
        
        case "gets":
            return action.payload
           
          
            
            
           
       
        default: return action.type;
    }
    // if (action.type==="get")
    // {
    //     return action.payload;
    // }
    // return id;


}
export default getId;