(this.webpackJsonpactividad3 = this.webpackJsonpactividad3 || []).push([
  [0],
  {
    49: function (e, a, s) {},
    50: function (e, a, s) {},
    61: function (e, a, s) {
      "use strict";
      s.r(a);
      var c = s(0),
        t = s.n(c),
        r = s(25),
        i = s.n(r),
        l = (s(38), s(49), s(50), s(26)),
        n = s(8),
        j = s(73),
        d = s(71),
        o = s(70),
        b = s(39),
        u = s(63),
        m = s(40),
        h = s(1);
      function x() {
        return Object(h.jsx)("div", {
          children: Object(h.jsxs)(o.a, {
            className: "Cuenta",
            children: [
              Object(h.jsx)(o.a.Label, {
                children: Object(h.jsx)("strong", {
                  children: "Crea tu cuenta",
                }),
              }),
              Object(h.jsxs)(o.a.Row, {
                children: [
                  Object(h.jsxs)(o.a.Group, {
                    as: m.a,
                    controlId: "formGridNombre",
                    children: [
                      Object(h.jsx)(o.a.Label, { children: "Nombre" }),
                      Object(h.jsx)(o.a.Control, {
                        placeholder: "Digite su Nombre",
                        required: !0,
                      }),
                    ],
                  }),
                  Object(h.jsxs)(o.a.Group, {
                    as: m.a,
                    controlId: "formGridApellido",
                    children: [
                      Object(h.jsx)(o.a.Label, { children: "Apellido" }),
                      Object(h.jsx)(o.a.Control, {
                        placeholder: "Digite su Apellido",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsx)(o.a.Row, {
                children: Object(h.jsxs)(o.a.Group, {
                  as: m.a,
                  controlId: "formGroupEmail",
                  children: [
                    Object(h.jsx)(o.a.Label, {
                      children: "Correo Electronico",
                    }),
                    Object(h.jsx)(o.a.Control, {
                      type: "email",
                      placeholder: "ejemplo@mail.com",
                      required: !0,
                    }),
                  ],
                }),
              }),
              Object(h.jsxs)(o.a.Row, {
                children: [
                  Object(h.jsxs)(o.a.Group, {
                    as: m.a,
                    controlId: "formGroupContrase\xf1a",
                    children: [
                      Object(h.jsx)(o.a.Label, { children: "Contrase\xf1a" }),
                      Object(h.jsx)(o.a.Control, {
                        type: "password",
                        placeholder: "Digite la contrase\xf1a",
                        required: !0,
                      }),
                    ],
                  }),
                  Object(h.jsxs)(o.a.Group, {
                    as: m.a,
                    controlId: "formGroupConfirmacion",
                    children: [
                      Object(h.jsx)(o.a.Label, { children: "Confirmaci\xf3n" }),
                      Object(h.jsx)(o.a.Control, {
                        type: "password",
                        placeholder: "Digite nuevamente la contrase\xf1a",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsx)(o.a.Row, {
                children: Object(h.jsx)(o.a.Group, {
                  as: m.a,
                  children: Object(h.jsx)(u.a, {
                    variant: "primary",
                    size: "lg",
                    block: !0,
                    type: "submit",
                    children: "Crear cuenta",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var p = function () {
          return Object(h.jsx)("div", {
            className: "bodylogin",
            children: Object(h.jsx)(o.a, {
              className: "Login",
              children: Object(h.jsxs)("div", {
                className: "contenedorlogin",
                children: [
                  Object(h.jsx)(o.a.Label, {
                    children: Object(h.jsx)("strong", {
                      children: "Accede a tu cuenta",
                    }),
                  }),
                  Object(h.jsx)(o.a.Row, {
                    className: "Filaslogin",
                    children: Object(h.jsxs)(o.a.Group, {
                      as: m.a,
                      controlId: "formGroupEmail",
                      children: [
                        Object(h.jsx)(o.a.Label, {
                          children: "Correo Electronico",
                        }),
                        Object(h.jsx)(o.a.Control, {
                          type: "email",
                          placeholder: "ejemplo@mail.com",
                          required: !0,
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)(o.a.Row, {
                    className: "Filaslogin",
                    children: Object(h.jsxs)(o.a.Group, {
                      as: m.a,
                      controlId: "formGroupContrase\xf1a",
                      children: [
                        Object(h.jsx)(o.a.Label, { children: "Contrase\xf1a" }),
                        Object(h.jsx)(o.a.Control, {
                          type: "password",
                          placeholder: "Digite la contrase\xf1a",
                          required: !0,
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsxs)(o.a.Row, {
                    className: "Filaslogin",
                    children: [
                      Object(h.jsxs)(l.a, {
                        children: [
                          Object(h.jsx)(o.a.Group, {
                            sm: 12,
                            as: m.a,
                            children: Object(h.jsx)(l.b, {
                              to: "/crearcuenta",
                              children: Object(h.jsx)(u.a, {
                                variant: "outline-primary",
                                size: "lg",
                                block: !0,
                                type: "button",
                                children: "Crear cuenta",
                              }),
                            }),
                          }),
                          Object(h.jsx)(n.c, {
                            children: Object(h.jsx)(n.a, {
                              path: "/crearcuenta",
                              exact: !0,
                              component: x,
                            }),
                          }),
                        ],
                      }),
                      Object(h.jsx)(o.a.Group, {
                        sm: 12,
                        as: m.a,
                        children: Object(h.jsx)(u.a, {
                          variant: "primary",
                          size: "lg",
                          block: !0,
                          type: "submit",
                          children: "Iniciar Sesi\xf3n",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        O = s.p + "static/media/carusel1.ee51ef41.jpg",
        g = s.p + "static/media/carusel2.399d87b1.jpg",
        N = s.p + "static/media/carusel3.f4b9a62b.jpg",
        v = s.p + "static/media/carusel4.a814c9dc.jpg",
        f = s.p + "static/media/carusel5.7f6845ba.jpg",
        y = s.p + "static/media/carusel6.b443eb39.jpg",
        w = s.p + "static/media/card1.befb5c74.jpg",
        C = s.p + "static/media/card2.769f774b.jpg",
        T = s.p + "static/media/card3.d3ca931f.jpg",
        F = s(72),
        I = s(64),
        k = s(74);
      function q() {
        return Object(h.jsxs)("div", {
          children: [
            Object(h.jsxs)(F.a, {
              fade: !0,
              className: "carrusel",
              children: [
                Object(h.jsxs)(F.a.Item, {
                  className: "carruselitem",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: O,
                      alt: "Primera Diapositiva",
                    }),
                    Object(h.jsxs)(F.a.Caption, {
                      children: [
                        Object(h.jsx)("h3", {
                          children: "Desde la comodidad de tu casa",
                        }),
                        Object(h.jsx)("p", {
                          children:
                            "Accede a mas de 1000 juegos, adquiriendo nuestro pase premium",
                        }),
                        Object(h.jsx)("a", {
                          href: "https://www.freepik.es/vectores/ordenador",
                          target: "_blank",
                          rel: "noreferrer",
                          children:
                            "Vector de Ordenador creado por vectorpouch - www.freepik.es",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)(F.a.Item, {
                  className: "carruselitem",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: g,
                      alt: "Second slide",
                    }),
                    Object(h.jsx)(F.a.Caption, {
                      children: Object(h.jsx)("p", {
                        children:
                          "Videojuego del g\xe9nero multijugador de arena de batalla en l\xednea y deporte electr\xf3nico el cual fue desarrollado por Riot Games",
                      }),
                    }),
                  ],
                }),
                Object(h.jsxs)(F.a.Item, {
                  className: "carruselitem",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: N,
                      alt: "Third slide",
                    }),
                    Object(h.jsx)(F.a.Caption, {
                      children: Object(h.jsx)("p", {
                        children:
                          "Videojuego de disparos en primera persona multijugador gratuito desarrollado y publicado por Riot Games.",
                      }),
                    }),
                  ],
                }),
                Object(h.jsxs)(F.a.Item, {
                  className: "carruselitem",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: v,
                      alt: "Third slide",
                    }),
                    Object(h.jsx)(F.a.Caption, {
                      children: Object(h.jsx)("p", {
                        children:
                          "Videojuego multijugador de arena de batalla on-line desarrollado y publicado por Riot Games para Android, iOS, y consolas. El juego es una versi\xf3n modificada del juego de PC, League of Legends.",
                      }),
                    }),
                  ],
                }),
                Object(h.jsxs)(F.a.Item, {
                  className: "carruselitem",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: f,
                      alt: "Third slide",
                    }),
                    Object(h.jsx)(F.a.Caption, {
                      children: Object(h.jsx)("p", {
                        children:
                          "Desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mec\xe1nicas.",
                      }),
                    }),
                  ],
                }),
                Object(h.jsxs)(F.a.Item, {
                  className: "carruselitem",
                  children: [
                    Object(h.jsx)("img", {
                      className: "d-block w-100",
                      src: y,
                      alt: "Third slide",
                    }),
                    Object(h.jsxs)(F.a.Caption, {
                      children: [
                        Object(h.jsx)("h3", { children: "Halo Reach" }),
                        Object(h.jsx)("p", {
                          children:
                            "Videojuego de disparos en primera persona desarrollado por Bungie y publicado por Microsoft Game Studios para la consola Xbox 360. Es el sexto videojuego de la saga Halo, as\xed como su tercer videojuego Publicado.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(h.jsxs)(I.a, {
              className: "cardprin",
              children: [
                Object(h.jsxs)(k.a, {
                  className: "cardp",
                  children: [
                    Object(h.jsx)(k.a.Img, { variant: "top", src: w }),
                    Object(h.jsxs)(k.a.Body, {
                      children: [
                        Object(h.jsx)(k.a.Title, { children: "Call of Duty" }),
                        Object(h.jsx)(k.a.Text, {
                          children:
                            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)(k.a, {
                  className: "cardp",
                  children: [
                    Object(h.jsx)(k.a.Img, { variant: "top", src: C }),
                    Object(h.jsxs)(k.a.Body, {
                      children: [
                        Object(h.jsx)(k.a.Title, { children: "Outriders" }),
                        Object(h.jsxs)(k.a.Text, {
                          children: [
                            "This card has supporting text below as a natural lead-in to additional content.",
                            " ",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)(k.a, {
                  className: "cardp",
                  children: [
                    Object(h.jsx)(k.a.Img, { variant: "top", src: T }),
                    Object(h.jsxs)(k.a.Body, {
                      children: [
                        Object(h.jsx)(k.a.Title, {
                          children: "Forza Horizon 4",
                        }),
                        Object(h.jsx)(k.a.Text, {
                          children:
                            "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var G = s(65),
        L = s.p + "static/media/juegoprot.764bb584.jpg";
      function B() {
        return Object(h.jsxs)("div", {
          className: "contjuegos",
          children: [
            Object(h.jsx)(I.a, {
              children: Object(h.jsxs)(G.a, {
                className: "justify-content-center",
                children: [
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(h.jsx)(I.a, {
              children: Object(h.jsxs)(G.a, {
                className: "justify-content-center",
                children: [
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(h.jsx)(I.a, {
              children: Object(h.jsxs)(G.a, {
                className: "justify-content-center",
                children: [
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(h.jsx)(m.a, {
                    xs: 10,
                    md: 4,
                    children: Object(h.jsxs)(k.a, {
                      className: "caraJuego",
                      children: [
                        Object(h.jsx)(k.a.Img, { variant: "top", src: L }),
                        Object(h.jsxs)(k.a.Body, {
                          children: [
                            Object(h.jsx)(k.a.Title, {
                              children: "Nombre del Juego",
                            }),
                            Object(h.jsx)(k.a.Text, {
                              children:
                                "Esta es la descripcion principal del juego para que el usuario pueda hacerse una idea y si es de su interes mirar mas detalladamente el juego.",
                            }),
                          ],
                        }),
                        Object(h.jsx)(k.a.Footer, {
                          children: Object(h.jsx)("small", {
                            className: "text-muted",
                            children: "Fecha de lanzamiento: 00/00/0000",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var J = s(66),
        E = s(67),
        z = s.p + "static/media/atencion.7b96b3be.jpg";
      function D() {
        return Object(h.jsxs)("div", {
          children: [
            Object(h.jsxs)(J.a, {
              className: "jumbo",
              children: [
                Object(h.jsx)("h1", { children: "Hola!" }),
                Object(h.jsx)("h2", { children: "\xbfComo podemos ayudarte?" }),
                Object(h.jsxs)(o.a, {
                  inline: !0,
                  children: [
                    Object(h.jsx)(b.a, {
                      type: "text",
                      placeholder: "Ejemplo: \xbfProblemas con los juegos?",
                      className: "mr-sm-2",
                      style: { width: 400 },
                    }),
                    Object(h.jsx)(u.a, { variant: "info", children: "Buscar" }),
                  ],
                }),
              ],
            }),
            Object(h.jsxs)("ul", {
              className: "list-unstyled ",
              children: [
                Object(h.jsxs)(E.a, {
                  as: "li",
                  className: "media",
                  children: [
                    Object(h.jsx)("img", {
                      width: 64,
                      height: 55,
                      className: "mr-3",
                      src: z,
                      alt: "simbolo de atenci\xf3n",
                    }),
                    Object(h.jsxs)(E.a.Body, {
                      children: [
                        Object(h.jsx)("h5", {
                          children: "List-based media object",
                        }),
                        Object(h.jsx)("p", {
                          children:
                            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)(E.a, {
                  as: "li",
                  className: "media",
                  children: [
                    Object(h.jsx)("img", {
                      width: 64,
                      height: 55,
                      className: "mr-3",
                      src: z,
                      alt: "simbolo de atenci\xf3n",
                    }),
                    Object(h.jsxs)(E.a.Body, {
                      children: [
                        Object(h.jsx)("h5", {
                          children: "List-based media object",
                        }),
                        Object(h.jsx)("p", {
                          children:
                            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsxs)(E.a, {
                  as: "li",
                  className: "media",
                  children: [
                    Object(h.jsx)("img", {
                      width: 64,
                      height: 55,
                      className: "mr-3",
                      src: z,
                      alt: "simbolo de atenci\xf3n",
                    }),
                    Object(h.jsxs)(E.a.Body, {
                      children: [
                        Object(h.jsx)("h5", {
                          children: "List-based media object",
                        }),
                        Object(h.jsx)("p", {
                          children:
                            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var R = s.p + "static/media/atencion.8396de56.png",
        P = s(68),
        S = s(69);
      function A() {
        return Object(h.jsx)("div", {
          children: Object(h.jsx)(P.a, {
            className: "contcontactenos",
            children: Object(h.jsxs)(G.a, {
              children: [
                Object(h.jsx)(m.a, {
                  sm: 6,
                  md: 6,
                  children: Object(h.jsx)(S.a, { src: R, rounded: !0 }),
                }),
                Object(h.jsxs)(m.a, {
                  sm: 6,
                  md: 6,
                  children: [
                    Object(h.jsx)("h1", {
                      children: "Ponte en contacto con nosotros",
                    }),
                    Object(h.jsx)("p", {
                      children:
                        "Solicita una llama, chatea en linea y mucho mas.",
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("p", {
                      className: "parrafo",
                      children: "Horas de contacto",
                    }),
                    Object(h.jsxs)(G.a, {
                      children: [
                        Object(h.jsxs)(m.a, {
                          children: [
                            Object(h.jsx)("strong", {
                              children: "Soporte telefonico",
                            }),
                            Object(h.jsx)("p", {
                              children: "De lunes a viernes: 8:00 Am a 6:00 Pm",
                            }),
                            Object(h.jsx)("p", {
                              children: " Tel: 321480515 - 8905421",
                            }),
                          ],
                        }),
                        Object(h.jsxs)(m.a, {
                          children: [
                            Object(h.jsx)("strong", {
                              children: "Chat en web",
                            }),
                            Object(h.jsx)("p", {
                              children:
                                "De lunes a viernes: las 24 horas del dia",
                            }),
                            Object(h.jsx)(u.a, {
                              variant: "outline-primary",
                              size: "md",
                              block: !0,
                              type: "button",
                              children: "Chatear ahora",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function V() {
        return Object(h.jsxs)("div", {
          className: "bodyerror",
          children: [
            Object(h.jsx)("br", {}),
            Object(h.jsx)("br", {}),
            Object(h.jsx)("br", {}),
            Object(h.jsx)("br", {}),
            Object(h.jsx)("br", {}),
            Object(h.jsx)("br", {}),
            Object(h.jsx)("br", {}),
            Object(h.jsx)("h1", {
              className: "Woops texterror",
              children: "Woops...",
            }),
            Object(h.jsx)("h2", {
              className: "texterror",
              children: "parece que est\xe1s perdido en el espacio!",
            }),
            Object(h.jsx)("h1", {
              className: "texterror",
              children: "Error 404",
            }),
            Object(h.jsx)("a", {
              className: "texterror",
              href: "https://www.freepik.es/vectores/fondo",
              target: "_blank",
              rel: "noreferrer",
              children:
                "Vector de Fondo creado por pikisuperstar - www.freepik.es",
            }),
          ],
        });
      }
      var H = function () {
        return Object(h.jsxs)(l.a, {
          children: [
            Object(h.jsxs)(j.a, {
              bg: "dark",
              variant: "dark",
              expand: "lg",
              children: [
                Object(h.jsx)(j.a.Toggle, {
                  "aria-controls": "basic-navbar-nav",
                }),
                Object(h.jsxs)(j.a.Collapse, {
                  id: "basic-navbar-nav",
                  children: [
                    Object(h.jsxs)(d.a, {
                      className: "mr-auto",
                      children: [
                        Object(h.jsx)(d.a.Link, {
                          href: "/paginaprincipal/",
                          children: "Pagina Principal",
                        }),
                        Object(h.jsx)(d.a.Link, {
                          href: "/login/",
                          children: "Iniciar Sesi\xf3n",
                        }),
                        Object(h.jsx)(d.a.Link, {
                          href: "/juegos/",
                          children: "Juegos",
                        }),
                        Object(h.jsx)(d.a.Link, {
                          href: "/soportetecnico/",
                          children: "Soporte Tecnico",
                        }),
                        Object(h.jsx)(d.a.Link, {
                          href: "/contactenos/",
                          children: "Contactenos",
                        }),
                      ],
                    }),
                    Object(h.jsxs)(o.a, {
                      inline: !0,
                      children: [
                        Object(h.jsx)(b.a, {
                          type: "text",
                          placeholder: "Buscar",
                          className: "mr-sm-2",
                        }),
                        Object(h.jsx)(u.a, {
                          variant: "outline-secondary",
                          children: "Buscar",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(h.jsxs)(n.c, {
              children: [
                Object(h.jsx)(n.a, { path: "/login", exact: !0, component: p }),
                Object(h.jsx)(n.a, {
                  path: "/paginaprincipal",
                  exact: !0,
                  component: q,
                }),
                Object(h.jsx)(n.a, {
                  path: "/juegos",
                  exact: !0,
                  component: B,
                }),
                Object(h.jsx)(n.a, {
                  path: "/soportetecnico",
                  exact: !0,
                  component: D,
                }),
                Object(h.jsx)(n.a, {
                  path: "/contactenos",
                  exact: !0,
                  component: A,
                }),
                Object(h.jsx)(n.a, { component: V }),
              ],
            }),
          ],
        });
      };
      var M = function () {
          return Object(h.jsxs)("div", {
            className: "App",
            children: [
              Object(h.jsx)("nav", { children: Object(h.jsx)(H, {}) }),
              Object(h.jsx)("header", { className: "App-header" }),
            ],
          });
        },
        W = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 75))
              .then(function (a) {
                var s = a.getCLS,
                  c = a.getFID,
                  t = a.getFCP,
                  r = a.getLCP,
                  i = a.getTTFB;
                s(e), c(e), t(e), r(e), i(e);
              });
        };
      i.a.render(
        Object(h.jsx)(t.a.StrictMode, { children: Object(h.jsx)(M, {}) }),
        document.getElementById("root")
      ),
        W();
    },
  },
  [[61, 1, 2]],
]);
//# sourceMappingURL=main.8d632197.chunk.js.map
