// Отримуємо елементи
const suggestionBtn = document.getElementById("suggestion-btn");
const modal = document.getElementById("suggestionModal");
const closeBtn = document.getElementsByClassName("close")[0];
const viewResultsBtn = document.getElementById("viewResults");
const submitSuggestionBtn = document.getElementById("submitSuggestion");

// Відкриваємо модальне вікно при натисканні на кнопку "Пропозиції"
suggestionBtn.onclick = function() {
    modal.style.display = "block";
}

// Закриваємо модальне вікно при натисканні на кнопку "X"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Коли вибираєте "Переглянути результати", відкривається таблиця
viewResultsBtn.onclick = function() {
    window.location.href = "https://docs.google.com/spreadsheets/d/1HpizK8GQbqDM-vzJnbF4RrVJesA7-2a1VlZEN4oaO_M/edit?usp=sharing";
}

// Коли вибираєте "Написати пропозицію", відкривається форма
submitSuggestionBtn.onclick = function() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScT5E4JAI6r0ablXenpdXfK2Kwz6S54v00rvctsIKSotZlNdg/viewform?usp=dialog";
}

// Закриваємо модальне вікно, якщо натискаємо поза ним
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Перемикач теми
const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});
