import mongoose from 'mongoose';

export default async function connect(){
    const DB = "mongodb+srv://vivekushwaha123:gzyTJSXV3ZFXZlhR@cluster0.0tl1c3x.mongodb.net/resturant?retryWrites=true&w=majority&appName=Cluster0"
 mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }).then(() => {
     console.log(`MongoDB successfully connected `);
 }).catch((error) => console.log(error))
}