import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";


function AddData(){
    let history = useNavigate();
    const [kasus,setKasus] = useState({
        id:"",
        tgl:"",
        jml_kasus:"",
        create_at:"",
        create_by:"",
        update_at:"",
        update_by:"",
    })

    const {id,tgl,jml_kasus,create_at,create_by,update_at,update_by} = kasus;

    const handleChange =(e)=>{
        setKasus({...kasus,[e.target.name]:e.target.value})
    }

    const submitForm = async (e)=>{
        e.preventDefault();

        console.log(kasus);

        await axios.post("http://localhost/api/insertkasus.php",kasus)
        .then((result)=>{
            console.log(result);
            if(result.data.status=='valid'){
                // history('/list-admin');
                history('/data');
            }
            else{
                alert("error");
            }
        });
        
    }

    return (
        <div className="newdata">
        <Sidebar/>
        <div className="newdataContainer">
            <Navbar/>
            <div className="top">
            <h1>
            Add New Data
            </h1>
            </div>
            <div className="bottom">
            <form onSubmit={e => submitForm(e)}>
              <div className="formInput">
                <label >Tanggal</label>
                <input type="Date" name="tgl"  
                value={tgl} onChange={e => handleChange(e)}
                />
              </div>
              <div className="formInput">
                <label >Jumlah Kasus</label>
                <input type="number" placeholder="Jumlah kasus" name="jml_kasus" 
                value={jml_kasus} onChange={e => handleChange(e)}
                />
              </div>
              <button type="submit" name="submit">Send</button>
            </form>

            </div>
        </div>
    </div>
    )
}

export default AddData;