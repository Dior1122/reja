const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://diortopik2020:qM8sZG3i17rFjBqd@cluster0.xuwbw.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
     if (err) console.log("ERROR on connection MongoDB");
     else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 6003;
        server.listen(PORT, function () {
        console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
        });
     }
});
