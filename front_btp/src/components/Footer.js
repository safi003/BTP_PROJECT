import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Nous pouvons aider à changer le Futur</h2>
      </div>
      <div className="footer-right">
        <div className="brand">Vision Opa Sarl</div>
        <div className="contact">
          <p>📞 +224 628 20 6079 / 662 40 35 11</p>
          <p>📍 Simbaya Gare, Conakry, Guinée</p>
          <p>✉ opabtp3@gmail.com</p>
        </div>
        <div className="social">
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="copyright">
        © 2025 OPA SARL - Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
