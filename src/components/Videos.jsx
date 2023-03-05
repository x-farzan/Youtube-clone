import React from "react";
import { Stack, Box } from "@mui/system";
import { VideoCard, ChannelCard } from ".";

const Videos = (props) => {
  console.log(`VIDEOOOOOO`, props.videos);
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"strat"} gap={2}>
      {props.videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard videos={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
