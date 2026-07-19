"use strict";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

let id = 0;

const generateId = () => {
  id++;
  return id;
};

const initApp = () => {
  const websiteNameInput = document.querySelector("#websiteName");
  const websiteURLInput = document.querySelector("#websiteURL");
  const submitBtn = document.querySelector("#submit-btn");
  const websiteDetailsForm = document.querySelector("#websiteDetailsForm");
  const websiteDetailsList = document.querySelector("#websiteDetailsList");

  const getWebsiteName = () => {
    return websiteNameInput.value;
  };

  const getWebsiteURL = () => {
    return websiteURLInput.value;
  };

  const clearInputField = (inputField) => {
    inputField.value = "";
  };

  const append = (parent, child, textContent) => {
    child.textContent = textContent;
    parent.append(child);
  };

  const formatURL = (URL) => {
    const originalURL = URL.trim();
    if (originalURL.startsWith("https://")) {
      return originalURL;
    } else {
      return `https://${originalURL}`;
    }
  };

  const websiteArray = [];

  const render = () => {
    websiteDetailsList.innerHTML = "";
    websiteArray.forEach((bookmark) => {
      const websiteDetailsListItem = document.createElement("li");
      append(
        websiteDetailsList,
        websiteDetailsListItem,
        `Name: ${bookmark.name} URL: `,
      );
      const websiteLink = document.createElement("a");
      append(websiteDetailsListItem, websiteLink, `${bookmark.url}`);
      websiteLink.href = `${bookmark.url}`;
      websiteLink.target = "_blank";
      websiteLink.rel = "noopener";
    });

    localStorage.setItem("bookmarks", JSON.stringify(websiteArray));
  };

  const pushSavedBookmarks = () => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log(savedBookmarks);
    if (savedBookmarks) {
      websiteArray.push(...savedBookmarks);
    }
  };

  pushSavedBookmarks();
  render();

  const pushToWebsiteArray = (id, name, url) => {
    websiteArray.push({ id: id, name: name, url: url });
  };

  const addBookmark = (websiteName, websiteURL, parent) => {
    const websiteId = generateId();
    pushToWebsiteArray(websiteId, `${websiteName}`, `${formatURL(websiteURL)}`);
    render();
  };

  websiteDetailsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookmark(getWebsiteName(), getWebsiteURL(), websiteDetailsList);
    clearInputField(websiteNameInput);
    clearInputField(websiteURLInput);
  });
};
