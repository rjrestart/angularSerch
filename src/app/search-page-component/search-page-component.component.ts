import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Observable, Subject,debounceTime, Subscription, finalize } from 'rxjs';
import { Result } from './result';
import { SearchPageService } from './search-page.service'

@Component({
  selector: 'app-search-page-component',
  templateUrl: './search-page-component.component.html',
  styleUrls: ['./search-page-component.component.css']
})
export class SearchPageComponentComponent implements OnInit, OnDestroy {

  text: string = ''
  filteredResults: Result[] = [];
  isLoading: boolean = false;
  selectedResult?: Result;
  subject = new Subject<any>();
  subscription?: Subscription;

  constructor(
    private searchPageService : SearchPageService,
  ) { }

  ngOnInit(): void {
   this.subscription = this.subject.pipe(
      debounceTime(1000),
    ).subscribe ((res)=>{
      this.searchPageService.search(res)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((res)=> {
        this.filteredResults = res.items;
      })
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
 
   search(): void {
     this.filteredResults = [];
     if(!this.text.trim()) return;
     this.isLoading = true;
     this.subject.next(this.text);
   }

   buttonSerch(value: string): void { 
     this.text = value;
     this.search();
   }

   selectRes(option: Result): void {
    this.selectedResult = option;
   }
}
