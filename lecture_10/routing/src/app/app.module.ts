import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubServiceService } from './services/github-service.service';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { FollowerComponent } from './follower/follower.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './posts/post.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowerComponent,
    NavbarComponent,
    NotFoundComponent,
    GithubProfileComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      // Routes are called in order!!!
      { 
        path: '', 
        component: HomeComponent
      },
      { 
        path: 'followers/follower/:id/:username', 
        component: GithubProfileComponent
      },
      { 
        path: 'followers', 
        component: FollowerComponent
      },
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    GithubServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
