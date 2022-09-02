import React, { Component }from "react";

import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./new.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Construction } from "@mui/icons-material";

const New = () => {
  
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>
            Add New users 
          </h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img 
            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
            alt="" />
          </div> */}
          <div className="right">
            <form action="">
            {/* <div className="formInput">
                <label htmlFor="file">image: <DriveFolderUploadIcon className="icon"/></label>
                <input type="file"  id="file" style={{display:"none"}}/>
              </div> */}
              <div className="formInput">
                <label >Nama</label>
                <input type="text" placeholder="Nama" 
                //value={this.state.nama}
                // onChange={this.onChangeNama}
                />
              </div>
              <div className="formInput">
                <label >username</label>
                <input type="text" className="form-control" placeholder="Username" 
                //  value={this.state.username}
                // onChange={this.onChangeUsername}
                />
              </div>
              <div className="formInput">
                <label >Password</label>
                <input type="password" placeholder="Email" 
                // value={this.state.password}
                // onChange={this.onChangePassword}
                />
              </div>
              <div className="formInput">
                <label >Phone</label>
                <input type="text" placeholder="0 2345 234 2342" 
                // value={this.state.phone}
                // onChange={this.onChangePhone}
                />
              </div>
              <div className="formInput">
                <label >Email</label>
                <input type="email" placeholder="password" 
                // value={this.state.email}
                // onChange={this.onChangeEmail} 
                />
              </div>
              {/* <div className="formInput">
                <label >Alamat</label>
                <input type="text" placeholder="Alamat" />
              </div> */}
              <div className="formInput">
                <label >Region</label>
                <input type="text" placeholder="Region" 
                // value={this.state.region}
                // onChange={this.onChangeRegion}
                />
              </div>
              <div className="">
              <button type="submit">Send</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New