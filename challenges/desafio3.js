db.produtos.find({ }, {
  _id: false,
  nome: true,
  vendidos: true,
}).limit(1);
