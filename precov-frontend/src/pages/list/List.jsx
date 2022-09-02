import ListAdmin from "../../components/api/ListAdmin"
import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <Datatable/> */}
        <ListAdmin/>
      </div>
    </div>
  )
}

export default List