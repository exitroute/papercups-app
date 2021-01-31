export default (req, res) => {
  try {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(result));
  } catch (err) {
    res.send({ error: err.message });
  }
};
