export default function calkhealth(arr) {
  // console.log('888 ', obj.health);
  arr.sort((prev, next) => next.health - prev.health);
  return arr;
}
