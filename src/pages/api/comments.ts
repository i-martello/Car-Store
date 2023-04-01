import { NextApiRequest, NextApiResponse} from 'next'
import { User as commentSchema } from '../../backend/models/comments.models'

const Comments = async (req: NextApiRequest, res: NextApiResponse) => {
  
  
  const findComments = await commentSchema.find().sort({createdAt: -1})
  
  res.status(200).json(findComments)  
}

export default Comments