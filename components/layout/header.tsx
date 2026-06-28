"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useT, useLocale } from "@/components/i18n/locale-provider";
import { localizePath } from "@/lib/i18n/config";
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
import { localizedTool } from "@/lib/i18n/content";
import { getIcon } from "@/lib/icons";
import type { TFunction } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/config";

function MegaMenuList({
  category,
  t,
  locale,
}: {
  category: ToolCategoryId;
  t: TFunction;
  locale: Locale;
}) {
  const cat = getCategory(category);
  const HubIcon = getIcon(cat.icon);
  const tools = toolsInCategory(category);
  const lp = (href: string) => localizePath(href, locale);
  const catLabel = t(`categories.${category}` as const);
  return (
    <ul className="grid w-[min(92vw,560px)] gap-1 p-2 sm:grid-cols-2">
      <li className="sm:col-span-2">
        <NavigationMenuLink
          render={<Link href={lp(`/${cat.hub}`)} />}
          className="flex flex-col gap-1 rounded-md bg-accent/60 p-3 hover:bg-accent"
        >
          <span className="flex items-center gap-2 font-medium">
            <HubIcon className="size-4 text-brand" aria-hidden="true" />
            {catLabel}
          </span>
          <span className="text-xs text-muted-foreground">
            {localizedTool(cat.hub, locale).description}
          </span>
        </NavigationMenuLink>
      </li>
      {tools.map((tool) => {
        const Icon = getIcon(tool.icon);
        const lt = localizedTool(tool.slug, locale);
        return (
          <li key={tool.slug}>
            <NavigationMenuLink
              render={<Link href={lp(`/${tool.slug}`)} />}
              className="flex items-start gap-2.5"
            >
              <Icon
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <span className="flex flex-col">
                <span className="text-sm font-medium leading-tight">
                  {lt.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {lt.description}
                </span>
              </span>
            </NavigationMenuLink>
          </li>
        );
      })}
    </ul>
  );
}

function DesktopNav({ t, locale }: { t: TFunction; locale: Locale }) {
  const lp = (href: string) => localizePath(href, locale);
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("nav.image")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenuList category="image" t={t} locale={locale} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={lp("/pdf-compressor")} />}
            className="px-2.5 py-1.5 font-medium"
          >
            {t("nav.pdf")}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("nav.video")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenuList category="video" t={t} locale={locale} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={lp("/audio-compressor")} />}
            className="px-2.5 py-1.5 font-medium"
          >
            {t("nav.audio")}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={lp("/blog")} />}
            className="px-2.5 py-1.5 font-medium"
          >
            {t("nav.blog")}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({ t, locale }: { t: TFunction; locale: Locale }) {
  const [open, setOpen] = React.useState(false);
  const lp = (href: string) => localizePath(href, locale);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={t("nav.openMenu")}
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
        <nav className="px-4 pb-8" aria-label={t("nav.menu")}>
          <Accordion multiple className="w-full">
            {TOOL_CATEGORIES.map((cat) => {
              const tools = toolsInCategory(cat.id);
              const CatIcon = getIcon(cat.icon);
              const catLabel = t(`categories.${cat.id}` as const);
              return (
                <AccordionItem value={cat.id} key={cat.id}>
                  <AccordionTrigger className="text-base">
                    <span className="flex items-center gap-2">
                      <CatIcon className="size-4 text-brand" aria-hidden="true" />
                      {catLabel}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-1 pl-6">
                      <li>
                        <Link
                          href={lp(`/${cat.hub}`)}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-muted"
                        >
                          {t("nav.allIn", { category: catLabel.toLowerCase() })}
                        </Link>
                      </li>
                      {tools.map((tool) => (
                        <li key={tool.slug}>
                          <Link
                            href={lp(`/${tool.slug}`)}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            {localizedTool(tool.slug, locale).title}
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
            href={lp("/blog")}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md px-2 py-3 text-base font-medium hover:bg-muted"
          >
            {t("nav.blog")}
          </Link>
          <Link
            href={lp("/about")}
            onClick={() => setOpen(false)}
            className="block rounded-md px-2 py-3 text-base font-medium hover:bg-muted"
          >
            {t("nav.about")}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  const t = useT();
  const locale = useLocale();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Logo />
          <DesktopNav t={t} locale={locale} />
        </div>
        <div className="flex items-center gap-1">
          <LinkButton
            href={localizePath("/image-compressor", locale)}
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t("common.allTools")}
          </LinkButton>
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav t={t} locale={locale} />
        </div>
      </Container>
    </header>
  );
}
