import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
// import RocketAnimation from './RocketAnimation';

import AuroraText from '../../assets/AURORA-24.svg';
import bg from '../../assets/bglanding.svg';
import tree from '../../assets/treee.svg';

export const AdvancedBannerTop = () => {
  const background = {
    // image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    image: bg,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [-15, 50],
    scale: [1, 1.25, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        {/* <AuroraText /> */}
        <img src={AuroraText} alt="AuroraText"  className='lg:w-[40rem] w-[20rem]'/>
      </div>
    ),
  };

  const foreground = {
    image: tree,
    translateY: [28, 0],
    scale: [1.05,1.2, 'easeOutCubic'], // Set initial width to 100%
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div style={{ width: '105vh' }}>
        <img src={tree} alt="Tree" style={{ width: '115' }} />
      </div>
    ),
  };

  const gradientOverlay = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset w-fit" />,
  };

  return (
    <ParallaxBanner layers={[background, headline, foreground, gradientOverlay]} className="full" />
  );
};
