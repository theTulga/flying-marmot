import { NewListing } from "@/components/new-listing";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post")({
  component: () => <NewListing />,
});
