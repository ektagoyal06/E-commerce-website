import React,{useEffect,useState} from "react";
function Counter()
{   const[count,setCount]=useState(0);
    const[totalcount,setCountTotal]=useState(1);
    const increment=()=>
    {
        setCount(count+1);
    }

    const finalIncrement=()=>
    {
        setCount(count*2);
    }
    // variation 1: run on every render
    // useEffect(()=>
    // {alert("I will run on each render")

    // })

    // variation 2: run on onlyfirst render
    // useEffect(()=>
    // {
    //     alert("I will run on first render only")
    // },[])

    // variation 3: run on every count updation
    useEffect(()=>
    {
        alert("I will run on every count")
        return()=>
            alert("count is unmounted from UI")
    },[count])
    return(
        <div>
            <p>Counter value is:{count}</p>
            <button onClick={increment}>Click me</button>
            <button onClick={finalIncrement}>Click me</button>
        </div>
    )
}
export default Counter;