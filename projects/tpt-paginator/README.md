# tpt-paginator [![NPM version](https://badge.fury.io/js/tpt-paginator.svg)](http://badge.fury.io/js/tpt-paginator)

>Angular 7 paginator.
> The simplest solution for pagination in Angular.

## Install
### Install with [npm](npmjs.org):

```bash
npm i tpt-paginator
```

### Basic Usage

Add  below tag in app component. and import TptPaginatorModule in Root module (appModule)
```bash
<tpt-paginator [totalRecords]="141" [noOfLinks]="10" [rows]="10" [(first)]="first" (onPageChange)="onPageChange($event)"></tpt-paginator>
```
### Inputs
```bash
totalRecords - count of the total data
noOfLinks - number of paging links you want to see in paginator 
rows- rows per page
first - first item index in the page
```
### Outputs
```bash
onPageChange - This eavent will rise on every page change with the below information 
first: 10
page: 1
rows: 10
totalRecords: 141
```
### Its simple and classic paginator. if you want to over ride the UI use style selectors.
## Author

**Tirupathi Temburu**
 
+ [github/tirupathi471](https://github.com/tirupathi471)
+ [twitter/ThisZTirupathi](http://twitter.com/ThisZTirupathi) 

## License
Copyright (c) 2019 Tirupathi Temburu, contributors.  
Released under the MIT license

***