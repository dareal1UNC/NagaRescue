# NAGA RESCUE - Maps Replacement Summary

## Current Situation

The NAGA RESCUE web application currently uses a single map image across 4 different components:

**Current Map Asset:** `figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png`

### Components Using This Map:

1. **Dashboard CDRRMO** (`/components/DashboardCdrrmo.tsx`)
   - Main monitoring dashboard map
   - Shows evacuation centers and alert zones
   - Display size: ~1920x560px area

2. **Barangay EWS Monitoring** (`/components/BarangayEwsMonitoring.tsx`)
   - Full-screen early warning system map
   - Display size: 1440x924px minimum
   - Includes alert marker overlays

3. **Evacuation Monitoring** (`/components/EvacuationMonitoring.tsx`)
   - Evacuation center tracking map
   - Responsive container
   - Pannable/scrollable

4. **S.A.R.U Monitoring** (`/components/SaruMonitoring.tsx`)
   - Small preview map in operation cards
   - Display size: ~400x220px

## What You Need to Do

### 1. Generate New Map in Mapsicle

**Location:** Naga City, Camarines Sur, Philippines (13.6218° N, 123.1948° E)

**Recommended Settings:**
- **Size:** 1920 x 1080 pixels (minimum)
- **Zoom:** Level 13-14 (city-wide view)
- **Style:** Light/Street map (neutral colors)
- **Format:** PNG, high quality

**Map Should Show:**
- Central Naga City area
- Major roads and streets
- Barangay areas
- Key landmarks
- Naga River (if visible)

**Color Requirements:**
- Light, neutral background
- Compatible with blue UI elements (#3FA9F5)
- Clear road visibility
- Readable labels

### 2. Import to Figma

1. Add the Mapsicle-generated PNG to your Figma file
2. Note the new Figma asset ID that gets generated
3. The asset ID will look like: `figma:asset/[HASH].png`

### 3. Update Code

Replace the old asset ID in these 4 files:

```typescript
// OLD (all 4 files currently use this):
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";

// NEW (replace with your Mapsicle asset ID):
import imgMap from "figma:asset/[YOUR_NEW_ASSET_ID].png";
```

**Files to update:**
- Line 2 in `/components/DashboardCdrrmo.tsx` (variable: `imgMaps`)
- Line 2 in `/components/BarangayEwsMonitoring.tsx` (variable: `imgMap`)
- Line 2 in `/components/EvacuationMonitoring.tsx` (variable: `imgMap`)
- Line 3 in `/components/SaruMonitoring.tsx` (variable: `imgMap`)

## Important Notes

### Map Image Requirements:
- ✅ High resolution (1920x1080 or larger)
- ✅ PNG format
- ✅ Light/neutral color scheme
- ✅ Clear street labels
- ✅ Compatible with overlay markers (blue, yellow, orange, red)

### Overlay Markers:
The map needs to work well with these elements placed on top:
- **Blue house icons** (#3FA9F5) - Evacuation centers
- **Colored pins** - Alert levels (yellow, orange, red)
- **Blue pins** (#3FA9F5) - S.A.R.U units

### Responsive Behavior:
The same map image is used across different screen sizes:
- Desktop: Full size
- Tablet: Scaled down
- Mobile: Further scaled, may be cropped

The map should remain readable and markers should stay visible at all sizes.

## Quick Start Steps

1. **Open Mapsicle in Figma**
2. **Search for "Naga City, Philippines"**
3. **Set zoom to 13-14**
4. **Choose light street map style**
5. **Generate 1920x1080 PNG**
6. **Import PNG to Figma file**
7. **Copy the new asset ID**
8. **Replace asset ID in 4 component files**
9. **Test in browser**

## Verification Checklist

After replacement, check:
- [ ] Map displays in Dashboard CDRRMO
- [ ] Map displays in Barangay EWS Monitoring  
- [ ] Map displays in Evacuation Monitoring
- [ ] Map displays in S.A.R.U Monitoring
- [ ] Marker overlays are visible and positioned correctly
- [ ] Map is readable on desktop, tablet, mobile
- [ ] No console errors
- [ ] Colors complement blue UI theme

## Documentation Files Created

I've created 3 detailed documentation files to help you:

1. **MAP_REQUIREMENTS.md** - Detailed specifications for each map use case
2. **MAPSICLE_IMPLEMENTATION_GUIDE.md** - Step-by-step implementation instructions
3. **MAPS_REPLACEMENT_SUMMARY.md** - This quick reference guide

## Need Help?

If you encounter issues:
- Check the MAPSICLE_IMPLEMENTATION_GUIDE.md for troubleshooting
- Verify the Figma asset ID is correct
- Ensure the PNG was properly imported to Figma
- Test with different `object-fit` CSS values if aspect ratio is off

---

**Current Status:** Ready for Mapsicle map generation
**Next Action:** Generate map in Mapsicle extension with the specifications above
