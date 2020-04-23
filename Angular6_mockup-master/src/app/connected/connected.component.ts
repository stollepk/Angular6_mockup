import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material';
import { Entity } from '../models/entity';
import { EntityService } from '../services/entity.service'


@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})

export class ConnectedComponent implements OnInit {

  entities: Entity[];

  constructor(private entityService : EntityService) { }

  ngOnInit() {
  	this.entityService.getEntities().subscribe(
  	 	entities => {this.entities = entities.filter(value => value['selected'] == true)}
  	); 

  	const body = document.getElementsByTagName('body')[0];
    body.classList.add('connected');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('connected');
  }
  
  panelOpenState = false;
}
