import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "@/components/shared/LogoutButton";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="p-24">
      <h1>Hello from the index page, this is a public route</h1>
      {session ? (
        <>
          <h1>You are logged in</h1>
          <LogoutButton />
        </>
      ) : (
        <h1>Please log in to see something</h1>
      )}
    </main>
  );
}
