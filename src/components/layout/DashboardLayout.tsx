
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Video, 
  Search, 
  Scissors, 
  Tag, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Home,
  Upload,
  BarChart3,
  Users,
  Bell,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: <Home size={20} />, path: '/dashboard' },
    { label: 'Library', icon: <Video size={20} />, path: '/dashboard/library' },
    { label: 'Search', icon: <Search size={20} />, path: '/dashboard/search' },
    { label: 'Creator', icon: <Scissors size={20} />, path: '/dashboard/creator' },
    { label: 'Tags', icon: <Tag size={20} />, path: '/dashboard/tags' },
    { label: 'Analytics', icon: <BarChart3 size={20} />, path: '/dashboard/analytics' },
    { label: 'Settings', icon: <Settings size={20} />, path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-sidebar flex flex-col text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out",
          collapsed ? "w-[70px]" : "w-[240px]"
        )}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between border-b border-sidebar-border h-16">
          {!collapsed && (
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-sidebar-foreground">ClipGenius</span>
            </Link>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-xl">C</span>
            </div>
          )}
          <button 
            onClick={() => setCollapsed(prev => !prev)}
            className="text-sidebar-foreground hover:bg-sidebar-accent rounded-md p-1"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-2 py-2 rounded-md transition-colors",
                location.pathname === item.path 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <div className="min-w-[24px] flex items-center justify-center">{item.icon}</div>
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Upload Button */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            className={cn(
              "w-full gradient-bg gap-2",
              collapsed && "px-0 justify-center"
            )}
          >
            <Upload size={18} />
            {!collapsed && <span>Upload</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4 bg-background">
          <div className="flex-1">
            <div className="relative max-w-md">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search videos, clips, tags..."
                className="pl-8 pr-4 py-2 rounded-md border border-input bg-transparent w-full focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-purple rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-sm">User Name</p>
                    <p className="text-xs text-muted-foreground">user@example.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
