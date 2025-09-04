import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/store/provider";
import {NextIntlClientProvider} from 'next-intl';
import { cookies } from "next/headers";
import { Languages, Theme } from "@/interfaces";

export const metadata: Metadata = {
  title: "Portfolio Florencia Oldani - FullStack Developer",
  description: "Stack: React, Next js, Redux, React Native, Typescript, Javascript, Node js, Express js, Docker, GraphQl, ApiRest"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const store = await cookies();
  const locale = store.get("locale")?.value || Languages.SPANISH;

  return (
    <html lang={locale} className={Theme.DARK}>
      <body className="bg-[var(--color-bg-light)] text-text-light dark:bg-[var(--color-bg-dark)] transition-colors duration-500 overflow-x-hidden">
        <StoreProvider>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
