const PRODUCTS = {
    "coconut-oil": {
        id: "coconut-oil",
        title: "Cold Pressed Coconut Oil (Chekku Ennai)",
        subtitle: "100% Pure • Wooden Cold Pressed • From Pollachi",
        description: "Mugavarithazhai Cold Pressed Coconut Oil is prepared using the traditional wooden chekku method, without heat, chemicals, or preservatives. Carefully selected Pollachi coconuts are slow-pressed to retain their natural aroma, taste, and quality.",
        rating: 4.8,
        reviews: 124,
        images: [
            "images/coconut oil.jpg",
            // Fallback placeholder images if specific ones don't exist yet
            "https://placehold.co/600x600/E0F2E9/0E2C18?text=Extraction+Method",
            "https://placehold.co/600x600/E0F2E9/0E2C18?text=Packaging",
            "https://placehold.co/600x600/E0F2E9/0E2C18?text=Cooking+Use"
        ],
        variants: [
            { id: "1000ml", label: "1 L", price: 400, offer: "₹450" },
            { id: "500ml", label: "500 ml", price: 210, offer: null },
            { id: "200ml", label: "200 ml", price: 90, offer: null }
        ],
        delivery: {
            tn: "₹50 delivery within Tamil Nadu",
            other: "Other states → WhatsApp for details"
        },
        highlights: [
            { icon: "fa-seedling", text: "Traditional wooden chekku method" },
            { icon: "fa-ban", text: "No chemicals • No preservatives" },
            { icon: "fa-utensils", text: "Suitable for cooking, hair & skin" },
            { icon: "fa-tractor", text: "Direct from Pollachi farmers" }
        ],
        specifications: [
            { label: "Type", value: "Cold Pressed (Wood Pressed)" },
            { label: "Material", value: "Sulphur-free Copra (Coconut)" },
            { label: "Origin", value: "Pollachi, Tamil Nadu" },
            { label: "Shelf Life", value: "6 months" },
            { label: "Packaging", value: "Premium Bottle" }
        ],
        uses: [
            "Daily cooking & seasoning",
            "Hair growth & scalp nourishment",
            "Skin moisturizer & baby massage",
            "Oil pulling (oral health)"
        ],
        processing: [
            "Sun-dried coconuts selected from Pollachi farms.",
            "Slow wooden cold pressing to retain nutrients.",
            "No refining, bleaching, or deodorizing.",
            "Naturally filtered and settled."
        ],
        faq: [
            { q: "Is this oil suitable for daily cooking?", a: "Yes, it is ideal for daily home cooking and frying." },
            { q: "Any chemicals or preservatives?", a: "No. 100% natural and unrefined." },
            { q: "What is the shelf life?", a: "6–9 months when stored in a cool, dry place away from direct sunlight." }
        ]
    },
    "groundnut-oil": {
        id: "groundnut-oil",
        title: "Cold Pressed Groundnut Oil (Kadala Ennai)",
        subtitle: "Traditional Taste • Unrefined • Healthy Choice",
        description: "Mugavarithazhai Cold Pressed Groundnut Oil is extracted from premium quality groundnuts using the traditional wooden chekku process. This oil is unrefined, chemical-free, and made the traditional way trusted by generations.",
        rating: 5.0,
        reviews: 89,
        images: [
            "images/groundnut oil.jpg",
            "https://placehold.co/600x600/FDF3E7/8B6F47?text=Groundnut+Extraction",
            "https://placehold.co/600x600/FDF3E7/8B6F47?text=Cooking+Fry"
        ],
        variants: [
            { id: "1000ml", label: "1 L", price: 270, offer: null },
            { id: "500ml", label: "500 ml", price: 140, offer: null },
            { id: "200ml", label: "200 ml", price: 60, offer: null }
        ],
        delivery: {
            tn: "Delivery charges applicable",
            other: "WhatsApp for details"
        },
        highlights: [
            { icon: "fa-seedling", text: "Wooden cold pressed method" },
            { icon: "fa-heart", text: "Cholesterol-free & Heart healthy" },
            { icon: "fa-fire", text: "High smoke point for frying" },
            { icon: "fa-leaf", text: "Rich natural aroma" }
        ],
        specifications: [
            { label: "Type", value: "Cold Pressed (Wood Pressed)" },
            { label: "Material", value: "Premium Groundnuts" },
            { label: "Origin", value: "Pollachi, Tamil Nadu" },
            { label: "Shelf Life", value: "6 months" }
        ],
        uses: [
            "Deep frying & sautéing",
            "South Indian curries & chutneys",
            "Flavor enhancer in salads"
        ],
        processing: [
            "Sun-dried groundnuts.",
            "Traditional wood pressing.",
            "Natural filtration."
        ],
        faq: [
            { q: "Can I use this for deep frying?", a: "Yes, groundnut oil has a high smoke point, making it excellent for deep frying." },
            { q: "Is it unrefined?", a: "Yes, it is completely unrefined and retains all natural nutrients." }
        ]
    },
    "handcraft": {
        id: "handcraft",
        title: "Coconut Shell Products (Eco-Friendly Crafts)",
        subtitle: "Handmade • Sustainable • Plastic-Free",
        description: "Our coconut shell products are handcrafted using natural coconut shells, making them eco-friendly and reusable. Each product is made with care, supporting a sustainable and plastic-free lifestyle.",
        rating: 4.9,
        reviews: 156,
        images: [
            "images/handCraft.jpg",
            "https://placehold.co/600x600/D4AF96/5A4A3A?text=Tea+Cups",
            "https://placehold.co/600x600/D4AF96/5A4A3A?text=Bowls"
        ],
        variants: [
            { id: "customizable", label: "Customizable", price: 150, offer: null }
        ],
        delivery: {
            tn: "Standard delivery",
            other: "Contact for bulk/custom orders"
        },
        highlights: [
            { icon: "fa-globe-americas", text: "100% Eco-friendly & Plastic-free" },
            { icon: "fa-hands", text: "Handmade by local artisans" },
            { icon: "fa-recycle", text: "Sustainable & Reusable" },
            { icon: "fa-gift", text: "Perfect for gifting" }
        ],
        specifications: [
            { label: "Material", value: "Natural Coconut Shell" },
            { label: "Finish", value: "Polished / Natural" },
            { label: "Origin", value: "Pollachi, India" }
        ],
        uses: [
            "Serving tea, soup, or snacks",
            "Home decor & gardening",
            "Eco-friendly gifting"
        ],
        processing: [
            "Selected sturdy coconut shells.",
            "Cleaned and sanded for smooth finish.",
            "Polished with natural oil (no chemical varnish)."
        ],
        faq: [
            { q: "Are these washable?", a: "Yes, wash gently with mild soap and water. Do not soak for long periods." },
            { q: "Can I put hot liquids?", a: "Yes, they are suitable for warm to hot liquids like tea or soup." }
        ]
    }
};
