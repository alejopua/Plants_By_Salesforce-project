import { LightningElement, wire } from 'lwc';
import getAllSpecies from '@salesforce/apex/SpeciesService.getAllSpecies';

export default class SpeciesList extends LightningElement {
  @wire(getAllSpecies)
  species;
  // species.data --> datos devueltos por apex
  // species.error --> error devuelto por apex
}