const questsData = {
    "trader_inkwell": {
        "title": "Писарь требует",
        "requirements": "Принести 1 чернильницу"
    },
    "trader_blades": {
        "title": "Опасная гладкость",
        "requirements": "Принести 2 бритвы"
    },
    "trader_glasses": {
        "title": "От морозов",
        "requirements": "Принести 10 стекла"
    },
    "trader_collection": {
        "title": "Коллекционер",
        "requirements": "Принести 5 штук Ценного ископаемого"
    },
    "trader_smoking": {
        "title": "Курение убивает",
        "requirements": "Принести 2 трубки для курения"
    },
    "trader_candelabra": {
        "title": "Перепродажа: два Канделябра",
        "requirements": "Принести 2 канделября"
    },
    "trader_butter_knife": {
        "title": "Перепродажа: нож для масла",
        "requirements": "Принести 5 ножей для масла"
    },
    "trader_seashell": {
        "title": "На море был?",
        "requirements": "Принести 2 ракушки<br>Принести 1 морскую ракушку"
    },
    "trader_perfume": {
        "title": "Духи для лювбви",
        "requirements": "Принести 2 флакона духов"
    },
    "alchemist_pepper": {
        "title": "Сбор: Корень душистого перца",
        "requirements": "Принести 3 корня душистого перца"
    },
    "alchemist_zubrovka": {
        "title": "Сбор: Травка-зубровка",
        "requirements": "Принести 3 травки-зубровки"
    },
    "alchemist_krovostoi": {
        "title": "Сбор: Кровостой",
        "requirements": "Принести 4 кровостоя"
    },
    "alchemist_lastochka": {
        "title": "Сбор: Ласточкина трава",
        "requirements": "Принести 3 ласточкиной травы"
    },
    "alchemist_pautinnik": {
        "title": "Сбор: Паутинник",
        "requirements": "Принести 3 паутинника"
    },
    "alchemist_scarroweye": {
        "title": "Сбор: Воронний глаз",
        "requirements": "Принести 3 воронних глаза"
    },
    "alchemist_sporin": {
        "title": "Сбор: Семена спорыни",
        "requirements": "Принести 3 семян спорыни"
    },
    "alchemist_dvoegrot": {
        "title": "Сбор: Двоегрот",
        "requirements": "Принести 2 двоегрота"
    },
    "alchemist_ballis": {
        "title": "Сбор: Плод баллиса",
        "requirements": "Принести 3 плода баллиса"
    },
    "alchemistalt_podorojnik": {
        "title": "Подорожник",
        "requirements": "Принести 3 подорожника"
    },
    "alchemistalt_arenaria": {
        "title": "Аренария",
        "requirements": "Принести 3 цветка аренарии"
    },
    "alchemistalt_verbena": {
        "title": "Вербена",
        "requirements": "Принести 3 цветка вербены"
    },
    "alchemistalt_volkoboi": {
        "title": "Волкобой",
        "requirements": "Принести 3 цветка волкобоя"
    },
    "alchemistalt_oduvanchik": {
        "title": "Одуванчик",
        "requirements": "Принести 3 цветка одуванчика"
    },
    "alchemistalt_naker": {
        "title": "Полезные чудища: Накер",
        "requirements": "Принести 3 крови накера"
    },
    "alchemistalt_utopec": {
        "title": "Полезные чудища: Утопец",
        "requirements": "Принести 2 водных эссенции"
    },
    "alchemistalt_gnilec": {
        "title": "Полезные чудища: Гнилец",
        "requirements": "Принести 3 крови Гнильца"
    },
    "alchemistalt_halfnight": {
        "title": "Полезные чудищ: Полуночница",
        "requirements": "Принести 1 призрачную пыль"
    },
    "alchemistalt_halfday": {
        "title": "Полезные чудищ: Полудница",
        "requirements": "Принести 1 эссенцию света"
    },
    "hunter_bear": {
        "title": "Охота на медведя",
        "requirements": "Принести 1 шкуру медведя"
    },
    "hunter_olen": {
        "title": "Охота на оленя",
        "requirements": "Принести 2 шкуры оленя"
    },
    "hunter_kaban": {
        "title": "Охота на кабана",
        "requirements": "Принести 2 шкуры кабана"
    },
    "hunter_kozy": {
        "title": "Шкура козы",
        "requirements": "Принести 2 шкуры козы"
    },
    "hunter_naker": {
        "title": "Убийство чудищ: Накер",
        "requirements": "Принести 3 когтя Накера"
    },
    "hunter_utopec": {
        "title": "Убийство чудищ: Утопец",
        "requirements": "Принести 3 глаза чудища"
    },
    "hunter_gnilec": {
        "title": "Убийство чудищ: Гнилец",
        "requirements": "Принести 1 мозг чудища"
    },
    "hunter_halfnight": {
        "title": "Убийство чудищ: Полуночница",
        "requirements": "Принести 1 тёмную эссенцию"
    },
    "hunter_halfday": {
        "title": "Убийство чудищ: Полудница",
        "requirements": "Принести 1 эссенцию света"
    },
    "traktir_tarelki": {
        "title": "Нужны тарелки",
        "requirements": "Принести 5 тарелок"
    },
    "traktir_krujki": {
        "title": "Пивная тара",
        "requirements": "Принести 5 кружок"
    },
    "traktir_stealing": {
        "title": "Воруют ироды",
        "requirements": "Принести 5 кружок"
    },
    "traktir_meat": {
        "title": "Давай мяса",
        "requirements": "Принести 10 кусков мяса"
    },
    "traktir_fish": {
        "title": "Рыбные котлеты",
        "requirements": "Принести 5 штук сырой рыбы"
    },
    "traktir_glam": {
        "title": "Модные порывыв",
        "requirements": "Принести 5 парфюма<br>Принести 5 гламура"
    },
    "traktir_deficit": {
        "title": "Вечный дефицит",
        "requirements": "Принести 5 тарелок*"
    },
    "traktirext_lutnya": {
        "title": "Бард без лютни",
        "requirements": "Принести 1 лютню"
    },
    "traktirext_polovik": {
        "title": "Черпак",
        "requirements": "Принести 1 ополовник"
    },
    "traktirext_branches": {
        "title": "Потребности корчмы",
        "requirements": "Принести 10 палок"
    },
    "armor_coal": {
        "title": "Уголь в топку",
        "requirements": "Принести 5 штук угля"
    },
    "armor_order": {
        "title": "Заказ",
        "requirements": "Принести 5 штук угля<br>Принести 5 железной руды"
    },
    "armor_med": {
        "title": "Медь важна",
        "requirements": "Принести 5 штук медной руды"
    },
    "armor_silver": {
        "title": "Серебро как золото",
        "requirements": "Принести 2 штуки серебряной руды"
    },
    "armor_shasaint": {
        "title": "Шахтер: Светящаяся руда",
        "requirements": "Принести 2 штуки светящейся руды"
    },
    "armor_shagold": {
        "title": "Шахтер: Золотая руда",
        "requirements": "Принести 2 штуки золотой руды"
    },
    "armor_shasvin": {
        "title": "Шахтер: Свинцовая руда",
        "requirements": "Принести 4 штуки свинцовой руды"
    },
    "blacksmith_coal": {
        "title": "Уголь для ковки*",
        "requirements": "Принести 10 угля"
    },
    "blacksmith_ancient": {
        "title": "Дрова для печи*",
        "requirements": "Принести 10 палок"
    },
    "blacksmith_drova": {
        "title": "Древние писания",
        "requirements": "Принести 2 штуки древнего ископаемого"
    },
    "suarmor_med": {
        "title": "Подмастерье: Слитки меди",
        "requirements": "Принести 3 слитка меди"
    },
    "suarmor_med": {
        "title": "Подмастерье: Слитки тёмного железа",
        "requirements": "Принести 3 слитка тёмного железа"
    },
    "suarmor_med": {
        "title": "Подмастерье: Слитки святящяйся руды",
        "requirements": "Принести 2 слитка святящяйся руды"
    },
    "suarmor_med": {
        "title": "Подмастерье: Слитки золота",
        "requirements": "Принести 2 слитка золота"
    },
    "suarmor_med": {
        "title": "Подмастерье: Серебряные слитки",
        "requirements": "Принести 3 слитка серебра"
    },
    "suarmor_med": {
        "title": "Подмастерье: Стальные слитки",
        "requirements": "Принести 3 слитка стали"
    },
    "suarmor_med": {
        "title": "Подмастерье: Орихалковые слитки",
        "requirements": "Принести 2 слитка орихалка"
    },
    "suarmor_med": {
        "title": "Подмастерье: Слиток тёмной стали",
        "requirements": "Принести 3 слитка тёмной стали"
    },
    "leshek_whathappened": {
        "title": "Разведчик",
        "requirements": "Узнать что случилось. Необходимо отправиться на поле битвы (Опасное место №1 на севере от квестовика)."
    },
    "leshek_allok": {
        "title": "А вдруг чудовище",
        "requirements": "Убедиться что всё хорошо. Необходимо посетить руины недалеко от сгоревшей деревни."
    },
    "leshek_palki": {
        "title": "Собрать хворост",
        "requirements": "Принести 10 палок"
    },
    "leshek_doski": {
        "title": "Выручи",
        "requirements": "Принести 10 досок"
    },
    "petter_bereg": {
        "title": "Береговой",
        "requirements": "Проверить берег. Необходимо пройтись по берегу недалеко от деревни."
    },
    "petter_trash": {
        "title": "Нужный мусор",
        "requirements": "Принести 2 сломанных весла<br>Принести одну шину"
    },
    "petter_svechi": {
        "title": "Свечи",
        "requirements": "Принести 2 свечи"
    },
    "pronya_dubinu": {
        "title": "Дубину купишь?",
        "requirements": "Принести 2 шелка"
    },
    "pronya_dream": {
        "title": "Погоня за мечтой",
        "requirements": "Принести 1 парфюм<br>Принести 1 гламур"
    },
    "pronya_medicine": {
        "title": "Лучшее лекарство",
        "requirements": "Принести 1 медвежий жир"
    },
    "pronya_sbor": {
        "title": "Сбор урожая",
        "requirements": "Принести 4 вязки пшеницы"
    },
    "pronya_posuda": {
        "title": "Ложки вилки",
        "requirements": "Принести 1 набор посуды"
    },
    "pronya_coalandbranch": {
        "title": "Школа на дому",
        "requirements": "Принести 1 уголь<br>Принести 1 палку"
    },
    "pronya_meh": {
        "title": "Мех для подушки",
        "requirements": "Принести 4 меха"
    },
    "newbee_alch": {
        "title": "Знакомство с ремеслом травника*",
        "requirements": "Принести 1 подорожник<br>Принести 1 леписток ганации<br>Принести 1 плод баллисы<br>Принести 1 одуванчик<br>Принести 1 плод берберки"
    }
};
