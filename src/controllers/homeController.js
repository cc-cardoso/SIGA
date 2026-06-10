exports.index = (req, res) => {
  res.render("pages/home", {
    title: "SIGA",
    modules: [
      "Gestao de associados",
      "Gestao financeira",
      "Atividades profissionais",
      "Administracao e dashboard",
    ],
  });
};

