import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { authenticate } from "../middleware/auth";

const router = Router();
const prisma = new PrismaClient();

router.post("/", authenticate, async (req, res) => {
  const { text, mediaUrl, verse } = req.body;
  const userId = req.user.id;
  try {
    const post = await prisma.post.create({
      data: {
        authorId: userId,
        text,
        mediaUrl,
        verse,
        reactions: {},
      },
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

export default router;