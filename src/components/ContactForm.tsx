// pages/contact.jsx
"use client";

import { useEffect, useRef } from "react";

export default function ContactForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // This script is needed to initialize Tally forms
    const script = document.createElement("script");
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-400 dark:border-none">
      <iframe
        ref={iframeRef}
        src="https://tally.so/embed/mOv0E8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1150"
        frameBorder="0"
        title="Contact form"
      ></iframe>
    </div>
  );
}
