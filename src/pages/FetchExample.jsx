// fetch function
import React,{useEffect,useState} from 'react';

const FetchExample=()=>
{
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(json=>setData(json.slice(0,5)))
        .catch(error=>console.error('error',error));
    },[]);
    return(
        <div>
            <h2>Simple data fetch example</h2>
            <ul>
                {data.map(post=>(
                    <li key={post.id}>
                        <strong>{post.title}</strong><br/>
                        <small>{post.body}</small>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchExample;