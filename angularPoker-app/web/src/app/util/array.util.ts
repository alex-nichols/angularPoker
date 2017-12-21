import { MathUtil } from './math.util'

export class ArrayUtil {
    static shuffleInPlace<T>(array: T[]): T[] {
        // if it's 1 or 0 items, just return
        if (array.length <= 1) {
             return array;
        }

        // For each index in array
        for (let i = 0; i < array.length; i++) {

          // choose a random not-yet-placed item to place there
          // must be an item AFTER the current item, because the stuff
          // before has all already been placed
          const randomChoiceIndex = MathUtil.getRandom(i, array.length - 1);

          // place our random choice in the spot by swapping
          [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
        }

        return array;
      }
}
