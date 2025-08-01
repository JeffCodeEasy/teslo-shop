import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
      JWT_SECRET: Joi.string().required(),
    // Otras variables también
  }),
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB!,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),

    // ServeStaticModule.forRoot({
    //   rootPath: join('__dirname','..','public'),
    // }),

    ProductsModule,

    CommonModule,

    SeedModule,

    FilesModule,

    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
