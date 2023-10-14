<template>
  <div id="userTransaction" class="pt-5 pb-4 px-4">

    <div class="row justify-content-center">
      <div class="col-lg-12 p-4 shadow rounded">
        <div class="back-button">
          <NuxtLink to="/">
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>
        </div>
        <h2 class="fw-bold text-center">Riwayat Transaksi</h2>
        <table class="mt-4 table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th class="col-2" scope="col">Tanggal Transaksi</th>
              <th class="col-3" scope="col">Daftar Pesanan</th>
              <th class="col-2" scope="col">Status Transaksi</th>
              <th scope="col">Catatan</th>
              <th class="col-2" scope="col">Total</th>
              <th class="col-2" scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Selasa, 24-10-2023 12:21:08</td>
              <td>
                Burger (1), Nasi Goreng (1), Teh Manis (1)
              </td>
              <td>
                <span class="badge bg-success">Selesai</span>
              </td>
              <td>
                -
              </td>
              <td>
                Rp. 35.000
              </td>
              <td>
                <NuxtLink to="/hafidz/transaction/1" class="btn btn-custom text-light hover-custom">Lihat Detail</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>