function greetInLanguage(language) {
  const sanitizeLang = sanitizeInput(language);
  const greet = checkLanguague(sanitizeLang);
  alert(greet);
}

function sanitizeInput(input) {
  if (!input) {
    return `${input}`;
  }
  return input.trim().toLowerCase();
}

function checkLanguague(lang) {
  switch (lang) {
    case "spanish":
      return "Buenos dias!";
    case "french":
      return "Bonjour!";
    case "mandarin":
      return "Zaoshang hao!";
    case "hindi":
      return "Shubh prabhat!";
    case "arabic":
      return "al-khair!";
    case "portuguese":
      return "Bom dia!";
    case "bengali":
      return "Suprobhat!";
    case "russian":
      return "Dobroye utro1";
    case "japanese":
      return "Ohayou gozaimasu!";
    case "punjabi":
      return "Shubh saver!";
    case "german":
      return "Guten morgen!";
    case "italian":
      return "Buongiorno!";
    case "english":
      return "Good morning!";
      /*  case "" : */ s;
    default:
      return `${lang} was not recognized`;
  }
}
