import {BoardGame, Thing} from './game';

export class ThingToBoardgame {
  static convertGameDetailsThingToBoardGame(boardGameWithDetails: Thing): BoardGame {
    const elements = boardGameWithDetails.elements;
    return {
      id: boardGameWithDetails.attributes.id,
      name: this.getAttributeValue(elements, 'name'),
      thumbnail: this.getAttributeFirstElementText(elements, 'thumbnail'),
      fullImage: this.getAttributeFirstElementText(elements, 'image'),
      description: this.getAttributeFirstElementText(elements, 'description'),
      yearPublished: +this.getAttributeValue(elements, 'yearpublished'),
      minPlayers: +this.getAttributeValue(elements, 'minplayers'),
      maxPlayers: +this.getAttributeValue(elements, 'maxplayers'),
      playingTime: +this.getAttributeValue(elements, 'playingtime'),
      minAge: +this.getAttributeValue(elements, 'minage'),
      suggestedPlayAge: this.getSuggestedPlayAge(elements),
      themes: this.getAllAttributesOfType(elements, 'boardgamecategory')
    };
  }

  static getAttributeValue(elements: Thing[], attribute: string): string | null {
    return elements.find(el => el.name === attribute)?.attributes.value;
  }

  static getAttributeFirstElementText(elements: Thing[], attribute: string): string | null {
    return elements.find(el => el.name === attribute)?.elements[0]?.text;
  }

  static getSuggestedPlayAge(elements: Thing[]): number | null {
    const result = this.getAttributeTopPollResult(elements, 'suggested_playerage');
    return result ? +result : null;
  }

  static getAttributeTopPollResult(elements: Thing[], attribute: string): string | null {
    const poll = elements.find(el => el.name === 'poll' && el.attributes.name === attribute);
    let maxResult: string | null = null;
    if (poll && +poll.attributes.totalvotes > 0) {
      let maxNumVote = 0;
      poll.elements[0].elements.forEach(el => {
        if (+el.attributes.numvotes > maxNumVote) {
          maxNumVote = +el.attributes.numvotes;
          maxResult = el.attributes.value;
        }
      });
    }
    return maxResult;
  }

  static getAllAttributesOfType(elements: Thing[], attribute: string): Array<string> {
    return elements.filter(el => el.attributes?.type === attribute).map(el => el.attributes.value);
  }
}
