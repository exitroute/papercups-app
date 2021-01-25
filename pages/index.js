import React, { useState } from "react";

import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Modal from "../components/Modal";

function Index({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const getItemData = (data) => {
    setItemData(data);
  };

  return (
    <>
      <Nav />
      <Layout>
        <h1>Paper Cups</h1>
        <Modal
          showModal={showModal}
          openModal={(e) => {
            openModal(e);
          }}
          itemData={itemData}
        />
        {data.map((item, index) => (
          <Card
            name={item.name}
            price={item.price}
            url={item.url}
            key={index}
            data={showModal}
            openModal={(e) => {
              openModal(e);
            }}
            getItemData={(data) => getItemData(data)}
          />
        ))}
      </Layout>
    </>
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
