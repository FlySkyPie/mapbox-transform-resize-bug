# Canvas content shift after transform and size changed

## Enviroment

- mapbox-gl-js version: `2.14.1` and `3.2.0` 
- Browser: Google Chrome 121.0.6167.160
- System: Ubuntu 23.04

## Description

Canvas not longer display correctly, when changing size and transform scale to big size (`8000px` in this case), but DOM based items ([Marker](https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker)) still work fine.

## Usage

```shell
pnpm install
pnpm dev
```