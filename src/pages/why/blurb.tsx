import React from 'react';
import Link from 'next/link';

const Blurb: React.FC = () => (
  <div className="container mx-auto px-6 py-2 flex flex-col justify-between items-center mt-10 lg:mt-20 overflow-scroll lg:overflow-hidden">
    <h2 className="text-5xl font-bold mb-6 mx-6">
      A simple, modern music player
    </h2>

    <p className="text-base text-lg mb-6 mx-6 lg:mx-64">
      I grew up using buying albums on Vinyl, grabbing their digital copies,
      and listening to them both on my record player and on my computer. Apps like
      WinAmp and VLC were great and I still love the nostalgia of those days, but
      recently I&apos;ve wanted a more modern app experience.
      <br />
      <br />
      So I created Melo, a cross-platform desktop music app that is more accessible
      for users who are used to a Spotify experience.
    </p>

    <h2 className="text-2xl font-bold mb-6 mx-6">
      With Melo you can:
    </h2>

    <ul className="text-lg list-disc mx-6 mb-4">
      <li>Organize your local audio files into playlists</li>
      <li>Create and modify custom player views including album art, artist names, and more</li>
      <li>Customize audio playback with the builtin equalizer</li>
      <li>
        And more! Checkout out
        {' '}
        <a className="primary cursor-pointer border-bottom-primary" href="https://docs.melo-app.org">the docs</a>
        {' '}
        for all the features.
      </li>
    </ul>

    <p className="text-center text-xl mb-6 mx-6 lg:mx-64 mt-4 bg-primary-light-3 p-4 rounded">
      If you have any features you would love to see, please let me know buy
      {' '}
      <Link href="/feedback">
        <span className="primary cursor-pointer border-bottom-primary">submitting your suggestions</span>
      </Link>
      .
    </p>

  </div>
);

export default Blurb;