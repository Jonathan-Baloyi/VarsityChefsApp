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

import { RegistrationViewModel } from '../models/registration-view-model';

@Injectable()
export class ApplicantService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param IdentityId undefined
   * @return Success
   */
   ByIdentityIdGetResponse(IdentityId: string): Observable<HttpResponse<RegistrationViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();

      __headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      __headers.append('Authorization', `Bearer ${authToken}`);
      
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/${IdentityId}`,
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
        let _body: RegistrationViewModel = null;
        _body = _resp.body as RegistrationViewModel
        return _resp.clone({body: _body}) as HttpResponse<RegistrationViewModel>;
      })
    );
  }

  /**
   * @param IdentityId undefined
   * @return Success
   */
   ByIdentityIdGet(IdentityId: string): Observable<RegistrationViewModel> {
    return this.ByIdentityIdGetResponse(IdentityId).pipe(
      map(_r => _r.body)
    );
  }
}

export module ApplicantService {
}
