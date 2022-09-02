import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {

  const [jumlahInfeksi, setJumlahInfeksi] = useState(0);
  const [hariIni, setHariIni] = useState(0);
  const [jmlKemarin, setJumlahKemarin] = useState(0);
  const [jmlBesok, setJmlBesok] = useState(0);
  const [jmlHariIni, setJmlHariIni] = useState(0);
  const [jmlKemarin1, setJmlKemarin] = useState(0);

  useEffect(() => {
    getTotal()
    hariInis()
    jmlInfeksis()
    jmlKemarins()
  }, [])


  const getTotal = () =>{
    axios.post("http://localhost/api/exponential.php",{
      start:"2022-04-22",
      end: "2022-06-01",
      type: "daily",
    })
    .then((result)=>{
      const besok = Math.round(result.data[result.data.length - 1].forecast)
      const hariini = Math.round(result.data[result.data.length - 2].forecast)
      const kemarin = Math.round(result.data[result.data.length - 3].forecast)
      setJmlBesok(besok)
      setJmlHariIni(hariini)
      setJmlKemarin(kemarin)

    });
  }

  const jmlKemarins = async () =>{
    const result = await axios.get("http://localhost/api/jmlkemarins.php");
    setJumlahKemarin(result.data.jumlah_kemarins);
    console.log(result);
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

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Informasi Pandemi</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
      <p className="tittle">total Terinfeksi</p>
        <p className="amount">{jumlahInfeksi}</p>
        <div className="featuredChart">
        {/* circular proges bar */}
        {/* <div className="featuredChart">
          <div className="itemini">
          <p className="konst">konstanta</p>
        
        <input className="input"></input>
        
        <button className="btn"> Proses</button>
          </div> */}
        </div>
        
        {/* <p className="desc">previous</p> */}
        <div className="summary">
          <div className="item">
            <div className="itemTitle">kemarin</div>
            <div className="itemResult negative">
            {/* <KeyboardArrowDownIcon fontSize="small"/> */}
              <div className="resultAmount"> {jmlKemarin1} 
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">hari ini</div>
            <div className="itemResult negative">
            {/* <KeyboardArrowDownIcon fontSize="small"/> */}
              <div className="resultAmount"> {jmlHariIni} 
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">besok</div>
            <div className="itemResult positive">
            {/* <KeyboardArrowUpIcon fontSize="small"/> */}
              <div className="resultAmount">  {jmlBesok}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured