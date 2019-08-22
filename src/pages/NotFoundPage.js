import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logoTagline from "../images/logo.png";

function NotFoundPage({ location }) {
  return (
    <Container textAlign="center" style={{ marginTop: 100 }}>
      <Image src={logoTagline} size="medium" centered />
      <Header>404 - Not Found</Header>
      <p>Maaf, content yg anda cari belum tersedia.</p>
      <p>Jika anda pikir ini adalah kesalahan, silahkan kontak kami</p>
      <Link to="/">Kembali ke Home</Link>
    </Container>
  );
}

export default NotFoundPage;
