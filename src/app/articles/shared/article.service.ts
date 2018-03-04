import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articleList: AngularFireList<any>;
  selectedArticle: Article = new Article();

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.articleList = this.firebase.list('articles');
    return this.articleList;
  }

  insertArticle(article: Article){
    this.articleList.push(
      {
        name: article.name,
        description: article.description,
        type: article.type,
        status: article.status
      }
    );
  }

  updateArticleList(article: Article){
    this.articleList.update(article.$key,
      {
        name: article.name,
        description: article.description,
        type: article.type,
        status: article.status
      }
    );
  }

  delete($key: string){
    this.articleList.remove($key);
  }

}
