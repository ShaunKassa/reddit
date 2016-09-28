import { Component, Input } from '@angular/core';

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes +=1;
    }

    voteDown(): void {
        this.votes -=1;
    }
}

@Component({
  selector: 'reddit-article',
  inputs: ['article'],
  host: {
           class:'row'
        },
  template:`
         <div class="four wide column center aligned votes">
               <div class="ui statistic">
                 <div class="value">
                   {{ article.votes }}
                 </div>
                 <div class="label">
                   Points
                 </div>
               </div>
             </div>
             <div class="twelve wide column">
               <a class="ui large header" href="{{ article.link }}">
                 {{ article.title }}
               </a>
               <ul class="ui big horizontal list voters">
                 <li class="item">
                   <a href (click)="voteUp()">
                     <i class="arrow up icon"></i>
                       upvote
         </a> </li>
                 <li class="item">
                   <a href (click)="voteDown()">
                     <i class="arrow down icon"></i>
                     downvote
                   </a>
         </li> </ul>
         </div>
      `
})


export class ArticleComponent {
        article: Article;

        constructor() {
            this.article = new Article('Angular 2', 'http://angular.io', 14);
        }
        voteUp(): boolean {
           this.article.votes += 1;
           return false;
        }

        voteDown(): boolean {
           this.article.votes -= 1;
           return false;
        }

}

