"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Card from "./components/Products/Card";

export default function Home() {
  const productData = {
    name: "Nike Air Max",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: "149.99",
    image: "/products/1.jpg",
    tag: "New Arrival",
  };
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
            flexDirection: "column",
          }}
        >
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 0.6 }}
            whileInView={{ opacity: 1, rotateX: 3 }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "4rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              THE GOAT VAULT
            </Typography>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.8 },
              }}
            >
              <Typography
                className="font-bold"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Where Brands Are Within The Reach
              </Typography>
            </motion.div>
          </motion.div>

         
          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative bg-black opacity-90 rounded-xl p-3">

            <button className="text-xl"> Explore</button>
            </div>
          </motion.div>
        </Box>
      </Container>
      <Container className="bg-black" maxWidth={false} disableGutters>
        <Box sx={{height : "100vh"}}>
          <motion.div whileInView={{ opacity: 1, y: 0, scale: 1 }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
          <Typography className="py-10 text-white text-4xl" sx={{textAlign : "center" , color : "black"}}>Our Collections</Typography>
          </motion.div>
          <div className="flex justify-around">

          <Card product={productData}/>
          <Card product={productData}/>
          <Card product={productData}/>
          </div>
         
        </Box>
      </Container>
    </div>
  );
}
