export default function ({ route, redirect }) {
  const url = route.path
  if (process.client) {
    if ((!url.includes('/login') && !url.includes('/signup')) && url !== '/') {
      if (!localStorage.getItem('token') && !localStorage.getItem('isLogin')) {
        if (url.includes('admin')) return redirect('/admin/login')
        return redirect('/auth/login')
      }
    }
    
    if((url.includes('/login') || url.includes('/signup'))) {
      if (localStorage.getItem('token') && localStorage.getItem('isLogin')) {
        if (url.includes('admin')) return redirect('/admin')
        return redirect('/menu')
      }
    }
  }
}