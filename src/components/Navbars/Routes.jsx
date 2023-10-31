import { useState } from "react";
import Navbars from "../Navbars";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const Routes = () => {
        const [open,setopen]=useState(false);

    const routes= [
        {id:1, path:'/',name:'Home'},
        {id:1, path:'/',name:'About'},
        {id:1, path:'/',name:'Services'},
        {id:1, path:'/',name:'Contact'},
        {id:1, path:'/',name:'NotFound'}
       ];
    return (
           <nav className="bg-yellow-200 p-6">
           <div onClick={()=>setopen(!open)} className="md:hidden text-3xl font-bold">
            {
                open===true?
<AiOutlineMenu className=" "></AiOutlineMenu>:
          <AiOutlineClose></AiOutlineClose>
            }

           
           </div>
        <div className={`md:flex absolute md:static duration-1000 px-6
         
          ${open?'top-16':'-top-60'}
         bg-yellow-200 text-xl font-semibold gap-5`}>
            {
                routes.map(route => <Navbars key={route.id} route={route}></Navbars>)
            }
        </div>
        </nav>
    );
};



export default Routes;