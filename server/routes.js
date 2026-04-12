const express = require('express');
const router = express.Router();

// Changed from import to require and removed .ts extension
const novelControllers = require("./controllers/novelController");

router.get("/vt/nov", novelControllers.get_novels);
router.get("/v1/chap", novelControllers.get_stories);
router.get("/v2/chap", novelControllers.get_chapter);
router.get("/v3/chap", novelControllers.get_chapcount);

router.get("/z1/char", novelControllers.get_chars);
router.get("/z2/char", novelControllers.get_char);

// Changed from export default to module.exports
module.exports = router;