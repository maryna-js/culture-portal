import React from 'react';
import './index.css';
import Avatar from '../../components/Avatar';
import Description from '../../components/Description';
import Timeline from '../../components/Timeline';
import Works from '../../components/Works';
import ImageGalleryComponent from '../../components/ImageGallery';
import Video from '../../components/Video';
// eslint-disable-next-line import/no-named-as-default
import MapContainer from '../../components/Map';

function PersonalPage({ profile }) {
  return (
    <div className="personal-page">
      <Avatar data={profile} />
      <Description data={profile} />
      <Timeline data={profile} />
      <Works data={profile} />
      <ImageGalleryComponent data={profile} />
      <Video data={profile} />
      <div className="map-container">
        <MapContainer data={profile} />
      </div>
    </div>
  );
}

export default PersonalPage;
