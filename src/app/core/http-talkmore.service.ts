import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TalkMore } from '../talk-more/shared/talk-more.model';
// import { PaginationModel } from "app/domain/models/pagination.model";
// import { OrderByModel } from "app/domain/models/order-by.model";
// import { FilterModel } from "app/domain/models/filter.model";
// import { ConfigShared } from "app/_core-module/config/config.shared";
@Injectable({
    providedIn: 'root'
  })
export class HttpTalkMoreService
{
    private apiDomain = 'https://agdo-server.appspot.com';
    public httpHeaders: HttpHeaders;

    constructor(private HTTP: HttpClient)
    {
        this.httpHeaders = new HttpHeaders({
            'applicationid': 'luizKoubatz'
        });
    }

    public getAll(): Observable<any>
    {
        return this.HTTP.get<any>(`${this.apiDomain}/solicitacoes`, {headers: this.httpHeaders});
    }

    public getById(talkMoreId: string): Observable<any>
    {
        return this.HTTP.get<any>(`${this.apiDomain}/solicitacoes/${talkMoreId}`, {headers: this.httpHeaders});
    }

    public delete(talkMoreId: string): Observable<any>
    {
        return this.HTTP.delete<any>(`${this.apiDomain}/solicitacoes/${talkMoreId}`, {headers: this.httpHeaders});
    }

    public post(talkMore: TalkMore): Observable<any>
    {
        const body = talkMore;

        return this.HTTP.post<any>(`${this.apiDomain}/solicitacoes/`, body, {headers: this.httpHeaders});
    }

    public put(talkMore: TalkMore): Observable<any>
    {
        const body = talkMore;

        return this.HTTP.put<any>(`${this.apiDomain}/solicitacoes/${talkMore._id}`, body, {headers: this.httpHeaders});
    }
}
