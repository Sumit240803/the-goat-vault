"use client";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProdCard from "./components/Products/Card";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "./components/General/Navbar";
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
      <div>
      <Navbar/>
      </div>
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
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Product Image (Left) */}
        <Image 
          src={"/products/3.jpg"} 
          width={500} 
          height={500} 
          alt="Highlander Jeans for Women" 
          className="w-full md:w-auto object-cover"
        />

        {/* Product Details */}
        <div className="w-full md:w-1/3 px-5 flex flex-col items-center justify-center space-y-10 text-center">
          <h2 className="text-4xl font-bold">ELEGANCE</h2>
          <h2 className="text-3xl">Luxe Clothes For Every Occasion</h2>
          <button className="bg-white text-black w-24 h-10 text-lg font-bold rounded-md hover:bg-gray-300 transition">
            Shop
          </button>
        </div>

        {/* Product Image (Right) */}
        <Image 
          src={"/products/1.jpg"} 
          width={500} 
          height={400} 
          alt="Highlander Jeans for Women" 
          className="w-full md:w-auto object-cover"
        />
      </div>
    </Container>
    <Container className="bg-white border min-h-fit border-black" maxWidth={false} disableGutters>
      <Box className="flex flex-col items-center py-10 min-h-screen">
        {/* Heading */}
        <Typography className="text-4xl font-bold text-black text-center">Our Collections</Typography>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
          <ProdCard product={productData} />
          <ProdCard product={productData2} />
          <ProdCard product={productData3} />
        </div>
      </Box>
    </Container>
    <Container
      sx={{
        backgroundImage: "url('/products/chooseus-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        display: "flex",
        flexDirection: "column",
      }}
      className="min-h-screen"
      maxWidth={false}
      disableGutters
    >
      {/* Heading Section */}
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          margin: "20px",
        }}
        textAlign="center"
        py={4}
      >
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

      {/* Cards Section */}
      <Box>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 p-5">
          {/* Card 1 */}
          <div className="min-h-96 p-6 bg-white text-black opacity-90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/products/3.jpg"
              alt="Premium Quality"
              width={300}
              height={160}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Premium Quality</h2>
            <p className="text-gray-700">
              Explore our top-tier branded products with premium quality and durability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="min-h-96 p-6 bg-white text-black opacity-90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/products/4.jpg"
              alt="Latest Trends"
              width={300}
              height={160}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Latest Trends</h2>
            <p className="text-gray-700">
              Stay ahead with the latest branded products, ensuring you get the newest designs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="min-h-96 p-6 bg-white text-black opacity-90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/products/2.jpg"
              alt="Affordable Pricing"
              width={300}
              height={160}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Affordable Pricing</h2>
            <p className="text-gray-700">
              Get the best value for your money with our competitive prices on branded products.
            </p>
          </div>
        </div>
      </Box>
    </Container>
    <Container className="bg-gray-900 text-white" maxWidth={false} disableGutters>
      <Box className="flex flex-col items-center py-10 space-y-6">
        <Typography className="text-4xl font-bold">The Goat Vault</Typography>

        <Box className="flex space-x-6">
          <a href="https://www.instagram.com/thegoat_vault?igsh=N2swMjMyc2ZrZGZn" className="text-gray-400 hover:text-white transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/thegoat_vault?igsh=N2swMjMyc2ZrZGZn" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/thegoat_vault?igsh=N2swMjMyc2ZrZGZn" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
        </Box>

        <Box className="text-gray-400 text-sm">
          <a href="#" className="hover:text-white px-3">About</a> |
          <a href="#" className="hover:text-white px-3">Privacy</a> |
          <a href="#" className="hover:text-white px-3">Contact</a>
        </Box>

        <Typography className="text-gray-500 text-xs">
          © {new Date().getFullYear()} The Goat Vault. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
    </div>
  );
}
