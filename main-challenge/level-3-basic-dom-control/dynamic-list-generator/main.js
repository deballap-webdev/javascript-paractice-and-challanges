document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  let currentOption = null;
  const addListItemForm = document.querySelector("#add-list-item-form");
  const addListItemInput = addListItemForm.querySelector("textarea");
  const listSection = document.querySelector("#list-section");
  const list = listSection.querySelector(".list");
  const listSectionDisplay = () => {
    if (!list.hasChildNodes()) {
      listSection.style.display = "none";
    } else {
      listSection.style.display = "";
    }
  };
  listSectionDisplay();

  addListItemInput.addEventListener("input", (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  });

  addListItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addListItemInput.style.height = "auto";
    const newListItemValue = addListItemInput.value;
    const newListItem = document.createElement("li");

    newListItem.innerHTML = `<button type="button">${newListItemValue}</button><span class="options displayNone"><button>remove</button> <button>Modify</button><button>Strike</button></span>`;
    list.append(newListItem);
    addListItemInput.value = "";
    handleListClick();

    listSectionDisplay();
  });

  const handleListClick = () => {
    [...list.children].forEach((listItem) => {
      listItem.addEventListener("click", (event) => {
        const option = listItem.querySelector(".options");
        if (currentOption !== null && currentOption !== option) {
          if (currentOption.classList.contains("displayFlex")) {
            currentOption.classList.remove("displayFlex");
            currentOption.classList.add("displayNone");
          }
        } else {
          currentOption = null;
        }

        option.classList.toggle("displayFlex");
        option.classList.toggle("displayNone");

        console.log(option.classList);
        if (currentOption !== option) {
          currentOption = option;
        }
      });
    });
  };
};
