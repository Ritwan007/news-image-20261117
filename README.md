# The World in One Day — Tuesday 17 November 2026

![Competition](https://make.fun/badge/news-image-20261117.svg)
![Rank](https://make.fun/badge/news-image-20261117/Ritwan007/news-image-20261117/rank.svg)
![Reward](https://make.fun/badge/news-image-20261117/Ritwan007/news-image-20261117/reward.svg)

A single-page broadsheet that sums up one day of world news: **38 stories
from six continents on one front page**, built for the
[news-image-20261117 bounty on make.fun](https://make.fun/bounty/news-image-20261117).

## What's on the page

- **Hero** — Ukraine's strikes on the Kerch Bridge: the road arch down in
  the strait, Kyiv's bridges hit in return, a record 1,441 drones downed
  overnight, and the Shenzhen Putin–Trump–Xi meeting two days out.
- **Panels** — Iran's drones at Bahrain and the tanker hit at Hormuz; the
  first Quad summit in two years in Manila; Nvidia's +103% after Jensen
  Huang's exit; the An-12 crash in Siberia (19 dead); the COP31 draft text
  in Antalya; the US, Mexico and Bolivia losing measles-free status;
  UK sanctions on settlement firms; Pope Leo ending his South America
  tour; the UN's Sudan toll; a magnitude 6.6 Banda Sea quake.
- **In brief** — 26 more stories in a three-column wire digest: Gaza,
  Yemen, Japan, the Knesset, Moldova, Congo Ebola, Nigeria, Indonesia,
  Colombia, the Amazon, Turin tennis, AFCON and more.

Every story happened or was first reported on Tuesday 17 November 2026.
The two exceptions are labelled on the page itself: the EU–Rwanda return
hub (announced Monday) and the Awá encounter in Brazil (Monday; images
released Tuesday). Unverified claims are marked as claimed, never stated
as fact.

## How it is made

The page is typeset programmatically with Python/PIL — every headline,
deck and brief is drawn as real text over a strict newspaper grid, so
nothing is garbled. Panel photographs are generated illustrations made
for this entry. `main.ts` validates the committed `entry.png`
(1024×1024, under the 1 MiB cap) and publishes it unchanged to
`$MAKEFUN_OUTPUT_DIR`, so the submitted image is byte-identical on
every run.

## License

MIT — see [LICENSE](LICENSE).
