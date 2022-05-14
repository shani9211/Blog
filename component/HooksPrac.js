import React,{useEffect, useState} from 'react'

export default function HooksPrac() {
const [first,setFirst]=useState();
console.log(first,'my name is shjani');
useEffect(() => {
    setFirst('welcome shani you are great');
    
}, [1])
const onMouseOver=()=>{
    setFirst(
       'ye mera dill hai ki manta nahi'
    );
console.log(first);
}
    return (
        <div>
            <h1 onMouseOver={onMouseOver}>{first}</h1>
            
        </div>
    )
}
