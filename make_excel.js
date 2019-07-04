#!/usr/bin/env node

var argv = require('optimist').argv;
var Excel = require('exceljs');



try {
    arg1 = argv.x;
    arg2 = argv.y;
    console.log(arg1);
    console.log(arg2);
} catch (error) {
    console.error("ERROR", error);
}


var workbook = new Excel.Workbook();
workbook.addWorksheet('Sheet11');
var sheet = workbook.worksheets[0];
sheet.addRow([10, arg1, new Date()]);
sheet.addRow([11, arg2, new Date()]);
var a;

sheet._rows.forEach(e => {
    e.commit();
});
workbook.xlsx.writeFile(".\\temp.xlsx")
  .then(function() {
    console.log("DONE");
  })
  .catch(function (err) {
    console.log(err);
});
