// Конфигурация сайта FAUST SHOP
const config = {
    siteName: "FAUST SHOP",
    logoUrl: "images/logo.png",
    description: "Магазин уникальных, а главное, качественных моделей для ГТА 5",
    socialLinks: {
        vk: "https://vk.com/faust_shop_official",
        telegram: "#",
        youtube: "https://youtube.com",
        github: "https://github.com"
    },
    contacts: {
        email: "info@faust-shop.ru",
        phone: "+7 (XXX) XXX-XX-XX",
        telegram: "@faust_shop",
        workingHours: {
            weekdays: "Пн-Пт: 10:00 - 20:00",
            weekends: "Сб-Вс: 12:00 - 18:00"
        }
    },
    sliderImages: [
        "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
        "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
        "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
        "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
        "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
        "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
    ],
    reviews: [
        {
            text: "Здесь мне мало того что продали красивую и качественную модель так ещё и помогли решить проблему которая у меня появилась, делали все что бы её убрать.",
            author: "Павел Коновалов"
        },
        {
            text: "Магазин топовый машины сделаны очень красиво! Все супер все четко буду еще покупать)",
            author: "Никита Семеркин"
        },
        {
            text: "Чудесный интернет-магазин. Модели сделаны качественно. Постоянно разрабатывается что-то новое.",
            author: "Кирилл Прозоров"
        },
        {
            text: "Это самое лучшее место где можно купить качественные модели, всем советую этот магазин, заслужил все 5 звезд",
            author: "Павел Евгеньевич Дрындин"
        },
        {
            text: "Заказывал в первый раз, сделали всё как и просил, цена приемлемая, всем советую, продавец очень хороший",
            author: "Андрей Лавров"
        },
        {
            text: "Самый лучший шоп! Выйграл конкурс на гта 5 , выдали в самые быстрые сроки! док-ва могу дать в лс!",
            author: "Димка Золорев"
        },
        {
            text: "Просто офигеть как быстро и легко! Тут всегда буду закупаться!",
            author: "Иван Толстых"
        },
        {
            text: "Отличный магазин, быстрая поддержка, качественные модели. Рекомендую!",
            author: "Роман Леонтьев"
        }
    ],
products: [
    {
        id: "amarok-codd",
        name: "АМАРОК | ЦОДД | ГТА 5 | ELS/NON ELS",
        description: "Высококачественная модель АМАРОК для ЦОДД с детализированным интерьером и уникальным тюнингом. Полностью работоспособные фары, поворотники и спецсигналы. Модель оптимизирована для использования в GTA 5 и FiveM.",
        price: "795.00₽",
        image: "https://i.imgur.com/2YpZBaC.png",
        categories: ["civil", "dps"],
        publishDate: "2025-03-15",
        images: [
            "https://i.imgur.com/yKS5luQ.png",
            "https://i.imgur.com/LDne2rC.png",
            "https://i.imgur.com/MD3dou3.png",
            "https://i.imgur.com/KIabq5p.png",
            "https://i.imgur.com/8VT6gyQ.png",
            "https://i.imgur.com/oGWUyTP.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "chevrolet-cobalt-kz",
        name: "ШЕВРОЛЕ КОБАЛЬТ | ПОЛИЦИЯ КАЗАХСТАНА | ГТА 5 | ELS/NON ELS",
        description: "Реалистичная модель ШЕВРОЛЕ КОБАЛЬТ для полиции Казахстана с работающими фарами и поворотниками. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
        price: "595.00₽",
        image: "https://i.imgur.com/65uoskk.png",
        categories: ["dps", "foreign"],
        images: [
            "https://i.imgur.com/JBKbKsq.png",
            "https://i.imgur.com/L648z6G.png",
            "https://i.imgur.com/eiKMHhN.png"
        ],
        features: [
            "Аутентичная полицейская раскраска",
            "Рабочие спецсигналы",
            "Детализированный салон",
            "Кастомные текстуры",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель"
        ]
    },
    {
        id: "uaz-esaul",
        name: "УАЗ ПАТРИОТ 'ЕСАУЛ' | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Детализированный УАЗ ПАТРИОТ для МЧС с возможностью кастомизации и уникальными текстурами. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
        price: "995.00₽",
        image: "https://i.imgur.com/9QsadcT.png",
        categories: ["mchs"],
        images: [
            "https://i.imgur.com/pATlxi7.png",
            "https://i.imgur.com/XVEzC3X.png",
            "https://i.imgur.com/2221C5k.png",
            "https://i.imgur.com/fOnZc4N.png",
            "https://i.imgur.com/MAfd6Bo.png",
            "https://i.imgur.com/N2CNMS3.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "lada-largus-fssp",
        name: "ЛАДА ЛАРГУС | ФССП | ГТА 5",
        description: "Качественная модель ЛАДА ЛАРГУС для ФССП с детализированным интерьером и уникальным тюнингом. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
        price: "499.00₽",
        image: "https://i.imgur.com/U2tPqbN.png",
        categories: ["civil", "fsin"],
        images: [
            "https://i.imgur.com/fTa6l7V.png",
            "https://i.imgur.com/BPoaxEf.png",
            "https://i.imgur.com/RLOjmuB.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "haval-jolion-pps",
        name: "ХАВАЛ ДЖОЛИОН V2 | ППС | ГТА 5 | ELS/NON ELS",
        description: "Современная модель ХАВАЛ ДЖОЛИОН V2 для ППС с работающими фарами и поворотниками. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
        price: "895.00₽",
        image: "https://i.imgur.com/wPk673p.png",
        categories: ["pps"],
        images: [
            "https://i.imgur.com/ZYtpUoT.png",
            "https://i.imgur.com/UfCChHi.png",
            "https://i.imgur.com/GglHFrq.png",
            "https://i.imgur.com/Hmx1hHa.png",
            "https://i.imgur.com/61S47AU.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "eup-uniforms",
        name: "Набор одежды для EUP | Гос. Структуры России",
        description: "Полный набор одежды для EUP, включающий все необходимые элементы для государственных структур. Высокое качество текстур и детализации.",
        price: "885.00₽",
        image: "https://i.imgur.com/HioGTF5.png",
        categories: ["all", "dps", "pps", "mchs", "fso", "skrf", "fsin"],
        images: [
            "https://i.imgur.com/0QjRknE.png",
            "https://i.imgur.com/EpsJl6c.png",
            "https://i.imgur.com/HUhv0nq.png"
        ],
        features: [
            "Полный набор униформы",
            "Высокое качество текстур",
            "Детализированные модели",
            "Совместимость с EUP",
            "Различные варианты формы",
            "Простая установка"
        ]
    },
    {
        id: "dps-baton",
        name: "Жезл регулировщика ДПС | SP / FiveM",
        description: "Качественный жезл регулировщика ДПС для использования в SP и FiveM. Детализированная модель с реалистичными текстурами.",
        price: "105.00₽",
        image: "https://i.imgur.com/MDLWMaJ.png",
        categories: ["mods"],
        images: [
            "https://i.imgur.com/fiBXqy9.png",
            "https://i.imgur.com/Z0tQpgA.png",
            "https://i.imgur.com/ODQw1Ym.png",
            "https://i.imgur.com/dJpQjjH.png"
        ],
        features: [
            "Детализированная модель",
            "Реалистичные текстуры",
            "Совместимость с SP и FiveM",
            "Простая установка",
            "Оптимизированная модель",
            "Работает с анимациями"
        ]
    },
    {
        id: "tow-truck-pack",
        name: "ПАК | 3 Эвакуатора / Gazel+Gazon+GazNN",
        description: "Комплект из 3 эвакуаторов: Gazel, Gazon и GazNN с детализированными текстурами. Полностью рабочие модели с функционалом эвакуатора.",
        price: "1199.00₽",
        image: "https://i.imgur.com/xzdEChu.png",
        categories: ["civil", "packs"],
        images: [
            "https://i.imgur.com/GuNdK4V.png",
            "https://i.imgur.com/FxYbaHg.png",
            "https://i.imgur.com/hvcu8VX.png",
            "https://i.imgur.com/nOxImBR.png"
        ],
        features: [
            "3 модели в одном пакете",
            "Полностью рабочие эвакуаторы",
            "Детализированные текстуры",
            "Реалистичная физика",
            "Оптимизированные модели",
            "Простая установка"
        ]
    },
    {
        id: "gazel-nn-tow",
        name: "GAZel NN | Эвакуатор | ГТА 5 | ELS/NON ELS",
        description: "Модель GAZel NN в варианте эвакуатора с работающими фарами и поворотниками. Полностью рабочий эвакуатор с функционалом.",
        price: "595.00₽",
        image: "https://i.imgur.com/jDdOo9j.png",
        categories: ["civil"],
        images: [
            "https://i.imgur.com/5JAADK1.png",
            "https://i.imgur.com/6hnJtfS.png"
        ],
        features: [
            "Рабочий эвакуатор",
            "Детализированные текстуры",
            "Реалистичная физика",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Простая установка"
        ]
    },
    {
        id: "gazon-next-tow",
        name: "GAZon NEXT | Эвакуатор | ГТА 5 | ELS/NON ELS",
        description: "Модель GAZon NEXT в варианте эвакуатора с детализированным интерьером. Полностью рабочий эвакуатор с функционалом.",
        price: "595.00₽",
        image: "https://i.imgur.com/PY15pKz.png",
        categories: ["civil"],
        images: [
            "https://i.imgur.com/pGbwVPz.png",
            "https://i.imgur.com/4TWC2II.png",
            "https://i.imgur.com/ZE335n2.png"
        ],
        features: [
            "Рабочий эвакуатор",
            "Детализированные текстуры",
            "Реалистичная физика",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Простая установка"
        ]
    },
    {
        id: "gazel-tow",
        name: "GAZel | Эвакуатор | ГТА 5 | ELS/NON ELS",
        description: "Классическая модель GAZel в варианте эвакуатора с уникальными текстурами. Полностью рабочий эвакуатор с функционалом.",
        price: "595.00₽",
        image: "https://i.imgur.com/zX9xSFa.png",
        categories: ["civil"],
        images: [
            "https://i.imgur.com/nm6fuGS.png",
            "https://i.imgur.com/rYmu3RC.png",
            "https://i.imgur.com/jpDsq2w.png",
            "https://i.imgur.com/ZMEGriz.png"
        ],
        features: [
            "Рабочий эвакуатор",
            "Детализированные текстуры",
            "Реалистичная физика",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Простая установка"
        ]
    },
    {
        id: "bmw-gs1200-dps",
        name: "БМВ GS1200 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Мотоцикл БМВ GS1200 для ДПС с работающими фарами и поворотниками. Детализированная модель с реалистичной физикой.",
        price: "599.00₽",
        image: "https://i.imgur.com/2DFVuzi.png",
        categories: ["dps"],
        images: [
            "https://i.imgur.com/jP06oLu.png",
            "https://i.imgur.com/H7Aj7gg.png",
            "https://i.imgur.com/LJixUPw.png",
            "https://i.imgur.com/U0IwVAR.png"
        ],
        features: [
            "Детализированная модель",
            "Рабочие фары и поворотники",
            "Реалистичная физика",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Простая установка"
        ]
    },
    {
        id: "sirens-elina-v2",
        name: "ЗВУКИ СИРЕН ЭЛИНА V2 | ГТА 5",
        description: "Набор звуков сирен ЭЛИНА версии 2 для ГТА 5 с улучшенным качеством. Реалистичные звуки сирен для полиции, скорой помощи и МЧС.",
        price: "199.00₽",
        image: "https://i.imgur.com/23Zk7Jw.png",
        categories: ["mods"],
        images: [
            "https://i.imgur.com/23Zk7Jw.png"
        ],
        features: [
            "Улучшенное качество звука",
            "Реалистичные звуки сирен",
            "Различные варианты сирен",
            "Совместимость с GTA 5 и FiveM",
            "Простая установка",
            "Подробная инструкция"
        ]
    },
    {
        id: "sirens-elina-v1",
        name: "ЗВУКИ СИРЕН ЭЛИНА V1 | ГТА 5",
        description: "Классический набор звуков сирен ЭЛИНА версии 1 для ГТА 5. Реалистичные звуки сирен для полиции, скорой помощи и МЧС.",
        price: "199.00₽",
        image: "https://i.imgur.com/kqdrpoB.png",
        categories: ["mods"],
        images: [
            "https://i.imgur.com/kqdrpoB.png"
        ],
        features: [
            "Классические звуки сирен",
            "Реалистичные звуки",
            "Различные варианты сирен",
            "Совместимость с GTA 5 и FiveM",
            "Простая установка",
            "Подробная инструкция"
        ]
    },
    {
        id: "mercedes-sprinter-smp",
        name: "МЕРСЕДЕС СПРИНТЕР КЛАССИК | СМП | ГТА 5 | ELS/NON ELS",
        description: "Модель МЕРСЕДЕС СПРИНТЕР КЛАССИК для СМП с детализированным интерьером. Полностью работоспособные фары и поворотники.",
        price: "849.00₽",
        image: "https://i.imgur.com/DWi3wWL.png",
        categories: ["mchs", "smp"],
        images: [
            "https://i.imgur.com/RvwEKyh.png",
            "https://i.imgur.com/ASj0hyP.png",
            "https://i.imgur.com/ZBUkjmC.png",
            "https://i.imgur.com/xwPEyaA.png",
            "https://i.imgur.com/ZbGGHq8.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "uaz-3962-smp",
        name: "УАЗ 3962 | СМП | ГТА 5 | ELS/NON ELS",
        description: "Классическая модель УАЗ 3962 для СМП с работающими фарами и поворотниками. Детализированный интерьер и экстерьер.",
        price: "849.00₽",
        image: "https://i.imgur.com/QHZ6pUO.png",
        categories: ["mchs", "smp"],
        images: [
            "https://i.imgur.com/LVpPXKO.png",
            "https://i.imgur.com/4VQex18.png",
            "https://i.imgur.com/RXkURdy.png",
            "https://i.imgur.com/MoGhT1d.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "fiat-ducato-smp",
        name: "ФИАТ ДУКАТО | СМП | ГТА 5 | ELS/NON ELS",
        description: "Модель ФИАТ ДУКАТО для СМП с уникальными текстурами и детализацией. Полностью работоспособные фары и поворотники.",
        price: "799.00₽",
        image: "https://i.imgur.com/eQE5MTt.png",
        categories: ["mchs", "smp"],
        images: [
            "https://i.imgur.com/g9N1fV9.png",
            "https://i.imgur.com/7GXtszq.png",
            "https://i.imgur.com/cdpdInr.png",
            "https://i.imgur.com/Z8KQT9K.png",
            "https://i.imgur.com/ReFu6YE.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-transit-smp",
        name: "ФОРД ТРАНЗИТ | СМП | ГТА 5 | ELS/NON ELS",
        description: "Модель ФОРД ТРАНЗИТ для СМП с работающими фарами и поворотниками. Детализированный интерьер и экстерьер.",
        price: "849.00₽",
        image: "https://i.imgur.com/Gzi0ofH.png",
        categories: ["mchs", "smp"],
        images: [
            "https://i.imgur.com/FR8deKq.png",
            "https://i.imgur.com/r6UnVBK.png",
            "https://i.imgur.com/I6Qa8Z9.png",
            "https://i.imgur.com/9jCQS4X.png",
            "https://i.imgur.com/JgX9ynG.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gazel-next-smp",
        name: "ГАЗель НЕКСТ | СМП | ГТА 5 | ELS/NON ELS",
        description: "Модель для игры ГТА 5. Сделана на основе кареты скорой помощи ГАЗель НЕКСТ.СГУ ЭЛИНА Сапфир.",
        price: "849.00₽",
        image: "https://i.imgur.com/SEPZBm3.png",
        categories: ["mchs", "smp"],
        images: [
            "https://i.imgur.com/q0JNV8x.png",
            "https://i.imgur.com/cGoK2Tn.png",
            "https://i.imgur.com/pcz9Kfw.png",
            "https://i.imgur.com/HsUMOtF.png",
            "https://i.imgur.com/gK0Jh88.png",
            "https://i.imgur.com/FvqdboD.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gaz-3302-smp",
        name: "ГАЗ 3302 | СМП | ГТА 5 | ELS/NON ELS",
        description: "Модель для игры ГТА 5. Сделана на основе кареты скорой помощи ГАЗ 3302.СГУ ЭЛИНА Сапфир.",
        price: "849.00₽",
        image: "https://i.imgur.com/U0lyLYV.png",
        categories: ["mchs", "smp"],
        images: [
            "https://i.imgur.com/oq2St9z.png",
            "https://i.imgur.com/oKsi7j0.png",
            "https://i.imgur.com/yrPwGE8.png",
            "https://i.imgur.com/5175VYE.png",
            "https://i.imgur.com/KuRa9EX.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gaz-3221-mchs",
        name: "ГАЗ 3221 | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель для игры ГТА 5. Сделана на основе ГАЗ 3221",
        price: "799.00₽",
        image: "https://i.imgur.com/CdszLoc.png",
        categories: ["mchs"],
        images: [
            "https://i.imgur.com/cPjMNXu.png",
            "https://i.imgur.com/gmmsWLb.png",
            "https://i.imgur.com/plK7vuk.png",
            "https://i.imgur.com/WdZy59G.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ural-al-mchs",
        name: "УРАЛ АЛ | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель для игры ГТА 5. Сделана на основе автолестницы УРАЛ МЧС.",
        price: "799.00₽",
        image: "https://i.imgur.com/tgu6mWW.png",
        categories: ["mchs"],
        images: [
            "https://i.imgur.com/7hUnYdb.png",
            "https://i.imgur.com/jhHdIIx.png",
            "https://i.imgur.com/aWWy6Ij.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ural-next-mchs",
        name: "УРАЛ НЕКСТ | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель для игры ГТА 5. Сделана на основе автоцистерны УРАЛ НЕКСТ МЧС.СГУ ЭЛИНА Сапфир.",
        price: "799.00₽",
        image: "https://i.imgur.com/GQEXdDa.png",
        categories: ["mchs"],
        images: [
            "https://i.imgur.com/AHNuY95.png",
            "https://i.imgur.com/hylvCS0.png",
            "https://i.imgur.com/QOC7lxY.png",
            "https://i.imgur.com/xH06gms.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "man-tgm-mchs",
        name: "MAN TGM | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель для игры ГТА 5. Сделана на основе автоцистерны MAN TGM МЧС",
        price: "799.00₽",
        image: "https://i.imgur.com/d8naL0v.png",
        categories: ["mchs"],
        images: [
            "https://i.imgur.com/A3SxR3y.png",
            "https://i.imgur.com/AV7yT5J.png",
            "https://i.imgur.com/9cl7my9.png",
            "https://i.imgur.com/gCK7tfE.png",
            "https://i.imgur.com/nvae9vV.png",
            "https://i.imgur.com/fd2N0XE.png"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
     {
        id: "ural-4320-mchs",
        name: "УРАЛ 4320 | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель УРАЛ 4320 для МЧС с детализированным интерьером и экстерьером. Полностью работоспособные фары и спецсигналы.",
        price: "799.00₽",
        image: "https://example.com/ural4320.jpg",
        categories: ["mchs"],
        images: [
            "https://example.com/ural4320_1.jpg",
            "https://example.com/ural4320_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "kamaz-43118-mchs",
        name: "КАМАЗ 43118 | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель КАМАЗ 43118 для МЧС с работающими спецсигналами и детализированным салоном.",
        price: "799.00₽",
        image: "https://example.com/kamaz43118.jpg",
        categories: ["mchs"],
        images: [
            "https://example.com/kamaz43118_1.jpg",
            "https://example.com/kamaz43118_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "kamaz-6520-mchs",
        name: "КАМАЗ 6520 | МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель КАМАЗ 6520 для МЧС с уникальными текстурами и полным функционалом.",
        price: "799.00₽",
        image: "https://example.com/kamaz6520.jpg",
        categories: ["mchs"],
        images: [
            "https://example.com/kamaz6520_1.jpg",
            "https://example.com/kamaz6520_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "vw-transporter-fso",
        name: "ФОЛЬКСВАГЕН ТРАНСПОРТЕР | ФСО | ГТА 5 | ELS/NON ELS",
        description: "Модель Фольксваген Транспортер для ФСО с детализированным салоном и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/vwtransporter.jpg",
        categories: ["fso"],
        images: [
            "https://example.com/vwtransporter_1.jpg",
            "https://example.com/vwtransporter_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "mercedes-benz-250-fso",
        name: "МЕРСЕДЕС-БЕНЗ 250 | ФСО | ГТА 5 | ELS/NON ELS",
        description: "Модель Mercedes-Benz 250 для ФСО с премиальным интерьером и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/mercedes250.jpg",
        categories: ["fso"],
        images: [
            "https://example.com/mercedes250_1.jpg",
            "https://example.com/mercedes250_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "mercedes-gle-fso",
        name: "МЕРСЕДЕС-БЕНЗ GLE | ФСО | ГТА 5 | ELS/NON ELS",
        description: "Модель Mercedes-Benz GLE для ФСО с современным дизайном и полным функционалом.",
        price: "599.00₽",
        image: "https://example.com/mercedesgle.jpg",
        categories: ["fso"],
        images: [
            "https://example.com/mercedesgle_1.jpg",
            "https://example.com/mercedesgle_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "mercedes-e200-fso",
        name: "Мерседес-Бенз Е200 | ФСО | ГТА 5 | ELS/NON ELS",
        description: "Модель Mercedes-Benz E200 для ФСО с премиальным интерьером и спецсигналами.",
        price: "599.00₽",
        image: "https://example.com/mercedese200.jpg",
        categories: ["fso"],
        images: [
            "https://example.com/mercedese200_1.jpg",
            "https://example.com/mercedese200_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "mercedes-g-dps",
        name: "МЕРСЕДЕС-БЕНЗ G-Класс | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Mercedes-Benz G-Class для ДПС с бронированным корпусом и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/mercedesg.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/mercedesg_1.jpg",
            "https://example.com/mercedesg_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "audi-a8-fso",
        name: "АУДИ А8 | ФСО | ГТА 5 | ELS/NON ELS",
        description: "Модель Audi A8 для ФСО с премиальным интерьером и полным функционалом.",
        price: "599.00₽",
        image: "https://example.com/audia8.jpg",
        categories: ["fso"],
        images: [
            "https://example.com/audia8_1.jpg",
            "https://example.com/audia8_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "aurus-limo-fso",
        name: "АУРУС ЛИМО | ФСО | ГТА 5 | ELS/NON ELS",
        description: "Модель Aurus Limo для ФСО с эксклюзивным дизайном и спецсигналами.",
        price: "849.00₽",
        image: "https://example.com/auruslimo.jpg",
        categories: ["fso"],
        images: [
            "https://example.com/auruslimo_1.jpg",
            "https://example.com/auruslimo_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "aurus-senat-fso",
        name: "АУРУС СЕНАТ | ФСО | ГТА 5 | ELS/NON ELS",
        description: "Модель Aurus Senat для ФСО с премиальным интерьером и полным функционалом.",
        price: "849.00₽",
        image: "https://example.com/aurussenat.jpg",
        categories: ["fso"],
        images: [
            "https://example.com/aurussenat_1.jpg",
            "https://example.com/aurussenat_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-transit-skrf",
        name: "ФОРД ТРАНЗИТ | СКРФ | ГТА 5 | ELS/NON ELS",
        description: "Модель Ford Transit для СКРФ с детализированным салоном и спецсигналами.",
        price: "899.00₽",
        image: "https://example.com/fordtransit.jpg",
        categories: ["skrf"],
        images: [
            "https://example.com/fordtransit_1.jpg",
            "https://example.com/fordtransit_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "vw-polo-skrf",
        name: "ФОЛЬКСВАГЕН ПОЛО | СКРФ | ГТА 5 | ELS/NON ELS",
        description: "Модель Volkswagen Polo для СКРФ с компактными размерами и полным функционалом.",
        price: "749.00₽",
        image: "https://example.com/vwpolo.jpg",
        categories: ["skrf"],
        images: [
            "https://example.com/vwpolo_1.jpg",
            "https://example.com/vwpolo_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "uaz-patriot-skrf",
        name: "УАЗ ПАТРИОТ | СКРФ | ГТА 5 | ELS/NON ELS",
        description: "Модель УАЗ Патриот для СКРФ с повышенной проходимостью и спецсигналами.",
        price: "799.00₽",
        image: "https://example.com/uazpatriot.jpg",
        categories: ["skrf"],
        images: [
            "https://example.com/uazpatriot_1.jpg",
            "https://example.com/uazpatriot_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "toyota-camry-skrf",
        name: "ТОЙОТА КАМРИ | СКРФ | ГТА 5 | ELS/NON ELS",
        description: "Модель Toyota Camry для СКРФ с комфортным салоном и полным функционалом.",
        price: "799.00₽",
        image: "https://example.com/toyotacamry.jpg",
        categories: ["skrf"],
        images: [
            "https://example.com/toyotacamry_1.jpg",
            "https://example.com/toyotacamry_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "moskvich3-rosgvardia",
        name: "МОСКВИЧ 3 | РОСГВАРДИЯ / ППС | ГТА 5 | ELS/NON ELS",
        description: "Модель Москвич 3 для Росгвардии/ППС с современным дизайном и спецсигналами.",
        price: "1199.00₽",
        image: "https://example.com/moskvich3.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/moskvich3_1.jpg",
            "https://example.com/moskvich3_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "haval-jolion-rosgvardia",
        name: "ХАВАЛ ДЖОЛИОН | ППС/РОСГВАРДИЯ | ГТА 5 | ELS/NON ELS",
        description: "Модель Haval Jolion для ППС/Росгвардии с современным дизайном и полным функционалом.",
        price: "899.00₽",
        image: "https://example.com/havaljolion.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/havaljolion_1.jpg",
            "https://example.com/havaljolion_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "mercedes-gle-pps",
        name: "МЕРСЕДЕС-БЕНЗ GLE | ППС | ГТА 5 | ELS/NON ELS",
        description: "Модель Mercedes-Benz GLE для ППС с премиальным интерьером и спецсигналами.",
        price: "899.00₽",
        image: "https://example.com/mercedesglepps.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/mercedesglepps_1.jpg",
            "https://example.com/mercedesglepps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "reno-logan-rosgvardia",
        name: "РЕНО ЛОГАН | ППС/Росгвардия | ГТА 5 | ELS/NON ELS",
        description: "Модель Renault Logan для ППС/Росгвардии с компактными размерами и полным функционалом.",
        price: "749.00₽",
        image: "https://example.com/renologan.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/renologan_1.jpg",
            "https://example.com/renologan_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-explorer-pps",
        name: "ФОРД ЭКСПЛОРЕР | ППС | ГТА 5 | ELS/NON ELS",
        description: "Модель Ford Explorer для ППС с повышенной проходимостью и спецсигналами.",
        price: "749.00₽",
        image: "https://example.com/fordexplorer.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/fordexplorer_1.jpg",
            "https://example.com/fordexplorer_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "uaz-patriot-v2-multicat",
        name: "УАЗ ПАТРИОТ V2 | ППС/Росгвардия/МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель УАЗ Патриот V2 для нескольких ведомств с универсальным дизайном и функционалом.",
        price: "899.00₽",
        image: "https://example.com/uazpatriotv2.jpg",
        categories: ["pps", "mchs"],
        images: [
            "https://example.com/uazpatriotv2_1.jpg",
            "https://example.com/uazpatriotv2_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gazon-next-multicat",
        name: "ГАЗон НЕКСТ | ППС/Росгвардия/ФСИН | ГТА 5 | ELS/NON ELS",
        description: "Модель ГАЗон NEXT для нескольких ведомств с универсальным дизайном и функционалом.",
        price: "799.00₽",
        image: "https://example.com/gazonnext.jpg",
        categories: ["pps", "fsin"],
        images: [
            "https://example.com/gazonnext_1.jpg",
            "https://example.com/gazonnext_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gazel-next-multicat",
        name: "ГАЗель НЕКСТ | ППС/Росгвардия/МЧС/ФСИН | ГТА 5 | ELS/NON ELS",
        description: "Модель ГАЗель NEXT для нескольких ведомств с универсальным дизайном и функционалом.",
        price: "899.00₽",
        image: "https://example.com/gazelnext.jpg",
        categories: ["pps", "mchs", "fsin"],
        images: [
            "https://example.com/gazelnext_1.jpg",
            "https://example.com/gazelnext_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ural-4320-multicat",
        name: "УРАЛ 4320 | ППС/Росгвардия/ФСИН | ГТА 5 | ELS/NON ELS",
        description: "Модель УРАЛ 4320 для нескольких ведомств с повышенной проходимостью и функционалом.",
        price: "799.00₽",
        image: "https://example.com/ural4320multicat.jpg",
        categories: ["pps", "fsin"],
        images: [
            "https://example.com/ural4320multicat_1.jpg",
            "https://example.com/ural4320multicat_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gaz-3221-multicat",
        name: "ГАЗ 3221 | ППС/Росгвардия/ВП | ГТА 5 | ELS/NON ELS",
        description: "Модель ГАЗ 3221 для нескольких ведомств с универсальным дизайном и функционалом.",
        price: "799.00₽",
        image: "https://example.com/gaz3221.jpg",
        categories: ["pps", "vp"],
        images: [
            "https://example.com/gaz3221_1.jpg",
            "https://example.com/gaz3221_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "lada-largus-pps",
        name: "ЛАДА ЛАРГУС | ППС/Росгвардия | ГТА 5 | ELS/NON ELS",
        description: "Модель Lada Largus для ППС/Росгвардии с компактными размерами и полным функционалом.",
        price: "699.00₽",
        image: "https://example.com/ladalargus.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/ladalargus_1.jpg",
            "https://example.com/ladalargus_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "paz-3205-multicat",
        name: "ПАЗ 3205 | ППС/Росгвардия/МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель ПАЗ 3205 для нескольких ведомств с вместительным салоном и спецсигналами.",
        price: "749.00₽",
        image: "https://example.com/paz3205.jpg",
        categories: ["pps", "mchs"],
        images: [
            "https://example.com/paz3205_1.jpg",
            "https://example.com/paz3205_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "kia-rio-pps",
        name: "КИА РИО | ППС | ГТА 5 | ELS/NON ELS",
        description: "Модель Kia Rio для ППС с компактными размерами и полным функционалом.",
        price: "649.00₽",
        image: "https://example.com/kiaRio.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/kiaRio_1.jpg",
            "https://example.com/kiaRio_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "vw-polo-pps",
        name: "ВОЛЬКСВАГЕН ПОЛО | ППС | ГТА 5 | ELS/NON ELS",
        description: "Модель Volkswagen Polo для ППС с компактными размерами и спецсигналами.",
        price: "649.00₽",
        image: "https://example.com/vwpolopps.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/vwpolopps_1.jpg",
            "https://example.com/vwpolopps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "uaz-hunter-pps",
        name: "УАЗ ХАНТЕР | ППС/Росгвардия | ГТА 5 | ELS/NON ELS",
        description: "Модель УАЗ Хантер для ППС/Росгвардии с повышенной проходимостью и функционалом.",
        price: "649.00₽",
        image: "https://example.com/uazhunter.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/uazhunter_1.jpg",
            "https://example.com/uazhunter_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-focus-pps",
        name: "ФОРД ФОКУС | ППС/Росгвардия | ГТА 5 | ELS/NON ELS",
        description: "Модель Ford Focus для ППС/Росгвардии с компактными размерами и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/fordfocus.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/fordfocus_1.jpg",
            "https://example.com/fordfocus_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "lada-granta-pps",
        name: "ЛАДА ГРАНТА | ППС/Росгвардия | ГТА 5 | ELS/NON ELS",
        description: "Модель Lada Granta для ППС/Росгвардии с компактными размерами и полным функционалом.",
        price: "699.00₽",
        image: "https://example.com/ladagranta.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/ladagranta_1.jpg",
            "https://example.com/ladagranta_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "uaz-patriot-multicat",
        name: "УАЗ ПАТРИОТ | ППС/Росгвардия/МЧС | ГТА 5 | ELS/NON ELS",
        description: "Модель УАЗ Патриот для нескольких ведомств с универсальным дизайном и функционалом.",
        price: "699.00₽",
        image: "https://example.com/uazpatriotmulticat.jpg",
        categories: ["pps", "mchs"],
        images: [
            "https://example.com/uazpatriotmulticat_1.jpg",
            "https://example.com/uazpatriotmulticat_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "uaz-452-pps",
        name: "УАЗ 452 БУХАНКА | ППС | ГТА 5 | ELS/NON ELS",
        description: "Модель УАЗ 452 Буханка для ППС с уникальным дизайном и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/uaz452.jpg",
        categories: ["pps"],
        images: [
            "https://example.com/uaz452_1.jpg",
            "https://example.com/uaz452_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
     {
        id: "hyundai-sonata-2008-dps",
        name: "ХЕНДАИ СОНАТА 2008 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Hyundai Sonata 2008 года для ДПС с детализированным салоном и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/hyundaisonata.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/hyundaisonata_1.jpg",
            "https://example.com/hyundaisonata_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "skoda-octavia-2009-dps",
        name: "ШКОДА ОКТАВИЯ 2009 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Skoda Octavia 2009 года для ДПС с полным функционалом и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/skodaoctavia2009.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/skodaoctavia2009_1.jpg",
            "https://example.com/skodaoctavia2009_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "moskvich3-dps",
        name: "МОСКВИЧ 3 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Москвич 3 для ДПС с современным дизайном и спецсигналами.",
        price: "1199.00₽",
        image: "https://example.com/moskvich3dps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/moskvich3dps_1.jpg",
            "https://example.com/moskvich3dps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-mondeo-dps",
        name: "ФОРД МОНДЕО | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Ford Mondeo для ДПС с комфортным салоном и полным функционалом.",
        price: "699.00₽",
        image: "https://example.com/fordmondeo.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/fordmondeo_1.jpg",
            "https://example.com/fordmondeo_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "haval-jolion-dps",
        name: "ХАВАЛ ДЖОЛИОН | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Haval Jolion для ДПС с современным дизайном и спецсигналами.",
        price: "899.00₽",
        image: "https://example.com/havaljoliondps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/havaljoliondps_1.jpg",
            "https://example.com/havaljoliondps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-focus-2010-dps",
        name: "ФОРД ФОКУС 2010 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Ford Focus 2010 года для ДПС с компактными размерами и полным функционалом.",
        price: "699.00₽",
        image: "https://example.com/fordfocus2010.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/fordfocus2010_1.jpg",
            "https://example.com/fordfocus2010_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "toyota-camry-v70-dps",
        name: "ТОЙОТА КАМРИ V70 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Toyota Camry V70 для ДПС с комфортным салоном и спецсигналами.",
        price: "799.00₽",
        image: "https://example.com/toyotacamryv70.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/toyotacamryv70_1.jpg",
            "https://example.com/toyotacamryv70_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "hyundai-accent-dps",
        name: "ХЕНДАИ АЦЕНТ | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Hyundai Accent для ДПС с компактными размерами и полным функционалом.",
        price: "699.00₽",
        image: "https://example.com/hyundaiaccent.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/hyundaiaccent_1.jpg",
            "https://example.com/hyundaiaccent_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "audi-a6-dps",
        name: "АУДИ А6 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Audi A6 для ДПС с премиальным интерьером и спецсигналами.",
        price: "799.00₽",
        image: "https://example.com/audia6dps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/audia6dps_1.jpg",
            "https://example.com/audia6dps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "mercedes-gle-dps",
        name: "МЕРСЕДЕС-БЕНЗ GLE | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Mercedes-Benz GLE для ДПС с премиальным интерьером и полным функционалом.",
        price: "1099.00₽",
        image: "https://example.com/mercedesgledps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/mercedesgledps_1.jpg",
            "https://example.com/mercedesgledps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "vaz-2115-dps",
        name: "ВАЗ 2115 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель ВАЗ 2115 для ДПС с классическим дизайном и спецсигналами.",
        price: "599.00₽",
        image: "https://example.com/vaz2115.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/vaz2115_1.jpg",
            "https://example.com/vaz2115_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "haval-f7-dps-vai",
        name: "ХАВАЛ Ф7 | ДПС/ВАИ | ГТА 5 | ELS/NON ELS",
        description: "Модель Haval F7 для ДПС/ВАИ с современным дизайном и полным функционалом.",
        price: "1199.00₽",
        image: "https://example.com/havalf7.jpg",
        categories: ["dps", "vai"],
        images: [
            "https://example.com/havalf7_1.jpg",
            "https://example.com/havalf7_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "bmw-g30-dps-vai",
        name: "БМВ G30 | ДПС/ВАИ | ГТА 5 | ELS/NON ELS",
        description: "Модель BMW G30 для ДПС/ВАИ с премиальным интерьером и спецсигналами.",
        price: "799.00₽",
        image: "https://example.com/bmwg30.jpg",
        categories: ["dps", "vai"],
        images: [
            "https://example.com/bmwg30_1.jpg",
            "https://example.com/bmwg30_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "reno-logan-dps",
        name: "РЕНО ЛОГАН | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Renault Logan для ДПС с компактными размерами и полным функционалом.",
        price: "749.00₽",
        image: "https://example.com/renologandps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/renologandps_1.jpg",
            "https://example.com/renologandps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
        {
        id: "hyundai-solaris-dps",
        name: "ХЕНДАИ СОЛЯРИС | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Hyundai Solaris для ДПС с компактными размерами и полным функционалом.",
        price: "899.00₽",
        image: "https://example.com/hyundaisolaris.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/hyundaisolaris_1.jpg",
            "https://example.com/hyundaisolaris_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "uaz-patriot-dps-vai",
        name: "УАЗ ПАТРИОТ | ДПС/ВАИ | ГТА 5 | ELS/NON ELS",
        description: "Модель УАЗ Патриот для ДПС/ВАИ с повышенной проходимостью и спецсигналами.",
        price: "749.00₽",
        image: "https://example.com/uazpatriotdps.jpg",
        categories: ["dps", "vai"],
        images: [
            "https://example.com/uazpatriotdps_1.jpg",
            "https://example.com/uazpatriotdps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-explorer-dps-vai",
        name: "ФОРД ЭКСПЛОРЕР | ДПС/ВАИ | ГТА 5 | ELS/NON ELS",
        description: "Модель Ford Explorer для ДПС/ВАИ с полным приводом и спецсигналами.",
        price: "749.00₽",
        image: "https://example.com/fordexplorerdps.jpg",
        categories: ["dps", "vai"],
        images: [
            "https://example.com/fordexplorerdps_1.jpg",
            "https://example.com/fordexplorerdps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "lada-priora-dps",
        name: "ЛАДА ПРИОРА | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Lada Priora для ДПС с классическим дизайном и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/ladapriora.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/ladapriora_1.jpg",
            "https://example.com/ladapriora_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "lada-granta-dps",
        name: "ЛАДА ГРАНТА | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Lada Granta для ДПС с компактными размерами и полным функционалом.",
        price: "699.00₽",
        image: "https://example.com/ladagrantadps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/ladagrantadps_1.jpg",
            "https://example.com/ladagrantadps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "vw-amarok-dps",
        name: "ФОЛЬКСВАГЕН АМАРОК | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Volkswagen Amarok для ДПС с повышенной проходимостью и спецсигналами.",
        price: "999.00₽",
        image: "https://example.com/vwamarok.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/vwamarok_1.jpg",
            "https://example.com/vwamarok_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "bmw-r1200rt-dps",
        name: "БМВ R1200 RT | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Мотоцикл BMW R1200 RT для ДПС с работающими спецсигналами и детализированной моделью.",
        price: "599.00₽",
        image: "https://example.com/bmwr1200rt.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/bmwr1200rt_1.jpg",
            "https://example.com/bmwr1200rt_2.jpg"
        ],
        features: [
            "Детализированная модель",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "kia-rio-dps",
        name: "КИА РИО | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Kia Rio для ДПС с компактными размерами и полным функционалом.",
        price: "649.00₽",
        image: "https://example.com/kia-rio-dps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/kia-rio-dps_1.jpg",
            "https://example.com/kia-rio-dps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "vw-polo-dps",
        name: "ФОЛЬКСВАГЕН ПОЛО | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Volkswagen Polo для ДПС с компактными размерами и спецсигналами.",
        price: "649.00₽",
        image: "https://example.com/vwpolodps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/vwpolodps_1.jpg",
            "https://example.com/vwpolodps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "bmw-x5-dps",
        name: "БМВ Х5 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель BMW X5 для ДПС с премиальным интерьером и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/bmwx5dps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/bmwx5dps_1.jpg",
            "https://example.com/bmwx5dps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "ford-focus-dps",
        name: "ФОРД ФОКУС | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Ford Focus для ДПС с компактными размерами и полным функционалом.",
        price: "699.00₽",
        image: "https://example.com/fordfocusdps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/fordfocusdps_1.jpg",
            "https://example.com/fordfocusdps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "lada-vesta-dps",
        name: "ЛАДА ВЕСТА | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Lada Vesta для ДПС с современным дизайном и спецсигналами.",
        price: "699.00₽",
        image: "https://example.com/ladavestadps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/ladavestadps_1.jpg",
            "https://example.com/ladavestadps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "skoda-octavia-v3-dps",
        name: "ШКОДА ОКТАВИЯ V3 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Skoda Octavia V3 для ДПС с современным дизайном и полным функционалом.",
        price: "899.00₽",
        image: "https://example.com/skodaoctaviav3.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/skodaoctaviav3_1.jpg",
            "https://example.com/skodaoctaviav3_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "skoda-octavia-v2-dps",
        name: "ШКОДА ОКТАВИЯ V2 | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Skoda Octavia V2 для ДПС с полным функционалом и спецсигналами.",
        price: "799.00₽",
        image: "https://example.com/skodaoctaviav2.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/skodaoctaviav2_1.jpg",
            "https://example.com/skodaoctaviav2_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "skoda-octavia-dps",
        name: "ШКОДА ОКТАВИЯ | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Skoda Octavia для ДПС с комфортным салоном и спецсигналами.",
        price: "799.00₽",
        image: "https://example.com/skodaoctaviadps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/skodaoctaviadps_1.jpg",
            "https://example.com/skodaoctaviadps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "toyota-camry-dps",
        name: "ТОЙОТА КАМРИ | ДПС | ГТА 5 | ELS/NON ELS",
        description: "Модель Toyota Camry для ДПС с премиальным интерьером и полным функционалом.",
        price: "749.00₽",
        image: "https://example.com/toyotacamrydps.jpg",
        categories: ["dps"],
        images: [
            "https://example.com/toyotacamrydps_1.jpg",
            "https://example.com/toyotacamrydps_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "mercedes-sprinter-classic",
        name: "МЕРСЕДЕС СПРИНТЕР КЛАССИК | ГТА 5",
        description: "Классическая модель Mercedes Sprinter без спецокраски.",
        price: "499.00₽",
        image: "https://example.com/mercedessprinter.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/mercedessprinter_1.jpg",
            "https://example.com/mercedessprinter_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "skoda-octavia-2009",
        name: "ШКОДА ОКТАВИЯ 2009 | ГТА 5",
        description: "Модель Skoda Octavia 2009 года без спецокраски.",
        price: "399.00₽",
        image: "https://example.com/skodaoctavia2009civil.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/skodaoctavia2009civil_1.jpg",
            "https://example.com/skodaoctavia2009civil_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "moskvich3-civil",
        name: "МОСКВИЧ 3 | ГТА 5 | ELS/NON ELS",
        description: "Модель Москвич 3 без спецокраски с полным функционалом.",
        price: "999.00₽",
        image: "https://example.com/moskvich3civil.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/moskvich3civil_1.jpg",
            "https://example.com/moskvich3civil_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Поддержка ELS и NON-ELS",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "reno-logan-civil",
        name: "РЕНО ЛОГАН | ГТА 5",
        description: "Модель Renault Logan без спецокраски.",
        price: "399.00₽",
        image: "https://example.com/renologancivil.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/renologancivil_1.jpg",
            "https://example.com/renologancivil_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "kamaz-65115",
        name: "КАМАЗ 65115 | ГТА 5",
        description: "Модель Камаз 65115 без спецокраски.",
        price: "499.00₽",
        image: "https://example.com/kamaz65115.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/kamaz65115_1.jpg",
            "https://example.com/kamaz65115_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "haval-jolion-civil",
        name: "ХАВАЛ ДЖОЛИОН | ГТА 5",
        description: "Модель Haval Jolion без спецокраски.",
        price: "799.00₽",
        image: "https://example.com/havaljolioncivil.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/havaljolioncivil_1.jpg",
            "https://example.com/havaljolioncivil_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "haval-f7-civil",
        name: "ХАВАЛ F7 | ГТА 5",
        description: "Модель Haval F7 без спецокраски.",
        price: "699.00₽",
        image: "https://example.com/havalf7civil.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/havalf7civil_1.jpg",
            "https://example.com/havalf7civil_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gazel-next-civil",
        name: "ГАЗель НЕКСТ | ГТА 5",
        description: "Модель ГАЗель NEXT без спецокраски.",
        price: "499.00₽",
        image: "https://example.com/gazelnextcivil.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/gazelnextcivil_1.jpg",
            "https://example.com/gazelnextcivil_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "chevrolet-cobalt-civil",
        name: "ШЕВРОЛЕ КОБАЛЬТ | ГТА 5",
        description: "Модель Chevrolet Cobalt без спецокраски.",
        price: "399.00₽",
        image: "https://example.com/chevroletcobalt.jpg",
        categories: ["civil"],
        images: [
            "https://example.com/chevroletcobalt_1.jpg",
            "https://example.com/chevroletcobalt_2.jpg"
        ],
        features: [
            "Детализированный экстерьер и интерьер",
            "Рабочие фары и поворотники",
            "Оптимизированная модель",
            "Кастомные текстуры",
            "Реалистичная физика"
        ]
    },
    {
        id: "gaz-tigr-rosgvardia",
        name: "ГАЗ ТИГР | ППС/Росгвардия | ГТА 5 | ELS/NON ELS",
        description: "Модель ГАЗ ТИГР для ППС/Росгвардии с работающими фарами и поворотниками.",
        price: "799.00₽",
        image: "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
        categories: ["pps"],
        images: [
            "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
            "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
            "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
            "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
            "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
            "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
        ],
        features: [
            "Бронекорпус",
            "Полный привод",
            "Специальная подвеска",
            "Мощный двигатель",
            "Вместительный салон",
            "Оптимизированная модель"
        ]
    },
    {
        id: "skoda-octavia",
        name: "ШКОДА ОКТАВИЯ | ГТА 5",
        description: "Модель ШКОДА ОКТАВИЯ без спецокраски.",
        price: "499.00₽",
        image: "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
        categories: ["civil"],
        images: [
            "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
            "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
            "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
            "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
            "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
            "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
        ],
        features: [
            "Стандартная комплектация",
            "Качественные текстуры",
            "Детализированный салон",
            "Реалистичная физика",
            "Простая установка",
            "Оптимизированная модель"
        ]
    }
]
};
