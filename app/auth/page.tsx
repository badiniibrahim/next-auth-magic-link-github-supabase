import SignInForm from "@/components/shared/SigInForm";
import SigninWithGithub from "@/components/shared/SignInWithGithub";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerSession } from "next-auth/next";
import React from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

const AuthRoot = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>
          <CardDescription>
            To access the private page you have to authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignInForm />

            <SigninWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthRoot;
