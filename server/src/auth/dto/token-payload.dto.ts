import { UserRole } from '../enums/user-role.enum'

export class TokenPayload {
  email: string
  sub: string
  role: UserRole
}
