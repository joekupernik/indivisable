import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Markdown from "react-markdown";
import Paper  from "@mui/material/Paper";
import postlist from "../posts.json";
import { Grid } from "@mui/material";

import './pages.css';

const Post = () => {
    const {postId} = useParams();
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
            fetchedPost.thumbnail = post.thumbnail ? post.thumbnail : "no Thumbnail"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        
        <Paper elevation={24} sx={{p: 5, m: 2}}>
            <Grid container>
            <Grid item xs={8}>
                <h2>{fetchedPost.title}</h2>
                <small >Published on {fetchedPost.date} by {fetchedPost.author}</small>
                 
                </Grid>
                <Grid item xs={4}>
                    <div >
                    <img width="100%" src={fetchedPost.thumbnail} alt=""/>
                     </div>
                </Grid>
                </Grid>
                <hr/>
                 
                <Markdown children={fetchedPost.content}  />

        </Paper>
    )
}
 
                

export default Post