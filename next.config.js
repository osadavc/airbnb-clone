const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoib3NhZGF2YyIsImEiOiJja3MwYXIxODYwNmc0MnVxbXd4b3Nra2tlIn0.IOR-WZjR_1Crd1gXf9Ctdg",
  },
});
