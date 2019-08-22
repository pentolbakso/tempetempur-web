import React from "react";
import { Header, Container } from "semantic-ui-react";

function Feature({ title, description }) {
  return (
    <Container textAlign="center">
      <Header as="h3" style={{ color: "#fff" }}>
        {title.toUpperCase()}
      </Header>
      <p style={{ marginTop: 20, color: "#fff" }}>{description}</p>
    </Container>
  );
}

export default Feature;
