import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Global Tech Corp AI Transformation",
    category: "Process Automation",
    metrics: [
      { label: "Efficiency Increase", value: "300%" },
      { label: "Cost Reduction", value: "45%" },
      { label: "ROI", value: "250%" },
    ],
    description:
      "Implemented end-to-end AI automation solution, transforming manual processes into intelligent workflows.",
  },
  {
    title: "FinServ AI Analytics Platform",
    category: "Predictive Analytics",
    metrics: [
      { label: "Prediction Accuracy", value: "95%" },
      { label: "Time Saved", value: "1000hrs/month" },
      { label: "Revenue Growth", value: "60%" },
    ],
    description:
      "Developed custom ML models for financial forecasting and risk assessment.",
  },
  {
    title: "Healthcare AI Diagnosis System",
    category: "Machine Learning",
    metrics: [
      { label: "Diagnosis Accuracy", value: "99.9%" },
      { label: "Patient Satisfaction", value: "98%" },
      { label: "Processing Time", value: "-80%" },
    ],
    description:
      "Built an AI-powered diagnostic system that analyzes medical imaging with high accuracy.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground">
            Real-world examples of our AI solutions in action
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4">
                        <Badge variant="secondary">{study.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-muted-foreground">{study.description}</p>
                      <div className="flex items-center text-primary">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
