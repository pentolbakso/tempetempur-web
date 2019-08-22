import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Feature from "../../components/Feature";

const FeatureSection = ({ style }) => (
  <Container
    style={{
      ...style,
      backgroundColor: "#FF6600",
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 50,
      paddingBottom: 50
    }}
  >
    <Grid columns={3} stackable>
      <Grid.Column>
        <Feature
          title="KEARIFAN LOKAL"
          description="Terbuat dari tempe dan sangat nikmat dimakan langsung maupun bersama nasi atau mie instan favoritmu. Krispi, gurih, pedas, dan manis bikin lupa sama kerupuk!"
        />
      </Grid.Column>
      <Grid.Column>
        <Feature
          title="BERKAH"
          description="Tempe mengandung protein tinggi, sumber kalsium, sumber vitamin B12, dan masih banyak manfaat kesehatan lainnya.'Dan makanlah makanan yang halal lagi baik, dari apa yang Allah telah rezekikan kepadamu (Al-Maidah: 88)'"
        />
      </Grid.Column>
      <Grid.Column>
        <Feature
          title="PILIH LEVELMU"
          description="Kamu tim mana nih? Pedas Level 1 atau Level 3? Sesuaikan dengan semangat tempurmu"
        />
      </Grid.Column>
    </Grid>
  </Container>
);

export default FeatureSection;
