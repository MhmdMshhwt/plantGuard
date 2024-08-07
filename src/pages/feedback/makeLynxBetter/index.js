import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./style.module.css";
import Logo from "../components/logo";
import CreatorType from "../components/creator-type";
import { useNavigate } from "react-router-dom";
import MLBThanks from "./MLBThanks";
import { useTheme } from "../../../context/theme-context";

const MakePlantGuardBetter = () => {
  const { theme } = useTheme();
  const [isOpenThanks, setIsOpenThanks] = useState(false);
  const navigte = useNavigate();
  const handleBack = () => {
    navigte("/profile");
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.lightgrey.lightgrey400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
      }}
    >
      <MLBThanks
        isOpenThanks={isOpenThanks}
        setIsOpenThanks={setIsOpenThanks}
      />
      <Box className={styles.container}
        sx={{
          width:{
              xs: '100%',
              sm: '100%',
              md: '430px',
          },
        }}
      >
        <Box className={styles.arrow}></Box>
        <Logo />
        <CreatorType setIsOpenThanks={setIsOpenThanks} />
      </Box>
    </Box>
  );
};

export default MakePlantGuardBetter;
