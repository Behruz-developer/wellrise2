document.addEventListener('DOMContentLoaded', function() {
  var selectorBox = document.querySelector('.selector_box');
  var languageOptions = document.getElementById("languageOptions");

  selectorBox.addEventListener('click', toggleDropdown);

  function toggleDropdown(event) {
    event.stopPropagation();
    languageOptions.style.display = (languageOptions.style.display === "block") ? "none" : "block";
    document.addEventListener('click', closeDropdownOnOutsideClick, true);
  }

  var options = document.querySelectorAll(".option");
  options.forEach(function(option) {
    option.addEventListener('click', function() {
      selectLanguage(this.dataset.lang);
    });
  });

  function selectLanguage(newLanguage) {
    var selected = document.querySelector(".selected");
    var currentLanguage = selected.dataset.lang;
    if (currentLanguage !== newLanguage) {
      // Avvalgi tanlangan tilni yangi tanlangan til joyiga ko'chirish
      var newSelectedOption = document.querySelector(`.option[data-lang="${newLanguage}"]`);
      newSelectedOption.textContent = currentLanguage.toUpperCase();
      newSelectedOption.dataset.lang = currentLanguage;
      
      // Yangi tanlangan tilni "selected"ga o'tkazish
      selected.textContent = newLanguage.toUpperCase();
      selected.dataset.lang = newLanguage;
      
      languageOptions.style.display = "none"; // Dropdownni yopish
      document.removeEventListener('click', closeDropdownOnOutsideClick, true); // Voqealarni tinglashni tozalash
    }
  }

  function closeDropdownOnOutsideClick(event) {
    if (!selectorBox.contains(event.target)) {
      languageOptions.style.display = 'none';
      document.removeEventListener('click', closeDropdownOnOutsideClick, true);
    }
  }
});
