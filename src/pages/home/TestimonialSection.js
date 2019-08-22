import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import Testimony from "../../components/Testimony";

const TestimonialSection = ({ style }) => (
  <Container style={{ ...style, backgroundColor: "#FF6600", padding: 30 }}>
    <Header
      as="h2"
      textAlign="center"
      style={{ color: "#fff", letterSpacing: 1 }}
    >
      APA KATA MEREKA
    </Header>
    <Grid columns={3} stackable container>
      <Grid.Column>
        <Testimony
          author="Aslam Hadi Harsono"
          message="Tempenya enak. Yang doyan pedes cocok nih! Mantab"
        />
      </Grid.Column>
      <Grid.Column>
        <Testimony
          author="Arbian"
          message="Gw share ke tmn2 gw pd suka tp bbrp cara makannya jadi kyk
            condiment nasi gitu. Jadi pengganti kerupuk."
        />
      </Grid.Column>
      <Grid.Column>
        <Testimony
          author="Hilman Arifa Azhar"
          message="Alhamdulillah, mantap Akh.. Tempe Tempurnya Enak"
        />
      </Grid.Column>
      <Grid.Column>
        <Testimony
          author="Fanty Eka"
          message="ini gw makan ini ga berhenti, beneran enak banget."
        />
      </Grid.Column>
      <Grid.Column>
        <Testimony
          author="Iman Fajri"
          role="Reseller Jakarta Barat"
          message="Tuh kan repeat lg. Tempe tmpur mah bikin nagih. Hehehe"
        />
      </Grid.Column>
      <Grid.Column>
        <Testimony
          author="Fariz Hamzah"
          message="Tempe nya enak, keluarga & temen-temen kantor pada suka. Crunchy, renyah & manis-pedes. 
            Sizenya juga pas banget buat cemilan. Mirip banget sama tempe yang dijual di toko oleh oleh
            tapi yang ini lebih krispi & ga banyak minyak."
        />
      </Grid.Column>
    </Grid>
  </Container>
);

export default TestimonialSection;
