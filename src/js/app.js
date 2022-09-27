"use strict";

const headerEl = document.createElement("h1");
const paragraphEl = document.createElement("p");
const buttonEl = document.createElement("button");
const linkEl = document.createElement("a");
const imgEl = document.createElement("img");

const previewContainer = document.getElementById("preview");

headerEl.textContent = "This is a header";
headerEl.style.border = "1px solid red";
headerEl.className = "header-element";

paragraphEl.textContent = "This is a paragraph";
paragraphEl.style.border = "1px solid blue";
paragraphEl.className = "paragraph-element";

buttonEl.textContent = "This is a button";
buttonEl.className = "button-element";

linkEl.textContent = "This is a link";
linkEl.href = "http://google.com/";
linkEl.className = "link-element";

imgEl.src = "src/img/dark-logo-sm.png";
imgEl.className = "img-element";
imgEl.style.background = "#181818";

function toggleElements(e) {
  const btn = e.target.closest(".builder__element-btn");

  if (!btn) return;

  const elementName = btn.id.split("-")[0];
  const element = preview.getElementsByClassName(`${elementName}-element`)[0];

  if (element) {
    element.remove();
  } else {
    switch (elementName) {
      case "header":
        preview.appendChild(headerEl);
        break;
      case "paragraph":
        preview.appendChild(paragraphEl);
        break;
      case "button":
        preview.appendChild(buttonEl);
        break;
      case "link":
        preview.appendChild(linkEl);
        break;
      case "img":
        preview.appendChild(imgEl);
        break;
    }
  }
}

builder.addEventListener("click", toggleElements);
