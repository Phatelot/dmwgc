import { getPartyMetadata } from "./party_metadata";
import type { CharacterViewModel, ChartViewModel } from "./view_model";
import { formatWeight, formatBMI, toImperialHeight, toBMICategory } from "./weight_utils";

export function generateSentencesFor(characterName: string, viewModel: ChartViewModel) : string[] {
	const charViewModel = viewModel.characters.find(c => c.name === characterName) as CharacterViewModel;

	if (characterName === 'Monster_Falin') {
		return generateSentencesForMonsterFalin(charViewModel, viewModel);
	} else if (charViewModel.numbers && charViewModel.numbers > 1) {
		return generateSentencesForGroupCharacter(charViewModel as CharacterViewModel & {numbers: number}, viewModel);
	}
	return generateSentencesForNonGroupCharacter(charViewModel, viewModel);
}

function generateSentencesForNonGroupCharacter(charViewModel : CharacterViewModel, viewModel : ChartViewModel) : string[] {
	const sentences : string[] = [];
	const pronoun = charViewModel.gender === 'MAN' ? ['He', 'Him', 'His'] : ['She', 'Her', 'Her'];

	if (charViewModel.weight === charViewModel.baseWeight) {
		sentences.push(`${charViewModel.displayName || charViewModel.name} still hasn't gained any weight, and weighs ${formatWeight(charViewModel.weight)}lbs.`)
	} else {
		sentences.push(
			`${charViewModel.displayName || charViewModel.name} has gained ${formatWeight(charViewModel.weight - charViewModel.baseWeight)}lbs, and now weighs ${formatWeight(charViewModel.weight)}lbs.`,
		)
	}
	sentences.push(
		`${pronoun[0]}'s ${toImperialHeight(charViewModel.heightInMeters)} tall.`,
		`That gives ${pronoun[1].toLowerCase()} a BMI of ${formatBMI(charViewModel.BMI)}, so ${pronoun[0].toLowerCase()} is ${toBMICategory(charViewModel.BMI)}.`,
	);

	if (isFattestCharacter(charViewModel, viewModel)) {
		sentences.push(`Except for monster Falin, ${pronoun[0].toLowerCase()}'s the fattest character.`)
	} else if (isFattestCharacterOfParty(charViewModel, viewModel)) {
		const partyMetadata = getPartyMetadata(charViewModel.party);
		if (charViewModel.party === 'DUNGEON') {
			sentences.push(`Except for monster Falin, ${pronoun[0].toLowerCase()}'s the fattest among the Dungeon.`)
		} else {
			sentences.push(`${pronoun[0]}'s the fattest among ${partyMetadata.displayName}.`)
		}
	}

	if (hasReceivedDonation(charViewModel)) {
		const totalGain = charViewModel.weight - charViewModel.baseWeight;
		const percentage = Math.round(charViewModel.totalDonatedAmount / totalGain * 100);
		sentences.push(`${pronoun[0]} has received $${charViewModel.totalDonatedAmount} of donation (${percentage}% of ${pronoun[2].toLowerCase()} gain).`)
	} else {
		sentences.push(`${pronoun[0]} hasn't received any donation yet.`)
	}

	if (isImmobile(charViewModel)) {
		sentences.push(`${pronoun[0]}'s immobile.`)
	}

	return sentences;
}

function generateSentencesForMonsterFalin(charViewModel : CharacterViewModel, viewModel : ChartViewModel) : string[] {
	const sentences : string[] = [];

	if (charViewModel.weight === charViewModel.baseWeight) {
		sentences.push(`Monster Falin still hasn't gained any weight, and weighs ${formatWeight(charViewModel.weight)}lbs.`)
	} else {
		sentences.push(
			`She has gained ${formatWeight(charViewModel.weight - charViewModel.baseWeight)}lbs, and now weighs ${formatWeight(charViewModel.weight)}lbs.`,
		)
	}
	sentences.push(
		`She has a normalized BMI of ${formatBMI(charViewModel.BMI)}, and is ${toBMICategory(charViewModel.BMI)}.`,
	);

	if (charViewModel.weight > viewModel.totalWeight) {
		sentences.push(`She's heavier than all the other characters, combined.`);
	}

	if (hasReceivedDonation(charViewModel)) {
		const totalGain = charViewModel.weight - charViewModel.baseWeight;
		const percentage = Math.round(charViewModel.totalDonatedAmount / totalGain * 100);
		sentences.push(`She has received $${charViewModel.totalDonatedAmount} of donation (${percentage}% of her gain).`)
	} else {
		sentences.push("She hasn't received any donation yet.")
	}

	if (isImmobile(charViewModel)) {
		sentences.push(`She's immobile.`)
	}

	return sentences;
}

function generateSentencesForGroupCharacter(charViewModel : CharacterViewModel & {numbers: number}, viewModel : ChartViewModel) : string[] {
	const sentences : string[] = [];

	if (charViewModel.weight === charViewModel.baseWeight) {
		sentences.push(`${charViewModel.displayName || charViewModel.name} still haven't gained any weight, and weigh ${formatWeight(charViewModel.weight)}lbs each.`)
	} else {
		sentences.push(
			`${charViewModel.displayName || charViewModel.name} each weigh ${formatWeight(charViewModel.weight)}lbs, a ${formatWeight(charViewModel.weight - charViewModel.baseWeight/charViewModel.numbers)}lbs gain.`,
		)
	}
	sentences.push(
		`Their total weight is ${formatWeight(charViewModel.groupWeight)}lbs.`,
		`They're on average ${toImperialHeight(charViewModel.heightInMeters)} tall.`,
		`That gives them a BMI of ${formatBMI(charViewModel.BMI)}, so they are ${toBMICategory(charViewModel.BMI)}.`,
	);

	if (isImmobile(charViewModel)) {
		sentences.push("They're immobile.")
	}

	return sentences;
}

function isFattestCharacter(charViewModel : CharacterViewModel, viewModel : ChartViewModel) : boolean {
	const maxWeight = Math.max(...viewModel.characters.map(c => c.weight));
	return charViewModel.weight >= maxWeight;
}

function isFattestCharacterOfParty(charViewModel : CharacterViewModel, viewModel : ChartViewModel) : boolean {
	const maxWeight = Math.max(...viewModel.characters.filter(c => c.party === charViewModel.party).map(c => c.weight));
	return charViewModel.weight >= maxWeight;
}

function isImmobile(charViewModel : CharacterViewModel) : boolean {
	return charViewModel.BMI >= charViewModel.immobilityBMI;
}

function hasReceivedDonation(charViewModel : CharacterViewModel) : boolean {
	return charViewModel.totalDonatedAmount > 0;
}
