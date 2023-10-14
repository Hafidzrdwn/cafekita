<template>
  <div id="detailTransaction" class="pt-5 pb-4 px-4">
    <div class="row justify-content-center ">
      <div class="col-lg-10 p-4 shadow rounded">
        <div class="back-button">
          <NuxtLink to="/">
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>
        </div>
        <h2 class="fw-bold text-center">Detail Transaksi</h2>
        <div class="detail-data mt-5">
          <div class="row justify-content-between mt-4 text-center">
            <div class="col-lg-4">
              <h6 class="fw-bold">Tanggal Transaksi</h6>
              <p>Selasa, 24-10-2023 12:21:08</p>
            </div>
            <div class="col-lg-4">
              <h6 class="fw-bold">Status Transaksi</h6>
              <p><span class="badge bg-success">Selesai</span></p>
            </div>
            <div class="col-lg-4">
              <h6 class="fw-bold">Catatan</h6>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div class="daftar-pesanan mt-3">
          <h4 class="fw-bold text-center">Detail Pesanan</h4>
          <div class="row mt-3 justify-content-center">
            <div class="col-lg-12">
              <table class="table table-striped table-hover">
                <thead>
                  <tr class="text-center">
                    <th scope="col">Produk</th>
                    <th class="col-2" scope="col">Harga Satuan</th>
                    <th class="col-1" scope="col">Kuantitas</th>
                    <th class="col-2" scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="align-middle">
                    <td>
                      <div class="row align-items-center">
                        <div class="col-5">
                          <img
                            src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                            alt="foto produk" class="w-100 img-thumbnail">
                        </div>
                        <div class="col-7">
                          <h6 class="fw-bold m-0">BURGER</h6>
                          <p class="small m-0 mt-1 mb-2">Variasi : Pedas</p>
                          <p class="m-0">Catatan :</p>
                          <p class="small text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                            atque?</p>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      Rp. 35.000
                    </td>
                    <td class="text-center">
                      1
                    </td>
                    <td class="text-center">
                      Rp. 35.000
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="table-dark text-center">
                    <th colspan="2">Total Akhir</th>
                    <th>1</th>
                    <th>Rp. 35.000</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>