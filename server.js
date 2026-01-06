const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =  "mongodb+srv://Xushnudbek:6BMc6eiFi4tzZv63@cluster0.s6giato.mongodb.net/REJA=cluster0";

// mongodb+srv://Xushnudbek:6BMc6eiFi4tzZv63@cluster0.s6giato.mongodb.net/REJA=cluster0   
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, 
    useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB");
    } else {
      
      console.log("MongoDB connection succeed");
      module.exports = client
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `Server is running seccessfully on port: ${PORT} , http://localhost:${PORT}`
        );
      });
    }
  }
);    