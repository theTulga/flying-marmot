import { createFileRoute } from "@tanstack/react-router";

import CreateBusinessForm from "components/CreateBusinessForm";

export const Route = createFileRoute("/businesses/create")({
  component: () => <Create />,
});

const Create = () => {
  return (
    <div className="flex flex-col gap-4">
      <CreateBusinessForm />
    </div>
  );
};
