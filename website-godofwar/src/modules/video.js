// video.js

const classes = {
  hidden: "hidden",
};

let isPlay = false;

const video = document.getElementById("video");
export const videoButton = document.querySelector(".video-btn");

export const handleVideo = ({ target }) => {
  const info = target.parentElement;

  isPlay = !isPlay;
  info.classList.toggle(classes.hidden, isPlay);
  target.innerText = isPlay ? "Play" : "Pause";
  isPlay ? video.play() : video.pause();
};
