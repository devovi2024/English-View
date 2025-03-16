const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
    word: { type: String, required: true },
    meaning: { type: String, required: true },
    pronunciation: { type: String, required: true },
    sentence: { type: String, default: "" },
    partsOfSpeech: { type: String, required: true },
    level: { type: mongoose.Schema.Types.ObjectId, ref: "Level", required: true },
    synonyms: [{ type: String }],
    points: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Word", WordSchema);
