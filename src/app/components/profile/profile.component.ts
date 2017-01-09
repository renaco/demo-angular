import { Component } from '@angular/core';
import { GitHubService } from '../../services/github.services'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {
    
    title = 'Profile';
    user: any;
    repos: any;
    username: string;

    constructor(private _githubService: GitHubService ){
        this.user = false;
    }

    searchUser(){
        this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user => {
            this.user = user;
            // console.log(user)
        });
        
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
            // console.table(repos)
        });
        
        console.log('get repos')
    }
}