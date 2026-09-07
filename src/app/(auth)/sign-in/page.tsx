import Link from "next/link";
import { SignInForm } from "@/components/auth/sign-in-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 px-6 py-12">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Sign in to Trackify
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Welcome back! Please enter your details.
          </p>
        </div>

        <SignInForm />

        <div className="mt-6 text-center text-xs text-slate-400 border-t border-slate-800 pt-5">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-violet-400 hover:text-violet-300 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
