import { TimelineEvent, AchievementItem, GalleryPhoto } from "./types";

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1990s - Early Days",
    title: "The Foundation of Hard Work",
    description: "K. Vijay Kumar begins his journey, embodying raw work ethic and deep devotion. Working tireless shifts, he chooses silent dedication and places family comfort ahead of any personal luxury.",
    category: "hardwork",
    iconName: "Hammer",
    highlights: ["Silent sacrifice", "Unyielding persistence", "Integrity first"]
  },
  {
    year: "Early Milestones",
    title: "Stepping Stones: First Two-Wheeler",
    description: "An important turning point in the struggle. Owning a bike wasn't just about mobility; it was a physical symbol of starting from humble roots and scaling self-made milestones.",
    category: "achievement",
    iconName: "Bike",
    highlights: ["First mobility victory", "Tireless daily commutes", "Expanding horizons"]
  },
  {
    year: "Growing Support",
    title: "Shielding a Growing Family",
    description: "As the household grows, his sacrifices double. He takes on multiple financial responsibilities, ensuring that his children have access to the best schools and resources to succeed.",
    category: "family",
    iconName: "ShieldHeart",
    highlights: ["Unwavering protective shield", "Prioritizing premium education", "Endless patience"]
  },
  {
    year: "Mid-Journey Triumphed",
    title: "Two Bikes & The First Family Car",
    description: "Through compounding dedication over years of labor, multiple transport upgrades follow—first owning two bikes, and finally driving home his first family car. A stellar milestone showing that hard work creates its own pathways.",
    category: "achievement",
    iconName: "Car",
    highlights: ["Compounding prosperity", "Proud family milestone", "Legacy of perseverance"]
  },
  {
    year: "Present & Future",
    title: "The Ultimate Tribute: My Father",
    description: "A dedicated farmer and successful businessman, his life's work has been more than growing crops and building businesses—it has been building a future for his family. Every achievement we celebrate today is rooted in the sacrifices, wisdom, and values he has shared with us.",
    category: "future",
    iconName: "Code2",
    highlights: ["Dream realization", "Legacy of intellect", "Our greatest inspiration"]
  }
];

export const achievementItems: AchievementItem[] = [
  {
    id: "provider",
    title: "Hardworking Provider",
    subtitle: "Sacrifice & Love",
    description: "Spent over two decades in dedicated service, building an unbreakable shield for our livelihood and values.",
    metric: "25+ Years",
    iconName: "Briefcase",
    bgGradient: "from-emerald-900/40 via-emerald-800/20 to-gold-950/20",
    imageSeed: "father-working"
  },
  {
    id: "bikes",
    title: "Two Bikes Achievement",
    subtitle: "Freedom to Commute",
    description: "Starting from simple steps to upgrading with pride. These two wheels traveled miles of struggle to secure our paths.",
    metric: "2 Bikes Owned",
    iconName: "Bike",
    bgGradient: "from-amber-950/40 via-gold-900/20 to-emerald-950/10",
    imageSeed: "motorcycle"
  },
  {
    id: "car",
    title: "The Car Milestone",
    subtitle: "The Family Standard",
    description: "Bringing home a beautiful family car—a proud, self-made declaration of years of compounded labor for his loved ones.",
    metric: "1 Premium Car",
    iconName: "Car",
    bgGradient: "from-gold-950/30 via-emerald-900/20 to-emerald-950/30",
    imageSeed: "luxury-car"
  },
  {
    id: "education",
    title: "Supporting Family",
    subtitle: "Unmatched Mentorship",
    description: "Believing that education is the ultimate gift. He invested all his strength so that I could write code and build systems.",
    metric: "Infinite Devotion",
    iconName: "HeartHandshake",
    bgGradient: "from-emerald-950/50 via-teal-950/20 to-gold-950/10",
    imageSeed: "graduate"
  },
  {
    id: "inspiration",
    title: "Inspiring Generations",
    subtitle: "His Living Legacy",
    description: "Showing through actions, not just words, what it means to lead a life of character, responsibility, and unwavering joy.",
    metric: "46 Years of Honor",
    iconName: "Sparkles",
    bgGradient: "from-gold-900/30 via-amber-950/30 to-emerald-900/30",
    imageSeed: "wisdom"
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo1",
    imageSeed: "vintage-road",
    caption: "The paths we traveled together, paved by his tireless efforts.",
    location: "Family Memory",
    rotation: "-rotate-2"
  },
  {
    id: "photo2",
    imageSeed: "morning-sunlight",
    caption: "A father's guidance is like a gentle sunrise, lighting up our dark alleys.",
    location: "Morning Walks",
    rotation: "rotate-3"
  },
  {
    id: "photo3",
    imageSeed: "steering-wheel",
    caption: "The sweet fruit of long labor: comfortable rides in our family car.",
    location: "First Drive",
    rotation: "-rotate-1"
  },
  {
    id: "photo4",
    imageSeed: "father-wisdom",
    caption: "Engraved in my heart is his simple philosophy: Work hard, stay humble.",
    location: "Vijay's Guidance",
    rotation: "rotate-2"
  }
];
