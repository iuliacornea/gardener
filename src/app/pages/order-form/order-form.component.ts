import {Component, OnInit} from '@angular/core';
import {GardenerOrderDto, OrdersService} from '@iuliacornea/gardener-api';
import {FormControl, RequiredValidator, Validators} from '@angular/forms';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarHelper} from '../../services/SnackBarHelper';

@Component({
  selector: 'gar-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  gardenerName = new FormControl('', Validators.required);
  wifiNetwork = new FormControl('', Validators.required);
  wifiPassword = new FormControl('', Validators.required);
  hidePass = true;

  constructor(private _snackBar: MatSnackBar, private ordersService: OrdersService) {
  }

  ngOnInit(): void {
  }

  onSave(): void {
    if (!this.gardenerName.value || !this.wifiNetwork.value || !this.wifiPassword.value) {
      this._snackBar.open('All fields are mandatory', null, SnackBarHelper.error);
      return;
    }
    const order: GardenerOrderDto = {
      userId: LocalStorageHelper.retrieveUser().id,
      gardenerName: this.gardenerName.value,
      wifiNetwork: this.wifiNetwork.value,
      wifiPassword: this.wifiPassword.value
    };
    this.ordersService.postOrder(LocalStorageHelper.retrieveUser().token, order).subscribe(response => {
      this._snackBar.open(response.status, null, SnackBarHelper.success);
    }, error => {
      this._snackBar.open(error.status, null, SnackBarHelper.error);
    });
  }

}
