import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
})
export class VehicleDetailComponent implements OnInit {
  constructor(private router: Router) {}

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
      img: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Honda-NSX.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 2,
      brand: 'Suzuki',
      name: 'XL7',
      year: 'N/A',
      desc: 'New car',
      img: 'https://saigonngoisao.com.vn/vnt_upload/product/color/magma_grey_zeta.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 3,
      brand: 'BWM',
      name: '3 Series',
      year: 'N/A',
      desc: 'New car',
      img: 'https://www.bmw.vn/content/dam/bmw/common/all-models/3-series/sedan/2018/navigation/bmw-3-series-modellfinder.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 4,
      brand: 'Mercedes-Benz',
      name: 'c180',
      year: 'N/A',
      desc: 'New car',
      img: 'https://i.xeoto.com.vn/auto/mercedes/c180/mercedes-c180-phien-ban-16-turbo.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 5,
      brand: 'Ford',
      name: 'Raptor',
      year: 2019,
      desc: 'New car',
      img: 'https://www.ford.com.vn/content/dam/Ford/website-assets/ap/vn/nameplate/raptor-2019/thumbnails/raptor.jpg',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 6,
      brand: 'Toyota',
      name: 'Supra',
      year: 1998,
      desc: 'New car',
      img: 'http://data.3dtuning.com/tun/6SOdFYFSRH.jpg',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 7,
      brand: 'Subaru',
      name: 'WRX STI',
      year: 'N/A',
      desc: 'New car',
      img: 'https://www.subaru.asia/assets/content/vehicles/media/thumbnails/vn_my18_wrxsti_25_6mt.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 8,
      brand: 'Misubishi',
      name: 'Triton Athlete',
      year: 'N/A',
      desc: 'New car',
      img: 'https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2021/11/SU-SAM1.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 9,
      brand: 'Bugatti',
      name: 'Chiron',
      year: 'N/A',
      desc: 'New car',
      img: 'https://img.tinbanxe.vn/webp/images/Bugatti/Bugatti%20Chiron/bugatti-chiron-gallery-01-removebg-preview.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
    {
      id: 10,
      brand: 'Lamborghini',
      name: 'Huracan',
      year: 2020,
      desc: 'New car',
      img: 'https://i.xeoto.com.vn/auto/lamborghini/huracan/lamborghini-huracan-2020-61144.png',
      engs: [
        { type: 'VTEC', fuel: 'Gas' },
        { type: 'VTEC', fuel: 'Diesel' },
      ],
      designs: [
        { interior: 'Standard' },
        { interior: 'Premium' },
        { interior: 'Sport' },
      ],
    },
  ];

  getVehicleDetail() {
    const vehicleId =
      this.router.getCurrentNavigation().finalUrl.root.children.primary
        .segments[1].path;
    this.data = this.data.filter((x) => x.id == parseInt(vehicleId));
    // const detail = this.data.find((x) => x.id === parseInt(vehicleId))
    console.log(this.data);
  }

  engChanged(ev: any) {
    const eng = ev.detail.value;
    console.log(eng);
  }

  designChanged(ev: any) {
    const design = ev.detail.value;
    console.log(design);
  }

  bookNow() {
    const vehicleName = this.data[0].brand.concat(' ', this.data[0].name);
    const eng = this.data;
    const design = this.data;
    console.log('booked', vehicleName);
  }
}
