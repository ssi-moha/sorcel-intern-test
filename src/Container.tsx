import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "1rem",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
