/* start color picker */
let colorPicker = document.querySelector(".colorPicker");
let colorPickerBtn = document.querySelector(".colorPicker span.close");
let colorLis = document.querySelectorAll(".colorPicker .ul_colors li");

colorPickerBtn.onclick = () => {
  colorPicker.classList.toggle("open");
  let fa = colorPickerBtn.querySelector("span i");
  if (colorPicker.classList.contains("open")) {
    fa.className = "fa-solid fa-xmark";
  } else {
    fa.className = "fa-solid fa-gear";
  }
  colorPickerBtn.appendChild(fa);
};

if (window.localStorage.getItem("mainColor")) {
  document.documentElement.style.setProperty(
    "--mainColor",
    window.localStorage.getItem("mainColor")
  );
  colorPickerBtn.style.backgroundColor =
    window.localStorage.getItem("mainColor");
  let currentColor = document.querySelector(
    `[data-color='${window.localStorage.getItem("mainColor")}']`
  );
  currentColor.classList.add("selected");
}

colorLis.forEach(function (li) {
  colorLis.forEach(function (li) {
    li.style.backgroundColor = li.dataset.color;
  });
  li.addEventListener("click", function (e) {
    colorLis.forEach(function (li) {
      li.classList.remove("selected");
    });
    li.classList.toggle("selected");
    //modify the main color in local storage
    window.localStorage.setItem("mainColor", li.dataset.color);
    //modify the main color in root of page
    document.documentElement.style.setProperty("--mainColor", li.dataset.color);
    //make the color assigned to button
    colorPickerBtn.style.backgroundColor = li.dataset.color;
  });
});
/* end color picker */
/* start scroll top */
let scroller = document.querySelector(".scrollTop");

window.onscroll = function () {
  if (window.scrollY >= 2000) {
    scroller.style.display = "block";
  } else {
    scroller.style.display = "none";
  }
};

scroller.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/* end scroll top */
