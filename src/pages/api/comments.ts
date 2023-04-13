import { NextApiRequest, NextApiResponse} from 'next'
import { User as commentSchema } from '../../lib/models/comments.models'
import mongoose from 'mongoose'

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Base de datos funcionando");
  } catch (error) {
    console.log(error);
  }
})();


const Comments = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const findComments = await commentSchema.find().sort({createdAt: -1})
  
  res.status(200).json(findComments)  
}

export default Comments