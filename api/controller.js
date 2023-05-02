const oracle = require("../dao/oracle");
const service = require("../service/service");

const getOracle = async (request, response, next) => {
  try {
    resultOracle = await oracle.get();
  } catch (error) {
    return next(error);
  }
  return response.status(200).json(resultOracle);
};

const postFile = async (request, response, next) => {
  try {
    fileConverted = service.convertFile(request);
    resultOracle = { funcionou: true }; //= await oracle.get();
  } catch (error) {
    return next(error);
  }
  return response.status(200).json(resultOracle);
};

module.exports = { getOracle, postFile };
