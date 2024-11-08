import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";

const formSchema = z.object({
  service: z.enum(["ml", "automation", "analytics"]),
  dataVolume: z.number().min(1).max(1000),
  complexity: z.enum(["basic", "advanced", "enterprise"]),
  support: z.boolean(),
});

const basePrice = {
  ml: 1000,
  automation: 800,
  analytics: 600,
};

const complexityMultiplier = {
  basic: 1,
  advanced: 1.5,
  enterprise: 2.5,
};

export default function ServiceCalculator() {
  const [estimate, setEstimate] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "ml",
      dataVolume: 100,
      complexity: "basic",
      support: false,
    },
  });

  const calculateEstimate = (values: z.infer<typeof formSchema>) => {
    const base = basePrice[values.service];
    const volume = Math.ceil(values.dataVolume / 100);
    const complexity = complexityMultiplier[values.complexity];
    const support = values.support ? 1.2 : 1;

    return Math.round(base * volume * complexity * support);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const calculatedEstimate = calculateEstimate(values);
    setEstimate(calculatedEstimate);
  }

  return (
    <section id="calculator" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Service Calculator</h2>
          <p className="text-muted-foreground">
            Estimate the cost of our AI solutions for your business
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Calculate Your Custom Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ml">Machine Learning Solutions</SelectItem>
                            <SelectItem value="automation">Process Automation</SelectItem>
                            <SelectItem value="analytics">Predictive Analytics</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the primary service you need
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dataVolume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Data Volume (GB)</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <Slider
                              min={1}
                              max={1000}
                              step={1}
                              value={[field.value]}
                              onValueChange={(value) => field.onChange(value[0])}
                              className="w-full"
                            />
                            <div className="text-right text-muted-foreground">
                              {field.value} GB
                            </div>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Estimated monthly data processing volume
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="complexity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Solution Complexity</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select complexity level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="enterprise">Enterprise</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the complexity level of your solution
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="support"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Premium Support
                          </FormLabel>
                          <FormDescription>
                            24/7 priority support and maintenance
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Calculate Estimate
                  </Button>
                </form>
              </Form>

              {estimate !== null && (
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-muted-foreground">
                    Estimated Monthly Cost
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    ${estimate.toLocaleString()}
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
