import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PostList from '../postlist';
//need to import a list of posts component then create a search and filter cataogires functionaility


const Resources = () => {


   return (

      <Paper sx={{ p: 5 }} elevation={24}>
         <Typography variant='h2' sx={{ p: 5 }}> Resourse Library</Typography>
         <Paper sx={{ p: 5 }} elevation={24}>
            <Grid container>
               <Grid item xs={4}>
                  <Paper sx={{ p: 5 }} elevation={24}>
                     <Typography>this will be the search bar</Typography>
                     <Typography>this will be the category radio buttons</Typography>
                  </Paper>
               </Grid>
               <Grid item xs={8}>
                  <Paper sx={{ p: 5 }} elevation={24}>
                     <PostList/>
                  </Paper>
               </Grid>
            </Grid>
         </Paper>
      </Paper>

   );
}

export default Resources;