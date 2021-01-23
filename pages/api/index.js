const data = {
  pictures: [
    {
      name: "Paper Cup",
      price: "25.00",
      url: "https://picsum.photos/300/200",
    },
    {
      name: "Lost Cup",
      price: "25.00",
      url: "https://picsum.photos/300/200",
    },
    {
      name: "Found Cup",
      price: "25.00",
      url: "https://picsum.photos/300/200",
    },
    {
      name: "Paper Cup",
      price: "25.00",
      url: "https://picsum.photos/300/200",
    },
    {
      name: "Paper Cup",
      price: "25.00",
      url: "https://picsum.photos/300/200",
    },
    {
      name: "Paper Cup",
      price: "25.00",
      url: "https://picsum.photos/300/200",
    },
    {
      name: "Paper Cup",
      price: "25.00",
      url: "https://picsum.photos/300/200",
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(data);
}
