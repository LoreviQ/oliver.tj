import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { glob } from "glob";
import { readFileSync } from "fs";
import matter from "gray-matter";
import { json } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export async function loader() {
  // Load blog posts
  const blogFiles = await glob("app/content/blog/*.md");
  const blogPosts = blogFiles.map(file => {
    const content = readFileSync(file, "utf-8");
    const { data, content: markdown } = matter(content);
    return {
      ...data,
      content: markdown,
      filename: file.split("/").pop()
    };
  });

  // Load projects
  const projectFiles = await glob("app/content/project/*.json");
  const projects = projectFiles.map(file => {
    const content = readFileSync(file, "utf-8");
    return JSON.parse(content);
  });

  return json({ blogPosts, projects });
}
