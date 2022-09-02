import "./featuredproses.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const FeaturedProses = (props) => {

  const [konstanta, setKonstanta] = useState("");
  const [infoTotal, setInfoTotal] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0
  })

  const handleOnChange = (e) => {
    setKonstanta(e.target.value)
   }

   const getTotal = (type,konst = undefined) =>{
    axios.post("http://localhost/api/exponential.php",{
      start:"2022-04-22",
      end: "2022-06-01",
      type: type,
      konst: konst
    })
    .then((result)=>{
      setInfoTotal((prev) => ({
        ...prev,
        [type]: Math.round(result.data[result.data.length - 1].forecast)
      }))
        
    });

    
  }
  useEffect(()=>{
    ["daily","weekly","monthly"].forEach((type)=>{
     getTotal(type);
    })
   },[])

   const handleProses =() => {
    ["daily","weekly","monthly"].forEach((type)=>{
      getTotal(type,konstanta);
    })
    // alert("tester")
    props.onProses(konstanta)
   }

  return (
    <div className="featuredproses">
      <div className="top">
        <h1 className="title">Testing Data</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredprosesChart">
            <div className="konst">

            <p className="labelkonst">Input Konstanta</p>
            <input type="number" step={0.01} max={1} min={0.01} placeholder={0}
            value={konstanta} onChange={handleOnChange} />
            </div>
            <div className="btn_pos">
                <button className="button_proses" onClick={handleProses}>Proses</button>
            </div>

        {/* <div className="featuredChart">
          <div className="itemini">
          <p className="konst">konstanta</p>
        
        <input className="input"></input>
        
        <button className="btn"> Proses</button>
          </div> */}
        </div>
        <div className="jummary">
          <div className="item">
            <div className="itemTitle">MAPE</div>
            <div className="itemResult negative">
            {/* <KeyboardArrowDownIcon fontSize="small"/> */}
              <div className="resultAmount"> {props.mape}% 
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">MAD</div>
            <div className="itemResult negative">
            {/* <KeyboardArrowDownIcon fontSize="small"/> */}
              <div className="resultAmount"> {props.mad} 
              </div>
            </div>
          </div>
         
        </div>
        <p className="desc">Jumlah Kasus Hasil Prediksi</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">harian</div>
            <div className="itemResult negative">
            {/* <KeyboardArrowDownIcon fontSize="small"/> */}
              <div className="resultAmount">{infoTotal.daily} 
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">mingguan</div>
            <div className="itemResult negative">
            {/* <KeyboardArrowDownIcon fontSize="small"/> */}
              <div className="resultAmount"> {infoTotal.weekly} 
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">bulanan</div>
            <div className="itemResult positive">
            {/* <KeyboardArrowUpIcon fontSize="small"/> */}
              <div className="resultAmount"> {infoTotal.monthly} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProses