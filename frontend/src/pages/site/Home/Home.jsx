import React from "react";
import Section1 from "../../../components/site/Section/Section1";
import Card from "../../../components/site/Card/Card";
import Helmet from "react-helmet";
import Section2 from "../../../components/site/Section/Section2";
import Section3 from "../../../components/site/Section/Section3";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section1 />
      <Card />
      <Section2/>
      <Section3/>
    </div>
  );
};

export default Home;
