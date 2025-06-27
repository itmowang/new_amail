
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@/contexts/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AppHeader = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { collapsed } = useSidebar();
  const { setTheme, theme } = useTheme();
  const { user, logout } = useAuth();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="h-16 border-b border-border flex items-center px-4 md:px-6">
      <div className="flex items-center gap-4">
        <div className="block lg:hidden">
          <SidebarTrigger className="shrink-0" />
        </div>
        <Link
          to="/dashboard"
          className={`font-display font-bold text-lg md:text-xl text-foreground flex items-center gap-2 ${
            collapsed ? "md:ml-0" : "md:ml-2"
          }`}
        >
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
            E
          </div>
          <span>EmailFlow</span>
        </Link>
      </div>

      <div className={`ml-auto flex items-center gap-1 md:gap-2`}>
        <div className={`${searchOpen ? "w-full md:w-80" : "w-0"} transition-all duration-300 overflow-hidden flex`}>
          <Input
            type="search"
            placeholder="Search emails..."
            className={`h-9 ${searchOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          />
        </div>
        
        <Button variant="ghost" size="icon" className="shrink-0" onClick={() => setSearchOpen(!searchOpen)}>
          <Search className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="shrink-0">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="shrink-0" onClick={toggleTheme}>
          <Settings className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="shrink-0 gap-2 hidden md:flex">
              <Avatar className="h-6 w-6">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="text-xs">{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[120px]">{user?.name || "User"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleTheme}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Switch to {theme === "dark" ? "light" : "dark"} mode</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>
              <User className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
