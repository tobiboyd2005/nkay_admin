import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, XCircle, XIcon } from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";

import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";

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
  CommandSeparator,
} from "@/components/ui/command";

// Define the variants for styling
const multiSelectVariants = cva(
  "m-1 transition ease-in-out delay-150 duration-300",
  {
    variants: {
      variant: {
        default: "border-foreground/10 text-foreground bg-card ",
        secondary:
          "border-foreground/10 bg-secondary text-secondary-foreground ",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground ",
        inverted: "inverted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Define the props for MultiSelect
interface MultiSelectProps extends VariantProps<typeof multiSelectVariants> {
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  value: string[] | any;
  onChange: (value: string[]) => void;
  defaultValue?: string[];
  placeholder?: string;
  animation?: number;
  maxCount?: number;
  modalPopover?: boolean;
  asChild?: boolean;
  className?: string;
  labelName: string;
}

// Define the MultiSelect component
export const MultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onChange,
      value = [], // Default value to an empty array
      placeholder = "Select options",
      animation = 0,
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);

    // Initialize selectedValues to an empty array if value is undefined
    const [selectedValues, setSelectedValues] = React.useState<string[]>(value);

    React.useEffect(() => {
      // Update selectedValues when value prop changes
      setSelectedValues(value || []);
    }, [value]);

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];

        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onChange(newSelectedValues);
      }
    };

    const toggleOption = (optionValue: string) => {
      const newSelectedValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue];

      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onChange([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);

      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues);
    };

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear();
      } else {
        const allValues = options.map((option) => option.value);

        setSelectedValues(allValues);
        onChange(allValues);
      }
    };

    return (
      <div className="flex w-full flex-col items-start gap-2">
        <p>{props.labelName}</p>
        <div className="w-full">
          <Popover
            modal={modalPopover}
            open={isPopoverOpen}
            onOpenChange={setIsPopoverOpen}
          >
            <PopoverTrigger asChild>
              <Button
                ref={ref}
                rounded-md
                className={cn(
                  "!bordr-input !m-0 flex h-auto w-full items-center justify-between",
                  className,
                  multiSelectVariants({ variant }), // Use the variant here
                  "!rounded-md !border border-[#E4E4E7] !bg-transparent p-2 text-sm",
                  "!shadow-sm ring-offset-background placeholder:text-muted-foreground",
                  "focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                )}
                onClick={handleTogglePopover}
              >
                {selectedValues.length > 0 ? (
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-wrap items-center">
                      {selectedValues.slice(0, maxCount).map((value) => {
                        const option = options.find((o) => o.value === value);
                        const IconComponent = option?.icon;

                        return (
                          <Badge
                            key={value}
                            className={cn(
                              isAnimating ? "animate-bounce" : "",
                              multiSelectVariants({ variant }), // Use the variant here
                            )}
                            style={{ animationDuration: `${animation}s` }}
                          >
                            {IconComponent && (
                              <IconComponent className="mr-2 h-4 w-4" />
                            )}
                            {option?.label}
                            <XCircle
                              className="ml-2 h-4 w-4 cursor-pointer"
                              onClick={(event) => {
                                event.stopPropagation();
                                toggleOption(value);
                              }}
                            />
                          </Badge>
                        );
                      })}
                      {selectedValues.length > maxCount && (
                        <Badge style={{ animationDuration: `${animation}s` }}>
                          {`+ ${selectedValues.length - maxCount} more`}
                          <XCircle
                            className="ml-2 h-4 w-4 cursor-pointer"
                            onClick={(event) => {
                              event.stopPropagation();
                              clearExtraOptions();
                            }}
                          />
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <XIcon
                        className="mx-2 h-4 cursor-pointer text-muted-foreground"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleClear();
                        }}
                      />
                      <Separator
                        className="flex h-full min-h-6"
                        orientation="vertical"
                      />
                      <CaretSortIcon className="h-4 w-4 opacity-50" />
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto flex w-full items-center justify-between">
                    <span className="mx-3 text-sm text-muted-foreground">
                      {placeholder}
                    </span>
                    <CaretSortIcon className="h-4 w-4 opacity-50" />
                  </div>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-auto p-0"
              onEscapeKeyDown={() => setIsPopoverOpen(false)}
            >
              <Command>
                <CommandInput
                  placeholder="Search..."
                  onKeyDown={handleInputKeyDown}
                />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem
                      key="all"
                      className="cursor-pointer"
                      onSelect={toggleAll}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          selectedValues.length === options.length
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <span>(Select All)</span>
                    </CommandItem>
                    {options?.map((option) => {
                      const isSelected = selectedValues.includes(option.value);

                      return (
                        <CommandItem
                          key={option.value}
                          className="cursor-pointer"
                          onSelect={() => toggleOption(option.value)}
                        >
                          <div
                            className={cn(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible",
                            )}
                          >
                            <CheckIcon className="h-4 w-4" />
                          </div>
                          {option.icon && (
                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                          )}
                          <span>{option.label}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup>
                    <div className="flex items-center justify-between">
                      {selectedValues.length > 0 && (
                        <>
                          <CommandItem
                            className="flex-1 cursor-pointer justify-center"
                            onSelect={handleClear}
                          >
                            Clear
                          </CommandItem>
                          <Separator
                            className="flex h-full min-h-6"
                            orientation="vertical"
                          />
                        </>
                      )}
                      <CommandItem
                        className="max-w-full flex-1 cursor-pointer justify-center"
                        onSelect={() => setIsPopoverOpen(false)}
                      >
                        Close
                      </CommandItem>
                    </div>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  },
);

MultiSelect.displayName = "MultiSelect";
