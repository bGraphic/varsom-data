var simplify = require('simplify-geojson');
var fs = require('fs');

var simplifyFile = function(file) {
    fs.readFile('geodata/'+ file + '/'+ file + '.geojson', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        var originalJson = JSON.parse(data);
        var simplifiedJson = simplify(originalJson, 0.0005);
        var simplifiedString = JSON.stringify(simplifiedJson);
        console.log("simplified", file);

        fs.writeFile('output/' + file + '.geojson', simplifiedString, function (err) {
            if (err) return console.log(err);
            console.log('simplified file written ', file);
        });
    });
};

simplifyFile("counties");
simplifyFile("regions");