import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Tweet from "../components/Tweet";
const SingleTweet=()=>
{
    const [tweet,setTweet]=useState(null);
    const { id }=useParams();
    const fetchTweet = async()=>{
    const resp = await axios.get(`https://react-workshop-todo.fly.dev/post/${id}`,
        {headers:{apikey:'645738dd7213f63d4355526f'},})


    }
    console.log(resp.data);
    setTweet(resp.data.post);
    useEffect(()=>{
        fetchTweet();
      },[]);
    return(
        <>
        {
            tweet ? (
                <Tweet  
                id={tweet?.id} 
                name={tweet?.user.fullname} 
                username={tweet ?.user.name}
                 image={tweet ?.image}
                  caption={tweet ?.content} 
                 profile={`https://avatars.githubusercontent.com/u/${tweet?.user.githubId}`}
                 />
            )
        :null}
         
        </>
    )
}
export default SingleTweet;