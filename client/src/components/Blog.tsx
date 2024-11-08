import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIn, stagger } from "@/lib/animations";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Future of AI in Business Operations",
    description: "Explore how artificial intelligence is transforming modern business operations and decision-making processes.",
    date: "November 8, 2024",
    readTime: "5 min read",
    category: "AI Insights",
    image: "/blog/ai-business.svg"
  },
  {
    title: "Machine Learning Best Practices",
    description: "A comprehensive guide to implementing machine learning solutions in your organization.",
    date: "November 7, 2024",
    readTime: "8 min read",
    category: "Machine Learning",
    image: "/blog/ml-practices.svg"
  },
  {
    title: "Understanding Neural Networks",
    description: "Demystifying neural networks and their applications in modern AI solutions.",
    date: "November 6, 2024",
    readTime: "6 min read",
    category: "Deep Learning",
    image: "/blog/neural-networks.svg"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground">
            Stay updated with our latest articles and resources
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
