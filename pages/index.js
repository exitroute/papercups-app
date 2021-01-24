import Layout from "../components/Layout";
import Card from "../components/Card";

function Index({ data }) {
  return (
    <Layout>
      <h1>Paper Cups</h1>
      {data.map((item, index) => (
        <Card name={item.name} url={item.url} key={index} />
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
