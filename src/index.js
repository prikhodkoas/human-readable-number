module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  return HundredsToText(number);
    
  function UnitsToText(number) {
    if(number < 0 || number > 9) {
      throw 'Invalid argument value: ' + number;
    }

    switch (number) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      default:
        return '';
    }
  }

  function TensToText(number) {
    if(number > 99 || number < 0) {
      throw 'Invalid argument exception: ' + number;
    }

    if(number < 10) {
      return UnitsToText(number);
    }

    if(number < 20) {
      switch (number) {
      case 10:
        return 'ten';
      case 11:
        return 'eleven';
      case 12:
        return 'twelve';
      case 13:
        return 'thirteen';
      case 14:
        return 'fourteen';
      case 15:
        return 'fifteen';
      case 16:
        return 'sixteen';
      case 17:
        return 'seventeen';
      case 18:
        return 'eighteen';
      case 19:
        return 'nineteen';
      }
    }

    let res = '';

    switch (number - (number % 10)) {
      case 20:
        res = 'twenty';
        break;
      case 30:
        res = 'thirty';
        break;
      case 40:
        res = 'forty';
        break;
      case 50:
        res = 'fifty';
        break;
      case 60:
        res = 'sixty';
        break;
      case 70:
        res = 'seventy';
        break;
      case 80:
        res = 'eighty';
        break;
      case 90:
        res = 'ninety';
        break;
    }

    res += ' '

    res += UnitsToText(number % 10);

    return res.trim();
  }

  function HundredsToText(number) {
    if(number > 999 || number < 0) {
      throw 'Invalid argument exception: ' + number;
    }

    if(number < 100) {
      return TensToText(number);
    }

    let res = UnitsToText((number - (number % 100)) / 100) + ' hundred';

    res += ' ';
    res += TensToText(number % 100);

    return res.trim();
  }
}

