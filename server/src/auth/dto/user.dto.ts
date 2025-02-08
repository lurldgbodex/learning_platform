import { UserRole } from '../enums/user-role.enum'

export class UserDto {
  id: string
  email: string
  role: UserRole
}
