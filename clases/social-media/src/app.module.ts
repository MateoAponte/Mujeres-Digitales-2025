import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { FeedModule } from './feed/feed.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    PostsModule,
    FeedModule,
    CommentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: 'Pes.azul123',
      host: 'localhost',
      database: 'social-media',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
