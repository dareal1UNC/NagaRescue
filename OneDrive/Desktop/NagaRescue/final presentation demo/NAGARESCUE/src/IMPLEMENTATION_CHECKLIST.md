# Mapsicle Map Replacement - Implementation Checklist

## Pre-Implementation

### ☐ Step 1: Review Documentation
- [ ] Read MAP_REQUIREMENTS.md (detailed specifications)
- [ ] Read MAPS_REPLACEMENT_SUMMARY.md (quick overview)
- [ ] Read MAPSICLE_IMPLEMENTATION_GUIDE.md (step-by-step guide)
- [ ] Read CODE_CHANGES_REFERENCE.md (exact code changes)
- [ ] Read MAP_USAGE_DIAGRAM.md (visual reference)

### ☐ Step 2: Prepare Figma
- [ ] Open your Figma file with NAGA RESCUE design
- [ ] Ensure you have the Mapsicle extension installed
- [ ] Locate existing map images in your Figma file (for reference)

---

## Map Generation Phase

### ☐ Step 3: Generate Map with Mapsicle

#### Open Mapsicle Extension:
- [ ] Launch Mapsicle in Figma
- [ ] Confirm extension is working properly

#### Set Location:
- [ ] Search for "Naga City, Camarines Sur, Philippines"
- [ ] Or manually enter coordinates: 13.6218°N, 123.1948°E
- [ ] Verify the map is centered on Naga City

#### Configure Map Style:
- [ ] Select "Light" or "Street" map style
- [ ] Ensure roads are clearly visible
- [ ] Verify labels are readable
- [ ] Check that colors are neutral/light (compatible with blue UI)

#### Set Zoom Level:
- [ ] Try zoom level 13 first
- [ ] Adjust to 14 if more detail needed
- [ ] Ensure the map shows:
  - [ ] Central Naga City area
  - [ ] Major roads and streets
  - [ ] Key landmarks
  - [ ] Barangay areas
  - [ ] Naga River (if visible at this zoom)

#### Configure Export Settings:
- [ ] Set dimensions: 1920 × 1080 pixels (minimum)
- [ ] Consider higher resolution: 2560 × 1440 (for better quality)
- [ ] Select PNG format
- [ ] Set quality to High/Maximum
- [ ] Enable anti-aliasing if available

#### Generate Map:
- [ ] Click generate/export button
- [ ] Wait for map image to be created
- [ ] Review the generated image preview

#### Quality Check:
- [ ] Roads are clearly visible
- [ ] Labels are readable (street names, landmarks)
- [ ] Colors are appropriate (not too dark or saturated)
- [ ] Overall quality is crisp and clear
- [ ] Image is properly cropped (no cut-off labels)

---

## Figma Import Phase

### ☐ Step 4: Import Map to Figma

#### Import Image:
- [ ] In your Figma file, create or select a frame
- [ ] Drag and drop the Mapsicle-generated PNG into Figma
- [ ] Or use Place Image (Ctrl/Cmd + Shift + K)

#### Position Image:
- [ ] Position the map image appropriately in your frame
- [ ] Ensure the image is not accidentally scaled or distorted

#### Get Asset ID:
- [ ] Select the imported map image
- [ ] Note: Figma automatically assigns an asset ID
- [ ] To find it, you may need to:
  - [ ] Right-click → Copy as PNG (asset ID in clipboard data)
  - [ ] Or check in Figma Dev mode
  - [ ] Or use Figma API inspector
- [ ] Asset ID format: 40-character hexadecimal string
- [ ] Example: `a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2`

#### Record Asset ID:
- [ ] Write down the complete asset ID here:

```
NEW MAPSICLE ASSET ID: ________________________________________
```

---

## Code Update Phase

### ☐ Step 5: Update Component Files

**You will replace the OLD asset ID with your NEW asset ID in 4 files.**

**OLD Asset ID to Replace:**
```
62afce6bb9b53d5a0d9a806233abec2803457dff
```

**NEW Asset ID (from above):**
```
________________________________________
```

#### File 1: /components/DashboardCdrrmo.tsx
- [ ] Open the file in your code editor
- [ ] Navigate to Line 2
- [ ] Find: `import imgMaps from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";`
- [ ] Replace with: `import imgMaps from "figma:asset/[YOUR_NEW_ASSET_ID].png";`
- [ ] Verify the line is correct (check for typos)
- [ ] Save the file

#### File 2: /components/BarangayEwsMonitoring.tsx
- [ ] Open the file in your code editor
- [ ] Navigate to Line 2
- [ ] Find: `import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";`
- [ ] Replace with: `import imgMap from "figma:asset/[YOUR_NEW_ASSET_ID].png";`
- [ ] Verify the line is correct (check for typos)
- [ ] Save the file

#### File 3: /components/EvacuationMonitoring.tsx
- [ ] Open the file in your code editor
- [ ] Navigate to Line 2
- [ ] Find: `import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";`
- [ ] Replace with: `import imgMap from "figma:asset/[YOUR_NEW_ASSET_ID].png";`
- [ ] Verify the line is correct (check for typos)
- [ ] Save the file

#### File 4: /components/SaruMonitoring.tsx
- [ ] Open the file in your code editor
- [ ] Navigate to Line 3
- [ ] Find: `import imgMap from "figma:asset/62afce6bb9b53d5a0d9a806233abec2803457dff.png";`
- [ ] Replace with: `import imgMap from "figma:asset/[YOUR_NEW_ASSET_ID].png";`
- [ ] Verify the line is correct (check for typos)
- [ ] Save the file

#### Verification:
- [ ] Search entire codebase for old asset ID `62afce6bb9b53d5a0d9a806233abec2803457dff`
- [ ] Confirm 0 matches found in `/components/` directory
- [ ] Search for your new asset ID
- [ ] Confirm 4 matches found (one in each component)

---

## Testing Phase

### ☐ Step 6: Build & Test

#### Initial Build:
- [ ] Save all modified files
- [ ] Restart development server (if needed)
- [ ] Wait for successful build
- [ ] Check console for any errors
- [ ] Resolve any import errors if they appear

#### Visual Testing - Desktop (1920px+):

**Dashboard CDRRMO:**
- [ ] Navigate to Dashboard after login
- [ ] Verify map displays in center section
- [ ] Check map is not stretched or distorted
- [ ] Verify evacuation center markers (blue houses) are visible
- [ ] Verify alert markers (colored pins) are visible
- [ ] Test clicking on markers (should show details)
- [ ] Check map has rounded corners and blue border
- [ ] Verify overall layout looks correct

**Barangay EWS Monitoring:**
- [ ] Navigate to Barangay EWS page
- [ ] Verify full-screen map displays
- [ ] Check map fills container (1440x924px area)
- [ ] Verify orange alert markers are visible
- [ ] Test if map is scrollable (if content overflows)
- [ ] Check map has rounded corners
- [ ] Verify labels are readable at this size

**Evacuation Monitoring:**
- [ ] Navigate to Evacuation Monitoring page
- [ ] Verify map displays in main area
- [ ] Check warning/alert icons overlay properly
- [ ] Test pan and scroll functionality
- [ ] Verify map is not draggable (as intended)
- [ ] Check evacuation center locations are clear

**S.A.R.U Monitoring:**
- [ ] Navigate to S.A.R.U Monitoring page
- [ ] Verify small preview map appears in operation card
- [ ] Check map is readable at ~220px height
- [ ] Verify map has rounded corners (15px)
- [ ] Confirm it provides adequate location context

#### Visual Testing - Tablet (768px - 1024px):

- [ ] Resize browser to tablet width (e.g., 768px)
- [ ] Test Dashboard CDRRMO page
- [ ] Test Barangay EWS Monitoring page
- [ ] Test Evacuation Monitoring page
- [ ] Test S.A.R.U Monitoring page
- [ ] Verify maps scale appropriately
- [ ] Check markers remain visible
- [ ] Confirm readability is maintained

#### Visual Testing - Mobile (375px - 767px):

- [ ] Resize browser to mobile width (e.g., 375px)
- [ ] Test Dashboard CDRRMO page
- [ ] Test Barangay EWS Monitoring page
- [ ] Test Evacuation Monitoring page
- [ ] Test S.A.R.U Monitoring page
- [ ] Verify maps adapt to small screens
- [ ] Check critical elements remain visible
- [ ] Test hamburger menu navigation

---

## Quality Assurance

### ☐ Step 7: Final Checks

#### Functionality:
- [ ] All 4 pages load without errors
- [ ] Maps display on all pages
- [ ] No broken image icons
- [ ] No console errors related to maps
- [ ] Marker overlays function correctly
- [ ] Click handlers work (if applicable)
- [ ] Responsive behavior is correct

#### Visual Quality:
- [ ] Maps are crisp and clear (not blurry)
- [ ] Colors complement the blue UI theme
- [ ] Roads and labels are readable
- [ ] No distortion or stretching
- [ ] Proper aspect ratios maintained
- [ ] Rounded corners render correctly
- [ ] Markers are clearly visible against map

#### Performance:
- [ ] Page load times are acceptable
- [ ] No significant lag when loading maps
- [ ] Image file size is reasonable
- [ ] Browser network tab shows successful asset loading

#### Cross-Browser Testing (Optional but Recommended):
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Verify consistent appearance

---

## Post-Implementation

### ☐ Step 8: Documentation

#### Update Records:
- [ ] Record the new asset ID in your project documentation
- [ ] Note the date of implementation
- [ ] Document any issues encountered and solutions

#### Keep Reference:
- [ ] Save Mapsicle settings used (zoom, style, etc.)
- [ ] Save original map PNG file for reference
- [ ] Keep old asset ID on record (for rollback if needed)

#### Asset ID Record:
```
Implementation Date: _______________

Old Asset ID: 62afce6bb9b53d5a0d9a806233abec2803457dff
New Asset ID: ________________________________________

Mapsicle Settings Used:
- Location: Naga City, Camarines Sur, Philippines
- Coordinates: 13.6218°N, 123.1948°E
- Zoom Level: _______
- Map Style: _______
- Dimensions: _______ × _______
- Format: PNG
- Quality: _______
```

### ☐ Step 9: Team Communication

If working in a team:
- [ ] Notify team members of the map update
- [ ] Share the new asset ID with the team
- [ ] Update any shared documentation
- [ ] Commit changes to version control
- [ ] Create pull request (if applicable)
- [ ] Document changes in commit message

---

## Troubleshooting

### If Maps Don't Display:

**Check 1: Asset ID Format**
- [ ] Verify asset ID is exactly 40 characters
- [ ] Ensure no spaces or extra characters
- [ ] Confirm format: `figma:asset/[HASH].png`
- [ ] Check `.png` extension is included

**Check 2: Import Statement**
- [ ] Verify import statement syntax is correct
- [ ] Check for typos in variable names
- [ ] Ensure quotes are correct (double quotes)
- [ ] Verify path structure

**Check 3: Figma Asset**
- [ ] Confirm image was properly imported to Figma
- [ ] Verify asset exists in Figma file
- [ ] Check if asset ID is correct in Figma
- [ ] Re-import image if necessary

**Check 4: Build Process**
- [ ] Restart development server
- [ ] Clear browser cache
- [ ] Check console for specific error messages
- [ ] Verify build completes successfully

### If Maps Are Distorted:

**Check 1: Aspect Ratio**
- [ ] Verify original image dimensions
- [ ] Check CSS `object-fit` property
- [ ] Adjust to `object-contain` or `object-cover` as needed

**Check 2: Container Size**
- [ ] Inspect container dimensions in browser
- [ ] Verify responsive breakpoints
- [ ] Check for conflicting CSS

### If Markers Are Misaligned:

**Note:** This likely indicates the map view/zoom has changed significantly from the original. Marker positions are fixed percentages.

**Options:**
- [ ] Adjust Mapsicle zoom to match original more closely
- [ ] Re-generate map with different zoom level
- [ ] Or accept that marker positions may need manual adjustment in code (advanced)

---

## Rollback Procedure

### If You Need to Revert:

1. **Quick Rollback:**
   - [ ] Replace new asset ID with old in all 4 files
   - [ ] Old ID: `62afce6bb9b53d5a0d9a806233abec2803457dff`
   - [ ] Save files and restart server

2. **Use Version Control:**
   - [ ] If using Git: `git checkout -- [file-path]`
   - [ ] Or use Git revert/reset as appropriate

3. **Verify:**
   - [ ] Check that maps display correctly
   - [ ] Test all 4 pages

---

## Success Criteria

### Implementation is Complete When:
- [ ] All 4 component files have been updated
- [ ] New Mapsicle map displays on all 4 pages
- [ ] No errors in console
- [ ] Maps are responsive (desktop, tablet, mobile)
- [ ] Marker overlays are visible and positioned correctly
- [ ] Visual quality meets expectations
- [ ] Performance is acceptable
- [ ] Documentation is updated

---

## Completion

### ☐ Final Sign-Off

**Implementation Completed:** [ ] Yes [ ] No

**Date Completed:** _______________

**Implemented By:** _______________

**Issues Encountered:**
- 
- 
- 

**Notes:**
- 
- 
- 

**Status:** 
- [ ] Successful - No issues
- [ ] Successful - Minor adjustments made
- [ ] Partial - Some issues remain
- [ ] Failed - Rolled back

---

## Next Steps (Optional Enhancements)

After successful implementation, consider:
- [ ] Generate additional map variants (different zoom levels)
- [ ] Create dark mode map version
- [ ] Optimize image file size further (WebP conversion)
- [ ] Add map loading states/placeholders
- [ ] Implement progressive image loading
- [ ] Add map zoom/pan controls (if desired)

---

**Estimated Total Time:** 15-30 minutes  
**Difficulty Level:** Low-Medium  
**Risk Level:** Low (easy to rollback)

**Good luck with your implementation! 🗺️**
