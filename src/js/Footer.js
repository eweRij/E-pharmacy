import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <section>
          <div className="pr">
            <h2>O nas</h2>
            <p>
              Etiam feugiat condimentum Aliquam imperdiet suscipit odio Sed
              porttitor cras in erat nec Felis varius pellentesque potenti
              Nullam scelerisque blandit leo
            </p>
          </div>
          <div className="footerVisibility pr">
            <h2>Aktualności</h2>
            <p>
              Etiam feugiat condimentum Aliquam imperdiet suscipit odio Sed
              porttitor cras in erat nec Felis varius pellentesque potenti
              Nullam scelerisque blandit leo
            </p>
          </div>
        </section>
        <section>
          <div className="pr">
            <h2>Regulamin</h2>
            <p>
              Etiam feugiat condimentum Aliquam imperdiet suscipit odio Sed
              porttitor cras in erat nec Felis varius pellentesque potenti
              Nullam scelerisque blandit leo
            </p>
          </div>
          <div className="footerVisibility">
            <h2 style={{ color: "#012c52" }}>Kontakt</h2>
            <div className="footer__media">
              <a href="https://www.facebook.com/">
                {" "}
                <i className="fab fa-facebook"></i>
              </a>

              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p>ul. Mikołajska 4, 31-027, Kraków</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
