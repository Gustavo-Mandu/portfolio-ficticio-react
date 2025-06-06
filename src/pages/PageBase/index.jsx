import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import { Outlet } from 'react-router-dom';

function PageBase() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default PageBase;