// Notify IndexNow (Bing, Yandex, et al.) that URLs changed.
//
//   node scripts/indexnow.mjs --all          # submit every URL from sitemap.txt
//   node scripts/indexnow.mjs <url> [<url>…]  # submit only the given URL(s)
//
// PREFERRED going forward: pass only the affected URLs after an update — do NOT
// use --all for routine changes (that's only for first-time / full re-submits).
//
// The IndexNow key is public by design (it's hosted at KEY_LOCATION so engines
// can verify ownership), so it lives in the repo — it is not a secret.
const KEY = "1d727fb5785d4fc1883f37e86fa27015";
const HOST = "fileshrinking.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

async function getAllUrls() {
  const res = await fetch(`https://${HOST}/sitemap.txt`);
  if (!res.ok) throw new Error(`Could not read sitemap.txt (${res.status})`);
  const text = await res.text();
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter((u) => u.startsWith("http"));
}

async function submit(urls) {
  // IndexNow allows up to 10,000 URLs per request; chunk defensively anyway.
  const CHUNK = 10000;
  for (let i = 0; i < urls.length; i += CHUNK) {
    const batch = urls.slice(i, i + CHUNK);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: batch,
      }),
    });
    const note = await res.text().catch(() => "");
    console.log(
      `IndexNow → ${res.status} ${res.statusText} for ${batch.length} URL(s)${note ? `: ${note}` : ""}`,
    );
    if (!res.ok) process.exitCode = 1;
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    "Usage: indexnow.mjs --all | <url> [<url>…]  (pass specific URLs for updates; --all is for full re-submits only)",
  );
  process.exit(1);
}
const urls = args[0] === "--all" ? await getAllUrls() : args;

if (urls.length === 0) {
  console.log("No URLs to submit.");
  process.exit(0);
}
console.log(`Submitting ${urls.length} URL(s) to IndexNow…`);
await submit(urls);
