import "./App.css";
import PricingCard from "./PricingCard";
import Navbar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
const plansData = [
  {
    name: "Basic Plan",
    price: 10000,
    features: ["Access to recorded videos", "Weekly quizzes"],
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: 20000,
    features: [
      "Everything included in the Basic Plan",
      "Comprehensive downloadable e-notes & study guides",
      "Weekly tutor-marked assignments & personal feedback",
      "Access to subject-specific peer discussion groups",
      "Monthly computer-based mock exams",
    ],
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: 30000,
    features: [
      "Everything included in the Standard Plan",
      "2 hours of 1-on-1 private tutoring per week",
      "24/7 priority homework help via dedicated WhatsApp/Telegram",
      "Personalized academic roadmap & weakness tracking",
      "Monthly parent-tutor progress review meetings",
    ],
    highlighted: false,
  },
];

function App() {
  return;
}

export default App;
