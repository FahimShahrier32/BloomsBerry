'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import MenuItemCard from './MenuItemCard';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  ingredients?: string;
  popular?: boolean;
  image?: string;
  isNew?: boolean;
}

interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'espresso',
    title: 'Espresso & Milk Classics',
    description: 'Classic espresso-based drinks crafted with precision and care',
    items: [
      { id: 'ristretto', name: 'Ristretto', description: 'A very short, highly concentrated extraction of espresso', price: '৳160' },
      { id: 'espresso', name: 'Espresso', description: 'The standard, powerful foundation of all coffee drinks', price: '৳160' },
      { id: 'americano', name: 'Americano', description: 'Espresso shots lengthened with hot water for a smooth black coffee', price: '৳170' },
      { id: 'macchiato', name: 'Macchiato', description: 'Espresso marked with a small layer of steamed milk foam', price: '৳210' },
      { id: 'cortado', name: 'Cortado', description: 'Equal parts espresso and steamed milk for a robust, rich flavor', price: '৳220' },
      { id: 'piccolo', name: 'Piccolo', description: 'A petite version of a latte, served in a small glass', price: '৳220' },
      { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso topped with steamed milk and a thick, airy layer of foam', price: '৳230' },
      { id: 'cafe-latte', name: 'Café Latte', description: 'Espresso mixed with a generous amount of steamed milk and a thin foam layer', price: '৳230' },
      { id: 'flat-white-latte', name: 'Flat White Latte', description: 'Espresso with thin, velvety steamed milk and no visible foam', price: '৳230' },
      { id: 'creme-espresso', name: 'Crème Espresso', description: 'Strong espresso topped with sweet, thick cream', price: '৳210' },
      { id: 'aerocano', name: 'Aerocano', description: 'Espresso poured over sparkling water for a refreshing fizz', price: '৳190' },
    ],
  },
  {
    id: 'lattes',
    title: 'Specialty Lattes & Mochas',
    description: 'Creative latte and mocha blends with unique flavour profiles',
    items: [
      { id: 'spanish-latte', name: 'Spanish Latte', description: 'A rich latte traditionally made with condensed milk for extra sweetness', price: '৳270' },
      { id: 'hazelnut-latte', name: 'Hazelnut Latte', description: 'A latte flavored with sweet and rich hazelnut syrup', price: '৳340' },
      { id: 'vanilla-latte', name: 'Vanilla Latte', description: 'A classic latte enhanced with smooth vanilla flavor', price: '৳340' },
      { id: 'salted-caramel-latte', name: 'Salted Caramel Latte', description: 'The perfect blend of rich caramel, espresso, and a hint of salt', price: '৳340' },
      { id: 'flavoured-latte', name: 'Flavoured Latte', description: 'Your choice of flavored syrup added to a classic latte', price: '৳360' },
      { id: 'mocha-dark-white', name: 'Mocha Dark / White', description: 'Espresso and steamed milk mixed with your choice of dark or white chocolate', price: '৳370', image: '/images/menu/mocha-dark.png' },
      { id: 'salted-caramel-mocha', name: 'Salted Caramel Mocha', description: 'Mocha combined with salted caramel syrup for a decadent taste', price: '৳450' },
      { id: 'affogato', name: 'Affogato', description: 'A scoop of vanilla ice cream drowned in a shot of hot espresso', price: '৳250' },
      { id: 'hot-chocolate', name: 'Regular Hot Chocolate', description: 'A comforting and classic warm beverage made with hot chocolate mix and milk', price: '৳280' },
    ],
  },
  {
    id: 'freddo',
    title: 'Coffee Freddo',
    description: 'Cold-shaken Greek-style espresso and cream freddo drinks',
    items: [
      { id: 'cafe-freddo', name: 'Cafe Freddo', description: 'A strong, chilled coffee beverage blended until slushy', price: '৳290' },
      { id: 'flavour-freddo', name: 'Flavour Freddo', description: 'Iced espresso', price: '৳390' },
      { id: 'dark-white-mocha-freddo', name: 'Dark / White Mocha', description: 'A blend of espresso, milk, and either dark or white chocolate', price: '৳410' },
      { id: 'blooms-special-freddo', name: 'Blooms Special Freddo', description: 'Mocha combined with salted caramel syrup for a decadent taste', price: '৳450' },
      { id: 'brownie-mocha', name: 'Brownie Mocha', description: 'A deep chocolate mocha designed to taste like a liquid brownie', price: '৳450' },
      { id: 'mocha-mint', name: 'Mocha Mint', description: 'A classic mocha infused with cool, invigorating mint', price: '৳430' },
      { id: 'cream-freddo', name: 'Cream Freddo', description: 'Chilled, strong coffee generously topped with whipped cream', price: '৳250' },
      { id: 'flavour-cream-freddo', name: 'Flavour Cream Freddo', description: 'Iced espresso with cream and foam', price: '৳340' },
      { id: 'chocolate-cream-freddo', name: 'Chocolate Cream Freddo', description: 'A warm or iced beverage focused on pure hazelnut flavor', price: '৳380' },
    ],
  },
  {
    id: 'iced-drinks',
    title: 'Unique Iced Drinks & Teas',
    description: 'Refreshing iced beverages and tea blends crafted for every mood',
    items: [
      { id: 'apple-chiller', name: 'Apple Chiller', description: 'Apple, Lemon, Mint, Soda', price: '৳280' },
      { id: 'berry-blush', name: 'Berry Blush', description: 'Strawberry, Lemon, Mint, Soda, Blue ocean', price: '৳300', image: '/images/menu/berry-blush.png' },
      { id: 'mango-chiller-fizz', name: 'Mango Chiller Fizz', description: 'Lemon, mint, mango, soda', price: '৳300' },
      { id: 'blooms-berry-blast', name: 'Blooms Berry Blast', description: 'Lemon, blueberry, mint, soda', price: '৳300' },
      { id: 'green-screwdriver', name: 'Green Screwdriver', description: 'Blue ocean, lemon, mint, orange, soda', price: '৳300' },
      { id: 'bloody-ultra', name: 'Bloody Ultra', description: 'Lemon, pomegranate, soda', price: '৳330' },
      { id: 'garden-half-half', name: 'The Garden Half & Half', description: 'A refreshing mix of half iced tea and half lemonade', price: '৳250' },
      { id: 'passionate-bloom', name: 'Passionate Bloom', description: 'Iced tea infused with the tangy flavors of passion fruit and lemon', price: '৳350' },
      { id: 'peach-please', name: 'Peach Please', description: 'A lightly sweet and refreshing iced tea flavored with ripe peach', price: '৳360' },
      { id: 'orange-ember', name: 'Orange Ember', description: 'Fresh Orange Juice', price: '৳300' },
      { id: 'berry-bloom', name: 'Berry Bloom', description: 'Fresh Grape Juice', price: '৳300' },
      { id: 'apple-sprout', name: 'The Apple Sprout', description: 'Fresh Apple Juice', price: '৳300' },
      { id: 'pinnacle-pineapple', name: 'Pinnacle Pineapple', description: 'Fresh Pineapple Juice', price: '৳300' },
    ],
  },
  {
    id: 'milkshakes',
    title: 'Gourmet Milkshakes & Blends',
    description: 'Premium milkshakes and smoothie blends crafted with the finest ingredients',
    items: [
      { id: 'red-velvet-bloom', name: 'Red Velvet Bloom', description: 'Red velvet and cheesecake flavored milkshake', price: '৳480' },
      { id: 'cocoa-bloom', name: 'Cocoa Bloom', description: 'A rich shake blended with the beloved chocolate-hazelnut spread', price: '৳510', image: '/images/menu/cocoa-bloom.png' },
      { id: 'oreo-dream', name: 'Oreo Dream', description: 'The traditional, creamy blend of ice cream and Oreo cookies', price: '৳480' },
      { id: 'tropical-bloom', name: 'Tropical Bloom', description: 'Blueberry flavored iced espresso', price: '৳480' },
      { id: 'autumn-bloom', name: 'Autumn Bloom', description: 'A smooth vanilla shake with pieces of crunchy walnut mixed in', price: '৳460' },
      { id: 'golden-dewdrop', name: 'Golden Dewdrop', description: 'A nutritious blend of honey, dates, and various nuts', price: '৳480' },
      { id: 'blueberry-smoothie', name: 'Blueberry Smoothie', description: 'Fresh blueberries blended creamy and sweet', price: '৳480' },
      { id: 'raspberry-smoothie', name: 'Raspberry Smoothie', description: 'Mixed berries with a rich, tangy flavor', price: '৳480' },
      { id: 'strawberry-smoothie', name: 'Strawberry Smoothie', description: 'Classic creamy blend of fresh strawberries', price: '৳480', popular: true, image: '/images/menu/strawberry-smoothie.png' },
      { id: 'mango-smoothie', name: 'Mango Smoothie (Seasonal)', description: 'Smooth, sweet blend of ripe mangoes', price: '৳480', image: '/images/menu/mango-smoothie.png' },
    ],
  },
  {
    id: 'light-bites',
    title: 'Light Bites',
    description: 'Savoury snacks and small plates perfect for sharing over great conversation',
    items: [
      { id: 'french-fries', name: 'Classic French Fries', description: 'Thin-cut potatoes fried until golden and perfectly salted', price: '৳250', image: '/images/menu/classic-french-fries.png' },
      { id: 'loaded-nachos', name: 'Loaded Nachos', description: 'Crispy chips piled high with sauce, and savory toppings', price: '৳320', image: '/images/menu/loaded-nachos.png' },
      { id: 'mini-munchies', name: 'Mini Munchies', description: 'Small pieces of chicken breast coated and deep-fried until crunchy', price: '৳310', image: '/images/menu/mini-munchies.png' },
      { id: 'calamari-fritti', name: 'Calamari Fritti', description: 'Tender calamari rings, lightly battered and fried', price: '৳415', image: '/images/menu/calamari-fritti.png' },
      { id: 'golden-prawns', name: 'Golden Prawns', description: 'Five large prawns coated in breading and deep-fried', price: '৳410' },
      { id: 'buffalo-wings', name: 'Buffalo Wings', description: 'Six chicken wings tossed in a tangy and spicy Buffalo sauce', price: '৳335', image: '/images/menu/buffalo-wings.png' },
      { id: 'honey-lollipop-wings', name: 'Honey-Glazed Lollipop Wings', description: 'Six wings specially prepared and coated in a sweet honey glaze', price: '৳360' },
      { id: 'garlic-mushrooms', name: 'Garlic Mushrooms', description: 'Button mushrooms cooked in rich butter and fragrant garlic', price: '৳400', image: '/images/menu/garlic-mushrooms.png' },
      { id: 'fish-finger', name: 'Fish Finger', description: 'Small, breaded, rectangular portion of white fish covered in crispy breadcrumbs', price: '৳400' },
      { id: 'fish-chips', name: 'Classic Fish & Chips', description: 'Traditional fried fish fillet served with a portion of potato fries', price: '৳495', image: '/images/menu/classic-fish-and-chips.png' },
    ],
  },
  {
    id: 'platters',
    title: 'Blooms Special Platters',
    description: 'Generous sharing platters crafted for the full Blooms dining experience',
    items: [
      { id: 'peri-peri-platter', name: 'Peri Peri Chicken Platter', description: 'Chicken marinated and grilled with the fiery peri peri chilli sauce', price: '৳570', popular: true, image: '/images/menu/peri-peri-platter.png' },
      { id: 'bbq-herbs-platter', name: 'BBQ Herbs Chicken Platter', description: 'Grilled chicken seasoned with a smoky BBQ rub and aromatic herbs', price: '৳555', image: '/images/menu/bbq-herbs-chicken.png' },
      { id: 'dory-platter', name: 'Pan-fried Dory Platter', description: 'A flaky white dory fish fillet gently pan-fried to a golden finish', price: '৳595', image: '/images/menu/dory-platter.png' },
    ],
  },
  {
    id: 'soups-salads',
    title: 'Soups & Salads',
    description: 'Wholesome soups and vibrant salads made with the freshest seasonal ingredients',
    items: [
      { id: 'thai-soup', name: 'Thai Soup (Thick)', description: 'A rich, substantial Thai soup with a thick, flavorful base', price: '৳295' },
      { id: 'cream-mushroom', name: 'Cream of Mushroom', description: 'A smooth, creamy soup made with fresh mushrooms', price: '৳310', image: '/images/menu/cream-of-mushroom.png' },
      { id: 'oceans-clarity', name: "Ocean's Clarity", description: 'A delicate, clear soup featuring various types of fresh seafood', price: '৳350', image: '/images/menu/oceans-clarity.png' },
      { id: 'crunchy-cashew', name: 'Crunchy Cashew', description: 'Mixed greens topped with chicken and crunchy cashew nuts', price: '৳385', image: '/images/menu/crunchy-cashew.png' },
      { id: 'honey-bloom-salad', name: 'Honey Bloom Salad', description: 'A sweet and savory salad featuring chicken and greens with honey dressing', price: '৳360' },
    ],
  },
  {
    id: 'rice-noodles',
    title: 'Rice & Noodle Bowls',
    description: 'Hearty rice bowls and noodle dishes inspired by bold Asian flavours',
    items: [
      { id: 'k-drama-chicken-bowl', name: 'K-Drama Chicken Bowl', description: 'Savory and slightly spicy Korean-style chicken served over a bed of rice', price: '৳380', popular: true, image: '/images/menu/k-drama-chicken-bowl.png' },
      { id: 'beef-stir-fry-bowl', name: 'Beef Stir Fry Rice Bowl', description: 'Tender beef strips and stir-fried vegetables served with rice', price: '৳450' },
      { id: 'tropical-treasure-bowl', name: 'Tropical Treasure Bowl', description: 'Fried rice with curry powder, cashews, protein, and pineapple, often served in a pineapple', price: '৳430', image: '/images/menu/mexican-fiesta.png' },
      { id: 'seafood-rice-bowl', name: 'Seafood Rice Bowl', description: 'Fluffy rice topped with an assortment of fresh, cooked seafood', price: '৳460', image: '/images/menu/seafood-rice-bowl.png' },
      { id: 'pad-thai-noodles', name: 'Pad Thai Noodles', description: 'Sweet, savory, and tangy rice noodles stir-fried with traditional seasonings', price: '৳385' },
      { id: 'dual-delight-noodles', name: 'Dual Delight Noodles', description: 'Stir-fried noodles loaded with both chicken and fresh prawns', price: '৳320' },
    ],
  },
  {
    id: 'wraps-burgers',
    title: 'Wraps, Subs & Burgers',
    description: 'Handcrafted wraps, loaded subs and premium burgers made fresh to order',
    items: [
      { id: 'blooms-burrito', name: "Bloom's Burrito", description: 'A large flour tortilla wrapped around seasoned chicken', price: '৳395' },
      { id: 'quesadilla', name: 'Quesadilla', description: 'A folded flour tortilla filled with melted cheese and savory ingredients, grilled until crisp', price: '৳400' },
      { id: 'chicken-steak-burger', name: 'Chicken Steak Burger', description: 'A large, flattened chicken fillet served in a soft bun', price: '৳395', image: '/images/menu/chicken-steak-burger.png' },
      { id: 'og-beefy-bite', name: 'The OG Beefy Bite', description: 'A standard grilled beef patty served on a bun with toppings', price: '৳550' },
      { id: 'grilled-chicken-sandwich', name: 'Grilled Chicken Sandwich', description: 'Sliced grilled chicken served between bread slices with fresh additions', price: '৳375', image: '/images/menu/grilled-chicken-sandwich.png' },
      { id: 'suicide-sub', name: 'Suicide Sub Sandwich', description: 'A large sub sandwich packed with numerous ingredients and a very spicy sauce', price: '৳375' },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    description: 'Freshly prepared pasta dishes with rich, hearty house-made sauces',
    items: [
      { id: 'creme-chicken-pasta', name: 'Crème Chicken Pasta', description: 'Pasta tossed in a rich, white cream sauce with tender chicken pieces', price: '৳410', image: '/images/menu/grilled-chicken-fettuccine.png' },
      { id: 'penne-arrabiata-prawns', name: 'Penne Arrabiata With Prawns', description: 'Penne pasta in a fiery tomato sauce and plump prawns', price: '৳450', image: '/images/menu/penne-arrabiata-prawns.png' },
      { id: 'grilled-chicken-fettuccine', name: 'Grilled Chicken Fettuccine', description: 'Flat pasta noodles topped with savory grilled chicken strips', price: '৳555', image: '/images/menu/grilled-chicken-fettuccine.png' },
      { id: 'pasta-basta-baked', name: 'Pasta Basta (Baked)', description: "A chef's special pasta dish featuring a mix of ingredients and sauces", price: '৳445', image: '/images/menu/pasta-basta.png' },
      { id: 'suicide-pasta-baked', name: 'Suicide Pasta (Baked)', description: 'A pasta dish prepared with a high level of chili and heat', price: '৳460' },
      { id: 'beef-americano-baked', name: 'Beef Americano (Baked)', description: 'A pasta dish featuring ground beef and a savory tomato sauce', price: '৳475' },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    description: 'Hand-stretched pizzas with premium toppings baked to golden perfection',
    items: [
      { id: 'shrimp-aglio-olio', name: 'Shrimp Aglio e Olio', description: 'Pizza loaded with garlic and fresh shrimp', price: '৳990' },
      { id: 'meat-lovers-pizza', name: 'Meat Lovers Pizza', description: 'Pizza loaded with meat', price: '৳1030', popular: true, image: '/images/menu/meat-lovers-pizza.png', isNew: true },
      { id: 'beef-americano-pizza', name: 'Beef Americano Pizza', description: 'Pizza topped with seasoned ground beef and melted mozzarella', price: '৳1050' },
      { id: 'four-seasons', name: 'Four Seasons', description: 'A pizza divided into four sections, each featuring different toppings', price: '৳1100' },
      { id: 'ocean-toppings-pizza', name: 'Ocean Toppings Pizza', description: 'Pizza topped with various kinds of fresh seafood', price: '৳1150' },
      { id: 'deep-dish-pizza', name: 'Deep Dish Pizza', description: 'A thick high-crusted pizza baked in a deep pan and layered with cheese', price: '৳1150' },
    ],
  },
  {
    id: 'sweet-endings',
    title: 'Sweet Endings',
    description: 'Decadent desserts to end your Bloomsberry experience on a sweet note',
    items: [
      { id: 'nutella-brownie', name: 'Nutella Brownie', description: 'A dense, chocolatey brownie topped with smooth Nutella spread', price: '৳150' },
      { id: 'brownie-ice-cream', name: 'Brownie with Ice-cream', description: 'A warm fudgy chocolate brownie topped with a cold, velvety scoop of vanilla ice-cream', price: '৳250' },
      { id: 'chocolate-cake', name: 'Chocolate Cake', description: 'A simple, rich, and moist layer of chocolate cake', price: '৳280' },
      { id: 'red-velvet-cake', name: 'Red Velvet Cake', description: 'A rich red cake with a slight cocoa flavor, topped with cream cheese frosting', price: '৳320' },
      { id: 'cheese-cake', name: 'Cheese Cake', description: 'A rich, dense dessert with a creamy cheese filling', price: '৳350' },
      { id: 'blueberry-cheesecake', name: 'Blueberry Cheesecake', description: 'Creamy cheesecake with blueberry glaze', price: '৳410' },
      { id: 'strawberry-cheesecake', name: 'Strawberry Cheesecake', description: 'Creamy cheesecake with strawberry glaze', price: '৳410' },
    ],
  },
];

interface MenuProps {
  compact?: boolean;
}

const Menu = ({ compact = false }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('espresso');

  const currentCategory = menuData.find(cat => cat.id === activeCategory);

  // Compact view for homepage - shows featured items grid
  if (compact) {
    const featuredItems = menuData
      .flatMap(category => category.items)
      .filter(item => item.popular || item.isNew)
      .slice(0, 8);

    return (
      <section id="menu" className="bg-gradient-to-b from-white to-[#F8FAF8] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#5F8F72] text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
              Culinary Excellence
            </span>
            <h2 className="text-5xl md:text-6xl font-display text-[#2D3A2F] mb-4 tracking-tight">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-[#5F8F72] mx-auto rounded-full mb-6" />
            <p className="text-[#5F6B61] text-lg max-w-2xl mx-auto leading-relaxed font-body">
              Curated flavors crafted with passion, featuring our most beloved signature dishes
              and artisanal creations
            </p>
          </motion.div>

          {/* Featured Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 mb-16">
            {featuredItems.map((item, index) => (
              <MenuItemCard key={`compact-${item.id}`} item={item} index={index} />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#5F8F72] hover:bg-[#2D3A2F] text-white font-body font-bold px-12 py-8 text-lg rounded-full shadow-lg shadow-[#5F8F72]/25 hover:shadow-xl transition-all duration-300 group uppercase tracking-widest"
            >
              <Link href="/menu" className="flex items-center gap-3">
                View Full Menu
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>
            </Button>
            <p className="text-[#5F6B61] text-sm mt-6 font-body">
              Discover our complete selection of beverages and cuisine
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Full view for menu page - shows tabs and detailed items
  return (
    <section id="menu" className="bg-gradient-to-b from-white to-[#F8FAF8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#5F8F72] text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
            Culinary Excellence
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-[#2D3A2F] mb-4 tracking-tight">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-[#5F8F72] mx-auto rounded-full mb-6" />
          <p className="text-[#5F6B61] text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Curated flavors crafted with passion, featuring the finest ingredients
            for the perfect conversation over great food and coffee
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-nowrap overflow-x-auto no-scrollbar justify-start lg:justify-center gap-2 mb-12 pb-4 px-4"
        >
          {menuData.map((category) => (
            <button
              key={`tab-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2.5 rounded-xl transition-all duration-300 flex-shrink-0 whitespace-nowrap ${activeCategory === category.id
                ? 'bg-[#5F8F72] text-white shadow-lg shadow-[#5F8F72]/25'
                : 'bg-white text-[#2D3A2F] shadow-md hover:shadow-lg border border-[#AFC8B2]/20'
                }`}
            >
              <span className="font-body font-semibold text-sm">{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Category Description */}
        {currentCategory && (
          <motion.div
            key={`desc-${currentCategory.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <p className="text-[#5F6B61] text-lg font-body max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </motion.div>
        )}

        {/* Menu Items Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        {currentCategory && (
          <motion.div
            key={`grid-${currentCategory.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          >
            {currentCategory.items.map((item, index) => (
              <MenuItemCard key={`item-${item.id}`} item={item} index={index} />
            ))}
          </motion.div>
        )}

        {/* Allergies Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[#5F6B61]/70 font-body">
            Please inform our staff of any allergies or dietary requirements.
            Prices are subject to change. All items are prepared fresh to order.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
