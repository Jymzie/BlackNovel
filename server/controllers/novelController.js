// 1. Destructure the getDb function from your connection file
const { getDb } = require("../connection"); 
const CryptoJS = require("crypto-js");
const dotenv = require('dotenv');

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const encryptData = (data) => {
    const jsonString = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
};

const get_novels = async (req, res) => {
    try {
        // 2. Await the database instance to ensure it's connected
        const db = await getDb(); 
        
        // 3. Use 'db' directly (this replaces db.sample_db)
        let result = await db.collection("novels").find().sort().toArray();
        const securePayload = encryptData(result);
        res.json(securePayload);
    } catch (err) {
        console.error("Fetch Error:", err.message);
        return res.status(400).json({ error: err.message });
    }
};

const get_stories = async (req, res) => {
    try {
        // 1. Get the string directly from the query
        const titleFromQuery = req.query.title; 
        
        const db = await getDb(); 
        
        // 2. Use findOne to get the OBJECT, not an array
        let novel = await db.collection("novels").aggregate([
        {
            $match: { title: titleFromQuery }
        },
        {
            $lookup: {
            from: "chapters",
            localField: "slug",
            foreignField: "parent_slug",
            as: "chapters"
            }
        },
        {
            // This keeps ALL novel fields and only transforms the chapters array
            $set: {
            chapters: {
                $map: {
                input: "$chapters",
                as: "ch",
                in: {
                    title: "$$ch.title",
                    chapter_number: "$$ch.chapter_number"
                }
                }
            }
            }
        }
        ]).toArray();

        // 5. Send the complete object
        const securePayload = encryptData(novel[0]);
        res.json(securePayload);

    } catch (err) {
        console.error("Fetch Error:", err.message);
        return res.status(500).json({ error: err.message });
    }
};

const get_chapter = async (req, res) => {
    try {
        // 1. Get the string directly from the query
        const titleFromQuery = req.query.title; 
        const chapter = parseInt(req.query.ch);
        const slugifiedTitle = titleFromQuery.toLowerCase().replace(/ /g, '-');
        const db = await getDb(); 
        
    
        let chapters = await db.collection("chapters")
            .find({ 
                parent_slug: new RegExp(slugifiedTitle, 'i'), 
                chapter_number: chapter 
            })
            .sort({ chapter_number: 1 })
            .toArray();

        const securePayload = encryptData(chapters);
        res.json(securePayload);

    } catch (err) {
        console.error("Fetch Error:", err.message);
        return res.status(500).json({ error: err.message });
    }
};

const get_chapcount = async (req, res) => {
    try {
        // 1. Get the string directly from the query
        const titleFromQuery = req.query.title; 
        const slugifiedTitle = titleFromQuery.toLowerCase().replace(/ /g, '-');
        const db = await getDb(); 
        
    
        let count = await db.collection("chapters")
            .countDocuments({ 
                parent_slug: new RegExp(slugifiedTitle, 'i') 
            });

        const securePayload = encryptData(count);
        res.json(securePayload);

    } catch (err) {
        console.error("Fetch Error:", err.message);
        return res.status(500).json({ error: err.message });
    }
};

const get_chars = async (req, res) => {
    try {

        const db = await getDb(); 
        
        const results = await db.collection("novels").aggregate([
    {
        $lookup: {
        from: "characters",
        localField: "slug",
        foreignField: "metadata.parent_slug",
        as: "characters" // This creates the array automatically
        }
    },
    {
        $project: {
        _id: 0,
        novel_title: "$title",
        characters: 1 // Keeps the entire array of character objects
        }
    },
    {
        $sort: { novel_title: 1 } // Optional: Sort by novel title
    }
    ]).toArray();
  
        const securePayload = encryptData(results);
        res.json(securePayload);

    } catch (err) {
        console.error("Fetch Error:", err.message);
        return res.status(500).json({ error: err.message });
    }
};

const get_char = async (req, res) => {
    try {

        const db = await getDb(); 
        const char = req.query.char; 
        // const character = char.toLowerCase().replace(/ /g, '-');
        let result = await db.collection("characters")
        .findOne({ 
            name: { $regex: char, $options: "i" } 
        });
  

        const securePayload = encryptData(result);
        res.json(securePayload);

    } catch (err) {
        console.error("Fetch Error:", err.message);
        return res.status(500).json({ error: err.message });
    }
};

module.exports = { get_novels, get_stories, get_chapter, get_chapcount, get_chars, get_char };