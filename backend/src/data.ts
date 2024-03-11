import { Product } from "./models/productModel";
import { User } from "./models/userModel";
import bcrypt from 'bcryptjs'

export const sampleProducts: Product[] = [
    {
        _id:"1",
        name: "Burger",
        slug: "burger",
        category: "Fast Food",
        image: "../images/snacks/burger.jpg",
        price: 120,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "Very Tasty",
        images: ["../images/snacks/burger.jpg"], // Add images property
        brand: "Burger Palace", // Add brand property
        reviews: [], // Add reviews property
        isFeatured: false // Add isFeatured property
    },
    {
        _id:"2",
        name: "Pizza",
        slug: "pizza",
        category: "Fast Food",
        image: "../images/snacks/pizza.jpg",
        price: 180,
        countInStock: 8,
        rating: 4.8,
        numReviews: 10,
        description: "Spicy and Delicious",
        images: ["../images/snacks/pizza.jpg"], // Add images property
        brand: "Pizza Hut", // Add brand property
        reviews: [], // Add reviews property
        isFeatured: true // Add isFeatured property
    },
    {
        _id:"3",
        name: "French Fries",
        slug: "french_fries",
        category: "Fast Food",
        image: "../images/snacks/french.jpg",
        price: 120,
        countInStock: 12,
        rating: 4.2,
        numReviews: 10,
        description: "Salty and Tasty",
        images: ["../images/snacks/french.jpg"], // Add images property
        brand: "Fry's Corner", // Add brand property
        reviews: [], // Add reviews property
        isFeatured: false // Add isFeatured property
    },
    {
        _id:"4",
        name:"Sandwich",
        slug: "sandwich",
        category: "Fast Food",
        image: "../images/snacks/sandwich.jpg",
        price: 150,
        countInStock: 5,
        rating: 4.7,
        numReviews: 10,
        description: "Fresh and Delicious",
        images: ["../images/snacks/sandwich.jpg"], // Add images property
        brand: "Sandwich Emporium", // Add brand property
        reviews: [], // Add reviews property
        isFeatured: false // Add isFeatured property
    }
    // Add more products if needed
];



export const sampleUsers: User[] = [
  {
      name:"kalyani",
      email:'kalyani@gmail.com',
      password:bcrypt.hashSync('123456'),
      isAdmin:true
  },
  {
      name:"kamlesh",
      email:'kamlesh@gmail.com',
      password:bcrypt.hashSync('12345678'),
      isAdmin:false
  }


]