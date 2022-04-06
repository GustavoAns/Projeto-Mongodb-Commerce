// https://www.w3resource.com/mongodb/mongodb-slice-operators.php Como usar o slice no find
db.produtos.find(
  { ingredientes: "picles" },
  { nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 }, _id: 0 }
);
