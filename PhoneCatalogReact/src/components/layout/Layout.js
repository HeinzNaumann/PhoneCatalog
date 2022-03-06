import React from "react";
import Header from "./Header";
import "./Layout.css";
function Layout({ children, title, ...props }) {
  return (
    <div className='layout'>
      <Header className='layout-header bordered' {...props} />
      <main className='layout-main bordered'>
        <h2 className='layout-title bordered'>{title}</h2>
        <section className='layout-content'>{children}</section>
      </main>
      <footer className='layout-footer bordered'>© DCSL GuideSmiths - Code Challenge</footer>
    </div>
  );
}
export default Layout;
