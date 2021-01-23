import Layout from "../components/Layout";
import Card from "../components/Card";

function Index({ data }) {
  return (
    <Layout>
      <h1>Paper Cups</h1>
      {/* {data.map((item, index) => (
        <Card name={item.name} url={item.url} key={index} />
      ))} */}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.API_URL);
    const data = await res.json();
  } catch (err) {
    console.log(err);
    console.error(`There was an error with status code ${res.status}`);
  } finally {
    return {
      props: {
        data,
      },
    };
  }
}

export default Index;
