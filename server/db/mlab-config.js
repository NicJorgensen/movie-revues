var mongoose = require('mongoose');
var connectionString = "mongodb://movies:movies>@ds058369.mlab.com:58369/movie-revues"

var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on("error", err => {
    console.log("mlab error: ", err);
});

connection.once("open", () => {
    console.log("Connected to mlab!");
});