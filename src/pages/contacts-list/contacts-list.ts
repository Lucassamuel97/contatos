import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';

/**
 * Generated class for the ContactsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts-list',
  templateUrl: 'contacts-list.html',
})
export class ContactsListPage {
  contacts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsProvider: ContactsProvider, private toast: ToastController) {
    this.getContacts();
  }

  getContacts() {
    this.contactsProvider.getContacts()
    .then(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsListPage');
  }

  openContact(id: number) {
    this.contactsProvider.getContact(id)
    .then((result: any) => {
      this.navCtrl.push('ContactDetailsPage',  { 
        contact: result 
      });
    })
    .catch((error: any) => {
      this.toast.create({ message: error.error }).present();
    });
  }
}
