import List from "./list.js";
import ListItem from "./listItem.js";

const listClass = new List();
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Add Listeners
  const addItemForm = document.querySelector("#add-list-item-form");
  const list = document.querySelector("#list");
  addItemForm
    .querySelector("#add-list-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addItemForm.requestSubmit();
      }
    });

  addItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    processSubmition();
  });

  list.addEventListener("click", (event) => {
    const currentTarget = event.target;
    const currentAction = currentTarget.dataset.action;
    if (!currentAction) return;
    if (currentAction === "remove") {
      const currentItemId = currentTarget.closest("span").id;
      listClass.removeItemFromList(currentItemId);
    } else if (currentAction === "modify") {
    } else if (currentAction === "strike") {
    } else {
    }
    reloadThePage();
  });

  // Procedural
  //loadExistingItems();
  reloadThePage();
};

const processSubmition = () => {
  const newItemText = document.querySelector("#add-list-input").value;
  const newItemId = generateId();
  const newItem = createNewItem(newItemId, newItemText);
  listClass.addItemToList(newItem);
  reloadThePage();
};

const generateId = () => {
  let newItemId = 1;
  const listArray = listClass.getList();
  if (listArray.length > 0) {
    newItemId = listArray[listArray.length - 1] + 1;
  }
  return newItemId;
};

const createNewItem = (id, text) => {
  const newItem = new ListItem();
  newItem.setId(id);
  newItem.setText(text);
  return newItem;
};

const clearListDisplay = () => {
  const list = document.querySelector("#list");
  while (list.lastElementChild) {
    list.lastElementChild.remove();
  }
};

const clearaddItemInput = () => {
  document.querySelector("#add-list-input").value = "";
};

const reloadThePage = () => {
  clearaddItemInput();
  clearListDisplay();
  clearaddItemInput();
  setFocusToAddItemInput();
  render();
};

const render = () => {
  clearListDisplay();
  listClass.getList().forEach((listItem) => {
    buildListItem(listItem);
  });
};

const setFocusToAddItemInput = () => {
  document.querySelector("#add-list-input").focus();
};

const buildListItem = (listItem) => {
  const list = document.querySelector("#list");
  const li = document.createElement("li");
  const strikeableButton = document.createElement("button");
  strikeableButton.className = "strikeable";
  strikeableButton.textContent = listItem._text;
  const span = document.createElement("span");
  span.classList.add("options", "displayNone");
  span.id = listItem._id;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
  removeBtn.dataset.action = "remove";
  const modifyBtn = document.createElement("button");
  modifyBtn.textContent = "modify";
  modifyBtn.dataset.action = "modify";
  const strikeBtn = document.createElement("button");
  strikeBtn.textContent = "strike";
  strikeBtn.dataset.action = "strike";
  span.append(removeBtn, modifyBtn, strikeBtn);
  li.append(strikeableButton, span);
  list.append(li);
};

/* 
  let currentOption = null;
  let modifiedListItemValue = null;
  let listItemToModify = null;

  const clearParent = (parent) => {
    while (parent.lastChild) {
      parent.lastChild.remove();
    }
  };
  const guidePlaceholder = document.querySelector("#guide-placeholder");
  const taskManagementSection = document.querySelector("#task-management");
  const addListItemForm = taskManagementSection.querySelector(
    "#add-list-item-form",
  );
  const addListItemInput = addListItemForm.querySelector("textarea");
  const listSection = taskManagementSection.querySelector("#list-section");
  const list = listSection.querySelector(".list");

  const guidePlaceholderDisplay = () => {
    if (listSection.style.display === "none") {
      guidePlaceholder.style.display = "";
    } else {
      guidePlaceholder.style.display = "none";
    }
  };

  const listSectionDisplay = () => {
    if (!list.hasChildNodes()) {
      listSection.style.display = "none";
    } else {
      listSection.style.display = "";
    }
    guidePlaceholderDisplay();
  };
  listSectionDisplay();

  const modifyListItemSection = document.querySelector("#modify-list-item");
  const modifyListItemForm = modifyListItemSection.querySelector("form");
  const modifyListItemInput =
    modifyListItemForm.querySelector("#modify-list-input");
  const confirmModifyButton =
    modifyListItemForm.querySelector("#confirm-modify");
  const cancelModifyButton = modifyListItemForm.querySelector("#cancel-modify");
  const bulkActionBtns = listSection.querySelectorAll(
    "#bulk-action-btn-group button",
  );
  const clearButton = listSection.querySelector(
    "#bulk-action-btn-group #clear-btn",
  );
  const strikeAllButton = listSection.querySelector(
    "#bulk-action-btn-group #strike-all-btn",
  );
  const unstrikeAllButton = listSection.querySelector(
    "#bulk-action-btn-group #unstrike-all-btn",
  );

  confirmModifyButton.classList.add("displayNone");

  const elasticInputField = (inputField) => {
    inputField.addEventListener("input", (event) => {
      inputField.style.height = "auto";
      inputField.style.height = event.target.scrollHeight + "px";
    });
  };

  const getListItems = () => {
    return list.children;
  };

  const getStruckItems = () => {
    return [...list.querySelectorAll(".strikeable")].filter(
      (child) => child.style.textDecoration === "line-through",
    );
  };

  const getUnstruckItems = () => {
    return [...list.querySelectorAll(".strikeable")].filter(
      (child) => child.style.textDecoration === "none",
    );
  };

  const bulkActionButtonDisplay = (buttonType, target) => {
    if (target.length >= 2) {
      buttonType.style.display = "";
    } else {
      buttonType.style.display = "none";
    }
  };

  const toggleStrikeUnstrike = () => {
    const strikeUnstrikeBtnArray = [
      ...list.querySelectorAll(".options button"),
    ].filter((btn) => {
      return (
        btn.textContent.trim() === "strike" ||
        btn.textContent.trim() === "unstrike"
      );
    });

    strikeUnstrikeBtnArray.forEach((btn) => {
      if (
        btn.parentElement.previousElementSibling.style.textDecoration ===
        "line-through"
      ) {
        btn.textContent = "unstrike";
      } else {
        btn.textContent = "strike";
      }
    });
  };

  const updateUIState = () => {
    bulkActionButtonDisplay(clearButton, getListItems());
    bulkActionButtonDisplay(strikeAllButton, getUnstruckItems());
    bulkActionButtonDisplay(unstrikeAllButton, getStruckItems());
    listSectionDisplay();
    toggleStrikeUnstrike();
  };

  elasticInputField(addListItemInput);

  addListItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addListItemInput.style.height = "auto";
    const newListItemValue = addListItemInput.value;
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<button class="strikeable" type="button">${newListItemValue}</button><span class="options displayNone"><button>remove</button> <button>modify</button><button>strike</button></span>`;
    newListItem.querySelector(".strikeable").style.textDecoration = "none";
    list.append(newListItem);
    addListItemInput.value = "";
    updateUIState();
    const option = newListItem.querySelector(".options");

    option.querySelectorAll("button").forEach((optionBtn) => {
      optionBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        if (optionBtn.textContent === "remove") {
          optionBtn.closest("li").remove();
          updateUIState();
        } else if (optionBtn.textContent === "strike") {
          optionBtn
            .closest("li")
            .querySelector(".strikeable").style.textDecoration = "line-through";

          updateUIState();
          toggleStrikeUnstrike();
        } else if (optionBtn.textContent === "unstrike") {
          optionBtn
            .closest("li")
            .querySelector(".strikeable").style.textDecoration = "none";

          updateUIState();
          toggleStrikeUnstrike();
        } else {
          taskManagementSection.classList.add("displayNone");
          modifyListItemSection.classList.remove("displayNone");

          modifyListItemInput.value = optionBtn
            .closest("li")
            .querySelector(".strikeable").textContent;
          listItemToModify = optionBtn
            .closest("li")
            .querySelector(".strikeable");
        }
        optionBtn.blur();
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
    addListItemForm.querySelector("#add-list-item-btn").blur();
  });

  elasticInputField(modifyListItemInput);

  modifyListItemInput.addEventListener("input", (event) => {
    if (!confirmModifyButton.classList.contains("displayNone")) {
      confirmModifyButton.classList.add("displayNone");
    }
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
    modifyListItemInput.style.height = "auto";
    modifyListItemSection.classList.add("displayNone");
    taskManagementSection.classList.remove("displayNone");
    if (!confirmModifyButton.classList.contains("displayNone")) {
      confirmModifyButton.classList.add("displayNone");
    }
  });

  modifyListItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  bulkActionBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (btn.textContent.trim() === "Clear") {
        clearParent(list);
        updateUIState();
      } else if (btn.textContent.trim() === "Strike All") {
        getUnstruckItems().forEach((unstruckItem) => {
          unstruckItem.style.textDecoration = "line-through";
        });
        updateUIState();
      } else {
        getStruckItems().forEach((struckItem) => {
          struckItem.style.textDecoration = "none";
        });
        updateUIState();
      }
      btn.blur();
    });
  });
 */
