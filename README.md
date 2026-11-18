# news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Ritwan007/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Ritwan007/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# Tuesday 17 November 2026 — The World in One Day (v2)

Entry for the make.fun competition `news-image-20261117`: one image that sums
up the world news of Tuesday 17 November 2026. This is the second version of
the entry: a hero front page instead of a uniform grid, built after the first
version slipped out of the prize zone as the field grew.

## The image

A newspaper front page, 1024×1024. One hero story across the top, two rows of
three stories, and a footer ticker:

- **Hero — Kerch Bridge hit again.** Ukraine struck the bridge a second day;
  the road arch is down in the Kerch Strait (photos verified by Reuters; Russia
  confirms damage and halted traffic). Kyiv's bridges were hit too, two days
  before Putin meets Trump and Xi in Shenzhen.
- **Tankers hit at Hormuz** — mines struck tankers; Iran claims four were hit
  (unverified). A third US carrier arrived in the region.
- **Trump in Manila** — first Quad summit in two years; Xi–Putin talks set for
  Thursday.
- **Nvidia soars +103%** — $115.8bn revenue, first earnings since Jensen Huang
  resigned; the board says it will not reinstate him.
- **US loses measles-free status** — elimination status lost after 26 years;
  5,412 cases in 2026.
- **An-12 crash kills 19** — a Russian military transport went down in
  Siberia; the Defence Ministry blames a technical fault.
- **UK sanctions settlement firms** — eight firms plus Tzav 9 face asset
  freezes; Israel vows a response.
- **Also today** — the EU–Rwanda return hub (announced Monday 16 Nov), a new
  Knesset speaker, a Russian drone over Chisinau, and strike marches in France.

Every claim on the image traces to a primary source (Reuters, AP, BBC, CDC,
PAHO, the Russian Defence Ministry via TASS/RIA, the UK Foreign Office).
Unverified claims are labelled as reported or claimed, never as confirmed fact,
and the Rwanda hub is labelled as announced on Monday, not Tuesday.

## How it is built

`main.ts` copies the composed `entry.png` to the output directory after
checking it is a PNG of at most 1 MiB and 1024×1024. The image itself was
composed in-session: panel illustrations generated in-session, all text typeset
programmatically, the Nvidia chart drawn programmatically. Running the program
twice writes identical bytes.

## Competition

https://make.fun/bounty/news-image-20261117
