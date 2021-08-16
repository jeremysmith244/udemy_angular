import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadRequestError } from '../bad-request-error';
import { throwError } from 'rxjs';

export class DataService {
  constructor(private url: string, private http: HttpClient) {
    // Constructor in angular should only be used to manage dependency injections
  }

  getAll() {
    return this.http.get(this.url)
      .pipe(catchError(err => {
        return throwError( this.handleError(err) );
      }));
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError(err => {
        return throwError( this.handleError(err) );
      }));
  }

  getItemUrl(resource: any) {
    return this.url + '/' + resource.id;
  }

  update(resource: any) {
    this.http.put(this.getItemUrl(resource), JSON.stringify(resource))
      .pipe(catchError(err => {
        return throwError( this.handleError(err) );
      }));
  }

  delete(resource: any) {
    return this.http.delete(this.getItemUrl(resource))
      .pipe(catchError(err => {
        return throwError( this.handleError(err) );
      }))
  }

  private handleError(err: Response) {
  if (err.status === 400)
    return new BadRequestError(err);
  if (err.status === 404)
    return new NotFoundError(err);
  else
    return new AppError(err);
  }

}
