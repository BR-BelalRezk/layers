import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

import avatar_1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar_2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar_3 from "@/assets/images/avatar-florence-shaw.jpg";

import figma from "@/assets/images/figma-logo.svg";
import notion from "@/assets/images/notion-logo.svg";
import slack from "@/assets/images/slack-logo.svg";
import relume from "@/assets/images/relume-logo.svg";
import framer from "@/assets/images/framer-logo.svg";
import github from "@/assets/images/github-logo.svg";

export const navbarItems = [
  "home",
  "features",
  "integrations",
  "faqs",
] as const;

export const transition = {
  duration: 0.75,
  type: "tween",
  ease: [0.76, 0, 0.24, 1],
} as const;

export const accountButtons = [
  { label: "log in", variant: "secondary" },
  { label: "sign up", variant: "primary" },
] as const;

export const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
] as const;

export const introText =
  `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.` as const;

export const featureCards = [
  {
    title: "Real-time Collaboration",
    description: "Work together seamlessly with conflict-free team editing",
  },
  {
    title: "Interactive Prototyping",
    description:
      "Engage your clients with prototypes that react to user actions",
  },
  {
    title: "Keyboard Quick Actions",
    description: "Powerful commands to help you create digrams more quickly",
  },
];
export const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
] as const;

export const avatars = [avatar_1, avatar_2, avatar_3];
export const keys = ["shift", "alt", "C"] as const;

export const integrations = [
  {
    name: "Figma",
    icon: figma,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notion,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slack,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relume,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framer,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: github,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
] as const;

export const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
] as const;
