import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    bulan: 'Januari',
    kasusriil: 4000,
    kasuspredik: 2400,
    amt: 2400,
  },
  {
    bulan: 'Februari',
    kasusriil: 2400,
    kasuspredik: 2534,
    amt: 2400,
  },
  {
    bulan: 'Maret',
    kasusriil: 2000,
    kasuspredik: 9800,
    amt: 2290,
  },
  {
    bulan: 'April',
    kasusriil: 12780,
    kasuspredik: 3908,
    amt: 2000,
  },
  {
    bulan: 'Mei',
    kasusriil: 1890,
    kasuspredik: 4800,
    amt: 2181,
  },
  {
    bulan: 'Juni',
    kasusriil: 2390,
    kasuspredik: 3800,
    amt: 2500,
  },
  {
    bulan: 'Juli',
    kasusriil: 3490,
    kasuspredik: 4300,
    amt: 2100,
  },
  {
    bulan: 'Agustus',
    kasusriil: 3490,
    kasuspredik: 4300,
    amt: 2100,
  },
];
const Chart = () => {
  return (
    <div className="chart">
      <div className="title">kasus terkonfirmasi covid-19</div>
      <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="bulan" stroke="black"/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area type="monotone" dataKey="kasusriil" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  {/* <Area type="monotone" dataKey="kasuspredik" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart