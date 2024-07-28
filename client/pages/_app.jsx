import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </>
  );
}
