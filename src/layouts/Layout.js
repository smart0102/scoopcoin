import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../wrappers/header";
import Footer from "../wrappers/footer";

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <div
        className="          
          flex flex-col
          min-h-screen
          bg-white
          dark:bg-gray-950
          text-black          
        "
        data-new-gr-c-s-check-loaded="14.1028.0"
        data-gr-ext-installed=""
      >
        <div className="flex flex-col min-h-screen">      
          <Header/>
            <main className="flex flex-col flex-1">
              {children}
            </main>
          <Footer/>
        </div>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
