function calcAverageCalories(days) {
  // Eğer dizi boşsa direkt 0 döndür (0'a bölme hatasını önler)
  if (days.length === 0) {
    return 0;
  }

  let totalCalories = 0;

  // Dizi içindeki her bir "day" nesnesini dönüyoruz
  for (const dayEntry of days) {
    totalCalories += dayEntry.calories;
  }

  // Toplam kaloriyi gün sayısına bölerek ortalamayı bul
  return totalCalories / days.length;
}

// Testler
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(calcAverageCalories([])); // 0