import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RedditComponent } from './app.component';
import { ArticleComponent } from './article.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
                   RedditComponent,
                   ArticleComponent
                 ],
  bootstrap:    [ RedditComponent ]
})
export class RedditAppModule { }

