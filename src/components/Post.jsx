import axios from "axios";
import { useState } from "react";

const Post=({setShouldRefresh})=>
{
    const [tweetcontent, setTweetContent]=useState("");
    const [imageUrl, setImageUrl]=useState("");
    const upload =async ()=>{
try{
    axios.post("https://react-workshop-todo.fly.dev/posts",{content: tweetcontent ,image:imageUrl},{
        headers:{
            apikey:'645738dd7213f63d4355526f',
        }
    })
    setTweetContent("");
    setImageUrl("");
    setShouldRefresh((v)=> !v);
}
    
    catch (error){
        alert("An error occurred. Please try again later.");
    }
};
    const handelsubmit =()=>
    {
        upload();
    };


    return(
        <>
        <div className="tweet-box">
  <textarea className="tweet-input" placeholder="What's happening?" value={tweetcontent} onChange={(e)=>setTweetContent(e.target.value)}></textarea>
  <input type="text" placeholder="image Url" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
  <button className="tweet-btn" onClick={handelsubmit}>Tweet</button>
</div>

        </>
    )
}
export default Post;