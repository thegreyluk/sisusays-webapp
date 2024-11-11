import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100dvh"
      overflow="hidden"
    >
      <Header />
      <Outlet />
    </Box>
  );
};
