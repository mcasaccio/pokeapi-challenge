import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es: {
            translation: {
                "welcome": "Bienvenido al API TEST",
                "details": "Detalles",
                "previous": "Atrás",
                "next": "Siguiente",
                "hp": "Vida",
                "attack": "Ataque",
                "defense": "Defensa",
                "special-attack": "Ataque especial",
                "special-defense": "Defensa especial",
                "speed": "Velocidad"
            }
        },
        en: {
            translation: {
                "welcome": "Welcome to the API TEST",
                "details": "Details",
                "previous": "Previous",
                "next": "Next",
                "hp": "life",
                "attack": "Attack",
                "defense": "Defense",
                "special-attack": "Special Attack",
                "special-defense": "Special defense",
                "speed": "Speed"
            }
        }
    }
})