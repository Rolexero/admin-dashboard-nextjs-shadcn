"use client";

import {
  Badge,
  CircleUser,
  Heart,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Adminsearch from "./features/admin-search";
import { ModeToggle } from "./ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import useCreateSessionId from "@/hooks/useGetSessionID";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { useLocalStorage } from "react-use";

interface LayoutInterface {
  children: React.ReactNode;
}

const PageLayout = ({ children }: LayoutInterface) => {
  const pathname = usePathname();

  const [boolean, setBoolean] = useState(false);

  const { data, isFetching } = useCreateSessionId(boolean);

  // console.log(data, "data");

  // const sessionIdFromStorage = localStorage.getItem("session_id")!!;
  // const sessionIdFromStorage = localStorage.getItem("session_id");

  const [session, setSession] = useLocalStorage<string | null>(
    "session_id",
    null
  );

  // const
  // console.log(data?.data?.guest_session_id, "data");

  if (session == "undefined" || session == null) {
    setSession(data?.data?.guest_session_id);
  }
  // const createGuestSession = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDJiN2FjYjhjNmVlZDBhZjgzNzUxMDEwYTUxYTg4MCIsIm5iZiI6MTczMTkyNzQ1OC40NTM1MDQ4LCJzdWIiOiI2M2MzYjQzYmFhZWM3MTAwOTQ2N2M1NTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zIf503kFLUIrqIg70FUunOH4NWr7Pn8d-jRthr492Lg", // Replace with your TMDB Bearer token
  //     },
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/authentication/guest_session/new",
  //       options
  //     );

  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to create guest session: ${response.statusText}`
  //       );
  //     }

  //     const data = await response.json();
  //     console.log("Guest Session:", data);
  //     return data.guest_session_id;
  //   } catch (error) {
  //     console.error("Error:");
  //   }
  // };

  // const val = createGuestSession();

  // console.log(val);

  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Rolexflix</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href="/"
                  className={`flex items-center ${
                    pathname === "/" ? "bg-muted" : ""
                  }  gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  href="/favourite"
                  className={`flex items-center ${
                    pathname === "/favourite" ? "bg-muted" : ""
                  }  gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                >
                  <Heart className="h-4 w-4" />
                  Favourite
                </Link>
              </nav>
            </div>
            {/* <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">RolexFlix</span>
                  </Link>
                  <Link
                    href="/"
                    className={`flex items-center ${
                      pathname === "/" ? "bg-muted" : ""
                    }  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}
                    // className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="/favourite"
                    className={`flex items-center ${
                      pathname === "/favourite" ? "bg-muted" : ""
                    }  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}
                  >
                    <Package className="h-5 w-5" />
                    Favourites
                  </Link>
                </nav>
                {/* <div className="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div> */}
              </SheetContent>
            </Sheet>
            <ModeToggle />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
