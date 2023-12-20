"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function SignInWithEmail() {
    setLoading(true);
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    if (!signInResult?.ok) {
      setLoading(false);
      return toast({
        title: "Well this did not work...",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    }
    setLoading(false);
    return toast({
      title: "Check your email",
      description: "A magic link has been sent to you",
    });
  }
  return (
    <form action={SignInWithEmail}>
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="name@example.com"
        />
      </div>

      <Button type="submit" className="mt-4 w-full">
        {loading ? "Submitting..." : "Login with Email"}
      </Button>
    </form>
  );
}
