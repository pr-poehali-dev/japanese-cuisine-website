
const Footer = () => {
  return (
    <footer className="bg-primary py-6 text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span>🍱</span> Японская кухня
            </h3>
            <p className="text-sm mt-1">Исследуйте аутентичные вкусы Японии</p>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
