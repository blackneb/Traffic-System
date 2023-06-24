import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const ReactMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmxhY2tuZWIiLCJhIjoiY2xobHcwajA1MDdvcjNkcXJnZXUyZmVpayJ9.EIwIkxWvlA3CSiTwem0O_A';
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(-73.8419063);
  const [lat, setLat] = useState(41.0895249);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
     map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="h-[32rem] w-[32rem]" />
    </div>
  )
}

export default ReactMap
