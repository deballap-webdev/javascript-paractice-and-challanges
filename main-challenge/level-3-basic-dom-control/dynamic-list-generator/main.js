"use strict";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  let currentOption = null;
  let modifiedListItemValue = null;
  let listItemToModify = null;

  const taskManagementSection = document.querySelector("#task-management");
  const addListItemForm = taskManagementSection.querySelector(
    "#add-list-item-form",
  );
  const addListItemInput = addListItemForm.querySelector("textarea");
  const listSection = taskManagementSection.querySelector("#list-section");
  const list = listSection.querySelector(".list");
  const optionGroup = [];
  const listSectionDisplay = () => {
    if (!list.hasChildNodes()) {
      listSection.style.display = "none";
    } else {
      listSection.style.display = "";
    }
  };
  listSectionDisplay();

  const modifyListItemSection = document.querySelector("#modify-list-item");
  const modifyListItemForm = modifyListItemSection.querySelector("form");
  const modifyListItemInput =
    modifyListItemForm.querySelector("#modify-list-input");

  const elasticInputField = (inputField) => {
    inputField.addEventListener("input", (event) => {
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    });
  };

  elasticInputField(addListItemForm);

  addListItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addListItemInput.style.height = "auto";
    const newListItemValue = addListItemInput.value;
    const newListItem = document.createElement("li");

    newListItem.innerHTML = `<button class="strikeable" type="button">${newListItemValue}</button><span class="options displayNone"><button>remove</button> <button>modify</button><button>strike</button></span>`;
    list.append(newListItem);
    addListItemInput.value = "";
    listSectionDisplay();
    const option = newListItem.querySelector(".options");
    optionGroup.push(option);

    option.querySelectorAll("button").forEach((optionBtn) => {
      optionBtn.addEventListener("click", (event) => {
        if (optionBtn.textContent === "remove") {
          optionBtn.closest("li").remove();
          listSectionDisplay();
        } else if (optionBtn.textContent === "strike") {
          optionBtn
            .closest("li")
            .querySelector(".strikeable").style.textDecoration = "line-through";
          optionBtn.textContent = "unstrike";
        } else if (optionBtn.textContent === "unstrike") {
          optionBtn
            .closest("li")
            .querySelector(".strikeable").style.textDecoration = "none";
          optionBtn.textContent = "strike";
        } else {
          taskManagementSection.classList.add("displayNone");
          modifyListItemSection.classList.remove("displayNone");

          modifyListItemInput.value = optionBtn
            .closest("li")
            .querySelector(".strikeable").textContent;
          listItemToModify = optionBtn
            .closest("li")
            .querySelector(".strikeable");
          handleModifyOperation();
        }
      });
    });

    newListItem.addEventListener("click", (event) => {
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

      if (currentOption !== option) {
        currentOption = option;
      }
    });
  });

  const handleModifyOperation = () => {
    elasticInputField(modifyListItemInput);
    if (!modifyListItemForm.classList.contains("displayNone")) {
      const confirmModifyButton =
        modifyListItemForm.querySelector("#confirmModify");
      const cancelModifyButton =
        modifyListItemForm.querySelector("#cancelModify");
      confirmModifyButton.classList.add("displayNone");

      modifyListItemInput.addEventListener("input", (event) => {
        if (
          modifyListItemInput.value !== listItemToModify.textContent &&
          modifyListItemInput.value.trim() !== ""
        ) {
          confirmModifyButton.classList.remove("displayNone");
          modifiedListItemValue = modifyListItemInput.value;
        } else {
          if (!confirmModifyButton.classList.contains("displayNone")) {
            confirmModifyButton.classList.add("displayNone");
          }
        }
      });

      confirmModifyButton.addEventListener("click", (event) => {
        const isModifyConfirmed = confirm(
          `are you sure you want to make these changes to your list\nOriginal List Item: ${listItemToModify.textContent}\nNew List Item: ${modifiedListItemValue}`,
        );

        if (isModifyConfirmed) {
          modifyListItemSection.classList.add("displayNone");
          taskManagementSection.classList.remove("displayNone");
          listItemToModify.textContent = modifiedListItemValue;
          listItemToModify = null;
          modifiedListItemValue = null;
        } else {
          modifyListItemInput.value = modifiedListItemValue;
        }
      });

      cancelModifyButton.addEventListener("click", (event) => {
        listItemToModify = null;
        modifiedListItemValue = null;
        modifyListItemSection.classList.add("displayNone");
        taskManagementSection.classList.remove("displayNone");
      });
    }
  };

  modifyListItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};
