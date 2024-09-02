import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";

const BusinessView = ({ business }: { business?: any }) => {
  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="overflow-y-auto max-h-screen">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/businesses">Businesses</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{business.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          {business.thumbnail && (
            <div className="relative w-full h-60">
              <img
                src={business.thumbnail}
                alt={business.name}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
          )}
          <CardTitle>{business.name}</CardTitle>
          <CardDescription>
            {business.category} {business.subcategory}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {business.about}
          </p>
          <Separator className="my-4" />
          <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto overflow-y-auto max-h-[calc(100vh-200px)]">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <div className="flex justify-between mb-4 text-sm text-gray-600">
                {business.address && (
                  <div className="w-1/2 pr-2">
                    <h3 className="text-base font-medium mb-1 text-muted-foreground">
                      Address
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {business.address.street}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {business.address.city}, {business.address.state}{" "}
                      {business.address.zip}
                    </p>
                  </div>
                )}
                {business.phone_number && (
                  <div className="w-1/2 pl-2">
                    <h3 className="text-base font-medium mb-1 text-muted-foreground">
                      Phone
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {business.phone_number}
                    </p>
                  </div>
                )}
              </div>
              <Separator className="my-4" />
              {business.hours && (
                <div className="mb-4 text-sm text-gray-600">
                  <h3 className="text-base font-medium mb-1 text-muted-foreground">
                    Hours
                  </h3>
                  {business.hours
                    .split(";")
                    .map((line: string, index: number) => {
                      const colonIndex = line.indexOf(":");
                      const day = line.slice(0, colonIndex).trim();
                      const hours = line.slice(colonIndex + 1).trim();
                      return (
                        <p
                          key={index}
                          className="flex justify-between text-sm text-muted-foreground"
                        >
                          <span className="font-medium">{day}</span>
                          <span>{hours}</span>
                        </p>
                      );
                    })}
                </div>
              )}
            </div>
            {business.address && business.address.google_map_url && (
              <div className="w-full md:w-1/2 relative">
                <iframe
                  src={business.address.google_map_url}
                  className="w-full h-[250px] sm:h-[450px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessView;
