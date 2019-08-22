import React from "react";
import { Container, Grid, Header, Button } from "semantic-ui-react";

const CallToActionSection = ({ style, onButtonClick }) => (
  <Container style={{ ...style, backgroundColor: "#CA0100", padding: 50 }}>
    <Header
      as="h2"
      textAlign="center"
      style={{ color: "#fff", letterSpacing: 1 }}
    >
      SIAP JADI AGEN TEMPUR?
    </Header>
    <Container textAlign="center" style={{ color: "#fff", fontSize: 18 }}>
      Siapkah Anda menjadi Agen Tempur yang terdepan dalam mendistribusikan
      pasokan Tempe Tempur ke seluruh Indonesia?
    </Container>
    <Grid centered style={{ marginTop: 50, marginBottom: 50 }}>
      <Button
        size="huge"
        style={{ backgroundColor: "#fff", color: "#CA0100" }}
        onClick={onButtonClick}
      >
        Kontak Kami
      </Button>
    </Grid>
  </Container>
);

export default CallToActionSection;
