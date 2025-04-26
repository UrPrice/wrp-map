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
            const coordinates = `${x+2} , ${y-3}`;
    
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

    
    const imageLayer = L.imageOverlay('mapImage/mainMap.png', bounds).addTo(map);
    map.fitBounds(bounds);

    document.getElementById('opacity-slider').addEventListener('input', function(event) {
        const opacityValue = event.target.value / 100;
        imageLayer.getElement().style.filter = `brightness(${1 - opacityValue})`;
    });


    // ## Метки


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

    // добавление оружейника

    const hunterIcon = L.icon({
        iconUrl: 'images/huntIcon.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addHunter(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: hunterIcon }).addTo(map);
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
    addAlchemist(1733, 1955, '<b>Трейдер | Травница №1</b> <br>Описание');
    addHunter(1787 , 1964, '<b>Трейдер | Охотник №1</b> <br>Описание');
    addArmorman(1744 , 1950, '<b>Трейдер | Бронник</b> <br>Описание');
    addWeaponMan(1763 , 1975, '<b>Трейдер | Оружейник</b> <br>Описание');
    addTrader(1760 , 1963, '<b>Трейдер | Барахольщик №1</b> <br>Описание');
    addGarnizon(1830 , 1735, '<b>Гарнизон Редании</b>')
    addQuest(1772 , 1954, '<b>Работа | Мешки</b> <br> Таскание мешков за 4 кроны')
    addBoard(1749 , 1981, '<b>Трейдер | Трактирщик №1</b>')
    /// Вроницы
    addBoard(700 , 1279, '<b>Трейдер | Трактирщик №2</b>')
    addTrader(707 , 1265, '<b>Трейдер | Барахольщик №2</b> <br>Описание');
    addAlchemist(667 , 1252, '<b>Трейдер | Травница №2</b> <br>Описание');
    addHunter(651 , 1274, '<b>Трейдер | Охотник №2</b> <br>Описание');
    addArmorman(682 , 1263, '<b>Трейдер | Бронник</b> <br>Описание');
    addWeaponMan(674 , 1262, '<b>Трейдер | Оружейник</b> <br>Описание');
    addGarnizon(644 , 1329, '<b>Гарнизон Людей Барона</b>')
    /// Вызима
    /// Эльфы
    addGarnizon(2233 , 2966, '<b>Гарнизон Эльфов</b>')
    /// Белые сады
    addAlchemist(2615 , 487, '<b>Трейдер | Травница №5</b> <br>Описание');
    addHunter(2751 , 407, '<b>Трейдер | Охотник №5</b> <br>Описание');
    addBoard(2820 , 489, '<b>Трейдер | Трактирщи №5к</b>')
    addArmorman(2789 , 458, '<b>Трейдер | Бронник</b> <br>Описание');
    addWeaponMan(2784 , 456, '<b>Трейдер | Оружейник</b> <br>Описание');
    /// Остальное
    addBoard(903 , 1587, '<b>Трейдер | Трактирщик №6</b>')
    addAlchemist(581 , 1047, '<b>Трейдер | Травница №6</b> <br>Описание');
    addAlchemist(641 , 869, '<b>Трейдер | Травница №7</b> <br>Описание');
    addAlchemist(232 , 1030, '<b>Трейдер | Травница №8</b> <br>Описание');
    addAlchemist(1402 , 1214, '<b>Трейдер | Травница №9</b> <br>Описание');
    addAlchemist(887 , 1600, '<b>Трейдер | Травница №10</b> <br>Описание');
    addAlchemist(1708 , 1277, '<b>Трейдер | Травница №11</b> <br>Описание');
    addTrader(584 , 1035, '<b>Трейдер | Барахольщик №6</b> <br>Описание');
    addTrader(248 , 1012, '<b>Трейдер | Барахольщик №7</b> <br>Описание');
    addHunter(585 , 837, '<b>Трейдер | Охотник №6</b> <br>Описание');
    addHunter(231 , 1009, '<b>Трейдер | Охотник №7</b> <br>Описание');
    // Камни силы
    addEssenceStone(1567 , 1724, '<b>Камень силы №1</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(1609 , 1516, '<b>Камень силы №2</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(1567 , 1668, '<b>Камень силы №3</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(1667 , 1449, '<b>Камень силы №4</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(1399 , 2001, '<b>Камень силы №5</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(1244 , 1568, '<b>Камень силы №6</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(2569 , 565, '<b>Камень силы №7</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(2644 , 516, '<b>Камень силы №8</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(2809 , 331, '<b>Камень силы №9</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(2724 , 855, '<b>Камень силы №10</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(604 , 1647, '<b>Камень силы №11</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(690 , 985, '<b>Камень силы №12</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(924 , 1003, '<b>Камень силы №13</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(2411 , 2238, '<b>Камень силы №14</b> <br> Возможный спавн камня силы для сбора эссенций')
    addEssenceStone(1310 , 1866, '<b>Камень силы №15</b> <br> Возможный спавн камня силы для сбора эссенций')
    // Пещеры
    addCave(1891 , 1235, '<b>Вход в пещеру</b> <br> Пещера у углежогов')
    addCave(1887 , 1291, '<b>Вход в пещеру</b> <br> Пещера у углежогов')
    addCave(2012 , 1268, '<b>Вход в пещеру</b> <br> Пещера у углежогов')
    addCave(1041 , 1121, '<b>Вход в пещеру</b> <br> Пещера с туманником')
    addCave(1469 , 1076, '<b>Вход в пещеру</b> <br> Пещера у поместья Реордан')
    addCave(1376 , 1044, '<b>Вход в пещеру</b> <br> Пещера у поместья Реордан')
    addCave(1482 , 991, '<b>Вход в пещеру</b> <br> Пещера у поместья Реордан')
    addCave(2442 , 323, '<b>Вход в пещеру</b> <br> Сквозная пещера Белых Садов')
    addCave(2256 , 469, '<b>Вход в пещеру</b> <br> Сквозная пещера Белых Садов')
    addCave(3198 , 184, '<b>Вход в пещеру</b> <br> Дальняя пещера Белых Садов')
    addCave(2701 , 786, '<b>Вход в пещеру</b> <br> Сквозная пещера с расщельем')
    addCave(2570 , 898, '<b>Вход в пещеру</b> <br> Сквозная пещера с расщельем')
    addCave(2790 , 834, '<b>Вход в пещеру</b> <br> Сквозная пещера с расщельем')
    addCave(2433 , 2251, '<b>Вход в пещеру</b> <br> Маленькая пещера эльфов')
    addCave(1024 , 275, '<b>Вход в пещеру</b> <br> Пещера в виде Члена')
    // Опасные места
    addDangZone(1073 , 1867, '<b>Опасное место №1</b> <br> Большое скопление гончих или накеров независимо от экипировки')
    addDangZone(1401 , 1523, '<b>Опасное место №2</b> <br> Большое скопление гончих или накеров независимо от экипировки')
    addDangZone(1620 , 1688, '<b>Опасное место №3</b> <br> Большое скопление гончих или накеров независимо от экипировки')
    addDangZone(717 , 1544, '<b>Опасное место №4</b> <br> Большое скопление гончих или накеров независимо от экипировки')
    // Чертежи
    addRecipePlace(1289 , 1974, '<b>Древние Чертежи №1</b> <br> Возможное местоположение чертежа. Локация может быть опасна по наличию накеров и гончих')
    addRecipePlace(465 , 916, '<b>Древние Чертежи №2</b> <br> Возможное местоположение чертежа. Локация может быть опасна по наличию накеров и гончих')
    addRecipePlace(2504 , 2424, '<b>Древние Чертежи №3</b> <br> Возможное местоположение чертежа. Локация может быть опасна по наличию накеров и гончих')
    addRecipePlace(2114 , 2354, '<b>Древние Чертежи №4</b> <br> Возможное местоположение чертежа. Локация может быть опасна по наличию накеров и гончих')
    addRecipePlace(1485 , 775, '<b>Древние Чертежи №5</b> <br> Возможное местоположение чертежа. Локация может быть опасна по наличию накеров и гончих')

});
