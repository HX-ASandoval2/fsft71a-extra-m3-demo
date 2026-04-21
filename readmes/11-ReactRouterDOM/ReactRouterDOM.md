# REACT-ROUTER-DOM v7

[Volver a Inicio](../../README.md)

[Documentación Oficial de React-Router-DOM](https://reactrouter.com/)

## BrowserRouter

- El contenedor principal que envuelve tu aplicación para habilitar el enrutamiento.

```js
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>;
```

## Routes y Route

- Routes reemplaza a Switch de v5.
- Route define cada ruta con su path y el componente a renderizar con element.

```js
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} /> {/* Ruta para 404 */}
</Routes>;
```

## Link y NavLink

- Link: para navegar sin recargar la página.
- NavLink: igual que Link, pero permite estilos activos.

```js
<Link to="/about">Ir a About</Link>
<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
  About
</NavLink>
```

## useNavigate

- Hook para navegar programáticamente.

```js
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/about");
```

## useParams

- Hook para acceder a parámetros dinámicos en la URL.

```js
<Route path="/user/:id" element={<User />} />;

// dentro de User.jsx
const { id } = useParams();
```

## useLocation

- Devuelve información sobre la URL actual.

```js
const location = useLocation();
console.log(location.pathname);
```

## Nested Routes (rutas anidadas)

- Se pueden definir subrutas dentro de un Route padre.
- Se usa `<Outlet />` para renderizar el contenido de las rutas hijas.

```js
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="stats" element={<Stats />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>;

// Dentro de Dashboard.jsx
import { Outlet } from "react-router-dom";
<div>
  <h1>Dashboard</h1>
  <Outlet /> {/* Aquí se renderiza la ruta hija */}
</div>;
```

## Navigate

- Redirección declarativa.

```js
<Route path="/old" element={<Navigate to="/new" />} />
```

[Volver a Inicio](../../README.md)
