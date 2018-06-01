/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { CredentialsViewModel } from '../models/credentials-view-model';

@Injectable()
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param credentials undefined
   */
   ApiAuthLoginPostResponse(credentials?: CredentialsViewModel): Observable<HttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();

    __headers.append('Content-Type', 'application/json');

    let __body: any = null;

    __body = credentials;
    
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Auth/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: any = null;
        _body = _resp.body as any;
        return _resp.clone({body: _body}) as HttpResponse<any>;
      })
    );
  }

  /**
   * @param credentials undefined
   */
   ApiAuthLoginPost(credentials?: CredentialsViewModel): Observable<any> {
    return this.ApiAuthLoginPostResponse(credentials).pipe(
      map(_r => _r.body)
    );
  }
}

export module AuthService {
}
