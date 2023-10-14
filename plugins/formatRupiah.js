import toRupiah from '@develoka/angka-rupiah-js';

export default (_, inject) => {
  inject('rupiah', toRupiah);
}