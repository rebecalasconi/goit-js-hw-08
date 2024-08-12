"use strict";

import VimeoPlayer from "@vimeo/player";

const onPlay = function() {
    let currentTime = player.currentTime();
    let startTime = 0;
    startTime = currentTime;
    console.log(startTime);
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);