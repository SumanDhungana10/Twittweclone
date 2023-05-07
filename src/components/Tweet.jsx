import Header from "./Header";
import TwitterBody from "./TwitterBody";
import Footer from "./Footer";
import { useEffect } from "react";
const Tweet = ({name,username,caption,image,profile,time}) => {

useEffect(()=>{
  
})
    return (
      <>
        <div className="tweet">
          <img
            className="profile-pic"
            src={profile}
            alt="Profile Picture"
          />
          <div className="tweet-content">
            <Header name={name} username={username} time={time}/>
           <TwitterBody caption={caption} image={image}/>
           <Footer/>
          </div>
        </div>
    
      </>
    );
  };
  
  export default Tweet;