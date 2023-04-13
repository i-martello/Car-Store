import { NextApiRequest, NextApiResponse} from 'next'
import { User as commentSchema } from '../../lib/models/comments.models'

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {

  const data = JSON.parse(req.body)
  console.log(data);
  
  const {usuario, comentario, pageId} = data

  await commentSchema.create({usuario, comentario, pageId})
  res.end()
}

export default addComment