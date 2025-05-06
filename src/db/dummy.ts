import type { Achievement, Class, User, UserInventory, UserStats } from "../lib/types";

export const users: User[] = [
  {
    id: "user_1",
    name: "Alice",
    email: "alice@example.com",
    classId: "class_wizard",
  },
  {
    id: "user_2",
    name: "Bob",
    email: "bob@example.com",
    classId: "class_warrior",
  },
];

export const classes: Class[] = [
  {
    id: "class_wizard",
    name: "Wizard",
    description: "Masters of magic and intelligence.",
    baseStats: {
      strength: 5,
      agility: 7,
      intelligence: 15,
    },
  },
  {
    id: "class_warrior",
    name: "Warrior",
    description: "Brave fighters excelling in strength.",
    baseStats: {
      strength: 15,
      agility: 8,
      intelligence: 5,
    },
  },
  {
    id: "class_assassin",
    name: "Assassin",
    description: "Stealthy and agile killers.",
    baseStats: {
      strength: 8,
      agility: 15,
      intelligence: 7,
    },
  },
];

export const userStats: UserStats[] = [
  {
    id: "stat_1",
    userId: "user_1",
    strength: 5,
    agility: 7,
    intelligence: 15,
  },
  {
    id: "stat_2",
    userId: "user_2",
    strength: 15,
    agility: 8,
    intelligence: 5,
  },
];

export const userInventory: UserInventory[] = [
  {
    id: "inventory_1",
    userId: "user_1",
    itemName: "Magic Staff",
    quantity: 1,
  },
  {
    id: "inventory_2",
    userId: "user_2",
    itemName: "Sword",
    quantity: 1,
  },
];

export const achievements: Achievement[] = [
  {
    id: "achievement_1",
    userId: "user_1",
    title: "First Spell Cast",
    description: "Cast your first spell as a wizard.",
    achievedAt: new Date().toISOString(),
  },
  {
    id: "achievement_2",
    userId: "user_2",
    title: "First Battle Won",
    description: "Win your first battle as a warrior.",
    achievedAt: new Date().toISOString(),
  },
];
