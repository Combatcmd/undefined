import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { UtilsService, SearchService, EntryService } from '../../shared'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { map } from 'rxjs/operators'

import {
  ADVERT_STATUS,
  PLAN_TYPE,
  PLAN_DURATION_TYPE,
  YEAR_LIST,
} from './search.constants'
// import { MultiselectDropdown } from '../../components/multiselect/multiselect.component'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  tabs: 'advert' | 'lot' | 'plan'
  keyword: string
  deliveryKatoCode: any
  deliveryKatoCodeList: any
  customers: any[] = []
  customer: any
  organizers: any[] = []
  organizer: any
  pMethod: any
  tenderTypes: any
  advertStatuses: any
  advertStatusArray: any = ADVERT_STATUS
  lotStatuses: any = 'PUBLISHED'
  planTypeList: any[]
  planTypeListArray: any[] = PLAN_TYPE
  planDurationTypeList: any[]
  planDurationTypeListArray: any[] = PLAN_DURATION_TYPE
  jhiYearList: any[]
  jhiYearListArray: any[] = YEAR_LIST
  durationMonth: any
  priceFrom: number
  priceTo: number
  beginAcceptanceBeginTime: any
  endAcceptanceEndTime: any
  goods: boolean
  works: boolean
  services: boolean

  page: any
  reverse: any
  predicate: any

  serverTimeObservable: any
  afterFirstApril: boolean

  // @ViewChild('pmetod') msPmetod: MultiselectDropdown
  // @ViewChild('advertStatus') msAdvertStatus: MultiselectDropdown
  // @ViewChild('planType') msPlanType: MultiselectDropdown
  // @ViewChild('planDurationType') msPlanDurationType: MultiselectDropdown
  // @ViewChild('jhiYear') msJhiYear: MultiselectDropdown

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public translateService: TranslateService,
    public utils: UtilsService,
    public searchService: SearchService,
    public entryService: EntryService
  ) {}

  ngOnInit() {
    // this.activeRoute.queryParams.subscribe((routeParams: Params) => {
    //   let savedParams = this.getQueryParams()
    //   let params = routeParams
    //   if (
    //     !this.utils.isEmpty(savedParams['tabs']) &&
    //     this.utils.isEmpty(routeParams['tabs'])
    //   ) {
    //     params = savedParams
    //   }
    //   this.tabs = params['tabs'] ? params['tabs'] : 'advert'
    //   this.keyword = params['q']
    //   this.deliveryKatoCodeList = params['loc'] || []
    //   this.customer = params['cust']
    //   this.organizer = params['org']
    //   this.pMethod = params['pmet']
    //   this.advertStatuses = params['adst']
    //     ? Number.isInteger(parseInt(params['q'], 10))
    //       ? 'ALL'
    //       : params['adst']
    //     : 'PUBLISHED'

    //   this.lotStatuses = params['lst']
    //     ? Number.isInteger(parseInt(params['q'], 10))
    //       ? 'ALL'
    //       : params['lst']
    //     : 'PUBLISHED'
    //   this.planTypeList = params['ptl']
    //   this.planDurationTypeList = params['pdtl']
    //   this.jhiYearList = params['yl']
    //   this.durationMonth = params['dm']
    //   this.priceFrom = params['pfrom']
    //   this.priceTo = params['pto']
    //   this.beginAcceptanceBeginTime = params['bab']
    //   this.endAcceptanceEndTime = params['eae']
    //   this.goods = params['g']
    //   this.works = params['w']
    //   this.services = params['s']
    //   this.page = params['page'] ? params['page'] : 1
    //   this.reverse = params['sort']
    //     ? params['sort'].split(',')[1] === 'asc'
    //     : ''
    //   this.predicate = params['sort'] ? params['sort'].split(',')[0] : ''
    //   this.createQueryParams()
    // })
    this.searchService.getAdvertList(
      {
        tenderSubjectTypes: [],
        advertStatuses: ['PUBLISHED'],
      },
      { page: 1, size: 10 }
    ).subscribe(res => console.log(res))
    this.entryService.getOpenApi('tender_type').subscribe(
      (res) => {
        this.tenderTypes = res
        this.filterTenderTypes()
      },
      (err) => console.log(err)
    )
  }

  ngOnDestroy() {}

  filterTenderTypes() {
    if (this.tabs === 'plan') {
      this.beginAcceptanceBeginTime = null
      this.endAcceptanceEndTime = null
    }
  }

  find() {
    this.page = 1
    this.filterTenderTypes()
    let queryParam = this.createQueryParams()
    this.router.navigateByUrl(`/ext/search${queryParam}`)
  }

  createQueryParams() {
    let params = []
    if (!this.utils.isEmpty(this.tabs)) {
      params.push({ name: 'tabs', value: this.tabs })
    }
    if (!this.utils.isEmpty(this.keyword)) {
      params.push({ name: 'q', value: this.keyword.trim() })
    }
    if (!this.utils.isEmpty(this.deliveryKatoCodeList)) {
      params.push({
        name: 'loc',
        value: (this.deliveryKatoCodeList + '').split(','),
      })
    }
    if (!this.utils.isEmpty(this.customer)) {
      params.push({ name: 'cust', value: this.customer })
    }
    if (!this.utils.isEmpty(this.organizer)) {
      params.push({ name: 'org', value: this.organizer })
    }
    if (!this.utils.isEmpty(this.pMethod)) {
      params.push({ name: 'pmet', value: (this.pMethod + '').split(',') })
    }
    if (!this.utils.isEmpty(this.advertStatuses)) {
      params.push({
        name: 'adst',
        value: (this.advertStatuses + '').split(','),
      })
    }
    if (!this.utils.isEmpty(this.lotStatuses)) {
      params.push({ name: 'lst', value: (this.lotStatuses + '').split(',') })
    }
    if (!this.utils.isEmpty(this.planTypeList)) {
      params.push({ name: 'ptl', value: (this.planTypeList + '').split(',') })
    }
    if (!this.utils.isEmpty(this.planDurationTypeList)) {
      params.push({
        name: 'pdtl',
        value: (this.planDurationTypeList + '').split(','),
      })
    }
    if (!this.utils.isEmpty(this.jhiYearList)) {
      params.push({ name: 'yl', value: (this.jhiYearList + '').split(',') })
    }
    if (!this.utils.isEmpty(this.durationMonth)) {
      params.push({ name: 'dm', value: this.durationMonth })
    }
    if (!this.utils.isEmpty(this.priceFrom)) {
      params.push({ name: 'pfrom', value: this.priceFrom })
    }
    if (!this.utils.isEmpty(this.priceTo)) {
      params.push({ name: 'pto', value: this.priceTo })
    }
    if (!this.utils.isEmpty(this.beginAcceptanceBeginTime)) {
      params.push({ name: 'bab', value: this.beginAcceptanceBeginTime })
    }
    if (!this.utils.isEmpty(this.endAcceptanceEndTime)) {
      params.push({ name: 'eae', value: this.endAcceptanceEndTime })
    }
    if (this.goods) {
      params.push({ name: 'g', value: this.goods })
    }
    if (this.works) {
      params.push({ name: 'w', value: this.works })
    }
    if (this.services) {
      params.push({ name: 's', value: this.services })
    }
    if (!this.utils.isEmpty(this.predicate)) {
      params.push({
        name: 'sort',
        value: this.predicate + ',' + (this.reverse ? 'asc' : 'desc'),
      })
    }
    if (!this.utils.isEmpty(this.page)) {
      params.push({ name: 'page', value: this.page })
    }
    this.searchService.set('params', params)
    let queryParam = this.utils.createUrlParams(params)
    this.searchService.set('queryParam', queryParam)
    return queryParam
  }

  getQueryParams() {
    let params = this.searchService.get('params')
    let queryParams = {}
    if (params && params.length) {
      params.forEach((el) => {
        if (el.name && el.value) {
          queryParams[el.name] = el.value
        }
      })
    }
    return queryParams
  }

  searchCompanies(q, b: 'customer' | 'organizer') {
    if (q.length > 2) {
      this.searchService
        .searchCompanies(q)
        .pipe(map((res) => res.body))
        .subscribe(
          (res) => {
            if (b === 'customer') {
              this.customers = res.filter((e, i, a) => {
                return a.map((e) => e.nameRu).indexOf(e.nameRu) === i
              })
            }
            if (b === 'organizer') {
              this.organizers = res.filter((e, i, a) => {
                return a.map((e) => e.nameRu).indexOf(e.nameRu) === i
              })
            }
          },
          (err) => {
            if (b === 'customer') {
              this.customers = []
            }
            if (b === 'organizer') {
              this.organizers = []
            }
          }
        )
    }
  }

  setCustomer(q) {
    this.customer = q[this.utils.createFieldWCurLang('name')]
  }

  setOrganizer(q) {
    this.organizer = q[this.utils.createFieldWCurLang('name')]
  }
  trackId(index: number, item: any) {
    return item.id || index
  }

  filterItems() {
    return ['TKP', 'VK', 'IO'].includes(this.pMethod) && this.tabs === 'advert'
      ? ['CLOSED', 'CANCELLED']
      : ['TKP', 'VK', 'IO'].includes(this.pMethod) && this.tabs === 'lot'
      ? ['NEGFAILED', 'CANCELLED', 'EXECUTED']
      : null
  }

  checkMethod(method) {
    if (
      ['TKP', 'VK', 'IO'].includes(method) &&
      this.tabs === 'advert' &&
      !['CLOSED', 'CANCELLED'].some((r) => this.advertStatuses.includes(r))
    ) {
      this.advertStatuses = 'ALL'
      this.find()
    } else if (
      ['TKP', 'VK', 'IO'].includes(method) &&
      this.tabs === 'lot' &&
      !['NEGFAILED', 'CANCELLED', 'EXECUTED'].some((r) =>
        this.lotStatuses.includes(r)
      )
    ) {
      this.lotStatuses = 'ALL'
      this.find()
    }
  }

  clearFilter() {
    this.keyword = null
    this.deliveryKatoCode = null
    this.deliveryKatoCodeList = null
    this.customer = null
    this.organizer = null
    this.pMethod = null
    this.advertStatuses = ['PUBLISHED']
    this.lotStatuses = ['PUBLISHED']
    this.planTypeList = null
    this.planDurationTypeList = null
    this.jhiYearList = null
    this.durationMonth = null
    this.priceFrom = null
    this.priceTo = null
    this.beginAcceptanceBeginTime = null
    this.endAcceptanceEndTime = null
    this.goods = false
    this.works = false
    this.services = false
    // this.msPmetod && this.msPmetod.clear()
    // this.msAdvertStatus && this.msAdvertStatus.clear()
    // this.msPlanType && this.msPlanType.clear()
    // this.msPlanDurationType && this.msPlanDurationType.clear()
    // this.msJhiYear && this.msJhiYear.clear()
    this.find()
  }

  setEntry(data) {
    if (typeof this.deliveryKatoCodeList === 'string') {
      this.deliveryKatoCodeList = this.deliveryKatoCodeList.split(',')
    }
    this.deliveryKatoCodeList[0] = data.code
  }
}
