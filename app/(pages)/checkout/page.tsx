import Image from "next/image";
import Link from "next/link";

export default function page() {
  console.log(
    "%c🎉 Congratulations! 🎉",
    "font-size: 20px; font-weight: bold; color: #8b4513;",
  );
  console.log(
    "%cYou found the secret checkout page!",
    "font-size: 14px; color: #5a5248;",
  );
  console.log(
    "%cBut seriously, this is just a demo. No payments are processed here.",
    "font-size: 12px; color: #5a5248;",
  );
  console.log(
    "%cIf you're checking the console, you're exactly the kind of person I want to work with.",
    "font-size: 12px; font-style: italic; color: #8b4513;",
  );

  return (
    <section className="flex items-center justify-center flex-1 py-12 px-6 md:py-16 md:px-8 animate-fade-in-scale text-center">
      <div className="text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.webp"
              alt="💸"
              fill
              sizes="(max-width: 768px) 64px, 96px"
            />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.webp"
              alt="🤔"
              fill
              sizes="(max-width: 768px) 64px, 96px"
            />
          </div>
        </div>

        <div className="max-w-200 mx-auto">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold text-(--text-primary) mb-6 leading-[1.2]">
            Wait... You actually want to pay?
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-(--accent) mb-8 italic">
            For imaginary books? Really?
          </p>
          <p className="text-lg md:text-xl text-(--text-secondary) mb-4 leading-[1.8] font-light">
            Listen, I appreciate the enthusiasm, but these books are about as
            real as my chances of reading all the books I've bought this year.
          </p>
          <p className="text-lg md:text-xl text-(--text-secondary) mb-4 leading-[1.8] font-light">
            You were <em>this</em> close to purchasing a collection of pixels
            arranged to look like books. The only thing you'd receive is a very
            confused look from your bank.
          </p>
          <p className="text-lg md:text-[1.3rem] text-(--text-primary) mt-8 leading-[1.8] font-medium">
            This is a demo project, friend. No books, no shipping, no
            disappointment when the package doesn't arrive! 🎉
          </p>
        </div>

        <div className="max-w-275 my-12 p-6 md:p-10 bg-(--bg-secondary) border border-(--border-color)">
          <h2 className="font-playfair text-3xl font-semibold mb-6 text-(--text-primary)">
            But Hey, Since You're Here...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-left">
            <div className="flex items-start gap-4">
              <span className="shrink-0 text-[2rem]">📖</span>
              <p className="text-[1.05rem] text-(--text-secondary) leading-[1.6]">
                This entire bookstore was built to showcase web development
                skills.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="shrink-0 text-[2rem]">🎨</span>
              <p className="text-[1.05rem] text-(--text-secondary) leading-[1.6]">
                All the aesthetic choices? Totally intentional (mostly).
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="shrink-0 text-[2rem]">💻</span>
              <p className="text-[1.05rem] text-(--text-secondary) leading-[1.6]">
                The real product is the code, not the fake books.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="shrink-0 text-[2rem]">🤓</span>
              <p className="text-[1.05rem] text-(--text-secondary) leading-[1.6]">
                If you're reading this, then my friend, you have excellent
                attention to detail.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-150 mt-12 mx-auto p-6 md:p-8 bg-card border-l-4 border-(--accent) text-left">
          <h4 className="font-sans text-sm uppercase tracking-widest text-(--accent) mb-4 font-semibold">
            Developer's Note
          </h4>
          <p className="text-[1.05rem] text-(--text-secondary) leading-[1.8]">
            If you're a recruiter, potential client, or just someone who
            stumbled here: Yes, this checkout button does work (in a way). Yes,
            I think attention to detail matters, even on pages users might never
            see. And yes, I'm available for hire if you need someone who cares
            about the little things. 😉
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 md:gap-6 mt-12">
          <Link
            href="/"
            className="w-full md:w-auto font-sans bg-(--accent) text-white py-5 px-12 text-[0.95rem] tracking-[0.08em] uppercase transition-all duration-300 font-medium relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-90 before:from-transparent before:via-[rgba(255,255,255,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow)] hover:before:left-full"
          >
            Back to Browsing Fake Books
          </Link>
          <Link
            href="https://github.com/subhajitroycode/athenaeum-bookstore-app"
            target="_blank"
            className="w-full md:w-auto font-sans border-[1.5px] border-(--border-color) text-(--text-primary) py-5 px-12 text-[0.95rem] tracking-[0.08em] uppercase transition-all duration-300 font-medium hover:border-(--accent) hover:text-(--accent) hover:-translate-y-0.5"
          >
            Learn More About This Project
          </Link>
        </div>
      </div>
    </section>
  );
}
