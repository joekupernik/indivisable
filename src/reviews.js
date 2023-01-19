
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
        color="text.primary"
        padding="1%"
        fontSize="1.5rem"
        >
       Joseph is a highly motivated and persistent engineer with a growing portfolio of excellent work. He is a capable engineer, good communicator and hard worker. He would be a great addition to any team looking for an engineer who is dedicated to producing quality work, will work hard and deliver.
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
        color="text.primary"
        padding="1%"
        fontSize="1.5rem"
        >
       Joseph is a highly motivated and persistent engineer with a growing portfolio of excellent work. He is a capable engineer, good communicator and hard worker. He would be a great addition to any team looking for an engineer who is dedicated to producing quality work, will work hard and deliver.
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
        alt="landscape"
      />
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        padding="1%"
        fontSize="1.5rem"
        >
       Joseph is a highly motivated and persistent engineer with a growing portfolio of excellent work. He is a capable engineer, good communicator and hard worker. He would be a great addition to any team looking for an engineer who is dedicated to producing quality work, will work hard and deliver.
      </Typography>      
      </CardContent>
      </Card>
      </Paper>
      
      </Box>
  );
}