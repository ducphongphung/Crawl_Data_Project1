import WebTorrent from "webtorrent";

const client = new WebTorrent();

const torrent = await new Promise((resolve) => {
    client.seed(
      buf,
      {
        private: true,
        announce: [
          "wss://tracker.eueno.io",
          "https://tracker.eueno.io/announce",
        ],
        urlList: ["https://data.eueno.io/0x713ed4826cce211524b299eb22fcfc9778d9b079/Comics/encrypt/1672944079200-qs89y1tmz708x2.test%281%29.png", "https://backup.eueno.io/0x713ed4826cce211524b299eb22fcfc9778d9b079/Comics/encrypt/1672944079200-qs89y1tmz708x2.test%281%29.png"],
        getAnnounceOpts: () => {
          return {
            x_api_key: token,
          };
        },
      },
      resolve
    );
  });