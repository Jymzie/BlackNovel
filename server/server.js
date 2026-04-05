	import express from 'express';
	import cors from 'cors';
	import mongoose from "mongoose";
	import dotenv from 'dotenv';

	dotenv.config();
	const app = express();

	app.use(cors());
	app.use(express.json());


	// Connect to MongoDB
	const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/db_name';

	let db;
	(async () => {
	    try {
	        let conn = await mongoose.connect(uri);
	        db = conn.connection.db
	        console.log('Connected to Database');
	    } catch(error) {
	        console.error(error);
	    }
	})();


	app.get('/', async (req, res) => {
	    let r = await db.collection("user").find().toArray();;
	    res.send(r);
	});

