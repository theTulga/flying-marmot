import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "../../supabaseClient";
import { Button } from "@/components/ui/button";

interface BusinessCardProps {
  id: string;
  name: string;
  category: string;
  about: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone_number: string;
  thumbnail?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  id,
  name,
  category,
  thumbnail,
}) => {
  return (
    <Card className="flex flex-col h-full">
      <Link className="block group" to={`/businesses/${id}`}>
        <div className="relative w-full h-48">
          <img
            src={thumbnail}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          />
        </div>
      </Link>
      <CardHeader className="flex p-2">
        <CardTitle className="text-md font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex p-2 pt-0 flex-row justify-between">
        <CardDescription>{category}</CardDescription>
        <CardDescription>San Francisco</CardDescription>
      </CardContent>
    </Card>
  );
};

const fetchBusinesses = async () => {
  const { data, error } = await supabase.from("businesses").select("*");
  if (error) throw error;
  return data;
};

const BusinessList = () => {
  const { data: businessData } = useSuspenseQuery({
    queryKey: ["businesses"],
    queryFn: fetchBusinesses,
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.isArray(businessData) &&
        businessData.map((business) => (
          <BusinessCard
            id={business.id}
            name={business.name}
            category={business.category}
            about={business.about}
            address={business.address}
            phone_number={business.phone_number}
            thumbnail={business.thumbnail}
          />
        ))}
    </div>
  );
};

const SkeletonBusinessCard = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <Skeleton height={200} />
        <Skeleton width={150} height={24} className="mt-4" />
      </CardHeader>
      <CardContent>
        <Skeleton count={3} />
      </CardContent>
      <CardFooter>
        <Skeleton count={2} />
      </CardFooter>
    </Card>
  );
};

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(5)].map((_, index) => (
        <SkeletonBusinessCard key={index} />
      ))}
    </div>
  );
};

const Businesses = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Businesses</h1>
        <Button>Add Business</Button>
      </div>
      <Suspense fallback={<Loading />}>
        <BusinessList />
      </Suspense>
    </>
  );
};

export const Route = createFileRoute("/businesses/")({
  component: Businesses,
});
