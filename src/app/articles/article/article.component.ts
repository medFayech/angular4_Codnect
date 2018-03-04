import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    
    this.resetForm();
  }

  submitForm(articleForm: NgForm){
    if(articleForm.value.$key == null)
    this.articleService.insertArticle(articleForm.value);
    else
    this.articleService.updateArticleList(articleForm.value);
    this.resetForm(articleForm);
  }

  resetForm(articleForm?: NgForm){
    if(articleForm != null)
    articleForm.reset();
    this.articleService.selectedArticle = {
      $key: null,
      name: '',
      description: '',
      type: '',
      status: ''
      
    };
  }

}
