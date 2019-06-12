const IncomingForm = require("formidable").IncomingForm;

module.exports = function upload(req, res) {
  var form = new IncomingForm();





      form.on('fileBegin', function (name, file){
          file.path = __dirname + '/public/' + file.name;
      });


  form.on("file", (field, file) => {
    console.log(">>>>>>>>>");
    console.log(__dirname + '/public/' + file.name);


  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
