export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
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
      {
        id: "app1",
        name: "Papadum",
        description: "Plain or spicy",
        price: 0.90,
        category: "appetisers"
      },
      {
        id: "app2",
        name: "Nun Gora",
        description: "Crispy rice cake",
        price: 2.95,
        category: "appetisers"
      },
      {
        id: "app3",
        name: "Onion Bhaji",
        description: "Onion fried with herbs and lentils",
        price: 3.75,
        category: "appetisers",
        popular: true
      },
      {
        id: "app4",
        name: "Somosa",
        description: "Fried pastries filled with a choice of meat or vegetable",
        price: 3.75,
        category: "appetisers"
      },
      {
        id: "app5",
        name: "Chicken Tikka",
        description: "Spiced chicken barbecued in the tandoor",
        price: 5.50,
        category: "appetisers",
        popular: true
      },
      {
        id: "app6",
        name: "Lamb Tikka",
        description: "Spiced lamb barbecued in the tandoor",
        price: 5.75,
        category: "appetisers"
      },
      {
        id: "app7",
        name: "Mix Starter",
        description: "Chicken tikka, lamb tikka, sheek kabab and meat somosa",
        price: 8.75,
        category: "appetisers",
        popular: true
      },
      {
        id: "app8",
        name: "Prawn Puri",
        description: "Prawns individually served with unleavened bread",
        price: 5.50,
        category: "appetisers"
      },
      {
        id: "app9",
        name: "Kingprawn Butterfly",
        description: "Deep fried king prawns cooked in garlic sauce",
        price: 8.25,
        category: "appetisers"
      },
      {
        id: "app10",
        name: "Kingprawn and Puri",
        description: "Prawns individually served with unleavened bread",
        price: 8.25,
        category: "appetisers"
      },
      {
        id: "app11",
        name: "Sheek Kebab",
        description: "Minced meat flavoured with herbs, barbecued in the tandoor",
        price: 5.75,
        category: "appetisers"
      },
      {
        id: "app12",
        name: "Bengal Fishcakes",
        description: "Fresh salmon with potato, garlic and mustard seeds",
        price: 5.50,
        category: "appetisers"
      }
    ]
  },
  {
    id: "tandoori",
    name: "Traditional Tandoori Grill",
    items: [
      {
        id: "tan1",
        name: "Tandoori Chicken",
        description: "Whole",
        price: 13.95,
        category: "tandoori"
      },
      {
        id: "tan2",
        name: "Tandoori Chicken",
        description: "Half",
        price: 8.50,
        category: "tandoori"
      },
      {
        id: "tan3",
        name: "Tandoori Kingprawn",
        description: "",
        price: 15.95,
        category: "tandoori"
      },
      {
        id: "tan4",
        name: "Tandoori Mixed Grill",
        description: "",
        price: 13.50,
        category: "tandoori"
      },
      {
        id: "tan5",
        name: "Tandoori Salmon Fillet",
        description: "",
        price: 15.95,
        category: "tandoori"
      },
      {
        id: "tan6",
        name: "Chicken Shashlik",
        description: "",
        price: 10.50,
        category: "tandoori"
      },
      {
        id: "tan7",
        name: "Chicken Tikka",
        description: "",
        price: 9.50,
        category: "tandoori"
      },
      {
        id: "tan8",
        name: "Lamb Tikka",
        description: "",
        price: 9.75,
        category: "tandoori"
      }
    ]
  },
  {
    id: "biryani",
    name: "Biryani Dishes",
    items: [
      {
        id: "bir1",
        name: "Chicken Biryani",
        description: "Basmati rice, cooked in medium spices served with a vegetable curry",
        price: 12.25,
        category: "biryani"
      },
      {
        id: "bir2",
        name: "Chicken Tikka Biryani",
        description: "",
        price: 13.25,
        category: "biryani"
      },
      {
        id: "bir3",
        name: "Lamb Biryani",
        description: "",
        price: 12.50,
        category: "biryani"
      },
      {
        id: "bir4",
        name: "Prawn Biryani",
        description: "",
        price: 12.50,
        category: "biryani"
      },
      {
        id: "bir5",
        name: "Kingprawn Biryani",
        description: "",
        price: 16.25,
        category: "biryani"
      },
      {
        id: "bir6",
        name: "Vegetable Biryani",
        description: "",
        price: 10.25,
        category: "biryani"
      }
    ]
  },
  {
    id: "balti",
    name: "Balti Dishes",
    items: [
      {
        id: "bal1",
        name: "Chicken Balti",
        description: "Originated from the mountains of Kashmir, cooked in a blend of aromatic spices",
        price: 9.50,
        category: "balti"
      },
      {
        id: "bal2",
        name: "Lamb Balti",
        description: "",
        price: 9.75,
        category: "balti"
      },
      {
        id: "bal3",
        name: "Chicken Tikka Balti",
        description: "",
        price: 9.95,
        category: "balti"
      },
      {
        id: "bal4",
        name: "Kingprawn Balti",
        description: "",
        price: 12.95,
        category: "balti"
      }
    ]
  },
  {
    id: "specialities",
    name: "Noor Specialities",
    items: [
      {
        id: "spec1",
        name: "Chicken Tikka Masala",
        description: "Tikka cooked in masa sauce",
        price: 9.95,
        category: "specialities",
        popular: true
      },
      {
        id: "spec2",
        name: "Butter Chicken",
        description: "Cooked in a creamy butter sauce",
        price: 9.95,
        category: "specialities",
        popular: true
      },
      {
        id: "spec3",
        name: "Chicken Passanda",
        description: "Cooked with a creamy sauce, almonds and nuts",
        price: 9.50,
        category: "specialities"
      },
      {
        id: "spec4",
        name: "Garlic Chicken Tikka",
        description: "Pieces of tikka cooked with garlic and fresh herbs",
        price: 9.50,
        category: "specialities"
      },
      {
        id: "spec5",
        name: "Chicken Jalfrezi",
        description: "Cooked with spring onion, green peppers and coriander, fairly hot",
        price: 9.50,
        category: "specialities"
      },
      {
        id: "spec6",
        name: "Chicken Tikka Bhuna",
        description: "Barbecued tikka cooked with spices and herbs",
        price: 9.50,
        category: "specialities"
      },
      {
        id: "spec7",
        name: "Chicken Tikka Jalfrazi",
        description: "Cooked with spring onion, green peppers and coriander, fairly hot",
        price: 9.75,
        category: "specialities"
      },
      {
        id: "spec8",
        name: "Chicken Achari",
        description: "Cooked with spices and lime pickles",
        price: 9.50,
        category: "specialities"
      },
      {
        id: "spec9",
        name: "Chicken Korai",
        description: "Cooked with spices herbs and tossed in a iron wok",
        price: 9.50,
        category: "specialities"
      },
      {
        id: "spec10",
        name: "Lamb Jalfrazi",
        description: "Cooked with spring onion, green peppers and coriander, fairly hot",
        price: 9.75,
        category: "specialities"
      },
      {
        id: "spec11",
        name: "Lamb Pasanda",
        description: "Cooked with creamy sauce, almonds and nuts",
        price: 9.75,
        category: "specialities"
      },
      {
        id: "spec12",
        name: "Lamb Achari",
        description: "Cooked with spices and lime pickles",
        price: 9.75,
        category: "specialities"
      },
      {
        id: "spec13",
        name: "Lamb Korai",
        description: "Cooked with spices herbs and tossed in a iron wok",
        price: 9.75,
        category: "specialities"
      },
      {
        id: "spec14",
        name: "Garlic Kingprawn",
        description: "Kingprawns cooked with garlic, served in thick sauce",
        price: 12.95,
        category: "specialities"
      },
      {
        id: "spec15",
        name: "Tandoori Kingprawn Masala",
        description: "Marinated kingprawns cooked in masala sauce",
        price: 16.25,
        category: "specialities"
      },
      {
        id: "spec16",
        name: "Kingprawn Jalfrazi",
        description: "Cooked with spring onion, green peppers and coriander, fairly hot",
        price: 12.95,
        category: "specialities"
      },
      {
        id: "spec17",
        name: "Kingprawn Noor",
        description: "Spiced kingprawns cooked in garlic sauce",
        price: 13.95,
        category: "specialities",
        popular: true
      },
      {
        id: "spec18",
        name: "Kingprawn La Bay Noor",
        description: "Kingprawns cooked with fresh herbs and spices in a sweet and sour sauce",
        price: 13.95,
        category: "specialities"
      },
      {
        id: "spec19",
        name: "Salmon Jhool",
        description: "Salmon cooked with spices and herbs",
        price: 15.95,
        category: "specialities"
      },
      {
        id: "spec20",
        name: "Sizzling Mixed Kebab Masala",
        description: "Mixed kebab cooked in a dry masala sauce, fairly hot",
        price: 13.95,
        category: "specialities"
      },
      {
        id: "spec21",
        name: "Chicken Noor",
        description: "Chicken with spring onion, green pepper, garlic and mushrooms, fairly hot",
        price: 13.95,
        category: "specialities",
        popular: true
      }
    ]
  },
  {
    id: "chicken",
    name: "Chicken",
    items: [
      {
        id: "chk1",
        name: "Chicken Curry",
        description: "Med hot",
        price: 8.25,
        category: "chicken"
      },
      {
        id: "chk2",
        name: "Madras",
        description: "Hot",
        price: 8.50,
        category: "chicken"
      },
      {
        id: "chk3",
        name: "Vindaloo",
        description: "Very hot",
        price: 8.50,
        category: "chicken"
      },
      {
        id: "chk4",
        name: "Chicken Bhuna",
        description: "Cooked in spices with thick sauce",
        price: 8.50,
        category: "chicken"
      },
      {
        id: "chk5",
        name: "Chicken Korma",
        description: "Cooked in spices with cream sauce",
        price: 8.50,
        category: "chicken"
      },
      {
        id: "chk6",
        name: "Chicken Dansak",
        description: "Cooked with lentils, hot sweet and sour",
        price: 8.95,
        category: "chicken"
      },
      {
        id: "chk7",
        name: "Chicken Rogan",
        description: "Cooked with tomatoes",
        price: 8.50,
        category: "chicken"
      },
      {
        id: "chk8",
        name: "Chicken Mushroom",
        description: "Cooked with mushroom",
        price: 8.50,
        category: "chicken"
      }
    ]
  },
  {
    id: "lamb",
    name: "Lamb",
    items: [
      {
        id: "lmb1",
        name: "Lamb Curry",
        description: "Med hot",
        price: 8.50,
        category: "lamb"
      },
      {
        id: "lmb2",
        name: "Madras",
        description: "Hot",
        price: 8.75,
        category: "lamb"
      },
      {
        id: "lmb3",
        name: "Vindaloo",
        description: "Very hot",
        price: 8.75,
        category: "lamb"
      },
      {
        id: "lmb4",
        name: "Lamb Bhuna",
        description: "Cooked in spices with thick sauce",
        price: 8.75,
        category: "lamb"
      },
      {
        id: "lmb5",
        name: "Lamb Sag",
        description: "Cooked in spices with spinach",
        price: 8.95,
        category: "lamb"
      },
      {
        id: "lmb6",
        name: "Lamb Korma",
        description: "Cooked in spices with cream sauce",
        price: 8.75,
        category: "lamb"
      },
      {
        id: "lmb7",
        name: "Lamb Dansak",
        description: "Cooked with lentils, hot sweet and sour",
        price: 8.95,
        category: "lamb"
      },
      {
        id: "lmb8",
        name: "Lamb Rogan",
        description: "Cooked with tomatoes",
        price: 8.75,
        category: "lamb"
      },
      {
        id: "lmb9",
        name: "Lamb Mushroom",
        description: "Cooked with mushroom",
        price: 8.75,
        category: "lamb"
      }
    ]
  },
  {
    id: "prawn",
    name: "Prawn",
    items: [
      {
        id: "prw1",
        name: "Prawn Curry",
        description: "Med hot",
        price: 8.50,
        category: "prawn"
      },
      {
        id: "prw2",
        name: "Madras",
        description: "Hot",
        price: 8.75,
        category: "prawn"
      },
      {
        id: "prw3",
        name: "Vindaloo",
        description: "Very hot",
        price: 8.75,
        category: "prawn"
      },
      {
        id: "prw4",
        name: "Prawn Bhuna",
        description: "Cooked in spices with thick sauce",
        price: 8.75,
        category: "prawn"
      },
      {
        id: "prw5",
        name: "Prawn Sag",
        description: "Cooked in spices with spinach",
        price: 8.95,
        category: "prawn"
      },
      {
        id: "prw6",
        name: "Prawn Korma",
        description: "Cooked in spices with cream sauce",
        price: 8.75,
        category: "prawn"
      },
      {
        id: "prw7",
        name: "Prawn Pathia",
        description: "Cooked with spices, herbs, hot sweet and sour",
        price: 8.75,
        category: "prawn"
      }
    ]
  },
  {
    id: "kingprawn",
    name: "King Prawn",
    items: [
      {
        id: "kpr1",
        name: "Kingprawn Curry",
        description: "Med hot",
        price: 11.50,
        category: "kingprawn"
      },
      {
        id: "kpr2",
        name: "Madras",
        description: "Hot",
        price: 11.75,
        category: "kingprawn"
      },
      {
        id: "kpr3",
        name: "Vindaloo",
        description: "Very hot",
        price: 11.75,
        category: "kingprawn"
      },
      {
        id: "kpr4",
        name: "Kingprawn Bhuna",
        description: "Cooked in spices with thick sauce",
        price: 11.75,
        category: "kingprawn"
      },
      {
        id: "kpr5",
        name: "Kingprawn Sag",
        description: "Cooked in spices with spinach",
        price: 11.95,
        category: "kingprawn"
      },
      {
        id: "kpr6",
        name: "Kingprawn Korma",
        description: "Cooked in spices with cream sauce",
        price: 11.75,
        category: "kingprawn"
      },
      {
        id: "kpr7",
        name: "Kingprawn Dansak",
        description: "Cooked with lentils, hot sweet and sour",
        price: 11.95,
        category: "kingprawn"
      }
    ]
  },
  {
    id: "vegetarian",
    name: "Vegetarian Sides",
    items: [
      {
        id: "veg1",
        name: "Vegetable Curry",
        description: "",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg2",
        name: "Dry Mixed Vegetable Bhaji",
        description: "Served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg3",
        name: "Mushroom Bhaji",
        description: "Served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg4",
        name: "Garlic Mushroom",
        description: "Served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg5",
        name: "Sag Paneer",
        description: "Spinach with our home made cheese",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg6",
        name: "Sag Aloo",
        description: "Potato with spinach, served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg7",
        name: "Bombay Aloo",
        description: "Served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg8",
        name: "Aloo Gobi",
        description: "Potato with cauliflower, served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg9",
        name: "Bindi Bhaji",
        description: "Okra, served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg10",
        name: "Chana Masala",
        description: "Chick peas, served dry",
        price: 4.50,
        category: "vegetarian"
      },
      {
        id: "veg11",
        name: "Tarka Dall",
        description: "Lentils fried with garlic",
        price: 4.50,
        category: "vegetarian"
      }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      {
        id: "rice1",
        name: "Boiled Rice",
        description: "",
        price: 3.25,
        category: "rice"
      },
      {
        id: "rice2",
        name: "Pilau Rice",
        description: "",
        price: 3.75,
        category: "rice"
      },
      {
        id: "rice3",
        name: "Mushroom Rice",
        description: "",
        price: 4.50,
        category: "rice"
      },
      {
        id: "rice4",
        name: "Keema Rice",
        description: "",
        price: 4.50,
        category: "rice"
      },
      {
        id: "rice5",
        name: "Special Pilau Rice",
        description: "",
        price: 4.50,
        category: "rice"
      }
    ]
  },
  {
    id: "bread",
    name: "Bread",
    items: [
      {
        id: "bread1",
        name: "Nan",
        description: "",
        price: 3.25,
        category: "bread"
      },
      {
        id: "bread2",
        name: "Keema Nan",
        description: "",
        price: 4.50,
        category: "bread"
      },
      {
        id: "bread3",
        name: "Peshwari Nan",
        description: "",
        price: 4.50,
        category: "bread"
      },
      {
        id: "bread4",
        name: "Garlic Nan",
        description: "",
        price: 4.50,
        category: "bread"
      },
      {
        id: "bread5",
        name: "Chapati",
        description: "",
        price: 1.95,
        category: "bread"
      },
      {
        id: "bread6",
        name: "Paratha",
        description: "",
        price: 3.25,
        category: "bread"
      },
      {
        id: "bread7",
        name: "Chips",
        description: "",
        price: 2.50,
        category: "bread"
      },
      {
        id: "bread8",
        name: "Cucumber Raitha",
        description: "",
        price: 1.95,
        category: "bread"
      }
    ]
  }
];
