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
            name: "АМАРОК | ЦОДД | ГТА 5 | ELS/NON ELS",
            description: "Высококачественная модель АМАРОК для ЦОДД с детализированным интерьером и уникальным тюнингом. Полностью работоспособные фары, поворотники и спецсигналы. Модель оптимизирована для использования в GTA 5 и FiveM.",
            price: "795.00₽",
            image: "https://i.imgur.com/2YpZBaC.png",
			category: "civil", "dps",
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
            name: "ШЕВРОЛЕ КОБАЛЬТ | ПОЛИЦИЯ КАЗАХСТАНА | ГТА 5 | ELS/NON ELS",
            description: "Реалистичная модель ШЕВРОЛЕ КОБАЛЬТ для полиции Казахстана с работающими фарами и поворотниками. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
            price: "595.00₽",
            image: "https://i.imgur.com/65uoskk.png",
			category: "dps",
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
            name: "УАЗ ПАТРИОТ 'ЕСАУЛ' | МЧС | ГТА 5 | ELS/NON ELS",
            description: "Детализированный УАЗ ПАТРИОТ для МЧС с возможностью кастомизации и уникальными текстурами. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
            price: "995.00₽",
            image: "https://i.imgur.com/9QsadcT.png",
			category: "mchs",
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
            name: "ЛАДА ЛАРГУС | ФССП | ГТА 5",
            description: "Качественная модель ЛАДА ЛАРГУС для ФССП с детализированным интерьером и уникальным тюнингом. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
            price: "499.00₽",
            image: "https://i.imgur.com/U2tPqbN.png",
			category: "civil",
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
            name: "ХАВАЛ ДЖОЛИОН V2 | ППС | ГТА 5 | ELS/NON ELS",
            description: "Современная модель ХАВАЛ ДЖОЛИОН V2 для ППС с работающими фарами и поворотниками. Модель полностью готова к использованию в игре, с детализированным салоном и кастомными текстурами.",
            price: "895.00₽",
            image: "https://i.imgur.com/wPk673p.png",
			category: "pps",
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
            name: "Набор одежды для EUP | Гос. Структуры России",
            description: "Полный набор одежды для EUP, включающий все необходимые элементы для государственных структур. Высокое качество текстур и детализации.",
            price: "885.00₽",
            image: "https://i.imgur.com/HioGTF5.png",
			category: "all",
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
            name: "Жезл регулировщика ДПС | SP / FiveM",
            description: "Качественный жезл регулировщика ДПС для использования в SP и FiveM. Детализированная модель с реалистичными текстурами.",
            price: "105.00₽",
            image: "https://i.imgur.com/MDLWMaJ.png",
			category: "dps",
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
            name: "ПАК | 3 Эвакуатора / Gazel+Gazon+GazNN",
            description: "Комплект из 3 эвакуаторов: Gazel, Gazon и GazNN с детализированными текстурами. Полностью рабочие модели с функционалом эвакуатора.",
            price: "1199.00₽",
            image: "https://i.imgur.com/xzdEChu.png",
			category: "civil",
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
            name: "GAZel NN | Эвакуатор | ГТА 5 | ELS/NON ELS",
            description: "Модель GAZel NN в варианте эвакуатора с работающими фарами и поворотниками. Полностью рабочий эвакуатор с функционалом.",
            price: "595.00₽",
            image: "https://i.imgur.com/jDdOo9j.png",
			category: "civil",
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
            name: "GAZon NEXT | Эвакуатор | ГТА 5 | ELS/NON ELS",
            description: "Модель GAZon NEXT в варианте эвакуатора с детализированным интерьером. Полностью рабочий эвакуатор с функционалом.",
            price: "595.00₽",
            image: "https://i.imgur.com/PY15pKz.png",
			category: "civil",
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
            name: "GAZel | Эвакуатор | ГТА 5 | ELS/NON ELS",
            description: "Классическая модель GAZel в варианте эвакуатора с уникальными текстурами. Полностью рабочий эвакуатор с функционалом.",
            price: "595.00₽",
            image: "https://i.imgur.com/zX9xSFa.png",
			category: "civil",
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
            name: "БМВ GS1200 | ДПС | ГТА 5 | ELS/NON ELS",
            description: "Мотоцикл БМВ GS1200 для ДПС с работающими фарами и поворотниками. Детализированная модель с реалистичной физикой.",
            price: "599.00₽",
            image: "https://i.imgur.com/2DFVuzi.png",
			category: "dps",
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
            name: "ЗВУКИ СИРЕН ЭЛИНА V2 | ГТА 5",
            description: "Набор звуков сирен ЭЛИНА версии 2 для ГТА 5 с улучшенным качеством. Реалистичные звуки сирен для полиции, скорой помощи и МЧС.",
            price: "199.00₽",
            image: "https://i.imgur.com/23Zk7Jw.png",
			category: "all",
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
            name: "ЗВУКИ СИРЕН ЭЛИНА V1 | ГТА 5",
            description: "Классический набор звуков сирен ЭЛИНА версии 1 для ГТА 5. Реалистичные звуки сирен для полиции, скорой помощи и МЧС.",
            price: "199.00₽",
            image: "https://i.imgur.com/kqdrpoB.png",
			category: "all",
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
            name: "МЕРСЕДЕС СПРИНТЕР КЛАССИК | СМП | ГТА 5 | ELS/NON ELS",
            description: "Модель МЕРСЕДЕС СПРИНТЕР КЛАССИК для СМП с детализированным интерьером. Полностью работоспособные фары и поворотники.",
            price: "849.00₽",
            image: "https://i.imgur.com/DWi3wWL.png",
			category: "mchs",
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
            name: "УАЗ 3962 | СМП | ГТА 5 | ELS/NON ELS",
            description: "Классическая модель УАЗ 3962 для СМП с работающими фарами и поворотниками. Детализированный интерьер и экстерьер.",
            price: "849.00₽",
            image: "https://i.imgur.com/QHZ6pUO.png",
			category: "mchs",
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
            name: "ФИАТ ДУКАТО | СМП | ГТА 5 | ELS/NON ELS",
            description: "Модель ФИАТ ДУКАТО для СМП с уникальными текстурами и детализацией. Полностью работоспособные фары и поворотники.",
            price: "799.00₽",
            image: "https://i.imgur.com/eQE5MTt.png",
			category: "mchs",
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
            name: "ФОРД ТРАНЗИТ | СМП | ГТА 5 | ELS/NON ELS",
            description: "Модель ФОРД ТРАНЗИТ для СМП с работающими фарами и поворотниками. Детализированный интерьер и экстерьер.",
            price: "849.00₽",
            image: "https://i.imgur.com/Gzi0ofH.png",
			category: "mchs",
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
            name: "ГАЗель НЕКСТ | СМП | ГТА 5 | ELS/NON ELS",
            description: "Модель для игры ГТА 5. Сделана на основе кареты скорой помощи ГАЗель НЕКСТ.СГУ ЭЛИНА Сапфир.",
            price: "849.00₽",
            image: "https://i.imgur.com/SEPZBm3.png",
			category: "mchs",
            images: [
                "https://i.imgur.com/q0JNV8x.png",
                "https://i.imgur.com/cGoK2Tn.png",
                "https://i.imgur.com/pcz9Kfw.png",
                "https://i.imgur.com/HsUMOtF.png",
                "https://i.imgur.com/gK0Jh88.png",
                "https://i.imgur.com/FvqdboD.png",
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
            name: "ГАЗ 3302 | СМП | ГТА 5 | ELS/NON ELS",
            description: "Модель для игры ГТА 5. Сделана на основе кареты скорой помощи ГАЗ 3302.СГУ ЭЛИНА Сапфир.",
            price: "849.00₽",
            image: "https://i.imgur.com/U0lyLYV.png",
			category: "mchs",
            images: [
                "https://i.imgur.com/oq2St9z.png",
                "https://i.imgur.com/oKsi7j0.png",
                "https://i.imgur.com/yrPwGE8.png",
                "https://i.imgur.com/5175VYE.png",
                "https://i.imgur.com/KuRa9EX.png",
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
            name: "ГАЗ 3221 | МЧС | ГТА 5 | ELS/NON ELS",
            description: "Модель для игры ГТА 5. Сделана на основе ГАЗ 3221",
            price: "799.00₽",
            image: "https://i.imgur.com/CdszLoc.png",
			category: "mchs",
            images: [
                "https://i.imgur.com/cPjMNXu.png",
                "https://i.imgur.com/gmmsWLb.png",
                "https://i.imgur.com/plK7vuk.png",
                "https://i.imgur.com/WdZy59G.png",
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
            name: "УРАЛ АЛ | МЧС | ГТА 5 | ELS/NON ELS",
            description: "Модель для игры ГТА 5. Сделана на основе автолестницы УРАЛ МЧС.",
            price: "799.00₽",
            image: "https://i.imgur.com/tgu6mWW.png",
			category: "mchs",
            images: [
                "https://i.imgur.com/7hUnYdb.png",
                "https://i.imgur.com/jhHdIIx.png",
                "https://i.imgur.com/aWWy6Ij.png",
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
            name: "УРАЛ НЕКСТ | МЧС | ГТА 5 | ELS/NON ELS",
            description: "Модель для игры ГТА 5. Сделана на основе автоцистерны УРАЛ НЕКСТ МЧС.СГУ ЭЛИНА Сапфир.",
            price: "799.00₽",
            image: "https://i.imgur.com/GQEXdDa.png",
			category: "mchs",
            images: [
                "https://i.imgur.com/AHNuY95.png",
                "https://i.imgur.com/hylvCS0.png",
                "https://i.imgur.com/QOC7lxY.png",
                "https://i.imgur.com/xH06gms.png",
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
            name: "MAN TGM | МЧС | ГТА 5 | ELS/NON ELS",
            description: "Модель для игры ГТА 5. Сделана на основе автоцистерны MAN TGM МЧС",
            price: "799.00₽",
            image: "https://i.imgur.com/d8naL0v.png",
			category: "mchs",
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
            name: "ГАЗ ТИГР | ППС/Росгвардия | ГТА 5 | ELS/NON ELS",
            description: "Модель ГАЗ ТИГР для ППС/Росгвардии с работающими фарами и поворотниками.",
            price: "799.00₽",
            image: "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
			category: "pps",
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
            name: "ШКОДА ОКТАВИЯ | ГТА 5",
            description: "Модель ШКОДА ОКТАВИЯ без спецокраски.",
            price: "499.00₽",
            image: "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
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
