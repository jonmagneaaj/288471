const back = document.querySelector("#back-to-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 600) {
    back.style.display = "flex";
    back.style.justifyContent = "center";
    back.style.alignItems = "center";
  } else {
    back.style.display = "none";
  }
}

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


back.addEventListener("click", scrollTop);
