import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  ngOnInit() {}

  public detailicon: string = 'chevron-forward';

  public data: any = [
    {
      id: 1,
      brand: 'Honda',
      name: 'NSX',
      year: 'N/A',
      desc: 'New car',
      img: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Honda-NSX.png',
    },
    {
      id: 2,
      brand: 'Suzuki',
      name: 'XL7',
      year: 'N/A',
      desc: 'New car',
      img: 'https://saigonngoisao.com.vn/vnt_upload/product/color/magma_grey_zeta.png',
    },
    {
      id: 3,
      brand: 'BWM',
      name: '3 Series',
      year: 'N/A',
      desc: 'New car',
      img: 'https://www.bmw.vn/content/dam/bmw/common/all-models/3-series/sedan/2018/navigation/bmw-3-series-modellfinder.png',
    },
    {
      id: 4,
      brand: 'Mercedes-Benz',
      name: 'c180',
      year: 'N/A',
      desc: 'New car',
      img: 'https://i.xeoto.com.vn/auto/mercedes/c180/mercedes-c180-phien-ban-16-turbo.png',
    },
    {
      id: 5,
      brand: 'Ford',
      name: 'Raptor',
      year: 2019,
      desc: 'New car',
      img: 'https://www.ford.com.vn/content/dam/Ford/website-assets/ap/vn/nameplate/raptor-2019/thumbnails/raptor.jpg',
    },
    {
      id: 6,
      brand: 'Toyota',
      name: 'Supra',
      year: 1998,
      desc: 'New car',
      img: 'http://data.3dtuning.com/tun/6SOdFYFSRH.jpg',
    },
    {
      id: 7,
      brand: 'Subaru',
      name: 'WRX STI',
      year: 'N/A',
      desc: 'New car',
      img: 'https://www.subaru.asia/assets/content/vehicles/media/thumbnails/vn_my18_wrxsti_25_6mt.png',
    },
    {
      id: 8,
      brand: 'Misubishi',
      name: 'Triton Athlete',
      year: 'N/A',
      desc: 'New car',
      img: 'https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2021/11/SU-SAM1.png',
    },
    {
      id: 9,
      brand: 'Bugatti',
      name: 'Chiron',
      year: 'N/A',
      desc: 'New car',
      img: 'https://img.tinbanxe.vn/webp/images/Bugatti/Bugatti%20Chiron/bugatti-chiron-gallery-01-removebg-preview.png',
    },
    {
      id: 10,
      brand: 'Lamborghini',
      name: 'Huracan',
      year: 2020,
      desc: 'New car',
      img: 'https://i.xeoto.com.vn/auto/lamborghini/huracan/lamborghini-huracan-2020-61144.png',
    },
  ];

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      if (this.data.length == this.data.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

  getVehicle(carId: number) {
    console.log('get', carId);
  }

  handleInput(event) {
    // const query = event.target.value.toLowerCase();
    // this.data.forEach((e) => {
    //   const lowerBrand = e.brand.toLowerCase();
    //   const lowerName = e.name.toLowerCase();
    //   if (
    //     lowerBrand.includes(query) ||
    //     lowerName.includes(query) ||
    //     lowerBrand.concat(' ', lowerName).includes(query)
    //   ) {
    //     const res = e.brand.concat(' ', e.name);
    //     document.getElementById('demo').innerHTML = res;
    //     console.log(res);
    //   }
    // });

    const query = event.target.value.toLowerCase();
    this.data.find((e) => {
      const lowerBrand = e.brand.toLowerCase();
      const lowerName = e.name.toLowerCase();
      if (
        lowerBrand.includes(query) ||
        lowerName.includes(query) ||
        lowerBrand.concat(' ', lowerName).includes(query)
      ) {
        const res = e.brand.concat(' ', e.name);
        document.getElementById('demo').innerHTML = res;
        console.log(res);
      }
    });
  }
}
