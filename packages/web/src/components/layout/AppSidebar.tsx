
import { NavLink, useLocation } from "react-router-dom";
import { Inbox, Star, Send, Edit, Trash, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mainNavItems = [
  { title: "Dashboard", icon: Home, to: "/dashboard", count: null },
  { title: "My Email", icon: Inbox, to: "/myEmail", count: null },
  { title: "Inbox", icon: Inbox, to: "/inbox", count: 12 },
  { title: "Starred", icon: Star, to: "/starred", count: 3 },
  { title: "Sent", icon: Send, to: "/sent", count: null },
  { title: "Drafts", icon: Edit, to: "/drafts", count: 2 },
  { title: "Trash", icon: Trash, to: "/trash", count: null },
];

const AppSidebar = () => {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    `w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
      isActive
        ? "bg-primary/10 text-primary font-medium"
        : "text-muted-foreground hover:bg-muted/80"
    }`;

  return (
    <Sidebar
      className={`border-r border-border transition-all duration-300 ${
        collapsed ? "w-[70px]" : "w-[240px]"
      }`}
      collapsible
    >
      <SidebarTrigger className="absolute top-3 -right-3 h-6 w-6 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-muted-foreground hover:text-foreground" />
      
      <SidebarContent className="pt-6">
        <div className="mb-4 px-2">
          <Button 
            className={`w-full justify-start gap-2 transition-all ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <Edit className="h-4 w-4" />
            {!collapsed && <span>Compose</span>}
          </Button>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.to} className={getNavClasses}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.count !== null && (
                            <Badge variant="secondary" className="ml-auto text-xs h-5">
                              {item.count}
                            </Badge>
                          )}
                        </>
                      )}
                      {collapsed && item.count !== null && (
                        <Badge variant="secondary" className="absolute -top-1 -right-1 text-[10px] min-w-[18px] h-[18px] flex items-center justify-center">
                          {item.count}
                        </Badge>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && <span>Labels</span>}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {["Work", "Personal", "Important"].map((label) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton asChild>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/80 cursor-pointer">
                      <div className={`h-2 w-2 rounded-full ${
                        label === "Work" ? "bg-blue-500" : 
                        label === "Personal" ? "bg-green-500" : "bg-amber-500"
                      }`}></div>
                      {!collapsed && <span>{label}</span>}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
