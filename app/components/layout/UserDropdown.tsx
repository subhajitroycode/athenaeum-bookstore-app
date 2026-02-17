import { authClient } from "@/lib/auth-client";
import { LogOut, UserCircle2, UserRoundPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { signOutApp } from "../../actions/auth";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSignout = () => {
    setIsSigningOut(true);
    signOutApp();
  };

  const handleNavigation = () => {
    setIsOpen(false);

    const userRole = (session?.user as any).role;

    if (userRole === "admin") {
      router.push("/admin");
    } else {
      router.push("/user");
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-(--text-secondary) cursor-pointer text-lg p-2 transition-all duration-300 relative hover:text-(--accent) hover:-translate-y-0.5"
        aria-label="User menu"
      >
        <UserCircle2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-card border-[1.5px] border-(--border-color) shadow-[0_8px_24px_var(--shadow)] animate-slide-in-top z-50">
          <div className="p-2">
            <button
              className="w-full font-sans flex items-center gap-3 px-4 py-3 text-sm text-(--text-primary) transition-all duration-200 hover:bg-(--bg-secondary) hover:text-(--accent) cursor-pointer"
              onClick={handleNavigation}
            >
              <UserRoundPen className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button
              onClick={handleSignout}
              disabled={isSigningOut}
              className={`w-full font-sans flex items-center gap-3 px-4 py-3 text-sm text-(--text-primary) transition-all duration-200 hover:bg-(--bg-error) hover:text-(--text-error) cursor-pointer ${isSigningOut ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <LogOut className="w-4 h-4" />
              {isSigningOut ? (
                <span>Signing Out...</span>
              ) : (
                <span>Sign Out</span>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
