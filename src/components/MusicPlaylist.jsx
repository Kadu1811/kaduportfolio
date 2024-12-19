import { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";

const MusicPlaylist = () => {
  const clientId = "e1a154e7c82044aeaab59f942ba4f734";
  const redirectUri = "http://localhost:3000/callback";
  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
  ];

  const handleSpotifyLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scopes.join(" "))}`;
    window.location.href = authUrl;
  };

  const getTokenFromUrl = () => {
    const hash = window.location.hash;
    const token = hash
      .substring(1)
      .split("&")
      .find((item) => item.startsWith("access_token"))
      ?.split("=")[1];
    return token;
  };

  useEffect(() => {
    const token = getTokenFromUrl();
    if (token) {
      console.log("Spotify Token:", token);
      window.location.hash = "";
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="my-20 flex flex-col rounded-2xl border-0 bg-black p-4 lg:w-3/4">
        <BsThreeDots fontSize={60} color="gray" />

        <p className="mb-6">
          Music has always been a great source of inspiration for me, whether
          I&apos;m coding, working on new projects, or just relaxing.
          Here&apos;s a playlist that reflects my musical taste. I hope you
          enjoy it as much as I do!
        </p>

        <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/5InQ8THbBdxRvktURKQxcN?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: "520px" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />

        <button
          onClick={handleSpotifyLogin}
          className="mt-4 rounded bg-green-500 px-6 py-2 text-black hover:bg-green-600"
        >
          Ouça músicas completas
        </button>
      </div>
    </div>
  );
};

export { MusicPlaylist };
