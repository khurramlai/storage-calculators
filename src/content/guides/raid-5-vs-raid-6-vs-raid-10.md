---
title: "RAID 5 vs RAID 6 vs RAID 10: Which One for Your NAS"
description: "A practical comparison of the three RAID levels people actually choose between, with capacity tables, rebuild-risk math, and a decision rule you can apply in one minute."
summary: "Capacity, fault tolerance, rebuild risk and write performance compared side by side, with a simple rule for picking one."
category: raid
published: 2026-09-10
calculators:
  - raid-storage-calculator
  - raid-5-storage-calculator
  - raid-6-storage-calculator
  - raid-10-storage-calculator
readingMinutes: 9
---

If you have four or more drives and you're not sure which RAID level to use, the honest answer is that it depends on three things: how much capacity you're willing to give up, how many simultaneous drive failures you need to survive, and how big the drives are. That last one matters far more than most guides admit, and it's the reason advice from 2012 is now wrong.

This guide compares the three levels that come up in practice for a NAS or a small server. RAID 0 (no redundancy) and RAID 1 (a plain mirror) are covered briefly at the end because they're rarely the right call above two drives.

## The one-paragraph version

**RAID 10** is the safest and fastest option for writes, and it costs you half your raw capacity. **RAID 6** survives any two drive failures and costs you two drives' worth of capacity. **RAID 5** costs you one drive and survives one failure, which was fine when drives were 1 TB and is now a gamble when they're 16 TB. If you're buying drives of 8 TB or larger today, choose between RAID 6 and RAID 10 and treat RAID 5 as a legacy option.

## How each level stores data

Every RAID level is a rule for spreading data across drives so that losing a drive doesn't lose data.

**RAID 5** stripes data across all drives and writes one block of *parity* per stripe. Parity is a checksum: if any single drive disappears, its contents can be recomputed from the others. The parity rotates around the drives so no single drive becomes a bottleneck. Capacity is (N − 1) drives.

**RAID 6** is RAID 5 with a second, mathematically independent parity block per stripe. Any two drives can fail. Capacity is (N − 2) drives.

**RAID 10** pairs drives into mirrors, then stripes across the mirrors. Each pair holds two copies of the same data. It survives one failure per pair: in the best case that's half the drives, in the worst case it's one failure followed by a second failure in the same pair. Capacity is N / 2 drives.

## Capacity comparison

Usable capacity for a set of equal drives. Figures are decimal terabytes (the number on the box); a filesystem will show roughly 9% less because it reports in TiB. See [why your 4 TB drive shows 3.6 TB](/guides/tb-vs-tib-why-your-drive-is-smaller/) if that's new to you.

| Drives | Drive size | RAID 5 usable | RAID 6 usable | RAID 10 usable |
| --- | --- | --- | --- | --- |
| 4 | 4 TB | 12 TB | 8 TB | 8 TB |
| 4 | 8 TB | 24 TB | 16 TB | 16 TB |
| 4 | 16 TB | 48 TB | 32 TB | 32 TB |
| 6 | 8 TB | 40 TB | 32 TB | 24 TB |
| 6 | 16 TB | 80 TB | 64 TB | 48 TB |
| 8 | 8 TB | 56 TB | 48 TB | 32 TB |
| 8 | 16 TB | 112 TB | 96 TB | 64 TB |
| 12 | 16 TB | 176 TB | 160 TB | 96 TB |

Two things stand out. At four drives, RAID 6 and RAID 10 give you exactly the same capacity, so the choice between them is purely about failure modes and performance. And as the drive count grows, RAID 6's overhead shrinks (two drives out of twelve is 17%) while RAID 10's stays at 50%. That's why large arrays are almost always RAID 6 or its nested cousin RAID 60, and why RAID 10 stays popular only in small, performance-sensitive arrays.

## Fault tolerance is not the same as safety

The spec-sheet number, "survives one failure" or "survives two failures", describes the array at the moment of the failure. What actually matters is whether you get through the *rebuild* without a second problem.

When a drive fails in RAID 5, the array is running with zero redundancy until you swap the drive and the controller finishes rebuilding it. During that window, the array reads every byte of every surviving drive to reconstruct the missing one. Two things can go wrong:

1. **A second drive fails.** Drives in the same array are usually the same model, bought at the same time, running at the same temperature with the same workload. Correlated failures are common enough that every experienced storage admin has a story about it.
2. **An unrecoverable read error (URE) on a surviving drive.** Consumer drives are typically rated at one URE per 10^14 bits read; NAS and enterprise drives at 10^15. Reading 10^14 bits is 12.5 TB. A RAID 5 rebuild of an array with 3 × 8 TB surviving drives reads 24 TB. On a 10^14-rated drive, the odds of hitting at least one URE during that rebuild are uncomfortable; on the older, cheaper drives many home NAS boxes are stocked with, they're worse.

A URE during a RAID 5 rebuild doesn't necessarily kill the array on a modern controller (most will mark the affected file bad and continue), but on older hardware RAID cards it can abort the whole rebuild. RAID 6 sidesteps the problem entirely: with one drive gone you still have one parity block per stripe, so a read error on another drive during rebuild is correctable.

Rebuild time is the other half of this. A full rebuild runs at roughly the drive's sequential write speed, minus contention from whatever else is using the array. Rough figures:

| Drive size | Idle rebuild | Rebuild under normal load |
| --- | --- | --- |
| 4 TB | 6–8 hours | 12–24 hours |
| 8 TB | 12–16 hours | 1–2 days |
| 16 TB | 24–30 hours | 2–4 days |
| 20 TB | 30–40 hours | 3–5 days |

Three days of running with no redundancy on an array you depend on is the real argument against RAID 5 with large drives.

RAID 10 rebuilds differently. Rebuilding a failed drive only involves copying its mirror partner, not reading the entire array. It's faster, it stresses only one other drive, and a URE on that partner is the only thing that can hurt you. The catch is that the partner is the one drive you *can't* afford to lose, and it's now being read end-to-end.

## Write performance

For a home NAS streaming media, none of this matters; a single drive saturates a gigabit link. For a VM datastore, a database, or a surveillance recorder with 30+ cameras, it does.

- **RAID 5** has a "write penalty" of 4: every small random write turns into two reads (old data, old parity) and two writes (new data, new parity). Sequential writes are fine because full stripes can be written in one go.
- **RAID 6** has a write penalty of 6, for the same reason plus the second parity block.
- **RAID 10** has a write penalty of 2 (write to both mirrors) and no parity computation. Random write performance is the best of the three by a wide margin.

Hardware RAID cards with a battery-backed write cache hide much of the parity penalty. Software RAID (mdadm, ZFS RAID-Z, Synology SHR, QNAP) does not, which is why RAID 10 is the standard advice for anything with a heavy random-write workload on a NAS.

Read performance is broadly similar across all three: all drives contribute to sequential reads, and RAID 10 has a slight edge on random reads because either mirror can serve a request.

## Which one to pick

A rule that holds up well:

1. **Drives 8 TB or larger, or you can't tolerate a day of no-redundancy exposure:** RAID 6. Above six drives this is also the most capacity-efficient safe choice.
2. **Four drives and a write-heavy workload (VMs, databases, many cameras):** RAID 10. Same capacity as RAID 6 at four drives, much faster writes, quicker rebuild.
3. **Small drives (4 TB or less), three drives, or a scratch array where a rebuild failure would cost you a re-download rather than real data:** RAID 5 is acceptable. Have a backup regardless.
4. **Two drives:** RAID 1. It's a mirror; there's nothing else sensible to do with two drives.
5. **Speed only, data you can regenerate:** RAID 0. No redundancy at all; one failure loses everything on the array.

If you're on a Synology or QNAP box, their hybrid RAID (SHR, SHR-2) follows the same logic: SHR-1 behaves like RAID 5, SHR-2 like RAID 6, with the added ability to mix drive sizes.

## A worked example

Suppose you have a 6-bay NAS and a budget for six 12 TB NAS-class drives, and the box will store family photos, a media library, and Time Machine backups for three laptops.

- RAID 5: 60 TB usable, one-drive tolerance, 20–30 hour rebuild. Rejected: 12 TB drives put a rebuild squarely in the risky zone.
- RAID 10: 36 TB usable, tolerates one failure per pair, fast rebuilds. Rejected: the workload is mostly sequential reads and nightly backup writes, which don't need RAID 10's write performance, and 24 TB of capacity is a lot to give up.
- **RAID 6: 48 TB usable, any two drives can fail, and a URE during rebuild is survivable.** This is the answer for almost everyone in this position.

Then, separately, set up a backup of anything irreplaceable to a second location. RAID handles drive failure; it does nothing for accidental deletion, ransomware, theft, fire, or a controller that corrupts the array. That's covered in [RAID is not a backup](/guides/raid-is-not-a-backup/).

## Nested levels: RAID 50 and RAID 60

For arrays above about twelve drives, controllers offer RAID 50 (stripes across several RAID 5 groups) and RAID 60 (stripes across RAID 6 groups). The point is to keep rebuilds local to one group: a failed drive in a 24-drive RAID 60 with four groups only involves the six drives in its group. The [RAID calculator](/raid-storage-calculator/) models both, including the stripe-group count.

## Summary table

| | RAID 5 | RAID 6 | RAID 10 |
| --- | --- | --- | --- |
| Minimum drives | 3 | 4 | 4 |
| Capacity | N − 1 | N − 2 | N / 2 |
| Guaranteed failures survived | 1 | 2 | 1 |
| Best-case failures survived | 1 | 2 | N / 2 |
| Rebuild reads | entire array | entire array | one mirror partner |
| Random write penalty | 4× | 6× | 2× |
| Sensible with 8 TB+ drives | No | Yes | Yes |
| Typical use | Legacy, small drives | NAS, archives, backups | VMs, databases, big camera counts |

Run your own drive count and size through the [RAID calculator](/raid-storage-calculator/) to see capacity, parity overhead and fault tolerance for each level side by side.
