import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebStoreService {

  private baseUrlLocal = 'http://localhost:8888/api/webstore';
 private baseUrl = 'https://webstoreendpoints20201024213721.azurewebsites.net/api/webstore'
  constructor(private http: HttpClient) { }

    getEntry(id){
        return this.http.get(this.baseUrl+'/'+id);
      }
    
      getAll(){
        return this.http.get(this.baseUrl);
      }

      getListItem(){
        return this.http.get(this.baseUrl);
      }

      getMaxGroup(){
        return this.http.get(this.baseUrl+'/getmaxgroup');
      }

      getMaxPrice(name){
        return this.http.get(this.baseUrl+'/getmaxprice/'+name);
      }
    
      createEntry(entry){
        return this.http.post(this.baseUrl, entry);
      }
    
      updateEntry(id,entry){
        let body = new FormData();
        body.append('id', entry.id);
        body.append('itemName', entry.itemName);
        body.append('cost', entry.cost);
        console.log(body);
        console.log(this.baseUrl+'/'+id);
        return this.http.put(this.baseUrl+'/'+id ,body);
      }
    
      deleteEntry(id){
        return this.http.delete(this.baseUrl+'/'+id);
      }
}
