import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Container maxWidth = "lg" >

       <Box>
          <Typography variant="h2" fontWeight="bold">
            Sustainable Fashion,  
            <Typography component="span" color="primary">
              {" "}Affordable Prices
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
            Discover unique thrifted finds and shop sustainably. Join the thrift revolution today!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            component={Link}
            href="/shop"
            >
            Shop Now
          </Button>
        </Box>
            </Container>
    </div>
  );
}
