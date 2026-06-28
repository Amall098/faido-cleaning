/**
 * @file i18n.ts
 * @description i18next configuration for bilingual (French/English) support.
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * @constant resources
 * @description Translation resources for French and English.
 */
const resources = {
  fr: {
    translation: {
      common: {
        companyTagline: 'Nettoyage professionnel et de haut de gamme',
        languageFrench: 'Français',
        languageEnglish: 'English',
      },
      hero: {
        badge: 'Nettoyage professionnel et de haut de gamme',
        titleBeforeCity: 'Propreté irréprochable à',
        titleCity: 'Ottawa/Gatineau',
        titleAfterCity: ', service fiable et clé en main.',
        description:
          "{{companyName}} offre un service de nettoyage professionnel pour les secteurs résidentiel et commercial dans toute la région d'Ottawa/Gatineau. Nous créons des espaces impeccables, sains et accueillants, à chaque intervention.",
        primaryCta: 'Obtenir un devis gratuit',
        secondaryCta: 'Appelez-nous maintenant',
        bullet1: 'Équipe vérifiée, assurée et professionnelle',
        bullet2: 'Propreté éclatante et contrôle qualité systématique',
        bullet3: 'Ottawa, Gatineau, Hull, Kanata, Orleans et environs',
        cardBadge: 'Propreté 100 % garantie',
        cardText:
          "Un intérieur impeccable, sans compromis sur la santé, la sécurité ni l'image de votre espace.",
        imageAlt: 'Espace de bureau moderne et propre',
      },
      services: {
        badge: 'Nos services',
        heading:
          'Des services de nettoyage professionnel, pensés pour Ottawa/Gatineau',
        subheading:
          'Nous adaptons chaque intervention à votre espace, à votre fréquence souhaitée et à vos priorités : rapidité, confidentialité, désinfection renforcée ou approche écologique.',
        cardNote:
          "Idéal pour les clients qui recherchent un service fiable, ponctuel et méticuleux, adapté à la réalité d'Ottawa/Gatineau.",
        residential: {
          title: 'Nettoyage résidentiel',
          badge: 'Maisons et appartements',
          description:
            'Pour des maisons, condos et appartements où il fait bon vivre, sans compromis sur l’hygiène ni sur le confort.',
          points: [
            'Entretien régulier ou grands ménages saisonniers',
            'Nettoyage complet : cuisines, salles de bain, chambres, pièces de vie',
            'Dépoussiérage minutieux, aspiration et lavage des planchers',
          ],
        },
        commercial: {
          title: 'Nettoyage commercial',
          badge: 'Bureaux et commerces',
          description:
            'Une image irréprochable pour vos clients et un environnement sain pour vos équipes.',
          points: [
            'Bureaux, commerces, cliniques et espaces corporatifs',
            'Entretien quotidien, hebdomadaire ou à la carte',
            'Désinfection des surfaces de contact et zones à forte circulation',
          ],
        },
        postWork: {
          title: 'Fin de chantier / déménagement',
          badge: 'Remise en état',
          description:
            'L’étape finale pour livrer un espace impeccable, prêt à habiter ou à remettre au propriétaire.',
          points: [
            'Nettoyage après rénovation, construction ou travaux',
            'Élimination des poussières fines et résidus de chantier',
            'Préparation à la mise en location ou à la vente',
          ],
        },
      },
      coverage: {
        badge: 'Zone de couverture',
        heading:
          'Votre équipe de nettoyage de confiance dans toute la région de la Capitale Nationale',
        description:
          "Nous desservons l’ensemble de la région d'Ottawa/Gatineau avec des horaires flexibles, que vous soyez propriétaire résidentiel, gestionnaire d’immeuble ou responsable d’installations commerciales. Nous planifions nos déplacements pour intervenir rapidement, là où vous avez besoin de nous.",
        areaSurroundings: 'Environs',
      },
      whyChooseUs: {
        badge: 'Pourquoi nous choisir',
        heading:
          'Un partenaire de nettoyage fiable, transparent et orienté résultats',
        description:
          'Notre objectif est simple : que chaque visite se traduise par une propreté visible, une hygiène renforcée et un véritable soulagement pour vous. C’est pourquoi nous avons structuré notre service autour de trois piliers de confiance.',
        reasons: [
          {
            title: 'Équipe professionnelle, vérifiée et assurée',
            description:
              'Chaque membre de notre équipe est soigneusement sélectionné, formé et assuré. Nous entrons chez vous comme des professionnels, avec un respect total de votre espace, de vos biens et de votre confidentialité.',
          },
          {
            title: 'Produits écoresponsables et sécuritaires',
            description:
              'Nous privilégions des produits écologiques, efficaces et sécuritaires pour les familles, les animaux de compagnie et les équipes de travail, en réduisant l’empreinte environnementale de chaque intervention.',
          },
          {
            title: 'Satisfaction 100 % garantie',
            description:
              'Contrôle qualité après chaque visite, communication simple avec un interlocuteur dédié et retouches sans frais en cas d’insatisfaction : si quelque chose n’est pas à la hauteur, nous revenons corriger.',
          },
        ],
      },
      process: {
        badge: 'Processus',
        heading: 'Un processus simple, transparent et sans stress',
        description:
          'De la première prise de contact à la dernière inspection, tout est pensé pour vous faire gagner du temps et vous offrir une expérience fluide.',
        chipText:
          'De la demande de devis à la première visite en quelques clics.',
        stepLabel: 'Étape',
        steps: [
          {
            title: 'Demande de devis en ligne ou par téléphone',
            description:
              'Remplissez le formulaire ou appelez-nous. Indiquez le type d’espace (résidentiel ou commercial), la superficie approximative et la fréquence souhaitée.',
          },
          {
            title: 'Personnalisation de votre plan de nettoyage',
            description:
              'Un spécialiste analyse vos besoins, précise vos priorités (zones sensibles, horaires, contraintes) et construit un plan de nettoyage sur mesure.',
          },
          {
            title: 'Profitez d’un espace d’une propreté irréprochable',
            description:
              'Notre équipe se présente à l’heure convenue avec tout le matériel nécessaire. Vous retrouvez un espace lumineux, sain et parfaitement propre.',
          },
        ],
      },
      footer: {
        badge: 'Devis gratuit',
        heading:
          'Contactez-nous dès maintenant pour votre devis gratuit',
        description:
          'Expliquez-nous brièvement votre besoin (type d’espace, fréquence, préférences). Nous vous répondons rapidement avec une estimation claire et sans engagement.',
        form: {
          nameLabel: 'Nom complet',
          namePlaceholder: 'Ex. Marie Tremblay',
          emailLabel: 'Courriel',
          emailPlaceholder: 'vous@example.com',
          phoneLabel: 'Téléphone',
          phonePlaceholder: '(613) 712-2109',
          serviceTypeLabel: 'Type de service souhaité',
          serviceTypePlaceholder: 'Sélectionnez une option',
          serviceTypeResidential: 'Nettoyage résidentiel',
          serviceTypeCommercial: 'Nettoyage commercial',
          serviceTypePostConstruction: 'Fin de chantier / déménagement',
          serviceTypeOther: 'Autre (à préciser)',
          messageLabel: 'Message',
          messagePlaceholder:
            'Décrivez brièvement votre espace, la fréquence souhaitée et toute demande particulière.',
          submit: 'Envoyer ma demande de devis',
          success:
            'Merci ! Votre demande a été envoyée. Nous vous répondrons dans les plus brefs délais.',
        },
        companyNote:
          'Coordonnées fictives à remplacer par vos informations réelles.',
        navHome: 'Accueil',
        navServices: 'Nos services',
        navCoverage: 'Zone desservie',
        navProcess: 'Processus',
        navContact: 'Demande de devis',
        legalLine:
          'Entreprise enregistrée et assurée · Responsabilité civile professionnelle · Politique de confidentialité.',
        copyright: 'Tous droits réservés.',
      },
      languageToggle: {
        label: 'Langue',
        frShort: 'FR',
        enShort: 'EN',
      },
    },
  },
  en: {
    translation: {
      common: {
        companyTagline: 'Professional and premium cleaning',
        languageFrench: 'French',
        languageEnglish: 'English',
      },
      hero: {
        badge: 'Professional and premium cleaning',
        titleBeforeCity: 'Spotless cleanliness in',
        titleCity: 'Ottawa/Gatineau',
        titleAfterCity: ', reliable turnkey service.',
        description:
          '{{companyName}} provides professional cleaning services for residential and commercial spaces across the Ottawa/Gatineau region. We create spotless, healthy and welcoming environments with every visit.',
        primaryCta: 'Get a free quote',
        secondaryCta: 'Call us now',
        bullet1: 'Vetted, insured and professional team',
        bullet2: 'Sparkling results and systematic quality checks',
        bullet3: 'Ottawa, Gatineau, Hull, Kanata, Orleans and area',
        cardBadge: '100% cleanliness guaranteed',
        cardText:
          'A spotless interior with no compromise on health, safety or the image of your space.',
        imageAlt: 'Modern, clean office interior',
      },
      services: {
        badge: 'Our services',
        heading:
          'Professional cleaning services tailored to Ottawa/Gatineau',
        subheading:
          'We adapt every visit to your space, your preferred frequency and your priorities: speed, discretion, enhanced disinfection or an eco-friendly approach.',
        cardNote:
          'Ideal for clients who need a reliable, punctual and meticulous service adapted to Ottawa/Gatineau.',
        residential: {
          title: 'Residential cleaning',
          badge: 'Houses and apartments',
          description:
            'For homes, condos and apartments that feel great to live in, with no compromise on hygiene or comfort.',
          points: [
            'Regular maintenance or deep seasonal cleaning',
            'Thorough cleaning: kitchens, bathrooms, bedrooms, living areas',
            'Detailed dusting, vacuuming and floor washing',
          ],
        },
        commercial: {
          title: 'Commercial cleaning',
          badge: 'Offices and retail',
          description:
            'A spotless image for your clients and a healthy environment for your teams.',
          points: [
            'Offices, shops, clinics and corporate spaces',
            'Daily, weekly or on-demand maintenance',
            'Disinfection of touchpoints and high-traffic areas',
          ],
        },
        postWork: {
          title: 'Post-construction / move-out',
          badge: 'Turnkey handover',
          description:
            'The final step to deliver a flawless space, ready to move in or hand back to the owner.',
          points: [
            'Cleaning after renovation, construction or repair work',
            'Removal of fine dust and construction residues',
            'Preparation before renting out or selling',
          ],
        },
      },
      coverage: {
        badge: 'Service area',
        heading:
          'Your trusted cleaning team across the National Capital Region',
        description:
          'We serve the entire Ottawa/Gatineau region with flexible scheduling, whether you are a homeowner, property manager or facility manager. We plan our routes to respond quickly wherever you need us.',
        areaSurroundings: 'Surroundings',
      },
      whyChooseUs: {
        badge: 'Why choose us',
        heading:
          'A reliable, transparent and results-driven cleaning partner',
        description:
          'Our objective is simple: every visit should mean visible cleanliness, reinforced hygiene and real peace of mind for you. That is why our service is built around three pillars of trust.',
        reasons: [
          {
            title: 'Professional, vetted and insured team',
            description:
              'Every team member is carefully selected, trained and insured. We enter your space as professionals, with full respect for your home, belongings and privacy.',
          },
          {
            title: 'Eco-friendly and safe products',
            description:
              'We prioritize ecological, efficient and safe products for families, pets and staff, while reducing the environmental footprint of every visit.',
          },
          {
            title: '100% satisfaction guaranteed',
            description:
              'Quality control after every visit, easy communication with a dedicated contact person and free touch-ups if you are not satisfied: if something is not right, we come back to fix it.',
          },
        ],
      },
      process: {
        badge: 'Process',
        heading: 'A simple, transparent and stress-free process',
        description:
          'From the first contact to the final inspection, everything is designed to save you time and make your experience smooth.',
        chipText:
          'From quote request to first visit in just a few clicks.',
        stepLabel: 'Step',
        steps: [
          {
            title: 'Request your quote online or by phone',
            description:
              'Fill in the form or call us. Tell us about your space (residential or commercial), approximate size and preferred frequency.',
          },
          {
            title: 'Your customized cleaning plan',
            description:
              'A specialist reviews your needs, clarifies your priorities (sensitive areas, schedule, constraints) and builds a tailored cleaning plan.',
          },
          {
            title: 'Enjoy a flawlessly clean space',
            description:
              'Our team arrives at the agreed time with all required equipment. You come back to a bright, healthy and perfectly clean space.',
          },
        ],
      },
      footer: {
        badge: 'Free quote',
        heading: 'Contact us now for your free quote',
        description:
          'Tell us briefly what you need (type of space, frequency, preferences). We will get back to you quickly with a clear and obligation-free estimate.',
        form: {
          nameLabel: 'Full name',
          namePlaceholder: 'e.g. Marie Tremblay',
          emailLabel: 'Email',
          emailPlaceholder: 'you@example.com',
          phoneLabel: 'Phone',
          phonePlaceholder: '(613) 712-2109',
          serviceTypeLabel: 'Requested service type',
          serviceTypePlaceholder: 'Select an option',
          serviceTypeResidential: 'Residential cleaning',
          serviceTypeCommercial: 'Commercial cleaning',
          serviceTypePostConstruction: 'Post-construction / move-out',
          serviceTypeOther: 'Other (please specify)',
          messageLabel: 'Message',
          messagePlaceholder:
            'Briefly describe your space, desired frequency and any special requests.',
          submit: 'Send my quote request',
          success:
            'Thank you! Your request has been sent. We will get back to you shortly.',
        },
        companyNote:
          'Placeholder contact details to be replaced with your real information.',
        navHome: 'Home',
        navServices: 'Our services',
        navCoverage: 'Service area',
        navProcess: 'Process',
        navContact: 'Quote request',
        legalLine:
          'Registered and insured business · Liability insurance · Privacy policy.',
        copyright: 'All rights reserved.',
      },
      languageToggle: {
        label: 'Language',
        frShort: 'FR',
        enShort: 'EN',
      },
    },
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
