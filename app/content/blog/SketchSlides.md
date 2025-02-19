---
title: Building SketchSlides - A Free, Open-Source Drawing Practice Tool
date: 2024-12-30
tags: [typescript, react, pwa, web development]
excerpt: I built SketchSlides as a free, open-source drawing practice tool. It's a simple, modern PWA that allows you to practice figure drawing with reference images.
links:
  - name: Deployment
    url: https://sketchslides.oliver.tj
  - name: GitHub
    url: https://github.com/LoreviQ/SketchSlides
--- 
Recently, I've been learning to draw, and one of the fundamental practices in learning figure drawing is doing quick sketches from reference images. The concept is simple: look at an image for a short time - often starting with just 30 seconds - and try to capture the essence of the pose. This trains your brain to quickly identify the core elements of a figure and helps develop the muscle memory needed for confident strokes.

## The Problem with Existing Tools

When I started looking for tools to help with this practice, I found myself frustrated with the available options. Most free applications were incredibly basic - just simple image viewers with a timer slapped on. The few full-featured options that existed were surprisingly expensive, often asking $15 or more for what is, essentially, a glorified slideshow player.

The paid apps did offer nice features - custom intervals, image flipping, grid overlays - but nothing that justified their price tag. Even worse, many of these applications required constant internet connectivity or had clunky, dated interfaces that felt like they were designed in the early 2000s.

## Building a Modern Alternative

I decided to build SketchSlides as a modern, free alternative. My goals were simple:
1. Make it completely free and open source
2. Ensure it works offline
3. Create a clean, intuitive interface
4. Include all the features of paid alternatives

I chose to build it as a Progressive Web App (PWA) using React, TypeScript, and Vite. The PWA approach was perfect for this use case - it allows users to install the app like a native application, works offline after the first visit, and loads instantly with minimal overhead. Plus, it works on any device with a modern browser, eliminating the need for platform-specific development.

## The Technical Journey

The development process was an interesting exercise in modern web development. I wanted to take advantage of the latest browser APIs while still maintaining broad compatibility. One of the most interesting challenges was implementing the file system handling.

Modern browsers now support the File System Access API, which allows web applications to interact with the user's file system in a secure way. This enabled me to implement a folder picker that lets users select an entire directory of reference images - a much better experience than selecting files individually. However, not all browsers support this yet, so I had to implement a fallback to traditional file picking.

The timing system was another interesting challenge. I wanted to support both simple fixed intervals (30 seconds, 1 minute, etc.) and complex custom schedules where users could define sequences of different intervals. This led to creating a flexible scheduling system that could handle both use cases while remaining intuitive for users.

## Features Born from Experience

As I used the app for my own practice, I kept adding features that I found useful:

The image grid overlay was one of the first additions. When learning to draw, understanding proportions is crucial, and having a 3x3 grid helps immensely with composition and proportion checking. I implemented this as a toggleable overlay that doesn't interfere with the image itself.

Image flipping was another feature born from practical use. Sometimes, our brains become too accustomed to drawing poses in one direction, and simply flipping the reference image horizontally can help identify mistakes in our perception. I made this a simple toggle that can be activated mid-session.

The progress bar was carefully designed to be visible but not distracting. It smoothly updates to show the remaining time in the current interval, providing visual feedback without pulling focus from the reference image.

In particular, the minimalist style was incredibly important to me. I wanted the UI to get out of the way, so the user can focus on the reference image and drawing. As such I tried to remove all borders and other distractions, resizing the app to fit the size of the reference image. 

Unfortunately, this is where making it a PWA came to bite me. The title bar cannot be hidden, which is frustrating. Additionally I wanted to add always on top functionality, but this is not supported by Progressive Web Apps.

## Looking Forward

SketchSlides is now my daily driver for figure drawing practice, but there's always room for improvement. I'm considering adding features like:

Built-in reference collections would be valuable for beginners who don't have their own image libraries yet. However, this raises questions about image licensing and storage that need careful consideration.

More advanced timing patterns could be interesting - perhaps a system that gradually increases intervals throughout a session, or one that adapts based on user feedback.

Community features could allow users to share their custom schedules or curated reference collections, though this would need to be balanced against the app's current simplicity and offline-first nature.

## Try It Yourself

You can try SketchSlides right now at [sketchslides.oliver.tj](https://sketchslides.oliver.tj). The entire project is open source, and I welcome contributions from the community. Whether you're an artist looking for a practice tool or a developer interested in modern web development, I'd love to hear your thoughts and suggestions.

If you find the tool useful, consider supporting the project on [Ko-fi](https://ko-fi.com/loreviq). And if you're interested in the technical details or want to contribute, check out the [source code on GitHub](https://github.com/LoreviQ/SketchSlides).

Have questions or suggestions? Feel free to [reach out](mailto:oliver.tj@oliver.tj) or open an issue on GitHub. I'm always happy to discuss the project or help other developers working on similar tools. 