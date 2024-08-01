import type { IParallax } from '@react-spring/parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import React, { useRef } from 'react';

import { DateSlider, FooterTitle } from '@/components';
import { HomeTopNav } from '@/components/molecules/HomeTopNav/HomeTopNav';

import styles from '../styles/main.module.css';

const Home = () => {
  const parallax = useRef<IParallax>(null!);
  return (
    <Parallax className={styles.home} ref={parallax} pages={5.5}>
      <ParallaxLayer offset={0} className={styles.capstone}>
        <HomeTopNav />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.22}
        speed={0.03}
        className={styles.capImageGroup}
      >
        <Image
          src="/assets/images/olivebg2.png"
          alt="flower"
          className={styles.flower}
          width={1000}
          height={1000}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.22}
        speed={0.15}
        className={styles.capImageGroup}
      >
        <div>
          <p className={styles.iDo}>I DO</p>
          <p className={`${styles.anton} OTJubilee`}>ANTON</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.32}
        speed={0.25}
        className={styles.capImageGroup}
      >
        <div>
          <p className={styles.weAre}>WE ARE</p>
          <p className={styles.saying}>SAYING</p>
          <p className={`${styles.emily} OTJubilee`}>EMILY</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1} className={styles.pt2}>
        <Image
          src="/assets/images/L.png"
          alt="L"
          className={styles.lImage}
          width={554}
          height={573}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.2}
        className={styles.dateSliderParralaxLayer}
      >
        <DateSlider />
      </ParallaxLayer>
      <ParallaxLayer offset={2} className={styles.pics}>
        <div className={styles.placeholderPhoto} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.5} className={styles.pics3}>
        <div className={styles.placeholderPhotoVertical} />
        <div className={styles.placeholderPhotoVertical} />
        <div className={styles.placeholderPhotoVertical} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.4}
        speed={0.1}
        className={styles.dateShowcaseImage}
      >
        <Image
          src="/assets/images/olivebranchupscaled.png"
          alt="L"
          className={styles.oliveBranch}
          width={800}
          height={987}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.51}
        speed={0.2}
        className={styles.dateShowcaseStory}
      >
        <p className={styles.storyBegins}>The Story Begins...</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.52}
        speed={0.25}
        className={styles.dateShowcaseDate}
      >
        <h1 className={styles.dateText}>March 1st,</h1>
        <h1 className={styles.dateText}>2025</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={4.5} className={styles.footerImg}>
        <Image
          src="/assets/images/olivefooterupscaled.png"
          alt="L"
          className={styles.oliveBranch}
          width={650}
          height={650}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={4.5} className={styles.footerBox} />
      <ParallaxLayer offset={4.5} className={styles.footerTitle}>
        <FooterTitle />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
