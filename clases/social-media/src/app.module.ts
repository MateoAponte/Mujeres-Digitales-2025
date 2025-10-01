import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { FeedModule } from './feed/feed.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, CategoriesModule, PostsModule, FeedModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
