import React from "react";
import { useParams } from "react-router-dom";
//import Markdown from "react-markdown";
import Paper  from "@mui/material/Paper";
//import postlist from "../posts.json";


const Post = (props) => {
    const {postId} = useParams();

    console.log(postId);
    return (
        
        <Paper>
            <div className="post">
                <h2>post id {postId}</h2>
                
            </div>
        </Paper>
    )
}
 //display post data if post id from url is equal to a valid id in the postlist array. 
                

export default Post