document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown_toggle');

    function closeAllDropdownsMobile(except) {
        if (window.innerWidth <= 1023) { // Mobil versiya uchun tekshiruv
            dropdowns.forEach(function(dropdown) {
                var dropdownContent = dropdown.nextElementSibling;
                if (dropdownContent !== except) {
                    dropdownContent.style.display = 'none';
                }
            });
        }
    }

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            if (window.innerWidth <= 1023) { // Faqat mobil versiyada ishlaydi
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === 'flex') {
                    dropdownContent.style.display = 'none';
                } else {
                    closeAllDropdownsMobile(dropdownContent);
                    dropdownContent.style.display = 'flex';
                }
                event.stopPropagation(); // Boshqa elementlarni hodisalarini to'xtatish
            }
        });
    });

    window.addEventListener('click', function(event) {
        if (window.innerWidth <= 1023) {
            closeAllDropdownsMobile(); // Faqat mobil versiyada barcha dropdownlarni yopadi
        }
    });
});