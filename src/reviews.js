
import Typography from "@mui/material/Typography";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper  from "@mui/material/Paper";
//import Button from "@mui/material/Button";
import Box  from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export default function ReviewCard() {
  return (
    <Box>
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
      
      </Box>
  );
}