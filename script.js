document.querySelector('.logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cart functionality
let cartCount = 0;
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const closeCart = document.querySelector('.close-cart');

// Update cart count display
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// Open cart modal
cartIcon.addEventListener('click', function(e) {
    e.preventDefault();
    cartModal.style.display = 'block';
});

// Close cart modal
closeCart.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

// Add to cart functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        updateCartCount();
        
        // Add animation to cart icon
        cartIcon.classList.add('animate');
        setTimeout(() => {
            cartIcon.classList.remove('animate');
        }, 500);
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Product data
const products = [
    {
        name: "Urban Sketch Tee",
        price: 34.99,
        image: "images/TShirtSketch.jpg",
        colors: ['#000', '#fff', '#2a5aff']
    },
    {
        name: "Classic Blue Tee",
        price: 29.99,
        image: "images/TShirtSimpleBlue.jpg",
        colors: ['#2a5aff', '#000']
    },
    {
        name: "Racetrack Black Tee",
        price: 39.99,
        image: "images/NewtownRacetrackBlack.jpg",
        colors: ['#000', '#fff', '#ff2a2a']
    },
    {
        name: "Classic Blue Premium",
        price: 44.99,
        image: "images/TShirtNewtownClassicBlue.jpg",
        colors: ['#2a5aff', '#000']
    }
];

// Render products function
function renderProducts(productsArray) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    productsArray.forEach(product => {
        const colorsHTML = product.colors.map(color => 
            `<span class="color-option" style="background-color: ${color};"></span>`
        ).join('');
        
        productGrid.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="quick-view">Quick View</button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-colors">
                        ${colorsHTML}
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
    });
    
    // Reattach event listeners to new buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            updateCartCount();
            
            cartIcon.classList.add('animate');
            setTimeout(() => {
                cartIcon.classList.remove('animate');
            }, 500);
        });
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    };
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// Initialize shop page
if (window.location.pathname.includes('shop.html')) {
    renderProducts(products);
    setupSearch();
}
