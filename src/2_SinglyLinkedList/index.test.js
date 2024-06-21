
import { SinglyLinkedList } from './index';
import { createTestSuite } from '../utils/linkedListTest';

createTestSuite(SinglyLinkedList, 'Liste chaînée simple');

export function createTestSuite(ListClass, listType) {
  describe(`${listType} - Opérations de base`, () => {
    let list;

    beforeEach(() => {
      list = new ListClass();
    });

    it('devrait préfixer les valeurs correctement', () => {
      list.prepend(1);
      list.prepend(2);
      expect(list.getFirst()).toBe(2);
      expect(list.getAt(1)).toBe(1);
    });

    it('devrait ajouter les valeurs correctement', () => {
      list.append(1);
      list.append(2);
      expect(list.getLast()).toBe(2);
      expect(list.getAt(0)).toBe(1);
    });

    it('devrait insérer les valeurs à l\'index spécifique correctement', () => {
      list.append(1);
      list.append(3);
      list.insertAt(1, 2);
      expect(list.getAt(1)).toBe(2);
    });

    it('devrait supprimer la première valeur correctement', () => {
      list.append(1);
      list.append(2);
      expect(list.removeFirst()).toBe(1);
      expect(list.getFirst()).toBe(2);
    });

    it('devrait supprimer la dernière valeur correctement', () => {
      list.append(1);
      list.append(2);
      expect(list.removeLast()).toBe(2);
      expect(list.getLast()).toBe(1);
    });

    it('devrait supprimer la valeur à l\'index spécifique correctement', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.removeAt(1)).toBe(2);
      expect(list.getAt(1)).toBe(3);
    });

    it('devrait trouver les valeurs correctement', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.find(2)).toBe(1);
      expect(list.find(4)).toBe(-1);
    });

    it('devrait obtenir la première valeur correctement', () => {
      list.append(1);
      expect(list.getFirst()).toBe(1);
    });

    it('devrait obtenir la dernière valeur correctement', () => {
      list.append(1);
      expect(list.getLast()).toBe(1);
      list.append(2);
      expect(list.getLast()).toBe(2);
    });

    it('devrait obtenir la valeur à l\'index spécifique correctement', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.getAt(0)).toBe(1);
      expect(list.getAt(2)).toBe(3);
    });
  });
}
