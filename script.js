document.addEventListener('DOMContentLoaded', (event) => {

    const map = L.map('map', {
        center: [1782.5, 1809.5], 
        zoom: 0, 
        minZoom: -1,
        maxZoom: 4,
        crs: L.CRS.Simple 
    });

    const bounds = [[0, 0], [3565, 3619]]; 

    const imageOverlay = L.imageOverlay('mapImage/mainMap.png', bounds).addTo(map);

    map.fitBounds(bounds); 

    // Получаем ссылку на элемент, где будут отображаться координаты
    const coordinatesDisplay = document.getElementById('coordinates');

    // Обработчик события движения мыши
    map.on('mousemove', function(event) {
        const { lat, lng } = event.latlng;
        coordinatesDisplay.innerHTML = `x: ${Math.floor(lng)}, y: ${Math.floor(lat)}`;
    });

    const alchemyIcon = L.icon({
        iconUrl: 'images/iconAlchemist.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    // Функция для добавления маркера на карту
    function addMarker(latitude, longitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: alchemyIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    addMarker(1955, 1733,  '<b>Трейдер | Травница</b><br>Описание<img src="images/iconAlchemist.png"></img>');

});
