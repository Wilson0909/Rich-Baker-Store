import React ,{useEffect,useState}from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';


function Post() {
    let { id } = useParams();
    const [postObject,SetPostObject]=useState({});
    const [comments, setComments]=useState([]);
    const [newComment,setNewComment]=useState("");

    useEffect(()=>{
      axios.get(`http://localhost:3001/posts/byID/${id}`).then((response)=>{
        SetPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response)=>{
     setComments(response.data);
    });

  },[]);

  
  const addComment =()=>{
    axios.post("http://localhost:3001/comments",{
      commentBody: newComment , PostId: id
    }).then((response)=>{
      const commentToAdd={commentBody: newComment}
      setComments([...comments,commentToAdd])
      setNewComment("")
    })
    //untuk add secara langsung 
  }


  return (
    <div className='postPage'>
       <div id="individual" className='leftSide' >
         <div className='post'>
         <div className='bg-stone-700 title'>{postObject.title}</div>
          <div className='body'>{postObject.postText}</div>
          <div className='footer bg-stone-700'>{postObject.username}</div>
         </div>
        
       </div>
       <div className='rightSide'>
          <div className='addCommentContainer'>
            <input type='text' placeholder='comments' autoComplete="off" 
            //value new comment untuk reset jadi baru
            value={newComment} onChange={(event)=>{setNewComment(event.target.value)}}/>
            <button onClick={addComment}> Add Comments</button>
          </div>
          <div className='listOfComments'>
            {comments.map((comment,key)=>{
              return <div key={key}className='comment' >{comment.commentBody}</div>
            })}
          </div>
       </div>
    </div>
  )
}


export default Post;
