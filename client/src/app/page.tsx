"use client";

import { trpc } from "../../utils/trpc";

export default function Home() {
  const userQuery = trpc.getUser.useQuery("something");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{userQuery.data?.name}</p>
      <p>Something else</p>
    </main>
  );
}
