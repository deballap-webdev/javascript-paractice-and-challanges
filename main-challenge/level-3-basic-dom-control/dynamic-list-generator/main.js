document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const addListItemForm = document.querySelector("#add-list-item-form");
  const addListItemInput = addListItemForm.querySelector("textarea");
  const listSection = document.querySelector("#list-section");
  const list = listSection.querySelector(".list");

  addListItemInput.addEventListener("input", (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  });

  addListItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addListItemInput.style.height = "auto";
    const newListItemValue = addListItemInput.value;
    const newListItem = document.createElement("li");
    const newListItemButton = document.createElement("button");
    newListItemButton.textContent = newListItemValue;
    newListItem.append(newListItemButton);
    list.append(newListItem);
    addListItemInput.value = "";
    console.log(list.innerHTML);
    const myList = localStorage("listStore", list.innerHTML);
  });

  [...list.children].forEach((listItem) => {
    listItem.addEventListener("click", (event) => {
      const currentOption = listItem.querySelector(".options");
      if(currentOption.classList.contains("displayFlex"))
      currentOption.classList.toggle("displayFlex");
      currentOption.classList.toggle("displayNone");
    });
  });
};
