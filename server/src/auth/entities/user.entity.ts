import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { UserRole } from '../enums/user-role.enum'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ type: 'enum', enum: UserRole, default: UserRole.STUDENT })
  role: UserRole

  @Column({ type: 'text', nullable: true })
  refreshToken: string | null

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
