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

import { FacebookAuthViewModel } from '../models/facebook-auth-view-model';

@Injectable()
export class ExternalAuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param model undefined
   */
   ApiExternalAuthFacebookPostResponse(model?: FacebookAuthViewModel): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/ExternalAuth/Facebook`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param model undefined
   */
   ApiExternalAuthFacebookPost(model?: FacebookAuthViewModel): Observable<void> {
    return this.ApiExternalAuthFacebookPostResponse(model).pipe(
      map(_r => _r.body)
    );
  }
}

export module ExternalAuthService {
}
