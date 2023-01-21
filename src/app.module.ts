import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'demo_nestjs',
    entities: [__dirname + '/**/*.entity{.ts,.js}',],
    synchronize: true,
  }),DogsModule],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
