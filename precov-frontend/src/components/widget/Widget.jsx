import "./widget.scss"
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Label } from "recharts";

const Widget = ({ type }) => {
  let data;

  //temp
  // const jml_users= 18
  // const jml_terinfeksi = 25000
  // const jml_harian = 54
  const diff = 25

  const [jumlahUser, setJumlahUser] = useState(0);
  const [jumlahInfeksi, setJumlahInfeksi] = useState(0);
  const [hariIni, setHariIni] = useState(0);
  useEffect(() => {
    jmlUsers() 
    jmlInfeksis()
    hariInis()
  }, [])
 

  const jmlUsers =  async () =>{
    const result = await axios.get("http://localhost/api/jmlusers.php");
    setJumlahUser(result.data.jumlah_users);
     console.log(result);
    // console.log(jumlahUser);
    // console.log("aaa");
  }

  const jmlInfeksis = async () =>{
    const result = await axios.get("http://localhost/api/jmlinfeksis.php");
    setJumlahInfeksi(result.data.jumlah_infeksis);
    console.log(result);
  }

  const hariInis = async () =>{
    const result = await axios.get("http://localhost/api/jmlhariinis.php");
    setHariIni(result.data.hari_inis);
    console.log(result);
  }


    switch(type){
      case "user":
        data={
          
          title:"USERS",
          isMoney: false,
          count: jumlahUser,
          link: (<div style={{cursor: "pointer"}}><Link to="/users" style={{textDecoration:"none"}}>see all users </Link></div>),
          icon: (
            <PersonOutlinedIcon
              className="icon" 
              style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)",
              }}
            />
          ),
        };
        break;
        case "terinfeksi":
        data={
          title:"TERINFEKSI",
          isMoney: false,
          count: jumlahInfeksi,
          link: (<div style={{cursor: "pointer"}}><Link to="/data" style={{textDecoration:"none"}}>view all data terinfeksi </Link></div>),
          icon: (
            <CoronavirusIcon
              className="icon" 
              style={{
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
        case "harian":
        data={
          title:"HARI INI",
          isMoney: false,
          count: hariIni,
          link: (<div style={{cursor: "pointer"}}><Link to="/data" style={{textDecoration:"none"}}>see all data</Link></div>),
          icon: (
            <CalendarTodayIcon
              className="icon" 
              style={{
                color: "purple",
                backgroundColor: "rgba(128, 0, 128, 0.2)",
              }}
            />
          ),
        };
        break;
      default:
        break;

    }
  
  
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            {/* <label htmlFor="">asdasd</label> */}
            <span className="counter">{data.isMoney && "$"}{data.count}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
               {/* <KeyboardArrowUpRoundedIcon/>
                {diff} % */}
            </div>
            {data.icon}
        </div>
        
    </div>
  )
}

export default Widget