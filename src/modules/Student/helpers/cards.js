import { useSelector } from "react-redux";
import poiskovi_probori from "../img/poiskovi_probori.png";
import osnovi_zashiti_inf from "../img/osnovi_zashiti_inf.png";
import met_koncept_zashiti from "../img/met_koncept_zashiti.png";
import secreti_comp_shpionazh from "../img/secreti_comp_shpionazh.png";
import zashita_ot_razvedki from "../img/zashita_ot_razvedki.png";
import fiz_zashiti_inf from "../img/fiz_zashiti_inf.png";
import electronica_schematechnica from "../img/electronica_schematechnica.png";
import kassandra_k21 from "../img/kassandra_k21.png";
import NR900EK_ruk from "../img/NR900EK_ruk.png";
import NR900EK_formular from "../img/NR900EK_formular.png";
import kassandra_k6 from "../img/kassandra_k6.png";
import kassandra_ko from "../img/kassandra_ko.png";
import kassandraSS_part1 from "../img/kassandraSS_part1.png";
import kassandraSS_part2 from "../img/kassandraSS_part2.png";
import NR900S from "../img/NR900S.png";
import nr2000 from "../img/nr2000.png"

export const useCombinedCards = () => {
  const cardsFromBackend = useSelector((state) => state.literature.cards);

  const staticCards = [
    {
      id: 1,
      category: "manual",
      preview: poiskovi_probori,
      link: "poiskovi_probori",
    },
    {
      id: 2,
      category: "manual",
      preview: osnovi_zashiti_inf,
      link: "osnovi_zashiti_inf",
    },
    {
      id: 3,
      category: "manual",
      preview: met_koncept_zashiti,
      link: "met_koncept_zashiti",
    },
    {
      id: 4,
      category: "manual",
      preview: secreti_comp_shpionazh,
      link: "secreti_comp_shpionazh",
    },
    {
      id: 5,
      category: "manual",
      preview: zashita_ot_razvedki,
      link: "zashita_ot_razvedki",
    },
    {
      id: 6,
      category: "manual",
      preview: fiz_zashiti_inf,
      link: "fiz_zashiti_inf",
    },
    {
      id: 7,
      category: "manual",
      preview: electronica_schematechnica,
      link: "electronica_schematechnica",
    },
    {
      id: 8,
      category: "pribor",
      preview: kassandra_k21,
      link: "kassandra_k21",
    },
    {
      id: 9,
      category: "pribor",
      preview: NR900EK_ruk,
      link: "NR900EK_ruk",
    },
    {
      id: 10,
      category: "pribor",
      preview: NR900EK_formular,
      link: "NR900EK_formular",
    },
    {
      id: 11,
      category: "pribor",
      preview: kassandra_k6,
      link: "kassandra_k6",
    },
    {
      id: 12,
      category: "pribor",
      preview: kassandra_ko,
      link: "kassandra_ko",
    },
    {
      id: 13,
      category: "pribor",
      preview: kassandraSS_part1,
      link: "kassandraSS_part1",
    },
    {
      id: 14,
      category: "pribor",
      preview: kassandraSS_part2,
      link: "kassandraSS_part2",
    },
    {
      id: 15,
      category: "pribor",
      preview: NR900S,
      link: "NR900S",
    },
    {
      id: 16,
      category: "pribor",
      preview: nr2000,
      link: "nr2000",
    },
  ];

  return cardsFromBackend.map((card) => {
    const staticCard = staticCards.find((sc) => sc.id === card.id);
    return {
      ...card,
      category: staticCard ? staticCard.category : null,
      preview: staticCard ? staticCard.preview : null,
      link: staticCard ? staticCard.link : "#",
    };
  });
};
