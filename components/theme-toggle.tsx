"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const toggle = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
    >
      {/* Render both and swap with CSS to avoid hydration flash */}
      <Sun
        className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        aria-hidden="true"
      />
      <Moon
        className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
      <span className="sr-only">
        {mounted && resolvedTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"}
      </span>
    </Button>
  );
}
