
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

    // CREATE COLLECTION
    /*dbo.createCollection("mongocollection", function(err){
        if(err) throw err;
        console.log("collection created.");
        db.close();
    });*/

    // INSERT RECORD TO COLLECTION
    /*
    var obj = [
        {_id: 100, name:"Ali", city: "Trabzon"},
        {_id: 101, name:"Orhan", city: "Rize"},
        {_id: 102, name:"Hakan", city: "Elazığ"}
    ];
    dbo.collection("mongocollection").insertMany(obj, function(err, res){
        if(err) throw err;
        //console.log("new document created.");
        console.log(res.insertedCount + " adet veri eklendi.");
        db.close();
    }); */


    // FIND
    dbo.collection("mongocollection").findOne({}, function(err, result){
        
    });

    //console.log("database created.");
    //db.close();
});