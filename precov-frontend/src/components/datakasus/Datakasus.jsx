import './datakasus.scss'
import { DataGrid } from '@mui/x-data-grid';
import { dataColumns, dataRows } from "../../datatablekasus";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datakasus = () => {
  
        const [data,setData] = useState(dataRows)
      
        const handleDelete = (id)=>{
          setData(data.filter(item=>item.id !== id));
        };
        return (
          <div className="datakasus">
            <div className="datakasusTitle">
              Add New Data
              <Link to={"/data/newdata"}  className="link">
                Add New
              </Link>
            </div>
              <DataGrid className="datagrid"
              rows={data}
              columns={dataColumns
                // .concat(actionColumn)\
              }
              pageSize={9}
              rowsPerPageOptions={[9]}
            //   checkboxSelection
            />
      
          </div>
        )

      
}

export default Datakasus