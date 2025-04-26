const map = L.map('map', {
    center: [1782.5, 1809.5], // Центр изображения
    zoom: 0, // Начальный уровень зума
    minZoom: -1,
    maxZoom: 4,
    crs: L.CRS.Simple // Используйте простую систему координат
});

const bounds = [[0, 0], [3565, 3619]]; // Размер изображения

// Замените на путь к вашему изображению
const imageOverlay = L.imageOverlay('mapImage/mainMap.png', bounds).addTo(map);

map.fitBounds(bounds); // Автоматическое подгонка карты к изображению
