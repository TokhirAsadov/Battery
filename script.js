"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let parcentage = document.querySelector(".parcentage"),
        parcent = document.querySelector(".parcent");

    navigator.getBattery().then((battery) => {
        parcentage.style.width = battery.level * 100 + "%";
        parcent.innerHTML = battery.level * 100 + "%";
    });

    const toggle = document.querySelector(".toggle");
    let sec = document.querySelector(".sec"),
        sun = document.querySelector(".fa-moon-o");

    document.querySelector(".toggle").onclick = function() {
        sec.classList.toggle("dark");
        toggle.classList.toggle("dark");
        sun.classList.toggle("fa-moon-o");
        sun.classList.toggle("fa-sun-o");
    };
});