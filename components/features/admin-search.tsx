"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface AdminsearchProps {
  searchQuery: any;
  handleSearchChange: any;
}

const formSchema = z.object({
  search: z.string(),
});

export default function Adminsearch({
  searchQuery,
  handleSearchChange,
}: AdminsearchProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          onChange={handleSearchChange}
          value={searchQuery}
          placeholder="Search popular movies..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          // {...form.register("search")}
        />
      </div>
    </form>
  );
}
