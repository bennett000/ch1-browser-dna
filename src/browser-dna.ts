import { Dictionary } from '@ch1/utility';

const w = window;

const localScreen = <any>w['screen'] || {};
const localNavigator = <any>w['navigator'] || {};
const localDocument = <any>w['document'] || {};

if (!localDocument['documentElement']) {
  localDocument['documentElement'] = {};
}

if (!localNavigator['plugins']) {
  localNavigator.plugins = [];
}
const plugins = Array.prototype.slice.call(localNavigator['plugins'], 0) || [];

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

export function create(): Fingerprint {
  return {
    browserDepth: localScreen['pixelDepth'] || 0,
    browserHeight: localScreen['height'] || 0,
    browserWidth: localScreen['width'] || 0,
    concurrency: localNavigator.hardwareConcurrency || 0,
    os: localNavigator['platform'] || localNavigator['oscpu'] || '',
    plugins: plugins
      .map((el: any) => el['name'] + '.' + el['description'])
      .join(','),
    tzOffset: new Date().getTimezoneOffset(),
    usesTouch:
      'ontouchstart' in localDocument['documentElement'] ? true : false,
    usesCookies: testCookies()
  };
}

function testCookies() {
  const name = 'ch1-test';
  let result: boolean;
  localDocument['cookie'] = `${name}=5`;

  if (parseInt(getCookie(name), 10) === 5) {
    result = true;
  } else {
    result = false;
  }
  deleteCookie(name);

  return result;
}

function getCookie(name: string) {
  const cookies = localDocument['cookie'] || '';
  const db = cookies.split(';').reduce((s: Dictionary<string>, el: string) => {
    const halves = el.split('=').filter(Boolean);
    if (halves.length !== 2) {
      return s;
    }
    s[halves[0]] = halves[1];
    return s;
  }, {});

  return db[name];
}

function deleteCookie(name: string) {
  if (getCookie(name)) {
    localDocument['cookie'] =
      name + '=null;expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
}
