import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  // add article
  @Post('/add')
  addArticle(): string {
    return 'This route handle to create article';
  }

  // get all article
  @Get('/all')
  getArticles(): string {
    return 'This route handle to get all articles';
  }

  // add article
  @Put('/update')
  updateArticle(): string {
    return 'This route handle to update article';
  }

  // add article
  @Delete('/delete')
  deleteArticle(): string {
    return 'This route handle to delete article';
  }
}
