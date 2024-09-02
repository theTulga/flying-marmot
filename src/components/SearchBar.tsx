import React from "react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

const businessTypes = [
  {
    value: "agent",
    label: "Agent",
  },
  {
    value: "restaurant",
    label: "Restaurant",
  },
  {
    value: "business",
    label: "Business",
  },
];

const SearchBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full flex justify-center items-center gap-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between"
          >
            {value
              ? businessTypes.find((business) => business.value === value)
                  ?.label
              : "Select business type..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search business..." className="h-9" />
            <CommandList>
              <CommandEmpty>No business found.</CommandEmpty>
              <CommandGroup>
                {businessTypes.map((business) => (
                  <CommandItem
                    key={business.value}
                    value={business.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {business.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === business.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Input type="email" placeholder="Search business..." />
    </div>
  );
};

export default SearchBar;
