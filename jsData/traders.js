document.addEventListener('DOMContentLoaded', (event) => {

    addAlchemist(1733, 1955, {
        name: "Травница | Оксенфурт",
        quests: [
            { 
                id: "alchemist_pepper", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_zubrovka", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_krovostoi", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_lastochka", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_pautinnik", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_scarroweye", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_sporin", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_dvoegrot", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_ballis", 
                level: 60, 
                rewards: "60 опыта"
            }
            
        ]
    });
    
    addTrader(1760 , 1963, {
        name: "Барахольщик | Оксенфурт",
        quests: [
            {
                id: "trader_candelabra",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_inkwell",
                level: 60,
                rewards: "30 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 60, 
                rewards: "30 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 60, 
                rewards: "30 опыта"
            },
            {
                id: "trader_collection",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_smoking",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_seashell",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_perfume",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addHunter(1787 , 1964, {
        name: "Охотник | Оксенфурт",
        quests: [
            {
                id: "hunter_bear",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_olen",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_kaban",
                level: 60,
                rewards: "30 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 60, 
                rewards: "30 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 60, 
                rewards: "30 опыта"
            },
            {
                id: "hunter_utopec",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_halfday",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addArmorman(1744 , 1950, {
        name: "Бронник | Оксенфурт",
        quests: [
            {
                id: "armor_coal",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "armor_order",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "armor_med",
                level: 60,
                rewards: "30 опыта"
            },
            { 
                id: "armor_silver", 
                level: 60, 
                rewards: "30 опыта"
            }
        ]
    });
    addWeaponMan(1763 , 1975, {
        name: "Оружейник | Оксенфурт",
        quests: [
            {
                id: "weapon_silver",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addBoard(1749 , 1981, {
        name: "Трактирщик | Оксенфурт",
        quests: [
            {
                id: "traktir_tarelki",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "traktir_krujki",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "traktir_meat",
                level: 60,
                rewards: "30 опыта",
                notes: "10 мяса можно купить у него же"
            },
            { 
                id: "traktir_fish", 
                level: 60, 
                rewards: "30 опыта",
                notes: "5 рыбы можно купить у него же"
            },
            { 
                id: "traktir_glam", 
                level: 60, 
                rewards: "30 опыта",
                notes: "гламур выгоднее продавать, а духи сдавать барахольщику"
            }
        ]
    });
    
    
    addGarnizon(1830 , 1735, '<b>Гарнизон Редании</b>');
    addQuest(1772 , 1954, '<b>Работа | Мешки</b> <br> Таскание мешков за 4 кроны')
    /// Вроницы
    addBoard(700 , 1279, {
        name: "Трактирщик | Вроницы",
        quests: [
            {
                id: "traktir_tarelki",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "traktir_krujki",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "traktir_meat",
                level: 60,
                rewards: "30 опыта",
                notes: "10 мяса можно купить у него же"
            },
            { 
                id: "traktir_fish", 
                level: 60, 
                rewards: "30 опыта",
                notes: "5 рыбы можно купить у него же"
            },
            { 
                id: "traktir_glam", 
                level: 60, 
                rewards: "30 опыта",
                notes: "гламур выгоднее продавать, а духи сдавать барахольщику"
            }
        ]
    });
    addTrader(707 , 1265, {
        name: "Барахольщик | Вроницы",
        quests: [
            {
                id: "trader_candelabra",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_inkwell",
                level: 60,
                rewards: "30 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 60, 
                rewards: "30 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 60, 
                rewards: "30 опыта"
            },
            {
                id: "trader_collection",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_smoking",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_seashell",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_perfume",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addAlchemist(667 , 1252, {
        name: "Травница | Вроницы",
        quests: [
            { 
                id: "alchemist_pepper", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_zubrovka", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_krovostoi", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_lastochka", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_pautinnik", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_scarroweye", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_sporin", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_dvoegrot", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_ballis", 
                level: 60, 
                rewards: "60 опыта"
            }
            
        ]
    });
    addHunter(651 , 1274, {
        name: "Охотник | Вроницы",
        quests: [
            {
                id: "hunter_bear",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_olen",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_kaban",
                level: 60,
                rewards: "30 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 60, 
                rewards: "30 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 60, 
                rewards: "30 опыта"
            },
            {
                id: "hunter_utopec",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_halfday",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addArmorman(682 , 1263, {
        name: "Бронник | Вроницы",
        quests: [
            {
                id: "armor_coal",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "armor_order",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "armor_med",
                level: 60,
                rewards: "30 опыта"
            },
            { 
                id: "armor_silver", 
                level: 60, 
                rewards: "30 опыта"
            }
        ]
    });
    addWeaponMan(674 , 1262, {
        name: "Оружейник | Вроницы",
        quests: [
            {
                id: "weapon_silver",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addGarnizon(644 , 1329, '<b>Гарнизон Людей Барона</b>');
    /// Вызима
    /// Эльфы
    addBoard(2354 , 2949, {
        name: "Трактирщик | Эльфы",
        quests: [
            {
                id: "traktir_tarelki",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "traktir_krujki",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "traktir_meat",
                level: 60,
                rewards: "30 опыта",
                notes: "10 мяса можно купить у него же"
            },
            { 
                id: "traktir_fish", 
                level: 60, 
                rewards: "30 опыта",
                notes: "5 рыбы можно купить у него же"
            },
            { 
                id: "traktir_glam", 
                level: 60, 
                rewards: "30 опыта",
                notes: "гламур выгоднее продавать, а духи сдавать барахольщику"
            }
        ]
    });
    addHunter(2341 , 3038, {
        name: "Охотник | Эльфы",
        quests: [
            {
                id: "hunter_bear",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_olen",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_kaban",
                level: 60,
                rewards: "30 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 60, 
                rewards: "30 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 60, 
                rewards: "30 опыта"
            },
            {
                id: "hunter_utopec",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "hunter_halfday",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addTrader(2329 , 3035, {
        name: "Барахольщик | Эльфы",
        quests: [
            {
                id: "trader_candelabra",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_inkwell",
                level: 60,
                rewards: "30 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 60, 
                rewards: "30 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 60, 
                rewards: "30 опыта"
            },
            {
                id: "trader_collection",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_smoking",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_seashell",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "trader_perfume",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addAlchemist(2308 , 3054,  {
        name: "Травница | Эльфы",
        quests: [
            { 
                id: "alchemist_pepper", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_zubrovka", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_krovostoi", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_lastochka", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_pautinnik", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_scarroweye", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_sporin", 
                level: 60, 
                rewards: "60 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_dvoegrot", 
                level: 60, 
                rewards: "60 опыта"
            },
            { 
                id: "alchemist_ballis", 
                level: 60, 
                rewards: "60 опыта"
            }
            
        ]
    });
    addWeaponMan(2227 , 3035, {
        name: "Оружейник | Эльфы",
        quests: [
            {
                id: "weapon_silver",
                level: 60,
                rewards: "30 опыта"
            }
        ]
    });
    addArmorman(2188 , 2887, {
        name: "Бронник | Эльфы",
        quests: [
            {
                id: "armor_coal",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "armor_order",
                level: 60,
                rewards: "30 опыта"
            },
            {
                id: "armor_med",
                level: 60,
                rewards: "30 опыта"
            },
            { 
                id: "armor_silver", 
                level: 60, 
                rewards: "30 опыта"
            }
        ]
    });
    addArmorman(1184 , 1606, {
        name: "Бронник | Деревня Яворник",
        quests: [
            {
                id: "weapon_silver",
                level: 60,
                rewards: "30 опыта",
                notes: "После выполнения задания - появятся новые квесты у этого трейдера"
            }
        ]
    });
    addGarnizon(2233 , 2966, '<b>Гарнизон Эльфов</b>');
    /// Белые сады
    // addAlchemist(2615 , 487, '<b>Трейдер | Травница №5</b> <br>Описание');
    // addHunter(2751 , 407, '<b>Трейдер | Охотник №5</b> <br>Описание');
    // addBoard(2820 , 489, '<b>Трейдер | Трактирщи №5к</b>');
    // addArmorman(2789 , 458, '<b>Трейдер | Бронник</b> <br>Описание');
    // addWeaponMan(2784 , 456, '<b>Трейдер | Оружейник</b> <br>Описание');
    /// Остальное
    addBoard(903 , 1587, {
        name: "Трактирщик | Temp1",
        quests: [
            {
                id: "traktir_tarelki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_krujki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_meat",
                level: 40,
                rewards: "20 опыта",
                notes: "10 мяса можно купить у него же"
            },
            { 
                id: "traktir_fish", 
                level: 40, 
                rewards: "20 опыта",
                notes: "5 рыбы можно купить у него же"
            },
            { 
                id: "traktir_glam", 
                level: 40, 
                rewards: "20 опыта",
                notes: "гламур выгоднее продавать, а духи сдавать барахольщику"
            }
        ]
    });
    addBoard(1174 , 2275, {
        name: "Трактирщик | Temp1",
        quests: [
            {
                id: "traktir_tarelki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_krujki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_meat",
                level: 40,
                rewards: "20 опыта",
                notes: "10 мяса можно купить у него же"
            },
            { 
                id: "traktir_fish", 
                level: 40, 
                rewards: "20 опыта",
                notes: "5 рыбы можно купить у него же"
            },
            { 
                id: "traktir_glam", 
                level: 40, 
                rewards: "20 опыта",
                notes: "гламур выгоднее продавать, а духи сдавать барахольщику"
            }
        ]
    });
    addBoard(1398 , 1810, {
        name: "Трактирщик | Каменоломня Старые Хрычи",
        quests: [
            {
                id: "traktir_tarelki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_krujki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_meat",
                level: 40,
                rewards: "20 опыта",
                notes: "10 мяса можно купить у него же"
            },
            { 
                id: "traktir_fish", 
                level: 40, 
                rewards: "20 опыта",
                notes: "5 рыбы можно купить у него же"
            },
            { 
                id: "traktir_glam", 
                level: 40, 
                rewards: "20 опыта",
                notes: "гламур выгоднее продавать, а духи сдавать барахольщику"
            },
            {
                id: "traktirext_lutnya",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktirext_polovik",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktirext_branches",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addBoard(1182 , 1635, {
        name: "Трактирщик | Деревня Яворник",
        quests: [
            {
                id: "traktir_tarelki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_krujki",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktir_meat",
                level: 40,
                rewards: "20 опыта",
                notes: "10 мяса можно купить у него же"
            },
            { 
                id: "traktir_fish", 
                level: 40, 
                rewards: "20 опыта",
                notes: "5 рыбы можно купить у него же"
            },
            { 
                id: "traktir_glam", 
                level: 40, 
                rewards: "20 опыта",
                notes: "гламур выгоднее продавать, а духи сдавать барахольщику"
            },
            {
                id: "traktirext_lutnya",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktirext_polovik",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "traktirext_branches",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addAlchemist(581 , 1047, {
        name: "Травница | Temp1",
        quests: [
            { 
                id: "alchemist_pepper", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_zubrovka", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_krovostoi", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_lastochka", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_pautinnik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_scarroweye", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_sporin", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_dvoegrot", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_ballis", 
                level: 40, 
                rewards: "40 опыта"
            }
            
        ]
    });
    addAlchemist(641 , 869, {
        name: "Травница | Temp2",
        quests: [
            { 
                id: "alchemist_pepper", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_zubrovka", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_krovostoi", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_lastochka", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_pautinnik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_scarroweye", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_sporin", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_dvoegrot", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_ballis", 
                level: 40, 
                rewards: "40 опыта"
            }
            
        ]
    });
    addAlchemist(232 , 1030, {
        name: "Травница | Деревня Подлесье",
        quests: [
            { 
                id: "alchemist_pepper", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_zubrovka", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_krovostoi", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_lastochka", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_pautinnik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_scarroweye", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_sporin", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemist_dvoegrot", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemist_ballis", 
                level: 40, 
                rewards: "40 опыта"
            }
            
        ]
    });
    addAlchemist(1402 , 1214, {
        name: "Травница | Temp4",
        quests: []
    });
    addAlchemist(887 , 1600, {
        name: "Травница | Temp5",
        quests: []
    });
    addAlchemist(1708 , 1277, {
        name: "Травница | Temp6",
        quests: []
    });
    addAlchemist(62 , 956, {
        name: "Травница | Лесопилка Брука",
        quests: [
            { 
                id: "alchemistalt_podorojnik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_arenaria", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemistalt_verbena", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_volkoboi", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_oduvanchik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_naker", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Открывающее задание"
            },
            { 
                id: "alchemistalt_utopec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_gnilec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfnight", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfday", 
                level: 40, 
                rewards: "40 опыта"
            }
            
        ]
    });
    addAlchemist(868 , 1159, {
        name: "Травница | Лагерь поддержки",
        quests: [
            { 
                id: "alchemistalt_podorojnik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_arenaria", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemistalt_verbena", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_volkoboi", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_oduvanchik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_naker", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Открывающее задание"
            },
            { 
                id: "alchemistalt_utopec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_gnilec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfnight", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfday", 
                level: 40, 
                rewards: "40 опыта"
            }
            
        ]
    });
    addAlchemist(1176 , 1647, {
        name: "Травница | Деревня Яворник",
        quests: [
            { 
                id: "alchemistalt_podorojnik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_arenaria", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemistalt_verbena", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_volkoboi", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_oduvanchik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_naker", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Открывающее задание"
            },
            { 
                id: "alchemistalt_utopec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_gnilec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfnight", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfday", 
                level: 40, 
                rewards: "40 опыта"
            }
            
        ]
    });
    addAlchemist(1619 , 2256, {
        name: "Травница | Деревня Карстен",
        quests: [
            { 
                id: "alchemistalt_podorojnik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_arenaria", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Недобываемая трава"
            },
            { 
                id: "alchemistalt_verbena", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_volkoboi", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_oduvanchik", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_naker", 
                level: 40, 
                rewards: "40 опыта",
                notes: "Открывающее задание"
            },
            { 
                id: "alchemistalt_utopec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_gnilec", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfnight", 
                level: 40, 
                rewards: "40 опыта"
            },
            { 
                id: "alchemistalt_halfday", 
                level: 40, 
                rewards: "40 опыта"
            }
            
        ]
    });
    addAlchemist(464 , 1597, {
        name: "Травница | Деревня Вересковка",
        quests: []
    });
    addTrader(584 , 1035, {
        name: "Барахольщик | Temp1",
        quests: [
            {
                id: "trader_candelabra",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_inkwell",
                level: 40,
                rewards: "20 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_seashell",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addTrader(248 , 1012, {
        name: "Барахольщик | Деревня Подлесье",
        quests: [
            {
                id: "trader_candelabra",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_inkwell",
                level: 40,
                rewards: "20 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_seashell",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addTrader(326 , 390, {
        name: "Барахольщик | Деревня Хель",
        quests: [
            {
                id: "trader_candelabra",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_inkwell",
                level: 40,
                rewards: "20 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_seashell",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addTrader(61 , 968, {
        name: "Барахольщик | Лесопилка Брука",
        quests: [
            {
                id: "trader_candelabra",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_inkwell",
                level: 40,
                rewards: "20 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_seashell",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addTrader(1394 , 1799, {
        name: "Барахольщик | Каменоломня Старые Хрычи",
        quests: [
            {
                id: "trader_candelabra",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_inkwell",
                level: 40,
                rewards: "20 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_seashell",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addTrader(471 , 1583, {
        name: "Барахольщик | Деревня Вересковка",
        quests: [
            {
                id: "trader_candelabra",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_inkwell",
                level: 40,
                rewards: "20 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_seashell",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addTrader(845 , 1140, {
        name: "Барахольщик | Лагерь поддержки",
        quests: [
            {
                id: "trader_candelabra",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_butter_knife",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_inkwell",
                level: 40,
                rewards: "20 опыта",
                notes: "чернильницу можно купить у этого же трейдера"
            },
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "trader_glasses", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_seashell",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addTrader(1636 , 2255, {
        name: "Барахольщик | Деревня Карстен",
        quests: [
            { 
                id: "trader_blades", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "trader_collection",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_smoking",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "trader_perfume",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addHunter(585 , 837, {
        name: "Охотник | Temp1",
        quests: [
            {
                id: "hunter_bear",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_olen",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_kaban",
                level: 40,
                rewards: "20 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "hunter_utopec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfday",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addHunter(231 , 1009, {
        name: "Охотник | Деревня Подлесье",
        quests: [
            {
                id: "hunter_bear",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_olen",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_kaban",
                level: 40,
                rewards: "20 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "hunter_utopec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfday",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addHunter(308 , 414, {
        name: "Охотник | Дервня Хель",
        quests: [
            {
                id: "hunter_bear",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_olen",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_kaban",
                level: 40,
                rewards: "20 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "hunter_utopec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfday",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addHunter(52 , 964, {
        name: "Охотник | Лесопилка Брука",
        quests: [
            {
                id: "hunter_bear",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_olen",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_kaban",
                level: 40,
                rewards: "20 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "hunter_utopec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfday",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addHunter(1379 , 1795, {
        name: "Охотник | Каменоломня Старые Хрычи",
        quests: [
            {
                id: "hunter_bear",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_olen",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_kaban",
                level: 40,
                rewards: "20 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "hunter_utopec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfday",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addHunter(849 , 1172, {
        name: "Охотник | Лагерь поддержки",
        quests: [
            {
                id: "hunter_bear",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_olen",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_kaban",
                level: 40,
                rewards: "20 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 40, 
                rewards: "20 опыта"
            },
            { 
                id: "hunter_naker", 
                level: 40, 
                rewards: "20 опыта"
            },
            {
                id: "hunter_utopec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_gnilec",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfnight",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_halfday",
                level: 40,
                rewards: "20 опыта"
            }
        ]
    });
    addHunter(1619 , 2230, {
        name: "Охотник | Деревня Карстен",
        quests: [
            {
                id: "hunter_bear",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_olen",
                level: 40,
                rewards: "20 опыта"
            },
            {
                id: "hunter_kaban",
                level: 40,
                rewards: "20 опыта"
            },
            { 
                id: "hunter_kozy", 
                level: 40, 
                rewards: "20 опыта"
            }
        ]
    });
    addQuest(309 , 396, '<b>Работа | Грузчик | Деревня Хель</b> <br> Перетащить мешки');
    addQuest(494 , 1588, '<b>Работа | Фермер | Деревня Вересковка</b> <br> Собирать урожай');
    addQuest(458 , 1624, '<b>Работа | Доярка | Деревня Вересковка</b> <br> Доить коровв');
    addQuest(61 , 963, '<b>Работа | Дровосек | Лесопилка Брука</b> <br> Валить лес. За бревно 16 крон.');
    addQuest(837 , 1171, '<b>Работа | Грузчик | Лагерь поддержки</b> <br> Перетащить мешки.');
    addQuest(1160 , 1645, '<b>Работа | Фермер | Деревня Яворник</b> <br> Собирать урожай');
    addQuest(1174 , 1640, '<b>Работа | Грузчик | Деревня Яворник</b> <br> Перетащить мешки');


});
