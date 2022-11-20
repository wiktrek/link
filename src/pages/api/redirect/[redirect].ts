import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../data';
// https://www.instagram.com/wiktrek1232
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const l = req.query['redirect'];
  console.log(l);

  await data.map((item) => {
    if (l === item.name) {
      res.redirect(item.redirect);
    }
  });
  return res.redirect('https://wiktrek.xyz/links');
};
