## About

## Map

**Map** — это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

Основная область применения Map – ситуации, когда строковых ключей не хватает (нужно хранить соответствия для ключей-объектов), либо когда строковый ключ может быть совершенно произвольным.

Чтобы сравнивать ключи, объект Map использует алгоритм SameValueZero. Это почти такое же сравнение, что и ===, с той лишь разницей, что NaN считается равным NaN. Так что NaN также может использоваться в качестве ключа.

Этот алгоритм не может быть заменён или модифицирован.

Каждый вызов map.set возвращает объект map, так что мы можно объединить вызовы в цепочку.

Если нужно сделать Map из обьекта, нужно использовать Object.entries, который возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ]. Это именно то, что нужно для создания Map.

Если же нужно преобразовать Map в обьект, используем Object.fromEntries. Но в этом случае нужно помнить что все ключи станут строками !!!

**Для перебора коллекции Map есть 3 метода:**

- map.keys() – возвращает итерируемый объект по ключам,
- map.values() – возвращает итерируемый объект по значениям,
- map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

**Методы и свойства js Map**

- new Map() – создаёт коллекцию.
- map.set(key, value) – записывает по ключу key значение value.
- map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
- map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
- map.delete(key) – удаляет элемент по ключу key.
- map.clear() – очищает коллекцию от всех элементов.
- map.size – возвращает текущее количество элементов.

## WeakMap

**WeakMap** — эособый вид Map, не препятствующий сборщику мусора удалять свои элементы.

То есть, если некий объект присутствует только в WeakSet/WeakMap – он удаляется из памяти.

Это нужно для тех ситуаций, когда основное место для хранения и использования объектов находится где-то в другом месте кода, а здесь мы хотим хранить для них «вспомогательные» данные, существующие лишь пока жив объект.

Например, у нас есть элементы на странице или, к примеру, пользователи, и мы хотим хранить для них вспомогательную информацию, например обработчики событий или просто данные, но действительные лишь пока объект, к которому они относятся, существует.

Если поместить такие данные в WeakMap, а объект сделать ключом, то они будут автоматически удалены из памяти, когда удалится элемент.

Таким образом, WeakMap избавляет нас от необходимости вручную удалять вспомогательные данные, когда удалён основной объект.

У WeakMap есть ряд ограничений:

Только объекты в качестве ключей.

- Нет свойства size.
- Нельзя перебрать элементы итератором или forEach.
- Нет метода clear().

Иными словами, WeakMap работает только на запись (set, delete) и чтение (get, has) элементов по конкретному ключу, а не как полноценная коллекция. Нельзя вывести всё содержимое WeakMap, нет соответствующих методов.

Это связано с тем, что содержимое WeakMap может быть модифицировано сборщиком мусора в любой момент, независимо от программиста. Сборщик мусора работает сам по себе. Он не гарантирует, что очистит объект сразу же, когда это стало возможным. В равной степени он не гарантирует и обратное. Нет какого-то конкретного момента, когда такая очистка точно произойдёт – это определяется внутренними алгоритмами сборщика и его сведениями о системе.

Поэтому содержимое WeakMap в произвольный момент, строго говоря, не определено. Может быть, сборщик мусора уже удалил какие-то записи, а может и нет. С этим, а также с требованиями к эффективной реализации WeakMap, и связано отсутствие методов, осуществляющих доступ ко всем записям.

WeakMap и WeakSet – «урезанные» по функциональности варианты Map/Set, которые позволяют только «точечно» обращаться к элементам (по конкретному ключу или значению). Они не препятствуют сборке мусора, то есть, если ссылка на объект осталась только в WeakSet/WeakMap – она будет удалена.
