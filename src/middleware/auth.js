export default function(next, store) {
  if (!store.state.isLoggedIn) {
    next("/");
    store.commit("setLoginModal", true);
  } else {
    next();
  }
  console.log("iam working as an auth middleware instead of beforeEnter");
}
