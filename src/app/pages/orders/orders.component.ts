import {Component, OnInit} from '@angular/core';
import {GardenerOrderDto, OrdersService, OrderStatus, UserRole} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {take} from 'rxjs/operators';
import {response} from 'express';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarHelper} from '../../services/SnackBarHelper';

@Component({
  selector: 'gar-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dataSource: GardenerOrderDto[] = [];
  displayedColumns: string[] = ['id', 'gardenerName', 'createdAt', 'status', 'action'];

  constructor(private ordersService: OrdersService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadOrders();
  }


  approveOrder(order: GardenerOrderDto): void {
    this.updateOrder(order, OrderStatus.APPROVED);
  }

  completeOrder(order: GardenerOrderDto): void {
    this.updateOrder(order, OrderStatus.COMPLETED);
  }

  cancelOrder(order: GardenerOrderDto): void {
    this.updateOrder(order, OrderStatus.CANCELLED);
  }

  updateOrder(order: GardenerOrderDto, status: OrderStatus): void {
    const toUpdate: GardenerOrderDto = JSON.parse(JSON.stringify(order));
    toUpdate.status = status;
    this.ordersService.postOrder(this.adminToken(), toUpdate).pipe(take(1)).subscribe(updated => {
      this.loadOrders();
    }, error => {
      this.handleErrorOnOrderUpdate(error);
    });
  }

  loadOrders(): void {
    this.ordersService.getOrders(this.adminToken()).pipe(take(1)).subscribe(orders => {
      this.dataSource = orders.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    });
  }

  adminToken(): string {
    return LocalStorageHelper.retrieveUser().role === UserRole.ADMIN && LocalStorageHelper.retrieveUser().token;
  }

  private handleErrorOnOrderUpdate(error: any): void {
    this._snackBar.open(error.status, null, SnackBarHelper.error);
  }
}
