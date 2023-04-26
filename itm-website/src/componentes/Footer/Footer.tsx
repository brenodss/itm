import Contact from '../Header/ContactMe/Contact';
import './style.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida nisi non mi aliquam malesuada. Aenean vel aliquet neque, ut tincidunt ipsum.</p>
        </div>
        <div className="footer-section">
          <h3 className='title-colors'>Links Úteis</h3>
          <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <Contact></Contact>
          <ul>
            <li><a href="#">Endereço: Rua X, nº 123</a></li>
            <li><a href="#">Telefone: (11) 1234-5678</a></li>
            <li><a href="#">Email: contato@empresa.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Todos os direitos reservados © {new Date().getFullYear()} ITM Informática</p>
      </div>
    </footer>
  );
}

export default Footer;
