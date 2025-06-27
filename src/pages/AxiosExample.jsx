// fetch function
import React,{useEffect,useState} from 'react';
import axios from 'axios'
const AxiosExample=()=>
{
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        // .then(response=>response.json())
        .then(res=>setData(res.data.slice(0,5)))
        .catch(error=>console.error('Axios error',error));
    },[]);
    return(
        <div>
            <h2>Simple data fetch axios example</h2>
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

export default AxiosExample;