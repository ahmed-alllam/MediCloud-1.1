import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import("../views/Home.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/',
    name: 'Landing Page',
    component: () => import("../views/LandingPage.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue"),
  },
  {
    path: '/patient/:id',
    name: 'Patient Detail',
    component: () => import("../views/PatientDetail.vue"),
  },
  {
    path: '/patients',
    name: 'Patients',
    component: () => import("../views/Patients.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: () => import("../views/Appointments.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/appointments/edit/:id",
    name: 'Edit Appointments',
    component: () => import("../views/Appointments.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/appointments/new",
    name: "New Appointment",
    component:() => import("../views/AddAppointment.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/visits",
    name: "Visits",
    component: () => import("../views/Visits.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/billing",
    name: "Billing",
    component:() => import("../views/Billing.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/billing/add",
    name: "New Billing",
    component: () => import("../views/AddBilling.vue"),
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.isLoggedIn;

  if (to.matched.some(record => record.meta.requireAuth)) {
    if(isLoggedIn)
      next();
    else {
      if(to.matched.some(record => record.path === ""))
        next({ name : 'Landing Page' })
      else 
        next({ name: 'Login' })
    }
  } else
    next();

  if(isLoggedIn && to.matched.some(record => record.name === 'Login')) {
    next({ name: 'Dashboard' })
  }
});

export default router
