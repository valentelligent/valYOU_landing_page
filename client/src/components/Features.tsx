import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { fadeIn, stagger } from "@/lib/animations";

const features = [
  {
    title: "Advanced Analytics",
    description: "Deep insights into your business data with AI-powered analytics.",
    image: "/features/analytics.svg",
  },
  {
    title: "Smart Automation",
    description: "Streamline your workflow with intelligent process automation.",
    image: "/features/automation.svg",
  },
  {
    title: "Real-time Monitoring",
    description: "Keep track of your AI systems with real-time monitoring and alerts.",
    image: "/features/monitoring.svg",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <p className="text-muted-foreground">
            Discover what makes our AI solutions stand out
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="max-w-sm mx-auto">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Feature Image</span>
                  </div>
                </AspectRatio>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
