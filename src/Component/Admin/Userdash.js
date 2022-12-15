import React from 'react'
// import User from "./UserData"
const Userdash = () => {
    const User=[
        {name:"Abhishek",
        email:"abhishek123654@gmaal.com",
        country:"India"
    },
    {name:"Abhishek",
    email:"abhishek123654@gmaal.com",
    country:"India"
    },
    
    {name:"Abhishek",
    email:"abhishek123654@gmaal.com",
    country:"India"
    },
    
    {name:"Abhishek",
    email:"abhishek123654@gmaal.com",
    country:"India"
    },
    
    {name:"Abhishek",
    email:"abhishek123654@gmaal.com",
    country:"India"
    },
    
    {name:"Abhishek",
    email:"abhishek123654@gmaal.com",
    country:"India"
    },
    
    {name:"Abhishek",
    email:"abhishek123654@gmaal.com",
    country:"India"
    },
    
    
    ]
    let i=0
  return (
    <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">COUNTRY</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    {
       
        User.map((e)=>{
            return(
                <>
                    <tr>
                        <td>{i++}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.country}</td>
                        
                    </tr>
                </>
            )
        })
    }
    </tbody>
    </table>

  
      
    </div>
  )
}

export default Userdash
