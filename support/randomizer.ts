import { browser } from "protractor";

export class Randomizer {

  public async randomString(value: number) {

    var str = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < value; i++)
      str += possible.charAt(Math.floor(Math.random() * possible.length));
    return str;
  }
}
