(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4856"],{"3ad6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-page"},[a("div",{staticClass:"banner"},[a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.article.title))]),a("div",{staticClass:"article-meta"},[a("router-link",{attrs:{to:"/@"+t.article.author.username}},[a("img",{attrs:{src:t.article.author.image}})]),a("div",{staticClass:"info"},[a("router-link",{staticClass:"author",attrs:{to:"/@"+t.article.author.username}},[t._v(t._s(t.article.author.username))]),a("span",{staticClass:"date"},[t._v(t._s(t.article.createdAt))])],1),t.article.author.username==t.user.username||t.profile.following?t._e():a("button",{staticClass:"btn btn-sm btn-outline-secondary",on:{click:function(e){return t.followUser()}}},[a("i",{staticClass:"ion-plus-round"}),t._v("\n           \n          Follow "+t._s(t.article.author.username)+"\n        ")]),t.article.author.username!=t.user.username&&t.profile.following?a("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(e){return t.followUser()}}},[a("i",{staticClass:"ion-plus-round"}),t._v("\n           \n          Unfollow "+t._s(t.article.author.username)+"\n        ")]):t._e(),t._v("\n          \n        "),t.article.author.username!=t.user.username&&t.article.favorited?a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.favoriteArticle()}}},[a("i",{staticClass:"ion-heart"}),t._v("\n           \n          UnFavorite Article\n          "),a("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])]):t._e(),t.article.author.username==t.user.username||t.article.favorited?t._e():a("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(e){return t.favoriteArticle()}}},[a("i",{staticClass:"ion-heart"}),t._v("\n           \n          Favorite Article\n          "),a("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])]),t.article.author.username==t.user.username?a("router-link",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{to:"/editor/"+t.article.slug}},[a("i",{staticClass:"ion-edit"}),t._v("\n           \n          Edit Article\n        ")]):t._e(),t._v("  \n        "),t.article.author.username==t.user.username?a("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(e){return t.deleteArticle()}}},[a("i",{staticClass:"ion-trash-a"}),t._v("\n           \n          Delete Article\n          "),a("span",{staticClass:"counter"})]):t._e()],1)])]),a("div",{staticClass:"container page"},[a("div",{staticClass:"row article-content"},[a("div",{staticClass:"col-md-12"},[a("p",[t._v(t._s(t.article.body))])]),t._l(t.article.tagList,(function(e){return a("ul",{key:e,staticClass:"tag-list"},[a("li",{staticClass:"tag-default tag-outline tag-pill"},[t._v(t._s(e))])])}))],2),a("hr"),a("div",{staticClass:"article-actions"},[a("div",{staticClass:"article-meta"},[a("router-link",{attrs:{to:"/@"+t.article.author.username}},[a("img",{attrs:{src:t.article.author.image}})]),a("div",{staticClass:"info"},[a("router-link",{staticClass:"author",attrs:{to:"/@"+t.article.author.username}},[t._v(t._s(t.article.author.username))]),a("span",{staticClass:"date"},[t._v(t._s(t.article.createdAt))])],1),t.article.author.username==t.user.username||t.profile.following?t._e():a("button",{staticClass:"btn btn-sm btn-outline-secondary",on:{click:function(e){return t.followUser()}}},[a("i",{staticClass:"ion-plus-round"}),t._v("\n           \n          Follow "+t._s(t.article.author.username)+"\n        ")]),t.article.author.username!=t.user.username&&t.profile.following?a("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(e){return t.followUser()}}},[a("i",{staticClass:"ion-plus-round"}),t._v("\n           \n          Unfollow "+t._s(t.article.author.username)+"\n        ")]):t._e(),t._v("\n          \n        "),t.article.author.username!=t.user.username&&t.article.favorited?a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.favoriteArticle()}}},[a("i",{staticClass:"ion-heart"}),t._v("\n           \n          UnFavorite Article\n          "),a("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])]):t._e(),t.article.author.username==t.user.username||t.article.favorited?t._e():a("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(e){return t.favoriteArticle()}}},[a("i",{staticClass:"ion-heart"}),t._v("\n           \n          Favorite Article\n          "),a("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])]),t.article.author.username==t.user.username?a("router-link",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{to:"/editor/"+t.article.slug}},[a("i",{staticClass:"ion-edit"}),t._v("\n           \n          Edit Article\n        ")]):t._e(),t._v("  \n        "),t.article.author.username==t.user.username?a("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(e){return t.deleteArticle()}}},[a("i",{staticClass:"ion-trash-a"}),t._v("\n           \n          Delete Article\n          "),a("span",{staticClass:"counter"})]):t._e()],1)]),a("div",{staticClass:"row"},[t.user.username?a("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[a("form",{staticClass:"card comment-form"},[a("div",{staticClass:"card-block"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.body,expression:"comment.body"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment.body},on:{input:function(e){e.target.composing||t.$set(t.comment,"body",e.target.value)}}})]),a("div",{staticClass:"card-footer"},[a("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),a("a",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.postComment()}}},[t._v("Post Comment")])])]),t._l(t.comments,(function(t){return a("CommentPreview",{key:t.id,attrs:{comment:t}})}))],2):t._e(),t.user.username?t._e():a("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[a("router-link",{attrs:{to:"/login"}},[t._v("Sign in")]),t._v("or\n        "),a("router-link",{attrs:{to:"/register"}},[t._v("sign up")]),t._v("to add comments on this article.\n      ")],1)])])])},r=[],n=a("d225"),i=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),m=a("60a3"),d=a("30d0"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-block"},[a("p",{staticClass:"card-text"},[t._v(t._s(t.comment.body))])]),a("div",{staticClass:"card-footer"},[a("router-link",{staticClass:"comment-author",attrs:{to:"/@"+t.comment.author.username}},[a("img",{staticClass:"comment-author-img",attrs:{src:t.comment.author.image}})]),t._v(" \n    "),a("router-link",{staticClass:"comment-author",attrs:{to:"/@"+t.comment.author.username}},[t._v(t._s(t.comment.author.username))]),a("span",{staticClass:"date-posted"},[t._v(t._s(t.comment.createdAt))]),a("span",{staticClass:"mod-options",on:{click:function(e){return t.deleteComment()}}},[a("i",{staticClass:"ion-trash-a"})])],1)])},f=[],b=function(t){function e(){return Object(n["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"deleteComment",value:function(){d["a"].article&&this.comment&&d["a"].deleteComment({id:this.comment.id,slug:d["a"].article.slug})}}]),e}(m["c"]);Object(u["a"])([Object(m["b"])()],b.prototype,"comment",void 0),b=Object(u["a"])([m["a"]],b);var h=b,C=h,_=a("2877"),p=Object(_["a"])(C,v,f,!1,null,null,null),g=p.exports,k=a("6395"),y=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.comment={body:"",slug:""},t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"created",value:function(){var t=this;d["a"].getArticle(this.$route.params.slug).then((function(){k["a"].loadProfile(t.article.author.username)})),d["a"].getComments(this.$route.params.slug)}},{key:"postComment",value:function(){var t=this;this.article&&(this.comment.slug=this.article.slug,d["a"].createComment(this.comment).then((function(){return t.comment.body=""})))}},{key:"deleteArticle",value:function(){var t=this;this.article&&d["a"].deleteArticle(this.article.slug).then((function(){return t.$router.push("/")}))}},{key:"followUser",value:function(){this.profile.following?k["a"].unfollow(this.article.author.username):k["a"].follow(this.article.author.username)}},{key:"favoriteArticle",value:function(){this.article.favorited?d["a"].unFavoriteArticle(this.article.slug):d["a"].favoriteArticle(this.article.slug)}},{key:"article",get:function(){return d["a"].article||{slug:"",author:{username:""},favorited:!1}}},{key:"comments",get:function(){return d["a"].comments||[]}},{key:"user",get:function(){return k["a"].user||{}}},{key:"profile",get:function(){return k["a"].profile||{following:!1}}}]),e}(m["c"]);y=Object(u["a"])([Object(m["a"])({components:{CommentPreview:g}})],y);var w=y,A=w,j=Object(_["a"])(A,s,r,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d0c4856.7d957881.js.map