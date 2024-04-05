export interface Feature {
  icon: string;
  title: string;
  details: string;
  id: number;
}

export interface HowItWorks {
  title: string;
  details: string;
  id: number;
}

export interface FooterLink {
  id: number;
  head: string;
  links: string[];
}

export interface AccountSetting {
  id: number;
  title: string;
  icon: string;
  showArr: boolean;
}

export interface Vid {
  id: number;
  title: string;
  poster: string;
  date: string;
}
