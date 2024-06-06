// # SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

// # SHOW DROPDOWN MENU

const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");

  dropdownButton.addEventListener("click", () => {
    const showDropdown = document.querySelector(".show-dropdown");

    toggleItem(item);

    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

// # FUNCTION TO SHOW DROPDOWN MENU

const toggleItem = (item) => {
  const dropdownContainer = item.querySelector(".dropdown__container");

  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};


// # DELETE DROPDOWN STYLES

const mediaQuery = matchMedia("(min-width: 1118px)"),
  dropdownContainer = document.querySelectorAll(".dropdown__container");

const removeStyle = () => {
  if (mediaQuery.matches) {
    dropdownContainer.forEach((e) => {
      e.removeAttribute("style");
    });

    dropdownItems.forEach((e) => {
      e.classList.remove("show-dropdown");
    });
  }
};

// # Job Openings Accordion

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      if (i === index) {
        c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
        ic.classList.toggle("ri-add-line", isOpen);
        ic.classList.toggle("ri-subtract-fill", !isOpen);
      } else {
        c.style.height = "0px";
        ic.classList.add("ri-add-line");
        ic.classList.remove("ri-subtract-fill");
      }
    });
  });
});



