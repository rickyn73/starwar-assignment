import { multisort } from '../../src/utils/SortUtility';
const PlanetListProps = [{
	name: 'test',
	population: '333424234324',
	diameter: '213123'
},{
	name: 'test',
	population: '333424234',
	diameter: '213123'
}]
describe('multisort test suite', () => {
	it('function should return sorted array', () => {
		const arr = multisort(PlanetListProps, ['population'], ['DESC']);
		expect(typeof arr).toBe('object');
	});

	it('function test for default ascending', () => {
		const arr = multisort(PlanetListProps, ['population'], 'undefined');
		expect(typeof arr).toBe('object');
	});
});
