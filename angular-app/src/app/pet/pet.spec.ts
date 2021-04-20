import { Pet } from './pet';

describe('Pet', () => {
  let pet1 = new Pet(
    1,
    'Pet1',
    12,
    'https://468915-1496741-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/cat-facial-expressions.jpg',
    new Date()
  );
  it('should create an instance', () => {
    expect(pet1).toBeTruthy();
  });

  it('Name should be Pet1', () => {
    expect(pet1.name).toEqual('Pet1');
  });

  it('Age should be 12', () => {
    expect(pet1.age).toEqual(12);
  });
});
