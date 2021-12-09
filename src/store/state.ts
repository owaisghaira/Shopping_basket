import { ProductItem } from '../../src/types'

const INITIAL_STATE: ProductItem[] = [
  {
    id: '123',
    title: 'Zinger Burger',
    description: '',
    imageUrl: 'https://www.bakingbusiness.com/ext/resources/2020/5/BKAtHome_Lead.jpg?t=1588594539&width=1080',
    price: 399,
    quantity:0
  },
  {
    id: '456',
    title: 'Biryani',
    description:
      '',
    imageUrl: 'https://chaiandchurros.com/wp-content/uploads/2020/10/StreetStyleChickenBiryaniPic1-500x500.jpg',
    price: 350,
    quantity:0

  },
  {
    id: '789',
    title: 'Pizza',
    description: '',
    imageUrl: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
    price: 799,
    quantity:0
  }
]

export { INITIAL_STATE }