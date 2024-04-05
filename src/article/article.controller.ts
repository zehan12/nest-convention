import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  // add article
  @Post('/add')
  addArticle(@Body() article): any {
    console.log(article);
    return this.articleService.addArticle(article);
  }

  // get all article
  @Get('/all')
  getArticles(): any {
    return this.articleService.getAllArticle();
  }

  // update article
  @Put('/update/:articleId')
  updateArticle(@Body() article): any {
    return this.articleService.updateArticle(article);
  }

  // delete article
  @Delete('/delete/:articleId')
  deleteArticle(@Param() params): any {
    return this.articleService.deleteArticle(params.id);
  }
}
