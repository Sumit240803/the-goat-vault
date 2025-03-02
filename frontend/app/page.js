"use client";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProdCard from "./components/Products/Card";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
export default function Home() {
  const productData = {
    name: "Nike Air Max",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: "149.99",
    image: "/products/1.jpg",
    tag: "New Arrival",
  };
  const productData2 = {
    name: "Nike Air Max",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: "149.99",
    image: "/products/2.jpg",
    tag: "New Arrival",
  };
  const productData3 = {
    name: "Nike Air Max",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: "149.99",
    image: "/products/3.jpg",
    tag: "New Arrival",
  };
  return (
    <div>
      <Container className="relative" maxWidth={false} disableGutters>
  {/* Overlay for Dark Effect */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  <Box
    sx={{
      backgroundImage: "url('/products/13.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "0 1rem", // Padding for small screens
    }}
  >
    {/* Animated Heading */}
    <motion.div
      className="relative z-10 max-w-screen-xl"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
        }}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
      >
        THE GOAT VAULT
      </Typography>

      {/* Animated Subtext */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.9, ease: "easeInOut" },
        }}
      >
        <Typography
          className={`${dancingScript.className} font-bold text-lg md:text-xl lg:text-2xl text-white mt-2`}
          sx={{}}
         
        >
          Where Brands Are Within The Reach
        </Typography>
      </motion.div>
    </motion.div>

    {/* Animated Button */}
    <motion.div className="mt-6" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="relative bg-white opacity-80 rounded-lg shadow-md hover:shadow-lg p-3 w-36 md:w-40 lg:w-44 text-center">
        <button className="text-lg md:text-xl font-semibold text-black">Explore</button>
      </div>
    </motion.div>
  </Box>
</Container>

     {/**/}
      <Container maxWidth={false} disableGutters className="bg-black text-white ">
      <div className="flex justify-between items-center ">
        {/* Product Image */}
        <Image src={"/products/3.jpg"} width={500} height={500} alt="Highlander Jeans for Women" className="" />

        {/* Product Details */}
        <div className="w-full px-10 flex flex-col items-center justify-center space-y-32">
          <h2 className="text-center text-4xl font-bold ">ELEGANCE</h2>
          
          {/* Bullet Points */}
          <h2 className="text-center text-3xl ">
            Luxe Clothes For Every Occasion
          </h2>
          <button className="bg-white text-black w-24 h-10 text-lg font-bold">Shop</button>
        </div>
        <Image src={"/products/4.jpg"} width={562} height={400} alt="Highlander Jeans for Women" className="" />
      </div>
    </Container>
    <Container className="bg-white border border-black" maxWidth={false} disableGutters>
        <Box sx={{height : "100vh"}}>
        
          <Typography className="py-10 text-white text-4xl" sx={{textAlign : "center" , color : "black"}}>Our Collections</Typography>
         
          <div className="flex justify-around items-center">

          <ProdCard product={productData}/>
          <ProdCard product={productData2}/>
          <ProdCard product={productData3}/>
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
            What We Offer
          </Typography>
        </motion.div>
      </Box>
      <Box>
      <div className="flex justify-between p-5">
      <div className="w-1/3 m-4 min-h-96 p-6 bg-white text-black opacity-90 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/products/3.jpg" // Replace with your actual image path
          alt="Premium Quality"
          width={300}
          height={160}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Premium Quality</h2>
        <p className="text-gray-700">Explore our top-tier branded products with premium quality and durability.</p>
      </div>

      <div className="w-1/3 m-4 min-h-96 p-6 bg-white text-black opacity-90  shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/products/4.jpg" // Replace with your actual image path
          alt="Latest Trends"
          width={300}
          height={160}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Latest Trends</h2>
        <p className="text-gray-700">Stay ahead with the latest branded products, ensuring you get the newest designs.</p>
      </div>

      <div className="w-1/3 m-4 min-h-96 p-6 bg-white text-black opacity-90  shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src="/products/2.jpg" // Replace with your actual image path
          alt="Affordable Pricing"
          width={300}
          height={160}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Affordable Pricing</h2>
        <p className="text-gray-700">Get the best value for your money with our competitive prices on branded products.</p>
      </div>
    </div>

      </Box>

      
    </Container>
    </div>
  );
}
