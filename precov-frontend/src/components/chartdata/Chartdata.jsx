import './chartdata.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

// const data = [
//     {
//       bulan: 'Januari',
//       kasusriil: 4000,
//       kasuspredik: 2400,
//       amt: 2400,
//     },
//     {
//       bulan: 'Februari',
//       kasusriil: 2400,
//       kasuspredik: 2534,
//       amt: 2400,
//     },
//     {
//       bulan: 'Maret',
//       kasusriil: 2000,
//       kasuspredik: 9800,
//       amt: 2290,
//     },
//     {
//       bulan: 'April',
//       kasusriil: 12780,
//       kasuspredik: 3908,
//       amt: 2000,
//     },
//     {
//       bulan: 'Mei',
//       kasusriil: 1890,
//       kasuspredik: 4800,
//       amt: 2181,
//     },
//     {
//       bulan: 'Juni',
//       kasusriil: 2390,
//       kasuspredik: 3800,
//       amt: 2500,
//     },
//     {
//       bulan: 'Juli',
//       kasusriil: 3490,
//       kasuspredik: 4300,
//       amt: 2100,
//     },
//     {
//       bulan: 'Agustus',
//       kasusriil: 3490,
//       kasuspredik: 4300,
//       amt: 2100,
//     },
//     {
//       bulan: 'September',
//       kasusriil: 7490,
//       kasuspredik: 6300,
//       amt: 2100,
//     },
//     {
//       bulan: 'Oktober',
//       kasusriil: 5490,
//       kasuspredik: 6300,
//       amt: 2100,
//     },
//     {
//       bulan: 'November',
//       kasusriil: 2490,
//       kasuspredik: 3300,
//       amt: 2100,
//     },
//     {
//       bulan: 'Desember',
//       kasusriil: 2490,
//       kasuspredik: 2300,
//       amt: 2100,
//     },
//   ];

const Chartdata = (props) => {
  const [data,setData]= useState([])  
  const loadData = (konstanta)=>{
    // preventDefault();

    // console.log();

    axios.post("http://localhost/api/exponential.php",{
      start:props.start,
      end: props.end,
      type: props.type,
      konst: konstanta
    })
    .then((result)=>{
        setData(result.data);
        const infodata = result.data[result.data.length-2]
        props.setData(Math.round(infodata.mad),infodata.mape.toFixed(2))
        console.log(infodata,"infodata");
    });
  }

    useEffect(()=>{
      loadData(props.konstanta)
    },[props.konstanta])

    useEffect(()=>{
      // console.log(data)
    },[data])
    
  return (
<div className="chartdata">
      <div className="title">kasus terkonfirmasi covid-19</div>
      <ResponsiveContainer >
      <AreaChart data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    {props.withpredic && (
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    )}
    
  </defs>
  <XAxis dataKey="date" stroke="black"/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area type="monotone" dataKey="actual" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  {props.withpredic1 && (
  <Area type="monotone" dataKey="forecast" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />

  )}
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chartdata