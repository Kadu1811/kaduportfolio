import { BsThreeDots } from "react-icons/bs";

const MusicPlaylist = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-20 flex flex-col rounded-2xl border-0 bg-black p-4 lg:w-3/4">
        <BsThreeDots fontSize={60} color="gray" />

        <p className="mb-6">
          Music has always been a great source of inspiration for me, whether
          I&apos;m coding, working on new projects, or just relaxing.
          Here&apos;s a playlist that reflects my musical taste. I hope you
          enjoy it as much as I do! If music inspires you too, share your
          playlist with me, I&apos;d love to hear it!
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
      </div>
    </div>
  );
};

export { MusicPlaylist };
