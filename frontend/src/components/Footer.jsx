import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div class='row'>
          <div class='col-sm-8'>
            <p class='d-inline-block'>email @ support@saintlouisgrocery.com</p>
            <p class='d-inline-block ms-4'>Contact @ +1 (314) 760-5292</p>
          </div>
          <div class='col-sm-4'>
            <p>Saint Louis Grocery &copy; {currentYear}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
