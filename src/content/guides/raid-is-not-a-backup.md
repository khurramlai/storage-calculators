---
title: "RAID Is Not a Backup: What It Protects Against and What It Doesn't"
description: "RAID keeps an array online when a drive dies. It does nothing about deletion, ransomware, corruption, theft or fire. Here is exactly where the line falls and what a real backup looks like."
summary: "The failure modes RAID covers, the far longer list it doesn't, and a minimal backup setup that closes the gap."
category: raid
published: 2026-09-10
calculators:
  - raid-storage-calculator
  - raid-6-storage-calculator
readingMinutes: 7
---

"RAID is not a backup" gets repeated so often that it has become background noise. People nod, then build a RAID 6 NAS, put the only copy of ten years of photos on it, and consider the problem solved. This guide is about *why* the phrase is true, in enough detail that you can decide what you actually need.

## What RAID is for

RAID has exactly one job: keep the volume available when one or more physical drives fail. It does this by storing redundant information (a mirror copy or parity) so a missing drive's contents can be reconstructed on the fly.

That's it. Everything RAID does well flows from that one job:

- A drive dies at 3 a.m. and nobody notices until the monitoring email. The NAS keeps serving files.
- You hot-swap the failed drive. The array rebuilds in the background. No restore, no downtime.
- On RAID 6, a second drive can die during that rebuild and you're still fine.

For a machine that has to stay up, this is enormously valuable. It is also the *only* thing it does.

## What RAID does not protect against

Every one of these has destroyed data on a perfectly healthy RAID array:

**Accidental deletion.** You delete the wrong folder. RAID faithfully mirrors or re-parities the deletion across every drive within milliseconds. There is no "old copy" anywhere in the array.

**Ransomware and malware.** Encryption is just a write. The array writes it to all drives with full redundancy. Your encrypted files are now extremely well protected against drive failure.

**Filesystem corruption.** A bug, a power cut mid-write on a controller without battery backup, a bad SATA cable flipping bits: the corruption is stored redundantly like everything else. Checksumming filesystems (ZFS, Btrfs) catch *some* of this, but only bit-rot on disk, not logical corruption written by the OS.

**Controller or NAS failure.** Hardware RAID arrays are often readable only by the same controller family. If the card dies and the replacement isn't compatible, the drives are fine and the data is inaccessible. Software RAID (mdadm, ZFS, Synology SHR) is more portable, but a NAS with a dead motherboard still means finding compatible hardware before you see your files again.

**Multiple simultaneous failures.** A power surge, a failing PSU, or a drive batch with a firmware bug can take out several drives at once. RAID 6 survives two. Three is gone.

**Theft, fire, flood.** The array is one box in one room.

**Human error during maintenance.** Pulling the wrong drive during a rebuild. Choosing "create new array" instead of "import foreign config". Both are common enough that vendors have support articles about them.

**Silent data corruption over time.** A bit flips on disk and nothing reads that sector for two years. Non-checksumming RAID has no way to know which copy is right, and a scrub may propagate the bad data.

## Why people confuse the two

RAID *feels* like a backup because it involves multiple copies. A mirror literally is two copies of every file. The difference is that both copies are online, writable, and updated together. A backup is a copy that is **separate in time** (it reflects an earlier state) and ideally **separate in place** (it lives somewhere else). A RAID mirror is separate in neither.

Snapshots (ZFS, Btrfs, Synology, QNAP) get you separation in time on the same box: you can roll back an accidental deletion or a ransomware run. They're excellent and you should turn them on. They still live on the same array, so they do nothing for the controller-failure, theft and fire cases.

## What a real backup looks like

The standard rule is **3-2-1**: three copies of the data, on two different types of media, with one copy off-site. For a home or small-office NAS that translates to something like:

| Copy | Where | Protects against |
| --- | --- | --- |
| 1. Primary | The RAID array | Drive failure (that's RAID's job) |
| 2. Local backup | A USB drive plugged into the NAS, or a second cheap NAS, with versioning | Deletion, ransomware, corruption, array failure |
| 3. Off-site | Cloud object storage or a drive at a relative's house | Theft, fire, flood, "everything in the building" |

The local backup is the one people skip, and it's the one that saves you most often. A single external drive with a nightly versioned backup job (Hyper Backup on Synology, HBS on QNAP, restic or Borg on anything) costs less than one of your array drives.

For the off-site copy, cold cloud storage is now cheap enough that price is no longer the objection. Storing 2 TB in S3 Glacier Deep Archive or Azure Archive costs on the order of $2 a month; the catch is that retrieval is slow and costs money, which is fine for a copy you hope never to need. The [AWS cold storage calculator](/aws-s3-cold-storage-calculator/) and [cloud storage cost calculator](/cloud-storage-cost-calculator/) will price your actual volume, including the retrieval fee for a full restore.

## What to do with the RAID level once you have backups

Once a real backup exists, RAID goes back to being a question of *availability* rather than *survival*, and you can size it accordingly:

- If a day of downtime while you restore from backup is acceptable, RAID 5 (or even RAID 0 for a scratch volume) is a reasonable trade for the extra capacity.
- If the box has to stay up, RAID 6 or RAID 10 buys you the rebuild window without panic. See [RAID 5 vs RAID 6 vs RAID 10](/guides/raid-5-vs-raid-6-vs-raid-10/) for how to choose.

And test the restore. A backup that has never been restored is a hypothesis. Pick a folder, delete it from the array, get it back from copy 2, then from copy 3. If either step surprises you, it's better to find out now.

## Checklist

- [ ] RAID level chosen for uptime, not as the only copy
- [ ] Snapshots enabled on the array, with a retention of at least a few weeks
- [ ] Nightly versioned backup to a separate local device
- [ ] Off-site copy of everything irreplaceable, even if it's only cold cloud storage
- [ ] A restore test in the last six months
- [ ] Monitoring that actually reaches you when a drive fails (email, push, anything you'll see)

That last item matters more than it looks. A RAID 6 array with one failed drive that nobody has noticed for four months is a RAID 5 array with a very worn second drive.
