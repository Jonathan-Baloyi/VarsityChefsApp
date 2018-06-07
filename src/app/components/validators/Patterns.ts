import {Injectable} from '@angular/core';

@Injectable()
export class Patterns {
  email = /^[a-z0-9]+([.-][_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/i;
  cell = /^((\+[0-9]{2})|[0])[0-9]{2}([ -])?[0-9]{3}([ -])?[0-9]{4}$/;
}
