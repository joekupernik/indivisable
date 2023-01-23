import  Paper  from "@mui/material/Paper";
import { useParams } from "react-router-dom"
//import Markdown from "react-markdown"

//import postlist from "../posts.json"


//tahe url is rendered dynamicly based on url id in use params. now i need to render the content of individual post json files.
const Post = (props) => {
    const id = useParams(); 
    
    
    return(
      <Paper>
         <div className="post">
                <p>{id.title}</p>
                <p>Published on {id.date} by {id.author}</p>
                
                <p>{id.content} </p>
            </div>
      </Paper>
    );
    }
export default Post