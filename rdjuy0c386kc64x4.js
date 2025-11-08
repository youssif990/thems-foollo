$(document).ready(function() {
    $("#serv-inp").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".app-mtable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


function dashMenuToggle() {
  $('.app-container').toggleClass('sidebar-action');
}

function homeMenuToggle() {
  $('.head-menu').slideToggle(200);
}

function mainDropdown() {
  $('.main-dd').toggleClass('hidden');
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  if($("#dc-body").length) {
      $("#dc2-body").height($("#dc-body").height());
  }
})

$(document).ready(function() {
    setList(0);
    setList(1);

});

function ikon(opt) {
    var ikon = "";
    if (opt.indexOf("Ø§Ù†Ø³ØªØ¬Ø±Ø§Ù…") >= 0) {
        ikon = "<span class=\"ico-ig\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ÙƒÙ„ÙˆØ¨ Ù‡Ø§ÙˆØ³") >= 0) {
        ikon = "<span class=\"ico-web\"><i class=\"fas fa-club\" aria-hidden=\"true\"></i> </span>"; 
  } else if (opt.indexOf("ÙˆØ§ØªØ³Ø§Ø¨") >= 0) {
        ikon = "<span class=\"ico-whatsapp\"><i class=\"fab fa-whatsapp\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø¬Ø±Ø§Ø¦Ø¯") >= 0) {
        ikon = "<span class=\"ico-whatsapp\"><i class=\"fas fa-globe\" aria-hidden=\"true\"></i> </span>";
    }  else if (opt.indexOf("Canva Bro ") >= 0) {
      ikon = "<span class=\"ico-favorite\"><i class=\"fas fa-star\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ÙÙŠØ³Ø¨ÙˆÙƒ") >= 0) {
        ikon = "<span class=\"ico-fb\"><i class=\"fab fa-facebook\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ÙŠÙˆØªÙŠÙˆØ¨") >= 0) {
        ikon = "<span class=\"ico-yt\"><i class=\"fab fa-youtube\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø¨ÙŠÙ‡Ø§Ù†Ø³") >= 0) {
        ikon = "<span class=\"ico-yt\"><i class=\"fab fa-behance\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ØªÙˆÙŠØªØ±") >= 0) {
        ikon = "<span class=\"ico-tw\"><i class=\"fab fa-twitter\" aria-hidden=\"true\"></i> </span>";
     } else if (opt.indexOf("Ø«Ø±ÙŠØ¯Ø²") >= 0) {
        ikon = "<span class=\"ico-tw\"><i class=\"far fa-at\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ÙƒÙˆØ§ÙŠ") >= 0) {
        ikon = "<span class=\"ico-gp\"><i class=\"fas fa-video\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø³Ø§ÙˆÙ†Ø¯ Ú©Ù„Ø§ÙˆØ¯") >= 0) {
        ikon = "<span class=\"ico-sc\"><i class=\"fab fa-soundcloud\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø³Ø¨ÙˆØªÙŠÙØ§ÙŠ") >= 0) {
        ikon = "<span class=\"ico-sp\"><i class=\"fab fa-spotify\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ØªÙˆÙŠØªØ´") >= 0) {
        ikon = "<span class=\"ico-apple\"><i class=\"fab fa-twitch\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ù‚ÙÙ„ Ø­Ø³Ø§Ø¨Ø§Øª") >= 0) {
        ikon = "<span class=\"ico-apple\"><i class=\"fas fa-lock\" aria-hidden=\"true\"></i> </span>";
    }  else if (opt.indexOf("VK.com") >= 0) {
        ikon = "<span class=\"ico-VK.com\"><i class=\"fab fa-vk\" aria-hidden=\"true\"></i> </span>";
   } else if (opt.indexOf("Ø¢Ø®Ø±") >= 0) {
        ikon = "<span class=\"ico-apple\"><i class=\"fas fa-lock\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ØªÙ„ÙŠØ¬Ø±Ø§Ù…") >= 0) {
        ikon = "<span class=\"ico-tele\"><i class=\"fab fa-telegram-plane\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø¬Ø¯ÙŠØ¯Ø©") >= 0) {
        ikon = "<span class=\"ico-pt\"><i class=\"fas fa-plus\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø§Ù„Ù…Ø³ÙˆÙ‚") >= 0) {
        ikon = "<span class=\"ico-twc\"><i class=\"fas fa-fire-alt\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ØªÙŠÙƒ ØªÙˆÙƒ") >= 0) {
        ikon = "<span class=\"ico-tic\"><i class=\"fab fa-tiktok\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø§Ø´ØªØ±Ø§ÙƒØ§Øª") >= 0) {
        ikon = "<span class=\"ico-whatsapp\"><i class=\"fas fa-star\" aria-hidden=\"true\"></i> </span>";
    }  else if (opt.indexOf("Ø²ÙŠØ§Ø±Ø§Øª") >= 0) {
        ikon = "<span class=\"ico-web\"><i class=\"fas fa-globe\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ØªÙ…Ø¨Ù„Ø±") >= 0) {
        ikon = "<span class=\"fs-tumb\"><i class=\"fab fa-tumblr\" aria-hidden=\"true\"></i> </span>";
      } else if (opt.indexOf("ØªÙˆØ«ÙŠÙ‚") >= 0) {
        ikon = "<span class=\"ico-Kick\"><i class=\"fad fa-badge-check\" aria-hidden=\"true\"></i> </span>";
  } else if (opt.indexOf("Ù…ÙˆÙ‚Ø¹") >= 0) {
        ikon = "<span class=\"fs-star\"><i class=\"fas fa-globe\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯") >= 0) {
        ikon = "<span class=\"fs-discord\"><i class=\"fab fa-discord\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø¨ÙŠØ±ÙŠØ³ÙƒÙˆØ¨") >= 0) {
        ikon = "<span class=\"fs-peri\"><i class=\"fab fa-periscope\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("ÙÙˆØ¯Ø§ÙÙˆÙ† ") >= 0) {
        ikon = "<span class=\"fs-sim-card\"><i class=\"fas fa-sim-card\" aria-hidden=\"true\"></i> </span>";
   } else if (opt.indexOf("Ø®Ø¯Ù…Ø§Øª Ù…Ø¬Ø§Ù†ÙŠØ©") >= 0) {
        ikon = "<span class=\"fs-peri\"><i class=\"far fa-gift\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø³Ù†Ø§Ø¨ Ø´Ø§Øª") >= 0) {
        ikon = "<span class=\"fs-snap\"><i class=\"fab fa-snapchat-ghost\" aria-hidden=\"true\"></i> </span>";
      } else if (opt.indexOf("ØªØ±ÙˆÙÙˆ") >= 0) {
        ikon = "<span class=\"fs-snap\"><i class=\"fas fa-star\" aria-hidden=\"true\"></i> </span>";
    } else if (opt.indexOf("Ø¨Ø¨Ø¬ÙŠ") >= 0) {
        ikon = "<span class=\"fs-crown\"><i class=\"fas fa-crown\" aria-hidden=\"true\"></i> </span>";
    }
    return ikon;
}

function setList(val) {

    if (val == 0) {
        $("#orders-drop").empty();
        $("#orderform-service option").each(function() {
            if ($(this).attr('data-show') != 'hidden') {
                var ico = ikon($(this).text());
                $("#orders-drop").append('<button id="order-sItem" class="dropdown-item" type="button" onclick="selectOrder(' + $(this).val() + ')">' + ico + $(this).text() + '</button>');
            }
        });
        var e = document.getElementById("orderform-service");
        var selected = e.options[e.selectedIndex].text;
        var ico = ikon(selected);
        $("#order-services").html(ico + selected);


    } else if (val == 1) {

        $("#category-drop").empty();
        $("#orderform-category option").each(function() {
            if ($(this).attr('data-show') != 'hidden') {
                var ico = ikon($(this).text());
                $("#category-drop").append('<button id="order-cItem" class="dropdown-item" type="button" onclick="selectCategory(' + $(this).val() + ')">' + ico + $(this).text() + '</button>');
            }
        });

        var e = document.getElementById("orderform-category");
        var selected = e.options[e.selectedIndex].text;
        var ico = ikon(selected);
        $("#order-category").html(ico + selected);

    }
}
$(function(ready) {
    $("#orderform-service").change(function() {
        setList(0);
    });
    $("#orderform-category").change(function() {
        setList(1);
    });
});

function selectOrder(val) {
    $('#orderform-service').val(val);
    $("#orderform-service").trigger("change");
    var ico = ikon($("#orderform-service option[value='" + val + "']").text());
    $("#order-services").html(ico + $("#orderform-service option[value='" + val + "']").text());
}
$("#order-sItem").click(function() {
    $("#order-services").html($(this).html());
});

function selectCategory(val) {
    $('#orderform-category').val(val);
    $("#orderform-category").trigger("change");
    var ico = ikon($("#orderform-category option[value='" + val + "']").text());
    $("#order-category").html(ico + $("#orderform-category option[value='" + val + "']").text());
}

function selectCategory(val) {
    $('#orderform-category').val(val);
    $("#orderform-category").trigger("change");
    var ico = ikon($("#orderform-category option[value='" + val + "']").text());
    $("#order-category").html(ico + $("#orderform-category option[value='" + val + "']").text());
}



$('.sss-tab').click(function() {
    if ($(this).hasClass('active')) {
        $(this).find('.ss-tab-content').slideToggle(200);
        $(this).toggleClass('active');
    } else {
        $('.sss-tab').removeClass('active');
        $('.sss-tab > .ss-tab-content').slideUp(200);
        $(this).find('.ss-tab-content').slideToggle(200);
        $(this).toggleClass('active');
    }
});

function change_mode() {

    var app = document.getElementsByTagName("BODY")[0];

    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("class", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("class", "dark");
    }
    console.log("lightMode = " + localStorage.lightMode);
}



var tmax_optionsGlobal = {
  repeat: -1,
  repeatDelay: 0.65,
  yoyo: true
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = 'svg *',
    stagger_val = 0.0125,
    duration = 0.75;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-500, 500),
    y: '+=' + getRandom(-500, 500),
    rotation: '+=' + getRandom(-720, 720),
    scale: 0,
    opacity: 0
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut
};

tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

var $svg = $('svg');
$svg.hover(
  function() {
    tl.timeScale(0.15);
  },
  function() {
    tl.timeScale(1);
  });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
// JavaScript Ù‡Ù†Ø§
    function copyText(button) {
      // Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù†Øµ Ù…Ù† Ø¯Ø§Ø®Ù„ Ø§Ù„Ø²Ø± (Ù…Ù† Ø§Ù„Ø¹Ù†ØµØ± <span>)
      const text = button.querySelector("span").innerText;

      // Ø·Ø±ÙŠÙ‚Ø© 1: Ø§Ø³ØªØ®Ø¯Ø§Ù… navigator.clipboard (Ø§Ù„Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø­Ø¯ÙŠØ«Ø©)
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
          .then(() => {
            showTooltip(); // Ø¥Ø¸Ù‡Ø§Ø± Ø±Ø³Ø§Ù„Ø© Ø§Ù„ØªÙ†Ø¨ÙŠÙ‡
          })
          .catch((err) => {
            console.error("ÙØ´Ù„ ÙÙŠ Ù†Ø³Ø® Ø§Ù„Ù†Øµ: ", err);
            fallbackCopyText(text); // Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¨Ø¯ÙŠÙ„Ø©
          });
      } else {
        // Ø·Ø±ÙŠÙ‚Ø© 2: Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ù‚Ø¯ÙŠÙ…Ø© (Ù„Ù„Ù…ØªØµÙØ­Ø§Øª Ø§Ù„ØªÙŠ Ù„Ø§ ØªØ¯Ø¹Ù… navigator.clipboard)
        fallbackCopyText(text);
      }
    }

    // Ø§Ù„Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¨Ø¯ÙŠÙ„Ø© Ù„Ù†Ø³Ø® Ø§Ù„Ù†Øµ
    function fallbackCopyText(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // ØªØ¬Ù†Ø¨ Ø§Ù„ØªÙ…Ø±ÙŠØ± Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø³ÙÙ„
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy"); // Ù†Ø³Ø® Ø§Ù„Ù†Øµ
        showTooltip(); // Ø¥Ø¸Ù‡Ø§Ø± Ø±Ø³Ø§Ù„Ø© Ø§Ù„ØªÙ†Ø¨ÙŠÙ‡
      } catch (err) {
        console.error("ÙØ´Ù„ ÙÙŠ Ù†Ø³Ø® Ø§Ù„Ù†Øµ: ", err);
        alert("ØªØ¹Ø°Ø± Ù†Ø³Ø® Ø§Ù„Ø±Ù‚Ù…ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© ÙŠØ¯ÙˆÙŠÙ‹Ø§.");
      }

      document.body.removeChild(textArea); // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ù…Ø¤Ù‚Øª
    }

    // Ø¥Ø¸Ù‡Ø§Ø± Ø±Ø³Ø§Ù„Ø© Ø§Ù„ØªÙ†Ø¨ÙŠÙ‡
    function showTooltip() {
      const tooltip = document.getElementById("tooltip");
      tooltip.style.opacity = 1;
      tooltip.style.visibility = "visible";

      // Ø¥Ø®ÙØ§Ø¡ Ø±Ø³Ø§Ù„Ø© Ø§Ù„ØªÙ†Ø¨ÙŠÙ‡ Ø¨Ø¹Ø¯ 1.5 Ø«Ø§Ù†ÙŠØ©
      setTimeout(() => {
        tooltip.style.opacity = 0;
        tooltip.style.visibility = "hidden";
      }, 1500);
    }

  
