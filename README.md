# 🖤 Sable

> A privacy-first, end-to-end encrypted social micro-network built on trust — not algorithms.

![Sable](./public/og.png)

## 🧭 Vision

Sable exists to offer a quiet, secure, and minimal social experience — one where users can follow, post, and connect without fear of exposure, manipulation, or surveillance. It's not for "audiences." It's for people.

**This is not another social feed.**

Sable is the black-and-white antithesis of algorithmic social media — a deliberate space for thoughtful digital presence.

## ✨ Core Features

### 🔒 End-to-End Encrypted Posts
- Every post is encrypted client-side, per follower
- Posts are opaque to the server — Sable only relays encrypted data
- Zero-knowledge architecture

### 👤 Follow-Based Network
- Users choose who to follow
- Followers must be approved
- Users only see posts from people they follow
- No content discovery algorithms

### 📜 Chronological Feed
- No sorting, no algorithm
- Just the raw, decrypted feed in timestamp order
- Authentic, unmanipulated timeline

### 🧘 No Engagement Metrics
- No likes, comments (optional), or public counts
- No trending content, reposts, or gamification
- Focus on authentic connection, not performance

### 🧾 Minimalist Compose
- Text-first posting experience
- Optional encrypted image or file attachments
- Post expiration timer (24h, 7d, or never)

### 🗂️ User Management
- Device-level key store
- Session revocation and follower management
- Revoking a follower cuts off access to future content

## 🎨 Design Philosophy

- **Color Scheme**: Pure black & white monochrome UI
- **Typography**: Clean, neutral sans-serif (Inter/IBM Plex Sans)
- **Spacing**: Generous whitespace for editorial feel
- **Motion**: Minimal fade transitions only
- **Icons**: Line-based, monochrome, pixel-aligned
- **Theme**: Text-focused, terminal meets notebook aesthetic

## 🧱 Tech Stack

- **Frontend**: Next.js 15 with React 19
- **Encryption**: WebCrypto API with libsodium/tweetnacl
- **Backend**: Next.js API routes (encrypted data relay only)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: better-auth (passwordless/invite-based)
- **Styling**: Tailwind CSS v4 (monochrome theme)
- **UI Components**: Radix UI primitives

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/sable.git
   cd sable
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file:
   ```env
   # Authentication
   BETTER_AUTH_SECRET=your-secret-key-here
   BETTER_AUTH_URL=http://localhost:3000
   
   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/sable
   
   # Encryption (auto-generated on first run)
   SABLE_SERVER_KEYPAIR=
   ```

4. **Set up the database**
   ```bash
   # Generate database schema
   bun run db:generate
   
   # Run migrations
   bun run db:migrate
   ```

5. **Start the development server**
   ```bash
   bun dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

### Using Docker (Local Development)

For local development with Docker:

```bash
# Start local PostgreSQL
docker-compose up -d

# Use this DATABASE_URL in your .env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/sable
```

## 🔐 Security Features

- **Client-side encryption**: All posts encrypted before leaving your device
- **Zero-knowledge server**: Server cannot read your content
- **Perfect forward secrecy**: Revoking followers cuts future access
- **No tracking**: No analytics, no engagement farming
- **Minimal metadata**: Only encrypted blobs and timestamps stored

## 🎯 MVP Scope

### ✅ Must Have
- [x] Encrypted follow requests
- [x] Encrypted post sharing
- [x] Chronological feed
- [x] Compose with expiration
- [x] Basic key management
- [x] Web-only MVP

### 🔄 Nice to Have
- [ ] Offline support
- [ ] Mobile PWA
- [ ] Encrypted comment threads
- [ ] Media attachments
- [ ] Export/backup functionality

## 👥 Target Audience

- Technically literate users seeking quieter social spaces
- Creatives and thinkers wanting private publishing
- People burned out by mainstream social media
- Activists requiring discreet communication
- Small communities and private networks

## 🔮 Roadmap

- **Phase 1**: MVP with core encrypted posting
- **Phase 2**: Mobile PWA and offline support
- **Phase 3**: Decentralized/federated version
- **Phase 4**: Advanced features (plugins, integrations)

## 🤝 Contributing

Sable is built with privacy and security as core principles. All contributions must maintain these standards.

1. Fork the repository
2. Create a feature branch
3. Ensure all encryption remains client-side
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🛡️ Privacy Commitment

Sable is designed with privacy by default:
- No user tracking or analytics
- No content scanning or moderation algorithms  
- No engagement metrics or social pressure
- Your data stays encrypted and private

---

*"In a world of noise, Sable offers silence. In a world of surveillance, Sable offers sanctuary."*
