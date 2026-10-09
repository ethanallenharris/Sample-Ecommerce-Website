
document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    let cartCount = 0;
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartCountElement = document.querySelector('.cart-count');
    const closeCart = document.querySelector('.close-cart');

    // Update cart count display
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    // Open cart modal
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            if (cartModal) cartModal.style.display = 'block';
        });
    }

    // Close cart modal
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            if (cartModal) cartModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (cartModal && e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Update item quantity
    function updateQuantity(index, change) {
        cart[index].quantity += change;
        
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        updateCartCount();
        renderCartItems();
    }

    // Remove item from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartCount();
        renderCartItems();
    }

    // Add to cart
    function addToCart(product) {
        const existingItem = cart.find(item => item.name === product.name);
        
        if (existingItem) {
            existing极
