## JOTISH Employee Insights Dashboard assignment documentation

step 1 - Route thinking 
I can think of the pages for navigation
/login
/list
/details/:id
/analytics

Employee Insights Dashboard

-- Architectural thinking



- Context for global auth state
- Hooks for side effects
- Utilities for pure logic
- Components for rendering only

This improves maintainability 

## Virtualization Design

The grid renders only visible rows plus 5 top + 5 bottom = 10 buffer rows.

calcs- 

startIndex = floor(scrollTop / rowHeight)

A spacer div preserves native scroll height.

Visible rows are vertically translated using translateY.

## Analytics Design

Salary distribution is rendered using raw SVG.

Why SVG:
- Explicit coordinate control
- No chart library dependency
- Full manual rendering logic

City mapping uses Leaflet.

City names are mapped to coordinates through a utility dictionary to separate domain data from rendering.