export interface ProductProps {
  id: number,
  img: string,
  name: string,
  price: number,
  btn: string,
  alertProd: (name: string) => void
}