function toRoman(value) {
  let number = Math.ceil(parseInt(value));
  if (isNaN(number)) {
    console.log("輸入格式錯誤!  請你輸入數字")
    return value;
  } else {
    if (0 >= number) {
      console.log("請輸入大於 0 數字!")
      return value;
    } else if (number >= 4000) {
      console.log("請輸入小於3999數字!")
      return value;
    } else {
      const romanNumber = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
      const decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
      let romanNumeral = ""
      for (var i = 0; i < romanNumber.length; i++) {
        while (number >= decimalNumber[i]) {
          number -= decimalNumber[i]
          romanNumeral += romanNumber[i]
        }
      }
      return romanNumeral
    }
  }
}

document.write("1: " + toRoman(1))
document.write("<br> 2: " + toRoman(2))
document.write("<br> 3: " + toRoman(3))
document.write("<br> 4: " + toRoman(4))
document.write("<br> 5: " + toRoman(5))
document.write("<br> 6: " + toRoman(6))
document.write("<br> 9: " + toRoman(9))
document.write("<br> 27: " + toRoman(27))
document.write("<br> 48: " + toRoman(48))
document.write("<br> 59: " + toRoman(59))
document.write("<br> 93: " + toRoman(93))
document.write("<br> 141: " + toRoman(141))
document.write("<br> 163: " + toRoman(163))
document.write("<br> 402: " + toRoman(402))
document.write("<br> 575: " + toRoman(575))
document.write("<br> 911: " + toRoman(911))
document.write("<br> 1024: " + toRoman(1024))
document.write("<br> 3000: " + toRoman(3000))