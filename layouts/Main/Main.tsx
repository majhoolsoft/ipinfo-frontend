import Head from "next/head";
import Footer from "../../components/Footer/MainFooter";
import MainNavbar from "../../components/Navbars/MainNavbar";
import type { LayoutProps } from "../types/pageWithLayouts";
const MainLayout: LayoutProps = ({ children }) => {
  return (
    <>
      {/* <style jsx>{`
        body {
          background-image: linear-gradient(#140330, #290661);
        }
      `}</style> */}
      <style jsx global>{`
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
        }
        body {
          background-image: linear-gradient(#140330, #290661);
          color: white;
        }
        code {
          opacity: 1;
          color: white;
        }
        .indigo-800 {
          color: #290661;
        }
        .indigo-900 {
          color: #140330;
        }
        .bg-indigo-800 {
          background-color: #290661;
        }
        .bg-indigo-900 {
          background-color: #140330;
        }

        .btn-purple {
          background: #e14eca;
          background-image: linear-gradient(
            to bottom left,
            #e14eca,
            #ba54f5,
            #e14eca
          );
          background-size: 210% 210%;
          background-position: 100% 0;
          background-color: #e14eca;
          transition: all 0.15s ease;
          box-shadow: none;
          color: #fff;
          border: none;
          position: relative;
          overflow: hidden;
          margin: 4px 1px;
          border-radius: 0.4285rem rem;
          color: black;
        }
        .btn-purple:hover,
        .form-control:focus {
          border-color: #d63384;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(214, 51, 132, 0.6);
          /* color: white !important; */
          /* background-color: transparent; */

          background-color: white;
        }
        .btn-purple:hover {
          color: white !important;
        }
        .btn-purple--hover:hover {
          border-color: #d63384 !important;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(214, 51, 132, 0.6);
        }
      `}</style>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Index</title>
      </Head>
      <MainNavbar></MainNavbar>
      {children}
      <Footer></Footer>
    </>
  );
};
export default MainLayout;
