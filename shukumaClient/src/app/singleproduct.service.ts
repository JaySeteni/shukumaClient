import { Injectable } from '@angular/core';
import { SingleproductComponent } from './comps/singleproduct/singleproduct.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleproductService {

  constructor(private http: HttpClient) { }
}
