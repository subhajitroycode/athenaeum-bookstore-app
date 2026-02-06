import { signInWithSocial, signUpWithEmail } from "@/app/actions/auth";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useActionState, useState } from "react";

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState({
    password: true,
    confirmPassword: true,
  });

  const [state, formAction, isPending] = useActionState(signUpWithEmail, {
    success: true,
    error: undefined,
    fields: {
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  return (
    <div className="animate-slide-in-left">
      <form className="flex flex-col gap-6" action={formAction}>
        {state.error && (
          <div className="bg-(--bg-error) text-(--text-error) border border-(--border-error) px-4 py-3">
            {state.error}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="font-sans text-[0.85rem] text-(--text-primary) uppercase tracking-wider font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              defaultValue={state.fields?.firstName}
              className="py-[0.9rem] px-[1.2rem] border-[1.5px] border-(--border-color) bg-(--bg-primary) text-(--text-primary) outline-none transition-all duration-300 ease-in focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(139,69,19,0.1)] placeholder:text-(--text-secondary) placeholder:opacity-50"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="font-sans text-[0.85rem] text-(--text-primary) uppercase tracking-wider font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              defaultValue={state.fields?.lastName}
              className="py-[0.9rem] px-[1.2rem] border-[1.5px] border-(--border-color) bg-(--bg-primary) text-(--text-primary) outline-none transition-all duration-300 ease-in focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(139,69,19,0.1)] placeholder:text-(--text-secondary) placeholder:opacity-50"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-sans text-[0.85rem] text-(--text-primary) uppercase tracking-wider font-medium"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            defaultValue={state.fields?.email}
            className="py-[0.9rem] px-[1.2rem] border-[1.5px] border-(--border-color) bg-(--bg-primary) text-(--text-primary) outline-none transition-all duration-300 ease-in focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(139,69,19,0.1)] placeholder:text-(--text-secondary) placeholder:opacity-50"
            required
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <label
            htmlFor="password"
            className="font-sans text-[0.85rem] text-(--text-primary) uppercase tracking-wider font-medium"
          >
            Password
          </label>
          <input
            type={hidePassword.password ? "password" : "text"}
            id="password"
            name="password"
            placeholder="Create a strong password"
            className="py-[0.9rem] pl-[1.2rem] pr-12 border-[1.5px] border-(--border-color) bg-(--bg-primary) text-(--text-primary) outline-none transition-all duration-300 ease-in focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(139,69,19,0.1)] placeholder:text-(--text-secondary) placeholder:opacity-50"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-12 cursor-pointer text-(--text-secondary) hover:text-(--text-primary)"
            onClick={() =>
              setHidePassword((prev) => ({ ...prev, password: !prev.password }))
            }
          >
            {hidePassword.password ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        <div className="flex flex-col gap-2 relative">
          <label
            htmlFor="confirmPassword"
            className="font-sans text-[0.85rem] text-(--text-primary) uppercase tracking-wider font-medium"
          >
            Confirm Password
          </label>
          <input
            type={hidePassword.confirmPassword ? "password" : "text"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="py-[0.9rem] pl-[1.2rem] pr-12 border-[1.5px] border-(--border-color) bg-(--bg-primary) text-(--text-primary) outline-none transition-all duration-300 ease-in focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(139,69,19,0.1)] placeholder:text-(--text-secondary) placeholder:opacity-50"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-12 cursor-pointer text-(--text-secondary) hover:text-(--text-primary)"
            onClick={() =>
              setHidePassword((prev) => ({
                ...prev,
                confirmPassword: !prev.confirmPassword,
              }))
            }
          >
            {hidePassword.confirmPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="font-sans bg-(--accent) text-white py-4 px-8 cursor-pointer text-[0.95rem] uppercase tracking-widest font-medium mt-2 relative overflow-hidden transition-all duration-300 ease-in before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-[left] before:duration-500 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow)] hover:before:left-full"
        >
          {isPending ? "Creating Account..." : "Create Account"}
        </button>

        <div className="flex items-center gap-4 my-6 mx-0 before:content-[''] before:flex-1 before:h-px before:bg-(--border-color) after:content-[''] after:flex-1 after:h-px after:bg-(--border-color)">
          <span className="font-sans text-[0.85rem] text-(--text-secondary) uppercase tracking-wider">
            Or sign up with
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="font-sans border-[1.5px] border-(--border-color) text-(--text-primary) py-3 px-6 cursor-pointer text-[0.9rem] transition-all duration-300 flex items-center justify-center gap-3 hover:border-(--accent) hover:bg-(--bg-primary) hover:-translate-y-0.5"
            onClick={() => signInWithSocial("google")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
              <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z" />
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
            </svg>
            Google
          </button>
          <button
            type="button"
            className="font-sans border-[1.5px] border-(--border-color) text-(--text-primary) py-3 px-6 cursor-pointer text-[0.9rem] transition-all duration-300 flex items-center justify-center gap-3 hover:border-(--accent) hover:bg-(--bg-primary) hover:-translate-y-0.5"
            onClick={() => signInWithSocial("github")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
