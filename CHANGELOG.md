# CHANGE LOG

## 0.1.0

Basic set of fingerpint data:

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
