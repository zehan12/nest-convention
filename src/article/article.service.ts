import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  public articles = [];

  addArticle(article: any): any[] {
    this.articles.push(article);
    return this.articles;
  }

  getAllArticle(): any[] {
    return this.articles;
  }

  deleteArticle(id: string): any[] {
    this.articles = this.articles.filter((article) => article.id !== id);
    return this.articles;
  }

  updateArticle(article: any): any[] {
    const idx = this.articles.findIndex(
      (currentArticle) => (currentArticle.id = article.id),
    );
    this.articles[idx] = article;
    return this.articles;
  }
}
