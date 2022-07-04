db.resumoProdutos.insertOne({
  franquia: "McDonalds", totalProdutos: 5,
});

db.resumoProdutos.find({}, {
    _id: false,
    franquia: true,
  totalProdutos: true,
});
