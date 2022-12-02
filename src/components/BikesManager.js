import * as constants from "../utils/constants";

export default class BikesManager {
  static cards = [
    [
      {
        image: new URL('../images/bikes/cervelo-caledonia-5.jpg', import.meta.url),
        name: 'Cervelo Caledonia-5',
      },
      {
        image: new URL('../images/bikes/cannondale-systemsix-himod.jpg', import.meta.url),
        name: 'Cannondale Systemsix Himod',
      },
      {
        image: new URL('../images/bikes/trek-domane-sl-7.jpg', import.meta.url),
        name: 'Trek Domane SL-7'
      }
    ],
    [
      {
        image: new URL('../images/bikes/cervelo-aspero-grx-810.jpg', import.meta.url),
        name: 'Cervelo Aspero GRX 810',
      },
      {
        image: new URL('../images/bikes/specialized-s-works-diverge.jpg', import.meta.url),
        name: 'Specialized S-Works Diverge',
      },
      {
        image: new URL('../images/bikes/cannondale-topstone-lefty-3.jpg', import.meta.url),
        name: 'Cannondale Topstone Lefty 3',
      }
    ],
    [
      {
        image: new URL('../images/bikes/specialized-s-works-shiv.jpg', import.meta.url),
        name: 'Specialized S-Works Shiv',
      },
      {
        image: new URL('../images/bikes/bmc-timemachine-01.jpg', import.meta.url),
        name: 'BMC Timemachine 01 ONE',
      },
      {
        image: new URL('../images/bikes/cervelo-caledonia-5.jpg', import.meta.url),
        name: 'Cervelo P-Series'
      }
    ]
  ];



  _showCards(cardsToShow) {
    for (let i = 0; i < cardsToShow.length; i++) {
      const card = constants.bikesCards[i];
      const cardImage = card.querySelector(constants.bikesCardImageSelector);
      const cardName = card.querySelector(constants.bikesCardNameSelector);

      cardName.textContent = cardsToShow[i].name;
      cardImage.src = cardsToShow[i].image;
      cardImage.alt = cardsToShow[i].name;
    }
  }

  setEventListeners() {
    for (let i = 0; i < constants.bikesMenuItems.length; i++) {
      constants.bikesMenuItems[i].addEventListener("click", () => {
        this._showCards(BikesManager.cards[i]);
      });
    }
  }
}
