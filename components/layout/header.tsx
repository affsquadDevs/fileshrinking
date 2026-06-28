"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  TOOL_CATEGORIES,
  toolsInCategory,
  getCategory,
  type ToolCategoryId,
} from "@/lib/site-config";
import { getIcon } from "@/lib/icons";

function MegaMenuList({ category }: { category: ToolCategoryId }) {
  const cat = getCategory(category);
  const HubIcon = getIcon(cat.icon);
  const tools = toolsInCategory(category);
  return (
    <ul className="grid w-[min(92vw,560px)] gap-1 p-2 sm:grid-cols-2">
      <li className="sm:col-span-2">
        <NavigationMenuLink
          render={<Link href={`/${cat.hub}`} />}
          className="flex flex-col gap-1 rounded-md bg-accent/60 p-3 hover:bg-accent"
        >
          <span className="flex items-center gap-2 font-medium">
            <HubIcon className="size-4 text-brand" aria-hidden="true" />
            {cat.label}
          </span>
          <span className="text-xs text-muted-foreground">{cat.blurb}</span>
        </NavigationMenuLink>
      </li>
      {tools.map((tool) => {
        const Icon = getIcon(tool.icon);
        return (
          <li key={tool.slug}>
            <NavigationMenuLink
              render={<Link href={`/${tool.slug}`} />}
              className="flex items-start gap-2.5"
            >
              <Icon
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <span className="flex flex-col">
                <span className="text-sm font-medium leading-tight">
                  {tool.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {tool.description}
                </span>
              </span>
            </NavigationMenuLink>
          </li>
        );
      })}
    </ul>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Image</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenuList category="image" />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/pdf-compressor" />}
            className="px-2.5 py-1.5 font-medium"
          >
            PDF
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Video</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenuList category="video" />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/audio-compressor" />}
            className="px-2.5 py-1.5 font-medium"
          >
            Audio
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/blog" />}
            className="px-2.5 py-1.5 font-medium"
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "lg:hidden",
        )}
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="px-4 pb-8" aria-label="Mobile">
          <Accordion multiple className="w-full">
            {TOOL_CATEGORIES.map((cat) => {
              const tools = toolsInCategory(cat.id);
              const CatIcon = getIcon(cat.icon);
              return (
                <AccordionItem value={cat.id} key={cat.id}>
                  <AccordionTrigger className="text-base">
                    <span className="flex items-center gap-2">
                      <CatIcon className="size-4 text-brand" aria-hidden="true" />
                      {cat.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-1 pl-6">
                      <li>
                        <Link
                          href={`/${cat.hub}`}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-muted"
                        >
                          All {cat.label.toLowerCase()}
                        </Link>
                      </li>
                      {tools.map((tool) => (
                        <li key={tool.slug}>
                          <Link
                            href={`/${tool.slug}`}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            {tool.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md px-2 py-3 text-base font-medium hover:bg-muted"
          >
            Blog
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block rounded-md px-2 py-3 text-base font-medium hover:bg-muted"
          >
            About
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Logo />
          <DesktopNav />
        </div>
        <div className="flex items-center gap-1">
          <LinkButton
            href="/image-compressor"
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            All tools
          </LinkButton>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
