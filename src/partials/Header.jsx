import  { useState } from 'react'
import './CSS/header.css'
import Menu from './Menu'
import logo from '../images/logo_inshorts.png'

function Header(){
    const [status , setStatus] = useState({state : 'closed' ,text: 'Menu' , class:'', icon : 'fa-bars'})
    function menuToggle() {
    
        if(status.icon === 'fa-bars'){ var  icons = 'fa-times' ;var text = 'Close' ; var class_name = 'left-move' ; var state = 'opened'}
        else {icons = 'fa-bars' ; text = 'Menu' ; class_name= ''  ; state = 'closed'}

        setStatus({state : state ,text: text , icon  : icons , class: class_name})
         
    }
        
    return(
        <header>
            <div className ={`menu ${status.class}`}>
                <i className={`fa ${status.icon}`} onClick={menuToggle}></i>
                <small>{status.text}</small>
            </div>
            <img src={logo} alt="" className="logo" />
             <Menu class={status.state}  menuToggle={menuToggle}/>
        </header>
    )
}


export default Header;
