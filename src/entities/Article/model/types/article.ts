import { User } from "@/entities/User";

export enum ArticleBlockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum ArticleView {
  SMALL = "SMALL",
  BIG = "BIG",
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  user: User;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
