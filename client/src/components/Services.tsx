import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Cpu, LineChart, Shield } from "lucide-react";
import { fadeIn, stagger } from "@/lib/animations";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your business needs"
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation"
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Data-driven insights for informed decision making"
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Robust security measures for your AI systems"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive AI solutions to power your business forward
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
