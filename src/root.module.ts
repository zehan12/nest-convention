import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';

@Module({
  imports: [UserModule],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
