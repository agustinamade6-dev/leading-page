const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

// ---------- Paseo por la cervecería (motor de la skill scroll-world) ----------
// Arquitectura A de la skill: un paseo hacia delante, cada tramo es el clip de su sección y no hay conectores.
// La sección i lleva el clip que sale de esa parada (paseo-(i+1)), así la cámara se mueve desde el primer scroll y el
// texto de cada parada se lee mientras caminas. El patio es el final: solo su imagen, con la llamada a reservar.

const VERSION = "v=5"; // súbela al cambiar un clip o un póster para saltarse la caché del navegador
const ACENTO = "#e39b3b";
const parada = (i) => `img/paseo/parada-${i}.webp?${VERSION}`;
const clip = (k) => `video/paseo-${k}.mp4?${VERSION}`;
// Ritmo: la cámara va más lenta a mitad de tramo, justo cuando el texto se ve entero (0 = lineal, máximo 0.6).
const LINGER = 0.35;

const world = document.getElementById("world");

if (world && window.mountScrollWorld) {
  window.mountScrollWorld(world, {
    nav: false, // la navegación es la cabecera de la página
    atmosphere: false, // fotorrealista: sin degradados ni partículas detrás
    stillZoom: false, // la imagen de cada parada es un fotograma del video: sin zoom para que encaje
    hint: "Desliza para entrar",
    diveScroll: 2.4, // pantallas de scroll por tramo de 10 s
    crossfade: 0.08,
    sections: [
      {
        id: "entrada", label: "Entrada", still: parada(0), clip: clip(1), accent: ACENTO,
        scroll: 1.4, linger: LINGER, // el clip 1 dura 5 s
        heading: "h1",
        eyebrow: "Cervecería con fábrica propia",
        title: "Cerveza fresca\ndel tanque a tu vaso",
        body: "Hacemos la cerveza a diez metros de tu mesa. Te la servimos el mismo día que sale del tanque, sin botellas ni camiones de por medio.",
        tags: ["24 grifos", "8 tanques a la vista", "Abierto hasta la 01:00"],
        cta: { primary: { label: "Reservar mesa", href: "#reservar" } },
      },
      {
        id: "barra", label: "La barra", still: parada(1), clip: clip(2), accent: ACENTO, linger: LINGER,
        fade: 0.35, blur: 3, // la barra del clip 1 y la del clip 2 no son idénticas
        eyebrow: "La barra",
        title: "24 grifos,\nninguna botella",
        body: "Cada martes cambiamos seis grifos. Siempre hay una lager, una IPA, una oscura y algo que todavía no has probado.",
      },
      {
        id: "salon", label: "El salón", still: parada(2), clip: clip(3), accent: ACENTO, linger: LINGER,
        fade: 0.8, blur: 10, // el clip 3 empieza en otro sitio: la mezcla larga y desenfocada lo disimula
        eyebrow: "El salón",
        title: "Mesas largas,\nconversaciones largas",
        body: "Mesas comunales de roble para 12 personas. Hasta 5 personas no hace falta reservar: llegas y te sientas.",
      },
      {
        id: "fabrica", label: "La fábrica", still: parada(3), clip: clip(4), accent: ACENTO, linger: LINGER,
        eyebrow: "La fábrica",
        title: "La fábrica está\ndetrás del vidrio",
        body: "Ocho tanques de 1.200 litros que ves desde la mesa. Cocinamos tres veces por semana y lo que fermenta hoy lo bebes en tres semanas.",
      },
      {
        id: "barricas", label: "Las barricas", still: parada(4), clip: clip(5), accent: ACENTO, linger: LINGER,
        eyebrow: "Las barricas",
        title: "Cervezas que\nesperan meses",
        body: "Nuestra imperial stout pasa nueve meses en barricas que antes guardaron vino tinto. Sale dos veces al año y se acaba rápido.",
      },
      {
        id: "cata", label: "La cata", still: parada(5), clip: clip(6), accent: ACENTO, linger: LINGER,
        eyebrow: "La cata",
        title: "Seis cervezas,\nuna hora",
        body: "Una cata guiada por quien hace la cerveza. Pruebas seis estilos, de la más ligera a la más intensa, por 21 € por persona.",
        cta: { secondary: { label: "Ver experiencias", href: "#experiencias" } },
      },
      {
        id: "patio", label: "El patio", still: parada(6), accent: ACENTO, scroll: 1.0,
        eyebrow: "El patio",
        title: "Y al final,\nel patio",
        body: "Mesas de madera, luces colgadas y la última ronda a la 01:00. En verano es el mejor sitio del barrio.",
        cta: { primary: { label: "Reservar mesa", href: "#reservar" } },
      },
    ],
    connectors: [], // arquitectura A: los tramos se mezclan directamente entre sí
  });
}

// ---------- Entradas al hacer scroll (IntersectionObserver, nunca un listener de scroll) ----------

const reveal = new IntersectionObserver(
  (entradas) => {
    for (const entrada of entradas) {
      if (!entrada.isIntersecting) continue;
      entrada.target.classList.add("is-in");
      reveal.unobserve(entrada.target);
    }
  },
  { rootMargin: "0px 0px -10% 0px" }
);
document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

// ---------- Cabecera: marca la sección en la que estás ----------

const enlacesNav = [...document.querySelectorAll("[data-nav]")];
const seccionActual = new IntersectionObserver(
  (entradas) => {
    for (const entrada of entradas) {
      if (!entrada.isIntersecting) continue;
      const id = `#${entrada.target.id}`;
      enlacesNav.forEach((enlace) => {
        if (enlace.getAttribute("href") === id) enlace.setAttribute("aria-current", "true");
        else enlace.removeAttribute("aria-current");
      });
    }
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
enlacesNav.forEach((enlace) => {
  const seccion = document.querySelector(enlace.getAttribute("href"));
  if (seccion) seccionActual.observe(seccion);
});

// ---------- Menú móvil: la hamburguesa se convierte en X y los enlaces entran en cascada ----------

const menuBoton = document.querySelector("[data-menu-boton]");
const menu = document.querySelector("[data-menu]");

if (menuBoton && menu) {
  menu.hidden = false; // con JS el menú se muestra y oculta con clases para poder animarlo

  const abrirMenu = (abrir) => {
    menuBoton.setAttribute("aria-expanded", String(abrir));
    menuBoton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("is-open", abrir);
    document.body.classList.toggle("menu-abierto", abrir);
  };

  menuBoton.addEventListener("click", () => abrirMenu(menuBoton.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("[data-menu-enlace]").forEach((enlace) => enlace.addEventListener("click", () => abrirMenu(false)));
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") abrirMenu(false);
  });
}

// ---------- Frase principal: cada palabra se ilumina una a una ----------

const frases = [...document.querySelectorAll("[data-palabras]")].map((bloque) => {
  const palabras = bloque.textContent.trim().split(/\s+/);
  bloque.setAttribute("aria-label", bloque.textContent.trim());
  bloque.innerHTML = palabras.map((p) => `<span class="palabra" aria-hidden="true">${p}</span>`).join(" ");
  return { bloque, palabras: [...bloque.querySelectorAll(".palabra")] };
});

const renderFrases = () => {
  const alto = window.innerHeight;
  for (const { bloque, palabras } of frases) {
    if (reduceMotion) {
      palabras.forEach((p) => p.classList.add("is-lit"));
      continue;
    }
    const { top, height } = bloque.getBoundingClientRect();
    // Empieza cuando el bloque entra por el 80 % de la pantalla y termina cuando su final pasa por el 45 %.
    const progreso = clamp((alto * 0.8 - top) / (height + alto * 0.35));
    const encendidas = Math.round(progreso * palabras.length);
    palabras.forEach((p, i) => p.classList.toggle("is-lit", i < encendidas));
  }
};

// Un solo listener de scroll, limitado a un frame con requestAnimationFrame (regla B11 de la skill de diseño).
let pendiente = false;
const alHacerScroll = () => {
  if (pendiente) return;
  pendiente = true;
  requestAnimationFrame(() => {
    pendiente = false;
    renderFrases();
  });
};

window.addEventListener("scroll", alHacerScroll, { passive: true });
window.addEventListener("resize", alHacerScroll);
alHacerScroll();

// ---------- Formulario de reserva (validación en el navegador) ----------

const form = document.querySelector("[data-reserva]");

if (form) {
  const fecha = form.elements.fecha;
  fecha.min = new Date().toISOString().slice(0, 10);

  const mensajes = {
    nombre: "Escribe tu nombre.",
    email: "Escribe un email válido, por ejemplo nombre@correo.com.",
    fecha: "Elige un día a partir de hoy.",
    personas: "Elige cuántas personas vienen.",
  };

  const validar = (campo) => {
    const contenedor = campo.closest(".campo");
    const error = contenedor.querySelector("[data-error]");
    const valido = campo.checkValidity();
    contenedor.toggleAttribute("data-invalido", !valido);
    campo.setAttribute("aria-invalid", String(!valido));
    error.textContent = valido ? "" : mensajes[campo.name];
    return valido;
  };

  form.querySelectorAll("input, select").forEach((campo) => {
    campo.addEventListener("blur", () => validar(campo));
    campo.addEventListener("input", () => {
      if (campo.closest(".campo").hasAttribute("data-invalido")) validar(campo);
    });
  });

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const campos = [...form.querySelectorAll("input, select")];
    const invalidos = campos.filter((campo) => !validar(campo));
    const estado = form.querySelector("[data-estado]");

    if (invalidos.length) {
      invalidos[0].focus();
      estado.textContent = "";
      return;
    }

    // Sitio de prueba: no se envía nada.
    estado.textContent = `Reserva de prueba para ${form.elements.personas.value} personas recibida. Este sitio es una demo y no envía datos.`;
    form.reset();
  });
}
