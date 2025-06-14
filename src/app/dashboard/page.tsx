"use client"

import { useState } from "react";
import { TimelineHeader } from "@/components/timeline/timeline-header";
import { ComposePost } from "@/components/timeline/compose-post";
import { TimelineFeed } from "@/components/timeline/timeline-feed";
import { Post } from "@/components/timeline/post-card";
import { mockPosts } from "@/lib/mock-data";

export default function TimelinePage() {
    const [posts, setPosts] = useState<Post[]>(mockPosts);

    const handlePost = (content: string) => {
        const newPost: Post = {
            id: Date.now(),
            author: {
                name: "You",
                username: "your_username",
                avatar: "/avatars/you.jpg",
            },
            content,
            timestamp: "now",
            likes: 0,
            replies: 0,
            reposts: 0,
            isLiked: false,
            isReposted: false,
        };

        setPosts([newPost, ...posts]);
    };

    const handleLike = (postId: number) => {
        setPosts(posts.map(post =>
            post.id === postId
                ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
                : post
        ));
    };

    const handleRepost = (postId: number) => {
        setPosts(posts.map(post =>
            post.id === postId
                ? { ...post, isReposted: !post.isReposted, reposts: post.isReposted ? post.reposts - 1 : post.reposts + 1 }
                : post
        ));
    };

    const handleReply = (postId: number) => {
        console.log("Reply to post:", postId);
        // TODO: Implement reply functionality
    };

    const handleShare = (postId: number) => {
        console.log("Share post:", postId);
        // TODO: Implement share functionality
    };

    const handleCopyLink = (postId: number) => {
        console.log("Copy link for post:", postId);
        // TODO: Implement copy link functionality
    };

    const handleReport = (postId: number) => {
        console.log("Report post:", postId);
        // TODO: Implement report functionality
    };

    const handleBlock = (postId: number) => {
        console.log("Block user from post:", postId);
        // TODO: Implement block functionality
    };

    return (
        <div className="min-h-screen bg-background">
            <TimelineHeader />

            <main className="max-w-2xl mx-auto bg-background border-x border-border min-h-screen">
                <ComposePost onPost={handlePost} />

                <TimelineFeed
                    posts={posts}
                    onLike={handleLike}
                    onRepost={handleRepost}
                    onReply={handleReply}
                    onShare={handleShare}
                    onCopyLink={handleCopyLink}
                    onReport={handleReport}
                    onBlock={handleBlock}
                />
            </main>
        </div>
    );
} 