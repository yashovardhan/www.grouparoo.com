import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Oops.</h1>

          <Row>
            <Col md={6}>
              <Image
                width="100%"
                src="https://media.giphy.com/media/5dWWa4tYjpBSM/giphy.gif"
                rounded
              />
            </Col>

            <Col md={6}>
              <p>Well... this is embarrassing. </p>
              <p>
                This is not a page I have. Want to{" "}
                <Link href="/">
                  <a>go back home</a>
                </Link>
                ?
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
