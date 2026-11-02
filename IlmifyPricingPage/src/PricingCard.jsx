export default function PricingCard({ name, price, features, highlighted }) {
  return (
    <article
      className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 transform 
        ${
          highlighted
            ? "bg-brand-primary border-brand-primary text-white lg:scale-105 shadow-xl dark:bg-brand-primary/90"
            : "bg-white border-gray-200 text-gray-900 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
        }
      `}
    >
      {/* 1. Card Header (Name & Price) */}
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold tracking-tight">
            {price}
          </span>
          <span
            className={`text-sm ${highlighted ? "text-teal-100" : "text-gray-500 dark:text-gray-400"}`}
          >
            /month
          </span>
        </div>
      </div>

      {/* 2. Features Dynamic List */}
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm">
            {/* Custom Checkmark Icon */}
            <svg
              className={`w-5 h-5 flex-shrink-0 ${highlighted ? "text-amber-400" : "text-brand-secondary"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 3. Call-To-Action Button with Transitions & Focus styles */}
      <button
        className={`w-full py-3 px-4 font-semibold text-sm rounded-xl cursor-pointer
          transition-all duration-200 ease-in-out
          focus:outline-hidden focus:ring-2 focus:ring-offset-2 
          ${
            highlighted
              ? "bg-white text-brand-primary hover:bg-teal-50 focus:ring-white focus:ring-offset-brand-primary"
              : "bg-brand-primary text-white hover:bg-brand-secondary focus:ring-brand-primary focus:ring-offset-white dark:focus:ring-offset-gray-900"
          }
        `}
      >
        Get Started
      </button>
    </article>
  );
}
