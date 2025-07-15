import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Silanyas',
  description: 'Timeless silver jewelry crafted for elegance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen px-4 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


