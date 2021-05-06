import React from "react";
import { Container, Row, Column, Col } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">Made with &hearts; </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
