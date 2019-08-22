import React from "react";
import { Container, Grid, Image, Button } from "semantic-ui-react";
import kuningMerahImage from "../../images/kuning_merah.png";

const BuySection = ({ style, price, onButtonClick }) => (
  <Container>
    <div style={{ position: "relative", width: "100%" }}>
      <Image
        src={kuningMerahImage}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
      <div
        style={{
          position: "absolute",
          top: "3%",
          width: "100%",
          backgroundColor: "#ffffffbb",
          fontSize: 22,
          fontWeight: 700,
          padding: 15
        }}
      >
        <Grid columns={3}>
          <Grid.Column textAlign="center">Pedas</Grid.Column>
          <Grid.Column textAlign="center">{price || "Rp 16.000"}</Grid.Column>
          <Grid.Column textAlign="center">Pedas Banget</Grid.Column>
        </Grid>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          width: "100%",
          fontWeight: 700
        }}
      >
        <Grid centered>
          <Button
            size="huge"
            style={{
              backgroundColor: "#CA0100",
              color: "#fff",
              letterSpacing: 2
            }}
            onClick={onButtonClick}
          >
            BELI SEKARANG
          </Button>
        </Grid>
      </div>
    </div>
  </Container>
);

export default BuySection;
