import type { Achievement, Class, User, UserInventory, UserStats } from "../lib/types";
import { achievements, classes, userInventory, userStats, users } from "./dummy";

// Get a user by ID
export function getUserById(userId: string): User | undefined {
  return users.find((user) => user.id === userId);
}

// Get a user's stats by user ID
export function getUserStats(userId: string): UserStats | undefined {
  return userStats.find((stats) => stats.userId === userId);
}

// Get a user's inventory by user ID
export function getUserInventory(userId: string): UserInventory[] {
  return userInventory.filter((item) => item.userId === userId);
}

// Get a user's achievements by user ID
export function getUserAchievements(userId: string): Achievement[] {
  return achievements.filter((achievement) => achievement.userId === userId);
}

// Get a class by ID
export function getClassById(classId: string): Class | undefined {
  return classes.find((cls) => cls.id === classId);
}

// Get all users
export function getAllUsers(): User[] {
  return users;
}

// Get all classes
export function getAllClasses(): Class[] {
  return classes;
}
