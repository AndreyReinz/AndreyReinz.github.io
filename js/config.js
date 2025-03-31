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
        // Остальные товары...
        // Вы можете добавить их по аналогии с вышеприведенными
    ]
};
