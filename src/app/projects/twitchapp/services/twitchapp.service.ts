import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from '../models/twitchusers';
import 'rxjs/Rx';


@Injectable()

export class TwitchAppService {
    apiUrl: string = "https://api.twitch.tv/kraken/streams/";
    apiKey: string = '5fuvkuvgiko6194haii0iuoik3zjom';

    constructor(private http: Http) { }

    getData(query): Observable<Users> {

        let headers = new Headers({ 'Accept': 'application/vnd.twitchtv.v5+json' });
        //headers.append('Client-ID', this.apiKey);
        let options = new RequestOptions({ headers: headers });

        // let params: string = [
        //  `${query}/?` +
        // `client_id=${this.apiKey}`
        //].join();

        let queryUrl: string = this.apiUrl + query + '?client_id=' + this.apiKey;
        //console.log("Query URl : " + queryUrl);
        return this.http.get(queryUrl)
            .map(this.data)
            .catch(this.handleError);
    };

    private data(res: Response) {
        let body = res.json();
        if (body.stream) {
            let t = new Users({
                game: body.stream.game,
                status: body.stream.channel.status,
                display_name: body.stream.channel.display_name,
                viewers: body.stream.viewers,
                logo: body.stream.preview.medium,
                url: body.stream.channel.url
            });
            console.log(t)
            return t;
        }
        else {
            let t = new Users({
                game: '-',
                status: 'Offline',
                display_name: body._links.self.substr(37),
                viewers: '-',
                logo: 'https://s-media-cache-ak0.pinimg.com/736x/69/7b/39/697b399ca80d1c688f7e517468e619c0.jpg',
                url: 'https://www.twitch.tv/' + body._links.self.substr(37)
            });
            console.log("T null: "+t)
            return t;

        }
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}


/*@Injectable()

export class TwitchAppService {
    apiUrl: string = "https://api.twitch.tv/kraken/streams/";
    apiKey: string = '5fuvkuvgiko6194haii0iuoik3zjom';

    constructor(private http: Http) { }

    getData(query): Observable<TwitchUsers[]> {

        let headers = new Headers({ 'Accept': 'application/vnd.twitchtv.v5+json' });
        //headers.append('Client-ID', this.apiKey);
        let options = new RequestOptions({ headers: headers});

       // let params: string = [
          //  `${query}/?` +
           // `client_id=${this.apiKey}`
        //].join();

        let queryUrl: string = this.apiUrl + 'ESL_SC2' + '?client_id='+this.apiKey;
        //console.log("Query URl : " + queryUrl);
        return this.http.get(queryUrl)
            .map(this.data)
            .catch(this.handleError);
    };



    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}*/