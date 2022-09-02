import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../datatablesource";
import "./listadmin.scss";
function ListAdmin(){

    const [admin,setAdmin] = useState([]);
    useEffect(()=>{
        loadUsers();
    },
    []
    )

    const loadUsers =  async () =>{
        const result = await axios.get("http://localhost/api/viewadmin.php");
        setAdmin(result.data.records);
        // console.log(result);
    }
    const actionColumn = [
        {
          field:"action", 
          headerName:"Action",
          width:200,
          renderCell:(admin)=>{
            return(
                <div className="cellAction">
                  {/* <Link to={"/users/single"} style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                  </Link> */}
                  {/* <Link className="btn" to={`/edit-admin/${admin.id}`}>
                Edit
                </Link> */}
                <Link className="viewButton" style={{textDecoration:"none"}} to={`/show-admin/${admin.id}`}>
                show
                </Link>
                  <Link style={{textDecoration:"none"}} className="deleteButton" to="" onClick={() => deleteAdmin(admin.id)}>
                Delete
                </Link>
                    {/* <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div> */}
                    {/* <div className="deleteButton" onClick={() => deleteAdmin(admin.id)}>Delete</div> */}
                    
                </div>
            )
        } }
    ]
    // const handleDelete = (id)=>{
    //     setAdmin(admin.filter(item=>item.id !== id));
    //   };
    const deleteAdmin =(id)=>{
        axios.delete(`http://localhost/api/deleteadmin.php`,{data: {id : id} })
        .then((result) => {
            loadUsers();
        }).catch(()=>{
            alert("error in code");
        })
    }


    return(
        <div>
        <div className="listadmin">
        <div className="listadminTitle">
        List Users
        {/* <Link to={"/users/new"}  className="link">
          Add New
        </Link> */}
        <Link to={"/add-admin"}  className="link">
          Add New
        </Link>
        </div>
        {/* {admin.map((admin, index) => ( */}

        <DataGrid className="datagrid"
        rows={admin}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        // checkboxSelection
      />
      {/* ))} */}
         </div>

        {/* <div className="row">
            <div className="col-md-12">
                <h1> view Admin</h1>
            </div>
        </div> */}
        {/* <table>
            <thead>
                <th>No.</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Region</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
            </thead>
            {admin.map((admin, index) => (

            <tbody>
                <td>{index+1}</td>
                <td>{admin.nama}</td>
                <td>{admin.username}</td>
                <td>{admin.password}</td>
                <td>{admin.email}</td>
                <td>{admin.region}</td>
                <td>{admin.no_hp}</td>
                <td>
                <Link className="btn" to={`/edit-admin/${admin.id}`}>
                Edit
                </Link></td>
                <td>
                <Link className="btn" to="" onClick={() => deleteAdmin(admin.id)}>
                Delete
                </Link>
                </td>
            </tbody>
                ))}

        </table> */}
        {/* <div className="row">
            <div className="col-md-2">No.</div>
            <div className="col-md-2">Nama</div>
            <div className="col-md-2">Username</div>
            <div className="col-md-2">Password</div>
            <div className="col-md-2">Email</div>
            <div className="col-md-2">Region</div>
            <div className="col-md-2">Phone</div>
            <div className="col-md-2">Update</div>
            <div className="col-md-2">Delete</div>

        </div> */}

        {/* {admin.map((admin, index) => (

        <div className="row">
            <div className="col-md-2">{index+1}</div>
            <div className="col-md-2">{admin.nama}</div>
            <div className="col-md-2">{admin.username}</div>
            <div className="col-md-2">{admin.password}</div>
            <div className="col-md-2">{admin.email}</div>
            <div className="col-md-2">{admin.region}</div>
            <div className="col-md-2">{admin.no_hp}</div>
            <div className="col-md-2">
                <Link className="btn" to={`/edit-admin/${admin.id}`}>
                Edit
                </Link>
            </div>
            <div className="col-md-2">
            <Link className="btn" 
            to="" onClick={() => deleteAdmin(admin.id)}>
                Delete
                </Link>
            </div>
        </div>

        ))}  */}

        </div>
    )
}

export default ListAdmin;