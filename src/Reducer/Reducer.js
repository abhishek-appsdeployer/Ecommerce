const initialstate=0
const changeNumber=(state=initialstate,action)=>{
    switch (action.type){
        case "increment":
            return state +1
            // {
            //     return{
                // state +1
            //         id:id
                  

            //     }
            // }
            // 
          
            
            
           
        case "decrement":
            return state-1;
        default: return state;
    }


}
export default changeNumber;