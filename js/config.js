// Конфигурация сайта
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
                image: "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png"
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
                image: "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png"
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
                image: "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png"
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
                image: "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png",
                images: [
                    "https://faust-shop.ru/gallery_gen/0252bea540f16fe06cdef44dccba1271.png",
                    "https://faust-shop.ru/gallery_gen/9ce2194dcd26e0832cbf20df1a92807e.png",
                    "https://faust-shop.ru/gallery_gen/055ec3c244e987018e439610d848f26b.png",
                    "https://faust-shop.ru/gallery_gen/08c4e47ffc813c4bfeefcf25fa25ef4b.png",
                    "https://faust-shop.ru/gallery_gen/99a4df6fe2b249308fa65e8ac9e6462f.png",
                    "https://faust-shop.ru/gallery_gen/54f2179796717ea0cd27c4dfd112a66b.png"
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
};
