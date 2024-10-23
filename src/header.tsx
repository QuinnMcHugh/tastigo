export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center sm:mb-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-md mr-2"></div>
          <h1 className="text-xl sm:text-2xl font-bold">Tastigo</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0 sm:mr-4">/seattle</h2>
        </div>
      </div>
    </header>
  );
};
