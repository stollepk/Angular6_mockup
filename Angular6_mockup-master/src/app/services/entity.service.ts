import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { filter } from "rxjs/operators";

import { Entity } from '../models/entity';
import { Entities } from '../models/mock-list';

@Injectable()
export class EntityService {
	private entities = new BehaviorSubject<Entity[]>(Entities);

	getEntities(): Observable<Entity[]> {
        return this.entities.asObservable();
    }
}