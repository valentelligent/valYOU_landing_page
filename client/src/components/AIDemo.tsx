import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeIn, slideUp } from "@/lib/animations";
import { Bot, Send, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const demoPrompts = [
  "How can AI improve business efficiency?",
  "What are the benefits of machine learning?",
  "Tell me about AI in cybersecurity",
];

const demoResponses: Record<string, string> = {
  "How can AI improve business efficiency?": 
    "AI can automate repetitive tasks, analyze large datasets for insights, optimize resource allocation, enhance customer service through chatbots, and predict market trends for better decision-making.",
  "What are the benefits of machine learning?":
    "Machine learning enables predictive analytics, personalized recommendations, pattern recognition, automated decision-making, and continuous improvement through data-driven insights.",
  "Tell me about AI in cybersecurity":
    "AI in cybersecurity provides real-time threat detection, automated incident response, behavioral analysis for anomaly detection, and predictive defense against emerging threats.",
};

export default function AIDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = (text: string = input) => {
    if (!text) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];

    setMessages(newMessages);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: demoResponses[text] || "I'm a demo AI. Try one of the suggested prompts!",
        },
      ]);
    }, 1000);
  };

  return (
    <section id="ai-demo" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Experience AI in Action</h2>
          <p className="text-muted-foreground">
            Try our interactive AI demo to see how we can transform your business
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant Demo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-[400px] overflow-y-auto space-y-4 mb-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-3 ${
                      message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {message.role === "assistant" ? (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Bot className="w-5 h-5 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                          <User className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "assistant"
                          ? "bg-muted"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
                {messages.length === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    Try one of the example prompts below or type your own message!
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {demoPrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSend(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={() => handleSend()}>
                  <Send className="w-4 h-4" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
