import {BoardGame, Thing} from './game';

export class ThingToBoardgame {
  static convertGameDetailsThingToBoardGame(boardGameWithDetails: Thing): BoardGame {
    return {
      id: boardGameWithDetails.attributes.id,
      name: this.getAttributeValue(boardGameWithDetails, 'name'),
      thumbnail: this.getAttributeFirstElementText(boardGameWithDetails, 'thumbnail'),
      fullImage: this.getAttributeFirstElementText(boardGameWithDetails, 'image'),
      description: this.getAttributeFirstElementText(boardGameWithDetails, 'description'),
      yearPublished: +this.getAttributeValue(boardGameWithDetails, 'yearpublished'),
      minPlayers: +this.getAttributeValue(boardGameWithDetails, 'minplayers'),
      maxPlayers: +this.getAttributeValue(boardGameWithDetails, 'maxplayers'),
      playingTime: +this.getAttributeValue(boardGameWithDetails, 'playingtime'),
      minAge: +this.getAttributeValue(boardGameWithDetails, 'minage'),
      suggestedPlayAge: this.getSuggestedPlayAge(boardGameWithDetails),
      themes: this.getAllAttributesOfType(boardGameWithDetails, 'boardgamecategory')
    };
  }

  static getAttributeValue(thing: Thing, attribute: string): string {
    return thing.elements.find(el => el.name === attribute)?.attributes.value;
  }

  static getAttributeFirstElementText(thing: Thing, attribute: string): string {
    return thing.elements.find(el => el.name === attribute)?.elements[0].text;
  }

  static getSuggestedPlayAge(boardGameWithDetails: Thing): number | null {
    const result = this.getAttributeTopPollResult(boardGameWithDetails, 'suggested_playerage');
    return result ? +result : null;
  }

  static getAttributeTopPollResult(boardGameWithDetails: Thing, attribute: string): string | null {
    const poll: Thing = boardGameWithDetails.elements.find(el => el.name === 'poll' && el.attributes.name === attribute);
    let maxResult: string = null;
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

  static getAllAttributesOfType(boardGameWithDetails: Thing, attribute: string): Array<string> {
    return boardGameWithDetails.elements.filter(el => el.attributes?.type === attribute).map(el => el.attributes.value);
  }
}
