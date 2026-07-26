"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const poster = "/assets/optimized/video/homepage-hero-poster.webp";

export function HomeHeroMedia() {
  const [canPlayMotion, setCanPlayMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setCanPlayMotion(!mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-navy" aria-hidden="true">
      {canPlayMotion ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          tabIndex={-1}
        >
          <source
            src="/assets/optimized/video/homepage-hero-mobile.mp4"
            media="(max-width: 767px)"
            type="video/mp4"
          />
          <source
            src="/assets/optimized/video/homepage-hero-desktop.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <Image
          src={poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}
