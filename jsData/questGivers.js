// only persons with quest // NO TRADERS

document.addEventListener('DOMContentLoaded', (event) => {

    addQuestGiver(3145 , 433, {
        name: "Лешек (квестгивер) | Сгоревшая деревня",
        quests: [
            {
                id: "leshek_whathappened",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "leshek_allok",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "leshek_palki",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "leshek_doski",
                level: 7,
                rewards: "20 опыта"
            },
        ]
    });
    addQuestGiver(3128 , 397, {
        name: "Петтер (квестгивер) | Сгоревшая деревня",
        quests: [
            {
                id: "petter_bereg",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "petter_trash",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "petter_svechi",
                level: 7,
                rewards: "20 опыта"
            }
        ]
    });
    addQuestGiver(2773 , 473, {
        name: "Проня (квестгивер) | Белые Сады",
        quests: [
            {
                id: "pronya_dubinu",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "pronya_dream",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "pronya_medicine",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "pronya_sbor",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "pronya_posuda",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "pronya_coalandbranch",
                level: 7,
                rewards: "20 опыта"
            },
            {
                id: "pronya_meh",
                level: 7,
                rewards: "20 опыта"
            }
        ]
    });
});
