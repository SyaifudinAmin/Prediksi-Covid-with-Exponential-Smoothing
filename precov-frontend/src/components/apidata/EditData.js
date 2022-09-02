import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function EditData(){
    let history = useNavigate();
    const { id } = useParams();

    //console.log('AA'+id);
    const [kasus,setKasus] = useState({

        tgl:"",
        jml_kasus:"",
        // password:"",
        // email:"",
        // region:"",
        // no_hp:"",
    })

    useEffect(()=>{
        loadData();
    },[])

    const {tgl,jml_kasus} = kasus;

    const handleChange =(e)=>{
        setKasus({...kasus,[e.target.name]:e.target.value})
    }

    const updateForm = async (e)=>{
        e.preventDefault();

        console.log(kasus);

        await axios.post("http://localhost/api/updatekasus.php",kasus)
        .then((result)=>{
            console.log(result);
            if(result.data.status=='valid'){
                // history('/list-admin');
                history('/data');
                // alert("sekses");
            }
            else{
                alert("data input error");
            }
        });
    }

    const loadData =  async () =>{
         //console.log('AAA'+id);
        const result = await axios.get("http://localhost/api/editkasus.php?id="+id);
        setKasus(result.data);
         //console.log(result);
    }
    return(
        <div className="newdata">
        <Sidebar/>
        <div className="newdataContainer">
            <Navbar/>
            <div className="top">
            <h1>
            Edit Data Kasus
            </h1>
            </div>
            <div className="bottom">
            <form onSubmit={e => updateForm(e)}>
              <div className="formInput">
                <label >Tanggal</label>
                <input type="Date" name="tgl"  
                value={tgl} onChange={e => handleChange(e)}
                />
              </div>
              <div className="formInput">
                <label >Jumlah Kasus</label>
                <input type="text" placeholder="Jumlah kasus" name="jml_kasus" 
                value={jml_kasus} onChange={e => handleChange(e)}
                />
              </div>
              <button type="submit" name="submit">Update Data</button>
            </form>

            </div>
        </div>
    </div>
    )
}

export default EditData;