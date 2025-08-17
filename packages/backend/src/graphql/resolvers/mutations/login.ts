import { GraphQLResolveInfo } from 'graphql'
import bcrypt from 'bcrypt'
import { User } from '../../../models/User'

export async function login(
  parent: any,
  args: { email: string; password: string },
  context: any,
  info: GraphQLResolveInfo
) {
  const user = await User.findOne({ email: args.email.toLowerCase().trim() })
  if (!user) {
    throw new Error('Credenciais inválidas')
  }

  const ok = await bcrypt.compare(args.password, user.password)
  if (!ok) {
    throw new Error('Credenciais inválidas')
  }

  return {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    company: user.company,
    createdAt: user.createdAt?.toISOString(),
    updatedAt: user.updatedAt?.toISOString(),
  }
}
