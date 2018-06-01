/* tslint:disable */
import { AlternativeAddress } from './alternative-address';

export interface AlternativePerson {

  alternativeName?: string;

  alternativeSurname?: string;

  alternativeInitials?: string;

  alternativeRelationShip?: string;

  alternativeCellNumber?: string;

  alternativeTelephone?: string;

  alternativeEmailAddress?: string;

  alternativeAddress?: AlternativeAddress;
}
