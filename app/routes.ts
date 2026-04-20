import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("art", "routes/art.tsx"),
  route("go/pkg", "routes/go.pkg.tsx"),
] satisfies RouteConfig;
