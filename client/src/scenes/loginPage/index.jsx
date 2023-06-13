import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      sx={{
        backgroundImage: "url(https://4kwallpapers.com/images/wallpapers/new-york-city-skyline-panorama-sunset-skyscrapers-6144x2781-4645.jpgs)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Box
       width="100%"
       backgroundColor="rgba(255, 255, 255, 0.5)" 
       p="1rem 6%"
       textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="black">
          DevNetwork
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          You are at DevNetwork, a Social Media website for Developers!
        </Typography>
        <Form />
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} textAlign="center">
          Made by Chaitanya Rai with 💟
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
