import { Row, Col, Image } from "react-bootstrap";
import BigArrow from "../bigArrow";

export default function IntegrationMappings({
  name,
  image,
  slug,
  destinationProfile,
  destinationProperty,
  destinationGroup,
}: {
  name: string;
  image: string;
  slug: string;
  destinationProfile: string;
  destinationProperty: string;
  destinationGroup: string;
}) {
  const imageStyle = { height: 128 };

  return (
    <>
      <Row style={{ textAlign: "center" }}>
        <Col lg={1} md={0} sm={0} xs={0} />
        <Col lg={4} md={5} sm={5} xs={5}>
          <Image
            style={imageStyle}
            src={require("../../public/images/home/logo-square-with-padding-blue-background.svg")}
            alt="Grouparoo Logo"
          />
          <br />
          <br />
          <p>
            <strong>Grouparoo Concepts</strong>
          </p>
          <p>Grouparoo Profiles</p>
          <p>Grouparoo Profile Properties</p>
          <p>Grouparoo Groups</p>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <br />
          <br />
          <br />
          <br />
          <BigArrow />
        </Col>
        <Col lg={4} md={5} sm={5} xs={5}>
          <Image
            style={imageStyle}
            src={require(`../../public/images/home/integrations/${slug}/${image}`)}
            alt={name}
          />
          <br />
          <br />
          <p>
            <strong>{name} Concepts</strong>
          </p>
          <p>{destinationProfile}</p>
          <p>{destinationProperty}</p>
          <p>{destinationGroup}</p>
        </Col>
        <Col lg={1} md={0} sm={0} xs={0} />
      </Row>
    </>
  );
}
