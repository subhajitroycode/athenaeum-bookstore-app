import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-(--bg-secondary) border-t border-t-(--border-color) mt-16 transition-all duration-400">
      <div className="max-w-350 mx-auto pt-12 px-8 pb-6 lg:pt-16 lg:px-12 lg:pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div>
          <h4 className="font-playfair text-[1.6rem] font-bold mb-4 text-(--text-primary)">
            Athenaeum
          </h4>
          <p className="text-(--text-secondary) leading-[1.8] font-light">
            A curated sanctuary for literary enthusiasts. Discover rare
            editions, contemporary masterpieces, and timeless classics in our
            carefully selected collection.
          </p>
        </div>

        <div>
          <h5 className="font-sans text-sm uppercase tracking-widest mb-5 text-(--text-primary) font-semibold">
            Explore
          </h5>
          <div className="flex flex-col gap-3.5">
            <Link
              href={"/footer/new-arrivals"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              New Arrivals
            </Link>
            <Link
              href={"/footer/bestsellers"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Bestsellers
            </Link>
            <Link
              href={"/footer/coming-soon"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Coming Soon
            </Link>
            <Link
              href={"/footer/special-offers"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Special Offers
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-sm uppercase tracking-widest mb-5 text-(--text-primary) font-semibold">
            Support
          </h4>
          <div className="flex flex-col gap-3.5">
            <Link
              href={"/footer/help-center"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Help Center
            </Link>
            <Link
              href={"/footer/shipping-info"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Shipping Info
            </Link>
            <Link
              href={"/footer/returns"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Returns
            </Link>
            <Link
              href={"/footer/contact-us"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-sm uppercase tracking-widest mb-5 text-(--text-primary) font-semibold">
            Company
          </h4>
          <div className="flex flex-col gap-3.5">
            <Link
              href={"/about"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              About Us
            </Link>
            <Link
              href={"/footer/our-story"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Our Story
            </Link>
            <Link
              href={"/footer/careers"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Careers
            </Link>
            <Link
              href={"/footer/press"}
              className="text-(--text-secondary) text-[0.95rem] transition-all duration-300 inline-block hover:text-(--accent) hover:translate-x-1"
            >
              Press
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto py-8 px-12 border-t border-t-(--border-color) flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center font-sans text-[0.85rem] text-(--text-secondary)">
        <p>&copy; {new Date().getFullYear()} Athenaeum. All rights reserved.</p>
        <div className="flex gap-6">
          <Link
            className="text-(--text-secondary) transition-all duration-300 hover:text-(--accent) hover:-translate-y-0.75"
            href={"https://x.com/subhajitroycode"}
            target="_blank"
          >
            X
          </Link>
          <Link
            className="text-(--text-secondary) transition-all duration-300 hover:text-(--accent) hover:-translate-y-0.75"
            href={"https://instagram.com/subhajitroycode"}
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="text-(--text-secondary) transition-all duration-300 hover:text-(--accent) hover:-translate-y-0.75"
            href={"https://linkedin.com/in/subhajitroycode"}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="text-(--text-secondary) transition-all duration-300 hover:text-(--accent) hover:-translate-y-0.75"
            href={"https://github.com/subhajitroycode"}
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
