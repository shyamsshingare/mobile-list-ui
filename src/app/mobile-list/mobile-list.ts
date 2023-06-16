export interface Mobile {
  id: number;
  make: string;
  model: string;
  color: string;
  price: number;
}
export const mobileList: Mobile[] = [
  {
    id: 1,
    make: 'Samsung',
    model: 'S11',
    color: 'Black',
    price: 88000
},
{
  id: 2,
  make: 'Samsung',
  model: 'S12',
  color: 'Black',
  price: 98000
}
];
