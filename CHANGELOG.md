# CHANGE LOG

## 0.1.1

Actually build the code before publishing (version bump)

## 0.1.0

Basic set of fingerprint data:

```ts
export interface Fingerprint {
  browserDepth: number;
  browserHeight: number;
  browserWidth: number;
  concurrency: number;
  os: string;
  plugins: string[];
  tzOffset: number;
  usesTouch: boolean;
  usesCookies: boolean;
}
```
