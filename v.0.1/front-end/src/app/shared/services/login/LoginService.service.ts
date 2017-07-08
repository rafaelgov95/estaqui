import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../../_modelos/user';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }


    logar(email: string, senha: string) {
        //    var headers = new Headers();
        //     headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //     console.log(JSON.stringify({ email: email, senha: senha }));
        //  return this.http.post('http://localhost:3000/autentica', JSON.stringify({ email: email, senha: senha })).map((response: Response) => response.json());
        // return this.http.post('http://localhost:3000/autentica', JSON.stringify({ email: email, senha: senha }),{ headers: headers })
        //     .map((response: Response) => {
        //         let user = response.json();
        //         if (user && user.token) {
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('email', email);
        urlSearchParams.append('senha', senha);
        let body = urlSearchParams.toString()
        
        // var someString: string = "your JSON String here";
        // var jsonObject: any = JSON.parse(someString)
        // console.log(jsonObject)
        // console.log(body)
        // console.log(JSON.stringify({ email: email, senha: senha }))

        return this.http.post('http://localhost:3000/autentica', body, { headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response

                let body = response.json();
                if (body) {
                    if (body.user && body.user.accessToken) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(body.user));
                    }
                }
            });
    }

    create(user: User) {
        return this.http.post('http://localhost:3000/api/usuario/save', user).map((response: Response) => response.json());
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}