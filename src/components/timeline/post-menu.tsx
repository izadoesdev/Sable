import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface PostMenuProps {
    onCopyLink: () => void;
    onReport: () => void;
    onBlock: () => void;
}

export function PostMenu({ onCopyLink, onReport, onBlock }: PostMenuProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onCopyLink}>
                    Copy link
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onReport}>
                    Report post
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600" onClick={onBlock}>
                    Block user
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
} 