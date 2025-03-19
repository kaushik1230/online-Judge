import React, { Fragment } from "react";
import { GitHub, Instagram, LinkedIn, Mail } from "@mui/icons-material";
import { Box } from "@mui/material";
import classes from "./Footer.module.css";

const Footer = () => {
  const clickHandler = (link, name) => {
    window.open(link, "_blank");
  };

  return (
    <Fragment>
      <Box sx={{ borderBottom: "1.5px solid rgba(0,0,0,0.1)" }}>
        <span
          onClick={() =>
            clickHandler(
              "https://www.instagram.com/kaushikdutta1232025/",
              "Instagram"
            )
          }
        >
          <Instagram className={classes.logos} />
        </span>
        <span
          onClick={() =>
            clickHandler("https://github.com/kaushik1230", "Github")
          }
        >
          <GitHub className={classes.logos} />
        </span>
        <span
          onClick={() =>
            clickHandler(
              "https://www.linkedin.com/in/kaushik-dutta-a19b67352/",
              "LinkedIn"
            )
          }
        >
          <LinkedIn className={classes.logos} />
        </span>
        <span
          onClick={() => clickHandler("mailto:kaushik194@gmail.com", "Mail")}
        >
          <Mail className={classes.logos} />
        </span>
      </Box>
      <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
      <div>
        Made with ❤️ by{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/kaushik-dutta-a19b67352/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaushik Dutta
        </a>
      </div>
      <div>
        Give this website a{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/kaushik1230/online-Judge"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⭐ <span style={{ color: "black" }}>on</span> GitHub
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
