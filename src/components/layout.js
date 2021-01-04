import React from "react";
import "./layout.scss"
import Navbar from "./navbar";

const wrapperStyle = {
  minheight: '100vh',
}
const footerStyle = {
  textAlign: 'center',
  margin: '24px'
}


export default function Layout({ children }) {
  console.log(children)
  return (
    <div>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <header>
          <Navbar />
        </header>
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
          {children}
        </div>
      </div>
      <footer style={footerStyle}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://mohammad-quanit.github.io/" target="_blank" rel="noreferrer">
          <span role="img" aria-label>💖️</span>
        </a>
      </footer>
    </div>
  );
}
