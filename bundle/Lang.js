//this comment is just for testing purposes
var languages = {
  english: {
    test: "english test",
  },
  Turkish: {
    test: "turkish test",
  },
};

var dataReload = document.querySelectorAll("[data-reload]");

dataReload.forEach(function (item) {
  item.addEventListener("click", function (e) {
    setTimeout(function () {
      window.location.reload();
    });
  });
});
