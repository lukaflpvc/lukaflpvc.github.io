---
slug: pyzam
title: I built a Shazam for Mixtapes
pubDate: '2024-12-04'
---

I love mixtapes. You get to enter the artist's dream. Just as if you were in the room with them creating magic.

You get to listen new songs. Some of which you may add to your playlist.

But mixtapes don't vibe well with Shazam. Shazam on iPhone can't keep up with DJs. You don't have control over how long it searches nor how often.

That's why I built Pyzam.

## **Who is Pyzam for?**
- For DJs looking to integrate Shazam in their set.
- For hardcore mixtape fans looking to find new samples. 

## **Secrets discovered**
- Shazam takes up to 12 seconds of audio per request.
- Shazam's server limit reaches is at 20 requests per minute.

If you have ffmpeg and uv installed, try pyzam with one command:
```bash
uv run pyzam --speaker
```