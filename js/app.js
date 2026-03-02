// ================================
// CONFIG WHATSAPP (tu número)
// ================================
const WHATSAPP_NUMBER = "34618905239"; // +34 618 905 239 (sin +)
const RESTAURANT_NAME = "Quiroz Cocina Navarra";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const messageReserve = `Hola, quiero reservar una mesa en ${RESTAURANT_NAME}`;
const messageInfo = `Hola, tengo una consulta sobre la carta en ${RESTAURANT_NAME}`;

const btnHero = document.getElementById("btnWhatsAppHero");
const btnMenu = document.getElementById("btnWhatsAppMenu");
const btnContact = document.getElementById("btnWhatsAppContact");
const btnFloat = document.getElementById("btnWhatsAppFloat");

if (btnHero) btnHero.href = waLink(messageReserve);
if (btnContact) btnContact.href = waLink(messageReserve);
if (btnFloat) btnFloat.href = waLink(messageReserve);
if (btnMenu) btnMenu.href = waLink(messageInfo);

// ================================
// MENÚ MÓVIL (HAMBURGUESA)
// ================================
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Cerrar menú al hacer click en un enlace
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}