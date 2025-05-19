declare module 'alpinejs' {
  interface Alpine {
    start(): void;
    data(name: string, callback: (...args: any[]) => any): void;
    store(name: string, data?: any): any;
  }

  const Alpine: Alpine;
  export default Alpine;
}