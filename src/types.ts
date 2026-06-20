export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: "hardwork" | "achievement" | "family" | "future";
  iconName: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  iconName: string;
  bgGradient: string;
  imageSeed: string;
}

export interface GalleryPhoto {
  id: string;
  imageSeed: string;
  caption: string;
  location: string;
  rotation: string;
}
