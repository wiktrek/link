import { NextApiRequest, NextApiResponse } from 'next';

// https://www.instagram.com/wiktrek1232
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const l = req.query['redirect'];
  console.log(l);
  const data = [
    {
      name: 'instagram',
      redirect: 'https://www.instagram.com/wiktrek1232',
    },
    {
      name: 'gh',
      redirect: 'https://github.com/wiktrek',
    },
  ];

  data.map((item) => {
    if (l === item.name) {
      res.redirect(item.redirect);
    }
  });
};
