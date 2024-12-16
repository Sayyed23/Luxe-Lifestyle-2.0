import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import WondersSection from '../components/travel/WondersSection';

const Travel = () => {
  return (
    <div className="pt-20">
      <CategoryHeader 
        title="Travel" 
        description="Explore the world's most exclusive destinations where luxury knows no bounds"
        image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
      />
      
      <WondersSection />
    </div>
  );
};

export default Travel;