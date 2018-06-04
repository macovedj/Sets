import Set, { Intersection, Union, Difference, SymDiff } from './Set';

describe('Set', () => {
    describe('add method should add a member to a set', () => {
        test('if the member is a number', () => {
            let set = Set();
            set.add(8)
            expect(set.members).toEqual({ 8: true })
        })

        test('if the member is a string', () => {
            let set = Set();
            set.add('cat')
            expect(set.members).toEqual({ 'cat': true })
        })

        test('if there are number and string members', () => {
            let set = Set();
            set.add(1)
            set.add('cat')
            expect(set.members).toEqual({ 1: true, 'cat': true })
        })
        
    })

    describe('has method should detect if members are in a set', () => {
        test('if the member is a number', () => {
            let set = Set();
            set.add(8)
            expect(set.has(8)).toEqual(true)
        })

        test('if the member is a string', () => {
            let set = Set();
            set.add('cat')
            expect(set.has('cat')).toEqual(true)
        })

        test('if the member isn\'t present', () => {
            let set = Set();
            set.add(1)
            set.add('cat')
            expect(set.has(8)).toEqual(false)
        })

    })

    describe('remove method should remove members from a set', () => {
        test('if the member is a number', () => {
            let set = Set();
            set.add(8)
            set.remove(8)
            expect(set.has(8)).toEqual(false)
        })

        test('if the member is a string', () => {
            let set = Set();
            set.add('cat')
            set.remove('cat')            
            expect(set.has('cat')).toEqual(false)
        })

    })

    describe('intersection works', () => {
        test('if sets have common numbers', () => {
            let A = Set();
            let B = Set();
            A.add(1);
            A.add(2);
            B.add(2);
            B.add(3);
            expect(Intersection(A, B).has(2)).toEqual(true);
            expect(Intersection(A, B).has(1)).toEqual(false);
            expect(Intersection(A, B).has(3)).toEqual(false);            
        })

        test('if sets have common strings', () => {
            let A = Set();
            let B = Set();
            A.add('Alice');
            A.add('Bob');
            B.add('Bob');
            B.add('Charlie');
            expect(Intersection(A, B).has('Bob')).toEqual(true);
            expect(Intersection(A, B).has('Alice')).toEqual(false);
            expect(Intersection(A, B).has('Charlie')).toEqual(false);
        })

        test('if sets have nothing in common', () => {
            let A = Set();
            let B = Set();
            A.add('Alice');
            B.add('Bob');
            B.add('Charlie');
            expect(Intersection(A, B).has('Bob')).toEqual(false);
            expect(Intersection(A, B).has('Alice')).toEqual(false);
            expect(Intersection(A, B).has('Charlie')).toEqual(false);
        })
    })

    describe('intersection works', () => {
        test('if sets have common numbers', () => {
            let A = Set();
            let B = Set();
            A.add(1);
            A.add(2);
            B.add(2);
            B.add(3);
            expect(Intersection(A, B).has(2)).toEqual(true);
            expect(Intersection(A, B).has(1)).toEqual(false);
            expect(Intersection(A, B).has(3)).toEqual(false);
        })

        test('if sets have common strings', () => {
            let A = Set();
            let B = Set();
            A.add('Alice');
            A.add('Bob');
            B.add('Bob');
            B.add('Charlie');
            expect(Intersection(A, B).has('Bob')).toEqual(true);
            expect(Intersection(A, B).has('Alice')).toEqual(false);
            expect(Intersection(A, B).has('Charlie')).toEqual(false);
        })

        test('if sets have nothing in common', () => {
            let A = Set();
            let B = Set();
            A.add('Alice');
            B.add('Bob');
            B.add('Charlie');
            expect(Intersection(A, B).has('Bob')).toEqual(false);
            expect(Intersection(A, B).has('Alice')).toEqual(false);
            expect(Intersection(A, B).has('Charlie')).toEqual(false);
        })
    })

    describe('difference works', () => {
        test('if sets are numerical', () => {
            let A = Set();
            let B = Set();
            A.add(1);
            A.add(2);
            B.add(2);
            B.add(3);
            expect(Difference(A, B).has(1)).toEqual(true);
            expect(Difference(A, B).has(2)).toEqual(false);
            expect(Difference(A, B).has(3)).toEqual(false);
        })

        test('if sets contain strings', () => {
            let A = Set();
            let B = Set();
            A.add('Alice');
            A.add('Bob');
            B.add('Bob');
            B.add('Charlie');
            expect(Difference(A, B).has('Bob')).toEqual(false);
            expect(Difference(A, B).has('Alice')).toEqual(true);
            expect(Difference(A, B).has('Charlie')).toEqual(false);
        })

        test('if a set is empty', () => {
            let A = Set();
            let B = Set();
            A.add('Bob');
            A.add('Charlie');
            expect(Difference(A, B).has('Bob')).toEqual(true);
            expect(Difference(A, B).has('Charlie')).toEqual(true);
        })

        test('if both sets are empty', () => {
            let A = Set();
            let B = Set();
            expect(Difference(A, B).has('Bob')).toEqual(false);
            expect(Difference(A, B).has('Alice')).toEqual(false);
            expect(Difference(A, B).has('Charlie')).toEqual(false);
        })
    })

    describe('symmetric difference works', () => {
        test('if sets are numerical', () => {
            let A = Set();
            let B = Set();
            A.add(1);
            A.add(2);
            B.add(2);
            B.add(3);
            expect(SymDiff(A, B).has(1)).toEqual(true);
            expect(SymDiff(A, B).has(2)).toEqual(false);
            expect(SymDiff(A, B).has(3)).toEqual(true);
        })

        test('if sets contain strings', () => {
            let A = Set();
            let B = Set();
            A.add('Alice');
            A.add('Bob');
            B.add('Bob');
            B.add('Charlie');
            expect(SymDiff(A, B).has('Bob')).toEqual(false);
            expect(SymDiff(A, B).has('Alice')).toEqual(true);
            expect(SymDiff(A, B).has('Charlie')).toEqual(true);
        })

        test('if a set is empty', () => {
            let A = Set();
            let B = Set();
            A.add('Bob');
            A.add('Charlie');
            expect(SymDiff(A, B).has('Bob')).toEqual(true);
            expect(SymDiff(A, B).has('Charlie')).toEqual(true);
        })

        test('if both sets are empty', () => {
            let A = Set();
            let B = Set();
            expect(SymDiff(A, B).has('Bob')).toEqual(false);
            expect(SymDiff(A, B).has('Alice')).toEqual(false);
            expect(SymDiff(A, B).has('Charlie')).toEqual(false);
        })
    })
})