import { Module } from '@nestjs/common';

import { ArticleModule } from './article/article.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ArticleModule, UsersModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
