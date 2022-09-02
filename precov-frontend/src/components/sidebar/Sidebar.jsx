import "./sidebar.scss"
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
    const{dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to={"/"} style={{textDecoration:"none"}}>
            <span className="logo">Precov</span>
            </Link>  
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to={"/home"} style={{textDecoration:"none"}}>
                <li>
                    <TimelineIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LIST</p>
                <Link to={"/data"} style={{textDecoration:"none"}}>
                <li>
                   <LibraryBooksOutlinedIcon className="icon"/>
                    <span>Data</span>
                </li>
                </Link>
                <Link to={"/proses"} style={{textDecoration:"none"}}>
                <li>
                   <HourglassEmptyRoundedIcon className="icon"/>
                    <span>Proses</span>
                </li>
                </Link>
                <Link to={"/users"} style={{textDecoration:"none"}}>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                {/* <Link to={"/testpage"} style={{textDecoration:"none"}} >
                    <li>
                        <span>testlist</span>
                    </li>
                </Link>
                <Link to={"/testcreate"} style={{textDecoration:"none"}}>
                    <li>
                    <span>testcreate</span>
                    </li>
                </Link> */}
                <p className="title">USER</p>
                
                <Link to={"/users/single"} style={{textDecoration:"none"}}>
                <li>
                    <AccountBoxOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                </Link>
                {/* <li>
                <Link to="/add-admin"> Add Admin</Link>
                </li>
                <li>
                <Link to="/list-admin"> List Admin</Link>
                    
                </li> */}

                {/* <Link to={"/insertadmin"}>
                <span>InsertAdmin</span>
                </Link>
                <Link to={"/editadmin/:id"}>
                <span>EditAdmin</span>
                </Link> */}
                {/* <Link to={"/viewadmin"}>
                <span>ViewAdmin</span>
                </Link> */}
                <Link to={"/login"}>
                <li>
                    <LogoutRoundedIcon className="icon"/>
                    <span>Logout</span>
                </li>
                </Link>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>

    </div>
  )
}

export default Sidebar