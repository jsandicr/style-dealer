import { Category, Filter, Store, typeFilters } from "./types"

export const listOrderBy = [
    {
        "id": 1,
        "title": "Most Recent"  
    },
    {
        "id": 2,
        "title": "Price: High to Low"
    },
    {
        "id": 3,
        "title": "Price: Low to High"
    }
]

export const filters: Filter[] = [
    {
        "id": 1,
        "title": "Gender",
        "type" : typeFilters.check,
        "options": [
            "Men",
            "Women"
        ]
    },
    {
        "id": 2,
        "title": "Offers",
        "type" : typeFilters.check,
        "options": [
            "Up to -25%",
            "Offers"
        ]
    },
    {
        "id": 3,
        "title": "Price",
        "type" : typeFilters.check,
        "options": [
            "€0 - €50",
            "€50 - €100",
            "€100 - €150",
            "€150+"
        ]
    }
]

export const categories: Category[] = [
    {
        "title": "New Arrivals",
        "img": "/assets/img/shop-stands.jpg",
        "subcategories": [
            {
                "title": "Featured",
                "list": [
                    {
                        "title": "Shop New Arrivals",
                        "href": "/"
                    },
                    {
                        "title": "New Shoes",
                        "href": "/"
                    },
                    {
                        "title": "New Clothing",
                        "href" : "/"
                    }
                ]
            },
            {
                "title": "New Releases",
                "list": [
                    {
                        "title": "Loafers",
                        "href": "/"
                    },
                    {
                        "title": "Jackets",
                        "href": "/"
                    }
                ]
            }
        ]
    },
    {
        "title": "Men",
        "img": "/assets/img/shop-sudadera.jpg",
        "subcategories": [
            {
                "title": "Featured",
                "list": [
                    {
                        "title": "New Arrivals",
                        "href": "/"
                    },
                    {
                        "title": "Launches",
                        "href": "/"
                    },
                    {
                        "title": "Teens",
                        "href" : "/"
                    },
                    {
                        "title": "Winter Products",
                        "href" : "/"
                    }
                ]
            },
            {
                "title": "Shoes",
                "list": [
                    {
                        "title": "All Shoes",
                        "href": "/"
                    },
                    {
                        "title": "Loafers",
                        "href": "/"
                    },
                    {
                        "title": "Boots",
                        "href": "/"
                    },
                    {
                        "title": "Sports Shoes",
                        "href": "/"
                    }
                ]
            },
            {
                "title": "Clothing",
                "list": [
                    {
                        "title": "All Clothing",
                        "href": "/"
                    },
                    {
                        "title": "Sweaters",
                        "href": "/"
                    },
                    {
                        "title": "Jackets",
                        "href": "/"
                    },
                    {
                        "title": "Pants",
                        "href": "/"
                    },
                    {
                        "title": "Shirts",
                        "href": "/"
                    }
                ]
            }
        ]
    },
    {
        "title": "Women",
        "img": "/assets/img/shop-women.jpg",
        "subcategories": [
            {
                "title": "Featured",
                "list": [
                    {
                        "title": "New Arrivals",
                        "href": "/"
                    },
                    {
                        "title": "Launches",
                        "href": "/"
                    },
                    {
                        "title": "Teens",
                        "href" : "/"
                    },
                    {
                        "title": "Winter Products",
                        "href" : "/"
                    }
                ]
            },
            {
                "title": "Shoes",
                "list": [
                    {
                        "title": "All Shoes",
                        "href": "/"
                    },
                    {
                        "title": "Loafers",
                        "href": "/"
                    },
                    {
                        "title": "Boots",
                        "href": "/"
                    },
                    {
                        "title": "Sports Shoes",
                        "href": "/"
                    }
                ]
            },
            {
                "title": "Clothing",
                "list": [
                    {
                        "title": "All Clothing",
                        "href": "/"
                    },
                    {
                        "title": "Sweaters",
                        "href": "/"
                    },
                    {
                        "title": "Jackets",
                        "href": "/"
                    },
                    {
                        "title": "Pants",
                        "href": "/"
                    },
                    {
                        "title": "Shirts",
                        "href": "/"
                    }
                ]
            }
        ]
    },
    {
        "title": "Kids",
        "img": "/assets/img/shop-tshirt.jpg",
        "subcategories": [
            {
                "title": "Featured",
                "list": [
                    {
                        "title": "New Arrivals",
                        "href": "/"
                    },
                    {
                        "title": "Launches",
                        "href": "/"
                    },
                    {
                        "title": "Teens",
                        "href" : "/"
                    },
                    {
                        "title": "Winter Products",
                        "href" : "/"
                    }
                ]
            },
            {
                "title": "Shoes",
                "list": [
                    {
                        "title": "All Shoes",
                        "href": "/"
                    },
                    {
                        "title": "Loafers",
                        "href": "/"
                    },
                    {
                        "title": "Boots",
                        "href": "/"
                    },
                    {
                        "title": "Sports Shoes",
                        "href": "/"
                    }
                ]
            },
            {
                "title": "Clothing",
                "list": [
                    {
                        "title": "All Clothing",
                        "href": "/"
                    },
                    {
                        "title": "Sweaters",
                        "href": "/"
                    },
                    {
                        "title": "Jackets",
                        "href": "/"
                    },
                    {
                        "title": "Pants",
                        "href": "/"
                    },
                    {
                        "title": "Shirts",
                        "href": "/"
                    }
                ]
            }
        ]
    },
    {
        "title": "Deals",
        "img": "/assets/img/shop-boxy.jpg",
        "subcategories": [
            {
                "title": "Discounts and Offers",
                "list": [
                    {
                        "title": "Products with Discounts",
                        "href": "/"
                    },
                    {
                        "title": "Up to -25%",
                        "href": "/"
                    },
                    {
                        "title": "Last Chance",
                        "href" : "/"
                    }
                ]
            },
            {
                "title": "Men's Discounts",
                "list": [
                    {
                        "title": "All Men's Discounts",
                        "href": "/"
                    },
                    {
                        "title": "Shoes",
                        "href": "/"
                    },
                    {
                        "title": "Clothing",
                        "href": "/"
                    }
                ]
            },
            {
                "title": "Women's Discounts",
                "list": [
                    {
                        "title": "All Women's Discounts",
                        "href": "/"
                    },
                    {
                        "title": "Shoes",
                        "href": "/"
                    },
                    {
                        "title": "Clothing",
                        "href": "/"
                    }
                ]
            },
            {
                "title": "Kids' Discounts",
                "list": [
                    {
                        "title": "All Kids' Discounts",
                        "href": "/"
                    },
                    {
                        "title": "Shoes",
                        "href": "/"
                    },
                    {
                        "title": "Clothing",
                        "href": "/"
                    }
                ]
            }
        ]
    }
]

export const quantity = [
    {
        "id": 1,
        "quantity": 1
    },
    {
        "id": 2,
        "quantity": 2
    },
    {
        "id": 3,
        "quantity": 3
    },
    {
        "id": 4,
        "quantity": 4
    },
    {
        "id": 5,
        "quantity": 5
    }
]

export const stores: Store[] = [
    {
        id: "1",
        name: "Fashion Boutique",
        img: '/assets/img/new-york-store.jpg',
        description: "A trendy boutique with the latest fashion collections.",
        location: "123 Fashion Avenue, Cityville, CV",
        openingHours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM"
    },
    {
        id: "2",
        name: "Tech Haven",
        img: '/assets/img/new-york-store.jpg',
        description: "Your go-to place for all things tech and electronics.",
        location: "456 Gadget Street, Techland, TL",
        openingHours: "Mon-Fri: 9:00 AM - 7:00 PM, Sat-Sun: 10:00 AM - 6:00 PM"
    },
    {
        id: "3",
        name: "Green Groceries",
        img: '/assets/img/new-york-store.jpg',
        description: "A supermarket specializing in organic and fresh produce.",
        location: "789 Healthy Lane, Healthville, HV",
        openingHours: "Mon-Sat: 8:00 AM - 9:00 PM, Sun: 9:00 AM - 7:00 PM"
    },
    {
        id: "4",
        name: "Book Nook",
        img: '/assets/img/new-york-store.jpg',
        description: "A cozy bookstore offering a wide selection of books.",
        location: "101 Reading Road, Booktown, BT",
        openingHours: "Mon-Sat: 10:00 AM - 7:00 PM, Sun: 11:00 AM - 5:00 PM"
    },
    {
        id: "5",
        name: "Café Delight",
        img: '/assets/img/new-york-store.jpg',
        description: "A charming café with delicious coffee and pastries.",
        location: "222 Coffee Street, Cafetown, CT",
        openingHours: "Mon-Fri: 7:00 AM - 6:00 PM, Sat-Sun: 8:00 AM - 5:00 PM"
    },
    {
        id: "6",
        name: "Sports World",
        img: '/assets/img/new-york-store.jpg',
        description: "Your destination for sports gear and equipment.",
        location: "333 Athlete Avenue, Sportsville, SV",
        openingHours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM"
    },
    {
        id: "7",
        name: "Home Essentials",
        img: '/assets/img/new-york-store.jpg',
        description: "A store for all your home improvement and decor needs.",
        location: "444 Homestead Road, Hometown, HT",
        openingHours: "Mon-Fri: 8:30 AM - 7:30 PM, Sat-Sun: 9:30 AM - 6:30 PM"
    },
    {
        id: "8",
        name: "Pet Paradise",
        img: '/assets/img/new-york-store.jpg',
        description: "A pet store with everything for your furry friends.",
        location: "555 Pet Lane, Petville, PV",
        openingHours: "Mon-Sat: 9:00 AM - 6:00 PM, Sun: 10:00 AM - 5:00 PM"
    }
];