import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: [
    "*://ads.nicovideo.jp/*",
    "*://*.ads.nicovideo.jp/*",
  ],
  css: [
    "../assets/ads.scss",
  ],
};
