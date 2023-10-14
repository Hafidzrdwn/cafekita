import VueSweetalert2 from "vue-sweetalert2"
export default (_, inject) => {
  inject('swal', VueSweetalert2)
}