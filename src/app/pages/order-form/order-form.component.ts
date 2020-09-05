import {Component, OnInit} from '@angular/core';
import {GardenerOrderDto, OrdersService} from '@iuliacornea/gardener-api';
import {FormControl, RequiredValidator, Validators} from '@angular/forms';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarHelper} from '../../services/SnackBarHelper';
import {Router} from '@angular/router';

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

  constructor(private _snackBar: MatSnackBar, private ordersService: OrdersService, private router: Router) {
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
      this._snackBar.open('Succesfully orderd gardener', null, SnackBarHelper.success);
      this.router.navigate(['/garden']);
    }, error => {
      this._snackBar.open('There was an error while sending your order', null, SnackBarHelper.error);
    });
  }

}
