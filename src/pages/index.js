import * as React from "react";

// markup
const IndexPage = () => {
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
};

export default IndexPage;
