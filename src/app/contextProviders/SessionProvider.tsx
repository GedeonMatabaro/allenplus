
"use client";


import { UserData } from "@/lib/types";
import type { Session } from "@prisma/client";
import React, { createContext, useContext } from "react";


interface SessionContext {
  user: UserData|null;
  session: Session|null
}

const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContext }>) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}