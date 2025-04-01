document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initReviews();
    initProducts();
    setupNavigation();
    setupCategoryButtons();
    setupFilters();

    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

let currentPage = 1;
let currentCategory = 'all';
const productsPerPage = 9;

// Инициализация слайдера
function initSlider() {
    const slider = document.getElementById('slider');
    const dotsContainer = document.getElementById('slider-nav');
    
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    config.sliderImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url('${image}')`;
        slider.appendChild(slide);
        
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    let currentSlide = 0;
    const slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % config.sliderImages.length;
        showSlide(currentSlide);
    }, 10000);
    
    return () => clearInterval(slideInterval);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const slider = document.getElementById('slider');
    
    currentSlide = (n + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Инициализация отзывов
function initReviews() {
    const reviewGrid = document.querySelector('.review-grid');
    if (!reviewGrid) return;
    
    reviewGrid.innerHTML = config.reviews.map((review, index) => `
        <div class="review-card" style="animation-delay: ${index * 0.1}s">
            <p class="review-text">${review.text}</p>
            <p class="review-author">${review.author}</p>
        </div>
    `).join('');
}

// Инициализация продуктов
function initProducts() {
    const featuredProducts = config.products.slice(0, 6);
    displayProducts(1, 'featured-products', featuredProducts);
    displayProducts(1, 'full-catalog', config.products);
}

// Отображение продуктов с пагинацией
function displayProducts(page, containerId, products) {
    const productGrid = document.getElementById(containerId);
    if (!productGrid) return;

    const filteredProducts = filterProducts(products);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);
    
    productGrid.innerHTML = filteredProducts
        .slice(startIndex, endIndex)
        .map((product, index) => `
            <div class="product-card" style="animation-delay: ${index * 0.1}s">
                <div class="product-image" style="background-image: url('${product.image}');"></div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price"><i class="fas fa-tag"></i> ${product.price}</div>
                    <div class="product-buttons">
                        <a href="https://vk.me/faust_shop_official" class="cta-button small-button" target="_blank">Купить</a>
                        <a href="#" class="cta-button secondary-button small-button view-details" 
                           data-product-id="${product.id}">Подробнее</a>
                    </div>
                </div>
            </div>
        `).join('');
    
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product-id');
            openProductModal(productId);
        });
    });
    
    if (containerId === 'full-catalog') {
        updatePagination(totalPages);
    }
}

// Открытие модального окна с деталями товара
function openProductModal(productId) {
    const product = config.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-images">
            <div class="modal-main-image" style="background-image: url('${product.images[0]}');" id="mainModalImage"></div>
            ${product.images.map((image, index) => `
                <div class="modal-thumbnail" style="background-image: url('${image}');" 
                     onclick="document.getElementById('mainModalImage').style.backgroundImage = 'url(\'${image}\')'"></div>
            `).join('')}
        </div>
        <div class="modal-info">
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-price"><i class="fas fa-tag"></i> ${product.price}</div>
            <p class="modal-description">${product.description}</p>
            <div class="modal-features">
                <h4>Особенности:</h4>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-categories">
                <h4>Категории:</h4>
                <div class="category-tags">
                    ${product.categories.map(category => `
                        <span class="category-tag" data-category="${category}">
                            ${getCategoryName(category)}
                        </span>
                    `).join('')}
                </div>
            </div>
            <div class="modal-buttons">
                <a href="https://vk.me/faust_shop_official" class="cta-button" target="_blank">
                    <span>Купить</span>
                    <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#" class="cta-button secondary-button" id="closeModalBtn">
                    <i class="fas fa-times"></i>
                    <span>Закрыть</span>
                </a>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    document.querySelectorAll('.modal-categories .category-tag').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            currentCategory = category;
            currentPage = 1;
            
            updateActiveCategoryButton();
            displayProducts(currentPage, 'full-catalog', config.products);
            modal.classList.remove('active');
            window.scrollTo({
                top: document.getElementById('full-catalog').offsetTop - 150,
                behavior: 'smooth'
            });
        });
    });
    
    document.getElementById('closeModalBtn').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === this || e.target.id === 'closeModal') {
            this.classList.remove('active');
        }
    });
}

// Обновление пагинации
function updatePagination(totalPages) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    pagination.innerHTML = '';
    
    if (currentPage > 1) {
        pagination.appendChild(createPageLink(
            '<i class="fas fa-chevron-left"></i>',
            () => {
                currentPage--;
                displayProducts(currentPage, 'full-catalog', config.products);
                scrollToCatalog();
            }
        ));
    }
    
    for (let i = 1; i <= totalPages; i++) {
        pagination.appendChild(createPageLink(
            i,
            () => {
                currentPage = i;
                displayProducts(currentPage, 'full-catalog', config.products);
                scrollToCatalog();
            },
            i === currentPage
        ));
    }
    
    if (currentPage < totalPages) {
        pagination.appendChild(createPageLink(
            '<i class="fas fa-chevron-right"></i>',
            () => {
                currentPage++;
                displayProducts(currentPage, 'full-catalog', config.products);
                scrollToCatalog();
            }
        ));
    }
}

// Создание элемента ссылки пагинации
function createPageLink(content, onClick, isActive = false) {
    const link = document.createElement('a');
    link.href = '#products';
    link.className = `page-link ${isActive ? 'active' : ''}`;
    link.innerHTML = content;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        onClick();
    });
    return link;
}

// Прокрутка к каталогу
function scrollToCatalog() {
    window.scrollTo({
        top: document.getElementById('catalog-page').offsetTop - 100,
        behavior: 'smooth'
    });
}

// Настройка навигации
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

// Навигация по страницам
function navigateToPage(page) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('catalog-page').classList.remove('active');
    
    if (page === 'home') {
        document.getElementById('home-page').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'catalog') {
        document.getElementById('catalog-page').classList.add('active');
        currentPage = 1;
        currentCategory = 'all';
        displayProducts(currentPage, 'full-catalog', config.products);
        updateActiveCategoryButton();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const targetSection = document.getElementById(page);
        if (targetSection) {
            document.getElementById('home-page').style.display = 'block';
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }
}

// Анимация при скролле
function animateOnScroll() {
    document.querySelectorAll('.product-card, .review-card').forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}

// Фильтрация продуктов по категории
function filterProductsByCategory(category) {
    if (category === 'all') return config.products;
    return config.products.filter(product => 
        product.categories && product.categories.includes(category)
    );
}

// Настройка кнопок категорий
function setupCategoryButtons() {
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            
            updateActiveCategoryButton();
            displayProducts(currentPage, 'full-catalog', config.products);
            
            window.scrollTo({
                top: document.getElementById('full-catalog').offsetTop - 150,
                behavior: 'smooth'
            });
        });
    });
}

// Обновление активной кнопки категории
function updateActiveCategoryButton() {
    document.querySelectorAll('.category-btn').forEach(button => {
        button.classList.toggle(
            'active', 
            button.getAttribute('data-category') === currentCategory
        );
    });
}

// Получение читаемого имени категории
function getCategoryName(categoryKey) {
    const categoryNames = {
        'all': 'Все товары',
        'dps': 'ДПС',
        'pps': 'ППС / Росгвардия',
        'mchs': 'МЧС',
        'fso': 'ФСО',
        'skrf': 'СКРФ',
        'smp': 'СМП',
        'civil': 'Гражданские',
        'fsin': 'ФСИН / ФССП',
        'vai': 'ВАИ',
        'vp': 'ВП',
        'mods': 'Модификации',
        'packs': 'Сборки / Паки',
        'foreign': 'Зарубежные'
    };
    return categoryNames[categoryKey] || categoryKey;
}

// Функция фильтрации продуктов
function filterProducts(products) {
    let filtered = [...products];

    // Фильтрация по категории
    if (currentCategory !== 'all') {
        filtered = filtered.filter(product => 
            product.categories && product.categories.includes(currentCategory)
        );
    }

    // Фильтрация по цене
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    filtered = filtered.filter(product => {
        const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
        return price >= minPrice && price <= maxPrice;
    });

    // Фильтрация по дате
    const dateFilter = document.getElementById('date-filter').value;
    const now = new Date();
    if (filtered.every(product => product.publishDate)) {
        filtered = filtered.filter(product => {
            const publishDate = new Date(product.publishDate);
            if (dateFilter === 'week' && (now - publishDate) > 7 * 24 * 60 * 60 * 1000) return false;
            if (dateFilter === 'month' && (now - publishDate) > 30 * 24 * 60 * 60 * 1000) return false;
            if (dateFilter === 'year' && (now - publishDate) > 365 * 24 * 60 * 60 * 1000) return false;
            return true;
        });
    }

    // Сортировка
    const sortValue = document.getElementById('sort-filter').value;
    switch (sortValue) {
        case 'price-asc':
            filtered.sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')));
            break;
        case 'price-desc':
            filtered.sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')));
            break;
        case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'newest':
            if (filtered.every(product => product.publishDate)) {
                filtered.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
            }
            break;
        case 'oldest':
            if (filtered.every(product => product.publishDate)) {
                filtered.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
            }
            break;
    }

    return filtered;
}

// Настройка фильтров
function setupFilters() {
    const applyBtn = document.getElementById('apply-filters');
    const resetBtn = document.getElementById('reset-filters');
    const dateFilter = document.getElementById('date-filter');
    const sortFilter = document.getElementById('sort-filter');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');

    if (!applyBtn || !resetBtn || !dateFilter || !sortFilter || !minPrice || !maxPrice) {
        console.error('One or more filter elements not found');
        return;
    }

    applyBtn.addEventListener('click', applyFilters);
    resetBtn.addEventListener('click', resetFilters);
    dateFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
    minPrice.addEventListener('keypress', (e) => { if (e.key === 'Enter') applyFilters(); });
    maxPrice.addEventListener('keypress', (e) => { if (e.key === 'Enter') applyFilters(); });
}

function applyFilters() {
    currentPage = 1;
    displayProducts(currentPage, 'full-catalog', config.products);
    window.scrollTo({
        top: document.getElementById('full-catalog').offsetTop - 150,
        behavior: 'smooth'
    });
}

function resetFilters() {
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    document.getElementById('date-filter').value = 'all';
    document.getElementById('sort-filter').value = 'default';
    currentPage = 1;
    displayProducts(currentPage, 'full-catalog', config.products);
}
