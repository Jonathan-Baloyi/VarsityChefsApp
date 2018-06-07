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

import { ApplicantViewModel } from '../models/applicant-view-model';

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
   ByIdentityIdGetResponse(IdentityId: string): Observable<HttpResponse<ApplicantViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
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
        let _body: ApplicantViewModel = null;
        _body = _resp.body as ApplicantViewModel
        return _resp.clone({body: _body}) as HttpResponse<ApplicantViewModel>;
      })
    );
  }

  /**
   * @param IdentityId undefined
   * @return Success
   */
   ByIdentityIdGet(IdentityId: string): Observable<ApplicantViewModel> {
    return this.ByIdentityIdGetResponse(IdentityId).pipe(
      map(_r => _r.body)
    );
  }
}

export module ApplicantService {
}
