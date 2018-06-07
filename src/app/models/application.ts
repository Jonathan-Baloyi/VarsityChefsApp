/* tslint:disable */
import { ResidentialAddress } from './residential-address';
import { AlternativePerson } from './alternative-person';
import { PostalAddress } from './postal-address';

export interface Application {

  disability?: string;

  id?: number;

  firstName?: string;

  lastName?: string;

  cellNumber?: string;

  telephone?: string;

  email?: string;

  gender?: boolean;

  idNumber?: string;

  passportNumber?: string;

  dateOfBirth?: string;

  nationality?: string;

  doYouHaveApermentResidence?: boolean;

  bootSize?: string;

  jacketSize?: string;

  doYouHaveAnyDisability?: boolean;

  applicantId?: number;

  doYouHaveAnyAllegies?: boolean;

  allegies?: string;

  haveYouParticipatedInCookingShowBefore?: boolean;

  whichCookingShows?: string;

  residentialAddress?: ResidentialAddress;

  alternativePerson?: AlternativePerson;

  postalAddress?: PostalAddress;

  haveYouOrYourParentsBeenEmployedByVarsityChefs?: boolean;

  institution?: string;

  yearOfStudy?: string;

  qualification?: string;

  yearStarted?: string;

  declaration?: boolean;

  dateRegistered?: string;

  status?: boolean;
}
