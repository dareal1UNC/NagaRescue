# NAGA RESCUE - Map Image Requirements for Mapsicle Extension

## Overview
This document outlines the exact specifications needed to generate static map images using the Mapsicle design extension for the NAGA RESCUE web application.

## Map Location
**Primary Location:** Naga City, Camarines Sur, Philippines
- **Coordinates:** 13.6218° N, 123.1948° E
- **Coverage Area:** Naga City metropolitan area including all barangays

## Map Images Required

### 1. Main Dashboard Map (DashboardCdrrmo.tsx)
- **Variable Name:** `imgMaps`
- **Current Asset:** `figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png`
- **Dimensions:** Flexible (used in responsive container with 560px height on desktop)
- **Aspect Ratio:** Approximately 16:9 or wider
- **Recommended Size:** 1920x1080px minimum
- **Map Style:** 
  - Street map with clear roads and labels
  - Moderate zoom level showing entire Naga City area
  - Neutral/light color scheme (compatible with blue UI theme #3FA9F5)
- **Purpose:** Central monitoring map for CDRRMO dashboard showing evacuation centers and alert zones
- **Visual Requirements:**
  - Clear street names and landmarks
  - Visible barangay boundaries if possible
  - Should work well with overlay markers (blue houses for evacuation centers, colored pins for alerts)

### 2. Barangay EWS Monitoring Map (BarangayEwsMonitoring.tsx)
- **Variable Name:** `imgMap`
- **Current Asset:** `figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png` (same as main)
- **Dimensions:** 1440x924px minimum
- **Aspect Ratio:** ~1.56:1
- **Map Style:** 
  - Detailed street map
  - Zoom level showing barangay-level details
  - Light/neutral colors
- **Purpose:** Full-screen monitoring map for Early Warning System
- **Visual Requirements:**
  - High detail for barangay identification
  - Compatible with orange alert pin overlays
  - Rounded corners (10px border-radius)

### 3. Evacuation Monitoring Map (EvacuationMonitoring.tsx)
- **Variable Name:** `imgMap`
- **Current Asset:** `figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png` (same as main)
- **Dimensions:** Responsive, minimum 1440x800px
- **Aspect Ratio:** 16:9 or wider
- **Map Style:** 
  - Street map with landmarks
  - Medium zoom showing evacuation routes
  - Light color scheme
- **Purpose:** Display evacuation center locations and monitoring zones
- **Visual Requirements:**
  - Clear road network visibility
  - Compatible with warning/alert icon overlays
  - Should show major landmarks and facilities
  - Pannable and zoomable (via div scrolling)

### 4. S.A.R.U Monitoring Map (SaruMonitoring.tsx)
- **Variable Name:** `imgMap`
- **Current Asset:** `figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png` (same as main)
- **Dimensions:** 
  - Small preview: Approximately 400x220px
  - Used in card layout
- **Aspect Ratio:** ~1.82:1
- **Map Style:** 
  - Overview map
  - Lighter detail level acceptable for small size
  - Neutral colors
- **Purpose:** Small preview map in S.A.R.U operation details card
- **Visual Requirements:**
  - Should be readable at small sizes
  - General area overview is sufficient
  - Rounded corners (15px border-radius)

## Mapsicle Generation Settings Recommendations

### General Settings for All Maps:
- **Map Provider:** OpenStreetMap or similar (light theme)
- **Color Scheme:** 
  - Roads: #CCCCCC to #999999
  - Land: #F5F5F5 to #FFFFFF
  - Water: #B8D4E8 (light blue compatible with app theme)
  - Parks/Green spaces: #E8F5E8
- **Labels:** 
  - Font: Sans-serif, clean
  - Color: #333333 to #666666
  - Size: Medium (readable at specified dimensions)
- **Zoom Level:** 
  - Main maps: Z13-Z14 (city-wide view)
  - Detail maps: Z15-Z16 (neighborhood/barangay level)

### Export Settings:
- **Format:** PNG (with transparency support if needed)
- **Quality:** High/Maximum (for crisp overlay markers)
- **DPI:** 144 or higher (2x for retina displays)
- **Color Space:** sRGB

## Current Map Asset ID
The current map image being replaced:
- **Asset ID:** `62afce6bb9b53d5a0d9a806233abec2803457dff`
- **Import Format:** `figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png`

## Implementation Notes

After generating the new maps in Mapsicle:

1. **File Naming Convention:**
   - `naga-city-main-map.png` (for main dashboard and shared uses)
   - `naga-city-detail-map.png` (if a higher detail version is needed)
   - `naga-city-overview-map.png` (for smaller preview uses)

2. **Files to Update:**
   - `/components/DashboardCdrrmo.tsx` (line 2)
   - `/components/BarangayEwsMonitoring.tsx` (line 2)
   - `/components/EvacuationMonitoring.tsx` (line 2)
   - `/components/SaruMonitoring.tsx` (line 3)

3. **Import Pattern:**
   ```typescript
   import imgMap from "figma:asset/[NEW_ASSET_ID].png";
   ```

## Marker Overlay Compatibility

The maps should be designed to work well with these overlay elements:

### Evacuation Centers (Blue Houses)
- Color: #3FA9F5 (primary blue)
- Size: ~28-30px
- Style: House icon filled
- Positions: Various locations across Naga City (18%-80% horizontal, 14%-85% vertical)

### Alert Markers (Colored Pins)
- **Yellow Alerts:** #FFFF00 (low priority)
- **Orange Alerts:** #FFA500 (medium priority)  
- **Red Alerts:** #FF0000 (high priority)
- Size: ~20-25px
- Style: Map pin/location marker filled
- Positions: Scattered across map based on alert locations

### S.A.R.U Units (Blue Pins)
- Color: #3FA9F5 (primary blue)
- Size: ~20-25px
- Style: Emergency/ambulance icon
- Positions: Various strategic locations

## Responsive Considerations

The maps are used in responsive layouts that support:
- **Desktop:** 1920x1080 and larger
- **Tablet:** 768px - 1024px width
- **Mobile:** 375px - 767px width

Maps should maintain clarity and readability across all viewport sizes. The same map image may be scaled and cropped differently based on screen size.

## Design System Integration

The NAGA RESCUE app uses:
- **Primary Blue:** #3FA9F5
- **Dark Blue Text:** #2F7FB8 / #163B56
- **Font:** Josefin Sans Bold throughout
- **Border Radius:** 10px for most elements, 15px for cards
- **Shadows:** `0px 4px 4px rgba(0,0,0,0.1)` standard

Maps should complement this design system with neutral, unobtrusive colors that don't compete with the blue UI elements.
