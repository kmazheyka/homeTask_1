import { by, element } from 'protractor';

export class qb_newContractRepository {
  readonly ContractName = element(by.xpath("//sr-contract-info//input[contains(@placeholder,'Contract / Agreement Name')]"));
  readonly AccountBusinessCompanyNameInput = element(by.xpath("//sr-contract-info//input[contains(@placeholder,'Account')]"));
  readonly ContactNameInput = element(by.xpath("//sr-contract-info//input[contains(@placeholder,'Contact')]"));
  readonly StateRegionInput = element(by.xpath("//input[contains(@placeholder,'State / Region')]"));
  readonly ContractAgreementNameInput = element(by.xpath("//input[@placeholder='Contract / Agreement Name']"));
  readonly DocumentDropdown = element(by.xpath("//mat-select[@formcontrolname='libraryESignPageId']"));
  readonly BuildContractButton = element(by.xpath("//button//span[contains(text(), 'BUILD CONTRACT')]"));
  readonly YesBuildContractButton = element(by.xpath("//mat-dialog-container//button//span[contains(text(),'Yes – Build Contract')]"));
  readonly ContractNumber = element(by.xpath("//qb-contract//section[contains(@class,'header')]"));
}