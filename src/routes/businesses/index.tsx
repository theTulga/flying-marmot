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
import SearchBar from "../../components/SearchBar";
import { supabase } from "../../supabaseClient";

interface BusinessCardProps {
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
  name,
  category,
  about,
  address,
  phone_number,
  thumbnail,
}) => {
  return (
    <Card className="flex flex-col h-full">
      {thumbnail && (
        <div className="relative w-full h-48">
          <img
            src={thumbnail}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="leading-7 [&:not(:first-child)]:mt-6">{about}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start mt-auto">
        {address && (
          <>
            <p className="text-sm text-muted-foreground">{address.street}</p>
            <p className="text-sm text-muted-foreground">{`${address.city}, ${address.state}, ${address.zip}`}</p>
          </>
        )}
        <p className="text-sm text-muted-foreground">{phone_number}</p>
      </CardFooter>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.isArray(businessData) &&
        businessData.map((business) => (
          <Link
            key={business.id}
            to={`/businesses/${business.id}`}
            className="cursor-pointer"
          >
            <BusinessCard
              name={business.name}
              category={business.category}
              about={business.about}
              address={business.address}
              phone_number={business.phone_number}
              thumbnail={business.thumbnail}
            />
          </Link>
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
      <div className="flex justify-center items-center pb-4">
        <SearchBar />
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
