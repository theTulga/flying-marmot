import { createFileRoute } from "@tanstack/react-router";
import BusinessView from "../../components/BusinessView";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabaseClient";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader } from "@/components/ui/card";

const fetchBusinessById = async (id: string) => {
  // Add artificial delay of 20 seconds
  await new Promise((resolve) => setTimeout(resolve, 20000));

  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

const View = () => {
  const { businessId } = Route.useParams();
  const {
    data: business,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["business", businessId],
    queryFn: () => fetchBusinessById(businessId),
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="w-full h-96" />
          <Skeleton width={200} height={24} className="mt-4" />
          <Skeleton width={150} height={24} className="mt-1" />
        </CardHeader>
      </Card>
    );
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  if (!business) {
    return <div>Business not found</div>;
  }
  return <BusinessView business={business} />;
};
export const Route = createFileRoute("/businesses/$businessId")({
  component: View,
});
