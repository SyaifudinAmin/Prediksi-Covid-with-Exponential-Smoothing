import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./showadmin.scss";


function ShowAdmin(){
    let history = useNavigate();
    const { id } = useParams();

    // console.log('AA'+id);
    const [admin,setAdmin] = useState({

        nama:"",
        username:"",
        password:"",
        email:"",
        region:"",
        no_hp:"",
    })

    useEffect(()=>{
        loadUsers();
    },[])

    const {nama,username,password,email,region,no_hp} = admin;
   
    
        const loadUsers =  async () =>{
            // console.log('AAA'+id);
            const result = await axios.get("http://localhost/api/editadmin.php?id="+id);
            setAdmin(result.data);
            // console.log(result);
        }


    return(
        <div className="showadmin">
            <Sidebar/>
            <div className="showadminContainer">
            <Navbar/>
            <div className="top">
                <div className="left">
                <Link className="editButton" style={{textDecoration:"none"}} to={`/edit-admin/${admin.id}`}>Edit</Link>
                {/* <div className="editButton">edit</div> */}
            <h1 className="title">information</h1>
            <div className="item">
              <img 
                src="https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg" 
                alt=""
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">{nama}</h1>
                <div className="detailItem">
                  <span className="itemKey">Username</span>
                  <span className="itemValue">{username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email</span>
                  <span className="itemValue">{email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Region</span>
                  <span className="itemValue">{region}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">{no_hp}</span>
                </div>
              </div>
            </div>
                </div>
                <div className="right">

                </div>
            </div>
            <div className="bottom">

            </div>
            </div>
        </div>
        // <form onSubmit={e => updateForm(e)}>
        // <div className="row">
        //     <div className="col-md-12">
        //         <h1> Edit Admin</h1>
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-6">Id</div>
        //     <div className="col-md-6">
        //         <input type="text" name="id" className="form-control"
        //         value={id} onChange={e => handleChange(e)}
        //         />
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-6">Nama</div>
        //     <div className="col-md-6">
        //         <input type="text" name="nama" className="form-control"
        //         value={nama} onChange={e => handleChange(e)}
        //         />
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-6">Username</div>
        //     <div className="col-md-6">
        //         <input type="text" name="username" className="form-control"
        //         value={username} onChange={e => handleChange(e)}
        //         />
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-6">Password</div>
        //     <div className="col-md-6">
        //         <input type="text" name="password" className="form-control"
        //         value={password} onChange={e => handleChange(e)}
        //         />
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-6">Email</div>
        //     <div className="col-md-6">
        //         <input type="text" name="email" className="form-control"
        //         value={email} onChange={e => handleChange(e)}
        //         />
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-6">Region</div>
        //     <div className="col-md-6">
        //         <input type="text" name="region" className="form-control"
        //         value={region} onChange={e => handleChange(e)}
        //         />
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-6">Phone</div>
        //     <div className="col-md-6">
        //         <input type="text" name="no_hp" className="form-control"
        //         value={no_hp} onChange={e => handleChange(e)}
        //         />
        //     </div>
        // </div>
        // <div className="row">
        //     <div className="col-md-12">
        //         <input type="submit" name="submit" value="EditAdmin" className="btn btn-primary"/>
        //     </div>
        // </div>

        // </form>
    )
}
 
export default ShowAdmin;