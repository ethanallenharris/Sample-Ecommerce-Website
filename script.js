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
