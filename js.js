const translations = {
  it: {
    title: "Il Babbo Natale Meme",
    subtitle: "Porta guadagni e risate natalizie a tutta la community!",
    joinBtn: "Unisciti Ora",
    infoTitle: "Cos'è il Babbo Natale Meme?",
    infoText: "Una piattaforma unica e divertente, creata per portare prosperità finanziaria e gioia natalizia.",
    roadmapTitle: "La nostra Roadmap",
    roadmapList: [
      "Fase 1: Lancio della community natalizia",
      "Fase 2: Airdrop natalizio per i partecipanti",
      "Fase 3: Creazione di eventi festivi unici"
    ],
    tokenomicsTitle: "Tokenomics",
    tokenomicsText: "Una distribuzione trasparente e responsabile per sostenere il progetto."
  },
  en: {
    title: "The Meme Santa Claus",
    subtitle: "Bringing financial gains and Christmas joy to the community!",
    joinBtn: "Join Now",
    infoTitle: "What is Meme Santa Claus?",
    infoText: "A unique and fun platform designed to bring financial prosperity and holiday cheer.",
    roadmapTitle: "Our Roadmap",
    roadmapList: [
      "Phase 1: Launch the Christmas community",
      "Phase 2: Christmas airdrop for participants",
      "Phase 3: Unique festive events"
    ],
    tokenomicsTitle: "Tokenomics",
    tokenomicsText: "A transparent and responsible distribution to support the project."
  }
};

document.querySelectorAll(".lang-btn").forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    const translation = translations[lang];

    document.getElementById("title").textContent = translation.title;
    document.getElementById("subtitle").textContent = translation.subtitle;
    document.getElementById("join-btn").textContent = translation.joinBtn;
    document.getElementById("info-title").textContent = translation.infoTitle;
    document.getElementById("info-text").textContent = translation.infoText;
    document.getElementById("roadmap-title").textContent = translation.roadmapTitle;
    document.getElementById("roadmap-list").innerHTML = translation.roadmapList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("tokenomics-title").textContent = translation.tokenomicsTitle;
    document.getElementById("tokenomics-text").textContent = translation.tokenomicsText;
  });
});
