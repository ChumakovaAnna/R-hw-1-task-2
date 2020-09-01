export default class Item {
  constructor(entity) {
    Object.assign(
      this,
      {
        brand: 'Brand',
        title: 'Title',
        description: 'description',
        descriptionFull: 'descriptionFull',
        price: 0,
        currency: '£'
      },
      entity,
    );
  }
}