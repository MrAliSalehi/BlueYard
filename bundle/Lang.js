//language dictionaries
var languages = {
  en: {
    begintext: "begin",
    investing: "Investing in founders creating the",
    fabric: "FABRIC OF OUR FUTURE",
    blueyard:
      "BlueYard backs founders building the interconnected elements that can become the fabric of our future.",
    explore: "EXPLORE THE FUTURE",
    scenius: "SCENIUS",
    web3: "WEB3",
    programmable: "programmable",
    biology: "Biology",
    breakthrough: "GRAFİK TASARIM & 3B ÇÖZÜMLER",
    computation: "3 BOYUT",
    liberated: "liberated",
    knowledge: "knowledge & data",
    about: "about",
    blueyard: "blueyard",
  },

  tr: {
    begintext: "BAŞLAT",
    investing: "YENİLİKÇİ FİKİRLER, TEKNOLOJİLER VE TASARIMLAR",
    fabric: "GELECEĞE BİZİM İLE",
    blueyard:
      "Digital Project Verse; özel yazılım geliştirme,mobil uygulama geliştirme, kurumsal web tasarım iş ve oyun  sektörlerinde 3B çözümler sunuyoruz",
    explore: "GELECEĞE GÖZATIN",
    scenius: "WEB, UYGULAMA, SİBER GÜVENLİK",
    web3: "YAZILIM",
    programmable: "BİZE ULAŞIN",
    biology: "İLETİŞİM",
    breakthrough: "breakthrough",
    computation: "computation & engineering",
    liberated: "BİZ KİMİZ",
    knowledge: "EKİP",
    about: "HAKKIMIZDA",
    blueyard: "DPV",
  },
};

//set language on load
window.onload = function () {
  if (window.location.hash) {
    const multiLangElements = document.querySelectorAll("[data-lang]");
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
