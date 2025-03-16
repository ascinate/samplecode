"use client";

import { useEffect, useState } from 'react';

const IconsPage = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch('https://iconsguru.com/admin/api/icons');
        const data = await response.json();
        setIcons(data.icons); // Assuming the response contains an array of icons in `icons`
      } catch (error) {
        console.error('Error fetching icons:', error);
      }
    };

    fetchIcons();
  }, []);

  return (
    <div>
      <h1>Icons List</h1>
      <div className="svg-container">
        {icons.length === 0 ? (
          <p>Loading icons...</p>
        ) : (
          icons.map((icon) => (
          <a href="#" key={icon.id} class="svg-item" dangerouslySetInnerHTML={{ __html: icon.icon_svg }}>

          </a>
          ))
        )}
      </div>
    </div>
  );
};

export default IconsPage;
