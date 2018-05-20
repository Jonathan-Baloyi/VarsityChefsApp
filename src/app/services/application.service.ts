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

import { Application } from '../models/application';

@Injectable()
export class ApplicationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param email undefined
   * @return Success
   */
   ApiApplicationByEmailGetResponse(email: string): Observable<HttpResponse<Application>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Application/${email}`,
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
        let _body: Application = null;
        _body = _resp.body as Application
        return _resp.clone({body: _body}) as HttpResponse<Application>;
      })
    );
  }

  /**
   * @param email undefined
   * @return Success
   */
   ApiApplicationByEmailGet(email: string): Observable<Application> {
    return this.ApiApplicationByEmailGetResponse(email).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ApplicationService.ApiLoginGetParams` containing the following parameters:
   *
   * - `password`: 
   *
   * - `email`: 
   *
   * @return Success
   */
   ApiLoginGetResponse(params: ApplicationService.ApiLoginGetParams): Observable<HttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.password != null) __params = __params.set("password", params.password.toString());
    if (params.email != null) __params = __params.set("email", params.email.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/login`,
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
        let _body: boolean = null;
        _body = _resp.body == 'true'
        return _resp.clone({body: _body}) as HttpResponse<boolean>;
      })
    );
  }

  /**
   * @param params The `ApplicationService.ApiLoginGetParams` containing the following parameters:
   *
   * - `password`: 
   *
   * - `email`: 
   *
   * @return Success
   */
   ApiLoginGet(params: ApplicationService.ApiLoginGetParams): Observable<boolean> {
    return this.ApiLoginGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param application undefined
   * @return Success
   */
   ApiApplicationPostResponse(application?: Application): Observable<HttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = application;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Application`,
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
        let _body: string = null;
        _body = _resp.body as string
        return _resp.clone({body: _body}) as HttpResponse<string>;
      })
    );
  }

  /**
   * @param application undefined
   * @return Success
   */
   ApiApplicationPost(application?: Application): Observable<string> {
    return this.ApiApplicationPostResponse(application).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ApplicationService.ApiApplicationByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `application`: 
   *
   * @return Success
   */
   ApiApplicationByIdPutResponse(params: ApplicationService.ApiApplicationByIdPutParams): Observable<HttpResponse<Application>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.application;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Application/${params.id}`,
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
        let _body: Application = null;
        _body = _resp.body as Application
        return _resp.clone({body: _body}) as HttpResponse<Application>;
      })
    );
  }

  /**
   * @param params The `ApplicationService.ApiApplicationByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `application`: 
   *
   * @return Success
   */
   ApiApplicationByIdPut(params: ApplicationService.ApiApplicationByIdPutParams): Observable<Application> {
    return this.ApiApplicationByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

export module ApplicationService {

  /**
   * Parameters for ApiLoginGet
   */
   export interface ApiLoginGetParams {

    password?: string;

    email?: string;
  }

  /**
   * Parameters for ApiApplicationByIdPut
   */
   export interface ApiApplicationByIdPutParams {

    id: number;

    application?: Application;
  }
}
