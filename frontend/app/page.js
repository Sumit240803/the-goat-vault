"use client";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProdCard from "./components/Products/Card";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
export default function Home() {
  const productData = {
    name: "Nike Air Max",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: "149.99",
    image: "/products/1.jpg",
    tag: "New Arrival",
  };
  const features = [
    {
      title: "🌱 Sustainable Shopping",
      description:
        "Reduce waste and promote sustainability by giving pre-loved items a second life.",
    },
    {
      title: "💰 Affordable Prices",
      description:
        "Get high-quality, stylish clothing and accessories at unbeatable prices.",
    },
    {
      title: "🎭 Unique Finds",
      description:
        "Discover one-of-a-kind vintage and trendy pieces you won’t find anywhere else.",
    },
    {
      title: "❤️ Supporting a Good Cause",
      description:
        "Every purchase helps support local communities and eco-friendly initiatives.",
    },
    {
      title: "🚀 Fast & Reliable Service",
      description:
        "Enjoy a smooth shopping experience with quick delivery and excellent customer support.",
    },
    {
      title: "🔄 Easy Returns & Exchanges",
      description:
        "Shop with confidence knowing you can easily return or exchange items hassle-free.",
    },
  ];
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
          <div className="flex justify-around items-center">

          <ProdCard product={productData}/>
          <ProdCard product={productData}/>
          <ProdCard product={productData}/>
          </div>
         
        </Box>
      </Container>
      <Container 
      sx={{
        backgroundImage: "url('/products/chooseus-bg-1.jpg')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
            display: "flex",
            
            flexDirection: "column",
      }}
      maxWidth={false} disableGutters>
    
      <Box
      sx={{
        backgroundColor : "rgba(255, 255, 255, 0.7)",
        margin : "20px",
        
      }}
      textAlign="center" py={4}>
        <motion.div
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography className="text-black text-4xl" variant="h4" fontWeight="bold">
            Why Choose Us
          </Typography>
        </motion.div>
      </Box>

      
    </Container>
    </div>
  );
}
