// Menu Data based on Blowfish Poke Clarksville
const menuData = {
    "build-your-own": {
        title: "Build Your Own Bowl",
        description: "Customize your poke bowl exactly how you want it.",
        icon: "🥣",
        items: [
            {
                id: "regular-bowl",
                title: "Regular Bowl",
                price: "$16.10",
                description: "Includes up to 2 proteins. Customize your base, mix-ins, sauces, and toppings.",
                details: {
                    bases: ["White Rice", "Brown Rice", "Salad", "Half & Half"],
                    proteins: ["Tuna", "Salmon", "Spicy Tuna", "Spicy Salmon", "Crab Salad", "Shrimp Tempura", "Tofu", "Chicken", "Beef"],
                    mixIns: ["Cucumber", "Edamame", "Pineapple", "Carrots", "Red Onion", "Purple Cabbage", "Jalapeno", "Sweet Corn", "Mango"],
                    sauces: ["Spicy Mayo", "Yum Yum", "Eel Sauce", "Avo Lime", "Teriyaki", "House Shoyu", "Ponzu"],
                    toppings: ["Crispy Onion", "Tempura Flakes", "Wasabi Peas", "Sunflower Seeds", "Roasted Seaweed", "Sesame Seeds", "Furikake"]
                }
            },
            {
                id: "large-bowl",
                title: "Large Bowl",
                price: "$18.40",
                description: "Includes up to 3 proteins for a larger appetite.",
                details: {
                    bases: ["White Rice", "Brown Rice", "Salad", "Half & Half"],
                    proteins: ["Select up to 3 options from our fresh proteins"],
                    mixIns: ["Unlimited mix-ins"],
                    sauces: ["Select your favorite sauces"],
                    toppings: ["Top it off with crunch"]
                }
            },
            {
                id: "kid-bowl",
                title: "Kid Bowl",
                price: "$8.00",
                description: "Perfect for kids! 1 scoop of protein and 4 toppings.",
                details: {
                    bases: ["Choice of Base"],
                    proteins: ["1 Scoop of Protein"],
                    mixIns: ["Up to 4 Fresh Toppings"],
                    sauces: ["Kid-friendly sauces available"],
                    toppings: ["Crispy Toppings"]
                }
            },
            {
                id: "no-protein-bowl",
                title: "No Protein Bowl",
                price: "$11.50",
                description: "A veggie-forward bowl with no protein included.",
                details: {
                    bases: ["White Rice", "Brown Rice", "Salad", "Half & Half"],
                    mixIns: ["Unlimited mix-ins"],
                    sauces: ["Select your favorite sauces"],
                    toppings: ["Top it off with crunch"]
                }
            }
        ]
    },
    "signature-bowls": {
        title: "Signature Bowls",
        description: "Chef-curated bowls with perfectly balanced flavor profiles.",
        icon: "✨",
        items: [
            {
                id: "classic-blowfish",
                title: "Classic Blowfish",
                price: "$16.10",
                description: "Tuna, Salmon, Cucumber, Edamame, Sweet Onion, House Shoyu, Sesame Seeds.",
                details: {
                    ingredients: ["White Rice", "Tuna", "Salmon", "Cucumber", "Edamame", "Sweet Onion", "House Shoyu", "Sesame Seeds", "Roasted Seaweed"]
                }
            },
            {
                id: "spicy-volcano",
                title: "Spicy Volcano",
                price: "$16.50",
                description: "Spicy Tuna, Spicy Salmon, Jalapeno, Spicy Mayo, Crispy Onion.",
                details: {
                    ingredients: ["White Rice", "Spicy Tuna", "Spicy Salmon", "Jalapeno", "Cucumber", "Spicy Mayo", "Sriracha", "Crispy Onion", "Tempura Flakes"]
                }
            },
            {
                id: "hawaiian-sunset",
                title: "Hawaiian Sunset",
                price: "$16.10",
                description: "Salmon, Crab Salad, Mango, Pineapple, Yum Yum Sauce, Coconut Flakes.",
                details: {
                    ingredients: ["Brown Rice", "Salmon", "Crab Salad", "Mango", "Pineapple", "Carrots", "Yum Yum Sauce", "Toasted Coconut"]
                }
            }
        ]
    },
    "kitchen-items": {
        title: "Kitchen Items",
        description: "Hot, savory Hawaiian BBQ and cooked specialties.",
        icon: "🔥",
        items: [
            {
                id: "bbq-mix",
                title: "BBQ MIX Plate",
                price: "$20.70",
                description: "A hearty combination of BBQ Chicken, BBQ Beef, and Kalbi (Short Ribs).",
                details: {
                    includes: ["BBQ Chicken", "BBQ Beef Ribeye", "Kalbi (Short Ribs)", "White Rice", "Macaroni Salad"]
                }
            },
            {
                id: "bbq-kalbi",
                title: "BBQ Kalbi (Short Ribs)",
                price: "$20.70",
                description: "Tender, marinated Hawaiian-style short ribs grilled to perfection.",
                details: {
                    includes: ["Generous portion of Kalbi", "White Rice", "Macaroni Salad"]
                }
            },
            {
                id: "bbq-beef-ribeye",
                title: "BBQ Beef Ribeye",
                price: "$18.40",
                description: "Thinly sliced, marinated BBQ beef ribeye.",
                details: {
                    includes: ["BBQ Beef Ribeye", "White Rice", "Macaroni Salad"]
                }
            },
            {
                id: "bbq-chicken",
                title: "BBQ Chicken",
                price: "$17.25",
                description: "Grilled, marinated Hawaiian BBQ chicken.",
                details: {
                    includes: ["BBQ Chicken", "White Rice", "Macaroni Salad"]
                }
            },
            {
                id: "chicken-katsu",
                title: "Chicken Katsu",
                price: "$16.00",
                description: "Crispy panko-breaded chicken cutlet served with katsu sauce.",
                details: {
                    includes: ["Chicken Katsu", "Katsu Sauce", "White Rice", "Macaroni Salad"]
                }
            },
            {
                id: "loco-moco",
                title: "Loco Moco",
                price: "$16.00",
                description: "Classic Hawaiian comfort food: hamburger patty, fried egg, and brown gravy over rice.",
                details: {
                    includes: ["White Rice", "Hamburger Patty", "Brown Gravy", "Fried Egg (Sunny Side Up)"]
                }
            }
        ]
    },
    "sides-drinks": {
        title: "Sides & Drinks",
        description: "Perfect additions to complete your meal.",
        icon: "🥤",
        items: [
            {
                id: "spam-musubi",
                title: "Spam Musubi",
                price: "$3.50",
                description: "Grilled Spam glazed with soy sauce and sugar, served on top of rice and wrapped in nori.",
                details: {
                    options: ["Classic Spam", "Spicy Spam"]
                }
            },
            {
                id: "seaweed-salad",
                title: "Seaweed Salad",
                price: "$4.50",
                description: "Traditional sweet and savory wakame seaweed salad.",
                details: {
                    ingredients: ["Wakame Seaweed", "Sesame Oil", "Sesame Seeds", "Vinegar"]
                }
            },
            {
                id: "hawaiian-sun",
                title: "Hawaiian Sun Drinks",
                price: "$2.50",
                description: "Refreshing tropical fruit drinks directly from Hawaii.",
                details: {
                    flavors: ["Pass-O-Guava (POG)", "Lilikoi Passion", "Strawberry Guava", "Pineapple Orange", "Guava Nectar"]
                }
            },
            {
                id: "milk-teas",
                title: "Milk Teas",
                price: "$5.50",
                description: "Sweet, creamy milk teas with optional boba pearls.",
                details: {
                    flavors: ["Classic Black Milk Tea", "Taro Milk Tea", "Thai Tea", "Matcha Milk Tea"],
                    add_ons: ["Tapioca Pearls (Boba)", "Lychee Jelly"]
                }
            }
        ]
    }
};

// DOM Elements
const categoryNav = document.getElementById('category-nav');
const menuGrid = document.getElementById('menu-grid');
const currentCategoryTitle = document.getElementById('current-category-title');
const currentCategoryDesc = document.getElementById('current-category-desc');
const modalOverlay = document.getElementById('item-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

// State
let activeCategory = 'build-your-own';

// Initialize App
function initApp() {
    renderNavigation();
    renderCategory(activeCategory);
    setupEventListeners();
}

// Render Sidebar Navigation
function renderNavigation() {
    categoryNav.innerHTML = '';

    for (const [key, category] of Object.entries(menuData)) {
        const li = document.createElement('li');
        li.className = `nav-item ${key === activeCategory ? 'active' : ''}`;
        li.dataset.category = key;
        li.innerHTML = `<span>${category.icon}</span> ${category.title}`;

        li.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');

            // Render new category
            activeCategory = key;
            renderCategory(activeCategory);
        });

        categoryNav.appendChild(li);
    }
}

// Render Menu Items for a Category
function renderCategory(categoryId) {
    const category = menuData[categoryId];

    // Update Header
    currentCategoryTitle.textContent = category.title;
    currentCategoryDesc.textContent = category.description;

    // Animate grid out
    menuGrid.style.opacity = '0';
    menuGrid.style.transform = 'translateY(10px)';

    setTimeout(() => {
        // Build new grid
        menuGrid.innerHTML = '';

        category.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <h3 class="menu-card-title">${item.title}</h3>
                <div class="menu-card-price">${item.price}</div>
                <p class="menu-card-desc">${item.description}</p>
                <button class="menu-card-btn">Tap for details</button>
            `;

            card.addEventListener('click', () => openModal(item));

            menuGrid.appendChild(card);
        });

        // Animate grid in
        requestAnimationFrame(() => {
            menuGrid.style.transition = 'all 0.4s ease';
            menuGrid.style.opacity = '1';
            menuGrid.style.transform = 'translateY(0)';
        });
    }, 200);
}

// Open Item Modal
function openModal(item) {
    let detailsHtml = '';

    // Dynamically generate details sections based on what's available
    if (item.details) {
        for (const [key, values] of Object.entries(item.details)) {
            // Format key (e.g., 'mixIns' -> 'Mix Ins')
            const formattedKey = key.replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());

            detailsHtml += `
                <div class="build-section">
                    <h4 class="build-section-title">${formattedKey}</h4>
                    <div class="tag-list">
                        ${values.map(val => `<span class="tag">${val}</span>`).join('')}
                    </div>
                </div>
            `;
        }
    }

    modalBody.innerHTML = `
        <div class="modal-header-section">
            <h2 class="modal-title">${item.title}</h2>
            <div class="modal-price">${item.price}</div>
            <p class="modal-desc">${item.description}</p>
        </div>
        <div class="modal-details">
            ${detailsHtml}
        </div>
    `;

    modalOverlay.classList.add('active');
}

// Close Modal
function closeModal() {
    modalOverlay.classList.remove('active');
}

// Setup Event Listeners
function setupEventListeners() {
    closeModalBtn.addEventListener('click', closeModal);

    // Close modal on click outside content
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);