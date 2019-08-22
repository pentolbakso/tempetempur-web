import React from "react";
import { Container, List } from "semantic-ui-react";

const Footer = () => (
  <Container style={{ padding: 10 }}>
    <List floated="right" horizontal size="large">
      <List.Item disabled href="#">
        © TempeTempur.id
      </List.Item>
      <List.Item href="https://instagram.com/tempetempur" target="_blank">
        Instagram
      </List.Item>
      <List.Item href="#">Facebook</List.Item>
      <List.Item href="#">FAQ</List.Item>
      <List.Item href="#">About</List.Item>
      <List.Item href="#">Contact</List.Item>
    </List>
  </Container>
);

export default Footer;
