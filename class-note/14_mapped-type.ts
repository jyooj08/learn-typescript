type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAges = { [K in Heroes]: number };

const ages: HeroAges = {
  Hulk: 100,
  Capt: 33,
  Thor: 40,
};
