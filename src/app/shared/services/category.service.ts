import { Injectable } from '@angular/core';


import { GenericalService } from './generical.service';
import {API_STRAPI} from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private gServ : GenericalService) { }

  getCategories() {
    let url = `${API_STRAPI}/categories`;
    return this.gServ.get(url);
  }
}
