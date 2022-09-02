import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataColumns } from "../../datatablekasus";
import Chartdata from "../chartdata/Chartdata";
import Datakasus from "../datakasus/Datakasus";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./listdata.scss";

function ListData() {

    const [kasus,setKasus] = useState([]);
    useEffect(()=>{
        loadKasus();
    },
    []
    )

    const loadKasus =  async () =>{
        const result = await axios.get("http://localhost/api/viewkasus.php");
        setKasus(result.data.records);
        // console.log(result);
    }

    const actionColumn = [
        {
          field:"action", 
          headerName:"Action",
          width:100,
          renderCell:(kasus)=>{
            return(
                <div className="cellAction">
                  {/* <Link to={"/users/single"} style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                  </Link> */}
                  <Link className="viewButton" style={{textDecoration:"none"}} to={`/edit-data/${kasus.id}`}>
                Edit
                </Link>
                {/* <Link className="viewButton" to={`/show-admin/${kasus.id}`}>
                show
                </Link> */}
                  {/* <Link className="deleteButton" to="" onClick={() => deleteAdmin(admin.id)}>
                Delete
                </Link> */}
                    {/* <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div> */}
                    {/* <div className="deleteButton" onClick={() => deleteAdmin(admin.id)}>Delete</div> */}
                    
                </div>
            )
        } }
    ]

    return(
        <div className='listdata'>
          <div className="listdataTitle">
          List Data
              <Link to={"/add-data"}  className="link">
                Add New
              </Link>
        </div>
        <DataGrid className="datagrid"
              rows={kasus}
              columns={dataColumns
                .concat(actionColumn)
              }
              pageSize={9}
              rowsPerPageOptions={[9]}
            //   checkboxSelection
            />

    </div>

    )
    
}

export default ListData;