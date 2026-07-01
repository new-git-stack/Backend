import dotenv from "dotevnv";
import connectDB from "./config/database.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("Error", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("MongoDB connection failed", err);
    }
}

startServer();