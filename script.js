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

    const coordinatesDisplay = document.getElementById('coordinates');

    // Обработчик события движения мыши
    map.on('mousemove', function(event) {
        const { lat, lng } = event.latlng;
        coordinatesDisplay.innerHTML = `x: ${Math.floor(lng)}, y: ${Math.floor(lat)}`;
    });

    const contextMenu = document.getElementById('context-menu');
    const copyNotification = document.getElementById('copy-notification');
    let clickLatLng = null;
    let markerForm = null;

    map.on('contextmenu', function(event) {
        clickLatLng = event.latlng;
        showContextMenu(event.containerPoint.x, event.containerPoint.y);
        event.originalEvent.preventDefault();
    });

    function showContextMenu(x, y) {
        contextMenu.style.left = `${x + 10}px`;
        contextMenu.style.top = `${y - 35}px`;
        contextMenu.classList.remove('hidden');
    }

    document.getElementById('createMarkerButton').addEventListener('click', function(event) {
        createMarker(event.clientX, event.clientY);
        contextMenu.classList.add('hidden');
    });

    function createMarker(x, y) {
        if (markerForm) {
            markerForm.remove();  // Удалим текущую форму, если она есть
        }

        markerForm = document.createElement('div');
        markerForm.id = 'markerForm';
        markerForm.className = 'marker-form';
        markerForm.innerHTML = `
            <input type="text" id="markerText" placeholder="Введите описание метки">
            <select id="markerType">
                <option value="essenceStones">Камни сил</option>
                <option value="alchemists">Алхимики/Травники</option>
                <option value="hunters">Охотники</option>
                <option value="armorMen">Бронники</option>
                <option value="weaponMen">Оружейники</option>
                <option value="boards">Трактирщики</option>
                <option value="recipes">Древние чертежи</option>
                <option value="dangerZones">Опасные места</option>
                <option value="caves">Пещеры</option>
                <option value="granizons">Гарнизоны</option>
                <option value="quests">Работы</option>
                <option value="traders">Барахольщики</option>
            </select>
            <button id="submitMarkerButton">Отправить запрос</button>
        `;
        document.body.appendChild(markerForm);

        markerForm.style.position = 'absolute';
        markerForm.style.left = `${x + 10}px`;
        markerForm.style.top = `${y - 35}px`;

        // Убедитесь, что предыдущий обработчик удалён, прежде чем добавить новый
        document.getElementById('submitMarkerButton').removeEventListener('click', submitMarker);
        document.getElementById('submitMarkerButton').addEventListener('click', submitMarker);

        setTimeout(() => {
            document.addEventListener('click', onDocumentClick);
        }, 0);
    }

    function onDocumentClick(event) {
        if (markerForm && !markerForm.contains(event.target)) {
            markerForm.remove();
            document.removeEventListener('click', onDocumentClick);
            markerForm = null;
        }
    }
    
    function showLoader() {
        const overlay = document.getElementById('loader-overlay');
        overlay.classList.remove('hidden');
    }
    
    function hideLoader() {
        const overlay = document.getElementById('loader-overlay');
        overlay.classList.add('hidden');
    }
    
    function submitMarker() {
        const text = document.getElementById('markerText').value;
        const type = document.getElementById('markerType').value;
        const coordinates = clickLatLng;

        if (text && type) {
            showLoader();  // Показать лоадер перед началом запроса
            fetch('https://urprice.ru:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text, type, coordinates })
            }).then(response => {
                hideLoader();  // Скрыть лоадер после завершения запроса
                if (response.ok) {
                    alert('Запрос на добавление метки успешно создан! Он может обрабатываться некоторое время и метка появится не сразу.');
                    if (markerForm) {
                        markerForm.remove();
                        document.removeEventListener('click', onDocumentClick);
                        markerForm = null;
                    }
                } else {
                    alert('Ошибка при отправке запроса!');
                }
            }).catch(error => {
                hideLoader();  // Скрыть лоадер даже в случае ошибки
                console.error('Ошибка:', error);
            });
        } else {
            alert('Пожалуйста, заполните все поля!');
        }
    }

    document.getElementById('copy-coordinates').addEventListener('click', function(event) {
        if (clickLatLng) {
            const { lat, lng } = clickLatLng;
            const y = Math.floor(lat);
            const x = Math.floor(lng);
            const coordinates = `${x} , ${y}`;

            navigator.clipboard.writeText(coordinates)
                .then(() => {
                    showCopyNotification(event.clientX, event.clientY);
                })
                .catch(err => {
                    console.error('Ошибка при копировании: ', err);
                });

            contextMenu.classList.add('hidden');
        }
    });

    function showCopyNotification(x, y) {
        copyNotification.style.left = `${x - 110}px`;
        copyNotification.style.top = `${y - 50}px`;
        copyNotification.style.transform = 'translate(0, 0)';
        copyNotification.classList.remove('hidden');

        setTimeout(() => {
            copyNotification.classList.add('hidden');
        }, 500);
    }

    map.on('click', function() {
        contextMenu.classList.add('hidden');
    });




    // # Квесты

    const sidebar = document.getElementById('quest-sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const questItems = document.getElementsByClassName('quest-item');
    const questInfo = document.getElementById('quest-info');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    for (let item of questItems) {
        item.addEventListener('click', () => {
            const questId = item.dataset.questId;
            displayQuestInfo(questId);
        });
    }

    function displayQuestInfo(questId) {
        const questData = {
            1: {
                name: "Опасная гладкость",
                level: 40,
                requirements: "Принести 2 бритвы",
                rewards: "30 опыта"
            },
            2: {
                name: "Опасная гладкость",
                level: 40,
                requirements: "Принести 2 бритвы",
                rewards: "30 опыта"
            },
            3: {
                name: "Опасная гладкость",
                level: 40,
                requirements: "Принести 2 бритвы",
                rewards: "30 опыта"
            },
        };

        const info = questData[questId];
        
        if (info) {
            questInfo.innerHTML = `
                <h3>${info.name}</h3>
                <p><strong>Макс. Уровень:</strong> ${info.level}</p>
                <p><strong>Требуется:</strong> ${info.requirements}</p>
                <p><strong>Награда:</strong> ${info.rewards}</p>
            `;
            questInfo.classList.remove('hidden');
        }
    }

    // # Метки

    // Создаем массивы для хранения меток
    const essenceStones = [];
    const alchemists = [];
    const hunters = [];
    const armorMen = [];
    const weaponMen = [];
    const boards = [];
    const recipes = [];
    const dangerZones = [];
    const caves = [];
    const granizons = [];
    const quests = [];
    const traders = [];

    // #добавление алхимика

    const alchemyIcon = L.icon({
        iconUrl: 'images/iconAlchemist.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });
    
    function addAlchemist(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude],{ icon: alchemyIcon }).addTo(map);
        alchemists.push(marker);
        if (popupText) {
            popupText =     
            marker.bindPopup(popupText);
        }
    }

    // #добавление бронника

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
        armorMen.push(marker);
    }

    // #добавление лагеря бандитов

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
        boards.push(marker);
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
        granizons.push(marker);
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
        quests.push(marker);
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
        traders.push(marker);
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
        weaponMen.push(marker);
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
        hunters.push(marker);
    }

    // Трейдеры и работы
    /// Оксенфурт
    addAlchemist(1733, 1955, '<b>Трейдер | Травница №1</b> <br>Описание');
    addHunter(1787 , 1964, '<b>Трейдер | Охотник №1</b> <br>Описание');
    addArmorman(1744 , 1950, '<b>Трейдер | Бронник</b> <br>Описание');
    addWeaponMan(1763 , 1975, '<b>Трейдер | Оружейник</b> <br>Описание');
    addTrader(1760 , 1963, '<b>Трейдер | Барахольщик №1</b> <br>Описание');
    addGarnizon(1830 , 1735, '<b>Гарнизон Редании</b>');
    addQuest(1772 , 1954, '<b>Работа | Мешки</b> <br> Таскание мешков за 4 кроны')
    addBoard(1749 , 1981, '<b>Трейдер | Трактирщик №1</b>');
    /// Вроницы
    addBoard(700 , 1279, '<b>Трейдер | Трактирщик №2</b>');
    addTrader(707 , 1265, '<b>Трейдер | Барахольщик №2</b> <br>Описание');
    addAlchemist(667 , 1252, '<b>Трейдер | Травница №2</b> <br>Описание');
    addHunter(651 , 1274, '<b>Трейдер | Охотник №2</b> <br>Описание');
    addArmorman(682 , 1263, '<b>Трейдер | Бронник</b> <br>Описание');
    addWeaponMan(674 , 1262, '<b>Трейдер | Оружейник</b> <br>Описание');
    addGarnizon(644 , 1329, '<b>Гарнизон Людей Барона</b>');
    /// Вызима
    /// Эльфы
    addBoard(2354 , 2949, '<b>Трейдер | Трактирщик №4</b>');
    addHunter(2341 , 3038, '<b>Трейдер | Охотник №4</b> <br>Описание');
    addTrader(2329 , 3035, '<b>Трейдер | Барахольщик №4</b> <br>Описание');
    addAlchemist(2308 , 3054, '<b>Трейдер | Травница №4</b> <br>Описание');
    addWeaponMan(2227 , 3035, '<b>Трейдер | Оружейник</b> <br>Описание');
    addArmorman(2188 , 2887, '<b>Трейдер | Бронник</b> <br>Описание');
    addGarnizon(2233 , 2966, '<b>Гарнизон Эльфов</b>');
    /// Белые сады
    addAlchemist(2615 , 487, '<b>Трейдер | Травница №5</b> <br>Описание');
    addHunter(2751 , 407, '<b>Трейдер | Охотник №5</b> <br>Описание');
    addBoard(2820 , 489, '<b>Трейдер | Трактирщи №5к</b>');
    addArmorman(2789 , 458, '<b>Трейдер | Бронник</b> <br>Описание');
    addWeaponMan(2784 , 456, '<b>Трейдер | Оружейник</b> <br>Описание');
    /// Остальное
    addBoard(903 , 1587, '<b>Трейдер | Трактирщик №6</b>');
    addBoard(1174 , 2275, '<b>Трейдер | Трактирщик №7</b>');
    addAlchemist(581 , 1047, '<b>Трейдер | Травница №6</b> <br>Описание');
    addAlchemist(641 , 869, '<b>Трейдер | Травница №7</b> <br>Описание');
    addAlchemist(232 , 1030, '<b>Трейдер | Травница №8</b> <br>Описание');
    addAlchemist(1402 , 1214, '<b>Трейдер | Травница №9</b> <br>Описание');
    addAlchemist(887 , 1600, '<b>Трейдер | Травница №10</b> <br>Описание');
    addAlchemist(1708 , 1277, '<b>Трейдер | Травница №11</b> <br>Описание');
    addTrader(584 , 1035, '<b>Трейдер | Барахольщик №6</b> <br>Описание');
    addTrader(248 , 1012, '<b>Трейдер | Барахольщик №7</b> <br>Описание');
    addTrader(326 , 390, '<b>Трейдер | Барахольщик №8</b> <br>Описание');
    addHunter(585 , 837, '<b>Трейдер | Охотник №6</b> <br>Описание');
    addHunter(231 , 1009, '<b>Трейдер | Охотник №7</b> <br>Описание');
    addHunter(308 , 414, '<b>Трейдер | Охотник №8</b> <br>Описание');
    addQuest(309 , 396, '<b>Работа | Грузчик</b> <br> Таскание мешков');
    
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
        essenceStones.push(marker);
    }
    
    essenceStonesData.forEach((coordinates, index) => {
        const [longitude, latitude] = coordinates;
        const popupText = `<b>Камень силы №${index + 1}</b> <br> Возможный спавн камня силы для сбора эссенций`;
        addEssenceStone(longitude, latitude, popupText);
    });

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
        caves.push(marker);
    }
    
    cavesData.forEach((cave, caveIndex) => {
        cave.entrances.forEach((coordinates) => {
            const [longitude, latitude] = coordinates;
            const popupText = `<b>Вход в пещеру №${caveIndex + 1}</b> <br> ${cave.description}`;
            addCave(longitude, latitude, popupText);
        });
    });

    
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
        dangerZones.push(marker);
    }
    
    dangerZonesData.forEach((coordinates, index) => {
        const [longitude, latitude] = coordinates;
        const popupText = `<b>Опасное место №${index + 1}</b> <br> Большое скопление гончих или накеров независимо от экипировки`;
        addDangZone(longitude, latitude, popupText);
    });
    
    
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
        recipes.push(marker);
    }
    
    recipePlacesData.forEach((coordinates, index) => {
        const [longitude, latitude] = coordinates;
        const popupText = `<b>Древние Чертежи №${index + 1}</b> <br> Возможное местоположение чертежа. Локация может быть опасна по наличию накеров и гончих`;
        addRecipePlace(longitude, latitude, popupText);
    });
    
    // Добавление переключаемых маркеров на сокрытие элементов интерфейса

    function toggleMarkers(markers) {
        markers.forEach(marker => {
            if (map.hasLayer(marker)) {
                map.removeLayer(marker);
            } else {
                map.addLayer(marker);
            }
        });
    }

    document.getElementById('toggle-essence-stones').addEventListener('click', () => {
        toggleMarkers(essenceStones);
    });

    document.getElementById('toggle-alchemists').addEventListener('click', () => {
        toggleMarkers(alchemists);
    });

    document.getElementById('toggle-hunters').addEventListener('click', () => {
        toggleMarkers(hunters);
    });

    document.getElementById('toggle-armorMen').addEventListener('click', () => {
        toggleMarkers(armorMen);
    });
    document.getElementById('toggle-weaponMen').addEventListener('click', () => {
        toggleMarkers(weaponMen);
    });
    document.getElementById('toggle-boards').addEventListener('click', () => {
        toggleMarkers(boards);
    });
    document.getElementById('toggle-recipes').addEventListener('click', () => {
        toggleMarkers(recipes);
    });
    document.getElementById('toggle-dangerZones').addEventListener('click', () => {
        toggleMarkers(dangerZones);
    });
    document.getElementById('toggle-caves').addEventListener('click', () => {
        toggleMarkers(caves);
    });
    document.getElementById('toggle-granizons').addEventListener('click', () => {
        toggleMarkers(granizons);
    });
    document.getElementById('toggle-quests').addEventListener('click', () => {
        toggleMarkers(quests);
    });
    document.getElementById('toggle-traders').addEventListener('click', () => {
        toggleMarkers(traders);
    });

    const imageLayer = L.imageOverlay('mapImage/mainMap.png', bounds).addTo(map);
    map.fitBounds(bounds);

    document.getElementById('opacity-slider').addEventListener('input', function(event) {
        const opacityValue = event.target.value / 100;
        imageLayer.getElement().style.filter = `brightness(${1 - opacityValue})`;
    });

});
