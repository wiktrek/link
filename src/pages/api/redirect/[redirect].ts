import { NextApiRequest, NextApiResponse } from 'next';

// https://www.instagram.com/wiktrek1232
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const l = req.query['redirect'];
  console.log(l);
  const data = [
    {
      name: 'ig',
      redirect: 'https://www.instagram.com/wiktrek1232',
    },
    {
      name: 'gh',
      redirect: 'https://github.com/wiktrek',
    },
    {
      name: 'website',
      redirect: 'https://www.wiktrek.xyz/',
    },
    {
      name: 'ttv',
      redirect: 'https://www.twitch.tv/wiktrek1232',
    },
    {
      name: 'yt',
      redirect: 'https://www.youtube.com/channel/UCd67pmblUu1gf5yhItABbqA',
    },
  ];

  data.map((item) => {
    if (l === item.name) {
      res.redirect(item.redirect);
    }
  });
};
