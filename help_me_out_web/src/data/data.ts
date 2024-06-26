import { AccountSetting, Feature, FooterLink, HowItWorks, Vid } from "@/@types";

export const features: Feature[] = [
  {
    icon: "/icons/circle.png",
    title: "Simple Screen Recording",
    details:
      "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
    id: 0,
  },
  {
    icon: "/icons/send.png",
    title: "Easy-to-Share URL",
    details:
      "Share your recordings instantly with a single link. No attachments, no downloads.",
    id: 1,
  },
  {
    icon: "/icons/resend.png",
    title: "Revisit Recordings",
    details:
      "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
    id: 2,
  },
];

export const how_it_works: HowItWorks[] = [
  {
    id: 1,
    title: "Record Screen",
    details: `Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.`,
  },
  {
    id: 2,
    title: "Share Your Recording",
    details:
      "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
  },
  {
    id: 3,
    title: "Learn Effortlessly",
    details:
      "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
  },
];

export const footer_links: FooterLink[] = [
  {
    id: 0,
    head: "Menu",
    links: ["Home", "Converter", "How it Works"],
  },
  {
    id: 1,
    head: "About Us",
    links: ["About", "Contact Us", "Privacy Policy"],
  },
  {
    id: 2,
    head: "Screen Record",
    links: ["Browser Window", "Desktop", "Application"],
  },
];

export const transcript = [
  {
    time: "0.01",
    text: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `,
  },
  {
    time: "0.15",
    text: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `,
  },
  {
    time: "0.30",
    text: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `,
  },
  {
    time: "1.00",
    text: `First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `,
  },
];

export const accountSettings: AccountSetting[] = [
  {
    id: 0,
    icon: "/icons/setting-2.png",
    title: "Settings and Privacy",
    showArr: true,
  },
  {
    id: 1,
    icon: "/icons/moon.png",
    title: "Display and Accessibility",
    showArr: true,
  },
  {
    id: 2,
    icon: "/icons/message-question.png",
    title: "Help and Support",
    showArr: true,
  },
  { id: 3, icon: "/icons/logout.png", title: "Logout", showArr: false },
];

export const all_videos: Vid[] = [
  {
    id: 0,
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    poster: "/images/frame1.png",
  },
  {
    id: 1,
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    poster: "/images/frame2.png",
  },
];
