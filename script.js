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
        contextMenu.style.left = `${x+25}px`;
        contextMenu.style.top = `${y-25}px`;
        contextMenu.classList.remove('hidden');
    }

    document.getElementById('copy-coordinates').addEventListener('click', function(event) {
        if (clickLatLng) {
            const { lat, lng } = clickLatLng;
            const y = Math.floor(lat);
            const x = Math.floor(lng);
            const coordinates = `${x+2} , ${y-5}`;
    
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

    // добавление алхимика

    const alchemyIcon = L.icon({
        iconUrl: 'images/iconAlchemist.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });
    
    function addAlchemist(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: alchemyIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление бронника

    const armorManIcon = L.icon({
        iconUrl: 'images/iconArmor.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addArmorman(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: armorManIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление лагеря бандитов

    const banditCampIcon = L.icon({
        iconUrl: 'images/iconBandit.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addBanditCamp(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: banditCampIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление доски объявлений

    const boardIcon = L.icon({
        iconUrl: 'images/iconBoard.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addBoard(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: boardIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление пещер

    const caveIcon = L.icon({
        iconUrl: 'images/iconCave.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addCave(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: caveIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление гарнизонов

    const gpIcon = L.icon({
        iconUrl: 'images/iconGP.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addGarnizon(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: gpIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление опасных мест

    const mosterIcon = L.icon({
        iconUrl: 'images/iconMonsters.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addDangZone(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: mosterIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }
        
    // добавление квеста

    const questIcon = L.icon({
        iconUrl: 'images/iconQuestion.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addQuest(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: questIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление барахольщика

    const traderIcon = L.icon({
        iconUrl: 'images/iconTrader.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addTrader(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: traderIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление оружейника

    const weaponManIcon = L.icon({
        iconUrl: 'images/iconWeapon.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addWeaponMan(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: weaponManIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление камней силы

    const essenceIcon = L.icon({
        iconUrl: 'images/iconEssence.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addEssenceStone(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: essenceIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // добавление мест поиска чертежей

    const recipeIcon = L.icon({
        iconUrl: 'images/iconRecipe.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addRecipePlace(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: recipeIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    // Трейдеры и работы

    /// Оксенфурт
    addAlchemist(1733, 1955, '<b>Трейдер | Травница</b> <br>Описание');
    addArmorman(1744 , 1950, '<b>Трейдер | Бронник</b> <br>Описание');
    addWeaponMan(1763 , 1975, '<b>Трейдер | Оружейник</b> <br>Описание');
    addTrader(1760 , 1963, '<b>Трейдер | Барахольщик</b> <br>Описание');
    addGarnizon(1830 , 1735, '<b>Гарнизон Редании</b>')
    addQuest(1772 , 1954, '<b>Работа | Мешки</b> <br> Таскание мешков за 4 кроны')
    addBoard(1749 , 1981, '<b>Трейдер | Трактирщик</b>')
    /// Вроницы

    /// Вызима

    /// Эльфы

    /// Белые сады
    addAlchemist(2615 , 487, '<b>Трейдер | Травница</b> <br>Описание');

    /// Остальное


    // Камни силы

    // Пещеры

    // Опасные места

    // Чертежи


});
