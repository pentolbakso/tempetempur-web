import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import topImage from "../../images/top_image.png";
import taglineImage from "../../images/tagline.png";
import logoPutih from "../../images/logo_putih.png";

const standalone = window.navigator.standalone,
  userAgent = window.navigator.userAgent.toLowerCase(),
  safari = /safari/.test(userAgent),
  ios = /iphone|ipod|ipad/.test(userAgent);

const isIOS = ios && !standalone && safari;

const BannerSection = ({ style }) => (
  <Container>
    <div style={{ position: "relative", width: "100%" }}>
      <Image
        src={topImage}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
      {!isIOS && (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: 0,
            right: 0,
            margin: "auto",
            width: "80%"
          }}
        >
          <Grid centered>
            <Image src={logoPutih} size="huge" />
          </Grid>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: 0,
          right: 0,
          margin: "auto",
          width: "80%"
        }}
      >
        <Image src={taglineImage} />
      </div>
    </div>
  </Container>
);

export default BannerSection;
