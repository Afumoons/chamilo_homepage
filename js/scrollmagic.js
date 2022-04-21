$(document).ready(function () {
  function createSceneVertical(
    trigger,
    node = trigger,
    jarak = 0.1,
    classisian = "animate",
    durasi = "88%"
    // deskripsi = "fade scene"
  ) {
    let initial = new ScrollMagic.Scene({
      triggerElement: trigger, //tempat trigger
      // duration: durasi, //responsive
      triggerHook: 0.75 - jarak,
      reverse: false,
      // offset: 700,
    })
      .setClassToggle(node, classisian) // add class to node
      // .addIndicators({ name: deskripsi }) // this requires plugin
      .addTo(scrollmagicvertical);
  }
  function createSceneHorizontal(
    trigger,
    node = trigger,
    jarak = 0.1,
    classisian = "animate"
  ) {
    let initial = new ScrollMagic.Scene({
      triggerElement: trigger, //tempat trigger
      duration: "50%", //responsive
      triggerHook: 0.5 - jarak,
    })
      .setClassToggle(node, classisian) // add class to node
      // .addIndicators({ name: "fade scene" }) // this requires plugin
      .addTo(scrollmagichorizontal);
  }
  function initscenesimple(
    classutama = ".null",
    adaanak = false,
    vertical = true
  ) {
    $(classutama).each(function () {
      if (adaanak == false) {
        if (vertical == true) {
          createSceneVertical(this);
        } else {
          createSceneHorizontal(this);
        }
      } else {
        if (vertical == true) {
          $(this.children).each(function () {
            createSceneVertical(this);
          });
        } else {
          $(this.children).each(function () {
            createSceneHorizontal(this);
          });
        }
      }
    });
  }

  //init scrollmagic
  var scrollmagichorizontal = new ScrollMagic.Controller({ vertical: false });
  var scrollmagicvertical = new ScrollMagic.Controller({ vertical: true });

  // Scene Carousel Header
  $(".swiper-slide").each(function () {
    createSceneHorizontal(this);
    createSceneHorizontal(this, this.children[1]);
  });

  // Scene TeksJumbo
  initscenesimple(".teks-jumbo", true);

  // Scene GambarHero
  initscenesimple(".gambar-hero", true);

  // Scene GambarHeroBig
  initscenesimple(".gambar-hero-big", true);

  // Scene JudulSection
  initscenesimple(".section-judul", false);

  // Scene ButtonSection
  initscenesimple(".button-section", false);

  // Scene SectionBlog
  initscenesimple(".section-blog-carousel", true);

  // Scene SectionGaleri
  initscenesimple(".section-galeri", true);

  // Scene SectionTeam
  initscenesimple(".section-team", true);

  // Scene SectionClient
  initscenesimple(".section-client", true);

  // Scene TeksGambar
  $(".teks-gambar").each(function () {
    createSceneVertical(this.children[0]);
    createSceneVertical(this.children[1]);
    $(this.children[1].children).each(function () {
      createSceneVertical(this);
    });
  });

  // Scene FlexContainer
  // setiap .flex-container
  $(".flex-container").each(function () {
    let i = 0;
    // setiap item
    $(this.children).each(function () {
      // setiap isi item
      $(this.children).each(function () {
        i = i + 0.01;
        createSceneVertical(this.parentElement, this, i);
        // createSceneVertical(this.children[0]);
      });
    });
  });

  // Scene Flexgaleri
  // setiap .flex-galeri
  $(".flex-galeri").each(function () {
    // setiap item
    $(this.children).each(function () {
      // setiap isi item
      $(this.children).each(function () {
        createSceneVertical(this.parentElement, this, 0.25);
      });
    });
  });

  // Scene TeksSedang
  $(".teks-sedang").each(function () {
    createSceneVertical(this.children[0]);
    createSceneVertical(this.children[1]);
    $(this.children[1].children).each(function () {
      createSceneVertical(this);
    });
  });

  // Scene SlideYuhu
  // Setiap Slide Yuhu
  $(".slide-yuhu").each(function () {
    // createSceneVertical(this.children[0], this.children[0], 0.1, "active");
    // Setiap field
    $(this.children).each(function () {
      createSceneVertical(this.parentElement, this);
      // Setiap isi field
      // $(this.children).each(function () {
      // createSceneVertical(this.parentElement, this, 0.1, "active");
      // });
    });
  });

  // Scene Footer
  $(".footer").each(function () {
    $(this.children).each(function () {
      $(this.children).each(function () {
        createSceneVertical(this.parentElement, this, -0.15, "animate", "100%");
      });
    });
  });
});
