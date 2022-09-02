import './main.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from "react-router-dom";
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import axios from 'axios';
import Chartdata from '../../components/chartdata/Chartdata';
const Main = () => {

//   const submitForm = (e)=>{
//     e.preventDefault();

//     // console.log();

//     axios.post("http://localhost/api/exponential.php",{
//       start:"2022-05-01",
//       end: "2022-06-01",
//       type: "weekly"
//     })
//     .then((result)=>{
//         console.log(result);
       
//     });
    
// }
  return (
    <div className='main'>
      <div className="top">
            <Link to={"/"} style={{textDecoration:"none"}}>
            <span className="logo">Precov</span>
            </Link>  
            <Link to={"/login"} style={{textDecoration:"none"}}>
            <span className="login1">Login</span>
            </Link>
        </div>
        <hr />
      <div className="mainContainer">
        <div className="charts">
          <Featured/>
          {/* <Chart/> */}
          <Chartdata type="daily" start="2020-03-13" end="2022-05-31" withpredic= {true} withpredic1= {true}/>
          {/* <button onClick={submitForm}>enter</button> */}
        </div>
        
      </div>
      
    </div>
  )
}

export default Main