/**
 * Класс Tag представляет ярлык,
 * который может быть назначен заметке
 * для категоризации и быстрого поиска.
 */
export class Tag {
  /**
   * Создает новый экземпляр ярлыка.
   *
   * @param {string|number} id - Уникальный идентификатор ярлыка.
   * @param {string} name - Название ярлыка.
   */
  constructor(id, name) {
    /** @type {string|number} */
    this.id = id;

    /** @type {string} */
    this.name = name;
  }
}
