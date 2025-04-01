        let currentPage = 1;
        const productsPerPage = 6;
        let totalPages = Math.ceil(allProducts.length / productsPerPage);
        let currentCategory = 'all';

        // Функция для отображения товаров на текущей странице
        function displayProducts(page, containerId, products) {
            const productGrid = document.getElementById(containerId);
            productGrid.innerHTML = '';
            
            const startIndex = (page - 1) * productsPerPage;
            const endIndex = Math.min(startIndex + productsPerPage, products.length);
            
            for (let i = startIndex; i < endIndex; i++) {
                const product = products[i];
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.style.animationDelay = `${(i % productsPerPage) * 0.1}s`;
                
                productCard.innerHTML = `
                    <div class="product-image" style="background-image: url('${product.image}');"></div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="price"><i class="fas fa-tag"></i> ${product.price}</div>
                        <div class="product-buttons">
                            <a href="#" class="cta-button small-button">Купить</a>
                            <a href="#" class="cta-button secondary-button small-button">Подробнее</a>
                        </div>
                    </div>
                `;
                
                productGrid.appendChild(productCard);
            }
            
            if (containerId === 'full-catalog') {
                updatePagination();
            }
        }
        
        // Функция для фильтрации товаров по категории
        function filterProductsByCategory(category) {
            if (category === 'all') {
                return allProducts;
            }
            return allProducts.filter(product => product.category === category);
        }
        
        // Функция для обновления пагинации
        function updatePagination() {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';
            
            // Кнопка "Назад"
            if (currentPage > 1) {
                const prevLink = document.createElement('a');
                prevLink.href = '#products';
                prevLink.className = 'page-link';
                prevLink.innerHTML = '<i class="fas fa-chevron-left"></i>';
                prevLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage--;
                    const filteredProducts = filterProductsByCategory(currentCategory);
                    displayProducts(currentPage, 'full-catalog', filteredProducts);
                    window.scrollTo({
                        top: document.getElementById('catalog-page').offsetTop - 100,
                        behavior: 'smooth'
                    });
                });
                pagination.appendChild(prevLink);
            }
            
            // Номера страниц
            const filteredProducts = filterProductsByCategory(currentCategory);
            totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            
            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement('a');
                pageLink.href = '#products';
                pageLink.className = `page-link ${i === currentPage ? 'active' : ''}`;
                pageLink.textContent = i;
                pageLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    const filteredProducts = filterProductsByCategory(currentCategory);
                    displayProducts(currentPage, 'full-catalog', filteredProducts);
                    window.scrollTo({
                        top: document.getElementById('catalog-page').offsetTop - 100,
                        behavior: 'smooth'
                    });
                });
                pagination.appendChild(pageLink);
            }
            
            // Кнопка "Вперед"
            if (currentPage < totalPages) {
                const nextLink = document.createElement('a');
                nextLink.href = '#products';
                nextLink.className = 'page-link';
                nextLink.innerHTML = '<i class="fas fa-chevron-right"></i>';
                nextLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage++;
                    const filteredProducts = filterProductsByCategory(currentCategory);
                    displayProducts(currentPage, 'full-catalog', filteredProducts);
                    window.scrollTo({
                        top: document.getElementById('catalog-page').offsetTop - 100,
                        behavior: 'smooth'
                    });
                });
                pagination.appendChild(nextLink);
            }
        }
        
        // Навигация между страницами
        function setupNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');
                    
                    // Скрыть все страницы
                    document.getElementById('home-page').style.display = 'none';
                    document.getElementById('catalog-page').classList.remove('active');
                    
                    // Показать выбранную страницу
                    if (page === 'home') {
                        document.getElementById('home-page').style.display = 'block';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (page === 'catalog') {
                        document.getElementById('catalog-page').classList.add('active');
                        currentPage = 1;
                        currentCategory = 'all';
                        const filteredProducts = filterProductsByCategory(currentCategory);
                        displayProducts(currentPage, 'full-catalog', filteredProducts);
                        updateActiveCategoryButton();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        // Для других страниц (отзывы, контакты) просто скроллим к ним
                        const targetSection = document.getElementById(page);
                        if (targetSection) {
                            document.getElementById('home-page').style.display = 'block';
                            window.scrollTo({
                                top: targetSection.offsetTop - 100,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
        }
        
        // Обновление активной кнопки категории
        function updateActiveCategoryButton() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            categoryButtons.forEach(button => {
                if (button.getAttribute('data-category') === currentCategory) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
        
        // Настройка кнопок категорий
        function setupCategoryButtons() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    currentCategory = this.getAttribute('data-category');
                    currentPage = 1;
                    
                    // Обновить активную кнопку
                    updateActiveCategoryButton();
                    
                    // Отфильтровать и отобразить товары
                    const filteredProducts = filterProductsByCategory(currentCategory);
                    displayProducts(currentPage, 'full-catalog', filteredProducts);
                    
                    // Прокрутить к началу каталога
                    window.scrollTo({
                        top: document.getElementById('full-catalog').offsetTop - 150,
                        behavior: 'smooth'
                    });
                });
            });
        }
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Gallery Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        const slider = document.getElementById('slider');
        
        function showSlide(n) {
            currentSlide = (n + slides.length) % slides.length;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Auto slide change every 10 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 10000);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Animate elements when they come into view
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.product-card, .review-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        };
        
        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            // Показываем 6 популярных товаров на главной
            const featuredProducts = allProducts.slice(0, 6);
            displayProducts(1, 'featured-products', featuredProducts);
            
            // Настройка навигации
            setupNavigation();
            
            // Настройка кнопок категорий
            setupCategoryButtons();
            
            // Показываем главную страницу по умолчанию
            document.getElementById('home-page').style.display = 'block';
            
            // Анимация при скролле
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
        });
