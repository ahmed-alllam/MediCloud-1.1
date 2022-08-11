import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: () => import("../views/Home.vue"),
    meta: {
      requireAuth: true,
      title: 'Overview'
    }
  },
  {
    path: '/',
    name: 'Landing Page',
    component: () => import("../views/LandingPage.vue"),
    meta: {
      title: 'The care you deserve'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue"),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/patient/:id',
    name: 'Patient Detail',
    component: () => import("../components/Patients/PatientDetail.vue"),
    meta: {
      title: 'Patient Details'
    }
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: () => import("../views/Appointments.vue"),
    meta: {
      requireAuth: true,
      title: 'Appointments'
    }
  },
  {
    path: "/appointments/edit/:id",
    name: 'Edit Appointments',
    props: {
      edit: true
    },
    component: () => import("../views/PatientAppointment.vue"),
    meta: {
      requireAuth: true,
      title: 'Edit Appointment'
    }
  },
  {
    path: "/appointments/new",
    name: "New Appointment",
    component: () => import("../views/AddAppointment.vue"),
    meta: {
      requireAuth: true,
      title: 'New Appointment'
    }
  },
  {
    path: "/appointments/new/patient",
    name: "New Patient",
    component: () => import("../views/AddPatient.vue"),
    meta: {
      requireAuth: true,
      title: 'New Patient'
    }
  },
  {
    path: "/appointments/new/patient/:id",
    name: "New Patient Appointment",
    component: () => import("../views/PatientAppointment.vue"),
    meta: {
      requireAuth: true,
      title: 'New Appointment'
    }
  },
  {
    path: "/finances",
    name: "Finances",
    component: () => import("../views/Billing.vue"),
    meta: {
      requireAuth: true,
      title: 'Finances'
    }
  },
  {
    path: "/messages",
    name: "Messages",
    component: () => import("../views/Messages.vue"),
    meta: {
      requireAuth: true,
      title: 'Messages'
    }
  },
  {
    path: "/connect",
    name: "Connect",
    component: () => import("../views/Connect.vue"),
    meta: {
      requireAuth: true,
      title: 'Connect'
    }
  },
  {
    path: "/manage-clinic",
    name: "Manage Clinic",
    component: () => import("../views/ManageClinic.vue"),
    meta: {
      requireAuth: true,
      title: 'Manage Clinic'
    }
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue"),
    meta: {
      requireAuth: true,
      title: 'Logout'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
})


router.beforeEach(async (to, from, next) => {
  await store.dispatch("fetchAccessToken")
  const isLoggedIn = store.state.isLoggedIn

  if (to.matched.some(record => record.meta.requireAuth)) {
    if (isLoggedIn)
      next();
    else {
      if (to.matched.some(record => record.path === ""))
        next({ name: 'Landing Page' })
      else
        next({ name: 'Login' })
    }
  } else
    next();

  if (isLoggedIn && to.matched.some(record => record.name === 'Login')) {
    next({ name: 'Overview' })
  }
});

router.afterEach((to, ) => {
  if (to.meta.title) {
    document.title = `MediCloud | ${to.meta.title}`;
  } 
  window.scrollTo(0, 0);
}
)

export default router
