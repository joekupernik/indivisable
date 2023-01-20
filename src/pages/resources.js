import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
                     <Card sx={{ maxWidth: '90%' }}>

                        <CardMedia
                           sx={{ height: 140 }}
                           image="./images/farmers.jpg"
                           title="green iguana"
                        />
                        <CardContent>
                           <Typography gutterBottom variant="h5" component="div">
                              Lizard
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                           </Typography>
                        </CardContent>
                        <CardActions>
                           <Button size="small">Share</Button>
                           <Button size="small">Learn More</Button>
                        </CardActions>
                     </Card>
                  </Paper>
               </Grid>
            </Grid>
         </Paper>
      </Paper>

   );
}

export default Resources;