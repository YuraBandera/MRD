// Ініціалізація карти
var map = L.map('map').setView([48.4647, 35.0462], 12); // Центр карти (Дніпро)

// Додаємо картинку як фон (оновлено ім'я файлу)
L.imageOverlay('mta-screen_2025-04-12_12-48-55.png', [[48.45, 35.03], [48.48, 35.08]]).addTo(map);

// Додаємо OpenStreetMap шар для інтерактивності (опціонально)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
