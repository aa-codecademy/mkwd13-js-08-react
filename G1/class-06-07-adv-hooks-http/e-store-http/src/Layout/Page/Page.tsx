import type { ReactNode } from "react";
import "./Page.css";

interface PageProps {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: PageProps) {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>{title}</h2>
      </div>
      {/* Children is a in-built react prop that contains all the content between the openign and closing tags of a JSX element */}
      <div className="page-content">{children}</div>
    </section>
  );
}
