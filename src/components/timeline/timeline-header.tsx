import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Bell, Mail, User, Settings, LogOut, Lock } from "lucide-react";
import Link from "next/link";

export function TimelineHeader() {
    return (
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="sable-mono text-xl font-bold">
                            sable
                        </Link>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/dashboard" className="text-foreground hover:text-muted-foreground transition-colors">
                                Timeline
                            </Link>
                            <Link href="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                                Explore
                            </Link>
                            <Link href="/messages" className="text-muted-foreground hover:text-foreground transition-colors">
                                Messages
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search Sable"
                                className="pl-10 w-64 bg-muted/50 border-0"
                            />
                        </div>

                        <Button variant="ghost" size="sm" className="p-2">
                            <Bell className="w-5 h-5" />
                        </Button>

                        <Button variant="ghost" size="sm" className="p-2">
                            <Mail className="w-5 h-5" />
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="p-1">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="/avatars/you.jpg" />
                                        <AvatarFallback>You</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuItem>
                                    <User className="w-4 h-4 mr-2" />
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="w-4 h-4 mr-2" />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Lock className="w-4 h-4 mr-2" />
                                    Privacy
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Sign out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
} 