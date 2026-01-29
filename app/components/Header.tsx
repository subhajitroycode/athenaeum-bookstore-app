import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-card border-b border-(--border-color) sticky top-0 z-50 backdrop-blur-md transition-all duration-400 ease-in">
      <div className="max-w-350 mx-auto py-6 px-12 flex items-center justify-between gap-8">
        <Link
          className="text-(--text-primary) font-playfair text-[1.8rem] font-bold tracking-wider relative transition-colors duration-300 ease-in after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--accent) after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
          href="/"
        >
          Athenaeum
        </Link>

        <nav className="flex gap-10 flex-1 justify-center">
          <Link className="nav-link" href="/">
            Books
          </Link>
          <Link className="nav-link" href="/genres">
            Genres
          </Link>
          <Link className="nav-link" href="/best-sellers">
            Bestsellers
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <button id="darkModeToggle" title="Toggle dark mode">
            <span id="themeIcon">☾</span>
          </button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
