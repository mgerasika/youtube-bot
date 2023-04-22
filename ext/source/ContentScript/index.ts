import axios from "axios";

/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
let timeoutRes = 0;
window.addEventListener("scroll", () => {
  window.clearTimeout(timeoutRes);
  timeoutRes = window.setTimeout(() => {
    const rootElements: any[] = document.body.getElementsByTagName(
      "ytd-comment-renderer"
    ) as unknown as [];
    console.log("comments", rootElements);

    const div = document.createElement("div");
    const iconDiv = document.createElement("div");
    iconDiv.className = "iconDiv";
    iconDiv.innerHTML = "Bot";
    div.appendChild(iconDiv);

    axios.get("http://localhost:8005/api/movie/");
    for (let i = 0; i < rootElements.length; i++) {
      const el = rootElements[i];
      const linkElement = el.querySelector("a[id=author-text]");
      const id = linkElement.getAttribute("href").replace("/channel/", "");
      console.log("id", id);
      rootElements[i].appendChild(div.cloneNode(true));
    }
  }, 400);
});

export {};

const style = document.createElement("style");
style.type = "text/css";
style.innerHTML = `ytd-comment-renderer { position: relative;} 
  .iconDiv {position:absolute;left:0px;top:0px;font-size:12px;border:1px solid red;color:red;border-radius:4px; z-index:100;text-transform:uppercase; font-weight:bold;background-color:white;padding:4px 8px;}`;
document.body.appendChild(style);
