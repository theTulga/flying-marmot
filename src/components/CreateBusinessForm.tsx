import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "../supabaseClient";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils"; // Make sure you have this utility function
import React from "react";
import { v4 as uuidv4 } from "uuid"; // Make sure to install and import uuid

const businessCategories = [
  { value: "agent", label: "Agent" },
  { value: "restaurant", label: "Restaurant" },
  { value: "shop", label: "Shop" },
  { value: "other", label: "Other" },
];

const subcategories = {
  agent: [
    { value: "real_estate", label: "Real Estate" },
    { value: "life_insurance", label: "Life Insurance" },
    { value: "auto_insurance", label: "Auto Insurance" },
    { value: "financial_services", label: "Financial Services" },
  ],
  restaurant: [
    { value: "japanese", label: "Japanese" },
    { value: "mongolian", label: "Mongolian" },
    { value: "breakfast", label: "Breakfast" },
    { value: "coffee", label: "Coffee Shop" },
  ],
  other: [
    { value: "shipping", label: "Shipping" },
    { value: "nail_salon", label: "Nail Salon" },
    { value: "contractor", label: "Contractor" },
  ],
  shop: [
    { value: "clothing", label: "Clothing" },
    { value: "food", label: "Food" },
    { value: "other", label: "Other" },
  ],
};

const FileInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const [fileName, setFileName] = React.useState<string | null>(null);

  return (
    <div className="relative">
      <input
        type="file"
        className="hidden"
        ref={ref}
        {...props}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
          }
          props.onChange?.(e);
        }}
      />
      <label
        htmlFor={props.id}
        className={cn(
          "flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer",
          "dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700",
          className
        )}
      >
        {fileName ? fileName : "Choose file"}
      </label>
    </div>
  );
});
FileInput.displayName = "FileInput";

export default function Component() {
  const form = useForm<{
    name: string;
    category: string;
    subcategory: string;
    about: string;
    thumbnail: File | null;
  }>({
    defaultValues: {
      name: "",
      category: "",
      subcategory: "",
      about: "",
      thumbnail: null,
    },
    onSubmit: async ({ value }) => {
      try {
        let thumbnailUrl = null;
        const { data: authData } = await supabase.auth.getUser();
        if (!authData.user) {
          throw new Error("User not found");
        }
        if (value.thumbnail) {
          const fileExt = value.thumbnail.name.split(".").pop();
          const fileName = `${uuidv4()}.${fileExt}`;
          const filePath = `/${authData.user.id}/${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from("jedi-force")
            .upload(filePath, value.thumbnail, {
              cacheControl: "3600",
              upsert: false,
            });

          if (uploadError) throw uploadError;

          const { data: urlData } = supabase.storage
            .from("jedi-force")
            .getPublicUrl(filePath);

          thumbnailUrl = urlData.publicUrl;
        }

        const { data, error } = await supabase.from("businesses").insert([
          {
            name: value.name,
            about: value.about,
            category: value.category,
            subcategory: value.subcategory,
            thumbnail: thumbnailUrl,
          },
        ]);

        if (error) throw error;

        console.log("Business created successfully:", data);
        alert("Business created successfully!");
      } catch (error) {
        console.error("Error creating business:", error);
        alert("Error creating business. Please try again.");
      }
    },
    onSubmitInvalid(props) {
      console.log("Form submitted with invalid values:", props);
    },
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form state", form.state);
          form.handleSubmit();
          console.log("form values", form.state.values);
        }}
      >
        <CardHeader>
          <CardTitle>Create Business</CardTitle>
          <CardDescription>Enter your business details below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <form.Field
              name="name"
              validators={{
                onChange: ({ value }) => {
                  if (value.length < 3)
                    return "Name must be at least 3 characters";
                },
              }}
            >
              {(field) => (
                <Input
                  id="name"
                  placeholder="Enter business name"
                  value={field.state.value}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                />
              )}
            </form.Field>
          </div>

          <div className="space-y-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid gap-6">
                <Label htmlFor="category">Category</Label>
                <form.Field name="category">
                  {(field) => (
                    <Select
                      onValueChange={(value) => {
                        field.handleChange(value);
                        form.setFieldValue("subcategory", "");
                      }}
                    >
                      <SelectTrigger id="category" aria-label="Select category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessCategories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </form.Field>
              </div>
              <div className="grid gap-6">
                <Label htmlFor="subcategory">Subcategory (optional)</Label>
                <form.Field name="subcategory">
                  {(field) => (
                    <Select
                      onValueChange={(value) => {
                        field.handleChange(value);
                      }}
                    >
                      <SelectTrigger
                        id="subcategory"
                        aria-label="Select subcategory"
                      >
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        {subcategories[
                          form.state.values
                            .category as keyof typeof subcategories
                        ]?.map((subcategory) => (
                          <SelectItem
                            key={subcategory.value}
                            value={subcategory.value}
                          >
                            {subcategory.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </form.Field>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="about">About</Label>
            <form.Field name="about">
              {(field) => (
                <Input
                  id="about"
                  placeholder="Brief about of your business"
                  value={field.state.value}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                />
              )}
            </form.Field>
          </div>
          <div className="space-y-2">
            <Label htmlFor="picture">Picture</Label>
            <form.Field name="thumbnail">
              {(field) => (
                <FileInput
                  id="thumbnail"
                  onChange={(e) => {
                    if (e.target.files) {
                      field.handleChange(e.target.files[0]);
                    }
                  }}
                />
              )}
            </form.Field>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            Create Business
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
