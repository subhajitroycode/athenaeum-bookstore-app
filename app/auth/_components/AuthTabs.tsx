"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const AuthTabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "signin";

  const switchTab = (tab: string) => {
    router.push(`/auth?tab=${tab}`, { scroll: false });
  };

  return (
    <>
      <div className="flex gap-2 mb-8 border-b border-b-(--border-color)">
        <button
          className={`font-sans py-3 px-6 cursor-pointer uppercase tracking-wider font-medium relative transition-all duration-300 ease-in border-b-2 ${activeTab === "signin" ? "text-(--accent) border-b-(--accent)" : "text-(--text-secondary) border-b-transparent hover:text-(--accent)"}`}
          onClick={() => switchTab("signin")}
        >
          Sign In
        </button>
        <button
          className={`font-sans py-3 px-6 cursor-pointer uppercase tracking-wider font-medium relative transition-all duration-300 ease-in border-b-2 ${activeTab === "signup" ? "text-(--accent) border-b-(--accent)" : "text-(--text-secondary) border-b-transparent hover:text-(--accent)"}`}
          onClick={() => switchTab("signup")}
        >
          Sign Up
        </button>
      </div>

      {activeTab === "signup" ? <SignUp /> : <SignIn />}
    </>
  );
};

export default AuthTabs;
