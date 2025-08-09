import './globals.css';
import Footer from './components/footer';

export const metadata = {
  title: "Car Rent Website",
  description: "Car Rental System built with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
            {children}
          <Footer/>
      </body>
    </html>
  );
}
