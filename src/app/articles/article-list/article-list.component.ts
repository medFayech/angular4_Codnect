import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList: Article[];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    var x = this.articleService.getData();
    x.snapshotChanges().subscribe( item =>{
      this.articleList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.articleList.push(y as Article);
      });
    }

    );
  }

  onEdit(art: Article){
    this.articleService.selectedArticle = Object.assign({}, art)
  }

  onDelete(key: string){
    this.articleService.delete(key);
  }

}
