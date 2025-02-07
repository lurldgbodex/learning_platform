import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HealthModule } from './health/health.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    HealthModule,
    AuthModule,
  ],
})
export class AppModule {}
