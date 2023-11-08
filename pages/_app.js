import "@/styles/globals.scss";
import "../components/Sidenav/Sidenav.scss";
import "../components/Home/Home.scss";
import "../components/About/About.scss";
import "../components/Portfolio/Portfolio.scss";
import "../components/Contact/Contact.scss";
import "../components/Sidenav2/Sidenav2.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
