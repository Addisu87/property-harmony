
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !token) return;

    // Initialize map with the provided token
    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-98.5795, 39.8283], // Center of USA
        zoom: 3
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
      setIsMapInitialized(false);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <div className="relative w-full h-[400px] rounded-lg border p-4 flex flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="text-center max-w-md">
          <h3 className="font-semibold mb-2">Enter your Mapbox Token</h3>
          <p className="text-sm text-gray-500 mb-4">
            Visit mapbox.com, create an account, and paste your public token here.
          </p>
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mb-2"
          />
          <Button onClick={initializeMap} disabled={!token}>
            Initialize Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
