/**
 * Domains treated as "reputable" for onboarding: no per-domain daily send cap.
 * Others are limited (see firebaseServices onboardingDomainDailySends).
 * All entries lowercase; checked against the part after @.
 */
const REPUTABLE_DOMAINS = new Set<string>([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "ymail.com",
  "rocketmail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "zoho.com",
  "gmx.com",
  "gmx.de",
  "gmx.net",
  "gmx.at",
  "web.de",
  "t-online.de",
  "mail.com",
  "email.com",
  "yandex.com",
  "yandex.ru",
  "qq.com",
  "163.com",
  "126.com",
  "sina.com",
  "foxmail.com",
  "fastmail.com",
  "fastmail.fm",
  "tutanota.com",
  "tutamail.com",
  "hey.com",
  "btinternet.com",
  "sky.com",
  "virginmedia.com",
  "talktalk.net",
  "orange.fr",
  "free.fr",
  "laposte.net",
  "sfr.fr",
  "wanadoo.fr",
  "bigpond.com",
  "optusnet.com.au",
  "iinet.net.au",
  "rogers.com",
  "bell.net",
  "shaw.ca",
  "telus.net",
  "comcast.net",
  "verizon.net",
  "att.net",
  "sbcglobal.net",
  "cox.net",
  "charter.net",
  "earthlink.net",
  "juno.com",
  "netzero.net",
  "mailbox.org",
  "posteo.de",
  "posteo.net",
  "startmail.com",
  "runbox.com",
  "hushmail.com",
  "mailfence.com",
  "kolabnow.com",
  "riseup.net",
  "disroot.org",
  "autistici.org",
  "vodafone.de",
  "o2online.de",
  "arcor.de",
  "freenet.de",
  "bluewin.ch",
  "sunrise.ch",
  "hispeed.ch",
  "libero.it",
  "virgilio.it",
  "alice.it",
  "tin.it",
  "terra.com.br",
  "uol.com.br",
  "bol.com.br",
  "ig.com.br",
  "r7.com",
  "naver.com",
  "daum.net",
  "hanmail.net",
  "nate.com",
  "rediffmail.com",
  "indiatimes.com",
  "india.com"
]);

export function getEmailDomain(email: string): string {
  const normalized = email.trim().toLowerCase();
  const at = normalized.lastIndexOf("@");
  if (at === -1 || at === normalized.length - 1) {
    return "";
  }
  return normalized.slice(at + 1);
}

export function isReputableEmailDomain(email: string): boolean {
  const domain = getEmailDomain(email);
  if (!domain) return false;
  return REPUTABLE_DOMAINS.has(domain);
}
