import Link from "next/link";
import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 px-6 py-12">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Get started tracking your job search today.
          </p>
        </div>

        <SignUpForm />

        <div className="mt-6 text-center text-xs text-slate-400 border-t border-slate-800 pt-5">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-violet-400 hover:text-violet-300 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}