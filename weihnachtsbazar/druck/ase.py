#!/usr/bin/env python3
"""Schreibt affinity/Farben.ase (Adobe Swatch Exchange, in Affinity über Palette → Importieren)."""
import json, struct, sys
from pathlib import Path

AFF = Path(__file__).parent.parent / "affinity"
farben = json.loads((AFF / ".farben.json").read_text(encoding="utf-8"))

def block(typ, payload):
    return struct.pack(">HI", typ, len(payload)) + payload

def name_bytes(n):
    u = (n + "\0").encode("utf-16-be")
    return struct.pack(">H", len(u) // 2) + u

blocks = [block(0xC001, name_bytes("Weihnachtsbazar"))]
for n, h in farben:
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (1, 3, 5))
    blocks.append(block(0x0001, name_bytes(f"{n} {h.upper()}") + b"RGB " + struct.pack(">fffH", r, g, b, 2)))
blocks.append(block(0xC002, b""))
data = b"ASEF" + struct.pack(">HHI", 1, 0, len(blocks)) + b"".join(blocks)
(AFF / "Farben.ase").write_bytes(data)
(AFF / ".farben.json").unlink()
print(len(farben), "Farben ->", AFF / "Farben.ase")
