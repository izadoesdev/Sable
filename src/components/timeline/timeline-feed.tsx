import { PostCard, Post } from "./post-card";

interface TimelineFeedProps {
    posts: Post[];
    onLike: (postId: number) => void;
    onRepost: (postId: number) => void;
    onReply: (postId: number) => void;
    onShare: (postId: number) => void;
    onCopyLink: (postId: number) => void;
    onReport: (postId: number) => void;
    onBlock: (postId: number) => void;
}

export function TimelineFeed({
    posts,
    onLike,
    onRepost,
    onReply,
    onShare,
    onCopyLink,
    onReport,
    onBlock,
}: TimelineFeedProps) {
    return (
        <div className="bg-background">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={onLike}
                    onRepost={onRepost}
                    onReply={onReply}
                    onShare={onShare}
                    onCopyLink={onCopyLink}
                    onReport={onReport}
                    onBlock={onBlock}
                />
            ))}
        </div>
    );
} 