import React, { useState } from "react";

import Nav from "../components/Nav";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Box, Center, Grid } from "../components/EveryLayout";
import { makePicArray } from "../helpers/makePicArray";

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
      <Modal
        showModal={showModal}
        openModal={(e) => {
          openModal(e);
        }}
        itemData={itemData}
      />
      <Box>
        <Center measure={"80%"}>
          <h1>Paper Cups</h1>
          <Grid>
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
          </Grid>
        </Center>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const secretKey = process.env.UPLOADCARE_SECRET_KEY;
  const publicKey = process.env.UPLOADCARE_PUBLIC_KEY;
  const url = process.env.API_URL;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Uploadcare.Simple ${publicKey}:${secretKey}`,
        Accept: "application/vnd.uploadcare-v0.5+json",
      },
    });
    const data = await res.json();

    const pictures = makePicArray(data);

    return {
      props: {
        data: pictures,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

export default Index;
