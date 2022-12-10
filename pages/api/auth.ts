// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function authHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.json({ 'name': req.body })
}
