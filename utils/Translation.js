// import * as Localization from "expo-localization";

import i18n from "i18n-js";

i18n.fallbacks = true;

i18n.translations = {
  en: {
    // side Menu
    side_menu_home: "Home",
    side_menu_MyVehicle: "My Vehicles",
    side_menu_MyBookings: "My Bookings",
    side_menu_Packages: "Packages",
    side_menu_Locations: "Locations",
    side_menu_FAQs: "FAQs",
    side_menu_Messages: "Messages",
    side_menu_Contact: "Contact",
    side_menu_Logout: "Logout",

    // Login
    // validation
    plzEnterPhoneNumber: "Please enter phone-number",
    // signUp
    plzEnterYourName: "Please enter your name",
    nameShouldLess: "Name should be less than 30 characters. ",
    plzEnterEmail: "Please enter e-mail address. ",
    invalidAddress: "Invalid e-mail address. ",
    plzEnterPassword: "Please enter password.",
    passShouldLess: "Password should be min 6 chars long..",
    signup_welcome: "Welcome",
    signup_plsSignUp: "Please sign up to continue",
    signup_name: "Name",
    signup_email: "Email",
    signup_password: "Password",
    signup_bySignUp: "By signing up,you agree to our",
    signup_term: "Terms & Policy",
    signup_agree: "I Agree",
    // WelcomeDacwash.js
    wel_dacwash: "Dacwash",
    wel_DACWASH: "DACWASH",
    wel_WELCOME: "WELCOME",
    wel_letsStart: "Lets get started by adding your vehicle",
    wel_AddVehicle: "Add Vehicle",
    // Add Vehicle.js
    addV_AddVehicle: "ADD VEHICLE",
    addV_plsAddV: "Please Add Your Vehicle Details",
    addV_make: "Make*",
    addV_model: "Model*",
    addV_year: "Year*",
    addV_color: "Color",
    addV_next: "Next",
    // headers
    VehicleStatus_header: "Vehicle Status",
    myVehilced_header: "MY VEHICLES",
    MyBooking_header: "MY BOOKINGS",
    vehicle_details: "VEHICLE DETAILS",
    package_header: "PACKAGES",
    locatin_header: "LOCATIONS",
    faq_header: "FAQs",
    contact_header: "CONTACTS",
    summary_header: "SUMMARY",
    payment_header: "Payment",
    credDebit_header: "Credit/Debit Card Details",
    bookingDetails_header: "BOOKING DETAILS",
    profile_header: "PROFILE",
    dacwash_header: "DAC Wash",
    homeL_header: "Home Location",
    editV_header: "EDIT VEHICLE",
    changePassword_header: "Change Password",
    message_header: "MESSAGE",
    changeLanguage_header: "Change Language",
    // location.js
    location_addLocation: "Add Location",
    // contact.js
    contact_forAnyInq: "For any inquires,info or support,",
    contact_contactUs: "contatct us or leave us a message",
    //   Dacwash.js
    dacwash_insideOutSide: "Inside & Outside Wash",
    dacwash_washNow: "Wash Now",
    dacwash_washlater: "Wash Later",
    // summary.js
    summary_vehicleSelect: "Vehicle Selected",
    summary_textInput: "Enter additional information",
    summary_eta: "ETA",
    summary_euro: "Amount",
    summary_Confirm: "Confirm",
    summary_service: "Services",
    //  payment.js
    payment_card: "Card",
    payment_cash: "Cash",
    payment_package: "Package",
    payment_selectMathod: "Select Payment Mathod",
    payment_priceInclude: "**ALL PRICES INCLUDE VAT",
    payment_pNow: "Pay Now",
    payment_aud: "Amount",
    // credDebit.js
    creDebit_totalAmnt: "Total Amount To Be Paid",
    creDebit_cardNUMBER: "CARD NUMBER",
    creDebit_cardnumber: "Card Number",
    creDebit_CYC: "CVC",
    creDebit_exDate: "Expiry Date",
    creDebit_MM: "MM",
    creDebit_YY: "YY",
    creDebit_postCode: "POST CODE",
    creDebit_Code: "Code",
    creDebit_cardHolderName: "CARD HOLDER NAME",
    creDebit_pay: "PAY",
    creDebit_suportCard: "Supported Cards",
    // bookingDetails.js
    bookingD_Washertest: "Washer test",
    bookingD_PaymentMode: "Payment Mode:",
    bookingD_location: "Location",
    bookingD_PhotoGallery: "View Photo gallery",
    bookingD_PreWash: "Pre Wash",
    bookingD_AfterWash: "After Wash",
    myBooking_pre: "Previous",
    profile_changePassword: "Change Password",
    // Addlocation.js
    addLocation_home: "Home",
    addLocation_work: "Work",
    addLocation_other: "Other",
    save: "Save",
    NoData: "No Data Found",
    Notification: "NOTIFICATIONS",
    // EditVehicle.js
    Emirate: "Country*",
    plateCode: "Plate Code*",
    plateNumber: "Plate Number*",
    search: "Search",
    //    VefifyNumber.js
    verifyNumber: "Verify your mobile Number",
    enterPin: "Enter the pin you received via SMS on",
    resendOtp:
      "If you have not received the OTP,please press\nResend OTP after the time elapses.",
    // ChangePassword.js
    plzEnterCurrentPass: "Please enter current password.",
    plzEnterNewPass: "Please enter new password",
    passAndConPassNotMatch: "Password and confirm password does not match.",
    choose_upload: "Choose Image Source",
  },
  es: {
    // side Menu
    side_menu_home: "Casa",
    side_menu_MyVehicle: "I miei veicoli",
    side_menu_MyBookings: "Le mie prenotazioni",
    side_menu_Packages: "Pacchi",
    side_menu_Locations: "sedi",
    side_menu_FAQs: "FAQs",
    side_menu_Messages: "messaggi",
    side_menu_Contact: "Contatto",
    side_menu_Logout: "Disconnettersi",
    // Login
    // validation
    plzEnterPhoneNumber: "Inserisci il numero di telefono",
    NotANumber: "Questo non è un numero",
    login_continue_fb: "Continua con Facebook",
    login_alreadyUser_enterNumber:
      "Sei già un utente? Inserisci il tuo numero di cellulare registrato qui sotto",
    login_it: "IT +39",
    login_phoneNumber: "Numero di telefono",
    login_login: "accesso",
    login_DontAccount: "Non hai un account?",
    login_signUP: "Iscriviti",
    // signUp
    plzEnterYourName: "per favore inserisci il tuo nome",
    nameShouldLess: "Il nome deve contenere meno di 30 caratteri. ",
    plzEnterEmail: "Si prega di inserire l'indirizzo e-mail. ",
    invalidAddress: "Indirizzo email non valido. ",
    plzEnterPassword: "Per favore, inserisci la password.",
    passShouldLess: "La password deve essere lunga almeno 6 caratteri ..",
    signup_welcome: "Benvenuta",
    signup_plsSignUp: "Registrati per continuare",
    signup_name: "Nome",
    signup_email: "E-mail",
    signup_password: "Parola d'ordine",
    signup_bySignUp: "Iscrivendoti, accetti il ​​nostro",
    signup_term: "Termini e politica",
    signup_agree: "Sono d'accordo",
    // WelcomeDacwash.js
    wel_dacwash: "",
    wel_DACWASH: "DACWASH",
    wel_WELCOME: "BENVENUTA",
    wel_letsStart: "Iniziamo aggiungendo il tuo veicolo",
    wel_AddVehicle: "Aggiungi veicolo",
    // Add Vehicle.js
    addV_AddVehicle: "AGGIUNGI VEICOLO",
    addV_plsAddV: "Aggiungi i dettagli del tuo veicolo",
    addV_make: "Rendere*",
    addV_model: "Modella*",
    addV_year: "Anno*",
    addV_color: "Colore",
    addV_next: "Il prossimo",
    // headers
    VehicleStatus_header: "Stato del veicolo",
    myVehilced_header: "I MIEI VEICOLI",
    MyBooking_header: "LE MIE PRENOTAZIONI",
    package_header: "PACCHI",
    locatin_header: "SEDI",
    faq_header: "FAQs",
    contact_header: "CONTATTI",
    summary_header: "SOMMARIO",
    payment_header: "Pagamento",
    credDebit_header: "Dettagli della carta di credito / debito",
    bookingDetails_header: "DETTAGLI DELLA PRENOTAZIONE",
    profile_header: "PROFILO",
    dacwash_header: "DAC Wash",
    homeL_header: "Posizione DAC WashHome",
    editV_header: "MODIFICA VEICOLO",
    changePassword_header: "Cambia la password",
    message_header: "MESSAGGIO",
    changeLanguage_header: "Cambia lingua",
    // location.js
    location_addLocation: "Aggiungi luogo",
    // contact.js
    contact_forAnyInq: "Per qualsiasi richiesta, info o supporto,",
    contact_contactUs: "contattaci o lasciaci un messaggio",
    //   Dacwash.js
    dacwash_insideOutSide: "Lavaggio interno ed esterno",
    dacwash_washNow: "Wash Now",
    dacwash_washlater: "Lavare più tardi",
    // summary.js
    summary_vehicleSelect: "Veicolo selezionato",
    summary_textInput: "Inserisci il tuo commento, Dettagli edificio, Via ecc.",
    summary_eta: "ETA",
    summary_euro: "EURA",
    summary_Confirm: "Confermare",
    summary_service: "Servizi",
    //  payment.js
    payment_card: "Carta",
    payment_selectMathod: "Seleziona Payment Mathod",
    payment_priceInclude: "**TUTTI I PREZZI SONO COMPRENSIVI DI IVA",
    payment_pNow: "Paga ora",
    payment_aud: "AUD",
    // credDebit.js
    creDebit_totalAmnt: "AUD Importo totale da pagare",
    creDebit_cardNUMBER: "NUMERO DI CARTA",
    creDebit_cardnumber: "Numero di carta",
    creDebit_CYC: "",
    creDebit_exDate: "Data scadenza CIC",
    creDebit_MM: "MM",
    creDebit_YY: "YY",
    creDebit_postCode: "CODICE YYPOST",
    creDebit_Code: "Codice",
    creDebit_cardHolderName: "NOME DEL TITOLARE",
    creDebit_pay: "PAGARE",
    creDebit_suportCard: "Schede supportate",
    // bookingDetails.js
    bookingD_Washertest: "Prova della lavatrice",
    bookingD_PaymentMode: "Metodo di pagamento:",
    bookingD_location: "Posizione",
    bookingD_PhotoGallery: "Visualizza la galleria fotografica",
    bookingD_PreWash: "Prelavaggio",
    bookingD_AfterWash: "Dopo il lavaggio",
    myBooking_pre: "Precedente",
    profile_changePassword: "Cambia la password",
    // Addlocation.js
    addLocation_work: "Lavoro",
    addLocation_other: "Altra",
    save: "Salva",
    NoData: "Nessun dato trovato",
    Notification: "NOTIFICHE",
    // EditVehicle.js
    Emirate: "Emirato*",
    plateCode: "Codice targa*",
    plateNumber: "Targa*",
    search: "Search",
    //    VefifyNumber.js
    verifyNumber: "Verifica il tuo numero di cellulare",
    enterPin: "Inserisci il PIN su cui hai ricevuto tramite SMS",
    resendOtp:
      "Se non hai ricevuto l'OTP, premi  nRinvia OTP allo scadere del tempo.",
    // ChangePassword.js
    plzEnterCurrentPass: "Inserisci la password attuale.",
    plzEnterNewPass: "Inserisci una nuova password",
    passAndConPassNotMatch:
      "La password e la conferma della password non corrispondono.",
  },
};
