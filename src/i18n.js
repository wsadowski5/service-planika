import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const htmlLang = document.documentElement.lang || 'en';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: htmlLang,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          service_title: 'Planika Service',
          select_product_prompt: 'Which product do you need help with?',
          change_product: 'Change product',
          change_problem: 'Change problem',
          download_file: 'Download file',
          buy_here: 'BUY HERE',
          still_need_help: 'Still need help?',
          contact_service: 'Contact Service',
        },
      },
      pl: {
        translation: {
          service_title: 'Serwis Planika',
          select_product_prompt: 'Z którym produktem potrzebujesz pomocy?',
          change_product: 'Zmień produkt',
          change_problem: 'Zmień problem',
          download_file: 'Pobierz plik',
          buy_here: 'KUP TUTAJ',
          still_need_help: 'Wciąż potrzebujesz pomocy?',
          contact_service: 'Skontaktuj się z serwisem',
        },
      },
      de: {
        translation: {
          service_title: 'Planika Kundendienst',
          select_product_prompt: 'Bei welchem Produkt benötigst du Hilfe?',
          change_product: 'Produkt ändern',
          change_problem: 'Problem ändern',
          download_file: 'Datei herunterladen',
          buy_here: 'HIER KAUFEN',
          still_need_help: 'Brauchst du noch Hilfe?',
          contact_service: 'Kontakt zum Service',
        },
      },
      fr: {
        translation: {
          service_title: 'Service Planika',
          select_product_prompt: 'Avec quel produit avez-vous besoin d’aide ?',
          change_product: 'Changer de produit',
          change_problem: 'Changer le problème',
          download_file: 'Télécharger le fichier',
          buy_here: 'ACHETER ICI',
          still_need_help: 'Vous avez encore besoin d’aide ?',
          contact_service: 'Contacter le service',
        },
      },
      es: {
        translation: {
          service_title: 'Servicio Planika',
          select_product_prompt: '¿Con qué producto necesitas ayuda?',
          change_product: 'Cambiar producto',
          change_problem: 'Cambiar problema',
          download_file: 'Descargar archivo',
          buy_here: 'COMPRAR AQUÍ',
          still_need_help: '¿Aún necesitas ayuda?',
          contact_service: 'Contactar con el servicio',
        },
      },
      it: {
        translation: {
          service_title: 'Assistenza Planika',
          select_product_prompt: 'Per quale prodotto hai bisogno di aiuto?',
          change_product: 'Cambia prodotto',
          change_problem: 'Cambia problema',
          download_file: 'Scarica il file',
          buy_here: 'ACQUISTA QUI',
          still_need_help: 'Hai ancora bisogno di aiuto?',
          contact_service: 'Contatta l’assistenza',
        },
      },
    },
  });

export default i18n;
