export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-950 dark:border-gray-900 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Branding copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Ilmify Tutorial Centre. by Aishat{" "}
          <Orewa></Orewa> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
