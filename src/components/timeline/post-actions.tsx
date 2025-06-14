import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";

interface PostActionsProps {
    likes: number;
    replies: number;
    reposts: number;
    isLiked: boolean;
    isReposted: boolean;
    onLike: () => void;
    onRepost: () => void;
    onReply: () => void;
    onShare: () => void;
}

export function PostActions({
    likes,
    replies,
    reposts,
    isLiked,
    isReposted,
    onLike,
    onRepost,
    onReply,
    onShare,
}: PostActionsProps) {
    return (
        <div className="flex items-center justify-between max-w-md">
            <Button
                variant="ghost"
                size="sm"
                className="group flex items-center space-x-2 px-3 py-2 -ml-3 rounded-full text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                onClick={(e) => {
                    e.stopPropagation();
                    onReply();
                }}
            >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {replies > 0 && <span className="text-xs font-medium">{replies}</span>}
            </Button>

            <Button
                variant="ghost"
                size="sm"
                className={`group flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 ${isReposted
                    ? 'text-green-600'
                    : 'text-muted-foreground hover:text-green-600'
                    }`}
                onClick={(e) => {
                    e.stopPropagation();
                    onRepost();
                }}
            >
                <Repeat2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {reposts > 0 && <span className="text-xs font-medium">{reposts}</span>}
            </Button>

            <Button
                variant="ghost"
                size="sm"
                className={`group flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 ${isLiked
                    ? 'text-red-600'
                    : 'text-muted-foreground hover:text-red-600'
                    }`}
                onClick={(e) => {
                    e.stopPropagation();
                    onLike();
                }}
            >
                <Heart className={`w-4 h-4 group-hover:scale-110 transition-transform ${isLiked ? 'fill-current' : ''}`} />
                {likes > 0 && <span className="text-xs font-medium">{likes}</span>}
            </Button>

            <Button
                variant="ghost"
                size="sm"
                className="group flex items-center space-x-2 px-3 py-2 rounded-full text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                onClick={(e) => {
                    e.stopPropagation();
                    onShare();
                }}
            >
                <Share className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
        </div>
    );
} 