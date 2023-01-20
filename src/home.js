import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import ContactForm from './contactForm'




function Home() {
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
      <Paper elevation="24" sx={{mt: 2, mb: 2}}>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
      
      <CardMedia
        component="img"
        sx={{ width: '45%' }}
        image="./images/coorsfield.jpg"
        alt="landscape"
      />
      <Typography  
        component="body"
        align="center"
        justifyContent="center"
        color="text.primary"
        padding="5%"
        fontSize="1.5rem"
        >
       From the metroplitan hub of Denver to ...
      </Typography>      
      </CardContent>
      </Card>
      </Paper>
      <Paper elevation="24" sx={{mt: 2, mb: 2}}>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
      
      
      <Typography  
        component="body"
        align="center"
        justifyContent="center"
        color="text.primary"
        padding="5%"
        fontSize="1.5rem"
        >
       The feilds of eastern colorado and to...
      </Typography>  
      <CardMedia
        component="img"
        sx={{ width: '45%' }}
        image="./images/farmers.jpg"
        alt="landscape"
      />    
      </CardContent>
      </Card>
      </Paper>
      <Paper elevation="24" sx={{mt: 2, mb: 2}}>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
      
      <CardMedia
        component="img"
        sx={{ width: '45%' }}
        image="./images/smallbuisness.jpg"
        alt="small buisness"
      />
      <Typography  
        component="body"
        align="center"
        justifyContent="center"
        color="text.primary"
        padding="5%"
        fontSize="1.5rem"
        >
       The small buisnesses that make our economy run.  Thank you 
      </Typography>      
      </CardContent>
      </Card>
      </Paper>
      <Paper>
        <ContactForm/>
      </Paper>
      </Box>
    );
}

export default Home;