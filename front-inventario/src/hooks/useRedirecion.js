import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const useRedirecion =(path,delay)=>{
    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(() => {
            navigate(path);
        }, delay);
    });
};

export default useRedirecion;
