import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GitHubService{
    private username: string;
    private client_id = 'c762355143dfef262f8e';
    private client_secret = '0b5ab38044705828ac952b2b3aced6afdcb99bc3';

    constructor(private _http: Http){
        console.log('Github Service Ready');
        this.username = 'renaco';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret' + this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }
}
