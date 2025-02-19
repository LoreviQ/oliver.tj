---
title: "Building Electryon: Where Monopoly Meets Web3"
date: 2025-01-14
tags: [solana, rust, web3, hackathon]
excerpt: How we built a Solana-based investment game that won first place at Taipei Blockchain Week 2024
---

Ever wondered what would happen if you combined the classic game of Monopoly with real-world business investments? That's exactly what we did with Electryon, a gamified investment platform that recently won first place on the Solana Zeus Bounty at Taipei Blockchain Week 2024's hackathon, earning us 8888 $ZEUS (approximately £4000)!

## The Vision

Electryon transforms the traditional investment experience into an exciting board game adventure. Built on the Solana blockchain, it allows players to invest in real local businesses while enjoying familiar Monopoly-style gameplay mechanics.

## Key Features

### 🎲 Gameplay Meets Investment
Instead of just buying fictional properties, players can acquire fractional ownership in actual local businesses. Roll the dice, move around the board, and when you land on a business property, you can invest using SOL (Solana's native cryptocurrency).

### 🏪 Real Business Integration
Each property on the board represents a real business. When you invest, you receive business-specific tokens backed by SOL, creating a direct connection between gameplay and real-world value.

### 🎮 Play-to-Earn Mechanics
Players can earn tokens through various gameplay mechanics, which can then be:
- Exchanged back to SOL
- Used at partner businesses
- Traded with other players

### 🖼️ NFT Integration
We've added a collecting aspect through:
- Digital property cards as NFTs
- Exclusive NFTs for completing achievements
- Special edition collectibles for game milestones

## Technical Implementation

### Technology Stack
We built Electryon using:
- **Solana Blockchain**: For its lightning-fast transactions and minimal fees
- **Rust**: For implementing smart contracts and token logic
- **Remix React**: For building a responsive and interactive frontend
- **Web3.js**: For blockchain integration

### Project Architecture
The project is split into two main components:

1. **Frontend (`/client`)**
   - Built with Remix React
   - Integrates @solana/web3.js for blockchain interactions
   - Handles game logic and user interface
   - Manages wallet connections and transactions

2. **Smart Contracts (`/coin`)**
   - Implemented in Rust
   - Manages token contracts
   - Handles liquidity pools
   - Controls business token minting and burning

## The Hackathon Experience

During Taipei Blockchain Week 2024, our team worked intensively to bring Electryon to life. The challenge was to create something that would make investing more accessible and engaging while providing real value to local businesses.

Our efforts paid off when we were awarded first place, receiving 8888 $ZEUS tokens. The judges were particularly impressed with:
- The innovative combination of gaming and investment
- Real-world business integration
- Technical implementation on Solana
- Potential for community impact

## Try It Yourself

Want to experience Electryon? You can:
- [Play the Demo](https://electryon-six.vercel.app/)
- [Check out the Code](https://github.com/LoreviQ/electryon)
- [Learn More About the Hackathon](https://earn.superteam.fun/listing/virtual-hackathon-bonus-bounty-tbw-2024/)

## What's Next?

We're currently working on:
- Expanding our network of partner businesses
- Adding more gameplay features
- Implementing additional token utilities
- Improving the user experience

## Get Involved

Interested in contributing or learning more? Connect with us:

**Oliver (Software Developer)**
- Telegram: [@loreviq](https://t.me/loreviq)
- Email: oliver.tj@oliver.tj

**Steven (Product / Business)**
- Telegram: [@Xoao3](https://t.me/Xoao3)
- Twitter: [@xoaonft](https://twitter.com/xoaonft)

*Note: Electryon is currently in testing phase. While you can try it out today, please be aware that it's just a hackathon project and is no longer under development.*

---

Want to contribute or report issues? Check out our [GitHub repository](https://github.com/LoreviQ/electryon) and feel free to submit pull requests or open issues!
