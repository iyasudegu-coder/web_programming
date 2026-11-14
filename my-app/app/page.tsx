
"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function BirthdayPage() {
  const [girlName, setGirlName] = useState("");
  const [yourName, setYourName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [showWish, setShowWish] = useState(false);

  const generateWish = () => {
    if (!girlName.trim() || !yourName.trim()) {
      alert("Please enter both names ❤️");
      return;
    }

    setShowWish(true);
  };

  const resetPage = () => {
    setGirlName("");
    setYourName("");
    setAge("");
    setMessage("");
    setBirthdayDate("");
    setShowWish(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1a103d 0%, #54215f 45%, #b83280 100%)",
        py: 5,
        px: 2,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating Decorations */}
      {["❤️", "💕", "✨", "💗", "🌸", "💖", "🎀"].map(
        (heart, index) => (
          <Typography
            key={index}
            sx={{
              position: "absolute",
              top: `${10 + index * 12}%`,
              left: `${5 + index * 13}%`,
              fontSize: { xs: "20px", md: "35px" },
              opacity: 0.4,
              animation: "float 4s ease-in-out infinite",
              animationDelay: `${index * 0.4}s`,
              pointerEvents: "none",
            }}
          >
            {heart}
          </Typography>
        )
      )}

      <Container maxWidth="sm">
        <Paper
          elevation={20}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 5,
            background: "rgba(255,255,255,0.96)",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {!showWish ? (
            <>
              <CakeIcon
                sx={{
                  fontSize: 75,
                  color: "#d63384",
                  mb: 1,
                }}
              />

              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#8e245e", mb: 1 }}
              >
                Birthday Wish Maker
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 4 }}>
                Create a beautiful birthday surprise
                for someone special in your life. 💕
              </Typography>

              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Her Name ❤️"
                  placeholder="Enter her beautiful name"
                  value={girlName}
                  onChange={(e) => setGirlName(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Your Name"
                  placeholder="Enter your name"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Her Age (Optional)"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Birthday Date (Optional)"
                  type="date"
                  value={birthdayDate}
                  onChange={(e) => setBirthdayDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Your Personal Message (Optional)"
                  placeholder="Write something special for her..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={generateWish}
                  startIcon={<FavoriteIcon />}
                  sx={{
                    py: 1.8,
                    borderRadius: 3,
                    fontWeight: "bold",
                    fontSize: "16px",
                    background:
                      "linear-gradient(90deg, #d63384, #8e44ad)",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #ad2670, #71368a)",
                    },
                  }}
                >
                  Create Her Birthday Surprise 🎁
                </Button>
              </Stack>
            </>
          ) : (
            <>
              <CelebrationIcon
                sx={{ fontSize: 65, color: "#d63384", mb: 1 }}
              />

              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  color: "#c02678",
                  mb: 2,
                  fontSize: { xs: "2rem", sm: "2.7rem" },
                }}
              >
                Happy Birthday! 🎂
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#84245c", mb: 2 }}
              >
                My Dear {girlName} ❤️
              </Typography>

              <Typography
                sx={{
                  fontSize: 45,
                  mb: 2,
                }}
              >
                🎉 🎂 💐 🎁
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography
                sx={{
                  fontSize: "17px",
                  lineHeight: 2,
                  color: "#555",
                  textAlign: "left",
                  whiteSpace: "pre-line",
                }}
              >
                My dearest {girlName},

                {"\n\n"}

                Today is a special day because the world
                celebrates someone truly wonderful — YOU!

                {"\n\n"}

                Happy Birthday to you! 💕

                {"\n\n"}

                May your life always be filled with happiness,
                laughter, beautiful memories, endless blessings,
                and wonderful opportunities.

                {"\n\n"}

                May every dream in your heart find its way
                to reality. Never stop shining, smiling,
                and being the amazing person you are.

                {"\n\n"}

                {message && (
                  <>
                    {message}
                    {"\n\n"}
                  </>
                )}

                {age && (
                  <>
                    Cheers to your {age}th year! 🥳
                    {"\n\n"}
                  </>
                )}

                {birthdayDate && (
                  <>
                    Celebrating your special day on {birthdayDate}.
                    {"\n\n"}
                  </>
                )}

                You deserve all the beautiful things life has
                to offer.

                {"\n\n"}

                With lots of love and best wishes,

                {"\n"}

                {yourName} ❤️
              </Typography>

              <Typography sx={{ fontSize: 35, my: 3 }}>
                💖 🌹 💕 🌷 💖
              </Typography>

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#c02678", mb: 3 }}
              >
                Forever keep smiling! ❤️
              </Typography>

              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => window.print()}
                  sx={{
                    py: 1.5,
                    borderRadius: 3,
                    background: "#c02678",
                  }}
                >
                  Print Birthday Wish 🖨️
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={resetPage}
                  startIcon={<RestartAltIcon />}
                  sx={{
                    py: 1.5,
                    borderRadius: 3,
                    color: "#c02678",
                    borderColor: "#c02678",
                  }}
                >
                  Create Another Birthday Wish
                </Button>
              </Stack>
            </>
          )}
        </Paper>

        <Typography
          textAlign="center"
          sx={{
            mt: 3,
            color: "white",
            fontSize: 14,
            opacity: 0.85,
          }}
        >
          Made with ❤️ by {yourName || "Someone Special"}
        </Typography>
      </Container>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media print {
          body {
            background: white !important;
          }

          button {
            display: none !important;
          }
        }
      `}</style>
    </Box>
  );
}
