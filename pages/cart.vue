<template>
  <div id="userCart" class="pt-5 pb-4 px-4">
    <div class="row justify-content-center ">
      <div class="col-lg-12 p-4 shadow rounded">
        <div class="back-button">
          <NuxtLink to="/">
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>
        </div>
        <h2 class="fw-bold text-center">Keranjang Saya (1)</h2>
        <table class="my-4 table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Produk</th>
              <th class="col-2" scope="col">Harga Satuan</th>
              <th class="col-1" scope="col">Kuantitas</th>
              <th class="col-2" scope="col">Total</th>
              <th class="col-2" scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-middle">
              <td>
                <div class="row align-items-center">
                  <div class="col-5">
                    <img src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="foto produk" class="w-100 img-thumbnail">
                  </div>
                  <div class="col-7">
                    <h6 class="fw-bold m-0">BURGER</h6>
                    <p class="small m-0 mt-1 mb-2">Variasi : Pedas</p>
                    <p class="m-0">Catatan :</p>
                    <p class="small text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, atque?</p>
                  </div>
                </div>
              </td>
              <td>
                Rp. 15.000
              </td>
              <td>
                <input class="form-control" type="number" name="qty" id="qty" min="1" value="1">
              </td>
              <td>
                Rp. 35.000
              </td>
              <td>
                <NuxtLink to="/" class="btn btn-custom text-light hover-custom">Hapus <i class="fas fa-trash-alt ms-1"></i></NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
        <NuxtLink to="/checkout" class="mx-auto w-25 d-block btn btn-custom text-light hover-custom">Checkout sekarang</NuxtLink>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>