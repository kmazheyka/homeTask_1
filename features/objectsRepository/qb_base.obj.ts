import {  element, by } from 'protractor';

export class qb_BaseRepository {
  //TollBar buttons
  readonly ToolBarNewButton = element(by.xpath("//button[contains(@class,'mat-raised-button')]//mat-icon[contains(@class, 'mdi-plus')]"));

//SideBar buttons
  readonly SideBarContractCenter = element(by.xpath("//div[@class='menu-container']//a[contains(@href, 'contract')]/div"));

//Progress
  readonly ProgressCircle = element(by.xpath("//div[contains(@class, 'loader')]//mat-spinner"));

  //Switch ON/OFF CRM button
  readonly SwitchCrmButton = element(by.xpath("//sr-crm-switch"));

// Action after create entity
  readonly NoThanksButton = element(by.xpath("//span[contains(text(), 'NO THANKS')]"));
  readonly MapToCrmModalCancelButton = element(by.xpath("//sr-map-to-crm-form//button/span[contains(text(), 'Cancel')]"));
  readonly CompletedModalOkButton = element(by.xpath("//mat-dialog-container//button/span[contains(text(), 'OK')]"));

  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly = element(by.xpath());
  // readonly  = element(by.xpath());


  
}