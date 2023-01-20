import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PostList from '../postlist';
//need to create a search and filter cataogires functionaility


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