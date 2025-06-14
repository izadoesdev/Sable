import { Post } from "@/components/timeline/post-card";

export const mockPosts: Post[] = [
  {
    id: 1,
    author: {
      name: "Alice Chen",
      username: "alice_dev",
      avatar: "/avatars/alice.jpg",
    },
    content: "Just shipped a new feature for our encrypted messaging system. Privacy-first development is the future! 🔒",
    timestamp: "2h",
    likes: 12,
    replies: 3,
    reposts: 1,
    isLiked: false,
    isReposted: false,
  },
  {
    id: 2,
    author: {
      name: "Bob Wilson",
      username: "bob_crypto",
      avatar: "/avatars/bob.jpg",
    },
    content: "The beauty of end-to-end encryption is that even we can't read your messages. That's not a bug, it's a feature.",
    timestamp: "4h",
    likes: 28,
    replies: 7,
    reposts: 5,
    isLiked: true,
    isReposted: false,
  },
  {
    id: 3,
    author: {
      name: "Carol Martinez",
      username: "carol_design",
      avatar: "/avatars/carol.jpg",
    },
    content: "Working on some new UI patterns for privacy-focused social apps. Less surveillance, more authentic connections.",
    timestamp: "6h",
    likes: 15,
    replies: 2,
    reposts: 3,
    isLiked: false,
    isReposted: true,
  },
]; 