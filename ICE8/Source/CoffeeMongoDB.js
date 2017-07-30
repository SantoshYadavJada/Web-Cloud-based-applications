
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://Santo:umkc@ds057386.mlab.com:57386/apldemo';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myobj = [
        {Id: '4af31b30f964a520b3ea21e3', Name: 'Kaldis Coffee'},
        {Id: '4b019e70f964a520ff4322e3', Name: 'Scooters Coffee'},
        {Id: '4b944769f964a520a37234e3', Name: 'Necco Coffee'},
        {Id: '4bbcc68fa0a0c9b696c61a0f', Name: 'Coffee Lofts Gym'},
        {Id: '55008ea0498ef17172c53198', Name: 'Kaldis Coffee - Regional Training & Community Coffee Center'}
    ];
    db.collection("Coffee").insertMany(myobj, function (err, res) {
        if (err) throw err;
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection("Coffee").find({}).toArray(function (err, result) {
        if (err) throw err;
        db.close();
        var fs = require('fs');
        var data = []
        for (i = 0; i < 10; i++) {
            var obj = {
                name: result[i].Name,
                id: result[i].Id

            }
            data.push(obj)
        }
        var newdata = [{
            "name": "Kansas City",
            "parent": "US",
            "children": data
        }
        ]
        fs.writeFile("Coffee.json", JSON.stringify(newdata), function (err) {
                if (err) throw err;
            }
        );
    });
});