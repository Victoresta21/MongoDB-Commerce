db.produtos.find({ }, {
  _id: false,
  nome: true,
  vendidos: true,
}).sort({ vendidos: 1 });