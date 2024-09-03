import { createLazyFileRoute } from "@tanstack/react-router";
import { ListingsPage } from "@/components/listings-page";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <ListingsPage />
    </div>
  );
}
