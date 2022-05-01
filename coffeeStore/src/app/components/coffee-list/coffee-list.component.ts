import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coffee } from 'src/app/models/coffee.model';
import { AppState } from 'src/app/ngrx-state/app.state';
import { getCoffeeAction } from 'src/app/ngrx-state/coffee/coffee.actions';
import { getCoffee } from 'src/app/ngrx-state/coffee/coffee.selector';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['id', 'blend_name', 'origin', 'variety', 'notes', 'intensifier'];
  coffees: Coffee[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getCoffee).subscribe(data => {
      console.log("Component",data)
      this.dataSource = new MatTableDataSource(data);
    });
    this.store.dispatch(getCoffeeAction());
    
  }

}
