// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";
// import images
import AboutImg from "../src/assets/img/about/burger.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.png";
import MenuImg2 from "../src/assets/img/menu/2.png";
import MenuImg3 from "../src/assets/img/menu/3.png";
import MenuImg4 from "../src/assets/img/menu/4.png";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef1.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";

export const navData = [
  { href: "/", name: "home" },
  { href: "/", name: "about" },
  { href: "/", name: "menu" },
  { href: "/", name: "team" },
  { href: "/", name: "testimonials" },
  { href: "/", name: "book a table" },
  { href: "/", name: "contact" },
];

export const heroData = {
  pretitle: "Where Every Bite is Refreshingly Delicious",
  title: "Little Lemon",
  subtitle: "Crafting fresh and zesty dishes to brighten up your day ",
  btnText: "Find out more",
};

// export const socialData = [
//   { href: "/", icon: <FaYoutube /> },
//   { href: "/", icon: <FaFacebookF /> },
//   { href: "/", icon: <FaInstagram /> },
//   { href: "/", icon: <FaPinterestP /> },
//   { href: "/", icon: <FaDiscord /> },
// ];

export const aboutData = {
  pretitle: "our story",
  title: "who we are",
  subtitle:
    "Once upon a time, a man named Nikos traveled the world, trying different cuisines and falling in love with Greek food. He dreamed of bringing the taste of his homeland to his community. With hard work and dedication, Nikos opened Little Lemon, a cozy Greek restaurant that quickly became a local favorite. Today, it's known for its authentic flavors, warm hospitality, and the sense of home it brings to everyone who walks through the door.",
  btnText: "find out more",
  image: AboutImg,
};

export const menuData = {
  title: "delicious flavour of autumn",
  subtitle: "view all menu for tasty meal today",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Chocolate Cake",
      price: "$7.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: "$9.49",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: "$8.50",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "$9.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "Meet Our Chef",
  sub1: " The staff at Little Lemon Mediterranean Restaurant are a team of warm, attentive professionals dedicated to providing an exceptional dining experience. With a keen eye for detail and a passion for Mediterranean flavors, they ensure every guest leaves with a smile on their face and a newfound love for their diverse and delectable offerings.",
  name: "Nikos Nomaste",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Little Lemon Mediterranean Restaurant is an absolute gem! The warm atmosphere, delightful service, and mouth-watering dishes make it the perfect place to satisfy your Mediterranean cravings. The falafel platter is a must-try!",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "Cookbook Author",
    },
    {
      message:
        "I had an exceptional dining experience at Little Lemon. The hummus was heavenly, and the shawarma was out of this world. I can't wait to bring my friends and family to this vibrant Mediterranean oasis.",
      image: Avatar2,
      name: "John Doe",
      occupation: "Editor at Eats Out Magazine",
    },
    {
      message:
        "A refreshing culinary adventure awaits at Little Lemon Mediterranean Restaurant. The colorful decor and attentive staff complement the deliciously diverse menu. Don't miss their signature baklava for a sweet finish to a fantastic meal.",
      image: Avatar3,
      name: "Henry A.",
      occupation: "Culinary Travel Blogger and TV Host",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "3784 patterson road, #8 new york, CA 69000",
    phone: "(201)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    // icons: [
    //   { href: "/", icon: <FaYoutube /> },
    //   { href: "/", icon: <FaFacebookF /> },
    //   { href: "/", icon: <FaInstagram /> },
    //   { href: "/", icon: <FaPinterestP /> },
    //   { href: "/", icon: <FaDiscord /> },
    // ],
  },
};
