import React, { useState, useEffect } from 'react';

// Location component to handle and display location data
const Location = ({ latitude, longitude }) => {
  const [locationData, setLocationData] = useState({ address: 'Loading...', lat: null, lng: null });
  const [error, setError] = useState(null);

  // Google Maps API Key (should be stored in .env for security in production)
  const GOOGLE_API_KEY = 'AIzaSyCiRa7srMt-KKRCsSXeBl5j1WR3-ADMpWQ';

  useEffect(() => {
    const fetchLocationData = async () => {
      if (!latitude || !longitude) {
        setLocationData({ address: 'N/A', lat: latitude || 'N/A', lng: longitude || 'N/A' });
        return;
      }

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
        );
        const result = await response.json();
        if (result.status === 'OK' && result.results.length > 0) {
          setLocationData({
            address: result.results[0].formatted_address,
            lat: latitude,
            lng: longitude,
          });
        } else {
          setLocationData({ address: 'Address not found', lat: latitude, lng: longitude });
        }
      } catch (err) {
        console.error('Error fetching location data:', err);
        setError('Failed to fetch location data');
        setLocationData({ address: 'Error', lat: latitude, lng: longitude });
      }
    };

    fetchLocationData();
  }, [latitude, longitude]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm">
      <h3 className="text-lg font-semibold mb-2">Location Details</h3>
      {error ? (
        <p className="text-red-600 text-sm">{error}</p>
      ) : (
        <>
          <p className="text-sm text-gray-600">
            <strong>Address:</strong> {locationData.address}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Latitude:</strong> {locationData.lat}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Longitude:</strong> {locationData.lng}
          </p>
        </>
      )}
    </div>
  );
};

export default Location;