import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function calculateSale(price: number, percent: number) {
    return Math.round((price * ((100 - percent)*0.01))*100)/100
}
