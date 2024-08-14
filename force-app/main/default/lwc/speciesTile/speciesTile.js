import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SpeciesTile extends NavigationMixin(LightningElement) {
  @api specie;

  get isOutdoor() {
    return this.specie.Location__c.includes('Outdoor')
  };

  get isIndoor() {
    return this.specie.Location__c.includes('Indoor')
  };

  navigateToRecordViewPage() {
    // View a custom object record.
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.specie.Id,
        objectApiName: "Species__c", // objectApiName is optional
        actionName: "view",
      },
    });
  }
}