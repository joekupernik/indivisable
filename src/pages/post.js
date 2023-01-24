import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Markdown from "react-markdown";
import Paper  from "@mui/material/Paper";
import postlist from "../posts.json";


const Post = (props) => {
    const {postId} = useParams();

    console.log(postId);
    const validId = parseInt(postId)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        
        <Paper>
            <div className="post">
                <h2>post id {postId}</h2>
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr/>
                <Markdown children={fetchedPost.content}  />
            </div>
        </Paper>
    )
}
 //display post data if post id from url is equal to a valid id in the postlist array. 
                

export default Post