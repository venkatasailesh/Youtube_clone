import Button from "./Button";

const ButtonList = () =>{
    const list = ["All","Live","Gaming","Songs","Cricket","Cooking","Mixes","News","Watched","Computers"];

return(
        <div className="flex mt-2">
            <Button name={list.map((name)=>{return(<h1>{name}</h1>)})}/>
    
        </div>
    )

}

export default ButtonList;