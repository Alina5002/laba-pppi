import { Tag } from "../models/tag.js";

/**
 * Сервис для управления ярлыками.
 * Отвечает за создание, хранение и получение списка ярлыков.
 */
export class TagService {
  /**
   * Инициализирует сервис ярлыков.
   */
  constructor() {
    /** @type {Tag[]} */
    this.tags = [];
  }

  /**
   * Добавляет новый ярлык в систему.
   *
   * @param {Tag} tag - Экземпляр ярлыка.
   */
  addTag(tag) {
    this.tags.push(tag);
  }

  /**
   * Возвращает список всех ярлыков.
   *
   * @returns {Tag[]} Массив ярлыков.
   */
  getAll() {
    return this.tags;
  }
}
