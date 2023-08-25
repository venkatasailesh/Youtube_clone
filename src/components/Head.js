import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch (toggleMenu());
    }


    return(
        <div className="grid grid-flow-col p-2 shadow-lg  bg-white">
        <div className="flex col-span-1">
        <img className="h-6 mt-3  cursor-pointer" alt="menu" src={require("../images/menu.png")}
        onClick={()=> toggleMenuHandler()}
        ></img>
    
    <a href="/">
        <img className="h-12 ml-4 mx-2" alt="youtube" src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png"></img>
        </a> </div>
        <div className="col-span-10 mt-3 px-10 flex text-center">
            <input className="w-1/2  h-7 border border-gray-500 rounded-l-full " type="text"/>
            <button className="border border-gray-500  rounded-r-full h-7 px-3 bg-gray-300"><img className="h-4" alt="search" src={require("../images/search_FILL0_wght400_GRAD0_opsz48.png")}></img></button>
        </div>
        <div className="col-span-1">
            <img className="h-8 mt-2 " alt="user" src={require("../images/useraccount.png")}></img>
        </div>
        </div>
    )
}

export default Head;
