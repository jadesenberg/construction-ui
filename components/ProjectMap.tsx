'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import L from 'leaflet';

/* eslint-disable @typescript-eslint/no-explicit-any */
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface ProjectLocation {
  id: number;
  name: string;
  position: [number, number];
}

const projects: ProjectLocation[] = [
  { id: 1, name: 'Project A', position: [14.5995, 120.9842] },
  { id: 2, name: 'Project B', position: [10.3157, 123.8854] },
];

export const ProjectMap = () => {
  return (
    <Box sx={{ height: 680, width: '100%', borderRadius: 2, overflow: 'hidden' }}>
      <MapContainer
        center={[12.8797, 121.774]}
        zoom={6}
        scrollWheelZoom
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {projects.map((proj) => (
          <Marker key={proj.id} position={proj.position}>
            <Popup>{proj.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};
