import React from "react";
import { Container, Grid, Image, Header } from "semantic-ui-react";
import productImage from "../../images/product.jpg";

const DidYouKnowSection = ({ style }) => (
  <Container
    style={{
      ...style,
      backgroundColor: "#CA0100",
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 50,
      paddingBottom: 50
    }}
  >
    <Header
      as="h2"
      textAlign="center"
      style={{ color: "#fff", marginBottom: 20, letterSpacing: 1 }}
    >
      EH.. TAU GA? ADA PELUANG BISNIS MENARIK LOH
      <br /> BUAT KAMU. IYA, KAMU!
    </Header>
    <Container textAlign="center" style={{ color: "#fff", fontSize: 18 }}>
      Hanya dengan modal Rp 252.000 kamu bisa mendapatkan keuntungan sekitar 40%
      - 70%
    </Container>
  </Container>
);

const ProfitSection = ({ style }) => (
  <>
    <DidYouKnowSection />
    <Container style={{ ...style, fontSize: 15, backgroundColor: "#fff" }}>
      <Grid columns={2} stackable>
        <Grid.Column verticalAlign="middle" width={10} style={{ padding: 50 }}>
          <h3 style={{ letterSpacing: 1 }}>HITUNG POTENSI KEUNTUNGAN</h3>

          <strong>Perhitungan Harga Eceran Terendah</strong>
          <p>
            Paket reseller sebesar Rp 252.000 mendapat 24 bungkus
            <br /> Harga jual minimum per bungkus Rp 15.000 <br />
            Maka omsetnya adalah : Rp 15.000 x 24 bungkus = 360.000
          </p>

          <strong>Profit Harga Eceran Terendah</strong>
          <p>
            Omset - Paket Reseller = Profit
            <br /> Rp 360.000 - Rp 252.000 = Rp 108.000
            <br />
            Atau keuntungan yang didapat sebesar 42,8 % dari modal
          </p>

          <strong>Perhitungan Harga Eceran Tertinggi</strong>
          <p>
            Paket reseller sebesar Rp 252.000 mendapat 24 bungkus <br />
            Harga jual minimum per bungkus Rp 18.000 <br />
            Maka omsetnya adalah :Rp 18.000 x 24 bungkus = 432.000
          </p>

          <strong>Profit Harga Eceran Tertinggi</strong>
          <p>
            Omset - Paket Reseller = Profit
            <br /> Rp 432.000 - Rp 252.000 = Rp 180.000
            <br />
            Atau keuntungan yang didapat sebesar 71,4 % dari modal
          </p>
        </Grid.Column>
        <Grid.Column width={6} style={{ paddingTop: 0 }}>
          <Image src={productImage} fluid />
        </Grid.Column>
      </Grid>
    </Container>
  </>
);

export default ProfitSection;
