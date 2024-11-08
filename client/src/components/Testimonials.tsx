import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fadeIn } from "@/lib/animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Valentelligent AI transformed our business processes, increasing efficiency by 300%.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Director of Innovation",
    content: "The most sophisticated AI solutions we've implemented. Outstanding results.",
    avatar: "MC"
  },
  {
    name: "Emma Williams",
    role: "Data Science Lead",
    content: "Their predictive analytics have revolutionized our decision-making process.",
    avatar: "EW"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground">
            See what our clients say about their experience
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{testimonial.content}</p>
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
