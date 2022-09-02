import "./navbar.scss"
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

    const{dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="searc..." />
                <SearchRoundedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <Brightness4RoundedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })}/>
                </div>
                <div className="item">
                    <Brightness4RoundedIcon className="icon"/>
                </div>
                <div className="item">
                    <ListRoundedIcon className="icon"/>
                </div>
                <div className="item">
                    <AccountCircleRoundedIcon className="icon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar