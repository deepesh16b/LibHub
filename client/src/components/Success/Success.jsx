import { Typography, Box, styled, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const Component = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "85vh",
  background: "#fff",
  margin: "80px auto",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" ,
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    height: "65vh",
    background: "#fff",
    margin: "150px 10px",
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
   
  },
}));

const StyledButton = styled(Button)`
  display: flex;
  margin: 20px auto;
  background: #00B560;
  color: #fff;
  border-radius: 2px;
  width: 200px;
  height: 45px;
  "&:hover": {
      backgroundColor: " #00B568",
      color: "#fff",
    },
`;
const Success = () => {
  const location = useLocation();
  const handleDownload = () => {
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1rpjO2_ki9O15LjjwtbP6Nnsr1VtpTjVI';
    window.location.href = downloadUrl;
};
  const ref = new URLSearchParams(location.search).get("reference");
  return (
    <Component>
      <Container>
        <Image src='/success.gif' alt='' />
        <Typography style={{fontSize:19, fontWeight:500, marginBottom : 10}}>Congratulations!</Typography>
        <Typography component="span">Your Order has been Successfully Placed.</Typography>
        <br />
        <Typography component="span">Order ID: <span style={{color:'#0dc043'}}>{ref}</span></Typography>
        <br /><br/>
        <Typography  style={{fontSize:17, fontWeight:500, marginBottom : 10}} component="span">You can now download your purchased book using the button below.</Typography>
        <br />
        {/* <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}> */}
            <StyledButton style={{ textDecoration: "none" }} variant="contained" onClick={handleDownload}>
            Download Your Book
            </StyledButton>
        {/* </Link> */}
        <br/>
        <Typography  style={{fontSize:19, fontWeight:500, marginBottom : 10, color: "#00B568"}} component="span">Happy Reading!</Typography>
        <br />
      </Container>
    </Component>
  );
};

export default Success;
