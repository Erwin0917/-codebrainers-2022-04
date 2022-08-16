export function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const timer = ms => new Promise(res => setTimeout(res, ms))
