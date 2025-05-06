import type { PinoLogger } from "hono-pino";

export interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

export type User = {
  id: string;
  name: string;
  email: string;
  classId: string;
};

export type Class = {
  id: string;
  name: string;
  description: string;
  baseStats: {
    strength: number;
    agility: number;
    intelligence: number;
  };
};

export type UserStats = {
  id: string;
  userId: string;
  strength: number;
  agility: number;
  intelligence: number;
};

export type UserInventory = {
  id: string;
  userId: string;
  itemName: string;
  quantity: number;
};

export type Achievement = {
  id: string;
  userId: string;
  title: string;
  description: string;
  achievedAt: string; // ISO date string
};
