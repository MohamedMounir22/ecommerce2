import greyKnitSweater from '../imgs/grey-knit-sweater-mens-fashion-winter-apparel-casual-wear-soft-texture-comfortable-clothing_191095-84711.avif';
import armChair from '../imgs/arm-chair-01.jpg';
import smartphonePro from '../imgs/phone-01.jpg';
import smartphonePlus from '../imgs/phone-02.jpg';
import smartphoneStandard from '../imgs/phone-03.png';
import wirelessHeadphones from '../imgs/wireless-04.png';
import wirelessHeadphonesPro from '../imgs/wireless-03.png';
import wirelessHeadphonesClassic from '../imgs/wireless-02.png';
import wirelessHeadphonesElite from '../imgs/wireless-01.png';
import smartwatchSport from '../imgs/watch-05.png';
import smartwatchDeluxe from '../imgs/watch-04.jpg';
import smartwatchClassic from '../imgs/watch-03.jpg';
import smartwatchUltra from '../imgs/watch-02.jpg';
import smartwatchLite from '../imgs/watch-01.jpg';




const allProducts = [
	{
		id: 1,
		name: 'Grey Knit Sweater',
		price: 45,
		category: 'Clothing',
		description: 'Comfortable grey knit sweater perfect for casual wear. Soft texture ideal for fall and winter seasons.',
		image: greyKnitSweater,
	},

	{
		id: 2,
		name: 'Arm Chair',
		price: 49,
		category: 'Furniture',
		description: 'Elegant arm chair with comfortable seating. Great for living rooms and reading spaces.',
		image: armChair,
	},
	{
		id: 4,
		name: 'Smartphone Pro',
		price: 90,
		category: 'Electronics',
		description: 'Advanced smartphone with cutting-edge technology. High performance processor and premium display.',
		image: smartphonePro,
	},
	{
		id: 5,
		name: 'Smartphone Plus',
		price: 69,
		category: 'Electronics',
		description: 'Feature-rich smartphone with larger screen size. Excellent for multimedia and gaming.',
		image: smartphonePlus,
	},
	{
		id: 6,
		name: 'Smartphone Standard',
		price: 29,
		category: 'Electronics',
		description: 'Reliable smartphone with essential features. Built-in camera and long battery life.',
		image: smartphoneStandard,
	},
	{
		id: 7,
		name: 'Wireless Headphones',
		price: 79,
		category: 'Electronics',
		description: 'Premium wireless headphones with noise cancellation. Crystal clear sound quality for music lovers.',
		image: wirelessHeadphones,
	},
	{
		id: 8,
		name: 'Wireless Headphones Pro',
		price: 29,
		category: 'Electronics',
		description: 'Professional wireless headphones with advanced features. Perfect for studio and professional use.',
		image: wirelessHeadphonesPro,
	},
	{
		id: 9,
		name: 'Wireless Headphones Classic',
		price: 29,
		category: 'Electronics',
		description: 'Timeless wireless headphones design with comfortable fit. Great sound quality and durability.',
		image: wirelessHeadphonesClassic,
	},
	{
		id: 10,
		name: 'Wireless Headphones Elite',
		price: 29,
		category: 'Electronics',
		description: 'Top-tier wireless headphones with superior sound. Premium materials and excellent build quality.',
		image: wirelessHeadphonesElite,
	},
	{
		id: 11,
		name: 'Smartwatch Sport',
		price: 29,
		category: 'accessories',
		description: 'Rugged smartwatch designed for athletes. Fitness tracking and water resistant features included.',
		image:	smartwatchSport,
	},
	{
		id: 12,
		name: 'Smartwatch Deluxe',
		price: 29,
		category: 'accessories',
		description: 'Luxury smartwatch with premium finish. Advanced health monitoring and stylish design.',
		image:smartwatchDeluxe,
	},
	{
		id: 13,
		name: 'Smartwatch Classic',
		price: 29,
		category: 'accessories',
		description: 'Timeless smartwatch with essential features. Reliable performance and clean interface.',
		image:smartwatchClassic ,
	},
	{
		id: 14,
		name: 'Smartwatch Ultra',
		price: 29,
		category: 'accessories',
		description: 'Ultra-advanced smartwatch with AI capabilities. Comprehensive health and wellness tracking.',
		image:smartwatchUltra,
	},
	{
		id: 15,
		name: 'Smartwatch Lite',
		price: 29,
		category: 'accessories',
		description: 'Lightweight smartwatch for everyday use. Simple interface with essential functions.',
		image:smartwatchLite,
	},
	{
		id: 16,
		name: 'Smartwatch Standard',
		price: 29,
		category: 'accessories',
		description: 'Standard smartwatch with balanced features. Good performance and reliable functionality.',
		image: smartphoneStandard,
	},
	// {
	// 	id: 17,
	// 	name: 'Coffee Table',
	// 	price: 29,
	// 	category: 'Furniture',
	// 	description: 'Modern coffee table with sleek design. Perfect centerpiece for your living room.',
	// 	image:coffetable,
	// },
	// {
	// 	id: 18,
	// 	name: 'Single Sofa Gray',
	// 	price: 29,
	// 	category: 'Furniture',
	// 	description: 'Elegant gray single sofa with cushioned seating. Ideal for apartments and small spaces.',
	// 	image: ,
	// },
	// {
	// 	id: 19,
	// 	name: 'Single Sofa Blue',
	// 	price: 29,
	// 	category: 'Furniture',
	// 	description: 'Stylish blue single sofa with modern design. Comfortable and durable for everyday use.',
	// 	image: process.env.PUBLIC_URL + '/imgs/single-sofa-03.jpg',
	// },
	// {
	// 	id: 20,
	// 	name: 'Single Sofa Beige',
	// 	price: 29,
	// 	category: 'Furniture',
	// 	description: 'Warm beige single sofa with cozy appeal. Perfect accent piece for any living space.',
	// 	image: process.env.PUBLIC_URL + '/imgs/single-sofa-02.jpg',
	// },
	// {
	// 	id: 21,
	// 	name: 'kanaba',
	// 	price: 29,
	// 	category: 'Furniture',
	// 	description: 'Special featured product with unique qualities. Limited time offer on this exclusive item.',
	// 	image: process.env.PUBLIC_URL + '/imgs/hero-img.png',
	// },
	// {
	// 	id: 22,
	// 	name: 'Double Sofa',
	// 	price: 290,
	// 	category: 'Furniture',
	// 	description: 'Spacious double sofa for comfortable seating. Great for families and entertaining guests.',
	// 	image: process.env.PUBLIC_URL + '/imgs/double-sofa-01.png',
	// },
	// {
	// 	id: 23,
	// 	name: 'Timer Counter',
	// 	price: 50,
	// 	category: 'Furniture',
	// 	description: 'Precise timer counter with user-friendly display. Essential for cooking, fitness, and productivity.',
	// 	image: process.env.PUBLIC_URL + '/imgs/counter-timer-img.png',
	// },
]
export default allProducts;