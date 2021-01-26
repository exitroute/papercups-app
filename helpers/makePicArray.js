const faker = require("faker");

export const makePicArray = (data) => {
  const urls = data.results.map((result) => result.original_file_url);

  const titleCapitalized = (fakerWords) => {
    const words = fakerWords.split(" ");
    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  };

  return urls.map((url) => {
    const title = faker.random.words(2);
    return {
      url: url,
      name: `${titleCapitalized(title)} Cup`,
      price: `€${faker.random.number({
        min: 25,
        max: 50,
        precision: 5.0,
      })}.00`,
    };
  });
};
