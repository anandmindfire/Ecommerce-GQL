import { type ReactNode } from "react";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";

export const metadata = {
  title: "Ecom",
  description: "e-commerce",
};

export default function RootLayout(props: {
  children: ReactNode;
  params: { channel: string };
}) {
  return (
    <>
      <Header channel={props.params.channel} />
      <div className="flex min-h-[calc(100dvh-64px)] flex-col">
        <main className="flex-1 bg-neutral-100">{props.children}</main>
        <Footer channel={props.params.channel} />
      </div>
    </>
  );
}
