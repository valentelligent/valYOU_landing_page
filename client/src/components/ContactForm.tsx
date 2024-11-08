import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { fadeIn } from "@/lib/animations";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ready to transform your business with AI? Contact us today.
            </p>
          </div>

          <Card className="border shadow-lg">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="form-layout">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name"
                            className="h-12 text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            className="h-12 text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project"
                            className="min-h-[150px] text-base resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full text-base h-12"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
