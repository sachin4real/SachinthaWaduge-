import { Contact } from "@/components/sections/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SachinthaWaduge"
 
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <Contact />
    </div>
  );
}