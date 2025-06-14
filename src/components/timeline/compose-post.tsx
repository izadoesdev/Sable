"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ComposePostProps {
    onPost: (content: string) => void;
}

export function ComposePost({ onPost }: ComposePostProps) {
    const [newPost, setNewPost] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handlePost = () => {
        if (!newPost.trim()) return;
        onPost(newPost);
        setNewPost("");
        setIsFocused(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
            handlePost();
        }
    };

    return (
        <div className="border-b border-border bg-background">
            <div className="p-4">
                <div className="flex space-x-3">
                    <Avatar className="w-12 h-12 flex-shrink-0">
                        <AvatarImage src="/avatars/you.jpg" />
                        <AvatarFallback>You</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                        <textarea
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onKeyDown={handleKeyDown}
                            placeholder="What's happening?"
                            className="w-full resize-none border-0 bg-transparent text-xl placeholder:text-muted-foreground focus:outline-none min-h-[120px] leading-relaxed"
                            rows={isFocused ? 4 : 3}
                        />

                        {(isFocused || newPost.length > 0) && (
                            <div className="flex justify-between items-center mt-4 pt-3 border-t border-border">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-muted-foreground">
                                        {280 - newPost.length} characters remaining
                                    </span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    {newPost.length > 0 && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => {
                                                setNewPost("");
                                                setIsFocused(false);
                                            }}
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Cancel
                                        </Button>
                                    )}
                                    <Button
                                        onClick={handlePost}
                                        disabled={!newPost.trim() || newPost.length > 280}
                                        className="px-6 py-2 font-medium"
                                        size="sm"
                                    >
                                        Post
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 