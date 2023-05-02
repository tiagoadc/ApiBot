const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });

const convertFile = (req) => {
  try {
    if (req.file?.filename == null || req.file.filename == "undefined") {
      console.log(json("Nenhum arquivo"));
    } else {
      const filePath = "uploads/" + req.file.filename;
      const excelData = excelToJson({
        sourceFile: filePath,
        header: { rows: 1 },
        columnToKey: { "*": "{{columnHeader}}" },
      });
      console.log(excelData);
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    //res.status(500);
  }
};

module.exports = { convertFile };
