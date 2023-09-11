import React from "react";
import {IoIosMenu} from "react-icons/io"

function EventoMenu({setShowMenu, showMenu}){
     
    return(
        <div onClick={(e)=>setShowMenu(!showMenu)}>
            <IoIosMenu className="menu"  />
        </div>
    )        

} export default EventoMenu