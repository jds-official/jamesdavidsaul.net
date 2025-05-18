// components/Headings.tsx
import React from 'react';

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}
