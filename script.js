document.addEventListener('DOMContentLoaded', (event) => {

    const map = L.map('map', {
        center: [1782.5, 1809.5],
        zoom: 0,
        minZoom: -1,
        maxZoom: 4,
        crs: L.CRS.Simple,
        attributionControl: false
    });

    const bounds = [[0, 0], [3565, 3619]];

    const imageOverlay = L.imageOverlay('mapImage/mainMap.png', bounds).addTo(map);

    map.fitBounds(bounds);

    const contextMenu = document.getElementById('context-menu');
    const copyNotification = document.getElementById('copy-notification');
    let clickLatLng = null;
    let markerForm = null;

    map.on('contextmenu', function (event) {
        clickLatLng = event.latlng;
        showContextMenu(event.containerPoint.x, event.containerPoint.y);
        event.originalEvent.preventDefault();
    });

    function showContextMenu(x, y) {
        contextMenu.style.left = `${x + 10}px`;
        contextMenu.style.top = `${y - 35}px`;
        contextMenu.classList.remove('hidden');
    }

    document.getElementById('createMarkerButton').addEventListener('click', function (event) {
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
            <input class="witcher-style-text" type="text" id="markerText" placeholder="Введите описание метки">
            <select class="witcher-style-text" id="markerType">
                <option  value="essence-stone">Камни сил</option>
                <option  value="alchemist">Алхимики/Травники</option>
                <option  value="hunter">Охотники</option>
                <option  value="armorMen">Бронники</option>
                <option  value="weaponMen">Оружейники</option>
                <option  value="boards">Трактирщики</option>
                <option  value="recipes">Древние чертежи</option>
                <option  value="dangerZones">Опасные места</option>
                <option  value="caves">Пещеры</option>
                <option  value="granizons">Гарнизоны</option>
                <option  value="quests">Работы</option>
                <option  value="traders">Барахольщики</option>
            </select>
            <button class="detail-button witcher-style-text" id="submitMarkerButton">Отправить запрос</button>
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
        const loaderText = document.getElementById('loader-text');
        loaderText.style.display = 'block'; // Показываем текст
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
            showLoader(); // Показать лоадер перед началом запроса

            const issueData = {
                owner: `UrPrice`,
                repo: `wrp-map-new`,
                title: `Запрос на добавление метки: ${text}`,
                body: `**Тип метки**: ${type}\n\n**Описание**: ${text}\n\n**Координаты**: ${JSON.stringify(coordinates)}`
            };

            fetch('https://api.github.com/repos/UrPrice/wrp-map-new/issues', {
                method: 'POST',
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': secrets.PAT_URPRICE,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(issueData)
            }).then(response => {
                hideLoader(); // Скрыть лоадер после завершения запроса
                if (response.ok) {
                    Swal.fire({
                        title: 'Успех!',
                        text: 'Issue успешно создано в репозитории!',
                        icon: 'success',
                        confirmButtonText: 'ОК'
                    });
                    if (markerForm) {
                        markerForm.remove();
                        document.removeEventListener('click', onDocumentClick);
                        markerForm = null;
                    }
                } else {
                    Swal.fire({
                        title: 'Ошибка!',
                        text: 'Ошибка при создании issue!',
                        icon: 'error',
                        confirmButtonText: 'ОК'
                    });
                }
            }).catch(error => {
                hideLoader(); // Скрыть лоадер даже в случае ошибки
                console.error('Ошибка:', error);
                Swal.fire({
                    title: 'Ошибка!',
                    text: 'Произошла ошибка при выполнении запроса.',
                    icon: 'error',
                    confirmButtonText: 'ОК'
                });
            });
        } else {
            Swal.fire({
                title: 'Внимание!',
                text: 'Пожалуйста, заполните все поля!',
                icon: 'warning',
                confirmButtonText: 'ОК'
            });
        }
    }


    document.getElementById('copy-coordinates').addEventListener('click', function (event) {
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


    map.on('click', function () {
        contextMenu.classList.add('hidden');
    });


    // # Метки

    function showDetailedQuestInfo(questId, level, rewards, notes, buttonElem, markerId) {
        const marker = map._layers[markerId];
        const info = questsData[questId];
        if (info && buttonElem instanceof HTMLElement && marker) {
            let notesContent = notes != "undefined" ? `<p class="witcher-style-text"><strong>Примечание:</strong> ${notes}</p>` : '';  // Условие на наличие примечания
            marker.setPopupContent(`
                <h3 class="witcher-style-text" style="font-size: 16px;">${info.title}</h3>
                <p class="witcher-style-text"><strong>Макс. Уровень:</strong> ${level}</p>
                <p class="witcher-style-text"><strong>Требуется:</strong> ${info.requirements}</p>
                ${notesContent}
                <p class="witcher-style-text"><strong>Награда:</strong> ${rewards}</p>
                <button class="detail-button witcher-style-text" onclick="goBackToQuestList(this, ${markerId})">Назад</button>
            `);
            marker.openPopup();
        } else {
            console.error('Попытка доступа к неопределенному маркеру: ', markerId);
        }
    }


    function goBackToQuestList(buttonElem, markerId) {
        const marker = map._layers[markerId];
        if (marker && marker.originalContent) {
            // Использовать сохраненное оригинальное содержание
            marker.setPopupContent(marker.originalContent);
            marker.openPopup();
        }
    }

    window.showDetailedQuestInfo = showDetailedQuestInfo;

    window.goBackToQuestList = goBackToQuestList;


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
    const allLocations = [];
    const granizons = [];
    const quests = [];
    const traders = [];
    const questGivers = [];
    const territories = [];

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const alchemyIcon = L.icon({
        iconUrl: 'images/iconAlchemist.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addAlchemist(longitude, latitude, alchemistData) {
        const marker = L.marker([latitude, longitude], { icon: alchemyIcon }).addTo(map);

        let popupContent = `<h3 class="witcher-style-text" style="font-size: 16px;">${alchemistData.name}</h3><ul>`;
        alchemistData.quests.forEach(quest => {
            const questInfo = questsData[quest.id];
            if (questInfo) {
                popupContent += `<li class="witcher-style-text">${questInfo.title}
                                <button class="detail-button witcher-style-text" onclick="showDetailedQuestInfo('${quest.id}', ${quest.level}, '${quest.rewards}', '${quest.notes}', this, ${marker._leaflet_id})">?</button>
                                </li>`;
            }
        });
        popupContent += `</ul>`;

        marker.originalContent = popupContent; // сохраните оригинальное содержание

        const popupOptions = {
            closeOnClick: false,
            autoClose: false
        };

        marker.bindPopup(popupContent, popupOptions);
        alchemists.push(marker);
    }

    window.addAlchemist = addAlchemist;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const armorManIcon = L.icon({
        iconUrl: 'images/iconArmor.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addArmorman(longitude, latitude, armormanData) {
        const marker = L.marker([latitude, longitude], { icon: armorManIcon }).addTo(map);

        let popupContent = `<h3 class="witcher-style-text" style="font-size: 16px;">${armormanData.name}</h3><ul>`;
        armormanData.quests.forEach(service => {
            const serviceInfo = questsData[service.id];
            if (serviceInfo) {
                popupContent += `<li class="witcher-style-text">${serviceInfo.title}
                                <button class="detail-button witcher-style-text" onclick="showDetailedQuestInfo('${service.id}', ${service.level}, '${service.rewards}', '${service.notes}', this, ${marker._leaflet_id})">?</button>
                                </li>`;
            }
        });
        popupContent += `</ul>`;

        marker.originalContent = popupContent; // сохраните оригинальное содержание

        const popupOptions = {
            closeOnClick: false,
            autoClose: false
        };

        marker.bindPopup(popupContent, popupOptions);
        armorMen.push(marker);
    }

    window.addArmorman = addArmorman;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const banditCampIcon = L.icon({
        iconUrl: 'images/iconBandit.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addBanditCamp(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude], { icon: banditCampIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const boardIcon = L.icon({
        iconUrl: 'images/iconBoard.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addBoard(longitude, latitude, boardData) {
        const marker = L.marker([latitude, longitude], { icon: boardIcon }).addTo(map);

        let popupContent = `<h3 class="witcher-style-text" style="font-size: 16px;">${boardData.name}</h3><ul>`;
        boardData.quests.forEach(notice => {
            const noticeInfo = questsData[notice.id];
            if (noticeInfo) {
                popupContent += `<li class="witcher-style-text">${noticeInfo.title}
                                <button class="detail-button witcher-style-text" onclick="showDetailedQuestInfo('${notice.id}', ${notice.level}, '${notice.rewards}', '${notice.notes}', this, ${marker._leaflet_id})">?</button>
                                </li>`;
            }
        });
        popupContent += `</ul>`;

        marker.originalContent = popupContent; // сохраните оригинальное содержание

        const popupOptions = {
            closeOnClick: false,
            autoClose: false
        };

        marker.bindPopup(popupContent, popupOptions);
        boards.push(marker);
    }

    window.addBoard = addBoard;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const gpIcon = L.icon({
        iconUrl: 'images/iconGP.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addGarnizon(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude], { icon: gpIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(`<div class="witcher-style-text">${popupText}</div>`);
        }
        granizons.push(marker);
    }

    window.addGarnizon = addGarnizon;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const questIcon = L.icon({
        iconUrl: 'images/iconQuestion.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addQuest(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude], { icon: questIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(`<div class="witcher-style-text">${popupText}</div>`);
        }
        quests.push(marker);
    }

    window.addQuest = addQuest;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const traderIcon = L.icon({
        iconUrl: 'images/iconTrader.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addTrader(longitude, latitude, traderData) {
        const marker = L.marker([latitude, longitude], { icon: traderIcon }).addTo(map);

        let popupContent = `<h3 class="witcher-style-text" style="font-size: 16px;">${traderData.name}</h3><ul>`;
        traderData.quests.forEach(good => {
            const goodInfo = questsData[good.id];
            if (goodInfo) {
                popupContent += `<li class="witcher-style-text">${goodInfo.title}
                                <button class="detail-button witcher-style-text" onclick="showDetailedQuestInfo('${good.id}', ${good.level}, '${good.rewards}', '${good.notes}', this, ${marker._leaflet_id})">?</button>
                                </li>`;
            }
        });
        popupContent += `</ul>`;

        marker.originalContent = popupContent; // сохраните оригинальное содержание

        const popupOptions = {
            closeOnClick: false,
            autoClose: false
        };

        marker.bindPopup(popupContent, popupOptions);
        traders.push(marker);
    }

    window.addTrader = addTrader;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const weaponManIcon = L.icon({
        iconUrl: 'images/iconWeapon.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addWeaponMan(longitude, latitude, weaponManData) {
        const marker = L.marker([latitude, longitude], { icon: weaponManIcon }).addTo(map);

        let popupContent = `<h3 class="witcher-style-text" style="font-size: 16px;">${weaponManData.name}</h3><ul>`;
        weaponManData.quests.forEach(weapon => {
            const weaponInfo = questsData[weapon.id];
            if (weaponInfo) {
                popupContent += `<li class="witcher-style-text">${weaponInfo.title}
                                <button class="detail-button witcher-style-text" onclick="showDetailedQuestInfo('${weapon.id}', ${weapon.level}, '${weapon.rewards}', '${weapon.notes}', this, ${marker._leaflet_id})">?</button>
                                </li>`;
            }
        });
        popupContent += `</ul>`;

        marker.originalContent = popupContent; // сохраните оригинальное содержание

        const popupOptions = {
            closeOnClick: false,
            autoClose: false
        };

        marker.bindPopup(popupContent, popupOptions);
        weaponMen.push(marker);
    }

    window.addWeaponMan = addWeaponMan;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const hunterIcon = L.icon({
        iconUrl: 'images/huntIcon.png',
        iconSize: [26, 26], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addHunter(longitude, latitude, hunterData) {
        const marker = L.marker([latitude, longitude], { icon: hunterIcon }).addTo(map);

        let popupContent = `<h3 class="witcher-style-text" style="font-size: 16px;">${hunterData.name}</h3><ul>`;
        hunterData.quests.forEach(hunt => {
            const huntInfo = questsData[hunt.id];
            if (huntInfo) {
                popupContent += `<li class="witcher-style-text">${huntInfo.title}
                                <button class="detail-button witcher-style-text" onclick="showDetailedQuestInfo('${hunt.id}', ${hunt.level}, '${hunt.rewards}', '${hunt.notes}', this, ${marker._leaflet_id})">?</button>
                                </li>`;
            }
        });
        popupContent += `</ul>`;

        marker.originalContent = popupContent; // сохраните оригинальное содержание

        const popupOptions = {
            closeOnClick: false,
            autoClose: false
        };

        marker.bindPopup(popupContent, popupOptions);
        hunters.push(marker);
    }

    window.addHunter = addHunter;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const questGiverIcon = L.icon({
        iconUrl: 'images/confused.png',
        iconSize: [26, 26], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addQuestGiver(longitude, latitude, questGiverData) {
        const marker = L.marker([latitude, longitude], { icon: questGiverIcon }).addTo(map);

        let popupContent = `<h3 class="witcher-style-text" style="font-size: 16px;">${questGiverData.name}</h3><ul>`;
        questGiverData.quests.forEach(hunt => {
            const huntInfo = questsData[hunt.id];
            if (huntInfo) {
                popupContent += `<li class="witcher-style-text">${huntInfo.title}
                                <button class="detail-button witcher-style-text" onclick="showDetailedQuestInfo('${hunt.id}', ${hunt.level}, '${hunt.rewards}', '${hunt.notes}', this, ${marker._leaflet_id})">?</button>
                                </li>`;
            }
        });
        popupContent += `</ul>`;

        marker.originalContent = popupContent; // сохраните оригинальное содержание

        const popupOptions = {
            closeOnClick: false,
            autoClose: false
        };

        marker.bindPopup(popupContent, popupOptions);
        questGivers.push(marker);
    }

    window.addQuestGiver = addQuestGiver;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const essenceIcon = L.icon({
        iconUrl: 'images/iconEssence.png',
        iconSize: [22, 22], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addEssenceStone(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude], { icon: essenceIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(`<div class="witcher-style-text">${popupText}</div>`);
        }
        essenceStones.push(marker);
    }

    essenceStonesData.forEach((coordinates, index) => {
        const [longitude, latitude] = coordinates;
        const popupText = `<b>Камень силы №${index + 1}</b> <br> Возможный спавн камня силы для сбора эссенций`;
        addEssenceStone(longitude, latitude, popupText);
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const caveIcon = L.icon({
        iconUrl: 'images/iconCave.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addCave(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude], { icon: caveIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(`<div class="witcher-style-text">${popupText}</div>`);
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


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const mosterIcon = L.icon({
        iconUrl: 'images/iconMonsters.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addDangZone(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude], { icon: mosterIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(`<div class="witcher-style-text">${popupText}</div>`);
        }
        dangerZones.push(marker);
    }

    dangerZonesData.forEach((coordinates, index) => {
        const [longitude, latitude] = coordinates;
        const popupText = `<b>Опасное место №${index + 1}</b> <br> Большое скопление гончих или накеров независимо от экипировки`;
        addDangZone(longitude, latitude, popupText);
    });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const recipeIcon = L.icon({
        iconUrl: 'images/iconRecipe.png',
        iconSize: [32, 32], // размер иконки
        iconAnchor: [16, 32], // точка привязки иконки (центр)
        popupAnchor: [0, -32] // точка откуда всплывающее окно будет отступать
    });

    function addRecipePlace(longitude, latitude, popupText) {
        const marker = L.marker([latitude, longitude], { icon: recipeIcon }).addTo(map);
        if (popupText) {
            marker.bindPopup(`<div class="witcher-style-text">${popupText}</div>`);
        }
        recipes.push(marker);
    }

    recipePlacesData.forEach((coordinates, index) => {
        const [longitude, latitude] = coordinates;
        const popupText = `<b>Древние Чертежи №${index + 1}</b> <br> Возможное местоположение чертежа. Локация может быть опасна по наличию накеров и гончих`;
        addRecipePlace(longitude, latitude, popupText);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function AddFTMarker(longitude, latitude, placeName) {
        const customIcon = L.divIcon({
            className: 'custom-marker-icon',
            iconSize: [26, 26],
            html: `<div class="marker-label witcher-style-text">${placeName}</div><img src="images/fticon.png" style="width:26px;height:26px;">`,
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });

        const marker = L.marker([latitude, longitude], { icon: customIcon, riseOnHover: false }).addTo(map);

        // Обработчик движения мыши для карты
        map.on('mousemove', function(e) {
            const mouseLatLng = e.latlng;
            const markerLatLng = marker.getLatLng();

            // Переводим координаты в screen points
            const mousePoint = map.latLngToLayerPoint(mouseLatLng);
            const markerPoint = map.latLngToLayerPoint(markerLatLng);

            const distance = mousePoint.distanceTo(markerPoint);

            const label = marker.getElement().querySelector('.marker-label');

            // Настройка максимального и минимального расстояния в пикселях
            const maxDistance = 200; // Полностью прозрачная граница
            const minDistance = 150; // Полностью непрозрачная граница

            // Вычисляем прозрачность на основе расстояния
            if (distance > maxDistance) {
                label.style.opacity = 0;
            } else if (distance < minDistance) {
                label.style.opacity = 1;
            } else {
                // Прозрачность уменьшается между 200 и 300 пикселями
                const opacity = 1 - ((distance - minDistance) / (maxDistance - minDistance));
                label.style.opacity = opacity;
            }
        });

        allLocations.push(marker);
    }

    allLocationData.forEach((location, index) => {
        const [longitude, latitude] = location.coords;
        const popupText = location.description;
        AddFTMarker(longitude, latitude, popupText);
    });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const fractions = {
        Neutral: {
            description: 'Нейтральная территория',
            color: '#cececeff'
        },
        Bandits: {
            description: 'Территория разбойников',
            color: '#9b5f78ff'
        },
        Redania: {
            description: 'Территория Редании',
            color: '#ff4040'
        },
        Baron: {
            description: 'Территория Людей Барона',
            color: '#121214ff'
        },
        Temeria: {
            description: 'Территория Темерии',
            color: '#366fdaff'
        },
        Nilf: {
            description: 'Территория Нильфгаарда',
            color: '#dfa928'
        }
    };

    function addTerritory(lng, lat, radius, choosen, cityName) {
        const stripePattern = new L.StripePattern({
            width: 4, // ширина полосы
            height: 4,
            angle: 65, // угол наклона полос
            weight: 1, // толщина полосы
            color: fractions[choosen].color // цвет полос
        });
        stripePattern.addTo(map); // добавить паттерн на карту

        const circle = L.circle([lat, lng], {
            color: null,
            fillPattern: stripePattern, // применение паттерна
            fillOpacity: 0.9,
            radius: radius
        }).addTo(map);

        let tooltip = L.tooltip({
            permanent: false,
            direction: 'top',
            offset: [0, 0],
            className: 'custom-tooltip'
        }).setContent(`<div class="witcher-style-text">${fractions[choosen].description}<br>${cityName}</div>`);

        circle.on('mousemove', function (e) {
            tooltip.setLatLng(e.latlng); // Обновляем позицию тултипа на основании событий мыши
            map.openTooltip(tooltip);
        });

        circle.on('mouseout', function () {
            map.closeTooltip(tooltip);
        });

        territories.push(circle);
    }

    function toggleTerritories() {
        territories.forEach(circle => {
            if (map.hasLayer(circle)) {
                map.removeLayer(circle);
            } else {
                map.addLayer(circle);
            }
        });
    }

    window.addTerritory = addTerritory;


    document.getElementById('toggle-territories').addEventListener('click', toggleTerritories);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById('changelog-header').addEventListener('click', function() {
        const changelogContent = document.getElementById('changelog-content');
        if (changelogContent.classList.contains('hidden')) {
            changelogContent.classList.remove('hidden');
            changelogContent.classList.add('visible');
        } else {
            changelogContent.classList.remove('visible');
            changelogContent.classList.add('hidden');
        }
    });

    // Загрузка данных (предыдущий пример)
    fetch('jsData/changelog.json')
        .then(response => response.json())
        .then(data => {
            // Сортировка данных: наиболее свежие изменения помещаются в начало
            data.sort((a, b) => new Date(b.date) - new Date(a.date));

            // Формируем HTML для списка изменений
            const changelogContent = data.map(entry => {
                const formattedDate = formatCustomDate(entry.date);
                const changesList = entry.changes.map(change => `<li>${change}</li>`).join('');
                return `<div class="changelog-entry">
                            <h4>${formattedDate}</h4>
                            <ul>${changesList}</ul>
                        </div>`;
            }).join('');

            // Добавляем контент в наш блок
            document.getElementById('changelog-content').innerHTML = changelogContent;
        });

    // Функция для форматирования даты
    function formatCustomDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear().toString().substring(2); // Берём последние две цифры
        return `${day} ${month}'${year}`;
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    function getIconUrl(type) {
        const typeClass = `${type}-icon`;
        // Создайте временный элемент с корректным CSS-классом
        const div = document.createElement('div');
        div.className = typeClass;
        document.body.appendChild(div);

        const style = window.getComputedStyle(div);
        const backgroundImage = style.backgroundImage;

        // Удалите временный элемент
        document.body.removeChild(div);

        // Извлечение URL из backgroundImage
        if (backgroundImage && backgroundImage !== 'none') {
            const url = backgroundImage.slice(5, -2);  // Если url("...")
            return url;
        }
        return null;
    }

    const localMarkers = {};

    function addLocalMarker(markerData) {
        const iconUrl = getIconUrl(markerData.type);

        if (iconUrl) {
            const markerIcon = L.icon({
                iconUrl: iconUrl,
                iconSize: [32, 32], // размер иконки
                iconAnchor: [16, 32], // центр иконки
                popupAnchor: [0, -32] // место, откуда всплывающее окно будет открываться
            });

            const marker = L.marker(markerData.coordinates, {
                icon: markerIcon,
                opacity: 0.5 // Более прозрачный маркер
            }).addTo(map).bindPopup(`<div class="witcher-style-text">
                <b>Отправленная на добавление вами метка</b> <br>Выбранный тип: ${markerData.type} <br>Заданное описание: ${markerData.text}
                <br>
                <button class="detail-button witcher-style-text" onclick="removeMarker('${getMarkerKey(markerData.coordinates)}')">Удалить метку</button>
                </div>`);
            localMarkers[getMarkerKey(markerData.coordinates)] = marker;
        } else {
            console.error(`Icon URL not found for type: ${markerData.type}`);
        }
    }

    function getMarkerKey(coordinates) {
        return `${coordinates.lat},${coordinates.lng}`;
    }

    const savedMarkers = JSON.parse(localStorage.getItem('pendingMarkers')) || [];

    savedMarkers.forEach(markerData => {
        const iconUrl = getIconUrl(markerData.type);

        if (iconUrl) {
            const markerIcon = L.icon({
                iconUrl: iconUrl,
                iconSize: [32, 32], // размер иконки
                iconAnchor: [16, 32], // центр иконки
                popupAnchor: [0, -32] // место, откуда всплывающее полотно будет открываться
            });

            const marker = L.marker(markerData.coordinates, {
                icon: markerIcon,
                opacity: 0.5 // Более прозрачный маркер
            }).addTo(map).bindPopup(`<div class="witcher-style-text">
                <b>Отправленная на добавление вами метка</b> <br>Выбранный тип: ${markerData.type} <br>Заданное описание: ${markerData.text}
                <br>
                <button class="detail-button witcher-style-text" onclick="removeMarker('${getMarkerKey(markerData.coordinates)}')">Удалить метку</button>
                </div>`);
            localMarkers[getMarkerKey(markerData.coordinates)] = marker;
        } else {
            console.error(`Icon URL not found for type: ${markerData.type}`);
        }
    });

    // Функция удаления метки
    function removeMarker(markerKey) {
        // Удалить маркер с карты
        if (localMarkers[markerKey]) {
            map.removeLayer(localMarkers[markerKey]); // Удаляем сам маркер с карты
            delete localMarkers[markerKey]; // Удаляем запись из локального хранилища маркеров
        }

        // Удалить маркер из localStorage
        const savedMarkers = JSON.parse(localStorage.getItem('pendingMarkers')) || [];
        const updatedMarkers = savedMarkers.filter(marker => getMarkerKey(marker.coordinates) !== markerKey);
        localStorage.setItem('pendingMarkers', JSON.stringify(updatedMarkers));

        Swal.fire({
            title: 'Удалено!',
            text: 'Метка удалена.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }

    window.removeMarker = removeMarker;

    const oneWeek = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
    const currentTime = Date.now();
    const freshMarkers = savedMarkers.filter(marker => currentTime - marker.timestamp < oneWeek);
    localStorage.setItem('pendingMarkers', JSON.stringify(freshMarkers));

    function areCoordinatesClose(coords1, coords2, tolerance = 2) {
        return Math.abs(coords1.lat - coords2.lat) <= tolerance &&
            Math.abs(coords1.lng - coords2.lng) <= tolerance;
    }


    function checkForAddedMarkers() {
        const savedMarkers = JSON.parse(localStorage.getItem('pendingMarkers')) || [];

        const allMarkers = [
            ...essenceStones,
            ...alchemists,
            ...hunters,
            ...armorMen,
            ...weaponMen,
            ...boards,
            ...recipes,
            ...dangerZones,
            ...caves,
            ...granizons,
            ...quests,
            ...traders
        ];

        const addedMarkers = savedMarkers.filter(localMarker =>
            allMarkers.some(marker =>
                areCoordinatesClose(marker.getLatLng(), localMarker.coordinates)
            )
        );

        if (addedMarkers.length > 0) {
            const markerDescriptions = addedMarkers.map(marker => `Метки: ${marker.text}`).join(', ');
            Swal.fire({
                title: 'Метки добавлены!',
                text: `Следующие метки были добавлены на сервер: ${markerDescriptions}`,
                icon: 'info',
                confirmButtonText: 'ОК'
            });

            // Удалить добавленные метки из localStorage и с карты
            addedMarkers.forEach(marker => {
                const key = getMarkerKey(marker.coordinates);
                if (localMarkers[key]) {
                    map.removeLayer(localMarkers[key]); // Удалить с карты
                    delete localMarkers[key]; // Удалить из коллекции локальных маркеров
                }
            });

            const remainingMarkers = savedMarkers.filter(marker => !addedMarkers.includes(marker));
            localStorage.setItem('pendingMarkers', JSON.stringify(remainingMarkers));
        }
    }

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
    document.getElementById('toggle-allloc').addEventListener('click', () => {
        toggleMarkers(allLocations);
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

    document.getElementById('opacity-slider').addEventListener('input', function (event) {
        const opacityValue = event.target.value / 100;
        imageLayer.getElement().style.filter = `brightness(${1 - opacityValue})`;
    });

    const allButtons = document.querySelectorAll('#filter-controls .filter-button');

    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.dataset.tooltip = button.dataset.tooltip.includes('Скрыты') ? button.dataset.tooltip.replace('Скрыты', 'Видимы') : button.dataset.tooltip.replace('Видимы', 'Скрыты');
        });
    });

    document.getElementById('hide-all').addEventListener('click', () => {
        allButtons.forEach(button => {
            button.dataset.tooltip = button.dataset.tooltip.replace('Видимы', 'Скрыты');
            if (!button.id.startsWith('hide-') && !button.id.startsWith('show-')) {
                button.click(); // Симулирует клик для скрытия
            }
        });
    });

    document.getElementById('show-all').addEventListener('click', () => {
        allButtons.forEach(button => {
            button.dataset.tooltip = button.dataset.tooltip.replace('Скрыты', 'Видимы');
            if (!button.id.startsWith('hide-') && !button.id.startsWith('show-')) {
                button.click(); // Симулирует клик для показа
            }
        });
    });

    checkForAddedMarkers();

});
