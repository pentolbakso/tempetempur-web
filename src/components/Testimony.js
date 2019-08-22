import React from "react";
import { Card } from "semantic-ui-react";

function Testimony({ author, role, message }) {
  return (
    <Card fluid style={{ background: "transparent" }}>
      <Card.Content>
        <Card.Header style={{ color: "#fff", letterSpacing: 1 }}>
          {author}
        </Card.Header>
        <Card.Meta>{role || null}</Card.Meta>
        <Card.Description style={{ color: "#fff" }}>{message}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default Testimony;
