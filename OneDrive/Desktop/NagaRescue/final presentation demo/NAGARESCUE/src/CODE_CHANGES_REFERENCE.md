# Code Changes Reference - Map Asset Replacement

## Overview
Replace the map asset ID in 4 component files. Each file imports the same old map image that needs to be replaced with your new Mapsicle-generated map.

---

## File 1: /components/DashboardCdrrmo.tsx

### Location: Line 2

**BEFORE:**
```typescript
import svgPaths from "../imports/svg-e2vgxlsqn9";
import imgMaps from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**AFTER:**
```typescript
import svgPaths from "../imports/svg-e2vgxlsqn9";
import imgMaps from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**Variable Name:** `imgMaps` (note: slightly different naming)
**Used At:** Line ~477
**Usage Context:**
```typescript
<img alt="" className="absolute inset-0 w-full h-full object-contain rounded-[10px]" src={imgMaps} />
```

**Purpose:** Main dashboard map showing evacuation centers and alert zones

---

## File 2: /components/BarangayEwsMonitoring.tsx

### Location: Line 2

**BEFORE:**
```typescript
import svgPaths from "../imports/svg-ssf89hyup6";
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**AFTER:**
```typescript
import svgPaths from "../imports/svg-ssf89hyup6";
import imgMap from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**Variable Name:** `imgMap`
**Used At:** Line ~205
**Usage Context:**
```typescript
<img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[10px]" src={imgMap} />
```

**Purpose:** Full-screen Early Warning System monitoring map with alert markers

---

## File 3: /components/EvacuationMonitoring.tsx

### Location: Line 2

**BEFORE:**
```typescript
import svgPaths from "../imports/svg-zqepomte28";
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**AFTER:**
```typescript
import svgPaths from "../imports/svg-zqepomte28";
import imgMap from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**Variable Name:** `imgMap`
**Used At:** Line ~332
**Usage Context:**
```typescript
<img 
  alt="" 
  className="absolute inset-0 w-full h-full object-cover rounded-[10px] select-none" 
  src={imgMap}
  draggable={false}
/>
```

**Purpose:** Evacuation center locations and monitoring zones with pan/scroll capability

---

## File 4: /components/SaruMonitoring.tsx

### Location: Line 3

**BEFORE:**
```typescript
import svgPathsSaru from "../imports/svg-yj7eu8etpg";
import svgPaths from "../imports/svg-e2vgxlsqn9";
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**AFTER:**
```typescript
import svgPathsSaru from "../imports/svg-yj7eu8etpg";
import svgPaths from "../imports/svg-e2vgxlsqn9";
import imgMap from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
import imgEllipse2 from "figma:asset/ff682fa3746df7af2a975dad88ddd1a1f4c109f8.png";
```

**Variable Name:** `imgMap`
**Used At:** Line ~415
**Usage Context:**
```typescript
<img alt="map" className="absolute inset-0 w-full h-full object-cover" src={imgMap} />
```

**Purpose:** Small preview map in S.A.R.U operation details card (~220px height)

---

## Quick Replace Instructions

### Using Find & Replace (Recommended):

**Search for:**
```
figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png
```

**Replace with:**
```
figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png
```

**Files to modify:**
1. `/components/DashboardCdrrmo.tsx`
2. `/components/BarangayEwsMonitoring.tsx`
3. `/components/EvacuationMonitoring.tsx`
4. `/components/SaruMonitoring.tsx`

### Important Notes:

1. **Keep the import structure** - Only replace the asset ID hash, keep everything else the same
2. **Preserve the `.png` extension** - Don't forget to include it in the new asset ID
3. **Use the correct format** - Must be `figma:asset/[HASH].png` format
4. **Variable naming** - Note that DashboardCdrrmo uses `imgMaps` (plural) while others use `imgMap` (singular)
5. **Don't modify other imports** - Only change the map import line, leave other imports unchanged

---

## Verification Commands

After making changes, search for the old asset ID to ensure it's fully replaced:

**Search in all files:**
```
62afce6bb9b53d5a0d9a806233abec2803457dff
```

**Expected result:** Should find 0 matches in `/components/` directory

**Search for new asset ID:**
```
[YOUR_NEW_MAPSICLE_ASSET_ID]
```

**Expected result:** Should find 4 matches (one in each component file)

---

## Asset ID Format

### Old Asset ID (Current):
```
62afce6bb9b53d5a0d9a806233abec2803457dff
```

### New Asset ID (From Mapsicle):
Your new asset ID will be a similar hexadecimal hash generated by Figma when you import the Mapsicle map image. It will look something like:

```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
```

(This is just an example - your actual ID will be different)

### Complete Import Statement Format:
```typescript
import imgMap from "figma:asset/[40-CHARACTER-HEX-HASH].png";
```

---

## Testing After Changes

1. **Save all 4 modified files**
2. **Restart development server** (if needed)
3. **Navigate to each page:**
   - Dashboard (home page after login)
   - Barangay EWS Monitoring
   - Evacuation Monitoring
   - S.A.R.U Monitoring
4. **Verify map appears** in each view
5. **Check marker overlays** are visible and positioned correctly
6. **Test responsive behavior** on different screen sizes

---

## Rollback Instructions

If you need to revert to the old map:

**Replace:**
```
figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png
```

**With original:**
```
figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png
```

In all 4 component files.

---

## Summary

**Total Files to Modify:** 4
**Total Lines to Change:** 4 (one per file)
**Type of Change:** Asset ID replacement only
**Risk Level:** Low (only changing image source)
**Testing Required:** Visual verification across 4 pages
**Estimated Time:** 5-10 minutes

---

**Ready to implement?** Follow these steps:
1. Generate map in Mapsicle
2. Import to Figma and get asset ID
3. Replace asset ID in 4 files (see above)
4. Test all 4 pages
5. Done! ✓
