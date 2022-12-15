import React,{useState,useEffect} from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
const GetProdocut = () => {
    const [post, setPost] = useState([]);
 
useEffect(() => {
    




    const dbRef = ref(getDatabase());
    get(child(dbRef, `Addproduct/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });


    // fetch(`https://ecom-ce32a-default-rtdb.firebaseio.com/Addproduct.json`)
    //   .then((response) => response.json())
    //   .then((actualData) => 
    //   {
    //     console.log(actualData)
    //     setPost(actualData)
    //   }
    //   )
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  }, []);
  return (
    <div>
     <h1> GetProdocut</h1>
     {/* {
        post.map((e)=>{
            return(
                <>
                    <h2>{e.price}</h2>
                </>
            )
        })
     } */}

    </div>
  )
}

export default GetProdocut
