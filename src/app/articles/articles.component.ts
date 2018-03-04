import { Component, OnInit } from '@angular/core';
import { ArticleService } from './shared/article.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers:[ArticleService]
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

}
