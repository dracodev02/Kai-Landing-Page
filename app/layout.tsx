import { ReactLenis } from "@/utils/lenis";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/views/header";
import Decor from "@/views/decor";
import Footer from "@/views/footer";
import kaiImage from "@/assets/kai-image.svg";

export const metadata: Metadata = {
  title: "Kai Engine",
  description:
    "An open-source framework that provides a comprehensive toolkit to simplified building onchain games and autonomous worlds.",
  icons: [kaiImage.src],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis
        root
        options={{
          duration: 1.8, // Tăng giá trị này để làm chậm cuộn (mặc định thường là 1.2)
        }}
      >
        <body className={`antialiased`}>
          <Decor />
          <Header />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
