This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: **/*.log, tmp/, **/node_modules/**, **/.next/**, **/ *.png, **/*.jpg, **/*.jpeg, **/*.gif, **/*.svg, **/*.webp, **/*.ico, **/*.md, **/README.md, **/tsconfig.json, **/package-lock.json, **/.gitignore, **/eslint.config.mjs, **/next.config.ts, **/next-env.d.ts, **/favicon.ico
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
my-app/
  my-app/
    src/
      pages/
        api/
          hello.ts
        _app.tsx
        _document.tsx
        index.tsx
      styles/
        globals.css
    package.json
    postcss.config.mjs
  src/
    pages/
      api/
        hello.ts
      _app.tsx
      _document.tsx
      ContactForm.tsx
      CountdownTimer.tsx
      Footer.tsx
      Header.tsx
      index.tsx
      ScheduleContent.tsx
    styles/
      globals.css
  package.json
  postcss.config.mjs
.gitkeep
```

# Files

## File: my-app/my-app/src/pages/api/hello.ts
```typescript
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
```

## File: my-app/my-app/src/pages/_app.tsx
```typescript
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## File: my-app/my-app/src/pages/_document.tsx
```typescript
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

## File: my-app/my-app/src/pages/index.tsx
```typescript
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the index.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs/pages/getting-started?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
```

## File: my-app/my-app/src/styles/globals.css
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

## File: my-app/my-app/package.json
```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## File: my-app/my-app/postcss.config.mjs
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## File: my-app/src/pages/api/hello.ts
```typescript
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
```

## File: my-app/src/pages/_app.tsx
```typescript
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## File: my-app/src/pages/_document.tsx
```typescript
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

## File: my-app/src/pages/ContactForm.tsx
```typescript
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mrblejpz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="py-8 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        {submitted && (
          <p className="text-green-500 text-center mb-4">Thank you for your message!</p>
        )}
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
```

## File: my-app/src/pages/CountdownTimer.tsx
```typescript
export default function CountdownTimer() {
  return (
    <section className="py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Countdown to the Event</h2>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">00</p>
          <p className="text-sm">Days</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">00</p>
          <p className="text-sm">Hours</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">00</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-4xl font-bold">00</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </section>
  );
}
```

## File: my-app/src/pages/Footer.tsx
```typescript
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-orange-100 py-6 text-center">
      <p className="text-sm text-gray-500">© 2025 Grill & Chill. All rights reserved.</p>
      <p className="mt-4">Follow us:</p>
      <ul className="flex justify-center space-x-6 mt-2">
        <li>
          <a
            href="https://instagram.com/"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@grillandchill.com"
            className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
```

## File: my-app/src/pages/Header.tsx
```typescript
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-orange-100 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Grill & Chill</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#schedule" className="hover:text-orange-500">Schedule</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-orange-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#schedule" className="hover:text-orange-500">Schedule</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
```

## File: my-app/src/pages/index.tsx
```typescript
import Header from './Header';
import ScheduleContent from './ScheduleContent';
import ContactForm from './ContactForm';
import Footer from './Footer';
import CountdownTimer from './CountdownTimer';

export default function Home() {
  return (
    <main>
      <Header />
      <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat text-center py-8 px-4 flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: "url('https://content-media-cdn.codefinity.com/courses/125aa555-8e38-4918-bf19-386e1a021074/hero+image.png')",
          filter: "blur(8px)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-[#EA2F14] mb-4">
            Grill & Chill: A Backyard Hangout
          </h1>
          <p className="text-lg mb-2">
            Join us for a relaxing evening with neighbors, food, and fun!
          </p>
          <p className="text-lg mb-2 bg-[#FFE4C4] text-[#EA2F14] font-semibold py-1 px-2 rounded">
            Oakview Park – Picnic Area B
          </p>
          <p className="text-lg mb-4 bg-[#FFE4C4] text-[#EA2F14] font-semibold py-1 px-2 rounded">
            Saturday at 4:00 PM
          </p>
          <a
            href="#contact"
            className="bg-[#E6521F] text-white py-2 px-4 rounded-full"
          >
            Join Now
          </a>
        </div>
      </section>
      <CountdownTimer />
      <section id="about" className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">About the Event</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <p className="mb-4 lg:mb-0">
            It's BBQ time, neighbors! Join us at 4 PM this Saturday at Oakview Park - Picnic Area B for a laid-back evening filled with music, food, and great company. We'll have a grill, a picnic setup, and a small stage for anyone who wants to perform. Whether you sing, dance, play guitar, or want to share a laugh, we'd love to see you shine!
          </p>
          <img
            src="https://content-media-cdn.codefinity.com/courses/125aa555-8e38-4918-bf19-386e1a021074/grill+and+chill.png"
            alt="Grill and Chill Event"
            className="w-full lg:w-1/2"
          />
        </div>
      </section>
      <ScheduleContent />
      <ContactForm />
      <Footer />
    </main>
  );
}
```

## File: my-app/src/pages/ScheduleContent.tsx
```typescript
import { CalendarClock, Flame, Mic, Rocket, Smile } from 'lucide-react';

export default function ScheduleContent() {
  return (
    <section id="schedule" className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Schedule</h2>
        <div className="border-l-4 border-orange-500 pl-4 space-y-6">
          <div className="flex items-center">
            <CalendarClock className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">4:00 PM – Arrivals & Setup</h3>
          </div>
          <p className="text-base">Grab a spot, meet your neighbors, and get comfy.</p>
          <div className="flex items-center">
            <Flame className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">4:30 PM – Grill Time</h3>
          </div>
          <p className="text-base">The BBQ is on! Hot dogs, veggies, and good smells all around.</p>
          <div className="flex items-center">
            <Mic className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">5:00 PM – Open Stage & Performances</h3>
          </div>
          <p className="text-base">Music, poetry, magic, or a duet with Sara — hop on stage and shine!</p>
          <div className="flex items-center">
            <Rocket className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">6:30 PM – Roller Showcase</h3>
          </div>
          <p className="text-base">Look out for a surprise entrance!</p>
          <div className="flex items-center">
            <Smile className="text-[#EA2F14] mr-2" />
            <h3 className="text-xl font-semibold">7:00 PM – Chill & Hangout</h3>
          </div>
          <p className="text-base">More food, more laughs, and lawn games till sunset.</p>
        </div>
      </div>
    </section>
  );
}
```

## File: my-app/src/styles/globals.css
```css
@import "tailwindcss";

:root {
  --background: #FFF8E1;
  --foreground: #1E1E1E;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: Arial, Helvetica, sans-serif;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
}
```

## File: my-app/package.json
```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "lucide-react": "^0.563.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## File: my-app/postcss.config.mjs
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## File: .gitkeep
```

```
