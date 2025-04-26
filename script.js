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

    const contextMenu = document.getElementById('context-menu');
    const copyNotification = document.getElementById('copy-notification');
    let clickLatLng = null;

    // Обработчик события правого клика
    map.on('contextmenu', function(event) {
        clickLatLng = event.latlng;
        showContextMenu(event.containerPoint.x, event.containerPoint.y);
        event.originalEvent.preventDefault();
    });

    // Функция для показа контекстного меню
    function showContextMenu(x, y) {
        contextMenu.style.left = `${x}px`;
        contextMenu.style.top = `${y}px`;
        contextMenu.classList.remove('hidden');
    }

    document.getElementById('copy-coordinates').addEventListener('click', function(event) {
        if (clickLatLng) {
            const { lat, lng } = clickLatLng;
            const y = Math.floor(lat);
            const x = Math.floor(lng);
            const coordinates = `${x} , ${y}`;
    
            navigator.clipboard.writeText(coordinates)
                .then(() => {
                    showCopyNotification(event.clientX, event.clientY); // Передача корректных координат
                })
                .catch(err => {
                    console.error('Ошибка при копировании: ', err);
                });
            
            contextMenu.classList.add('hidden'); // Скрыть контекстное меню
        }
    });
    
    // Обновленная функция для показа уведомления
    function showCopyNotification(x, y) {
        copyNotification.style.left = `${x - 70}px`; // немного сдвиг, чтобы не перекрывать курсор
        copyNotification.style.top = `${y - 30}px`; // немного сдвиг, чтобы не перекрывать курсор
        copyNotification.style.transform = 'translate(0, 0)'; // убрать центрирование
        copyNotification.classList.remove('hidden');
    
        setTimeout(() => {
            copyNotification.classList.add('hidden');
        }, 500);
    }
    

    // Скрыть контекстное меню, если пользователь кликает в другом месте
    map.on('click', function() {
        contextMenu.classList.add('hidden');
    });


    // Функция для добавления маркера на карту
    function addMarker(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: alchemyIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    addMarker(1733, 1955, '<b>Трейдер | Травница</b><br>Описание<img src="images/iconAlchemist.png"></img>');

});
