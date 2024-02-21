import { Inter,Montserrat} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Header from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Leepo",
  description: "Leepo",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <div className={inter.className}>
        <Header />
        {children}
      </div>
    </ClerkProvider>
  );
}
