import './data.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Datakasus from '../../components/datakasus/Datakasus'
import Chartdata from '../../components/chartdata/Chartdata'
import Featured from "../../components/featured/Featured"
import Chart from '../../components/chart/Chart'
import ListData from "../../components/apidata/ListData";
const Data = () => {
  return (
    <div className='data'>
      <Sidebar/>
      <div className="dataContainer">
        <Navbar/>
        <div className="charts">
          <ListData />
          <Chartdata type="daily" start="2020-03-13" end="2022-05-01" withpredic= {true} withpredic1= {true}/>
          {/* <div className="left">
          <Datakasus/>
          </div>
          <div className="right">
          <Chart/>
          </div> */}
        </div>
        {/* <div className="bot"></div> */}
      </div>
    </div>
  )
}

export default Data