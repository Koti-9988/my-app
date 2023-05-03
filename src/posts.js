import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom/client";

import   './posts.css';
function Posts(){

    const [data,setData]=useState([]);

    const url='https://jsonplaceholder.typicode.com/posts';

    const getData=()=>{

        
        
        fetch(url).then(response => response.json()).then(json => setData(json))


        


    }

    useEffect(()=>{
        getData();

    },[])

    return(
        <div className='posts'>

            {
                data.map((post)=><div key={post.id}>
                     <div className='posts-card'>
           <h1 className='card-title'>{post.title}</h1>

           <p className='card-body'>{post.body}</p>

        </div>
                
         </div>)
            }

       

   </div>
    )
}

export default Posts;