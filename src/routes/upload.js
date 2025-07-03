const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("../utils/cloudinary");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
});

module.exports = router;
