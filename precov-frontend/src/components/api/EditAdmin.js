import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function EditAdmin(){
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
   
    const handleChange =(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
    }

    const updateForm = async (e)=>{
        e.preventDefault();

        console.log(admin);

        await axios.post("http://localhost/api/updateadmin.php",admin)
        .then((result)=>{
            console.log(result);
            if(result.data.status=='valid'){
                // history('/list-admin');
                history('/users');
            }
            else{
                alert("error");
            }
        });
    }
        const loadUsers =  async () =>{
            // console.log('AAA'+id);
            const result = await axios.get("http://localhost/api/editadmin.php?id="+id);
            setAdmin(result.data);
            
            // console.log(result);
        }
    return(
        <div className="addadmin">
            <Sidebar/>
            <div className="addadminContainer">
            <Navbar/>
            <div className="top">
            <h1>
            Edit users 
          </h1>
            </div>
            <div className="bottom">
            <div className="right">

        <form onSubmit={e => updateForm(e)}>
        {/* <div className="row">
            <div className="col-md-12">
                <h1> Add Admin</h1>
            </div>
        </div> */}
        {/* <div className="row">
            <div className="col-md-6">Id</div>
            <div className="col-md-6">
                <input type="text" name="id" className="form-control"
                value={id} onChange={e => handleChange(e)}
                />
            </div>
        </div> */}
        {/* <div className="formInput">
                <label >Id</label>
                <input type="text" placeholder="Id" name="id" className="form-control" 
                value={id} onChange={e => handleChange(e)}
                />
        </div> */}
        <div className="formInput">
                <label >Nama</label>
                <input type="text" placeholder="Nama" name="nama" className="form-control" 
                value={nama} onChange={e => handleChange(e)}
                />
        </div>
        {/* <div className="row">
            <div className="col-md-6">Nama</div>
            <div className="col-md-6">
                <input type="text" name="nama" className="form-control"
                value={nama} onChange={e => handleChange(e)}
                />
            </div>
        </div> */}
        <div className="formInput">
                <label >username</label>
                <input type="text" className="form-control" name="username" placeholder="Username"
                value={username} onChange={e => handleChange(e)} 
                />
              </div>
        {/* <div className="row">
            <div className="col-md-6">Username</div>
            <div className="col-md-6">
                <input type="text" name="username" className="form-control"
                value={username} onChange={e => handleChange(e)}
                />
            </div>
        </div> */}
        {/* <div className="row">
            <div className="col-md-6">Password</div>
            <div className="col-md-6">
                <input type="text" name="password" className="form-control"
                value={password} onChange={e => handleChange(e)}
                />
            </div>
        </div> */}
        <div className="formInput">
                <label >Password</label>
                <input type="text" className="form-control" name="password" placeholder="password"
                value={password} onChange={e => handleChange(e)} 
                />
              </div>
        
        {/* <div className="row">
            <div className="col-md-6">Email</div>
            <div className="col-md-6">
                <input type="text" name="email" className="form-control"
                value={email} onChange={e => handleChange(e)}
                />
            </div>
        </div> */}
        <div className="formInput">
                <label >Email</label>
                <input type="text" className="form-control" name="email" placeholder="Email"
                value={email} onChange={e => handleChange(e)} 
                />
              </div>
        {/* <div className="row">
            <div className="col-md-6">Region</div>
            <div className="col-md-6">
                <input type="text" name="region" className="form-control"
                value={region} onChange={e => handleChange(e)}
                />
            </div>
        </div> */}
        <div className="formInput">
                <label >Region</label>
                <input type="text" className="form-control" name="region" placeholder="Region"
                value={region} onChange={e => handleChange(e)} 
                />
        </div>
        {/* <div className="row">
            <div className="col-md-6">Phone</div>
            <div className="col-md-6">
                <input type="text" name="no_hp" className="form-control"
                value={no_hp} onChange={e => handleChange(e)}
                />
            </div>
        </div> */}
        <div className="formInput">
                <label >Phone</label>
                <input type="text" className="form-control" name="no_hp" placeholder="Telephone"
                value={no_hp} onChange={e => handleChange(e)} 
                />
        </div>
        {/* <div className="form"> */}
            {/* <div className="col-md-12"> */}
                <button type="submit" name="submit">Update Admin</button>
            {/* </div> */}
        {/* </div> */}

        </form>
        </div>
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
 
export default EditAdmin;