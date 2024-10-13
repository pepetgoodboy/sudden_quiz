import Footer from "../UI/Molecules/Footer";
import Navbar from "../UI/Molecules/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
