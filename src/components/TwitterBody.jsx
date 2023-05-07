
const TwitterBody =({caption,image,id }) =>{
    return (
        <>
        <a href={`/tweet/${id}`}>
        
        <p className="tweet-text">{caption}</p>
        <img
          className="tweet-image"
          src={image}
          alt="Tweet Image" />
          </a>
       
        </>
    
    );

}

export default TwitterBody;