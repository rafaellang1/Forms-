import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" width="200" />
      </Link>
    </Container>
  );
}
