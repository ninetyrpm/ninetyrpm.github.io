Changelog:

04/04/2024:
Added bike tag game boundary
   geoJSON (bounday.json) created to outline boundaries for bike tags
Disabled centering of map view on geolocation (setView: false)

04/03/2024
Added Jefferson County Bikeway geoJSON
   Leaflet now pulls geoJSON data from LOJIC Open Data Portal (https://data.lojic.org/) and displays it on the map
   NOTE: This dataset was last updated 09/21/2023 as of this log. Hence the map may not accurately reflect current bikeways.

04/02/2024
Implemented tag photo retrieval
   All bike tag photos are stored in an ImageKit media library and retrieved using signed URLs.
   The "tag" and "claim" photos are then displayed in the sidebar upon clicking a map marker.
   Serverless function vercel-imagekit.js injects credentials into photo url request from leaflet-imagekit.js
   NOTE: Photos are still being uploaded. File extraction from Discord server and renaming is currently a manual process.

03/30/2024
Implemented geolocation service [onLocationFound()]
   Application now requests user's current location. Upon permission, user location is pinned on map. Map zooms to user's location.

**Features to be added:**
- Customize markers:
   - Bike icon for tag markers
   - Position icon for GPS location
   - Sponsor icons w/ links
- Add BCB overlay
- Add Bike Tag Intro page
- Implement search bar functionality
   - Tag list
   - Google Maps places
- Add geometry layer to show game boundaries
- Consider adding Lojic datasets as layers
- Implement tag system to categorize markers
- Implement list of markers/tags
- Consider adopting gameplay framework from https://github.com/KenEucker/biketag-vue
- Consider adding leaderboard
- Implement Discord bot or integration to extract bike tag data and photos automatically
- Map toolbar, including layer toggles
- Add storyboard/gallery mode that views tags in sequential order
- Add comments section for each tag sidebar
- Add social media integrations
- Ghost Rider option: upload ride and find out how close you were to the latest tag