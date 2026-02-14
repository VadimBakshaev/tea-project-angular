import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import jQuery from 'jquery';
import 'slick-carousel';
import {
  NgbAccordionButton,
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionBody,
  NgbAccordionCollapse,
} from '@ng-bootstrap/ng-bootstrap/accordion';
import { SlideItemType } from '../../../types/slide-item.type';
import { AccordionItemType } from '../../../types/accordion-item.type';
import { Observable, Subscription } from 'rxjs';
import { ModalComponent } from '../../common/modal/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    NgbAccordionButton,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionBody,
    NgbAccordionCollapse,
    ModalComponent,
    RouterLink
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',

})
export class MainComponent implements AfterViewInit, OnDestroy {
  slideItems: SlideItemType[] = [
    {
      id: 0,
      image: '../assets/images/banner1.jpg',
      title: 'Скидки на травянные чаи',
      text: 'Узнай все подробности, заполнив заявку'
    },
    {
      id: 1,
      image: '../assets/images/banner2.jpeg',
      title: 'Закажи три пачки чая и получи подарок',
      text: ''
    },
    {
      id: 2,
      image: '../assets/images/banner3.jpg',
      title: 'Попробуй нашу новинку — ягодный чай',
      text: ''
    }
  ];

  accordionItems: AccordionItemType[] = [
    {
      id: 1,
      header: 'Собираете ли вы подарочные боксы?',
      body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      id: 2,
      header: 'Сколько у вас разновидностей чая?',
      body: 'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus.'
    },
    {
      id: 3,
      header: 'В какой срок осуществляется доставка?',
      body: 'Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper.'
    },
    {
      id: 4,
      header: 'У вас обновляется ассортимент?',
      body: 'Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
    },
    {
      id: 5,
      header: 'Какого объема у вас пачки чая?',
      body: 'Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
    },
  ];

  private createModal: Observable<void> = new Observable((observer) => {
    const timeout = setTimeout(() => {
      observer.next()
    }, 10000);
    return {
      unsubscribe() {
        clearTimeout(timeout);
      }
    }
  });
  modalDialog = inject(NgbModal);

  private modalSubscriber: Subscription | null = null;

  ngAfterViewInit(): void {
    jQuery('.slider').slick({
      prevArrow: `<svg class="slick-prev" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.9001 0.5C31.6349 0.5 40.3396 9.22902 40.3396 20C40.3396 30.771 31.6349 39.5 20.9001 39.5C10.1654 39.4999 1.46069 30.7709 1.46069 20C1.46069 9.22906 10.1654 0.500067 20.9001 0.5Z"
            stroke="#076BFF" />
          <g clip-path="url(#clip0_27_13)">
            <path class="filled"
              d="M15.3293 19.4774L23.7908 10.1768C23.9865 9.96154 24.2551 9.83548 24.547 9.82194C24.8389 9.80839 25.1179 9.90905 25.3323 10.1053L26.0152 10.7295C26.4596 11.1362 26.4912 11.8293 26.0858 12.2749L18.9805 20.085L26.7758 27.212C26.9903 27.4082 27.116 27.6772 27.1294 27.9697C27.1427 28.2625 27.042 28.5421 26.8463 28.7575L26.2232 29.4421C26.0273 29.6574 25.7589 29.7835 25.467 29.797C25.1751 29.8106 24.8961 29.7099 24.6817 29.5137L15.4001 21.0282C15.1851 20.8313 15.0596 20.561 15.0469 20.268C15.0328 19.9739 15.1332 19.6932 15.3293 19.4774Z"
              fill="#595555" />
          </g>
        </svg>`,
      nextArrow: `<svg class="slick-next" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.1089 39.5C9.37413 39.5 0.669434 30.771 0.669434 20C0.669434 9.22902 9.37413 0.5 20.1089 0.5C30.8436 0.500067 39.5483 9.22906 39.5483 20C39.5483 30.7709 30.8436 39.4999 20.1089 39.5Z"
            stroke="#076BFF" />
          <g clip-path="url(#clip0_27_14)">
            <path class="filled"
              d="M25.6794 20.5226L17.218 29.8232C17.0223 30.0385 16.7537 30.1645 16.4618 30.1781C16.1699 30.1916 15.8909 30.091 15.6764 29.8947L14.9936 29.2705C14.5492 28.8638 14.5176 28.1707 14.923 27.7251L22.0283 19.915L14.233 12.788C14.0185 12.5918 13.8928 12.3228 13.8794 12.0303C13.866 11.7375 13.9668 11.4579 14.1624 11.2425L14.7856 10.5579C14.9814 10.3426 15.2499 10.2165 15.5418 10.203C15.8337 10.1894 16.1127 10.2901 16.3271 10.4863L25.6087 18.9718C25.8237 19.1687 25.9491 19.439 25.9619 19.732C25.9759 20.0261 25.8756 20.3068 25.6794 20.5226Z"
              fill="#595555" />
          </g>
        </svg>`,
      responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false
        }
      }]
    });

    this.modalSubscriber = this.createModal.subscribe({
      next: () => {
        this.modalDialog.open(ModalComponent, { centered: true });
      }
    });
  };

  ngOnDestroy(): void {
    this.modalSubscriber?.unsubscribe();
  }
}
