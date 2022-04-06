const countProd = db.produtos.find({}).count();
db.resumoProdutos.insert({ franquia: "McDonalds", totalProdutos: countProd });
db.resumoProdutos.find({}, { _id: 0 });
