import { TiHome } from "react-icons/ti";
import { MdPeopleAlt } from "react-icons/md";
import { FaBasketballBall } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";


const NavBar = () => {
  const ITEM_SIZE = 25;

  return (
    <div
      className="flex items-center w-full p-3 border-b border-slate-900 justify-evenly text-white navbar-color text-lg"
    >
      <div className="navbar-item">
        <TiHome color="white" size={ITEM_SIZE}/>
        <p>Home</p>
      </div>
      <div className="navbar-item">
        <MdPeopleAlt color="white" size={ITEM_SIZE}/>
        <p>Players</p>
      </div>
      <div className="navbar-item">
        <FaBasketballBall color="white" size={ITEM_SIZE}/>
        <p>Teams</p>
      </div>
      <div className="navbar-item">
        <IoSearchSharp color="white" size={ITEM_SIZE}/>
        <p>Search</p>
      </div>
      
      
    </div>
  );
}

export default NavBar;