menu(); //menu slide animation
modal();

// hameburger menu
function menu() {
  const menuTrigger = document.querySelector(".menu-trigger");
  const menu = document.querySelector(".menu");

  if (menuTrigger) {
    menuTrigger.addEventListener("click", (e) => {
      menu.classList.toggle("open");
      event.currentTarget.classList.toggle("active-1");
    });
  } else {
    return false;
  }

  console.log("hello");
}

function modal() {}
