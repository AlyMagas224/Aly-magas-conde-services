
window.MCS_CONFIG = {
  /* ----- Coordonnées de l'entreprise (affichées dans le pied de page et la page Contact) ----- */
  COMPANY: {
    name: 'ALY & CONDE Services',
    email: 'alymagass96@gmail.com',
    phone: '(438) 341-4489',
    address: 'Québec, Canada',             // à remplacer
    hours: 'Lundi au vendredi, 9 h à 17 h',
  },

  /* ----- Supabase (laisser vide = mode démonstration) ----- */
  SUPABASE_URL: 'https://brrggmepxavuxoxontqq.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_ogRmnRwNbUV5T5KgDwkmwg_RiIdDz5_',
  STORAGE_BUCKET: 'produits',

  /* ----- Prix, livraison et taxes (doivent correspondre à sql/schema.sql) ----- */
  CURRENCY: 'CAD',
  TPS_RATE: 0.05,          // taxe fédérale (5 %)
  TVQ_RATE: 0.09975,       // taxe de vente du Québec (9,975 %)
  FREE_SHIPPING_MIN: 100,  // livraison offerte dès ce montant (après rabais)
  SHIPPING_FLAT: 9.99,     // frais de livraison sous ce montant
  MAX_QTY: 20,             // quantité maximale par article
};
