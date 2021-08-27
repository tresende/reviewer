import { NextApiRequest, NextApiResponse } from 'next'
import Mock from 'mocks/mock'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(Mock)
}
