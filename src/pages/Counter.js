import React,{useState} from "react";


const Counter =()=>{
    const [num, setNum]=useState(0);

const inc=()=>{
    setNum(num+1);
}

const dec=()=>{
    setNum(num-1);
}

    return (
        <div>
            <button onClick={dec}>-1</button>
            <button onClick={inc}>+1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;