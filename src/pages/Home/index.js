import { Link } from 'react-router-dom';

import { Container, Header, Card } from './styles';

// import logo from '../../assets/images/logo.svg';

import farm from '../../assets/images/farm.png';
import user from '../../assets/images/user.png';
import newProduct from '../../assets/images/newProduct.png';
import endHarvest from '../../assets/images/endHarvest.png';
import report from '../../assets/images/report.png';

// import logo from '../../assets/images/logo.svg';

export default function Home() {
  return (

    <Container>
      {/* logo esta oculta por conta de alinhamento de divs */}
      {/* <img src={logo} alt="logo" width="450" /> */}

      <Header>

        <Card>
          <div className="head">
            <Link to="/user">
              <img src={user} alt="icon-user" width="50" />
              <strong>Cadastro de Usuario</strong>
            </Link>
          </div>
        </Card>

        <Card>
          <div className="head">
            <Link to="/product">
              <img src={newProduct} alt="icon-user" width="50" />
              <strong>Cadastro de Produto</strong>
            </Link>
          </div>
        </Card>

        <Card>
          <div className="head">
            <Link to="/farm">
              <img src={farm} alt="icon-user" width="50" />
              <strong>Cadastro de Fazendas</strong>
            </Link>
          </div>
        </Card>

        <Card>
          <div className="head">
            <Link to="/harvest">
              <img src={endHarvest} alt="icon-user" width="50" />
              <strong>Encerrar Safra</strong>
            </Link>
          </div>
        </Card>

        <Card>
          <div className="head">
            <Link to="/report">
              <img src={report} alt="icon-user" width="50" />
              <strong>Relatórios</strong>
            </Link>
          </div>
        </Card>
      </Header>

    </Container>
  );
}