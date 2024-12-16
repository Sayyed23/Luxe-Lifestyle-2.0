import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import AnimatedCard from '../components/shared/AnimatedCard';
import ModalContent from '../components/shared/ModalContent';

const Lifestyle = () => {
  const articles = [
    {
      slug: 'art-of-living',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      title: 'The Art of Living Well',
      subtitle: 'Mastering Sophisticated Living',
      description: 'Discover the principles of refined living, from curating the perfect home environment to mastering the art of entertaining.',
      modalContent: [
        {
          title: 'Creating Harmony',
          content: 'The art of living well begins with creating spaces that reflect both personal style and functional needs. Learn how to curate environments that inspire and nurture.'
        },
        {
          title: 'The Art of Entertaining',
          content: 'Master the nuances of hosting, from intimate gatherings to grand celebrations. Discover how to create memorable experiences that reflect sophistication and warmth.'
        },
        {
          title: 'Daily Rituals',
          content: 'Explore how thoughtful daily practices can elevate everyday living, transforming routine moments into opportunities for luxury and mindfulness.',
          className: 'bg-gray-50 p-6 rounded-xl'
        }
      ]
    },
    {
      slug: 'wellness-luxury',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
      title: 'Wellness & Luxury',
      subtitle: 'Holistic Well-being',
      description: 'Experience the intersection of luxury and well-being through exclusive spa retreats and personalized fitness programs.',
      modalContent: [
        {
          title: 'Modern Wellness',
          content: 'Today\'s approach to wellness combines ancient wisdom with cutting-edge science, creating comprehensive programs that address both body and mind.'
        },
        {
          title: 'Exclusive Experiences',
          content: 'Discover world-class wellness facilities and bespoke programs designed to provide transformative experiences and lasting results.'
        },
        {
          title: 'Mindful Living',
          content: 'Learn how to integrate wellness practices into daily life, creating sustainable routines that promote long-term health and vitality.',
          className: 'bg-gray-50 p-6 rounded-xl'
        }
      ]
    },
    {
      slug: 'modern-living',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Modern Living',
      subtitle: 'Contemporary Luxury Living',
      description: 'Embrace contemporary luxury living with smart home innovations and sustainable practices that enhance daily life.',
      modalContent: [
        {
          title: 'Smart Integration',
          content: 'Explore how modern technology can enhance luxury living while maintaining aesthetic harmony and user-friendly functionality.'
        },
        {
          title: 'Sustainable Luxury',
          content: 'Discover how contemporary living spaces can incorporate sustainable practices without compromising on luxury and comfort.'
        },
        {
          title: 'Future Living',
          content: 'Get a glimpse of upcoming trends and innovations that will shape the future of luxury living spaces.',
          className: 'bg-gray-50 p-6 rounded-xl'
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <CategoryHeader 
        title="Lifestyle" 
        description="Elevate your everyday living with curated experiences and refined choices"
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <AnimatedCard
              key={article.slug}
              title={article.title}
              subtitle={article.subtitle}
              description={article.description}
              image={article.image}
              modalContent={
                <ModalContent sections={article.modalContent} />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;