import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [UserModule],
  controllers: [ArticleController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
