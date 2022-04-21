/* DOM Pre loader
  -----------------------------------------------*/
//   document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(preloaderFun, 1000);
//     setTimeout(preloaderFunhapus, 2500);

//     function preloaderFun() {
//         try {
//             document.querySelector(".preloader").classList.add("hilang");
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     function preloaderFunhapus() {
//         try {
//             document.querySelector(".preloader").classList.add("hapus");
//         } catch (error) {
//             console.log(error);
//         }
//     }
// });

/* Button scroll top
  -----------------------------------------------*/
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

/* DOM Navbar
  -----------------------------------------------*/
// function navSlide() {
//     //   const burger = document.querySelector(".burger");
//     //   const nav = document.querySelector(".nav-links");
//     //   const navLinks = document.querySelectorAll(".nav-links li");
//     //   let toggle = 0;
//     //   burger.addEventListener("click", () => {
//     //     // Toggle Nav
//     //     nav.classList.toggle("nav-active");
//     //     // Animate Links
//     //     navLinks.forEach((link, index) => {
//     //       link.style.animation
//     //         ? (link.style.animation = "")
//     //         : (link.style.animation = `navLinkFade 0.5s ease forwards ${
//     //             index / 7 + 0.4
//     //           }s`);
//     //     });
//     //     // Burger animation
//     //     // burger.classList.toggle("toggle-burger");
//     //     if (toggle == 0) {
//     //       burger.classList.remove("toggle-burger2");
//     //       burger.classList.add("toggle-burger");
//     //       toggle = 1;
//     //       return;
//     //     } else {
//     //       burger.classList.remove("toggle-burger");
//     //       burger.classList.add("toggle-burger2");
//     //       toggle = 0;
//     //       return;
//     //     }
//     //   });

//     (function ($) {
//         $.fn.menumaker = function (options) {
//             var cssmenu = $(this),
//                 settings = $.extend(
//                     {
//                         format: "dropdown",
//                         sticky: false,
//                     },
//                     options
//                 );
//             return this.each(function () {
//                 $(this)
//                     .find(".button")
//                     .on("click", function () {
//                         $(this).toggleClass("menu-opened");
//                         var mainmenu = $(this).next("ul");
//                         if (mainmenu.hasClass("open")) {
//                             mainmenu.slideToggle().removeClass("open");
//                         } else {
//                             mainmenu.slideToggle().addClass("open");
//                             if (settings.format === "dropdown") {
//                                 mainmenu.find("ul").show();
//                             }
//                         }
//                     });
//                 cssmenu.find("li ul").parent().addClass("has-sub");
//                 multiTg = function () {
//                     cssmenu
//                         .find(".has-sub")
//                         .prepend('<span class="submenu-button"></span>');
//                     cssmenu.find(".submenu-button").on("click", function () {
//                         $(this).toggleClass("submenu-opened");
//                         if ($(this).siblings("ul").hasClass("open")) {
//                             $(this)
//                                 .siblings("ul")
//                                 .removeClass("open")
//                                 .slideToggle();
//                         } else {
//                             $(this)
//                                 .siblings("ul")
//                                 .addClass("open")
//                                 .slideToggle();
//                         }
//                     });
//                 };
//                 if (settings.format === "multitoggle") multiTg();
//                 else cssmenu.addClass("dropdown");
//                 if (settings.sticky === true) cssmenu.css("position", "fixed");
//                 resizeFix = function () {
//                     var mediasize = 1000;
//                     if ($(window).width() > mediasize) {
//                         cssmenu.find("ul").show();
//                     }
//                     if ($(window).width() <= mediasize) {
//                         cssmenu.find("ul").hide().removeClass("open");
//                     }
//                 };
//                 resizeFix();
//                 return $(window).on("resize", resizeFix);
//             });
//         };
//     })(jQuery);

//     (function ($) {
//         $(document).ready(function () {
//             $("#cssmenu").menumaker({
//                 format: "multitoggle",
//             });
//         });
//     })(jQuery);
// }

/* Scroll Function
  -----------------------------------------------*/
// function scrollPage() {
//     const btnup = document.querySelector(".btnup");

//     // When the user scrolls down 700px from the top of the document, show the button, when scrolls down 200px navbar background to white
//     window.onscroll = function () {
//         scrollFunction();
//     };

//     function scrollFunction() {
//         if (
//             document.body.scrollTop > 700 ||
//             document.documentElement.scrollTop > 700
//         ) {
//             btnup.classList.add("active");
//         } else if (
//             document.body.scrollTop > 200 ||
//             document.documentElement.scrollTop > 200
//         ) {
//         } else {
//             btnup.classList.remove("active");
//         }
//     }
// }

/* tabCarousel di index
  -----------------------------------------------*/
// function tabCarousel() {
//     // const tombolAnggota = document.getElementById("tombolAnggota");
//     // const tombolPedagang = document.getElementById("tombolPedagang");
//     // const carouselAnggota = document.getElementById("carouselAnggota");
//     // const carouselPedagang = document.getElementById("carouselPedagang");
//     const tombolTab = document.querySelectorAll(
//         ".tab-section .field-button .button"
//     );
//     const isiTab = document.querySelectorAll(".tab-section .field-isi .tab");
//     const backgroundTab = document.querySelectorAll(
//         ".tab-section .field-background .gambar"
//     );
//     tombolTab.forEach((yangdiklik) => {
//         yangdiklik.addEventListener("click", () => {
//             /* Setiap tombolTab
//       -----------------------------------------------*/
//             tombolTab.forEach((tombolTab) => {
//                 yangdiklik.getAttribute("afu-data") ==
//                 tombolTab.getAttribute("afu-data")
//                     ? tombolTab.classList.add("active")
//                     : tombolTab.classList.remove(`active`);
//             });

//             /* Setiap isiTab
//       -----------------------------------------------*/
//             isiTab.forEach((isiTab) => {
//                 yangdiklik.getAttribute("afu-data") ==
//                 isiTab.getAttribute("afu-data")
//                     ? afuFade("munculin", isiTab)
//                     : afuFade("hilangin", isiTab);
//             });

//             /* Setiap backgroundTab
//       -----------------------------------------------*/
//             backgroundTab.forEach((backgroundTab) => {
//                 yangdiklik.getAttribute("afu-data") ==
//                 backgroundTab.getAttribute("afu-data")
//                     ? afuFade("munculin", backgroundTab)
//                     : afuFade("hilangin", backgroundTab);
//             });
//         });
//     });
// }

/* afuFade untuk animasi fade out fade in pada tab
  -----------------------------------------------*/
// function afuFade(kondisi, node) {
//   if (kondisi == "hilangin") {
//     setTimeout(opacityFun, 0);
//     setTimeout(displayFun, 250);
//     function opacityFun() {
//       node.classList.add("hilang");
//     }
//     function displayFun() {
//       node.classList.add("hapus");
//     }
//   } else if (kondisi == "munculin") {
//     setTimeout(opacityFun, 250);
//     setTimeout(displayFun, 300);
//     function opacityFun() {
//       node.classList.remove("hapus");
//     }
//     function displayFun() {
//       node.classList.remove("hilang");
//     }
//   }
// }

/* Select 2 initialization
-----------------------------------------------*/
// function select2(node) {
//   $(document).ready(function () {
//     $(node).select2();
//   });
// }

/* Shop Menu Button DOM
  -----------------------------------------------*/
// const shopMenu = () => {
//   const burgerButton = document.querySelector(
//     ".section-judul .field-kiri .burger"
//   );
//   const links = document.querySelector(
//     ".section-judul .field-kiri .menu .nav-links"
//   );
//   let jumlahLink = links.children.length;
//   const menu = document.querySelector(".section-judul .field-kiri .menu");
//   const burger = document.querySelector(".section-judul .field-kiri .burger");
//   const gambarCustom = document.querySelector(
//     ".flex-galeri.di-shop .gambar-custom"
//   );
//   // Ambil nodelist link kategori di kiri
//   let linkKategori = links.querySelectorAll("li a");
//   let flexItem = document.querySelectorAll(".flex-galeri.di-shop .item");
//   // element dengan atribut afudata
//   // let elementafudata = document.querySelectorAll(
//   //   '.flex-galeri.di-shop .item[afu-data="Stool"]'
//   // );
//   let toggle = 0;
//   burgerButton.addEventListener("click", () => {
//     menu.classList.toggle("animate");
//     if (toggle == 0) {
//       burger.classList.remove("toggle-burger2");
//       burger.classList.add("toggle-burger");
//       toggle = 1;
//       return;
//     } else {
//       burger.classList.remove("toggle-burger");
//       burger.classList.add("toggle-burger2");
//       toggle = 0;
//       return;
//     }
//   });
//   for (let index = 0; index < jumlahLink; index++) {
//     links.children[index].addEventListener("click", () => {
//       // hapus semua item
//       for (let i = 0; i < flexItem.length; i++) {
//         itemFunction("hilangin", flexItem, i);
//       }
//       for (let j = 0; j < linkKategori.length; j++) {
//         linkKategori[j].classList.remove("active");
//       }
//       linkKategori[index].classList.add("active");
//       //kalau link custom
//       if (linkKategori[index].innerHTML == "Custom") {
//         gambarFunction("munculin", gambarCustom);
//       } else if (linkKategori[index].innerHTML == "All") {
//         gambarFunction("hilangin", gambarCustom);
//         for (let index = 0; index < flexItem.length; index++) {
//           itemFunction("munculin", flexItem, index);
//         }
//       } else {
//         gambarFunction("hilangin", gambarCustom);
//         for (let index2 = 0; index2 < flexItem.length; index2++) {
//           if (
//             linkKategori[index].innerHTML ==
//             flexItem[index2].getAttribute("afu-data")
//           ) {
//             itemFunction("munculin", flexItem, index2);
//           }
//         }
//       }
//     });
//   }
// };
