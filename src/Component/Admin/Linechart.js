import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Quarter 1', uv: 350, pv: 2400, amt: 2400},

{name: 'Quarter 2', uv: 300, pv: 2400, amt: 2400},
{name: 'Quarter 3', uv: 200, pv: 2400, amt: 2400},
{name: 'Quarter 4', uv: 300, pv: 2000, amt: 400}, ];
const Linechart = () => {
  return (
    <div>
       <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="red" />
    <CartesianGrid stroke="white" strokeDasharray="" />
    <XAxis dataKey="name" stroke='green' />
    <YAxis stroke='green' />
  </LineChart>
    </div>
  )
}

export default Linechart
