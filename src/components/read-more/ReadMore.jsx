// import React from 'react';
// import './ReadMore.scss';

// const ReadMore = () => {
//   return (
//     <div className='read-more'>
//       <input type='checkbox' class='read-more-state' id='post-1' />

//       <p class='read-more-wrap'>
//         Travelling into space is one of the most exciting and unforgettable
//         adventures that can change your life forever. And if you have ever
//         dreamed of exploring stars, planets and galaxies, then our company is
//         ready to help you realize this dream. We offer a unique experience that
//         will allow you to go on a space journey and see all the secrets of the
//         universe. We guarantee that every moment in space will be filled with
//         incredible impressions, excitement and new discoveries. Our team of
//         professionals takes care of your safety and comfort so that you can
//         fully enjoy your adventure in space. We offer various options for space
//         excursions.{' '}
//         <span class='read-more-target'>
//           Travelling into space is one of the most exciting and unforgettable
//           adventures that can change your life forever. And if you have ever
//           dreamed of exploring stars, planets and galaxies, then our company is
//           ready to help you realize this dream. We offer a unique experience
//           that will allow you to go on a space journey and see all the secrets
//           of the universe. We guarantee that every moment in space will be
//           filled with incredible impressions, excitement and new discoveries.
//           Our team of professionals takes care of your safety and comfort so
//           that you can fully enjoy your adventure in space. We offer various
//           options for space excursions.
//         </span>
//       </p>

//       <label for='post-1' class='read-more-trigger'></label>
//     </div>
//   );
// };

// export default ReadMore;

import React from 'react';
import './ReadMore.scss';

const ReadMore = () => {
  return (
    <div className='read-more'>
      <input type='checkbox' id='read-more-checkbox' className='read-more__state' />
      <p className='read-more__wrap'>
        Travelling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space. We offer various options for space
        excursions.{' '}
        <span className='read-more__target'>
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </span>
      </p>
      <label htmlFor='read-more-checkbox' className='read-more__trigger'></label>
    </div>
  );
};

export default ReadMore;
