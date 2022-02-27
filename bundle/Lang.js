//language dictionaries
var languages = {
  en: { begintext: "begin" },

  tr: { begintext: "BAŞLAT" },
};

//set language on load
window.onload = function () {
  if (window.location.hash) {
    const multiLangElements = document.querySelectorAll("[data-lang]");
    console.log("Elements to Change Count: " + multiLangElements.length);

    changeContent(multiLangElements);
  }
};

var changeContent = function (elements) {
  var lang = window.location.hash.replace("#", "") ?? "en";
  elements.forEach((element) => {
    var name = element.dataset["contentname"];
    element.textContent = languages[lang][name];
  });
};

//refresh page to see the changes
var getButtons = document.getElementsByClassName("language");
console.log("Buttons Count: " + getButtons.length);
for (var i = 0; i < getButtons.length; i++) {
  getButtons[i].addEventListener("click", function () {
    setTimeout(() => {
      window.location.reload();
    });
  });
}
