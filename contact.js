//  handle the reveal effect for the contact page
  document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll(".reveal-text");
    sections.forEach(function (section) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            section.classList.add("active");
          }
        });
      });

      observer.observe(section);
    });
  });