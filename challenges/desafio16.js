db.produtos.updateMany(
  {nome: "Big Mac"},
  { $set: {
    ultimaModificacao: Date() }
  }
);
db.produtos.find(
  {ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 }
);


// db.produtos.updateMany(
//   {nome: "Big Mac"},
//   { $set: {
//     $currentDate: { ultimaModificacao: { lastModified: true }}
//   }}
// );
// db.produtos.find(
//   {ultimaModificacao: { $exists: true } },
//   { nome: 1, _id: 0 }
// );