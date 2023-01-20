import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box'
import Paper from '@mui/material/Paper';




function Content() {
    return (
        <Box sx={{mt: '2%', mb: '2%'}}>
        <Grid container  direction="row"
        justifyContent="space-evenly"
        alignItems="center">
        
        <Grid item >
        <Paper elevation="24" sx={{mt: 2, mb: 2}}>
        <Card sx={{ maxWidth: 345 }} className="projectCard">
      <CardMedia
        component="img"
        height="100%"
        image="./images/takeaction.jpg"
        alt="people working"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Take Action
        </Typography>
      </CardContent>
      
    </Card>
    </Paper>
        </Grid>
        <Grid  item >
        <Paper elevation="24" sx={{mt: 2, mb: 2}}>
        <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="100%"
        image="./images/skiing.jpg"
        alt="flag"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Find Friends
        </Typography>
      </CardContent>
    </Card>
    </Paper>
        </Grid>
        <Grid  item >
        <Paper elevation="24" sx={{mt: 2, mb: 2}}>
        <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="100%"
        image="./images/hunter.jpg"
        alt="friends"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Give Where You Live
        </Typography>
      </CardContent>
    </Card>
    </Paper>
        </Grid>
        <Grid  item >
        <Paper elevation="24" sx={{mt: 2, mb: 2}}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="./images/learnmore.jpg"
        alt="handshake"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Stay Up to Date
        </Typography>
      </CardContent>
    </Card>
    </Paper>
        </Grid>
      </Grid>
      </Box>
    );
}

export default Content;