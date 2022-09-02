import Chart from "../../components/chart/Chart"
import Chartdata from "../../components/chartdata/Chartdata"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className="homeContainer">
         <Navbar/>
         <div className="widgets">
          <Widget type="user"/>
          <Widget type="terinfeksi"/>
          <Widget type="harian"/>
         </div>
         <div className="charts">
          <Featured/>

          {/* <Chart/> */}
        <Chartdata type="daily" start="2020-03-13" end="2022-05-31" withpredic= {true} withpredic1= {true}/>
         </div>
         {/* <div className="listContainer">
           <div className="listTitle"> lasts newst </div>
         </div> */}
       </div>
    </div>
  )
}

export default Home