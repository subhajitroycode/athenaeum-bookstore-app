import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

type FormState = {
  success: boolean;
  error?: string;
  fields?: {
    email: string;
    firstName?: string;
    lastName?: string;
  };
};

export const signInWithEmail = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message || "Failed to sign in",
        fields: {
          email,
        },
      };
    }
  } catch (err) {
    console.error("Sign in error:", err);
    return {
      success: false,
      error: "An unexpected error occurred",
      fields: {
        email,
      },
    };
  }

  redirect("/");
};

export const signUpWithEmail = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return {
      success: false,
      error: "Passwords do not match",
      fields: {
        email,
        firstName,
        lastName,
      },
    };
  }

  try {
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name: `${firstName} ${lastName}`,
    });

    if (error) {
      return {
        success: false,
        error: error.message || "Failed to create account",
        fields: {
          email,
          firstName,
          lastName,
        },
      };
    }
  } catch (err) {
    console.error("Sign in error:", err);
    return {
      success: false,
      error: "An unexpected error occurred",
      fields: {
        email,
        firstName,
        lastName,
      },
    };
  }

  redirect("/");
};

export const signInWithSocial = async (provider: "google" | "github") => {
  await authClient.signIn.social({
    provider,
    callbackURL: "/",
  });
};

export const signOutApp = async () => {
  await authClient.signOut();
};
