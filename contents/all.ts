import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["*://www.nicovideo.jp/*"],
  css: [
    "../assets/common.scss",
    "../assets/header.scss",
    "../assets/my.scss",
    "../assets/watch.scss",
  ],
};
