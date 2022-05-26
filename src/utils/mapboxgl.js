import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
