import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = (props) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop: props.marginTop,
      }}
    >
      <Link to={`/channel/${props.channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            image={
              props.channel?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={props.channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {props.channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "grey", ml: "5px" }} />
          </Typography>
          {props.channel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                props.channel?.statistics?.subscriberCount
              ).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
