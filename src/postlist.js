import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Markdown from 'markdown-to-jsx';
import { useState, useEffect} from 'react';



const Resources = () => {
    const [postContent, setPostContent] = useState("");

    useEffect(() => {
      import("../posts.json")
        .then(res => {
          fetch(res.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.log(err))
        })
    }, []);

   return (
       <Paper>
        <Card>
           <Markdown>
            {postContent}
           </Markdown>
        </Card>
       </Paper> 
      
    );
}

export default Resources;