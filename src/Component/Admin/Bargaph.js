import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const Bargaph = () => {
    const data = [
        {name: 'JAN', students: 400},
        {name: 'FEB', students: 700},
        {name: 'MAR', students: 200},
        {name: 'APR', students: 1000},
        {name: 'MAY', students: 800},
        {name: 'JUN', students: 100},
        {name: 'JUL', students: 250},
        {name: 'AUG', students: 450},
        {name: 'SEP', students: 680}
      ];
  return (
    <div>
     <BarChart width={480} height={300} data={data}  padding-right={10}>
    <Bar dataKey="students" fill="red" />
    {/* <CartesianGrid stroke="black" /> */}
    <XAxis dataKey="name" stroke="green"  />
    <YAxis stroke="green"  />
  </BarChart>
      
    </div>
  )
}

export default Bargaph
