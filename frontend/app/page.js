"use client"
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Container className="relative" maxWidth={false} disableGutters>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <Box
          sx={{
            backgroundImage: "url('/products/13.jpg')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              sx={{
                color: "white", // Adjust text color for visibility
                fontSize: "4rem", // Adjust size as needed
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              THE GOAT VAULT
            </Typography>
            <motion.div whileHover={{
              scale : 1.2,
              transition : {duration : 0.8}
            }}>

            <Typography className="font-bold" sx={{
              textAlign : "center",
              fontSize : "1.5rem"
            }}>
              Where Brands Are Within The Reach
            </Typography>
              </motion.div>
          </motion.div>
        </Box>
      </Container>
    </div>
  );
}
