import React, { Component } from "react";
import Layout from "../components/Layout";

// TODO Implement Cups Page with GetStaticProps

function Index({ data }) {
  return (
    <Layout>
      <h1>Paper Cups</h1>
      {data.map((item) => (
        <img src={`${item.url}`} alt="Picture of a paper cup" />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Index;
