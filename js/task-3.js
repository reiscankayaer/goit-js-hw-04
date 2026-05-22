const profile = {
  username: "Jacob",
  playTime: 300,

  // Kullanıcı adını güncelleyen metot
  changeUsername(newName) {
    this.username = newName;
  },

  // Oyun süresini artıran metot
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Profil bilgisini döndüren metot
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

// Testler
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"