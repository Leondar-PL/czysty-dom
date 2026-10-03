const formularz = document.getElementById("formularz");


// =========================
// FORMULARZ
// =========================

formularz.addEventListener("submit", function(event) {

    event.preventDefault();

    const komunikat = document.getElementById("komunikat");

    komunikat.textContent =
        "✓ Dziękujemy! Twoja wiadomość została wysłana.";

    formularz.reset();

});


// =========================
// PRZYCISKI "WYBIERAM"
// =========================

const przyciski = document.querySelectorAll(".cena button");

przyciski.forEach(function(przycisk) {

    przycisk.addEventListener("click", function() {

        const karta = przycisk.closest(".cena");

        const usluga = karta.querySelector("h3").textContent;

        const wiadomosc = document.getElementById("wiadomosc");

        wiadomosc.value =
            "Jestem zainteresowany/a usługą: " + usluga;

        document.getElementById("kontakt").scrollIntoView({
            behavior: "smooth"
        });

    });

});
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {

    menu.classList.toggle("otwarte");

});
const linkiMenu = document.querySelectorAll("#menu a");

linkiMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("otwarte");

    });

});
// =========================
// MOTYW CIEMNY / JASNY
// =========================

const themeToggle = document.getElementById("theme-toggle");

const zapisanyMotyw = localStorage.getItem("motyw");

if (zapisanyMotyw === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("motyw", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("motyw", "light");

    }

});