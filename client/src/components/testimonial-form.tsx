import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertTestimonialSchema, type InsertTestimonial } from "@shared/schema";
import { Star } from "lucide-react";
import { useState } from "react";

export default function TestimonialForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(5);

  const form = useForm<InsertTestimonial>({
    resolver: zodResolver(insertTestimonialSchema),
    defaultValues: {
      name: "",
      profession: "",
      location: "",
      rating: 5,
      message: "",
      approved: false,
    },
  });

  const testimonialMutation = useMutation({
    mutationFn: async (data: InsertTestimonial) => {
      const response = await apiRequest("POST", "/api/testimonials", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Testimonial Submitted!",
        description: "Thank you for your feedback. It will be reviewed before publication.",
      });
      form.reset();
      setRating(5);
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit testimonial. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertTestimonial) => {
    testimonialMutation.mutate({ ...data, rating });
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={24}
        className={`cursor-pointer transition-colors ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        } hover:text-yellow-500`}
        onClick={() => setRating(i + 1)}
      />
    ));
  };

  return (
    <div className="bg-red-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold brand-dark mb-6">Share Your Experience</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      className="border-gray-300 focus:ring-brand-red focus:border-brand-red"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Profession"
                      className="border-gray-300 focus:ring-brand-red focus:border-brand-red"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Location (City)"
                    className="border-gray-300 focus:ring-brand-red focus:border-brand-red"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormLabel className="block brand-dark font-medium mb-2">Rating</FormLabel>
            <div className="flex space-x-2">{renderStars()}</div>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Share your experience with SP GRC..."
                    rows={4}
                    className="border-gray-300 focus:ring-brand-red focus:border-brand-red"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={testimonialMutation.isPending}
            className="w-full bg-brand-red text-white hover:bg-brand-red-light"
          >
            {testimonialMutation.isPending ? "Submitting..." : "Submit Testimonial"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
