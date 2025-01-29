// import classNames from "react-day-picker/style.module.css";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface Item {
  id: string;
  name: string;
}

interface SearchSelectProps {
  id: string;
  items: any[];
  placeholder: string;
  value: Item | null;
  onChange: (item: any | null) => void;
  displayValue: (item: any | null) => string | undefined;
  searchOptions?: {
    keys: string[];
  };
  wrapperClassName?: string;
  itemsNameKey?: string;
}

const SearchSelect: React.FC<SearchSelectProps> = ({
  id,
  items,
  placeholder,
  value,
  onChange,
  displayValue,
  searchOptions,
  wrapperClassName,
  itemsNameKey,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-[200px] justify-between",
            !value && "text-muted-foreground",
            wrapperClassName,
          )}
          role="combobox"
          variant="outline"
        >
          {displayValue(value) || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${placeholder}...`} />
          <CommandList>
            <CommandEmpty>No {placeholder.toLowerCase()} found.</CommandEmpty>
            {items?.length > 0 && (
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item[itemsNameKey || "name"]}
                    onSelect={() => onChange(item)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        item === value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {displayValue(item)}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchSelect;
