"use client";
import { Box, Button, Container, Typography } from "@mui/material";
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

          {/* ✅ Fix: Wrapped Button Inside Motion.div to Apply Changes */}
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
      <Container maxWidth={false} disableGutters>
        <Box>
          <Typography>Recent Collections</Typography>
        </Box>
      </Container>
    </div>
  );
}
