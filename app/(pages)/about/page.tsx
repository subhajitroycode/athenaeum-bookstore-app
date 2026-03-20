import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is the page dedicated to the history of Athenaeum",
};

export default function page() {
  return (
    <section className="max-w-350 mx-auto text-center animate-fade-in-scale">
      <div className="py-12 px-8 lg:py-20 lg:px-12">
        <h1 className="font-playfair text-3xl sm:text-[2.8rem] md:text-[4rem] font-bold mb-6 tracking-wide leading-[1.2]">
          A Sanctuary for <br />
          Literary Minds
        </h1>
        <p className="text-lg sm:text-2xl text-(--text-secondary) font-light max-w-175 mx-auto leading-[1.8]">
          Athenaeum is more than a bookstore—it's a carefully curated haven for
          readers who believe books are gateways to new worlds.
        </p>
      </div>

      <div className="max-w-225 mx-auto py-12 px-8 md:py-16 md:px-12 text-left">
        <span className="font-sans text-sm uppercase tracking-widest text-(--accent) mb-6 font-semibold">
          Our Story
        </span>
        <h2 className="font-playfair text-3xl sm:text-[2.5rem] font-bold mt-6 mb-8 text-(--text-primary) leading-[1.3]">
          Founded on a Love for Literature
        </h2>
        <p className="text-xl text-(--text-secondary) leading-[1.9] font-light mb-6">
          Athenaeum was born from a simple belief: that the right book,
          discovered at the right moment, has the power to transform a life. In
          an age of endless digital noise, we set out to create something
          different—a space where every title is chosen with intention, every
          recommendation crafted with care.
        </p>
        <p className="text-xl text-(--text-secondary) leading-[1.9] font-light mb-6">
          Named after the ancient temple of Athena, where scholars gathered to
          share knowledge and wisdom, our collection reflects this timeless
          mission. From contemporary voices pushing boundaries to classic works
          that have shaped generations, we curate with one question in mind:
          Will this book matter to someone?
        </p>
        <p className="text-xl text-(--text-secondary) leading-[1.9] font-light mb-6">
          Today, Athenaeum serves readers across the globe, but our philosophy
          remains unchanged: thoughtful curation, genuine recommendations, and
          an unwavering commitment to connecting people with the stories they
          didn't know they needed.
        </p>
      </div>

      <div className="bg-(--bg-secondary) py-12 px-8 md:py-20 md:px-12">
        <div className="mb-16">
          <span className="font-sans text-sm uppercase tracking-widest text-(--accent) mb-6 font-semibold">
            What We Believe
          </span>
          <h2 className="font-playfair text-3xl sm:text-[2.5rem] font-bold mt-6 mb-8 text-(--text-primary) leading-[1.3]">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
          <div className="value-card">
            <span className="text-5xl">📚</span>
            <h3 className="font-playfair text-[1.6rem] font-bold mb-4 mt-6 text-(--text-primary)">
              Thoughtful Curation
            </h3>
            <p className="text-[1.05rem] text-(--text-secondary) leading-[1.8] font-light">
              Every book in our collection is hand-selected by readers who care
              deeply about literature. We don't chase algorithms—we chase
              meaningful stories.
            </p>
          </div>
          <div className="value-card">
            <span className="text-5xl">🌟</span>
            <h3 className="font-playfair text-[1.6rem] font-bold mb-4 mt-6 text-(--text-primary)">
              Reader-First Approach
            </h3>
            <p className="text-[1.05rem] text-(--text-secondary) leading-[1.8] font-light">
              Your reading journey matters to us. From personalized
              recommendations to carefully written descriptions, everything we
              do is designed with you in mind.
            </p>
          </div>
          <div className="value-card">
            <span className="text-5xl">♻️</span>
            <h3 className="font-playfair text-[1.6rem] font-bold mb-4 mt-6 text-(--text-primary)">
              Sustainable Practices
            </h3>
            <p className="text-[1.05rem] text-(--text-secondary) leading-[1.8] font-light">
              We partner with eco-conscious publishers and use sustainable
              packaging because we believe stories should enrich lives, not harm
              the planet.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-225 mx-auto py-12 px-8 md:pt-16 md:py-12 md:pb-20">
        <blockquote className="font-playfair text-2xl sm:text-[2rem] italic text-(--text-primary) leading-[1.6] mb-6 relative before:content-['“'] before:absolute before:-left-8 before:-top-4 before:text-[4rem] before:text-(--accent) before:opacity-30">
          To cultivate a community of thoughtful readers, one carefully chosen
          book at a time.
        </blockquote>
        <p className="font-sans text-[0.95rem] text-(--text-secondary) uppercase tracking-[0.08em]">
          Our Mission
        </p>
      </div>

      <div className="py-12 px-8 md:py-20 md:px-12 bg-(--bg-secondary)">
        <h2 className="font-playfair text-[2.5rem] font-bold mb-4 text-(--text-primary)">
          Ready to Discover Your Next Read?
        </h2>
        <p className="text-xl text-(--text-secondary) mb-10 font-light">
          Explore our curated collection and find the book that's been waiting
          for you.
        </p>
        <div className="flex justify-center">
          <Link
            href={"/"}
            className="font-sans bg-(--accent) text-white py-5 px-12 text-[0.95rem] tracking-[0.08em] uppercase transition-all duration-300 font-medium relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-90 before:from-transparent before:via-[rgba(255,255,255,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow)] hover:before:left-full"
          >
            Browse Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
