const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

// Initialisation avec ta clé secrète
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// 🔴 REMPLACE CECI PAR L'UID QUE TU AS COPIÉ SUR FIREBASE
const monUid = "XlcXeymyZPaBE7D1pezeLaJkapv1"; 

// On donne le badge { admin: true } à cet utilisateur
admin.auth().setCustomUserClaims(monUid, { admin: true })
  .then(() => {
    console.log("🎉 Succès ! Ton compte est maintenant Administrateur.");
    process.exit();
  })
  .catch((error) => {
    console.log("Erreur :", error);
    process.exit(1);
  });