import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostActions } from "./post-actions";
import { PostMenu } from "./post-menu";

export interface Post {
    id: number;
    author: {
        name: string;
        username: string;
        avatar: string;
    };
    content: string;
    timestamp: string;
    likes: number;
    replies: number;
    reposts: number;
    isLiked: boolean;
    isReposted: boolean;
}

interface PostCardProps {
    post: Post;
    onLike: (postId: number) => void;
    onRepost: (postId: number) => void;
    onReply: (postId: number) => void;
    onShare: (postId: number) => void;
    onCopyLink: (postId: number) => void;
    onReport: (postId: number) => void;
    onBlock: (postId: number) => void;
}

export function PostCard({
    post,
    onLike,
    onRepost,
    onReply,
    onShare,
    onCopyLink,
    onReport,
    onBlock,
}: PostCardProps) {
    return (
        <article className="border-b border-border hover:bg-muted/30 transition-colors cursor-pointer">
            <div className="p-4">
                <div className="flex space-x-3">
                    <Avatar className="w-12 h-12 flex-shrink-0">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-foreground hover:underline cursor-pointer">
                                {post.author.name}
                            </span>
                            <span className="text-muted-foreground text-sm">
                                @{post.author.username}
                            </span>
                            <span className="text-muted-foreground text-sm">·</span>
                            <span className="text-muted-foreground text-sm hover:underline cursor-pointer">
                                {post.timestamp}
                            </span>

                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <PostMenu
                                    onCopyLink={() => onCopyLink(post.id)}
                                    onReport={() => onReport(post.id)}
                                    onBlock={() => onBlock(post.id)}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mb-3">
                            <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                                {post.content}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="mt-3 -ml-2">
                            <PostActions
                                likes={post.likes}
                                replies={post.replies}
                                reposts={post.reposts}
                                isLiked={post.isLiked}
                                isReposted={post.isReposted}
                                onLike={() => onLike(post.id)}
                                onRepost={() => onRepost(post.id)}
                                onReply={() => onReply(post.id)}
                                onShare={() => onShare(post.id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
} 