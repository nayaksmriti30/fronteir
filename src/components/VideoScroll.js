import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 1830;
const MINIMUM_FRAMES_TO_START = 100; // Number of frames to load before starting the video
const START_FRAME = 3; // Start the video from frame 3

function VideoScroll() {
  const ref = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = `/low/${i}.webp`;
        promises.push(new Promise((resolve) => {
          img.onload = () => resolve(img);
        }));
      }
      const loadedImages = await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true); // Set isLoaded to true once all images are loaded
    };
    loadImages();
  }, []);

  useEffect(() => {
    // Start playing the video as soon as the component mounts
    if (isLoaded && images.length > 0) {
      renderFrame(START_FRAME);
    }
  }, [isLoaded, images]);

  const renderFrame = (index) => {
    const ctx = ref.current.getContext('2d');
    ctx.clearRect(0, 0, ref.current.width, ref.current.height);
  
    // Check if the image for the current index exists and is loaded
    if (images[index - 1] instanceof HTMLImageElement) {
      ctx.drawImage(images[index - 1], 0, 0, ref.current.width, ref.current.height);
    } else {
      console.error(`Image ${index} is not loaded or invalid`);
    }
  };

  const { scrollYProgress } = useScroll();
  const currentIndex = useTransform(scrollYProgress, [0, 1], [START_FRAME, TOTAL_FRAMES]);
  useMotionValueEvent(currentIndex, 'change', (latest) => {
    renderFrame(Math.floor(latest));
  });

  return (
    <div style={{ height: '100vh', overflowY: 'hidden', backgroundColor: 'black' }}>
      <canvas
        width={1000}
        height={600}
        ref={ref}
        style={{
          display: 'block',
          margin: '0 auto',
          width: '100%',
          backgroundColor: 'black',
        }}
      />
    </div>
  );
}

export default VideoScroll;
