import Layout from "../components/Layout";
import Card from "../components/Card";
import Modal from "../components/Modal";
import React, { useState } from "react";

function Index({ data }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = (data) => {
    setShowModal((prev) => !prev);
    console.log("from card", data);
    console.log(showModal);
  };

  return (
    <Layout>
      <h1>Paper Cups</h1>
      {data.map((item, index) => (
        <Card
          name={item.name}
          url={item.url}
          key={index}
          data={showModal}
          openModal={(e) => {
            openModal(e);
          }}
        />
      ))}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.API_URL);
    const data = await res.json();
    return {
      props: {
        data: data.pictures,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

export default Index;
