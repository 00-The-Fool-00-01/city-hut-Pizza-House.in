/* mocktail.js
    - Centralized data for Mocktails.
    - Pricing Logic: Organized by Section -> Variant (Normal vs Special).
*/

// 1. Mocktail Inventory
const mocktailCardsData = {
    1: { id: 1, title: "Virgin Mojito", desc: "Fresh mint, lime juice, sugar, and soda water.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 1 },
    2: { id: 2, title: "Blue Lagoon", desc: "Blue curaçao syrup, lemon juice, and sprite.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 1 },
    3: { id: 3, title: "Fruit Punch", desc: "Mixed fruit juices with a splash of grenadine.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 1 },
    4: { id: 4, title: "Virgin Pina Colada", desc: "Creamy coconut milk and pineapple juice blend.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 2 },
    5: { id: 5, title: "Strawberry Daiquiri", desc: "Frozen strawberries, lime, and sugar syrup.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 2 },
    6: { id: 6, title: "Mango Mule", desc: "Mango puree, ginger beer, and lime.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 2 },
    7: { id: 7, title: "Cinderella", desc: "Orange, pineapple, and lemon juice mix.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 2 },
    8: { id: 8, title: "Shirley Temple", desc: "Ginger ale with a splash of grenadine and cherry.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 1 },
    9: { id: 9, title: "Watermelon Cooler", desc: "Fresh watermelon juice with a hint of mint.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 3 },
    10: { id: 10, title: "Kiwi Sparkler", desc: "Muddled kiwi, lime, and sparkling water.", images: ["../banner/bg2.png", "../banner/bg2.png"], section: 3 }
};

// Make it global
window.mocktailCardsData = mocktailCardsData;

// 2. Pricing System
// Logic: Section -> Variant (Normal or Special)
const mocktailMenu = {
    section1: {
        name: "Basic Refreshers",
        normal: 99,
        special: 149 // Special includes extra garnish or premium syrup
    },
    section2: {
        name: "Creamy & Frozen",
        normal: 149,
        special: 199
    },
    section3: {
        name: "Premium Exotics",
        normal: 199,
        special: 249
    }
};

window.mocktailMenu = mocktailMenu;