import { Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ResButton = ({
  variant,
  endIcon,
  backgroundColor,
  color,
  content,
  onClick,
  borderColor,
}) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!isXsScreen ? (
        <Button
          variant={variant || "contained"}
          endIcon={endIcon || ""}
          sx={{
            backgroundColor: variant ? "none" : backgroundColor,
            color: color || "white",
            borderColor: borderColor || theme.palette.primary.alt,
          }}
          onClick={onClick}
        >
          <b>{content}</b>
        </Button>
      ) : (
        <Button
          variant={variant || "contained"}
          endIcon={endIcon || ""}
          sx={{
            backgroundColor: variant ? "none" : backgroundColor,
            borderColor: borderColor || theme.palette.primary.alt,
            color: color || "white",
            height: "28px",
            fontSize: "8px",
            padding: "3px",
          }}
          onClick={onClick}
        >
          <b>{content}</b>
        </Button>
      )}
    </>
  );
};

export default ResButton;
