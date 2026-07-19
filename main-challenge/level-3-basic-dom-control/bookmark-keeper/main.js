"use strict";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

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

  const addBookmark = (websiteName, websiteURL, parent) => {
    const websiteDetailsListItem = document.createElement("li");
    const websiteLink = document.createElement("a");
    websiteLink.href = `${websiteURL}`;
    websiteLink.target = "_blank";
    
    append(
      websiteDetailsList,
      websiteDetailsListItem,
      `Name: ${websiteName} URL: `,
    );

    append(websiteDetailsListItem, websiteLink, `${websiteURL}`);

    console.log(websiteDetailsListItem);
  };

  websiteDetailsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookmark(getWebsiteName(), getWebsiteURL(), websiteDetailsList);
    clearInputField(websiteNameInput);
    clearInputField(websiteURLInput);
  });
};
