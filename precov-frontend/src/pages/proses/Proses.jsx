import "./proses.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Chartdata from '../../components/chartdata/Chartdata'
import FeaturedProses from "../../components/featuredproses/FeaturedProses"
import { useState } from "react"


const Proses = () => {

  const [konstanta, setKonstanta] = useState("");
  const [infoData, setInfoData] = useState({
    mad:0,
    mape:0
  })
  const handleOnProses = (konst) => {
    setKonstanta(konst);
  }
  const handlesetData = (mad,mape) => {
    setInfoData({
      mad:mad,
      mape:mape
    })
  } 
  return (
    <div className="proses">
      <Sidebar/>
      <div className="prosesContainer">
        <Navbar/>

        <div className="charts">
          {/* <Featured/> */}
          <FeaturedProses onProses={handleOnProses} mad={infoData.mad} mape={infoData.mape} />
          <Chartdata konstanta={konstanta} setData={handlesetData} type="daily" start="2020-03-13" end="2022-05-31" withpredic= {true} withpredic1= {true}/>
         </div>
      </div>
    </div>
    
  )
}

export default Proses