import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.page.html',
  styleUrls: ['./vehicle-detail.page.scss'],
})

export class VehicleDetailPage implements OnInit {

  public blockClick: boolean = true;
  public eng: string;
  public vehicleName: string;
  public vehicleImg: any;

  constructor(private router: Router, private location: Location, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.getVehicleDetail();
  }

  public data = [
    {
      id: 1,
      brand: 'Honda',
      name: 'NSX',
      year: 'N/A',
      desc: 'New car',
      img: ['https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Honda-NSX.png', 'https://media.vov.vn/sites/default/files/styles/large/public/2021-08/2022-acura-nsx-type-s-front-blue-background.jpg', 'https://image.thanhnien.vn/w660/Uploaded/2021/kpqkcwvo/2019_08_20/acura%20nsx%202020/nsx20_015_ttos.jpg', 'https://xehay.vn/uploads/images/2017/9/04/xehay-Liberty-Walk-Honda-NSX-26-0917-1.jpg'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
        { type: 'VTEC', fuel: 'Hybrid' },
      ]
    },
    {
      id: 2,
      brand: 'Suzuki',
      name: 'XL7',
      year: 'N/A',
      desc: 'New car',
      img: ['https://saigonngoisao.com.vn/vnt_upload/product/color/magma_grey_zeta.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 3,
      brand: 'BWM',
      name: '3 Series',
      year: 'N/A',
      desc: 'New car',
      img: ['https://www.bmw.vn/content/dam/bmw/common/all-models/3-series/sedan/2018/navigation/bmw-3-series-modellfinder.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 4,
      brand: 'Mercedes-Benz',
      name: 'c180',
      year: 'N/A',
      desc: 'New car',
      img: ['https://i.xeoto.com.vn/auto/mercedes/c180/mercedes-c180-phien-ban-16-turbo.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 5,
      brand: 'Ford',
      name: 'Raptor',
      year: 2019,
      desc: 'New car',
      img: ['https://www.ford.com.vn/content/dam/Ford/website-assets/ap/vn/nameplate/raptor-2019/thumbnails/raptor.jpg'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 6,
      brand: 'Toyota',
      name: 'Supra',
      year: 2020,
      desc: 'New car',
      img: ['https://i.xeoto.com.vn/auto/toyota/supra/toyota-supra-phien-ban-30-gt.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 7,
      brand: 'Subaru',
      name: 'WRX STI',
      year: 'N/A',
      desc: 'New car',
      img: ['https://www.subaru.asia/assets/content/vehicles/media/thumbnails/vn_my18_wrxsti_25_6mt.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 8,
      brand: 'Misubishi',
      name: 'Triton Athlete',
      year: 'N/A',
      desc: 'New car',
      img: ['https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2021/11/SU-SAM1.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 9,
      brand: 'Bugatti',
      name: 'Chiron',
      year: 'N/A',
      desc: 'New car',
      img: ['https://img.tinbanxe.vn/webp/images/Bugatti/Bugatti%20Chiron/bugatti-chiron-gallery-01-removebg-preview.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
    {
      id: 10,
      brand: 'Lamborghini',
      name: 'Huracan',
      year: 2020,
      desc: 'New car',
      img: ['https://i.xeoto.com.vn/auto/lamborghini/huracan/lamborghini-huracan-2020-61144.png'],
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
    },
  ];

  getVehicleDetail() {
    const vehicleId =
      this.router.getCurrentNavigation().finalUrl.root.children.primary
        .segments[1].path;
    this.data = this.data.filter((x) => x.id == parseInt(vehicleId));
    this.vehicleName = this.data[0].brand.concat(' ', this.data[0].name);
    this.vehicleImg = this.data[0].img;
  }

  engChanged(ev: any) {
    this.eng = ev.detail.value;
    this.blockClick = false;
  }

  back() {
    this.location.back();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { vehicle: this.vehicleName, eng: this.eng },
    })
    await modal.present();
  }
}
