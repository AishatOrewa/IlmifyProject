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
  return (
    <>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Hero />

        <main
          id="pricing-grid"
          className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full"
        >
          {/* Responsive layout grid (1 column mobile, 3 columns desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-md mx-auto lg:max-w-none">
            {/* Looping to generate data from fixed data to ensure reusability */}
            {plansData.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
