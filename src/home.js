import React from "react";
import Img from './images/img.jpg'
function Home(){
    return(
        <>
        <div>
            <h1 style={{'textAlign':'center','color':'#000','textTransform':'capitalize'}}>about</h1>
            <p>There are several steps you should take to lay the groundwork for future outsourcing. They are essential; without them, even the most carefully designed content workflow won’t be able to keep everyone on track. </p>

            <p>There are several steps you should take to lay the groundwork for future outsourcing. They are essential; without them, even the most carefully designed content workflow won’t be able to keep everyone on track. </p>
        </div>
        <div>
            <img src={Img} style={{'width':'95%','height':'60%','margin':'auto','padding':'10px'}}/>
        </div>
        </>
    )
}
export default Home;