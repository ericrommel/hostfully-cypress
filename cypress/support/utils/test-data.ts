import { DateTime } from 'luxon';
import { setRandomString } from '../utils/utils';

export const testData = {
  now: DateTime.now(),
  computerName: setRandomString(),
  introducedDate: DateTime.now().toFormat('yyyy-MM-dd'),
  discontinuedDate: DateTime.now().plus({ year: 1 }).toFormat('yyyy-MM-dd'),
  discontinuedBeforeIndroducedDate: DateTime.now().minus({ day: 1 }).toFormat('yyyy-MM-dd'),
  errorMessages: {
    errorComputerNameMsg: 'Failed to refine type',
    errorIntroducedDataInvalidMsg: 'Failed to decode date',
    errorDiscontinuedDateBeforeIntroducedDateMsg: 'Discontinued date is before introduction date',
    errorMaximumCharacterLimitExceededMsg: 'Maximum character limit exceeded. Limit is 50 characters.'
  }
};
