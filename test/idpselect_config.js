/** @class IdP Selector UI */
function IdPSelectUIParms() {
  this.alwaysShow = true;
  this.dataSource = '/feed.json';
  this.defaultLanguage = 'de';
  this.selectedLanguage = null;
  this.defaultLogo = 'blank.gif';
  this.defaultLogoWidth = 1;
  this.defaultLogoHeight = 1;
  this.defaultReturn = null;
  this.defaultReturnIDParam = null;
  this.redirectAllow = [
    '^https://example.org/Shibboleth.sso/Login.*$',
    '^https://example.com/Shibboleth.sso/Login.*$',
  ];
  this.helpURL =
    'https://wiki.shibboleth.net/confluence/display/SHIB2/DSRoadmap';
  this.ie6Hack = null;
  this.insertAtDiv = 'idpSelect';
  this.maxResults = 10;
  this.myEntityID = null;
  this.preferredIdP = null;
  this.hiddenIdPs = null;
  this.ignoreKeywords = false;
  this.showListFirst = false;
  this.samlIdPCookieTTL = 730;
  this.setFocusTextBox = true;
  this.testGUI = false;

  this.autoFollowCookie = null;
  this.autoFollowCookieTTLs = [1, 60, 270];

  this.langBundles = {};

  this.maxPreferredIdPs = 3;
  this.maxIdPCharsButton = 33;
  this.maxIdPCharsDropDown = 58;
  this.maxIdPCharsAltTxt = 60;

  this.minWidth = 20;
  this.minHeight = 20;
  this.maxWidth = 115;
  this.maxHeight = 69;
  this.bestRatio = Math.log(80 / 60);
}
