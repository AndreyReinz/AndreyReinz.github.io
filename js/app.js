document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    
    initReviews();
    
    initProducts();
    
    setupNavigation();
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    setupCategoryButtons();
});

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
    setInterval(() => {
        currentSlide = (currentSlide + 1) % config.sliderImages.length;
        showSlide(currentSlide);
    }, 10000);
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

function initReviews() {
    const reviewGrid = document.querySelector('.review-grid');
    reviewGrid.innerHTML = '';
    
    config.reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.style.animationDelay = `${index * 0.1}s`;
        
        reviewCard.innerHTML = `
            <p class="review-text">${review.text}</p>
            <p class="review-author">${review.author}</p>
        `;
        
        reviewGrid.appendChild(reviewCard);
    });
}

function initProducts() {
    const featuredProducts = config.products.slice(0, 6);
    displayProducts(1, 'featured-products', featuredProducts);
    
    displayProducts(1, 'full-catalog', config.products);
}

let currentPage = 1;
let currentCategory = 'all';
const productsPerPage = 6;

function displayProducts(page, containerId, products) {
    const productGrid = document.getElementById(containerId);
    productGrid.innerHTML = '';
    
    const filteredProducts = filterProductsByCategory(currentCategory);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const product = filteredProducts[i];
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
                    <a href="https://vk.me/faust_shop_official" class="cta-button small-button" target="_blank">Купить</a>
                    <a href="#" class="cta-button secondary-button small-button view-details" data-product-id="${i}">Подробнее</a>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    }
    
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-product-id'));
            openProductModal(productId);
        });
    });
    
    if (containerId === 'full-catalog') {
        updatePagination();
    }
}

function openProductModal(productId) {
    const product = config.products[productId];
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
    
    document.getElementById('closeModalBtn').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('active');
    });
}

function updatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    const filteredProducts = filterProductsByCategory(currentCategory);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (currentPage > 1) {
        const prevLink = document.createElement('a');
        prevLink.href = '#products';
        prevLink.className = 'page-link';
        prevLink.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage--;
            displayProducts(currentPage, 'full-catalog', filteredProducts);
            window.scrollTo({
                top: document.getElementById('catalog-page').offsetTop - 100,
                behavior: 'smooth'
            });
        });
        pagination.appendChild(prevLink);
    }
    
    for let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#products';
        pageLink.className = `page-link ${i === currentPage ? 'active' : ''}`;
        pageLink.textContent = i;
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayProducts(currentPage, 'full-catalog', filteredProducts);
            window.scrollTo({
                top: document.getElementById('catalog-page').offsetTop - 100,
                behavior: 'smooth'
            });
        });
        pagination.appendChild(pageLink);
    }
    
    if (currentPage < totalPages) {
        const nextLink = document.createElement('a');
        nextLink.href = '#products';
        nextLink.className = 'page-link';
        nextLink.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage++;
            displayProducts(currentPage, 'full-catalog', filteredProducts);
            window.scrollTo({
                top: document.getElementById('catalog-page').offsetTop - 100,
                behavior: 'smooth'
            });
        });
        pagination.appendChild(nextLink);
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('catalog-page').classList.remove('active');
            
            if (page === 'home') {
                document.getElementById('home-page').style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (page === 'catalog') {
                document.getElementById('catalog-page').classList.add('active');
                currentPage = 1;
                const filteredProducts = filterProductsByCategory(currentCategory);
                displayProducts(currentPage, 'full-catalog', filteredProducts);
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
        });
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .review-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}

document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this || e.target.id === 'closeModal') {
        this.classList.remove('active');
    }
});

function filterProductsByCategory(category) {
    if (category === 'all') {
        return config.products;
    }
    return config.products.filter(product => product.category === category);
}

function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            
            updateActiveCategoryButton();
            
            const filteredProducts = filterProductsByCategory(currentCategory);
            displayProducts(currentPage, 'full-catalog', filteredProducts);
            
            window.scrollTo({
                top: document.getElementById('full-catalog').offsetTop - 150,
                behavior: 'smooth'
            });
        });
    });
}

function updateActiveCategoryButton/circle {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        if (button.getAttribute('data-category') === currentCategory) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
