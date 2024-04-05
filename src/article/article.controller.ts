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
import { Article } from './data/article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  // add article
  @Post('/add')
  addArticle(@Body() article): Article[] {
    return this.articleService.addArticle(article);
  }

  // get all article
  @Get('/all')
  getArticles(): Article[] {
    return this.articleService.getAllArticle();
  }

  // update article
  @Put('/update')
  updateArticle(@Body() article: Article): Article[] {
    return this.articleService.updateArticle(article);
  }

  // delete article
  @Delete('/delete/:articleId')
  deleteArticle(@Param() params): Article[] {
    return this.articleService.deleteArticle(params.id);
  }
}
