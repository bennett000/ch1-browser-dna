# CH1 Browser DNA

[![CircleCI](https://circleci.com/gh/bennett000/ch1-browser-dna.svg?style=svg)](https://circleci.com/gh/bennett000/ch1-browser-dna)

_This is not well maintained_

## Installation

`yarn add @ch1/browser-dna`

## What is This

This is a simple browser finger print generator that focuses on the
JavaScript side of browser finger printing.

For full fledged fingerprinting, server side solutions should also be
used. They would look at HTTP headers, IPs, and if they have access to
lower protocols even OS fingerprinting.

## Morality of Browser Fingerprinting

Fingerprinting can be a hot button topic and for good reason. Privacy on
the internet is an illusion. We should expect some modicum of privacy but
we should also be aware of the limitations of the tools we use. This library
and other - more robust - libraries like [Panopticlick](https://github.com/EFForg/panopticlick-python 'Panopticlick EFF')
show just how much trivial seeming data we give away that actually "marks"
us.

Ultimately your fingerprint from a library like this, in combination with an
IP address is not _really_ enough to uniquely identify most people but it
_really_ shrinks the pool, especially in certain areas.

### Why Would We Want This?

While we want and should have privacy there is a strong use case for having
our connections be semi-identifiable.

Consider the following:

- You run a web service of some sort
- You're getting a _lot_ of connections from one IP
- The IP represents a huge institution that has a lot of legitimate users
  but due to NAT they all appear as one user

This is where at least fingerprinting headers and connection detail server
side helps.

Another case would be implementing an app that uses semi-anonymous sharing
having a JS + server side fingerprint would allow the app to _somewhat_
distinguish anonymous connections for the purpose of say short term chat.

## Usage

```ts
import { create } from '@ch1/browser-dna';

const fingerprint = create();

// now send fingerprint to a server
```

The current fingerprint only includes this set:

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

## License

[LGPL](./LICENSE 'Lesser GNU Public License')
