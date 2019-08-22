import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import logoTagline from "../../images/logo_tagline.png";

const HeroSection = ({ style }) => (
  <Container style={{ ...style, backgroundColor: "white", padding: 30 }}>
    <Grid columns={2} stackable>
      <Grid.Column>
        <Image src={logoTagline} size="medium" centered />
      </Grid.Column>
      <Grid.Column verticalAlign="middle" style={{ fontSize: 16 }}>
        <p>
          Kami memahami, bahwa sesungguhnya hidup ini penuh pertempuran.
          Kehidupan di sekolah, di kantor, berumah tangga, bahkan saat kamu
          sedang memasak mie instan, pasti banyak pertempuran yang kamu hadapi.
          Tapi kini kamu tidak perlu sendirian lagi dalam menghadapi semua
          pertempuranmu.
        </p>
        <p>
          Tempe Tempur siap menjadi sohib tempur terbaikmu, walau mungkin dia ga
          akan ngertiin kamu. Tapi setidaknya kerenyahannya, kenikmatannya, dan
          nagihnya, bikin kamu tidak akan merasa sendiri lagi.
        </p>
        <p>Apalagi pedasnya, bikin kamu siap tempur!</p>
      </Grid.Column>
    </Grid>
  </Container>
);

export default HeroSection;
