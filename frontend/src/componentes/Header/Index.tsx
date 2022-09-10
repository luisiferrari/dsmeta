import logo from '../../assets/img/logo.svg'

import './Styles.css'
function Header() {
  return (
      <header>
          <div className="dsmeta-logo-container">
              <img src={logo} alt="DSMeta"/>
                <h1>DSMeta</h1>
                <p>Desenvolvido por
              <a href="https://www.linkedin.com/in/luis-henrique-ferrari-7126b31b2/.com"> Luis H. Ferrari</a>
              </p>
          </div>
        </header>
  )
}

export default Header
