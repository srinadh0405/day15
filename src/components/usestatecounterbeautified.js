import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Paper
      elevation={3}
      sx={{
        width: 300,
        height: 300,
        p: 3,
        backgroundColor: "#0d253f",
        color: "#ff1744",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Playwrite MX", Arial, sans-serif',
          fontWeight: 600,
          textAlign: "center",
        }}
      >
          ......^^^KALKI^^^.....
          <Box
          component="img"
          sx={{
            height: 6000, // Increased from 64
            width: "auto",
            maxHeight: { xs: 50, sm: 60, md: 140 }, // Adjusted for different screen sizes
            maxWidth: { xs: 160, sm: 200, md: 240 }, // Adjusted for different screen sizes
            marginLeft: 2,
            marginY: 1, // Added vertical margin
          }}
          alt="Filmpire logo"
          src="/images/downlad.jpeg"
        />

      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Playwrite MX", Arial, sans-serif',
          fontWeight: 700,
          color: "#90cea1",
          textAlign: "center",
        }}
      >
        {count}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<ThumbDownAltIcon />}
          onClick={() => setCount(count - 1)}
          sx={{
            backgroundColor: "#01b4e4",
            "&:hover": { backgroundColor: "#0d253f" },
          }}
        >
          Dislike
        </Button>
        <Button
          variant="contained"
          endIcon={<ThumbUpAltIcon />}
          onClick={() => setCount(count + 1)}
          sx={{
            backgroundColor: "#90cea1",
            color: "#0d253f",
            "&:hover": { backgroundColor: "#01b4e4", color: "#ffffff" },
          }}
        >
          Like
        </Button>
      </Box>
    </Paper>
  );
}

export default Counter;
