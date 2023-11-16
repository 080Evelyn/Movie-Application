app.use("./server.js");
//import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username }:${mongo_password}@cluster0.gp1j96z.mongodb.net/?retryWrites=true&w=majority`

const port = 8000;

MongoClient.connect (
    uri,
    {
        maxPoolSize: 50,
        timeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async Client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})