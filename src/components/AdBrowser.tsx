import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";

export default function Component() {
  const ads = [
    {
      id: 1,
      title: "Vintage Bicycle",
      description: "Classic road bike in excellent condition",
      image: "/placeholder.svg?height=200&width=300",
      price: "$250",
      postedDate: "2023-07-15",
    },
    {
      id: 2,
      title: "iPhone 12 Pro",
      description: "Barely used, comes with original accessories",
      price: "$699",
      postedDate: "2023-07-14",
    },
    {
      id: 3,
      title: "Leather Sofa",
      description: "Comfortable 3-seater in brown leather",
      image: "/placeholder.svg?height=200&width=300",
      price: "$800",
      postedDate: "2023-07-13",
    },
    {
      id: 4,
      title: "Graphic Design Services",
      description: "Professional logo and branding design",
      price: "Starting at $150",
      postedDate: "2023-07-12",
    },
    {
      id: 5,
      title: "Mountain Bike",
      description: "Durable off-road bike, perfect for trails",
      image: "/placeholder.svg?height=200&width=300",
      price: "$450",
      postedDate: "2023-07-11",
    },
    {
      id: 6,
      title: "Tutoring - Math & Science",
      description: "Experienced tutor for high school students",
      price: "$30/hour",
      postedDate: "2023-07-10",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Advertisements</h1>
      <div className="flex mb-6">
        <Input
          className="flex-grow mr-2"
          placeholder="Search advertisements..."
        />
        <Button>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <Card key={ad.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{ad.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              {ad.image && (
                <div className="mb-4">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="rounded-md object-cover w-full h-[200px]"
                  />
                </div>
              )}
              <p className="text-muted-foreground mb-2">{ad.description}</p>
              <p className="font-semibold">{ad.price}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Posted on: {ad.postedDate}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
