

import Tweet from "../components/Tweet";
import axios from "axios";

import { useEffect, useState } from "react";
import Post from "../components/Post";



const App = () => {
  const [tweets,setTweets]= useState([]);
  const [shouldRefresh,setShouldRefresh]=useState(false);


  const fetchTweets= async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all",{headers:{
      apiKey:'645738dd7213f63d4355526f',
    }});
    setTweets(posts.data);
  };
  useEffect(()=>{
    fetchTweets();
  },[shouldRefresh]);


  return (
    <>
    
    <Post setShouldRefresh={setShouldRefresh}/>
    {
      tweets.map((tweet)=>{
        return <Tweet 
        id={tweet._id} 
        name={tweet.user.fullname} 
        username={tweet.user.name} 
        image={tweet.image} 
        caption={tweet.content} 
        profile={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`} 
        key={tweet._id}/>
      })
}
    </>
  );
};

export default App;