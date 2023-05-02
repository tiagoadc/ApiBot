const oracledb = require("oracledb");

const config = {
  user: "hr",
  password: "123",
  connectString: "localhost:1521/xe",

  // user: "SDIGPRD",
  // password: "yUoFYy0LQH9lb4_wvSD1QB4fK",
  // connectString: "oracpx01-scan.local:1549/sdigprd",
};

const get = () => {
  return new Promise((resolve, reject) => {
    oracledb.getConnection(config, (err, connection) => {
      if (err) {
        console.error("chegou aqui", err.message);
        return;
      }
      connection.execute(`SELECT * FROM planilha1`, [], (err, result) => {
        if (err) {
          console.error(err.message);
          reject(error);
        }
        // Extrair os nomes das chaves do array metaData
        const keys = result.metaData.map((meta) => meta.name);

        // Extrair os valores do primeiro array no array rows
        const values = result.rows[0];

        // Criar um objeto com as chaves e valores correspondentes
        const dataReturn = {};
        keys.forEach((key, index) => {
          dataReturn[key] = values[index];
        });

        return resolve(dataReturn); // Aqui estão os dados retornados pela consulta
      });
      // let retorno ={funcionou: true}
      //  return resolve(retorno)
    });
  });
};
module.exports = { get };
