
const Button = ({name}) => {
   
    return(
        <div className="ml-56 ">
            {name.map((names)=>{return( <button className="m-2  px-3 py-1 bg-gray-300 rounded-lg">{names}</button>
)})}
           
        </div>
    );
}

export default Button;
