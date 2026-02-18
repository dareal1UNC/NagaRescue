# Mapsicle Map Replacement - Implementation Guide

## Step 1: Generate Maps in Mapsicle

### Using the Mapsicle Figma Extension:

1. **Open Figma and launch the Mapsicle extension**

2. **Set the location:**
   - Search for: "Naga City, Camarines Sur, Philippines"
   - Or use coordinates: 13.6218° N, 123.1948° E

3. **Configure Map Style:**
   - Style: Light/Street view (Mapbox Light or similar)
   - Zoom Level: 13-14 (for city-wide coverage)
   - Ensure the map shows:
     - Downtown Naga City (central area)
     - Major barangays
     - Main roads and landmarks
     - Naga River if visible

4. **Generate Primary Map Image:**
   - **Dimensions:** 1920 x 1080 pixels (or larger for high-res)
   - **Export as:** PNG
   - **File name:** `naga-city-main-map.png`
   - **Quality:** Maximum/High
   - **Color:** Light neutral theme compatible with blue UI (#3FA9F5)

5. **Optional - Generate Detailed Map (if needed):**
   - Increase zoom to level 15-16 for more detail
   - **Dimensions:** 2048 x 1280 pixels
   - **File name:** `naga-city-detail-map.png`

## Step 2: Import Maps to Figma

1. **In your Figma file:**
   - Create a new frame or use existing map frame
   - Drag and drop the generated map PNG file(s)
   - The maps will be imported as image assets

2. **Get the Figma Asset IDs:**
   - Select the imported map image
   - Right-click → Copy/Paste as → Copy as PNG
   - Or note the asset hash that Figma generates

## Step 3: Update React Application Code

### Files to Modify:

#### 1. `/components/DashboardCdrrmo.tsx`
**Current (Line 2):**
```typescript
import imgMaps from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
```

**Replace with:**
```typescript
import imgMaps from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
```

**Location in file:** Line 2, used at line 477

---

#### 2. `/components/BarangayEwsMonitoring.tsx`
**Current (Line 2):**
```typescript
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
```

**Replace with:**
```typescript
import imgMap from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
```

**Location in file:** Line 2, used at line 205

---

#### 3. `/components/EvacuationMonitoring.tsx`
**Current (Line 2):**
```typescript
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
```

**Replace with:**
```typescript
import imgMap from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
```

**Location in file:** Line 2, used at line 332

---

#### 4. `/components/SaruMonitoring.tsx`
**Current (Line 3):**
```typescript
import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";
```

**Replace with:**
```typescript
import imgMap from "figma:asset/[YOUR_NEW_MAPSICLE_ASSET_ID].png";
```

**Location in file:** Line 3, used at line 415

---

## Step 4: Verify Asset Integration

### Check the following in each file:

#### DashboardCdrrmo.tsx (Line ~477):
```typescript
<img alt="" className="absolute inset-0 w-full h-full object-contain rounded-[10px]" src={imgMaps} />
```
- ✅ `object-contain` ensures proper aspect ratio
- ✅ Map fills container with 560px height
- ✅ Blue border overlay markers (evacuation centers and alerts)

#### BarangayEwsMonitoring.tsx (Line ~205):
```typescript
<img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[10px]" src={imgMap} />
```
- ✅ `object-cover` fills 1440x924px container
- ✅ Map supports marker overlays at specific positions
- ✅ Full-screen scrollable view

#### EvacuationMonitoring.tsx (Line ~332):
```typescript
<img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[10px] select-none" src={imgMap} />
```
- ✅ `object-cover` with responsive container
- ✅ Non-draggable (`draggable={false}`)
- ✅ Supports warning/alert marker overlays

#### SaruMonitoring.tsx (Line ~415):
```typescript
<img alt="map" className="absolute inset-0 w-full h-full object-cover" src={imgMap} />
```
- ✅ Small preview size (220px height)
- ✅ `object-cover` maintains aspect ratio
- ✅ Used in operation details card

## Step 5: Test Responsiveness

After updating, verify the maps work correctly across different screen sizes:

### Desktop (1920px+):
- [ ] Dashboard map displays clearly with markers visible
- [ ] Barangay EWS full-screen map is readable
- [ ] Evacuation monitoring map supports pan/scroll
- [ ] S.A.R.U preview map is clear

### Tablet (768px - 1024px):
- [ ] Maps scale appropriately
- [ ] Markers remain properly positioned
- [ ] Text labels on map are readable

### Mobile (375px - 767px):
- [ ] Maps adapt to smaller containers
- [ ] Critical map elements remain visible
- [ ] Markers don't overlap excessively

## Step 6: Marker Overlay Verification

Ensure the new map images work well with existing overlay markers:

### Evacuation Centers (Blue Houses - #3FA9F5):
- Located at coordinates like: `left-[18%] top-[14%]`, `left-[45%] top-[42%]`, etc.
- Should be visible against map background
- Test hover states (scale-110 transition)

### Alert Markers:
- **Yellow** (#FFFF00): Low priority alerts
- **Orange** (#FFA500): Medium priority alerts  
- **Red** (#FF0000): High priority alerts
- Sizes: 20-25px, should contrast well with map

### S.A.R.U Units (Blue Pins - #3FA9F5):
- Emergency response locations
- Should be distinguishable from evacuation centers

## Troubleshooting

### Issue: Map appears stretched or distorted
**Solution:** Adjust the `object-fit` property:
- Use `object-contain` to show full map (may have letterboxing)
- Use `object-cover` to fill container (may crop edges)
- Use `object-fill` only if aspect ratio must exactly match container

### Issue: Map colors clash with UI
**Solution:** In Mapsicle, adjust the map style:
- Choose a more neutral color palette
- Reduce saturation on roads and landmarks
- Ensure water features don't use the same blue as UI (#3FA9F5)

### Issue: Labels are too small or unreadable
**Solution:** In Mapsicle:
- Increase zoom level slightly (try Z14 instead of Z13)
- Generate a higher resolution image (e.g., 2560x1440)
- Choose a map style with larger fonts

### Issue: Markers get lost on busy map
**Solution:**
- Generate a lighter/simpler map style
- Reduce the number of POI labels in Mapsicle settings
- Consider adding a subtle white glow to marker SVGs in CSS

## Optional Enhancements

### Add Multiple Map Variants:
If different pages need different zoom levels or styles:

1. Generate 2-3 different map images:
   - `naga-city-overview.png` (Z12-13, wide area)
   - `naga-city-standard.png` (Z14, current style)
   - `naga-city-detailed.png` (Z15-16, close-up)

2. Update imports selectively:
   ```typescript
   // Dashboard - use overview
   import imgMaps from "figma:asset/[OVERVIEW_ASSET_ID].png";
   
   // Barangay EWS - use detailed
   import imgMap from "figma:asset/[DETAILED_ASSET_ID].png";
   ```

### Add Dark Mode Map:
Generate a dark-themed map variant for potential dark mode support:
- Use Mapsicle dark style preset
- Ensure markers still have good contrast
- Store as separate asset for future use

## Final Checklist

Before deploying:
- [ ] All 4 component files updated with new asset IDs
- [ ] Maps display correctly on desktop
- [ ] Maps are responsive on tablet and mobile
- [ ] Marker overlays are visible and properly positioned
- [ ] No console errors related to image loading
- [ ] Map style complements blue UI theme (#3FA9F5)
- [ ] Performance is acceptable (PNG file sizes reasonable)
- [ ] Map images are crisp on retina displays

## Asset ID Reference

Keep track of your new Mapsicle-generated asset IDs:

```
OLD Asset ID (to be replaced):
62afce6bb9b53d5a0d9a806233abec2803457dff

NEW Asset IDs (from Mapsicle):
Main Map: ________________________________
Detail Map (optional): ________________________________
Overview Map (optional): ________________________________
```

Fill in the new asset IDs after generating and importing your Mapsicle maps.
