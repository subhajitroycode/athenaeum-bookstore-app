import AuthTabs from "@/app/auth/_components/AuthTabs";
import { Suspense } from "react";

function page() {
  return (
    <section className="flex flex-1 items-center justify-center py-12 px-8 animate-fade-in-scale">
      <div className="flex max-w-275 w-full bg-card border border-(--border-color) overflow-hidden shadow-[0_20px_60px_var(--shadow)]">
        {/* Sidebar Section */}
        <div
          className="flex flex-1 flex-col justify-center text-white relative overflow-hidden py-16 px-12 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-100 auth-sidebar"
          style={{
            background:
              "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
          }}
        >
          <div className="relative z-1">
            <h2 className="font-playfair text-[2.5rem] font-bold mb-6 leading-5">
              Welcome to Athenaeum
            </h2>
            <p className="text-[1.15rem] leading-[1.8] opacity-95 mb-8">
              Join our community of literary enthusiasts and unlock a world of
              carefully curated books, exclusive collections, and personalized
              recommendations.
            </p>
            <ul className="sidebar-features-list">
              <li>Access to exclusive rare editions</li>
              <li>Personalized reading recommendations</li>
              <li>Save your favorite books and lists</li>
              <li>Join our vibrant reader community</li>
              <li>Early access to new releases</li>
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-1 flex-col justify-center py-16 px-12">
          <div className="mb-10">
            <h1 className="font-playfair text-[2rem] font-semibold text-[--text-primary] mb-2">
              Get Started
            </h1>
            <p className="text-base text-[--text-secondary] font-light">
              Create an account or sign in to continue
            </p>
          </div>

          <Suspense
            fallback={
              <div className="flex items-center justify-center">Loading...</div>
            }
          >
            <AuthTabs />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default page;
