"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_component_1 = require('./article.component');
var RedditComponent = (function () {
    function RedditComponent() {
        this.articles = [
            new article_component_1.Article('Angular 2', 'http://angular.io', 3),
            new article_component_1.Article('Fullstack', 'http://fullstack.io', 2),
            new article_component_1.Article('Angular Homepage', 'http://angular.io', 1)];
    }
    RedditComponent.prototype.addArticle = function (title, link) {
        this.articles.push(new article_component_1.Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
        return false;
    };
    RedditComponent.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditComponent = __decorate([
        core_1.Component({
            selector: 'reddit',
            styleUrls: [
                '../resources/vendor/styles.css',
                '../resources/vendor/semantic.min.css',
            ],
            template: "\n <form class=\"ui large form segment\">\n      <h3 class=\"ui header\">Add a Link</h3>\n      <div class=\"field\">\n        <label for=\"title\">Title:</label>\n        <input name=\"title\" #newtitle>  <!-- changed -->\n      </div>\n      <div class=\"field\">\n        <label for=\"link\">Link:</label>\n        <input name=\"link\" #newlink> <!-- changed -->\n      </div>\n      <!-- added this button -->\n      <button (click)=\"addArticle(newtitle, newlink)\"\n              class=\"ui positive right floated button\">\n        Submit link\n      </button>\n    </form>\n    <div class=\"ui grid posts\">\n      <reddit-article *ngFor=\"let article of sortedArticles()\" [article]=\"article\">\n      </reddit-article>\n    </div>\n       "
        }), 
        __metadata('design:paramtypes', [])
    ], RedditComponent);
    return RedditComponent;
}());
exports.RedditComponent = RedditComponent;
//# sourceMappingURL=app.component.js.map