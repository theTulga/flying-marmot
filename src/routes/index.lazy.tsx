import { createLazyFileRoute } from "@tanstack/react-router";
import AdBrowser from "components/AdBrowser";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <AdBrowser />
    </div>
  );
}
