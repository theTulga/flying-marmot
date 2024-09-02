import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      image: null as File | null,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
      alert("Ad posted successfully!");
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New Ad</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void form.handleSubmit();
            }}
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <form.Field
                  name="title"
                  validators={{
                    onChange: ({ value }) => {
                      if (value.length < 3)
                        return "Title must be at least 3 characters";
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      id="title"
                      placeholder="Enter ad title"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <form.Field
                  name="description"
                  validators={{
                    onChange: ({ value }) => {
                      if (value.length < 10)
                        return "Description must be at least 10 characters";
                    },
                  }}
                >
                  {(field) => (
                    <Textarea
                      id="description"
                      placeholder="Describe your item or service"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>
              </div>

              <div>
                <Label htmlFor="price">Price</Label>
                <form.Field
                  name="price"
                  validators={{
                    onChange: ({ value }) => {
                      if (isNaN(Number(value))) return "Price must be a number";
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      id="price"
                      placeholder="Enter price"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <form.Field
                  name="category"
                  validators={{
                    onChange: ({ value }) => {
                      if (!value) return "Please select a category";
                    },
                  }}
                >
                  {(field) => (
                    <Select
                      onValueChange={field.handleChange}
                      defaultValue={field.state.value}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="furniture">Furniture</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </form.Field>
              </div>

              <div>
                <Label htmlFor="image">Image</Label>
                <form.Field name="image">
                  {(field) => (
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        field.handleChange(e.target.files?.[0] || null)
                      }
                    />
                  )}
                </form.Field>
              </div>

              <Button type="submit" className="w-full">
                Post Ad
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
