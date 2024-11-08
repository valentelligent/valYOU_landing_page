import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={slideUp}
          >
            Empowering{" "}
            <span className="gradient-text">
              val<span className="text-primary">YOU</span>
            </span>{" "}
            with AI
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-muted-foreground"
            variants={slideUp}
          >
            Transform your business with cutting-edge AI solutions tailored to your
            unique needs. Experience the future of intelligent automation today.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={slideUp}
          >
            <Button size="lg" className="button-gradient text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg gradient-border">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative w-full aspect-square">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                d="M100,10 L150,60 L150,140 L100,190 L50,140 L50,60 Z"
                className="stroke-primary"
              />
              <circle
                cx="100"
                cy="100"
                r="40"
                className="fill-none stroke-primary"
                strokeWidth="1"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
