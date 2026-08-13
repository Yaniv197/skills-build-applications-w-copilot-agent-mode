import mongoose from 'mongoose';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';
const db = mongoose.connection;
mongoose
    .connect(connectionString)
    .then(() => {
    console.log('Connected to octofit-tracker database');
})
    .catch((error) => {
    console.error('Error connecting to octofit-tracker database:', error);
    process.exit(1);
});
db.on('error', console.error.bind(console, 'connection error:'));
export default db;
//# sourceMappingURL=database.js.map