export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "appetisers",
    name: "Appetisers",
    items: [
      { id: "a1", name: "Onion Bhaji", description: "Crispy fried onion fritters with a blend of spices", price: 3.95, category: "appetisers", isPopular: true },
      { id: "a2", name: "Samosa (2 pcs)", description: "Crisp pastry parcels stuffed with spiced potatoes and peas", price: 3.95, category: "appetisers" },
      { id: "a3", name: "Chicken Tikka Starter", description: "Tender chicken marinated in yoghurt and spices, grilled in tandoor", price: 5.50, category: "appetisers", isPopular: true },
      { id: "a4", name: "Lamb Sheek Kebab", description: "Minced lamb shaped onto skewers with fresh herbs and spices", price: 5.50, category: "appetisers" },
      { id: "a5", name: "King Prawn Butterfly", description: "King prawns coated in breadcrumbs and deep fried until golden", price: 6.95, category: "appetisers" },
      { id: "a6", name: "Prawn Puri", description: "Spiced prawns served on light, crispy puri bread", price: 5.50, category: "appetisers" },
      { id: "a7", name: "Mixed Platter", description: "A selection of our most popular starters – perfect for sharing", price: 8.95, category: "appetisers", isPopular: true },
    ],
  },
  {
    id: "vegetarian",
    name: "Vegetarian Sides",
    items: [
      { id: "v1", name: "Aloo Gobi", description: "Potatoes and cauliflower gently spiced with turmeric and cumin", price: 5.50, category: "vegetarian" },
      { id: "v2", name: "Saag Aloo", description: "Fresh spinach cooked with potatoes and aromatic spices", price: 5.50, category: "vegetarian" },
      { id: "v3", name: "Chana Masala", description: "Chickpeas simmered in a rich, tangy tomato-based sauce", price: 5.50, category: "vegetarian", isPopular: true },
      { id: "v4", name: "Bombay Aloo", description: "Potatoes cooked with onions, tomatoes and warming spices", price: 5.50, category: "vegetarian" },
      { id: "v5", name: "Tarka Daal", description: "Yellow lentils tempered with garlic, cumin and coriander", price: 5.50, category: "vegetarian" },
      { id: "v6", name: "Mixed Vegetable Curry", description: "Seasonal vegetables in a medium-spiced creamy sauce", price: 5.95, category: "vegetarian" },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      { id: "r1", name: "Plain Basmati Rice", description: "Fluffy steamed basmati rice", price: 3.00, category: "rice" },
      { id: "r2", name: "Pilau Rice", description: "Basmati rice cooked with saffron, cardamom and bay leaf", price: 3.50, category: "rice" },
      { id: "r3", name: "Mushroom Rice", description: "Pilau rice with sautéed mushrooms", price: 3.95, category: "rice" },
      { id: "r4", name: "Keema Rice", description: "Pilau rice with spiced minced lamb", price: 4.50, category: "rice" },
      { id: "r5", name: "Coconut Rice", description: "Fragrant rice cooked with coconut milk and desiccated coconut", price: 3.95, category: "rice" },
      { id: "r6", name: "Egg Fried Rice", description: "Basmati rice stir-fried with eggs and spring onion", price: 3.95, category: "rice" },
    ],
  },
  {
    id: "bread",
    name: "Bread",
    items: [
      { id: "b1", name: "Plain Naan", description: "Soft, fluffy bread baked in our tandoor oven", price: 2.50, category: "bread" },
      { id: "b2", name: "Garlic Naan", description: "Naan brushed with butter and fresh garlic", price: 2.95, category: "bread", isPopular: true },
      { id: "b3", name: "Peshwari Naan", description: "Naan stuffed with coconut, sultanas and almonds", price: 3.25, category: "bread" },
      { id: "b4", name: "Keema Naan", description: "Naan stuffed with spiced minced lamb", price: 3.25, category: "bread" },
      { id: "b5", name: "Chapati", description: "Traditional whole-wheat unleavened bread", price: 1.95, category: "bread" },
      { id: "b6", name: "Paratha", description: "Flaky layered whole-wheat bread, pan-fried", price: 2.95, category: "bread" },
    ],
  },
  {
    id: "tandoori",
    name: "Traditional Tandoori",
    items: [
      { id: "t1", name: "Chicken Tikka", description: "Boneless chicken marinated in yoghurt and spices, chargrilled", price: 8.95, category: "tandoori", isPopular: true },
      { id: "t2", name: "Lamb Tikka", description: "Tender lamb pieces marinated and grilled in the tandoor", price: 9.50, category: "tandoori" },
      { id: "t3", name: "Tandoori Chicken", description: "Half chicken on the bone, marinated overnight and roasted", price: 8.50, category: "tandoori" },
      { id: "t4", name: "Mixed Grill", description: "A generous selection of tandoori chicken, lamb tikka, sheek kebab and chicken tikka", price: 12.95, category: "tandoori", isPopular: true },
      { id: "t5", name: "Tandoori King Prawns", description: "Jumbo king prawns marinated in a special tandoori paste", price: 13.95, category: "tandoori" },
    ],
  },
  {
    id: "biryani",
    name: "Biryani Dishes",
    items: [
      { id: "bi1", name: "Chicken Biryani", description: "Fragrant basmati rice cooked with tender chicken, whole spices and saffron", price: 9.95, category: "biryani", isPopular: true },
      { id: "bi2", name: "Lamb Biryani", description: "Slow-cooked lamb with aromatic rice, nuts and raisins", price: 10.95, category: "biryani" },
      { id: "bi3", name: "Prawn Biryani", description: "Succulent prawns layered with spiced basmati rice", price: 10.95, category: "biryani" },
      { id: "bi4", name: "King Prawn Biryani", description: "King prawns cooked with saffron-infused basmati rice", price: 13.95, category: "biryani" },
      { id: "bi5", name: "Vegetable Biryani", description: "Seasonal vegetables with fragrant rice and whole spices", price: 8.95, category: "biryani" },
    ],
  },
  {
    id: "specialities",
    name: "Noor Specialities",
    items: [
      { id: "s1", name: "Noor Special Karahi", description: "A signature dish cooked with fresh tomatoes, peppers and coriander in an iron karahi", price: 11.95, category: "specialities", isPopular: true },
      { id: "s2", name: "Garlic Chilli Chicken", description: "Stir-fried chicken with fresh garlic, green chillies and peppers", price: 10.95, category: "specialities" },
      { id: "s3", name: "Butter Chicken", description: "Creamy, mildly spiced tomato-based sauce with tender chicken tikka pieces", price: 10.95, category: "specialities", isPopular: true },
      { id: "s4", name: "Lamb Shank Noor", description: "Slow-braised lamb shank in a rich, aromatic sauce with potatoes", price: 14.95, category: "specialities" },
      { id: "s5", name: "Bengali Fish Curry", description: "Fresh fish fillet cooked in a traditional Bengali mustard and turmeric sauce", price: 11.95, category: "specialities" },
      { id: "s6", name: "Rezala", description: "A Bangladeshi speciality — creamy yoghurt-based curry with cardamom and rose water", price: 10.95, category: "specialities" },
    ],
  },
  {
    id: "balti",
    name: "Balti Dishes",
    items: [
      { id: "ba1", name: "Chicken Balti", description: "Chicken cooked in a wok-style balti dish with fresh spices", price: 9.50, category: "balti" },
      { id: "ba2", name: "Lamb Balti", description: "Tender lamb in a rich and aromatic balti sauce", price: 9.95, category: "balti" },
      { id: "ba3", name: "Prawn Balti", description: "Prawns cooked with onions, peppers and tomatoes in a balti sauce", price: 10.50, category: "balti" },
      { id: "ba4", name: "Vegetable Balti", description: "Mixed vegetables in a flavourful balti sauce", price: 8.50, category: "balti" },
    ],
  },
  {
    id: "chicken",
    name: "Chicken",
    items: [
      { id: "c1", name: "Chicken Korma", description: "Mild and creamy sauce with almonds and coconut", price: 8.95, category: "chicken" },
      { id: "c2", name: "Chicken Madras", description: "Hot and tangy curry from South India", price: 8.95, category: "chicken" },
      { id: "c3", name: "Chicken Jalfrezi", description: "Chicken cooked with fresh chillies, peppers and onions in a rich sauce", price: 9.50, category: "chicken", isPopular: true },
      { id: "c4", name: "Chicken Bhuna", description: "Medium-spiced thick sauce with tomatoes and onions", price: 8.95, category: "chicken" },
      { id: "c5", name: "Chicken Pathia", description: "Hot, sweet and sour sauce with a tangy tomato base", price: 8.95, category: "chicken" },
      { id: "c6", name: "Chicken Saag", description: "Chicken cooked with fresh spinach in a creamy sauce", price: 8.95, category: "chicken" },
    ],
  },
  {
    id: "lamb",
    name: "Lamb",
    items: [
      { id: "l1", name: "Lamb Korma", description: "Mild and creamy sauce with almonds and coconut", price: 9.50, category: "lamb" },
      { id: "l2", name: "Lamb Madras", description: "Hot and tangy curry from South India", price: 9.50, category: "lamb" },
      { id: "l3", name: "Lamb Rogan Josh", description: "A Kashmiri classic — slow-cooked lamb in a rich tomato and spice sauce", price: 9.95, category: "lamb", isPopular: true },
      { id: "l4", name: "Lamb Bhuna", description: "Thick, well-spiced sauce with tomatoes and onions", price: 9.50, category: "lamb" },
      { id: "l5", name: "Lamb Saag", description: "Lamb cooked with fresh spinach in a creamy sauce", price: 9.50, category: "lamb" },
      { id: "l6", name: "Lamb Dupiaza", description: "Lamb in a rich sauce with a generous amount of onions", price: 9.50, category: "lamb" },
    ],
  },
  {
    id: "prawn",
    name: "Prawn",
    items: [
      { id: "p1", name: "Prawn Korma", description: "Mild and creamy sauce with almonds and coconut", price: 9.50, category: "prawn" },
      { id: "p2", name: "Prawn Madras", description: "Hot and tangy curry from South India", price: 9.50, category: "prawn" },
      { id: "p3", name: "Prawn Bhuna", description: "Thick, well-spiced sauce with tomatoes and onions", price: 9.50, category: "prawn" },
      { id: "p4", name: "Prawn Jalfrezi", description: "Prawns with fresh chillies, peppers and onions", price: 9.95, category: "prawn" },
    ],
  },
  {
    id: "king-prawn",
    name: "King Prawn",
    items: [
      { id: "kp1", name: "King Prawn Korma", description: "Juicy king prawns in a mild, creamy coconut sauce", price: 12.95, category: "king-prawn" },
      { id: "kp2", name: "King Prawn Madras", description: "King prawns in a fiery South Indian sauce", price: 12.95, category: "king-prawn" },
      { id: "kp3", name: "King Prawn Jalfrezi", description: "King prawns stir-fried with chillies, peppers and a rich sauce", price: 13.50, category: "king-prawn", isPopular: true },
      { id: "kp4", name: "King Prawn Bhuna", description: "King prawns in a thick, rich and well-spiced sauce", price: 12.95, category: "king-prawn" },
    ],
  },
];
