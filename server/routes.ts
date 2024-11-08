import type { Express } from "express";

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Here you would typically integrate with an email service
      // For now, we'll just simulate a successful response
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });
}
