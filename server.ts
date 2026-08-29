import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import {
  generateBilingualDefinition,
  generateFallbackDefinition,
  fetchRealEnglishSynonyms,
  translatePartOfSpeech,
} from "./server/bilingualDictionary";

dotenv.config();

// In-memory cache for defined words to provide instant responses for repeated lookups
const wordCache = new Map<string, any>();

// Global process error resilience traps to prevent server crashing
process.on("unhandledRejection", (reason, promise) => {
  console.warn("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception caught:", error);
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Direct Word Definition Endpoint using Free Dictionary API + Free Translation + Datamuse Synonyms
  // Completely offline from Google Cloud Gemini to protect the free tier quota
  app.post("/api/define-word", async (req, res) => {
    try {
      const { word, context } = req.body;
      if (!word || typeof word !== "string") {
        return res.status(400).json({ error: "Word is required" });
      }

      const cleanWord = word.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
      if (!cleanWord || cleanWord.length < 2) {
        return res.status(400).json({ error: "Invalid word" });
      }

      const cacheKey = `bilingual::${cleanWord.toLowerCase()}::${(context || '').slice(0, 80).toLowerCase()}`;
      if (wordCache.has(cacheKey)) {
        return res.json(wordCache.get(cacheKey));
      }

      // Directly use Free Dictionary API with bilingual translation & accurate synonyms
      const result = await generateBilingualDefinition(cleanWord, context);

      wordCache.set(cacheKey, result);
      return res.json(result);
    } catch (err: any) {
      console.error("Error in define-word endpoint:", err);
      // Guarantee a safe fallback response
      try {
        const safeWord = typeof req.body?.word === "string" ? req.body.word : "vocabulary";
        const fallback = await generateFallbackDefinition(safeWord, req.body?.context);
        return res.json(fallback);
      } catch {
        return res.status(200).json({
          word: typeof req.body?.word === "string" ? req.body.word : "word",
          partOfSpeech: "vocabulary",
          partOfSpeechVi: "từ vựng",
          phonetic: "",
          definitionEn: "Academic vocabulary term.",
          definitionVi: "Từ vựng học thuật.",
          exampleEn: "Vocabulary acquisition is essential for standardized testing.",
          exampleVi: "Việc trau dồi từ vựng là điều cần thiết cho các bài thi chuẩn hóa.",
          synonyms: []
        });
      }
    }
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
