
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nodemongo:!!2345@nodecluster-f1u8j.mongodb.net/test?retryWrites=true&w=majority";
/*const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('connected.');
  // perform actions on the collection object
  client.close();
});*/

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db){
    if (err) {
        throw err;
    }

    var dbo = db.db("nodemongodb");
    /*dbo.createCollection("mongocollection", function(err){
        if(err) throw err;
        console.log("collection created.");
        db.close();
    });*/
    var obj = [
        {name:"Hasan", city: "Ankara"},
        {name:"Hüseyin", city: "Giresun"},
        {name:"Murat", city: "Denizli"}
    ];
    dbo.collection("mongocollection").insertMany(obj, function(err){
        if(err) throw err;
        console.log("new document created.");
        db.close();
    });

    //console.log("database created.");
    //db.close();
});