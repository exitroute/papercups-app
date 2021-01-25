import Layout from "../components/Layout";
import Card from "../components/Card";
import Modal from "../components/Modal";
import React, { useState } from "react";

function Index({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState();

  const openModal = (data) => {
    setShowModal((prev) => !prev);
  };

  const getItemData = (data) => {
    console.log(data);
    setItemData(data);
  };

  return (
    <Layout>
      <h1>Paper Cups</h1>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
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
