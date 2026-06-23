import "./globals.css";

export const metadata = {
  title: "Crypto Blue Rocks | Smart Contracts, QA, and dApp Frontends",
  description:
    "Crypto Blue Rocks helps Web3 founders ship smart contracts, test vibe-coded programs, and build dApp frontends for Ethereum and Solana.",
  openGraph: {
    title: "Crypto Blue Rocks",
    description:
      "Smart contract development, testing for vibe-coded programs, and dApp frontend delivery for Ethereum and Solana teams.",
    siteName: "Crypto Blue Rocks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Blue Rocks",
    description:
      "Smart contract development, testing for vibe-coded programs, and dApp frontend delivery for Ethereum and Solana teams.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
