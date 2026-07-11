import { useState } from "react";
const useCounter=(initialValue=0)=>{
    const [Count,setCount]=useState(initialValue)
    const Increment=()=>{
        setCount(Count+1)
    }
    const Decrement=()=>{
        if(Count<=0){
            setCount(0)
        }
        else{
            setCount(Count-1)
        };
    }
    const reset=()=>{
        setCount(initialValue)
    }
    return {Count,reset,Increment,Decrement};
}
export default useCounter;