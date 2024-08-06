// src/RentalAppsList.js
import React from 'react';

const RentalAppsList = () => {
  const apps = [
    {
      name: 'Uniplaces',
      description: 'Specializes in mid to long-term rentals, catering to students and young professionals.',
      website: 'https://www.uniplaces.com',
    },
    {
      name: 'Idealista',
      description: 'One of the most popular real estate platforms in Portugal, offering a wide range of rental options.',
      website: 'https://www.idealista.pt',
    },
    {
      name: 'Badi',
      description: 'A social app that connects room seekers with landlords, often without agency fees.',
      website: 'https://badi.com',
    },
    {
      name: 'Spotahome',
      description: 'Offers detailed property listings with professional photos, videos, and 360-degree tours.',
      website: 'https://www.spotahome.com',
    },
    {
      name: 'HousingAnywhere',
      description: 'Focuses on international students and expats, with a user-friendly interface for booking rooms.',
      website: 'https://housinganywhere.com',
    },
    {
      name: 'Roomgo',
      description: 'Connects people looking for shared accommodations.',
      website: 'https://www.roomgo.net/',
    },
    {
      name: 'Airbnb',
      description: 'Known for short-term rentals, but also offers long-term stays and private room options.',
      website: 'https://www.airbnb.com',
    },
    {
      name: 'Facebook Marketplace and Groups',
      description: 'Local groups and listings on Facebook can be a great way to find rooms directly from landlords or roommates.',
      website: 'https://www.facebook.com/marketplace',
    },
    {
      name: 'CustoJusto',
      description: 'A classifieds website in Portugal that offers various housing options, including room rentals.',
      website: 'https://www.custojusto.pt',
    },
  ];

  return (
    <div className="rental-apps-list">
      <h2>Best Applications to Rent a Room in Lisbon</h2>
      <ol>
        {apps.map((app, index) => (
          <li key={index}>
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <a href={app.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RentalAppsList;
