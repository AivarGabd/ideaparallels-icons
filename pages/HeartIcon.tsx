import { BsHeart } from 'react-icons/bs'
import { IconContext } from "react-icons";

export default function HeartIcon(){
    return (
        <IconContext.Provider value={{ style: { filter: 'blur(0.5px)' } }}>
            <BsHeart size={23}/>
        </IconContext.Provider>
    );
}