function debounce(e, t, n) {
    var i;
    return function() {
        var o = this,
            r = arguments;
        clearTimeout(i), i = setTimeout(function() { i = null, n || e.apply(o, r) }, t), n && !i && e.apply(o, r) } }

function onPageLoad() {
    function e(e) { $input = $(e).find("input"), $input_name = $input.attr("name"), $license = $(e).data("license"), $('input[name="' + $input_name + '"]').each(function() { $(this).parent(".bundle-choice").removeClass("active"), $(this).prop("checked", !1) }), $(e).addClass("active"), $input.prop("checked", !0), $('input[name="license_type"]').each(function() { $(this).is(":checked") && (license_type = $(this).val(), 1 == license_type ? $("#total").find("h4").html("$229.00") : 2 == license_type && $("#total").find("h4").html("$669.00")) }) }
    if (facebook_add_to_cart_initialised = !1, epic_editor_page = $("#epiceditor"), 0 != epic_editor_page.length && initEpicEditor(), $("#view-cart, #view-cart-product").click(function() { cart_id = $(this).data("cart"), console.log("fac call ajax"), $(".modal").modal("hide"), $.ajax({ url: "/get-cart", type: "GET", data: { cart_id: cart_id }, success: function(e) { console.log("vin din ajax"), $("#content-for-cart").html(e) } }), $("#cart-modal").on("shown.bs.modal", function() { console.log("afisez modal si pun pe body open"), $("body").addClass("modal-open") }), $("#cart-modal").modal("show") }), my_url = document.URL, $share_area = $("#shareArea"), suggestions_distance = $("#suggestions").offset(), header_height = $(".parallax-product").outerHeight(), share_area_height = $share_area.outerHeight(), product_price = parseFloat($("#product_price").val()), $product_coupon = $("#coupon"), notice_message = $("#notif-message").html(), 0 != jQuery.trim(notice_message).length) { showNotification($("#notif-message").attr("notice-type"), notice_message) }
    $('[rel="tooltip"]').tooltip(), window.rangy.initialized = !1, $(".wysihtml5").each(function(e, t) { $(t).wysihtml5({ image: !1 }) }), $('input[name="license_type"]').each(function() { $(this).is(":checked") && (license_type_cards_switch = $(this).val()) });
    var t = $(window).height() - 60;
    $("#livePreviewFrame").css("height", t), 0 != $("#centerFrame").length && setTimeout(function() { ad_id = $("input[name=ad_id]").val(), $.ajax({ url: "ad/view-ad", method: "POST", data: { ad_id: ad_id } }).done(function(e) { "success" == e.data && $(".ad-product").addClass("ad-product-show") }) }, 5e3), $('[rel="tooltip"]').tooltip(), 0 != $(".switch").length && $(".switch").bootstrapSwitch(), 0 != $("[data-toggle='switch']").length && $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch(), $(".bundle-choice").click(function() { e(this) }), 0 != $("#buyProductPage").length && ($input = $("#htmlCss input"), checkPackagesConfiguration($input)), $(".makeLoading, .make-loading").click(function() { $(this).html('<i class="fa fa-circle-o-notch fa-spin"></i> Loading...').addClass("disabled") }), responsive = $(window).width(), $(".checkbox-subscribe").checkbox(), $(".checkbox-subscribe").change(function() { $(this).is(":checked") ? $(".social a").each(function() { url = $(this).attr("href"), url = changeOneParamUrl("subscribed", 1, url), $(this).attr("href", url) }) : $(".social a").each(function() { url = $(this).attr("href"), url = changeOneParamUrl("subscribed", 0, url), $(this).attr("href", url) }) }), $(".keep-dropdown-open").click(function(e) { e.preventDefault(), e.stopPropagation() }), $(".btn-view-medium-article").click(function() { _gaq.push(["_trackEvent", "Articles", "view", "How we grew startup"]) }), $(".btn-open-modal").click(function() { _gaq.push(["_trackEvent", "Articles", "open-modal", "How we grew startup"]) });
    0 != $("#contactUsMap").length && (responsive_map = $(window).width(), contact.initContactUsMap(), $("#accordionContact .collapse").on("shown.bs.collapse", function() { _gaq.push(["_trackEvent", "ContactUs", "open-collapse", $(this).attr("id")]) }), $("#products-list").change(function() { $("#products-hidden-list").children().addClass("hidden"), show_id = $(this).find(":selected").data("id"), $("#" + show_id).removeClass("hidden") }), $("#form").submit(function(e) {
        var t = {};
        i = $(this).serializeArray(), $.each(i, function(e, n) { t[n.name] = n.value }), "sponsorships" == t.email_type ? i.push({ name: "email_receive", value: "diana@creative-tim.com" }) : i.push({ name: "email_receive", value: "hello@creative-tim.com" }), "found-bug" != t.email_type && i.push({ name: "product_slug", value: "" }), _gaq.push(["_trackEvent", "ContactUs", "send-email", t.email_type]), $.ajax({ type: "POST", url: "/contact", data: i, success: function(e) { "success" === e.type ? ($("#contactUsModal").modal("hide"), showNotification(e.type, e.message)) : $("#contactUsModal .alert").html(e.message).show() } }), e.preventDefault() }));
    var n = $(".my-gallery");
    if (0 != n.length && (initPhotoSwipeFromDOM(".my-gallery"), gallery_width = n.width(), scrolling_pixels = gallery_width - gallery_width / 4, $(".btn-arrow-left").click(function() { scroll_width = n[0].scrollWidth, $(this).hasClass("disabled") || (n.animate({ scrollLeft: "-=" + scrolling_pixels }, function() { already_scrolled = n[0].scrollLeft, 0 == already_scrolled && $(".btn-arrow-left").addClass("disabled") }), $(".btn-arrow-right").removeClass("disabled")) }), $(".btn-arrow-right").click(function() { scroll_width = n[0].scrollWidth, $(this).hasClass("disabled") || (n.animate({ scrollLeft: "+=" + scrolling_pixels }, function() { already_scrolled = n[0].scrollLeft, already_scrolled + gallery_width == scroll_width && $(".btn-arrow-right").addClass("disabled") }), $(".btn-arrow-left").removeClass("disabled")) })), 0 != $("#sponsorMap").length && (responsive_map = $(window).width(), sponsor.initSponsorMap()), 0 != $("#mix-container").length && (buttonFilter.init(), $("#mix-container").mixItUp({ controls: { enable: !1 }, callbacks: { onMixFail: function() { $(".hidden-message").addClass("visible") }, onMixStart: function() { $(".hidden-message").hasClass("visible") && $(".hidden-message").removeClass("visible") }, onMixEnd: function() { checkParallaxGeneral() } } })), responsive >= 768 && checkParallaxGeneral(), product_page = $("#productPage"), 0 != product_page.length && responsive >= 768 && $(window).on("scroll", checkScrollForTopMovingBar), initPopovers('[rel="popover"]'), 0 != $("#blackFriday").length) {
        var i = moment.utc("2016-11-30 10:00");
        $("#blackFriday").countdown(i.toDate(), function(e) { $(this).html(e.strftime("<span>%d <div>Day</div> </span><span>%H <div>Hours</div> </span><span>%M <div>Minutes</div> </span><span>%S <div>Seconds</div> </span>")) }), $("#blackFridayBundleCard").countdown(i.toDate(), function(e) { $(this).html(e.strftime("<span>%d <div>d</div> </span><span>%H <div>h</div> </span><span>%M <div>m</div> </span><span>%S <div>s</div> </span>")) }) }
    $(".viewMoreButton").click(function() { target = $(this).data("target"), $btn = $(this), $target = $(target), $target.collapse("toggle"), "View More" == $btn.html() ? $btn.html("View Less") : $btn.html("View More") }), $('[data-toggle="search-form"]').click(function() { 0 == searchVisible ? (searchVisible = 1, $(this).parent().addClass("active"), $(".navbar-search-form").fadeIn(function() { $(".navbar-search-form input").focus() })) : (searchVisible = 0, $(this).parent().removeClass("active"), $(this).blur(), $(".navbar-search-form").fadeOut(function() { $(".navbar-search-form input").blur() })) }), big_bundle_page = $("#big-bundle"), 0 != big_bundle_page.length && responsive >= 768 && $(window).on("scroll", checkScrollForTopMovingBar), (window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches) && $("img").each(function() { $(this).attr("src", $(this).data("retina")) }), $(document).on("click", ".choice", function() { checkPackagesConfiguration(this) }), $navbar_transparent = $(".navbar-fixed-top.navbar-transparent"), 0 != $navbar_transparent.length && $(window).on("scroll", gsdk.checkScrollForTransparentNavbar) }

function checkParallaxGeneral() { $(".parallax-background.parallax-active").each(function() {
        var e = $(this).children("img"),
            t = $(this).parent(".section"),
            n = t.offset().top;
        $(this).hasClass("activated") || ($(this).addClass("activated"), $(window).on("scroll", function() { parallax(e, n) })) }) }

function loadCommentForProduct() { $.ajax({ type: "POST", url: "/comments/get-comments-for-product", data: { product: $("#keep_product").val() } }).done(function(e) { $("#comments_product_page").html(e), initPopovers('.comment [rel="popover"]'), initTextareaForMention(), suggestions_distance = $("#suggestions").offset() }) }

function getDataMention(e, t, n) { $.ajax({ url: "/get_users_for_mentions", method: "POST", dataType: "json", data: { query: t } }).done(function(e) {
        var i = e;
        i = _.filter(i, function(e) {
            return e.name.toLowerCase().indexOf(t.toLowerCase()) > -1 }), n.call(this, i) }) }

function initTextareaForMention() { $("textarea.mention").mentionsInput({ onDataRequest: getDataMention, minChars: 3, showAvatars: !0 }) }

function initPopovers(e) { setTimeout(function() { $(e).popover({ offset: 10, trigger: "manual", html: !0 }).mouseenter(function() { $(this).popover("show") }).mouseleave(function() {
            var e = $(this);
            timeoutObj = setTimeout(function() { e.popover("hide") }, 200) }).hover(function() {
            var e = $(this).data("username"),
                t = $(this).data("initialized"),
                n = $(this);
            setTimeout(function() { 0 == t && $.ajax({ url: "/create_user_card", method: "POST", data: { username: e } }).done(function(e) { n.data("initialized", 1), n.siblings(".popover").find(".popover-content").html(e), n.attr("data-content", e) }) }, 500) }) }, 400) }

function chooseLicense(e) { $el = $(e), $el.addClass("btn-fill").siblings(".btn").removeClass("btn-fill"), checkPackagesConfiguration($el) }

function checkPackagesConfiguration(e) { $input = $(e).find("input"), $input_name = $input.attr("name"), $license = $(e).data("license"), $('input[name="' + $input_name + '"]').each(function() { $(this).parent(".choice").removeClass("active"), $(this).prop("checked", !1) }), $(e).hasClass("btn") ? $(this).addClass("btn-fill") : $(e).addClass("active"), $input.prop("checked", !0), $('input[name="license_type"]').each(function() { $(this).is(":checked") && (license_type = $(this).val(), $("#cardHeader").hasClass("one-archive") ? (price_html = product_price - 1, price_bundle = 4 * product_price - 1) : 1 == license_type ? (price_html = product_price - 1, price_bundle = 1.75 * product_price - 1) : 2 == license_type && (price_html = 4 * product_price - 1, price_bundle = 7.5 * product_price - 1), 0 != $product_coupon.length && (discount_percent = $("#discount_percent").val(), d_price_html = price_html, d_price_bundle = price_bundle, $("#htmlCss").attr("data-full-price", "$" + d_price_html), $("#bundle").attr("data-full-price", "$" + d_price_bundle), price_html -= discount_percent * price_html, price_bundle -= discount_percent * price_bundle), $("#htmlCss").attr("data-price", "$" + price_html.toFixed(2)), $("#bundle").attr("data-price", "$" + price_bundle.toFixed(2)), $("#htmlCss").find("h2").html("<span>$" + price_html + "</span>"), $("#bundle").find("h2").html("<span>$" + price_bundle + "</span>"), 0 != $product_coupon.length && ($("#htmlCss").find("h2").html("<strike>$" + d_price_html + '</strike> <span class="text-danger">$' + price_html.toFixed(2) + "</span>"), $("#bundle").find("h2").html("<strike>$" + d_price_bundle + '</strike> <span class="text-danger" id="finalProductPrice">$' + price_bundle.toFixed(2) + "</span>"))) }), $('input[name="archive_type"]').each(function() { $(this).is(":checked") && (product_price_view = $(".choose-package .choice.active").attr("data-price"), full_product_price = $(".choose-package .choice.active").attr("data-full-price"), 0 != $product_coupon.length ? $(".product-price h4").html("<strike>" + full_product_price + '</strike> <span class="text-danger" id="finalProductPrice">' + product_price_view + "</span>") : $(".product-price h4").html(product_price_view)) }), 1 != facebook_add_to_cart_initialised && (trackFacebookPixel("AddToCart", "product-buy"), facebook_add_to_cart_initialised = !0) }

function trackFacebookPixel(e, t) { product_fb_price = parseFloat(product_fb_price_view.substring(1)), archive_fb_type = $('input[name="archive_type"]:checked').val(), license_fb_type = $('input[name="license_type"]:checked').val(), "bundle-buy" != t ? (product_ids = [$("#product_id").val()], product_name = $("#product_name").html()) : (product_ids = $("#products_ids").html(), product_name = "Big Bundle"), fbq("track", e, { content_ids: product_ids, content_type: "product", value: product_fb_price, currency: "USD", content_name: product_name, licence: 1 == license_fb_type ? "Personal" : "Developer", product_type: 1 == archive_fb_type ? "HTML" : "HTML + Sketch/PSD" }) }

function validatePayment(e) { logged_in = $("#userLoggedIn").val(), $product_archive = $('input[name="archive"]'), $pay_input = $(e).find("input"), credit_card = 5, paypal = 1, license = 0, archive = 0, $('input[name="license_type"]').each(function() { $(this).is(":checked") && (license = 1, license_type = $(this).val(), addQSParm("license", $(this).val())) }), "multiple_archives" == $product_archive.val() ? $('input[name="archive_type"]').each(function() { $(this).is(":checked") && (archive = 1, archive_type = $(this).val(), addQSParm("package", $(this).val())) }) : (archive = 1, archive_type = 3, addQSParm("package", 3)), $('input[name="payment_type"]').prop("checked", !1), $pay_input.prop("checked", !0), 1 == logged_in ? (product_fb_price_view = $("#total h4").html(), trackFacebookPixel("InitiateCheckout", "bundle-buy"), $("#payForm").submit()) : (showRegisterForm(), setTimeout(function() { $("#loginModal").modal("show"), encoded_url = encodeURIComponent(my_url), $('input[name="url"]').val(encoded_url), changeUrlParamInSocialButtons(my_url) }, 230), window.history.pushState({ pageTitle: "Creative Tim Buy Product" }, "", my_url)) }

function submitPaymentForm() {
    try { trackFacebookPixel("InitiateCheckout", "product-buy") } catch (e) { console.log("Facebook Track Error:", e) }
    $("#payForm").submit() }

function changeUrlParamInSocialButtons(e) { $("#loginModal a.circle").each(function() {
        var t = $(this),
            n = t.attr("href"),
            i = changeOneParamUrl("url", e, n);
        t.attr("href", i) }) }

function showRegisterForm() { $(".loginBox").fadeOut("fast", function() { $(".registerBox").fadeIn("fast"), $(".login-footer").fadeOut("fast", function() { $(".register-footer").fadeIn("fast") }), $(".loginBox .modal-title").html("Register") }), $(".error").removeClass("alert alert-danger").html("") }

function showLoginForm() { $("#loginModal .registerBox, #buyFlowModal .registerBox, #loginModalProduct .registerBox").fadeOut("fast", function() { $(".loginBox").fadeIn("fast"), $(".register-footer").fadeOut("fast", function() { $(".login-footer").fadeIn("fast") }), $("#loginModal .registerBox .modal-title, #buyFlowModal .registerBox .modal-title, #loginModalProduct .registerBox .modal-title").html("Login") }), $(".error").removeClass("alert alert-danger").html("") }

function openLoginModal() { showLoginForm(), setTimeout(function() { $("#loginModal").modal("show") }, 230) }

function showLoginFormProduct() { $("#loginModalProduct .registerBox, #buyFlowModal .registerBox").fadeOut("fast", function() { $(".loginBox").fadeIn("fast"), $(".register-footer").fadeOut("fast", function() { $(".login-footer").fadeIn("fast") }), $("#loginModalProduct .registerBox .modal-title", "#buyFlowModal .registerBox .modal-title").html("Login") }), $(".error").removeClass("alert alert-danger").html("") }

function openLoginModalProduct() { showLoginFormProduct(), setTimeout(function() { $("#loginModalProduct").modal("show") }, 230) }

function openRegisterModalProduct() { showRegisterForm(), setTimeout(function() { $("#loginModalProduct").modal("show") }, 230) }

function openBuyFlowModal() { showRegisterForm(), setTimeout(function() { $("#buyFlowModal").modal("show") }, 230), window.history.pushState({ pageTitle: "Creative Tim Buy Produt" }, "", my_url) }

function openRegisterModal() { showRegisterForm(), setTimeout(function() { $("#loginModal").modal("show") }, 230) }

function showSearchForm(e) { 0 == click_rate ? ($('form[role="search"]').fadeIn(), $(".search").focus(), $(e).addClass("active"), $(e).children("p").html("Close"), click_rate = 1) : ($('form[role="search"]').fadeOut(), $(e).removeClass("active"), $(e).children("p").html("Search"), click_rate = 0) }

function showMoreComments(e) { $(e).html('<i class="fa fa-circle-o-notch fa-spin"></i> Loading...'), setTimeout(function() { $(".comment.hidden").css("display", "block").fadeIn("fast").removeClass("hidden"), $(e).hide() }, 1e3) }

function cancelPostCommentArea() { $(".post-comment-area").val("") }

function showNotification(e, t) { e == undefined && (e = "success"), $("#notif-message").html(t).addClass(e).fadeIn("slow"), setTimeout(function() { $("#notif-message").fadeOut("slow"), setTimeout(function() { $("#notif-message").removeClass(e) }, 1e3) }, 5e3) }

function getMonthDownloads(e) { currentDate = $("#currentDate"), month = currentDate.attr("data-month"), year = currentDate.attr("data-year"), product_id = 0, 0 != $("#productId").length && (product_id = $("#productId").val()), $.get("/dashboard/number-of-downloads", { month: month, year: year, period: e, product_id: product_id }, function(e) { downloads = e.downloads, nextMonth = e.nextMonth, previousMonth = e.previousMonth, currentMonth = e.currentMonth, year = e.year, today = e.today, $("#nextMonth b").html(nextMonth.string), $("#previousMonth b").html(previousMonth.string), $("#currentDate").attr("data-month", currentMonth.number), $("#currentDate").attr("data-year", year), $("#currentDate").html(currentMonth.string + " " + year), $("#downloadsFromMonth").html(e.totalDownloads);
        var t = [
            ["Date", "Downloads", { role: "style" }]
        ];
        downloads.length ? (downloads.forEach(function(e) { string = [e.day, e.downloads, "color : #00aaff"], t.push(string) }), $(".info-text").hide()) : (string = [today, 0, "color: #00aaff"], t.push(string)), t = google.visualization.arrayToDataTable(t), _downloadsChart.draw(t, _chartOptions) }) }

function getMonthUsers(e, t) { currentDate = $("#currentDate"), month = currentDate.attr("data-month"), year = currentDate.attr("data-year"), $.get("/admin/number-of-users", { month: month, year: year, period: e, t_type: t }, function(e) { users = e.users, nextMonth = e.nextMonth, previousMonth = e.previousMonth, currentMonth = e.currentMonth, year = e.year, today = e.today, $("#nextMonth b").html(nextMonth.string), $("#previousMonth b").html(previousMonth.string), $("#currentDate").attr("data-month", currentMonth.number), $("#currentDate").attr("data-year", year), $("#currentDate").html(currentMonth.string + " " + year), $("#usersFromMonth").html(e.totalUsers), $("#topUsersLink").attr("href", "/admin/top_users/" + currentMonth.number + "/" + year);
        var t = [
            ["Date", "Users", { role: "style" }]
        ];
        users.length ? (users.forEach(function(e) { string = [e.day, e.users, "color : #00aaff"], t.push(string) }), $(".info-text").hide()) : (string = [today, 0, "color: #00aaff"], t.push(string)), t = google.visualization.arrayToDataTable(t), _usersChart.draw(t, _chartOptions) }) }

function debounce(e, t, n) {
    var i;
    return function() {
        var o = this,
            r = arguments;
        clearTimeout(i), i = setTimeout(function() { i = null, n || e.apply(o, r) }, t), n && !i && e.apply(o, r) } }

function addQSParm(e, t) {
    function n(n) { my_url += n + e + "=" + encodeURIComponent(t) }

    function i() { my_url = my_url.replace(o, "$1" + encodeURIComponent(t)) }
    var o = new RegExp("([?&]" + e + "=)[^&]+", ""); - 1 === my_url.indexOf("?") ? n("?") : o.test(my_url) ? i() : n("&") }

function changeOneParamUrl(e, t, n) {
    function i(i) { n += i + e + "=" + encodeURIComponent(t) }

    function o() { n = n.replace(r, "$1" + encodeURIComponent(t)) }
    var r = new RegExp("([?&]" + e + "=)[^&]+", "");
    return -1 === n.indexOf("?") ? i("?") : r.test(n) ? o() : i("&"), n }

function runJoyRide() { $("#joyRideTipContent").joyride({ autoStart: !0, postStepCallback: function() {}, modal: !0, expose: !0, postRideCallback: function() {
            var e = $("#currentUid").val();
            $.post("/user/set-joyride-off", { uid: e }, function() {}) }, template: { button: '<a href="#" class="btn btn-warning btn-fill joyride-next-tip"></a>' } }) }

function toggleCommentsArea(e) { toggle_target = $(e).data("target"), old_text = $(e).html(), new_text = $(e).data("open-text"), $(e).html(new_text).data("open-text", old_text), $card = $(e).closest(".collaborators-card"), $card.hasClass("open") ? ($card.removeClass("open"), $(toggle_target).collapse("hide")) : ($(toggle_target).collapse("show"), nr_page = getUrlParameter("page", 1), setTimeout(function() {-1 == nr_page && (comments_initialized || ($("textarea.mention").mentionsInput({ onDataRequest: getDataMention, minChars: 3, showAvatars: !0 }), loadCommentForProduct(), comments_initialized = !0)) }, 1e3), $card.addClass("open")) }

function scrollBigBundlePage() { $("html, body").animate({ scrollTop: $("#buy-bundle-card").offset().top - 200 }, "slow") }

function openReply(e) { $("#btn-reply-" + e).hide(), $("#addReply-" + e).collapse("show").appendTo("#last-comment-" + e), $(document.body).animate({ scrollTop: $("#addReply-" + e).offset().top - 350 }, 700) }

function closeReply(e) { $("#btn-reply-" + e).show(), $("#addReply-" + e).collapse("hide").appendTo("#last-comment-" + e), $(document.body).animate({ scrollTop: $("#comment-" + e).offset().top - 350 }, 700) }

function saveCommentWithMentions(e, t, n) { $("<input>").attr({ type: "hidden", id: "link-" + t, name: "page", value: getUrlParameter("page", 0) }).appendTo($(e).closest("form")), $textarea = $(t), $textarea.mentionsInput("val", function(t) { $(n).val(t), "" != t.trim() ? ($form = $(e).closest("form"), $form.submit()) : showNotification("error", "Please write a comment before posting!") }) }

function getUrlParameter(e, t) {
    for (var n = window.location.search.substring(1), i = n.split("&"), o = 0; o < i.length; o++) {
        var r = i[o].split("=");
        if (r[0] == e) return r[1] }
    if (1 == t) return -1 }

function readAllNotifications() { time = 150, $.ajax({ type: "POST", url: "/mark_notifications" }), $(".dropdown-notifications a.unread-notification").each(function() {
        var e = $(this);
        setTimeout(function() { e.removeClass("unread-notification"), e.siblings(".btn-notification").remove() }, time), time += 150 }), $("#notification-unread").fadeOut("fast") }

function dismissNotification(e, t) { $.ajax({ type: "POST", url: "/mark_notifications", data: { notify_id: e } }), $(t).siblings("a").removeClass("unread-notification"), $(t).fadeOut("fast") }

function saveCommentWithMentionsInAdmin(e, t) { $textarea = $(".text-with-mentions-" + t), $textarea.mentionsInput("val", function(n) { $(".text-for-server-" + t).val(n), "" != n.trim() ? ($form = $(e).closest("form"), $form.submit()) : showNotification("error", "Please write a comment before posting!") }) }

function getDataMention(e, t, n) { $.ajax({ url: "/get_users_for_mentions", method: "POST", dataType: "json", data: { query: t } }).done(function(e) {
        var i = e;
        i = _.filter(i, function(e) {
            return e.name.toLowerCase().indexOf(t.toLowerCase()) > -1 }), n.call(this, i) }) }

function saveNewCollection(e) { $form = $(e).closest("form"), $name = $("input[name=name]").val(), $color = $("input[name=color]").val(), $.ajax({ url: "/admin/collections", method: "POST", data: { name: $name, color: $color } }).done(function(e) { "undefined" == typeof e.error ? window.location.reload() : showNotification("error", "Something went wrong. Please try again! js") }).fail(function() { showNotification("error", "Something went wrong. Please try again! js") }) }

function changeLicenseInCart(e, t) { console.log("changelicenseincartvalue" + t), $.ajax({ url: "/cart/update-license", method: "POST", data: $.param({ order_id: e, radio_value: t }) }) }

function save_give_review_form(e) { $form = $(e).closest("form") }

function live_preview_product(e) { $("#divWithIframe").removeClass();
    $("#centerFrame");
    switch (e) {
        case "phone":
            $("#divWithIframe").addClass("classPhone");
            break;
        case "tablet":
            $("#divWithIframe").addClass("classTablet");
            break;
        default:
            $("#divWithIframe").addClass("classMonitor") } }

function set_review_member_request(e, t) { $.ajax({ type: "POST", url: "/update-review-member-request", data: { review: t, id: e }, success: function() { location.reload() } }) }

function getMonthForAdminCredit(e) { currentDate = $("#currentDate"), month = currentDate.attr("data-month"), year = currentDate.attr("data-year"), $.get("/admin/users-credit", { month: month, year: year, period: e }, function() {}) }

function saveDocumentation() {
    var e = editor.exportFile(),
        t = $("#product_id").html(),
        n = $("#title").val(),
        i = $("#position").val();
    $.post("/documentations/create", { content: e, product_id: t, name: n, position: i }, function(e) { "success" == e.message ? (showNotification("success", "Data was saved to the database."), window.location.replace("/documentations/" + e.slug)) : showNotification("error", "Something went wrong. Please try again!") }) }

function updateDocumentation(e) {
    var t = editor.exportFile(),
        n = $("#title").val(),
        i = $("#position").val();
    $.post("/documentations/update", { content: t, id: e, name: n, position: i }, function(e) { "success" == e.message ? (window.location.replace("/documentations/" + e.slug), showNotification("success", "Data was updated to the database.")) : showNotification("error", "Something went wrong. Please try again!") }) }

function initEpicEditor() { var_bool_admin = $("#adminEpicEditorPage"), 0 != var_bool_admin.length ? bool = !0 : bool = !1;
    var e = { textarea: "my-edit-area", button: { preview: bool, fullscreen: bool, bar: bool }, autogrow: { minHeight: 500, maxHeight: !1, scroll: !0 } };
    editor = bool ? new EpicEditor(e).load() : new EpicEditor(e).load().preview() }

function openProductsCollapse(e) { target = $(e).data("target"), $(e).hasClass("collapsed") ? ($(e).html("Hide Products").removeClass("collapsed"), $(target).collapse("show")) : ($(e).html("View Products").addClass("collapsed"), $(target).collapse("hide")) }

function resetDownloadChart() { start_date = $("#start_date").val(), end_date = $("#end_date").val(), window.location.replace('/admin/downloads?start_date="' + start_date + '"&end_date="' + end_date + '"') }

function closeAd(e) { $(".ad-product").remove(), $.ajax({ type: "POST", url: "/ad/close-ad", data: { id: e } }) }

function downloadFreebie(e, t) { _gaq.push(["_trackEvent", "Products", "Download", e]), fbq("track", "Download", { content_name: e, content_id: $("#productId").val() }), window.location.replace("/download_freebie/" + t) }

function downloadFreebieDashboard(e, t, n) { _gaq.push(["_trackEvent", "Products", "DownloadDashboard", e]), fbq("track", "DownloadDashboard", { content_name: e, content_id: n }), window.location.replace("/download_freebie/" + t) }

function setViewForm(e) {
    switch ($("#payment_id").addClass("hidden"), $("#email_type").val(e), e) {
        case "found-bug":
            slug = $("#products-list").find(":selected").data("id"), $("#product_slug").val(slug);
            break;
        case "payment":
            $("#payment_id").removeClass("hidden") }
    $("#contactUsModal").modal() }! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

    function i(e, t, n) {
        if (he.isFunction(t)) return he.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n });
        if (t.nodeType) return he.grep(e, function(e) {
            return e === t !== n });
        if ("string" == typeof t) {
            if (Ce.test(t)) return he.filter(t, e, n);
            t = he.filter(t, e) }
        return he.grep(e, function(e) {
            return he.inArray(e, t) > -1 !== n }) }

    function o(e, t) { do { e = e[t] } while (e && 1 !== e.nodeType);
        return e }

    function r(e) {
        var t = {};
        return he.each(e.match(Ne) || [], function(e, n) { t[n] = !0 }), t }

    function a() { ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) }

    function s() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), he.ready()) }

    function l(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var i = "data-" + t.replace(Me, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $e.test(n) ? he.parseJSON(n) : n) } catch (e) {}
                he.data(e, t, n) } else n = undefined }
        return n }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !he.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0 }

    function u(e, t, n, i) {
        if (Re(e)) {
            var o, r, a = he.expando,
                s = e.nodeType,
                l = s ? he.cache : e,
                c = s ? e[a] : e[a] && a;
            if (c && l[c] && (i || l[c].data) || n !== undefined || "string" != typeof t) return c || (c = s ? e[a] = ne.pop() || he.guid++ : a), l[c] || (l[c] = s ? {} : { toJSON: he.noop }), "object" != typeof t && "function" != typeof t || (i ? l[c] = he.extend(l[c], t) : l[c].data = he.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[he.camelCase(t)] = n), "string" == typeof t ? null == (o = r[t]) && (o = r[he.camelCase(t)]) : o = r, o } }

    function d(e, t, n) {
        if (Re(e)) {
            var i, o, r = e.nodeType,
                a = r ? he.cache : e,
                s = r ? e[he.expando] : he.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) { he.isArray(t) ? t = t.concat(he.map(t, he.camelCase)) : t in i ? t = [t] : (t = he.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !c(i) : !he.isEmptyObject(i)) return }(n || (delete a[s].data, c(a[s]))) && (r ? he.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined) } } }

    function f(e, t, n, i) {
        var o, r = 1,
            a = 20,
            s = i ? function() {
                return i.cur() } : function() {
                return he.css(e, t, "") },
            l = s(),
            c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            u = (he.cssNumber[t] || "px" !== c && +l) && Ie.exec(he.css(e, t));
        if (u && u[3] !== c) { c = c || u[3], n = n || [], u = +l || 1;
            do { r = r || ".5", u /= r, he.style(e, t, u + c) } while (r !== (r = s() / l) && 1 !== r && --a) }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o }

    function h(e) {
        var t = qe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n }

    function p(e, t) {
        var n, i, o = 0,
            r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || he.nodeName(i, t) ? r.push(i) : he.merge(r, p(i, t));
        return t === undefined || t && he.nodeName(e, t) ? he.merge([e], r) : r }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) he._data(n, "globalEval", !t || he._data(t[i], "globalEval")) }

    function g(e) { Be.test(e.type) && (e.defaultChecked = e.checked) }

    function y(e, t, n, i, o) {
        for (var r, a, s, l, c, u, d, f = e.length, y = h(t), v = [], b = 0; b < f; b++)
            if ((a = e[b]) || 0 === a)
                if ("object" === he.type(a)) he.merge(v, a.nodeType ? [a] : a);
                else if (ze.test(a)) {
            for (l = l || y.appendChild(t.createElement("div")), c = (je.exec(a) || ["", ""])[1].toLowerCase(), d = Ue[c] || Ue._default, l.innerHTML = d[1] + he.htmlPrefilter(a) + d[2], r = d[0]; r--;) l = l.lastChild;
            if (!de.leadingWhitespace && We.test(a) && v.push(t.createTextNode(We.exec(a)[0])), !de.tbody)
                for (a = "table" !== c || Ye.test(a) ? "<table>" !== d[1] || Ye.test(a) ? 0 : l : l.firstChild, r = a && a.childNodes.length; r--;) he.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
            for (he.merge(v, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = y.lastChild } else v.push(t.createTextNode(a));
        for (l && y.removeChild(l), de.appendChecked || he.grep(p(v, "input"), g), b = 0; a = v[b++];)
            if (i && he.inArray(a, i) > -1) o && o.push(a);
            else if (s = he.contains(a.ownerDocument, a), l = p(y.appendChild(a), "script"), s && m(l), n)
            for (r = 0; a = l[r++];) Fe.test(a.type || "") && n.push(a);
        return l = null, y }

    function v() {
        return !0 }

    function b() {
        return !1 }

    function w() {
        try {
            return ie.activeElement } catch (e) {} }

    function _(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) { "string" != typeof n && (i = i || n, n = undefined);
            for (s in t) _(e, s, n, i, t[s], r);
            return e }
        if (null == i && null == o ? (o = n, i = n = undefined) : null == o && ("string" == typeof n ? (o = i, i = undefined) : (o = i, i = n, n = undefined)), !1 === o) o = b;
        else if (!o) return e;
        return 1 === r && (a = o, o = function(e) {
            return he().off(e), a.apply(this, arguments) }, o.guid = a.guid || (a.guid = he.guid++)), e.each(function() { he.event.add(this, t, o, i, n) }) }

    function x(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function C(e) {
        return e.type = (null !== he.find.attr(e, "type")) + "/" + e.type, e }

    function S(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function T(e, t) {
        if (1 === t.nodeType && he.hasData(e)) {
            var n, i, o, r = he._data(e),
                a = he._data(t, r),
                s = r.events;
            if (s) { delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; i < o; i++) he.event.add(t, n, s[n][i]) }
            a.data && (a.data = he.extend({}, a.data)) } }

    function E(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[he.expando]) { o = he._data(t);
                for (i in o.events) he.removeEvent(t, i, o.handle);
                t.removeAttribute(he.expando) } "script" === n && t.text !== e.text ? (C(t).text = e.text, S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !he.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } }

    function k(e, t, n, i) { t = re.apply([], t);
        var o, r, a, s, l, c, u = 0,
            d = e.length,
            f = d - 1,
            h = t[0],
            m = he.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !de.checkClone && nt.test(h)) return e.each(function(o) {
            var r = e.eq(o);
            m && (t[0] = h.call(this, o, r.html())), k(r, t, n, i) });
        if (d && (c = y(t, e[0].ownerDocument, !1, e, i), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || i)) {
            for (s = he.map(p(c, "script"), C), a = s.length; u < d; u++) r = c, u !== f && (r = he.clone(r, !0, !0), a && he.merge(s, p(r, "script"))), n.call(e[u], r, u);
            if (a)
                for (l = s[s.length - 1].ownerDocument, he.map(s, S), u = 0; u < a; u++) r = s[u], Fe.test(r.type || "") && !he._data(r, "globalEval") && he.contains(l, r) && (r.src ? he._evalUrl && he._evalUrl(r.src) : he.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ot, "")));
            c = o = null }
        return e }

    function N(e, t, n) {
        for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(p(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
        return e }

    function A(e, t) {
        var n = he(t.createElement(e)).appendTo(t.body),
            i = he.css(n[0], "display");
        return n.detach(), i }

    function D(e) {
        var t = ie,
            n = lt[e];
        return n || (n = A(e, t), "none" !== n && n || (st = (st || he("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), n = A(e, t), st.detach()), lt[e] = n), n }

    function R(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = xt.length; n--;)
            if ((e = xt[n] + t) in Ct) return e }

    function M(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (r[a] = he._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (r[a] = he._data(i, "olddisplay", D(i.nodeName)))) : (o = Pe(i), (n && "none" !== n || !o) && he._data(i, "olddisplay", o ? n : he.css(i, "display"))));
        for (a = 0; a < s; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e }

    function O(e, t, n) {
        var i = bt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

    function I(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += he.css(e, n + Le[r], !0, o)), i ? ("content" === n && (a -= he.css(e, "padding" + Le[r], !0, o)), "margin" !== n && (a -= he.css(e, "border" + Le[r] + "Width", !0, o))) : (a += he.css(e, "padding" + Le[r], !0, o), "padding" !== n && (a += he.css(e, "border" + Le[r] + "Width", !0, o)));
        return a }

    function L(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = ht(e),
            a = de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = pt(e, t, r), (o < 0 || null == o) && (o = e.style[t]), ut.test(o)) return o;
            i = a && (de.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0 }
        return o + I(e, t, n || (a ? "border" : "content"), i, r) + "px" }

    function P(e, t, n, i, o) {
        return new P.prototype.init(e, t, n, i, o) }

    function H() {
        return e.setTimeout(function() { St = undefined }), St = he.now() }

    function B(e, t) {
        var n, i = { height: e },
            o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) n = Le[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i }

    function j(e, t, n) {
        for (var i, o = (q.tweeners[t] || []).concat(q.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e)) return i }

    function F(e, t, n) {
        var i, o, r, a, s, l, c, u = this,
            d = {},
            f = e.style,
            h = e.nodeType && Pe(e),
            p = he._data(e, "fxshow");
        n.queue || (s = he._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() { s.unqueued || l() }), s.unqueued++, u.always(function() { u.always(function() { s.unqueued--, he.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = he.css(e, "display"), "inline" === ("none" === c ? he._data(e, "olddisplay") || D(e.nodeName) : c) && "none" === he.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || u.always(function() { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] }));
        for (i in t)
            if (o = t[i], Et.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !p || p[i] === undefined) continue;
                    h = !0 }
                d[i] = p && p[i] || he.style(e, i) } else c = undefined;
        if (he.isEmptyObject(d)) "inline" === ("none" === c ? D(e.nodeName) : c) && (f.display = c);
        else { p ? "hidden" in p && (h = p.hidden) : p = he._data(e, "fxshow", {}), r && (p.hidden = !h), h ? he(e).show() : u.done(function() { he(e).hide() }), u.done(function() {
                var t;
                he._removeData(e, "fxshow");
                for (t in d) he.style(e, t, d[t]) });
            for (i in d) a = j(h ? p[i] : 0, i, u), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0)) } }

    function W(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (i = he.camelCase(n), o = t[i], r = e[n], he.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = he.cssHooks[i]) && "expand" in a) { r = a.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o) } else t[i] = o }

    function q(e, t, n) {
        var i, o, r = 0,
            a = q.prefilters.length,
            s = he.Deferred().always(function() { delete l.elem }),
            l = function() {
                if (o) return !1;
                for (var t = St || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (s.resolveWith(e, [c]), !1) },
            c = s.promise({ elem: e, props: he.extend({}, t), opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, n), originalProperties: t, originalOptions: n, startTime: St || H(), duration: n.duration, tweens: [], createTween: function(t, n) {
                    var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i }, stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this } }),
            u = c.props;
        for (W(u, c.opts.specialEasing); r < a; r++)
            if (i = q.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(u, j, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always) }

    function U(e) {
        return he.attr(e, "class") || "" }

    function z(e) {
        return function(t, n) { "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(Ne) || [];
            if (he.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

    function Y(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, he.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1) }), l }
        var r = {},
            a = e === Qt;
        return o(t.dataTypes[0]) || !r["*"] && o("*") }

    function V(e, t) {
        var n, i, o = he.ajaxSettings.flatOptions || {};
        for (i in t) t[i] !== undefined && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && he.extend(!0, e, n), e }

    function G(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), o === undefined && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) { l.unshift(a);
                    break }
        if (l[0] in n) r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) { r = a;
                    break }
                i || (i = a) }
            r = r || i }
        if (r) return r !== l[0] && l.unshift(r), n[r] }

    function X(e, t, n, i) {
        var o, r, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = c[l + " " + r] || c["* " + r]))
                for (o in c)
                    if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {!0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                        break }
            if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (e) {
                    return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r } } }
        return { state: "success", data: t } }

    function K(e) {
        return e.style && e.style.display || he.css(e, "display") }

    function Q(e) {
        if (!he.contains(e.ownerDocument || ie, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === K(e) || "hidden" === e.type) return !0;
            e = e.parentNode }
        return !1 }

    function Z(e, t, n, i) {
        var o;
        if (he.isArray(t)) he.each(t, function(t, o) { n || nn.test(e) ? i(e, o) : Z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i) });
        else if (n || "object" !== he.type(t)) i(e, t);
        else
            for (o in t) Z(e + "[" + o + "]", t[o], n, i) }

    function J() {
        try {
            return new e.XMLHttpRequest } catch (e) {} }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }

    function te(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
    var ne = [],
        ie = e.document,
        oe = ne.slice,
        re = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        de = {},
        fe = "1.12.4",
        he = function(e, t) {
            return new he.fn.init(e, t) },
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ye = function(e, t) {
            return t.toUpperCase() };
    he.fn = he.prototype = { jquery: fe, constructor: he, selector: "", length: 0, toArray: function() {
            return oe.call(this) }, get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this) }, pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t }, each: function(e) {
            return he.each(this, e) }, map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t) })) }, slice: function() {
            return this.pushStack(oe.apply(this, arguments)) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() {
            return this.prevObject || this.constructor() }, push: ae, sort: ne.sort, splice: ne.splice }, he.extend = he.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (o = arguments[s]))
                for (i in o) e = a[i], n = o[i], a !== n && (c && n && (he.isPlainObject(n) || (t = he.isArray(n))) ? (t ? (t = !1, r = e && he.isArray(e) ? e : []) : r = e && he.isPlainObject(e) ? e : {}, a[i] = he.extend(c, r, n)) : n !== undefined && (a[i] = n));
        return a }, he.extend({ expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
            throw new Error(e) }, noop: function() {}, isFunction: function(e) {
            return "function" === he.type(e) }, isArray: Array.isArray || function(e) {
            return "array" === he.type(e) }, isWindow: function(e) {
            return null != e && e == e.window }, isNumeric: function(e) {
            var t = e && e.toString();
            return !he.isArray(e) && t - parseFloat(t) + 1 >= 0 }, isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0 }, isPlainObject: function(e) {
            var t;
            if (!e || "object" !== he.type(e) || e.nodeType || he.isWindow(e)) return !1;
            try {
                if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) {
                return !1 }
            if (!de.ownFirst)
                for (t in e) return ue.call(e, t);
            for (t in e);
            return t === undefined || ue.call(e, t) }, type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e }, globalEval: function(t) { t && he.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) }, camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ye) }, nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; o < i && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break; return e }, trim: function(e) {
            return null == e ? "" : (e + "").replace(pe, "") }, makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? he.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i }, inArray: function(e, t, n) {
            var i;
            if (t) {
                if (se) return se.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n }
            return -1 }, merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
            if (n !== n)
                for (; t[i] !== undefined;) e[o++] = t[i++];
            return e.length = o, e }, grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
            return i }, map: function(e, t, i) {
            var o, r, a = 0,
                s = [];
            if (n(e))
                for (o = e.length; a < o; a++) null != (r = t(e[a], a, i)) && s.push(r);
            else
                for (a in e) null != (r = t(e[a], a, i)) && s.push(r);
            return re.apply([], s) }, guid: 1, proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), he.isFunction(e) ? (n = oe.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(oe.call(arguments))) }, i.guid = e.guid = e.guid || he.guid++, i) : undefined }, now: function() {
            return +new Date }, support: de }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ne[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { le["[object " + t + "]"] = t.toLowerCase() });
    var ve = function(e) {
        function t(e, t, n, i) {
            var o, r, a, s, l, c, d, h, p = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : j) !== $ && R(t), t = t || $, O)) {
                if (11 !== m && (c = ye.exec(e)))
                    if (o = c[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n } else if (p && (a = p.getElementById(o)) && H(t, a) && a.id === o) return n.push(a), n } else {
                        if (c[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = c[3]) && _.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n }
                if (_.qsa && !z[e + " "] && (!I || !I.test(e))) {
                    if (1 !== m) p = t, h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = B), d = T(e), r = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) d[r] = l + " " + f(d[r]);
                        h = d.join(","), p = ve.test(e) && u(t.parentNode) || t }
                    if (h) try {
                        return Z.apply(n, p.querySelectorAll(h)), n } catch (e) {} finally { s === B && t.removeAttribute("id") } } }
            return k(e.replace(se, "$1"), t, n, i) }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i }
            var t = [];
            return e }

        function i(e) {
            return e[B] = !0, e }

        function o(e) {
            var t = $.createElement("div");
            try {
                return !!e(t) } catch (e) {
                return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e } }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e } }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o])) }) }) }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i }

        function h(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = W++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r) } : function(t, n, a) {
                var s, l, c, u = [F, r];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0 } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (c = t[B] || (t[B] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === F && s[1] === r) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0 } } }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0 } : e[0] }

        function m(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i }

        function g(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
            return a }

        function y(e, t, n, o, r, a) {
            return o && !o[B] && (o = y(o)), r && !r[B] && (r = y(r, a)), i(function(i, a, s, l) {
                var c, u, d, f = [],
                    h = [],
                    p = a.length,
                    y = i || m(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !i && t ? y : g(y, f, e, s, l),
                    b = n ? r || (i ? e : p || o) ? [] : a : v;
                if (n && n(v, b, s, l), o)
                    for (c = g(b, h), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(v[h[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(v[u] = d);
                            r(null, b = [], c, l) }
                        for (u = b.length; u--;)(d = b[u]) && (c = r ? ee(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d)) } } else b = g(b === a ? b.splice(p, b.length) : b), r ? r(null, a, b, l) : Z.apply(a, b) }) }

        function v(e) {
            for (var t, n, i, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = h(function(e) {
                    return e === t }, a, !0), c = h(function(e) {
                    return ee(t, e) > -1 }, a, !0), u = [function(e, n, i) {
                    var o = !r && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o }]; s < o; s++)
                if (n = x.relative[e[s].type]) u = [h(p(u), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (i = ++s; i < o && !x.relative[e[i].type]; i++);
                        return y(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(se, "$1"), n, s < i && v(e.slice(s, i)), i < o && v(e = e.slice(i)), i < o && f(e)) }
                    u.push(n) }
            return p(u) }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, f, h = 0,
                        p = "0",
                        m = i && [],
                        y = [],
                        v = N,
                        b = i || r && x.find.TAG("*", c),
                        w = F += null == v ? 1 : Math.random() || .1,
                        _ = b.length;
                    for (c && (N = a === $ || a || c); p !== _ && null != (u = b[p]); p++) {
                        if (r && u) {
                            for (d = 0, a || u.ownerDocument === $ || (R(u), s = !O); f = e[d++];)
                                if (f(u, a || $, s)) { l.push(u);
                                    break }
                            c && (F = w) }
                        o && ((u = !f && u) && h--, i && m.push(u)) }
                    if (h += p, o && p !== h) {
                        for (d = 0; f = n[d++];) f(m, y, a, s);
                        if (i) {
                            if (h > 0)
                                for (; p--;) m[p] || y[p] || (y[p] = K.call(l));
                            y = g(y) }
                        Z.apply(l, y), c && !i && y.length > 0 && h + n.length > 1 && t.uniqueSort(l) }
                    return c && (F = w, N = v), m };
            return o ? i(a) : a }
        var w, _, x, C, S, T, E, k, N, A, D, R, $, M, O, I, L, P, H, B = "sizzle" + 1 * new Date,
            j = e.document,
            F = 0,
            W = 0,
            q = n(),
            U = n(),
            z = n(),
            Y = function(e, t) {
                return e === t && (D = !0), 0 },
            V = 1 << 31,
            G = {}.hasOwnProperty,
            X = [],
            K = X.pop,
            Q = X.push,
            Z = X.push,
            J = X.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1 },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            fe = new RegExp("^" + ie + "$"),
            he = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + re), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            xe = function() { R() };
        try { Z.apply(X = J.call(j.childNodes), j.childNodes), X[j.childNodes.length].nodeType } catch (e) { Z = { apply: X.length ? function(e, t) { Q.apply(e, J.call(t)) } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1 } } }
        _ = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName }, R = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : j;
            return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, M = $.documentElement, O = !S($), (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), _.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className") }), _.getElementsByTagName = o(function(e) {
                return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length }), _.getElementsByClassName = ge.test($.getElementsByClassName), _.getById = o(function(e) {
                return M.appendChild(e).id = B, !$.getElementsByName || !$.getElementsByName(B).length }), _.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : [] } }, x.filter.ID = function(e) {
                var t = e.replace(we, _e);
                return function(e) {
                    return e.getAttribute("id") === t } }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(we, _e);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t } }), x.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i }
                return r }, x.find.CLASS = _.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e) }, L = [], I = [], (_.qsa = ge.test($.querySelectorAll)) && (o(function(e) { M.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || I.push(".#.+[+~]") }), o(function(e) {
                var t = $.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:") })), (_.matchesSelector = ge.test(P = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) { _.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), L.push("!=", re) }), I = I.length && new RegExp(I.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(M.compareDocumentPosition), H = t || ge.test(M.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, Y = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === j && H(j, e) ? -1 : t === $ || t.ownerDocument === j && H(j, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !r) return e === $ ? -1 : t === $ ? 1 : o ? -1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (o === r) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === j ? -1 : l[i] === j ? 1 : 0 }, $) : $ }, t.matches = function(e, n) {
            return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== $ && R(e), n = n.replace(ue, "='$1']"), _.matchesSelector && O && !z[n + " "] && (!L || !L.test(n)) && (!I || !I.test(n))) try {
                var i = P.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (e) {}
            return t(n, $, null, [e]).length > 0 }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && R(e), H(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && R(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && G.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : undefined;
            return i !== undefined ? i : _.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (D = !_.detectDuplicates, A = !_.sortStable && e.slice(0), e.sort(Y), D) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1) }
            return A = null, e }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                for (; t = e[i++];) n += C(t);
            return n }, x = t.selectors = { cacheLength: 50, createPseudo: i, match: he, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                    return e[1] = e[1].replace(we, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(we, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                    var t = e.replace(we, _e).toLowerCase();
                    return "*" === e ? function() {
                        return !0 } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode } : function(t, n, l) {
                        var c, u, d, f, h, p, m = r !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !l && !s,
                            b = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling" }
                                return !0 }
                            if (p = [a ? g.firstChild : g.lastChild], a && v) {
                                for (f = g, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === F && c[1], b = h && c[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (b = h = 0) || p.pop();)
                                    if (1 === f.nodeType && ++b && f === t) { u[e] = [F, h, b];
                                        break } } else if (v && (f = t, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === F && c[1], b = h), !1 === b)
                                for (;
                                    (f = ++h && f && f[m] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++b || (v && (d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [F, b]), f !== t)););
                            return (b -= o) === i || b % i == 0 && b / i >= 0 } } }, PSEUDO: function(e, n) {
                    var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[B] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a]) }) : function(e) {
                        return r(e, 0, o) }) : r } }, pseudos: { not: i(function(e) {
                    var t = [],
                        n = [],
                        o = E(e.replace(se, "$1"));
                    return o[B] ? i(function(e, t, n, i) {
                        for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r)) }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop() } }), has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0 } }), contains: i(function(e) {
                    return e = e.replace(we, _e),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1 } }), lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, _e).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1 } }), target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id }, root: function(e) {
                    return e === M }, focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) {
                    return !1 === e.disabled }, disabled: function(e) {
                    return !0 === e.disabled }, checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) {
                    return !x.pseudos.empty(e) }, header: function(e) {
                    return me.test(e.nodeName) }, input: function(e) {
                    return pe.test(e.nodeName) }, button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: c(function() {
                    return [0] }), last: c(function(e, t) {
                    return [t - 1] }), eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n] }), even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e }), odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e }), lt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e }), gt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e }) } }, x.pseudos.nth = x.pseudos.eq;
        for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[w] = s(w);
        for (w in { submit: !0, reset: !0 }) x.pseudos[w] = l(w);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d, T = t.tokenize = function(e, n) {
            var i, o, r, a, s, l, c, u = U[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = x.preFilter; s;) { i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({ value: i, type: o[0].replace(se, " ") }), s = s.slice(i.length));
                for (a in x.filter) !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({ value: i, type: a, matches: o }), s = s.slice(i.length));
                if (!i) break }
            return n ? s.length : s ? t.error(e) : U(e, l).slice(0) }, E = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = z[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--;) r = v(t[n]), r[B] ? i.push(r) : o.push(r);
                r = z(e, b(o, i)), r.selector = e }
            return r }, k = t.select = function(e, t, n, i) {
            var o, r, a, s, l, c = "function" == typeof e && e,
                d = !i && T(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && _.getById && 9 === t.nodeType && O && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(we, _e), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length) }
                for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(we, _e), ve.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && f(r))) return Z.apply(n, i), n;
                        break } }
            return (c || E(e, d))(i, t, !O, n, !t || ve.test(e) && u(t.parentNode) || t), n }, _.sortStable = B.split("").sort(Y).join("") === B, _.detectDuplicates = !!D, R(), _.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div")) }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), _.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), o(function(e) {
            return null == e.getAttribute("disabled") }) || r(te, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t }(e);
    he.find = ve, he.expr = ve.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ve.uniqueSort, he.text = ve.getText, he.isXMLDoc = ve.isXML, he.contains = ve.contains;
    var be = function(e, t, n) {
            for (var i = [], o = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && he(e).is(n)) break;
                    i.push(e) }
            return i },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n },
        _e = he.expr.match.needsContext,
        xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType })) }, he.fn.extend({ find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (he.contains(i[t], this)) return !0 }));
            for (t = 0; t < o; t++) he.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? he.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) {
            return this.pushStack(i(this, e || [], !1)) }, not: function(e) {
            return this.pushStack(i(this, e || [], !0)) }, is: function(e) {
            return !!i(this, "string" == typeof e && _e.test(e) ? he(e) : e || [], !1).length } });
    var Se, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (he.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || Se, "string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), xe.test(i[1]) && he.isPlainObject(t))
                    for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this }
            if ((o = ie.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2]) return Se.find(e);
                this.length = 1, this[0] = o }
            return this.context = ie, this.selector = e, this }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : he.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(he) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), he.makeArray(e, this)) }).prototype = he.fn, Se = he(ie);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        ke = { children: !0, contents: !0, next: !0, prev: !0 };
    he.fn.extend({ has: function(e) {
            var t, n = he(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (he.contains(this, n[t])) return !0 }) }, closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], a = _e.test(e) || "string" != typeof e ? he(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) { r.push(n);
                        break }
            return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r) }, index: function(e) {
            return e ? "string" == typeof e ? he.inArray(this[0], he(e)) : he.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t)))) }, addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null },
        parents: function(e) {
            return be(e, "parentNode") },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n) },
        next: function(e) {
            return o(e, "nextSibling") },
        prev: function(e) {
            return o(e, "previousSibling") },
        nextAll: function(e) {
            return be(e, "nextSibling") },
        prevAll: function(e) {
            return be(e, "previousSibling") },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n) },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n) },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e) },
        children: function(e) {
            return we(e.firstChild) },
        contents: function(e) {
            return he.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : he.merge([], e.childNodes) }
    }, function(e, t) { he.fn[e] = function(n, i) {
            var o = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && (ke[e] || (o = he.uniqueSort(o)), Ee.test(e) && (o = o.reverse())), this.pushStack(o) } });
    var Ne = /\S+/g;
    he.Callbacks = function(e) { e = "string" == typeof e ? r(e) : he.extend({}, e);
        var t, n, i, o, a = [],
            s = [],
            l = -1,
            c = function() {
                for (o = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, o && (a = n ? [] : "") },
            u = { add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) { he.each(n, function(n, i) { he.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== he.type(i) && t(i) }) }(arguments), n && !t && c()), this }, remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n;
                            (n = he.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l-- }), this }, has: function(e) {
                    return e ? he.inArray(e, a) > -1 : a.length > 0 }, empty: function() {
                    return a && (a = []), this }, disable: function() {
                    return o = s = [], a = n = "", this }, disabled: function() {
                    return !a }, lock: function() {
                    return o = !0, n || u.disable(), this }, locked: function() {
                    return !!o }, fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this }, fire: function() {
                    return u.fireWith(this, arguments), this }, fired: function() {
                    return !!i } };
        return u }, he.extend({ Deferred: function(e) {
            var t = [
                    ["resolve", "done", he.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", he.Callbacks("memory")]
                ],
                n = "pending",
                i = { state: function() {
                        return n }, always: function() {
                        return o.done(arguments).fail(arguments), this }, then: function() {
                        var e = arguments;
                        return he.Deferred(function(n) { he.each(t, function(t, r) {
                                var a = he.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) {
                        return null != e ? he.extend(e, i) : i } },
                o = {};
            return i.pipe = i.then, he.each(t, function(e, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this }, o[r[0] + "With"] = a.fireWith }), i.promise(o), e && e.call(o, o), o }, when: function(e) {
            var t, n, i, o = 0,
                r = oe.call(arguments),
                a = r.length,
                s = 1 !== a || e && he.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : he.Deferred(),
                c = function(e, n, i) {
                    return function(o) { n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i) } };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) r[o] && he.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --s;
            return s || l.resolveWith(i, r), l.promise() } });
    var Ae;
    he.fn.ready = function(e) {
        return he.ready.promise().done(e), this }, he.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? he.readyWait++ : he.ready(!0) }, ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || (Ae.resolveWith(ie, [he]), he.fn.triggerHandler && (he(ie).triggerHandler("ready"), he(ie).off("ready")))) } }), he.ready.promise = function(t) {
        if (!Ae)
            if (Ae = he.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(he.ready);
            else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else { ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try { n = null == e.frameElement && ie.documentElement } catch (e) {}
            n && n.doScroll && function t() {
                if (!he.isReady) {
                    try { n.doScroll("left") } catch (n) {
                        return e.setTimeout(t, 50) }
                    a(), he.ready() } }() }
        return Ae.promise(t) }, he.ready.promise();
    var De;
    for (De in he(de)) break;
    de.ownFirst = "0" === De, de.inlineBlockNeedsLayout = !1, he(function() {
            var e, t, n, i;
            (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i)) }),
        function() {
            var e = ie.createElement("div");
            de.deleteExpando = !0;
            try { delete e.test } catch (e) { de.deleteExpando = !1 }
            e = null }();
    var Re = function(e) {
            var t = he.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t) },
        $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /([A-Z])/g;
    he.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) {
                return !!(e = e.nodeType ? he.cache[e[he.expando]] : e[he.expando]) && !c(e) }, data: function(e, t, n) {
                return u(e, t, n) }, removeData: function(e, t) {
                return d(e, t) }, _data: function(e, t, n) {
                return u(e, t, n, !0) }, _removeData: function(e, t) {
                return d(e, t, !0) } }), he.fn.extend({ data: function(e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (e === undefined) {
                    if (this.length && (o = he.data(r), 1 === r.nodeType && !he._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), l(r, i, o[i])));
                        he._data(r, "parsedAttrs", !0) }
                    return o }
                return "object" == typeof e ? this.each(function() { he.data(this, e) }) : arguments.length > 1 ? this.each(function() { he.data(this, e, t) }) : r ? l(r, e, he.data(r, e)) : undefined }, removeData: function(e) {
                return this.each(function() { he.removeData(this, e) }) } }), he.extend({ queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = he._data(e, t), n && (!i || he.isArray(n) ? i = he._data(e, t, he.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx";
                var n = he.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = he._queueHooks(e, t),
                    a = function() { he.dequeue(e, t) }; "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire() }, _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return he._data(e, n) || he._data(e, n, { empty: he.Callbacks("once memory").add(function() { he._removeData(e, t + "queue"), he._removeData(e, n) }) }) } }), he.fn.extend({ queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : t === undefined ? this : this.each(function() {
                    var n = he.queue(this, e, t);
                    he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e) }) }, dequeue: function(e) {
                return this.each(function() { he.dequeue(this, e) }) }, clearQueue: function(e) {
                return this.queue(e || "fx", []) }, promise: function(e, t) {
                var n, i = 1,
                    o = he.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {--i || o.resolveWith(r, [r]) };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = he._data(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t) } }),
        function() {
            var e;
            de.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return (n = ie.getElementsByTagName("body")[0]) && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0 } }();
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
        Le = ["Top", "Right", "Bottom", "Left"],
        Pe = function(e, t) {
            return e = t || e, "none" === he.css(e, "display") || !he.contains(e.ownerDocument, e) },
        He = function(e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === he.type(n)) { o = !0;
                for (s in n) He(e, t, s, n[s], !0, r, a) } else if (i !== undefined && (o = !0, he.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(he(e), n) })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r },
        Be = /^(?:checkbox|radio)$/i,
        je = /<([\w:-]+)/,
        Fe = /^$|\/(?:java|ecma)script/i,
        We = /^\s+/,
        qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = ie.createElement("div"),
            t = ie.createDocumentFragment(),
            n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[he.expando] = 1, de.attributes = !e.getAttribute(he.expando) }();
    var Ue = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
    var ze = /<|&#?\w+;/,
        Ye = /<tbody/i;
    ! function() {
        var t, n, i = ie.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
        i = null }();
    var Ve = /^(?:input|select|textarea)$/i,
        Ge = /^key/,
        Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^(?:focusinfocus|focusoutblur)$/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    he.event = { global: {}, add: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, f, h, p, m, g = he._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = he.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                        return void 0 === he || e && he.event.triggered === e.type ? undefined : he.event.dispatch.apply(u.elem, arguments) }, u.elem = e), t = (t || "").match(Ne) || [""], s = t.length; s--;) r = Qe.exec(t[s]) || [], h = m = r[1], p = (r[2] || "").split(".").sort(), h && (c = he.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = he.event.special[h] || {}, d = he.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && he.expr.match.needsContext.test(o), namespace: p.join(".") }, l), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, p, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), he.event.global[h] = !0);
                e = null } }, remove: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, f, h, p, m, g = he.hasData(e) && he._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(Ne) || [""], c = t.length; c--;)
                    if (s = Qe.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = he.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) a = f[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || he.removeEvent(e, h, g.handle), delete u[h]) } else
                        for (h in u) he.event.remove(e, h + t[c], n, i, !0);
                he.isEmptyObject(u) && (delete g.handle, he._removeData(e, "events")) } }, trigger: function(t, n, i, o) {
            var r, a, s, l, c, u, d, f = [i || ie],
                h = ue.call(t, "type") ? t.type : t,
                p = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ke.test(h + he.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[he.expando] ? t : new he.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), c = he.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                if (!o && !c.noBubble && !he.isWindow(i)) {
                    for (l = c.delegateType || h, Ke.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), u = s;
                    u === (i.ownerDocument || ie) && f.push(u.defaultView || u.parentWindow || e) }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || h, r = (he._data(s, "events") || {})[t.type] && he._data(s, "handle"), r && r.apply(s, n), (r = a && s[a]) && r.apply && Re(s) && (t.result = r.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = h, !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(f.pop(), n)) && Re(i) && a && i[h] && !he.isWindow(i)) { u = i[a], u && (i[a] = null), he.event.triggered = h;
                    try { i[h]() } catch (e) {}
                    he.event.triggered = undefined, u && (i[a] = u) }
                return t.result } }, dispatch: function(e) { e = he.event.fix(e);
            var t, n, i, o, r, a = [],
                s = oe.call(arguments),
                l = (he._data(this, "events") || {})[e.type] || [],
                c = he.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = he.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function(e, t) {
            var n, i, o, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < s; n++) r = t[n], o = r.selector + " ", i[o] === undefined && (i[o] = r.needsContext ? he(o, this).index(l) > -1 : he.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && a.push({ elem: l, handlers: i }) }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a }, fix: function(e) {
            if (e[he.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Xe.test(o) ? this.mouseHooks : Ge.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new he.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                var n, i, o, r = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || r === undefined || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                    if (this !== w() && this.focus) try {
                        return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() {
                    if (he.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 }, _default: function(e) {
                    return he.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }, simulate: function(e, t, n) {
            var i = he.extend(new he.Event, n, { type: e, isSimulated: !0 });
            he.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault() } }, he.removeEvent = ie.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n)) }, he.Event = function(e, t) {
        if (!(this instanceof he.Event)) return new he.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? v : b) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0 }, he.Event.prototype = { constructor: he.Event, isDefaultPrevented: b, isPropagationStopped: b, isImmediatePropagationStopped: b, preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, he.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { he.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n } } }), de.submit || (he.event.special.submit = { setup: function() {
            if (he.nodeName(this, "form")) return !1;
            he.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = he.nodeName(t, "input") || he.nodeName(t, "button") ? he.prop(t, "form") : undefined;
                n && !he._data(n, "submit") && (he.event.add(n, "submit._submit", function(e) { e._submitBubble = !0 }), he._data(n, "submit", !0)) }) }, postDispatch: function(e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && he.event.simulate("submit", this.parentNode, e)) }, teardown: function() {
            if (he.nodeName(this, "form")) return !1;
            he.event.remove(this, "._submit") } }), de.change || (he.event.special.change = { setup: function() {
            if (Ve.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (he.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._justChanged = !0) }), he.event.add(this, "click._change", function(e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), he.event.simulate("change", this, e) })), !1;
            he.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ve.test(t.nodeName) && !he._data(t, "change") && (he.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || he.event.simulate("change", this.parentNode, e) }), he._data(t, "change", !0)) }) }, handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments) }, teardown: function() {
            return he.event.remove(this, "._change"), !Ve.test(this.nodeName) } }), de.focusin || he.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { he.event.simulate(t, e.target, he.event.fix(e)) };
        he.event.special[t] = { setup: function() {
                var i = this.ownerDocument || this,
                    o = he._data(i, t);
                o || i.addEventListener(e, n, !0), he._data(i, t, (o || 0) + 1) }, teardown: function() {
                var i = this.ownerDocument || this,
                    o = he._data(i, t) - 1;
                o ? he._data(i, t, o) : (i.removeEventListener(e, n, !0), he._removeData(i, t)) } } }), he.fn.extend({ on: function(e, t, n, i) {
            return _(this, e, t, n, i) }, one: function(e, t, n, i) {
            return _(this, e, t, n, i, 1) }, off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function() { he.event.remove(this, e, n, t) }) }, trigger: function(e, t) {
            return this.each(function() { he.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0) } });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        Je = new RegExp("<(?:" + qe + ")[\\s/>]", "i"),
        et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rt = h(ie),
        at = rt.appendChild(ie.createElement("div"));
    he.extend({ htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>") }, clone: function(e, t, n) {
            var i, o, r, a, s, l = he.contains(e.ownerDocument, e);
            if (de.html5Clone || he.isXMLDoc(e) || !Je.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(r = at.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (i = p(r), s = p(e), a = 0; null != (o = s[a]); ++a) i[a] && E(o, i[a]);
            if (t)
                if (n)
                    for (s = s || p(e), i = i || p(r), a = 0; null != (o = s[a]); a++) T(o, i[a]);
                else T(e, r);
            return i = p(r, "script"), i.length > 0 && m(i, !l && p(e, "script")), i = s = o = null, r }, cleanData: function(e, t) {
            for (var n, i, o, r, a = 0, s = he.expando, l = he.cache, c = de.attributes, u = he.event.special; null != (n = e[a]); a++)
                if ((t || Re(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) u[i] ? he.event.remove(n, i) : he.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(o)) } } }), he.fn.extend({ domManip: k, detach: function(e) {
            return N(this, e, !0) }, remove: function(e) {
            return N(this, e) }, text: function(e) {
            return He(this, function(e) {
                return e === undefined ? he.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e)) }, null, e, arguments.length) }, append: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { x(this, e).appendChild(e) } }) }, prepend: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = x(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() {
            return k(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
            return k(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && he.cleanData(p(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && he.nodeName(e, "select") && (e.options.length = 0) }
            return this }, clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t) }) }, html: function(e) {
            return He(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : undefined;
                if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Je.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Ue[(je.exec(e) || ["", ""])[1].toLowerCase()]) { e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(p(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() {
            var e = [];
            return k(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(p(this)), n && n.replaceChild(t, this)) }, e) } }), he.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { he.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = he(e), a = r.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), he(r[i])[t](n), ae.apply(o, n.get());
            return this.pushStack(o) } });
    var st, lt = { HTML: "block", BODY: "block" },
        ct = /^margin/,
        ut = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
        dt = function(e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o },
        ft = ie.documentElement;
    ! function() {
        function t() {
            var t, u, d = ie.documentElement;
            d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto1;border:1px;padding:1px;top:1%;width:50%", n = o = s = !1, i = a = !0, e.getComputedStyle && (u = e.getComputedStyle(c), n = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, o = "4px" === (u || { width: "4px" }).width, c.style.marginRight = "50%", i = "4px" === (u || { marginRight: "4px" }).marginRight, t = c.appendChild(ie.createElement("div")), t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", r = 0 === c.getClientRects().length, r && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", t = c.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", r = 0 === t[0].offsetHeight)), d.removeChild(l) }
        var n, i, o, r, a, s, l = ie.createElement("div"),
            c = ie.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, he.extend(de, { reliableHiddenOffsets: function() {
                return null == n && t(), r }, boxSizingReliable: function() {
                return null == n && t(), o }, pixelMarginRight: function() {
                return null == n && t(), i }, pixelPosition: function() {
                return null == n && t(), n }, reliableMarginRight: function() {
                return null == n && t(), a }, reliableMarginLeft: function() {
                return null == n && t(), s } })) }();
    var ht, pt, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t) }, pt = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== a && a !== undefined || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), n && !de.pixelMarginRight() && ut.test(a) && ct.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), a === undefined ? a : a + "" }) : ft.currentStyle && (ht = function(e) {
        return e.currentStyle }, pt = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || ht(e), a = n ? n[t] : undefined, null == a && s && s[t] && (a = s[t]), ut.test(a) && !mt.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), a === undefined ? a : a + "" || "auto" });
    var gt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        vt = /^(none|table(?!-c[ea]).+)/,
        bt = new RegExp("^(" + Oe + ")(.*)$", "i"),
        wt = { position: "absolute", visibility: "hidden", display: "block" },
        _t = { letterSpacing: "0", fontWeight: "400" },
        xt = ["Webkit", "O", "Moz", "ms"],
        Ct = ie.createElement("div").style;
    he.extend({ cssHooks: { opacity: { get: function(e, t) {
                    if (t) {
                        var n = pt(e, "opacity");
                        return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": de.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = he.camelCase(t),
                    l = e.style;
                if (t = he.cssProps[s] || (he.cssProps[s] = $(s) || s), a = he.cssHooks[t] || he.cssHooks[s], n === undefined) return a && "get" in a && (o = a.get(e, !1, i)) !== undefined ? o : l[t];
                if (r = typeof n, "string" === r && (o = Ie.exec(n)) && o[1] && (n = f(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, i)) === undefined))) try { l[t] = n } catch (e) {} } }, css: function(e, t, n, i) {
            var o, r, a, s = he.camelCase(t);
            return t = he.cssProps[s] || (he.cssProps[s] = $(s) || s), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), r === undefined && (r = pt(e, t, i)), "normal" === r && t in _t && (r = _t[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r } }), he.each(["height", "width"], function(e, t) { he.cssHooks[t] = { get: function(e, n, i) {
                if (n) return vt.test(he.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function() {
                    return L(e, t, i) }) : L(e, t, i) }, set: function(e, n, i) {
                var o = i && ht(e);
                return O(e, n, i ? I(e, t, i, de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, o), o) : 0) } } }), de.opacity || (he.cssHooks.opacity = { get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = he.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === he.trim(r.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = gt.test(r) ? r.replace(gt, o) : r + " " + o) } }), he.cssHooks.marginRight = R(de.reliableMarginRight, function(e, t) {
        if (t) return dt(e, { display: "inline-block" }, pt, [e, "marginRight"]) }), he.cssHooks.marginLeft = R(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(pt(e, "marginLeft")) || (he.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, { marginLeft: 0 }, function() {
            return e.getBoundingClientRect().left }) : 0)) + "px" }), he.each({ margin: "", padding: "", border: "Width" }, function(e, t) { he.cssHooks[e + t] = { expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Le[i] + t] = r[i] || r[i - 2] || r[0];
                return o } }, ct.test(e) || (he.cssHooks[e + t].set = O) }), he.fn.extend({ css: function(e, t) {
            return He(this, function(e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (he.isArray(t)) {
                    for (i = ht(e), o = t.length; a < o; a++) r[t[a]] = he.css(e, t[a], !1, i);
                    return r }
                return n !== undefined ? he.style(e, t, n) : he.css(e, t) }, e, t, arguments.length > 1) }, show: function() {
            return M(this, !0) }, hide: function() {
            return M(this) }, toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Pe(this) ? he(this).show() : he(this).hide() }) } }), he.Tween = P, P.prototype = { constructor: P, init: function(e, t, n, i, o, r) { this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px") }, cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this) }, run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this } }, P.prototype.init.prototype = P.prototype, P.propHooks = { _default: { get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit) } } }, P.propHooks.scrollTop = P.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, he.easing = { linear: function(e) {
            return e }, swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, he.fx = P.prototype.init, he.fx.step = {};
    var St, Tt, Et = /^(?:toggle|show|hide)$/,
        kt = /queueHooks$/;
    he.Animation = he.extend(q, { tweeners: { "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, Ie.exec(t), n), n }] }, tweener: function(e, t) { he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t) }, prefilters: [F], prefilter: function(e, t) { t ? q.prefilters.unshift(e) : q.prefilters.push(e) } }), he.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? he.extend({}, e) : { complete: n || !n && t || he.isFunction(e) && e, duration: e, easing: n && t || t && !he.isFunction(t) && t };
            return i.duration = he.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in he.fx.speeds ? he.fx.speeds[i.duration] : he.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
            }, i
        }, he.fn.extend({ fadeTo: function(e, t, n, i) {
                return this.filter(Pe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) {
                var o = he.isEmptyObject(e),
                    r = he.speed(t, n, i),
                    a = function() {
                        var t = q(this, he.extend({}, e), r);
                        (o || he._data(this, "finish")) && t.stop(!0) };
                return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a) }, stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n) };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = he.timers,
                        a = he._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && kt.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));!t && n || he.dequeue(this, e) }) }, finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = he._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = he.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish }) } }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, i, o) } }), he.each({ slideDown: B("show"), slideUp: B("hide"), slideToggle: B("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { he.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i) } }), he.timers = [], he.fx.tick = function() {
            var e, t = he.timers,
                n = 0;
            for (St = he.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || he.fx.stop(), St = undefined }, he.fx.timer = function(e) { he.timers.push(e), e() ? he.fx.start() : he.timers.pop() }, he.fx.interval = 13, he.fx.start = function() { Tt || (Tt = e.setInterval(he.fx.tick, he.fx.interval)) }, he.fx.stop = function() { e.clearInterval(Tt), Tt = null }, he.fx.speeds = { slow: 600, fast: 200, _default: 400 }, he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() { e.clearTimeout(o) } }) },
        function() {
            var e, t = ie.createElement("input"),
                n = ie.createElement("div"),
                i = ie.createElement("select"),
                o = i.appendChild(ie.createElement("option"));
            n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = o.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !o.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value }();
    var Nt = /\r/g,
        At = /[\x20\t\r\n\f]+/g;
    he.fn.extend({ val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = he.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, he(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : he.isArray(o) && (o = he.map(o, function(e) {
                        return null == e ? "" : e + "" })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, o, "value") !== undefined || (this.value = o)) });
                if (o) return (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && (n = t.get(o, "value")) !== undefined ? n : (n = o.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n) } } }), he.extend({ valHooks: { option: { get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : he.trim(he.text(e)).replace(At, " ") } }, select: { get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                        if (n = i[l], (n.selected || l === o) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), r) return t;
                            a.push(t) }
                    return a }, set: function(e, t) {
                    for (var n, i, o = e.options, r = he.makeArray(t), a = o.length; a--;)
                        if (i = o[a], he.inArray(he.valHooks.option.get(i), r) > -1) try { i.selected = n = !0 } catch (e) { i.scrollHeight } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o } } } }), he.each(["radio", "checkbox"], function() { he.valHooks[this] = { set: function(e, t) {
                if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1 } }, de.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value }) });
    var Dt, Rt, $t = he.expr.attrHandle,
        Mt = /^(?:checked|selected)$/i,
        Ot = de.getSetAttribute,
        It = de.input;
    he.fn.extend({ attr: function(e, t) {
            return He(this, he.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
            return this.each(function() { he.removeAttr(this, e) }) } }), he.extend({ attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (t = t.toLowerCase(), o = he.attrHooks[t] || (he.expr.match.bool.test(t) ? Rt : Dt)), n !== undefined ? null === n ? void he.removeAttr(e, t) : o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? undefined : i)) }, attrHooks: { type: { set: function(e, t) {
                    if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = he.propFix[n] || n, he.expr.match.bool.test(n) ? It && Ot || !Mt.test(n) ? e[i] = !1 : e[he.camelCase("default-" + n)] = e[i] = !1 : he.attr(e, n, ""), e.removeAttribute(Ot ? n : i) } }), Rt = { set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : It && Ot || !Mt.test(n) ? e.setAttribute(!Ot && he.propFix[n] || n, n) : e[he.camelCase("default-" + n)] = e[n] = !0, n } }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = $t[t] || he.find.attr;
        It && Ot || !Mt.test(t) ? $t[t] = function(e, t, i) {
            var o, r;
            return i || (r = $t[t], $t[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, $t[t] = r), o } : $t[t] = function(e, t, n) {
            if (!n) return e[he.camelCase("default-" + t)] ? t.toLowerCase() : null } }), It && Ot || (he.attrHooks.value = { set: function(e, t, n) {
            if (!he.nodeName(e, "input")) return Dt && Dt.set(e, t, n);
            e.defaultValue = t } }), Ot || (Dt = { set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t } }, $t.id = $t.name = $t.coords = function(e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null }, he.valHooks.button = { get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value }, set: Dt.set }, he.attrHooks.contenteditable = { set: function(e, t, n) { Dt.set(e, "" !== t && t, n) } }, he.each(["width", "height"], function(e, t) { he.attrHooks[t] = { set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n } } })), de.style || (he.attrHooks.style = { get: function(e) {
            return e.style.cssText || undefined }, set: function(e, t) {
            return e.style.cssText = t + "" } });
    var Lt = /^(?:input|select|textarea|button|object)$/i,
        Pt = /^(?:a|area)$/i;
    he.fn.extend({ prop: function(e, t) {
            return He(this, he.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
            return e = he.propFix[e] || e, this.each(function() {
                try { this[e] = undefined, delete this[e] } catch (e) {} }) } }), he.extend({ prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), n !== undefined ? o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), de.hrefNormalized || he.each(["href", "src"], function(e, t) { he.propHooks[t] = { get: function(e) {
                return e.getAttribute(t, 4) } } }), de.optSelected || (he.propHooks.selected = { get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null }, set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { he.propFix[this.toLowerCase()] = this }), de.enctype || (he.propFix.enctype = "encoding");
    var Ht = /[\t\r\n\f]/g;
    he.fn.extend({ addClass: function(e) {
            var t, n, i, o, r, a, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).addClass(e.call(this, t, U(this))) });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (o = U(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                        for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = he.trim(i), o !== s && he.attr(n, "class", s) }
            return this }, removeClass: function(e) {
            var t, n, i, o, r, a, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).removeClass(e.call(this, t, U(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (o = U(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                        for (a = 0; r = t[a++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        s = he.trim(i), o !== s && he.attr(n, "class", s) }
            return this }, toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) { he(this).toggleClass(e.call(this, n, U(this), t), t) }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = he(this), r = e.match(Ne) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else e !== undefined && "boolean" !== n || (t = U(this), t && he._data(this, "__className__", t), he.attr(this, "class", t || !1 === e ? "" : he._data(this, "__className__") || "")) }) }, hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(n) + " ").replace(Ht, " ").indexOf(t) > -1) return !0;
            return !1 } }), he.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), he.fn.extend({ hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e) } });
    var Bt = e.location,
        jt = he.now(),
        Ft = /\?/,
        Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    he.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = he.trim(t + "");
        return o && !he.trim(o.replace(Wt, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "") })) ? Function("return " + o)() : he.error("Invalid JSON: " + t) }, he.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try { e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (e) { n = undefined }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n };
    var qt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Vt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Kt = {},
        Qt = {},
        Zt = "*/".concat("*"),
        Jt = Bt.href,
        en = Xt.exec(Jt.toLowerCase()) || [];
    he.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Jt, type: "GET", isLocal: Yt.test(en[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": he.parseJSON, "text xml": he.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
            return t ? V(V(e, he.ajaxSettings), t) : V(he.ajaxSettings, e) }, ajaxPrefilter: z(Kt), ajaxTransport: z(Qt), ajax: function(t, n) {
            function i(t, n, i, o) {
                var r, d, v, b, _, C = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), u = undefined, s = o || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && t < 300 || 304 === t, i && (b = G(f, x, i)), b = X(f, b, x, r), r ? (f.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (he.lastModified[a] = _), (_ = x.getResponseHeader("etag")) && (he.etag[a] = _)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, v = b.error, r = !v)) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || C) + "", r ? m.resolveWith(h, [d, C, x]) : m.rejectWith(h, [x, C, v]), x.statusCode(y), y = undefined, c && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, f, r ? d : v]), g.fireWith(h, [x, C]), c && (p.trigger("ajaxComplete", [x, f]), --he.active || he.event.trigger("ajaxStop"))) } "object" == typeof t && (n = t, t = undefined), n = n || {};
            var o, r, a, s, l, c, u, d, f = he.ajaxSetup({}, n),
                h = f.context || f,
                p = f.context && (h.nodeType || h.jquery) ? he(h) : he.event,
                m = he.Deferred(),
                g = he.Callbacks("once memory"),
                y = f.statusCode || {},
                v = {},
                b = {},
                w = 0,
                _ = "canceled",
                x = { readyState: 0, getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; t = zt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()] }
                        return null == t ? null : t }, getAllResponseHeaders: function() {
                        return 2 === w ? s : null }, setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, v[e] = t), this }, overrideMimeType: function(e) {
                        return w || (f.mimeType = e), this }, statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) y[t] = [y[t], e[t]];
                            else x.always(e[x.status]);
                        return this }, abort: function(e) {
                        var t = e || _;
                        return u && u.abort(t), i(0, t), this } };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || Jt) + "").replace(qt, "").replace(Gt, en[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = he.trim(f.dataType || "*").toLowerCase().match(Ne) || [""], null == f.crossDomain && (o = Xt.exec(f.url.toLowerCase()), f.crossDomain = !(!o || o[1] === en[1] && o[2] === en[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = he.param(f.data, f.traditional)), Y(Kt, f, n, x), 2 === w) return x;
            c = he.event && f.global, c && 0 == he.active++ && he.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Vt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Ft.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Ut.test(a) ? a.replace(Ut, "$1_=" + jt++) : a + (Ft.test(a) ? "&" : "?") + "_=" + jt++)), f.ifModified && (he.lastModified[a] && x.setRequestHeader("If-Modified-Since", he.lastModified[a]), he.etag[a] && x.setRequestHeader("If-None-Match", he.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : f.accepts["*"]);
            for (r in f.headers) x.setRequestHeader(r, f.headers[r]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, x, f) || 2 === w)) return x.abort();
            _ = "abort";
            for (r in { success: 1, error: 1, complete: 1 }) x[r](f[r]);
            if (u = Y(Qt, f, n, x)) {
                if (x.readyState = 1, c && p.trigger("ajaxSend", [x, f]), 2 === w) return x;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() { x.abort("timeout") }, f.timeout));
                try { w = 1, u.send(v, i) } catch (e) {
                    if (!(w < 2)) throw e;
                    i(-1, e) } } else i(-1, "No Transport");
            return x }, getJSON: function(e, t, n) {
            return he.get(e, t, n, "json") }, getScript: function(e, t) {
            return he.get(e, undefined, t, "script") } }), he.each(["get", "post"], function(e, t) { he[t] = function(e, n, i, o) {
            return he.isFunction(n) && (o = o || i, i = n, n = undefined), he.ajax(he.extend({ url: e, type: t, dataType: o, data: n, success: i }, he.isPlainObject(e) && e)) } }), he._evalUrl = function(e) {
        return he.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, he.fn.extend({ wrapAll: function(e) {
            if (he.isFunction(e)) return this.each(function(t) { he(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = he(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e }).append(this) }
            return this }, wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) { he(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(n) { he(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() {
            return this.parent().each(function() { he.nodeName(this, "body") || he(this).replaceWith(this.childNodes) }).end() } }), he.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e) }, he.expr.filters.visible = function(e) {
        return !he.expr.filters.hidden(e) };
    var tn = /%20/g,
        nn = /\[\]$/,
        on = /\r?\n/g,
        rn = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, i = [],
            o = function(e, t) { t = he.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (t === undefined && (t = he.ajaxSettings && he.ajaxSettings.traditional), he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() { o(this.name, this.value) });
        else
            for (n in e) Z(n, e[n], t, o);
        return i.join("&").replace(tn, "+") }, he.fn.extend({ serialize: function() {
            return he.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && an.test(this.nodeName) && !rn.test(e) && (this.checked || !Be.test(e)) }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                    return { name: t.name, value: e.replace(on, "\r\n") } }) : { name: t.name, value: n.replace(on, "\r\n") } }).get() } }), he.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? J() : /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || ee() } : J;
    var sn = 0,
        ln = {},
        cn = he.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in ln) ln[e](undefined, !0) }), de.cors = !!cn && "withCredentials" in cn, cn = de.ajax = !!cn, cn && he.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return { send: function(i, o) {
                    var r, a = t.xhr(),
                        s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) a[r] = t.xhrFields[r];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) i[r] !== undefined && a.setRequestHeader(r, i[r] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, i) {
                        var r, l, c;
                        if (n && (i || 4 === a.readyState))
                            if (delete ln[s], n = undefined, a.onreadystatechange = he.noop, i) 4 !== a.readyState && a.abort();
                            else { c = {}, r = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                try { l = a.statusText } catch (e) { l = "" }
                                r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404 }
                        c && o(r, l, c, a.getAllResponseHeaders()) }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n() }, abort: function() { n && n(undefined, !0) } } } }), he.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) {
                return he.globalEval(e), e } } }), he.ajaxPrefilter("script", function(e) { e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || he("head")[0] || ie.documentElement;
            return { send: function(i, o) { t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(undefined, !0) } } } });
    var un = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var e = un.pop() || he.expando + "_" + jt++;
            return this[e] = !0, e } }), he.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, a, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + o) : !1 !== t.jsonp && (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || he.error(o + " was not called"), a[0] }, t.dataTypes[0] = "json", r = e[o], e[o] = function() { a = arguments }, i.always(function() { r === undefined ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, un.push(o)), a && he.isFunction(r) && r(a[0]), a = r = undefined }), "script" }), he.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || ie;
        var i = xe.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = y([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes)) };
    var fn = he.fn.load;
    he.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = he.trim(e.slice(s, e.length)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), a.length > 0 && he.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function(e) { r = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, r || [e.responseText, t, e]) }) }), this }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { he.fn[t] = function(e) {
            return this.on(t, e) } }), he.expr.filters.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem }).length }, he.offset = { setOffset: function(e, t, n) {
            var i, o, r, a, s, l, c, u = he.css(e, "position"),
                d = he(e),
                f = {}; "static" === u && (e.style.position = "relative"), s = d.offset(), r = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && he.inArray("auto", [r, l]) > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f) } }, he.fn.extend({ offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) { he.offset.setOffset(this, e, t) });
            var t, n, i = { top: 0, left: 0 },
                o = this[0],
                r = o && o.ownerDocument;
            if (r) return t = r.documentElement, he.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = te(r), { top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : i }, position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    i = this[0];
                return "fixed" === he.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (n = e.offset()), n.top += he.css(e[0], "borderTopWidth", !0), n.left += he.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - he.css(i, "marginTop", !0), left: t.left - n.left - he.css(i, "marginLeft", !0) } } }, offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !he.nodeName(e, "html") && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || ft }) } }), he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = /Y/.test(t);
        he.fn[e] = function(i) {
            return He(this, function(e, i, o) {
                var r = te(e);
                if (o === undefined) return r ? t in r ? r[t] : r.document.documentElement[i] : e[i];
                r ? r.scrollTo(n ? he(r).scrollLeft() : o, n ? o : he(r).scrollTop()) : e[i] = o }, e, i, arguments.length, null) } }), he.each(["top", "left"], function(e, t) { he.cssHooks[t] = R(de.pixelPosition, function(e, n) {
            if (n) return n = pt(e, t), ut.test(n) ? he(e).position()[t] + "px" : n }) }), he.each({ Height: "height", Width: "width" }, function(e, t) { he.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { he.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                return He(this, function(t, n, i) {
                    var o;
                    return he.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === undefined ? he.css(t, n, a) : he.style(t, n, i, a) }, t, r ? i : undefined, r, null) } }) }), he.fn.extend({ bind: function(e, t, n) {
            return this.on(e, null, t, n) }, unbind: function(e, t) {
            return this.off(e, null, t) }, delegate: function(e, t, n, i) {
            return this.on(t, e, n, i) }, undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), he.fn.size = function() {
        return this.length }, he.fn.andSelf = he.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he });
    var hn = e.jQuery,
        pn = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = pn), t && e.jQuery === he && (e.jQuery = hn), he }, t || (e.jQuery = e.$ = he), he
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = { linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]", buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])", disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])", fileInputSelector: "input[name][type=file]:not([disabled])", linkDisableSelector: "a[data-disable-with], a[data-disable]", buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]", csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content") }, csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content") }, CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t) }, refreshCSRFTokens: function() { e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken()) }, fire: function(t, n, i) {
            var o = e.Event(n);
            return t.trigger(o, i), !1 !== o.result }, confirm: function(e) {
            return confirm(e) }, ajax: function(t) {
            return e.ajax(t) }, href: function(e) {
            return e[0].href }, isRemote: function(e) {
            return e.data("remote") !== t && !1 !== e.data("remote") }, handleRemote: function(i) {
            var o, r, a, s, l, c;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) { o = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), a = e(i[0]).serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (a.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null) } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
                return c = { type: o || "GET", data: a, dataType: l, beforeSend: function(e, o) {
                        if (o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), !n.fire(i, "ajax:beforeSend", [e, o])) return !1;
                        i.trigger("ajax:send", e) }, success: function(e, t, n) { i.trigger("ajax:success", [e, t, n]) }, complete: function(e, t) { i.trigger("ajax:complete", [e, t]) }, error: function(e, t, n) { i.trigger("ajax:error", [e, t, n]) }, crossDomain: n.isCrossDomain(r) }, s && (c.xhrFields = { withCredentials: s }), r && (c.url = r), n.ajax(c) }
            return !1 }, isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host) } catch (e) {
                return !0 } }, handleMethod: function(i) {
            var o = n.href(i),
                r = i.data("method"),
                a = i.attr("target"),
                s = n.csrfToken(),
                l = n.csrfParam(),
                c = e('<form method="post" action="' + o + '"></form>'),
                u = '<input name="_method" value="' + r + '" type="hidden" />';
            l === t || s === t || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit() }, formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n) }, disableFormElements: function(t) { n.formElements(t, n.disableSelector).each(function() { n.disableFormElement(e(this)) }) }, disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0) }, enableFormElements: function(t) { n.formElements(t, n.enableSelector).each(function() { n.enableFormElement(e(this)) }) }, enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled") }, allowAction: function(e) {
            var t, i = e.data("confirm"),
                o = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try { o = n.confirm(i) } catch (e) {
                    (console.error || console.log).call(console, e.stack || e) }
                t = n.fire(e, "confirm:complete", [o]) }
            return o && t }, blankInputs: function(t, n, i) {
            var o, r, a, s, l = e(),
                c = n || "input,textarea",
                u = t.find(c),
                d = {};
            return u.each(function() { o = e(this), o.is("input[type=radio]") ? (s = o.attr("name"), d[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (a = t.find('input[type=radio][name="' + s + '"]'), l = l.add(a)), d[s] = s)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val()) === i && (l = l.add(o)) }), !!l.length && l }, nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0) }, stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1 }, disableElement: function(e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e) }), e.data("ujs:disabled", !0) }, enableElement: function(e) { e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled") } }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) { e.crossDomain || n.CSRFProtection(i) }), e(window).on("pageshow.rails", function() { e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t) }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t) }) }), i.on("ajax:complete", n.linkDisableSelector, function() { n.enableElement(e(this)) }), i.on("ajax:complete", n.buttonDisableSelector, function() { n.enableFormElement(e(this)) }), i.on("click.rails", n.linkClickSelector, function(t) {
        var i = e(this),
            o = i.data("method"),
            r = i.data("params"),
            a = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (a && (!o || "GET" === o) && !r) return !0;
            var s = n.handleRemote(i);
            return !1 === s ? n.enableElement(i) : s.fail(function() { n.enableElement(i) }), !1 }
        return o ? (n.handleMethod(i), !1) : void 0 }), i.on("click.rails", n.buttonClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return !1 === o ? n.enableFormElement(i) : o.fail(function() { n.enableFormElement(i) }), !1 }), i.on("change.rails", n.inputChangeSelector, function(t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t) }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var o, r, a = e(this),
            s = n.isRemote(a);
        if (!n.allowAction(a)) return n.stopEverything(i);
        if (a.attr("novalidate") === t)
            if (a.data("ujs:formnovalidate-button") === t) {
                if ((o = n.blankInputs(a, n.requiredInputSelector, !1)) && n.fire(a, "ajax:aborted:required", [o])) return n.stopEverything(i) } else a.data("ujs:formnovalidate-button", t);
        if (s) {
            if (r = n.nonBlankInputs(a, n.fileInputSelector)) { setTimeout(function() { n.disableFormElements(a) }, 13);
                var l = n.fire(a, "ajax:aborted:file", [r]);
                return l || setTimeout(function() { n.enableFormElements(a) }, 13), l }
            return n.handleRemote(a), !1 }
        setTimeout(function() { n.disableFormElements(a) }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var o = i.attr("name"),
            r = o ? { name: o, value: i.val() } : null,
            a = i.closest("form");
        0 === a.length && (a = e("#" + i.attr("form"))), a.data("ujs:submit-button", r), a.data("ujs:formnovalidate-button", i.attr("formnovalidate")), a.data("ujs:submit-button-formaction", i.attr("formaction")), a.data("ujs:submit-button-formmethod", i.attr("formmethod")) }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) { this === t.target && n.disableFormElements(e(this)) }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) { this === t.target && n.enableFormElements(e(this)) }), e(function() { n.refreshCSRFTokens() }))
}(jQuery),
function() {
    var e, t, n, i, o, r, a, s, l, c, u, d, f, h, p, m, g, y, v, b, w, _, x, C, S, T, E, k, N, A, D, R, $, M, O, I, L, P, H, B, j, F, W, q, U, z, Y, V, G, X, K, Q, Z, J, ee, te, ne = [].indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e) return t;
            return -1 },
        ie = function(e, t) {
            function n() { this.constructor = e }
            for (var i in t) oe.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
        oe = {}.hasOwnProperty,
        re = [].slice,
        ae = function(e, t) {
            return function() {
                return e.apply(t, arguments) } };
    M = {}, f = 10, Q = !1, H = null, v = null, R = null, F = null, te = null, i = { BEFORE_CHANGE: "page:before-change", FETCH: "page:fetch", RECEIVE: "page:receive", CHANGE: "page:change", UPDATE: "page:update", LOAD: "page:load", RESTORE: "page:restore", BEFORE_UNLOAD: "page:before-unload", EXPIRE: "page:expire" }, C = function(e) {
        var t;
        return e = new n(e), Y(), d(), null != H && H.start(), Q && (t = Z(e.absolute)) ? (S(t), T(e, null, !1)) : T(e, X) }, Z = function(e) {
        var t;
        if ((t = M[e]) && !t.transitionCacheDisabled) return t }, w = function(e) {
        return null == e && (e = !0), Q = e }, b = function(e) {
        if (null == e && (e = !0), c) return e ? null != H ? H : H = new r("html") : (null != H && H.uninstall(), H = null) }, T = function(e, t, n) {
        return null == n && (n = !0), J(i.FETCH, { url: e.absolute }), null != te && te.abort(), te = new XMLHttpRequest, te.open("GET", e.withoutHashForIE10compatibility(), !0), te.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), te.setRequestHeader("X-XHR-Referer", F), te.onload = function() {
            var n;
            return J(i.RECEIVE, { url: e.absolute }), (n = P()) ? (W(e), q(), h.apply(null, x(n)), $(), "function" == typeof t && t(), J(i.LOAD)) : document.location.href = y() || e.absolute }, H && n && (te.onprogress = function() {
            return function(e) {
                var t;
                return t = e.lengthComputable ? e.loaded / e.total * 100 : H.value + (100 - H.value) / 10, H.advanceTo(t) } }()), te.onloadend = function() {
            return te = null }, te.onerror = function() {
            return document.location.href = e.absolute }, te.send() }, S = function(e) {
        return null != te && te.abort(), h(e.title, e.body), B(e), J(i.RESTORE) }, d = function() {
        var e;
        return e = new n(v.url), M[e.absolute] = { url: e.relative, body: document.body, title: document.title, positionY: window.pageYOffset, positionX: window.pageXOffset, cachedAt: (new Date).getTime(), transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]") }, m(f) }, I = function(e) {
        if (null == e && (e = f), /^[\d]+$/.test(e)) return f = parseInt(e) }, m = function(e) {
        var t, n, o, r, a, s;
        for (a = Object.keys(M), t = a.map(function(e) {
                return M[e].cachedAt }).sort(function(e, t) {
                return t - e }), s = [], n = 0, r = a.length; n < r; n++) o = a[n], M[o].cachedAt <= t[e] && (J(i.EXPIRE, M[o]), s.push(delete M[o]));
        return s }, h = function(t, n, o, r) {
        return J(i.BEFORE_UNLOAD), document.title = t, document.documentElement.replaceChild(n, document.body), null != o && e.update(o), K(), r && _(), v = window.history.state, null != H && H.done(), J(i.CHANGE), J(i.UPDATE) }, _ = function() {
        var e, t, n, i, o, r, a, s, l, c, u, d;
        for (d = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), n = 0, o = d.length; n < o; n++)
            if (u = d[n], "" === (l = u.type) || "text/javascript" === l) {
                for (t = document.createElement("script"), c = u.attributes, i = 0, r = c.length; i < r; i++) e = c[i], t.setAttribute(e.name, e.value);
                u.hasAttribute("async") || (t.async = !1), t.appendChild(document.createTextNode(u.innerHTML)), s = u.parentNode, a = u.nextSibling, s.removeChild(u), s.insertBefore(t, a) } }, V = function(e) {
        return e.innerHTML = e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), e }, K = function() {
        var e, t;
        if ((e = (t = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[t.length - 1]) && document.activeElement !== e) return e.focus() }, W = function(e) {
        if ((e = new n(e)).absolute !== F) return window.history.pushState({ turbolinks: !0, url: e.absolute }, "", e.absolute) }, q = function() {
        var e, t;
        if (e = te.getResponseHeader("X-XHR-Redirected-To")) return e = new n(e), t = e.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", e.href + t) }, y = function() {
        var e;
        if (null != (e = te.getResponseHeader("Location")) && new n(e).crossOrigin()) return e }, Y = function() {
        return F = document.location.href }, z = function() {
        return window.history.replaceState({ turbolinks: !0, url: document.location.href }, "", document.location.href) }, U = function() {
        return v = window.history.state }, $ = function() {
        var e;
        if (navigator.userAgent.match(/Firefox/) && !(e = new n).hasNoHash()) return window.history.replaceState(v, "", e.withoutHash()), document.location.hash = e.hash }, B = function(e) {
        return window.scrollTo(e.positionX, e.positionY) }, X = function() {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0) }, p = function(e) {
        var t, n, i;
        if (null == e || "object" != typeof e) return e;
        t = new e.constructor;
        for (n in e) i = e[n], t[n] = p(i);
        return t }, L = function(e) {
        var t, n;
        return n = (null != (t = document.cookie.match(new RegExp(e + "=(\\w+)"))) ? t[1].toUpperCase() : void 0) || "", document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", n }, J = function(e, t) {
        var n;
        return "undefined" != typeof Prototype && Event.fire(document, e, t, !0), n = document.createEvent("Events"), t && (n.data = t), n.initEvent(e, !0, !0), document.dispatchEvent(n) }, O = function(e) {
        return !J(i.BEFORE_CHANGE, { url: e }) }, P = function() {
        var e, t, n, i, o, r;
        if (t = function() {
                var e;
                return 400 <= (e = te.status) && e < 600 }, r = function() {
                var e;
                return null != (e = te.getResponseHeader("Content-Type")) && e.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/) }, i = function(e) {
                var t, n, i, o, r;
                for (o = e.querySelector("head").childNodes, r = [], t = 0, n = o.length; t < n; t++) i = o[t], null != ("function" == typeof i.getAttribute ? i.getAttribute("data-turbolinks-track") : void 0) && r.push(i.getAttribute("src") || i.getAttribute("href"));
                return r }, e = function(e) {
                var t;
                return R || (R = i(document)), t = i(e), t.length !== R.length || o(t, R).length !== R.length }, o = function(e, t) {
                var n, i, o, r, a;
                for (e.length > t.length && (o = [t, e], e = o[0], t = o[1]), r = [], n = 0, i = e.length; n < i; n++) a = e[n], ne.call(t, a) >= 0 && r.push(a);
                return r }, !t() && r() && (n = g(te.responseText)) && !e(n)) return n }, x = function(t) {
        var n;
        return n = t.querySelector("title"), [null != n ? n.textContent : void 0, V(t.querySelector("body")), e.get(t).token, "runScripts"] }, e = { get: function(e) {
            var t;
            return null == e && (e = document), { node: t = e.querySelector('meta[name="csrf-token"]'), token: null != t && "function" == typeof t.getAttribute ? t.getAttribute("content") : void 0 } }, update: function(e) {
            var t;
            if (t = this.get(), null != t.token && null != e && t.token !== e) return t.node.setAttribute("content", e) } }, g = function(e) {
        var t;
        return t = document.documentElement.cloneNode(), t.innerHTML = e, t.head = t.querySelector("head"), t.body = t.querySelector("body"), t }, n = function() {
        function e(t) {
            if (this.original = null != t ? t : document.location.href, this.original.constructor === e) return this.original;
            this._parse() }
        return e.prototype.withoutHash = function() {
            return this.href.replace(this.hash, "").replace("#", "") }, e.prototype.withoutHashForIE10compatibility = function() {
            return this.withoutHash() }, e.prototype.hasNoHash = function() {
            return 0 === this.hash.length }, e.prototype.crossOrigin = function() {
            return this.origin !== (new e).origin }, e.prototype._parse = function() {
            var e;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, e = this.link, this.href = e.href, this.protocol = e.protocol, this.host = e.host, this.hostname = e.hostname, this.port = e.port, this.pathname = e.pathname, this.search = e.search, this.hash = e.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href }, e }(), o = function(e) {
        function t(e) {
            if (this.link = e, this.link.constructor === t) return this.link;
            this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), t.__super__.constructor.apply(this, arguments) }
        return ie(t, e), t.HTML_EXTENSIONS = ["html"], t.allowExtensions = function() {
            var e, n, i, o;
            for (n = 1 <= arguments.length ? re.call(arguments, 0) : [], i = 0, o = n.length; i < o; i++) e = n[i], t.HTML_EXTENSIONS.push(e);
            return t.HTML_EXTENSIONS }, t.prototype.shouldIgnore = function() {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target() }, t.prototype._anchored = function() {
            return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash() }, t.prototype._nonHtml = function() {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + t.HTML_EXTENSIONS.join("|") + ")?$", "g")) }, t.prototype._optOut = function() {
            var e, t;
            for (t = this.originalElement; !e && t !== document;) e = null != t.getAttribute("data-no-turbolink"), t = t.parentNode;
            return e }, t.prototype._target = function() {
            return 0 !== this.link.target.length }, t }(n), t = function() {
        function e(e) { this.event = e, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (O(this.link.absolute) || ee(this.link.href), this.event.preventDefault())) }
        return e.installHandlerLast = function(t) {
            if (!t.defaultPrevented) return document.removeEventListener("click", e.handle, !1), document.addEventListener("click", e.handle, !1) }, e.handle = function(t) {
            return new e(t) }, e.prototype._extractLink = function() {
            var e;
            for (e = this.event.target; e.parentNode && "A" !== e.nodeName;) e = e.parentNode;
            if ("A" === e.nodeName && 0 !== e.href.length) return this.link = new o(e) }, e.prototype._validForTurbolinks = function() {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick()) }, e.prototype._nonStandardClick = function() {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey }, e }(), r = function() {
        function e(e) { this.elementSelector = e, this._trickle = ae(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install() }
        var t;
        return t = "turbolinks-progress-bar", e.prototype.install = function() {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(t), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle() }, e.prototype.uninstall = function() {
            return this.element.classList.remove(t), document.head.removeChild(this.styleElement) }, e.prototype.start = function() {
            return this.advanceTo(5) }, e.prototype.advanceTo = function(e) {
            var t;
            if (e > (t = this.value) && t <= 100) {
                if (this.value = e, this._updateStyle(), 100 === this.value) return this._stopTrickle();
                if (this.value > 0) return this._startTrickle() } }, e.prototype.done = function() {
            if (this.value > 0) return this.advanceTo(100), this._reset() }, e.prototype._reset = function() {
            var e;
            return e = this.opacity, setTimeout(function(e) {
                return function() {
                    return e.opacity = 0, e._updateStyle() } }(this), this.speed / 2), setTimeout(function(t) {
                return function() {
                    return t.value = 0, t.opacity = e, t._withSpeed(0, function() {
                        return t._updateStyle(!0) }) } }(this), this.speed) }, e.prototype._startTrickle = function() {
            if (!this.trickling) return this.trickling = !0, setTimeout(this._trickle, this.speed) }, e.prototype._stopTrickle = function() {
            return delete this.trickling }, e.prototype._trickle = function() {
            if (this.trickling) return this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed) }, e.prototype._withSpeed = function(e, t) {
            var n, i;
            return n = this.speed, this.speed = e, i = t(), this.speed = n, i }, e.prototype._updateStyle = function(e) {
            return null == e && (e = !1), e && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule() }, e.prototype._changeContentToForceRepaint = function() {
            return this.content = "" === this.content ? " " : "" }, e.prototype._createCSSRule = function() {
            return this.elementSelector + "." + t + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}" }, e }(), u = function(e) {
        return setTimeout(e, 500) }, N = function() {
        return document.addEventListener("DOMContentLoaded", function() {
            return J(i.CHANGE), J(i.UPDATE) }, !0) }, D = function() {
        if ("undefined" != typeof jQuery) return jQuery(document).on("ajaxSuccess", function(e, t) {
            if (jQuery.trim(t.responseText)) return J(i.UPDATE) }) }, A = function(e) {
        var t, i;
        if (null != (i = e.state) ? i.turbolinks : void 0) return (t = M[new n(e.state.url).absolute]) ? (d(), S(t)) : ee(e.target.location.href) }, k = function() {
        return z(), U(), document.addEventListener("click", t.installHandlerLast, !0), window.addEventListener("hashchange", function() {
            return z(), U() }, !1), u(function() {
            return window.addEventListener("popstate", A, !1) }) }, E = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && E, a = !navigator.userAgent.match(/CriOS\//), G = "GET" === (j = L("request_method")) || "" === j, c = l && a && G, s = document.addEventListener && document.createEvent, s && (N(), D()), c ? (ee = C, k()) : ee = function(e) {
        return document.location.href = e }, this.Turbolinks = { visit: ee, pagesCached: I, enableTransitionCache: w, enableProgressBar: b, allowLinkExtensions: o.allowExtensions, supported: c, EVENTS: p(i) } }.call(this),
    function(e) { "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.affix"),
                    r = "object" == typeof t && t;
                o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]() }) }
        var n = function(t, i) { this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
        n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = { offset: 0, target: window }, n.prototype.getState = function(e, t, n, i) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                a = this.$target.height();
            if (null != n && "top" == this.affixed) return o < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= e - i) && "bottom";
            var s = null == this.affixed,
                l = s ? o : r.top,
                c = s ? a : t;
            return null != n && o <= n ? "top" : null != i && l + c >= e - i && "bottom" }, n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var e = this.$target.scrollTop(),
                t = this.$element.offset();
            return this.pinnedOffset = t.top - e }, n.prototype.checkPositionWithEventLoop = function() { setTimeout(e.proxy(this.checkPosition, this), 1) }, n.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    i = this.options.offset,
                    o = i.top,
                    r = i.bottom,
                    a = Math.max(e(document).height(), e(document.body).height()); "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
                var s = this.getState(a, t, o, r);
                if (this.affixed != s) { null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (s ? "-" + s : ""),
                        c = e.Event(l + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == s && this.$element.offset({ top: a - t - r }) } };
        var i = e.fn.affix;
        e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
            return e.fn.affix = i, this }, e(window).on("load", function() { e('[data-spy="affix"]').each(function() {
                var n = e(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i) }) }) }(jQuery),
    function(e) { "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n) }) }
        var n = '[data-dismiss="alert"]',
            i = function(t) { e(t).on("click", n, this.close) };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
            function n() { a.detach().trigger("closed.bs.alert").remove() }
            var o = e(this),
                r = o.attr("data-target");
            r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var a = e(r);
            t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n()) };
        var o = e.fn.alert;
        e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
            return e.fn.alert = o, this }, e(document).on("click.bs.alert.data-api", n, i.prototype.close) }(jQuery),
    function(e) { "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.button"),
                    r = "object" == typeof t && t;
                o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t) }) }
        var n = function(t, i) { this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1 };
        n.VERSION = "3.3.5", n.DEFAULTS = { loadingText: "loading..." }, n.prototype.setState = function(t) {
            var n = "disabled",
                i = this.$element,
                o = i.is("input") ? "val" : "html",
                r = i.data();
            t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() { i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n)) }, this), 0) }, n.prototype.toggle = function() {
            var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var n = this.$element.find("input"); "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") };
        var i = e.fn.button;
        e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
            return e.fn.button = i, this }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = e(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) { e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type)) }) }(jQuery),
    function(e) { "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.carousel"),
                    r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                    a = "string" == typeof t ? t : r.slide;
                o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle() }) }
        var n = function(t, n) { this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this)) };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, n.prototype.keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return }
                e.preventDefault() } }, n.prototype.cycle = function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this }, n.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active) }, n.prototype.getItemForDirection = function(e, t) {
            var n = this.getItemIndex(t);
            if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
            var i = "prev" == e ? -1 : 1,
                o = (n + i) % this.$items.length;
            return this.$items.eq(o) }, n.prototype.to = function(e) {
            var t = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { t.to(e) }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e)) }, n.prototype.pause = function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, n.prototype.next = function() {
            if (!this.sliding) return this.slide("next") }, n.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev") }, n.prototype.slide = function(t, i) {
            var o = this.$element.find(".item.active"),
                r = i || this.getItemForDirection(t, o),
                a = this.interval,
                s = "next" == t ? "left" : "right",
                l = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var c = r[0],
                u = e.Event("slide.bs.carousel", { relatedTarget: c, direction: s });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, a && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active");
                    var d = e(this.$indicators.children()[this.getItemIndex(r)]);
                    d && d.addClass("active") }
                var f = e.Event("slid.bs.carousel", { relatedTarget: c, direction: s });
                return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() { r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(f) }, 0) }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this } };
        var i = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = i, this };
        var o = function(n) {
            var i, o = e(this),
                r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var a = e.extend({}, r.data(), o.data()),
                    s = o.attr("data-slide-to");
                s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault() } };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() { e('[data-ride="carousel"]').each(function() {
                var n = e(this);
                t.call(n, n.data()) }) }) }(jQuery),
    function(e) { "use strict";

        function t(t) {
            var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return e(i) }

        function n(t) {
            return this.each(function() {
                var n = e(this),
                    o = n.data("bs.collapse"),
                    r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);!o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]() }) }
        var i = function(t, n) { this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height" }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (t = o.data("bs.collapse")) && t.transitioning)) {
                    var r = e.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) { o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                        var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var s = function() { this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                        if (!e.support.transition) return s.call(this);
                        var l = e.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l]) } } } }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                    if (!e.support.transition) return o.call(this);
                    this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) } } }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, i.prototype.getParent = function() {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
                var o = e(i);
                this.addAriaAndCollapsedClass(t(o), o) }, this)).end() }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
            var n = e.hasClass("in");
            e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n) };
        var o = e.fn.collapse;
        e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = o, this }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var o = e(this);
            o.attr("data-target") || i.preventDefault();
            var r = t(o),
                a = r.data("bs.collapse"),
                s = a ? "toggle" : o.data();
            n.call(r, s) }) }(jQuery),
    function(e) { "use strict";

        function t(t) {
            var n = t.attr("data-target");
            n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && e(n);
            return i && i.length ? i : t.parent() }

        function n(n) { n && 3 === n.which || (e(o).remove(), e(r).each(function() {
                var i = e(this),
                    o = t(i),
                    r = { relatedTarget: this };
                o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r)))) })) }

        function i(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n) }) }
        var o = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            a = function(t) { e(t).on("click.bs.dropdown", this.toggle) };
        a.VERSION = "3.3.5", a.prototype.toggle = function(i) {
            var o = e(this);
            if (!o.is(".disabled, :disabled")) {
                var r = t(o),
                    a = r.hasClass("open");
                if (n(), !a) { "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                    var s = { relatedTarget: this };
                    if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", s) }
                return !1 } }, a.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = e(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var o = t(i),
                        a = o.hasClass("open");
                    if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                    var s = " li:not(.disabled):visible a",
                        l = o.find(".dropdown-menu" + s);
                    if (l.length) {
                        var c = l.index(n.target);
                        38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus") } } } };
        var s = e.fn.dropdown;
        e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = s, this }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) { e.stopPropagation() }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown) }(jQuery),
    function(e) { "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]() }) }
        var n = function(t) { this.element = e(t) };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
            if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var o = n.find(".active:last a"),
                    r = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
                    a = e.Event("show.bs.tab", { relatedTarget: o[0] });
                if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var s = e(i);
                    this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() { o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] }) }) } } }, n.prototype.activate = function(t, i, o) {
            function r() { a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o() }
            var a = i.find("> .active"),
                s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
            a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in") };
        var i = e.fn.tab;
        e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
            return e.fn.tab = i, this };
        var o = function(n) { n.preventDefault(), t.call(e(this), "show") };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o) }(jQuery),
    function(e) { "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var n in t)
                if (e.style[n] !== undefined) return { end: t[n] };
            return !1 }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one("bsTransitionEnd", function() { n = !0 });
            var o = function() { n || e(i).trigger(e.support.transition.end) };
            return setTimeout(o, t), this }, e(function() { e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = { bindType: e.support.transition.end, delegateType: e.support.transition.end, handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }) }) }(jQuery),
    function(e) {
        "use strict";

        function t(n, i) { this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process() }

        function n(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]() }) }
        t.VERSION = "3.3.5", t.DEFAULTS = { offset: 10 }, t.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, t.prototype.refresh = function() {
                var t = this,
                    n = "offset",
                    i = 0;
                this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                    var t = e(this),
                        o = t.data("target") || t.attr("href"),
                        r = /^#./.test(o) && e(o);
                    return r && r.length && r.is(":visible") && [
                        [r[n]().top + i, o]
                    ] || null }).sort(function(e, t) {
                    return e[0] - t[0] }).each(function() { t.offsets.push(this[0]), t.targets.push(this[1]) }) }, t.prototype.process = function() {
                var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                    n = this.getScrollHeight(),
                    i = this.options.offset + n - this.$scrollElement.height(),
                    o = this.offsets,
                    r = this.targets,
                    a = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
                if (a && t < o[0]) return this.activeTarget = null, this.clear();
                for (e = o.length; e--;) a != r[e] && t >= o[e] && (o[e + 1] === undefined || t < o[e + 1]) && this.activate(r[e]) },
            t.prototype.activate = function(t) { this.activeTarget = t, this.clear();
                var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                    i = e(n).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy") }, t.prototype.clear = function() { e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
        var i = e.fn.scrollspy;
        e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = i, this }, e(window).on("load.bs.scrollspy.data-api", function() { e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                n.call(t, t.data()) }) })
    }(jQuery),
    function(e) { "use strict";

        function t(t, i) {
            return this.each(function() {
                var o = e(this),
                    r = o.data("bs.modal"),
                    a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
                r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i) }) }
        var n = function(t, n) { this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, n.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e) }, n.prototype.show = function(t) {
            var i = this,
                o = e.Event("show.bs.modal", { relatedTarget: t });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { i.$element.one("mouseup.dismiss.bs.modal", function(t) { e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
                var o = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var r = e.Event("shown.bs.modal", { relatedTarget: t });
                o ? i.$dialog.one("bsTransitionEnd", function() { i.$element.trigger("focus").trigger(r) }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r) })) }, n.prototype.hide = function(t) { t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal()) }, n.prototype.enforceFocus = function() { e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) { this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus") }, this)) }, n.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) { 27 == e.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, n.prototype.resize = function() { this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal") }, n.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() { e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal") }) }, n.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, n.prototype.backdrop = function(t) {
            var i = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && o;
                if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                        if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()) }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in");
                var a = function() { i.removeBackdrop(), t && t() };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a() } else t && t() }, n.prototype.handleUpdate = function() { this.adjustDialog() }, n.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({ paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "" }) }, n.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, n.prototype.checkScrollbar = function() {
            var e = window.innerWidth;
            if (!e) {
                var t = document.documentElement.getBoundingClientRect();
                e = t.right - Math.abs(t.left) }
            this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar() }, n.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth) }, n.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, n.prototype.measureScrollbar = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t };
        var i = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
            return e.fn.modal = i, this }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = e(this),
                o = i.attr("href"),
                r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                a = r.data("bs.modal") ? "toggle" : e.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
            i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) { e.isDefaultPrevented() || r.one("hidden.bs.modal", function() { i.is(":visible") && i.trigger("focus") }) }), t.call(r, a, this) }) }(jQuery),
    function(e) { "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.tooltip"),
                    r = "object" == typeof t && t;!o && /destroy|hide/.test(t) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]()) }) }
        var n = function(e, t) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t) };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, n.prototype.init = function(t, n, i) {
            if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                var a = o[r];
                if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != a) {
                    var s = "hover" == a ? "mouseenter" : "focusin",
                        l = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this)) } }
            this.options.selector ? this._options = e.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, n.prototype.getDefaults = function() {
            return n.DEFAULTS }, n.prototype.getOptions = function(t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t }, n.prototype.getDelegateOptions = function() {
            var t = {},
                n = this.getDefaults();
            return this._options && e.each(this._options, function(e, i) { n[e] != i && (t[e] = i) }), t }, n.prototype.enter = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() { "in" == n.hoverState && n.show() }, n.options.delay.show)) : n.show()) }, n.prototype.isInStateTrue = function() {
            for (var e in this.inState)
                if (this.inState[e]) return !0;
            return !1 }, n.prototype.leave = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout(function() { "out" == n.hoverState && n.hide() }, n.options.delay.hide) } }, n.prototype.show = function() {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) { this.$element.trigger(t);
                var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !i) return;
                var o = this,
                    r = this.tip(),
                    a = this.getUID(this.type);
                this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(s);
                c && (s = s.replace(l, "") || "top"), r.detach().css({ top: 0, left: 0, display: "block" }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(),
                    d = r[0].offsetWidth,
                    f = r[0].offsetHeight;
                if (c) {
                    var h = s,
                        p = this.getPosition(this.$viewport);
                    s = "bottom" == s && u.bottom + f > p.bottom ? "top" : "top" == s && u.top - f < p.top ? "bottom" : "right" == s && u.right + d > p.width ? "left" : "left" == s && u.left - d < p.left ? "right" : s, r.removeClass(h).addClass(s) }
                var m = this.getCalculatedOffset(s, u, d, f);
                this.applyPlacement(m, s);
                var g = function() {
                    var e = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o) };
                e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g() } }, n.prototype.applyPlacement = function(t, n) {
            var i = this.tip(),
                o = i[0].offsetWidth,
                r = i[0].offsetHeight,
                a = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({ using: function(e) { i.css({ top: Math.round(e.top), left: Math.round(e.left) }) } }, t), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                c = i[0].offsetHeight; "top" == n && c != r && (t.top = t.top + r - c);
            var u = this.getViewportAdjustedDelta(n, t, l, c);
            u.left ? t.left += u.left : t.top += u.top;
            var d = /top|bottom/.test(n),
                f = d ? 2 * u.left - o + l : 2 * u.top - r + c,
                h = d ? "offsetWidth" : "offsetHeight";
            i.offset(t), this.replaceArrow(f, i[0][h], d) }, n.prototype.replaceArrow = function(e, t, n) { this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "") }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right") }, n.prototype.hide = function(t) {
            function i() { "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t() }
            var o = this,
                r = e(this.$tip),
                a = e.Event("hide.bs." + this.type);
            if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this }, n.prototype.fixTitle = function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "") }, n.prototype.hasContent = function() {
            return this.getTitle() }, n.prototype.getPosition = function(t) { t = t || this.$element;
            var n = t[0],
                i = "BODY" == n.tagName,
                o = n.getBoundingClientRect();
            null == o.width && (o = e.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
            var r = i ? { top: 0, left: 0 } : t.offset(),
                a = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
                s = i ? { width: e(window).width(), height: e(window).height() } : null;
            return e.extend({}, o, a, s, r) }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
            return "bottom" == e ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 } : "top" == e ? { top: t.top - i, left: t.left + t.width / 2 - n / 2 } : "left" == e ? { top: t.top + t.height / 2 - i / 2, left: t.left - n } : { top: t.top + t.height / 2 - i / 2, left: t.left + t.width } }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
            var o = { top: 0, left: 0 };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var s = t.top - r - a.scroll,
                    l = t.top + r - a.scroll + i;
                s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l) } else {
                var c = t.left - r,
                    u = t.left + r + n;
                c < a.left ? o.left = a.left - c : u > a.right && (o.left = a.left + a.width - u) }
            return o }, n.prototype.getTitle = function() {
            var e = this.$element,
                t = this.options;
            return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title) }, n.prototype.getUID = function(e) { do { e += ~~(1e6 * Math.random()) } while (document.getElementById(e));
            return e }, n.prototype.tip = function() {
            if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, n.prototype.enable = function() { this.enabled = !0 }, n.prototype.disable = function() { this.enabled = !1 }, n.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, n.prototype.toggle = function(t) {
            var n = this;
            t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n) }, n.prototype.destroy = function() {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() { e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null }) };
        var i = e.fn.tooltip;
        e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = i, this } }(jQuery),
    function(e) { "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.popover"),
                    r = "object" == typeof t && t;!o && /destroy|hide/.test(t) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]()) }) }
        var n = function(e, t) { this.init("popover", e, t) };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.5", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
            return n.DEFAULTS }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide() }, n.prototype.hasContent = function() {
            return this.getTitle() || this.getContent() }, n.prototype.getContent = function() {
            var e = this.$element,
                t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content) }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow") };
        var i = e.fn.popover;
        e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
            return e.fn.popover = i, this } }(jQuery),
    function(e) {
        var t = function(t, n) {
            if (this.$element = e(t), this.type = this.$element.data("uploadtype") || (this.$element.find(".thumbnail").length > 0 ? "image" : "file"), this.$input = this.$element.find(":file"), 0 !== this.$input.length) { this.name = this.$input.attr("name") || n.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), 0 === this.$hidden.length && (this.$hidden = e('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileupload-preview");
                var i = this.$preview.css("height"); "inline" != this.$preview.css("display") && "0px" != i && "none" != i && this.$preview.css("line-height", i), this.original = { exists: this.$element.hasClass("fileupload-exists"), preview: this.$preview.html(), hiddenVal: this.$hidden.val() }, this.$remove = this.$element.find('[data-dismiss="fileupload"]'), this.$element.find('[data-trigger="fileupload"]').on("click.fileupload", e.proxy(this.trigger, this)), this.listen() } };
        t.prototype = { listen: function() { this.$input.on("change.fileupload", e.proxy(this.change, this)), e(this.$input[0].form).on("reset.fileupload", e.proxy(this.reset, this)), this.$remove && this.$remove.on("click.fileupload", e.proxy(this.clear, this)) }, change: function(e, t) {
                if ("clear" !== t) {
                    var n = e.target.files !== undefined ? e.target.files[0] : e.target.value ? { name: e.target.value.replace(/^.+\\/, "") } : null;
                    if (!n) return void this.clear();
                    if (this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name), "image" === this.type && this.$preview.length > 0 && ("undefined" != typeof n.type ? n.type.match("image.*") : n.name.match(/\.(gif|png|jpe?g)$/i)) && "undefined" != typeof FileReader) {
                        var i = new FileReader,
                            o = this.$preview,
                            r = this.$element;
                        i.onload = function(e) { o.html('<img src="' + e.target.result + '" ' + ("none" != o.css("max-height") ? 'style="max-height: ' + o.css("max-height") + ';"' : "") + " />"), r.addClass("fileupload-exists").removeClass("fileupload-new") }, i.readAsDataURL(n) } else this.$preview.text(n.name), this.$element.addClass("fileupload-exists").removeClass("fileupload-new") } }, clear: function(e) {
                if (this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", ""), navigator.userAgent.match(/msie/i)) {
                    var t = this.$input.clone(!0);
                    this.$input.after(t), this.$input.remove(), this.$input = t } else this.$input.val("");
                this.$preview.html(""), this.$element.addClass("fileupload-new").removeClass("fileupload-exists"), e && (this.$input.trigger("change", ["clear"]), e.preventDefault()) }, reset: function() { this.clear(), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.original.exists ? this.$element.addClass("fileupload-exists").removeClass("fileupload-new") : this.$element.addClass("fileupload-new").removeClass("fileupload-exists") }, trigger: function(e) { this.$input.trigger("click"), e.preventDefault() } }, e.fn.fileupload = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("fileupload");
                o || i.data("fileupload", o = new t(this, n)), "string" == typeof n && o[n]() }) }, e.fn.fileupload.Constructor = t, e(document).on("click.fileupload.data-api", '[data-provides="fileupload"]', function(t) {
            var n = e(this);
            if (!n.data("fileupload")) { n.fileupload(n.data());
                var i = e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');
                i.length > 0 && (i.trigger("click.fileupload"), t.preventDefault()) } }) }(window.jQuery), Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get && function() {
        var e = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
        Object.defineProperty(Element.prototype, "textContent", { get: function() {
                return e.get.call(this) }, set: function(t) {
                return e.set.call(this, t) } }) }(), Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e) });
var wysihtml5 = { version: "0.4.13", commands: {}, dom: {}, quirks: {}, toolbar: {}, lang: {}, selection: {}, views: {}, INVISIBLE_SPACE: "\ufeff", EMPTY_FUNCTION: function() {}, ELEMENT_NODE: 1, TEXT_NODE: 3, BACKSPACE_KEY: 8, ENTER_KEY: 13, ESCAPE_KEY: 27, SPACE_KEY: 32, DELETE_KEY: 46 };
! function(e, t) { "function" == typeof define && define.amd ? define(e) : t.rangy = e() }(function() {
    function e(e, t) {
        var n = typeof e[t];
        return n == v || !(n != y || !e[t]) || "unknown" == n }

    function t(e, t) {
        return !(typeof e[t] != y || !e[t]) }

    function n(e, t) {
        return typeof e[t] != b }

    function i(e) {
        return function(t, n) {
            for (var i = n.length; i--;)
                if (!e(t, n[i])) return !1;
            return !0 } }

    function o(e) {
        return e && S(e, C) && E(e, x) }

    function r(e) {
        return t(e, "body") ? e.body : e.getElementsByTagName("body")[0] }

    function a(n) { t(window, "console") && e(window.console, "log") && window.console.log(n) }

    function s(e, t) { t ? window.alert(e) : a(e) }

    function l(e) { N.initialized = !0, N.supported = !1, s("Rangy is not supported on this page in your browser. Reason: " + e, N.config.alertOnFail) }

    function c(e) { s("Rangy warning: " + e, N.config.alertOnWarn) }

    function u(e) {
        return e.message || e.description || String(e) }

    function d() {
        if (!N.initialized) {
            var t, n = !1,
                i = !1;
            e(document, "createRange") && (t = document.createRange(), S(t, _) && E(t, w) && (n = !0));
            var s = r(document);
            if (!s || "body" != s.nodeName.toLowerCase()) return void l("No body element found");
            if (s && e(s, "createTextRange") && (t = s.createTextRange(), o(t) && (i = !0)), !n && !i) return void l("Neither Range nor TextRange are available");
            N.initialized = !0, N.features = { implementsDomRange: n, implementsTextRange: i };
            var c, d;
            for (var f in k)(c = k[f]) instanceof h && c.init(c, N);
            for (var p = 0, m = D.length; p < m; ++p) try { D[p](N) } catch (e) { d = "Rangy init listener threw an exception. Continuing. Detail: " + u(e), a(d) } } }

    function f(e) { e = e || window, d();
        for (var t = 0, n = R.length; t < n; ++t) R[t](e) }

    function h(e, t, n) { this.name = e, this.dependencies = t, this.initialized = !1, this.supported = !1, this.initializer = n }

    function p(e, t, n, i) {
        var o = new h(t, n, function(e) {
            if (!e.initialized) { e.initialized = !0;
                try { i(N, e), e.supported = !0 } catch (e) {
                    var n = "Module '" + t + "' failed to load: " + u(e);
                    a(n) } } });
        k[t] = o }

    function m() {}

    function g() {}
    var y = "object",
        v = "function",
        b = "undefined",
        w = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
        _ = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore", "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents", "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"],
        x = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"],
        C = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select", "setEndPoint", "getBoundingClientRect"],
        S = i(e),
        T = i(t),
        E = i(n),
        k = {},
        N = { version: "1.3alpha.20140804", initialized: !1, supported: !0, util: { isHostMethod: e, isHostObject: t, isHostProperty: n, areHostMethods: S, areHostObjects: T, areHostProperties: E, isTextRange: o, getBody: r }, features: {}, modules: k, config: { alertOnFail: !0, alertOnWarn: !1, preferTextRange: !1, autoInitialize: typeof rangyAutoInitialize == b || rangyAutoInitialize } };
    N.fail = l, N.warn = c, !{}.hasOwnProperty ? l("hasOwnProperty not supported") : N.util.extend = function(e, t, n) {
            var i, o;
            for (var r in t) t.hasOwnProperty(r) && (i = e[r], o = t[r], n && null !== i && "object" == typeof i && null !== o && "object" == typeof o && N.util.extend(i, o, !0), e[r] = o);
            return t.hasOwnProperty("toString") && (e.toString = t.toString), e },
        function() {
            var e = document.createElement("div");
            e.appendChild(document.createElement("span"));
            var t, n = [].slice;
            try { 1 == n.call(e.childNodes, 0)[0].nodeType && (t = function(e) {
                    return n.call(e, 0) }) } catch (e) {}
            t || (t = function(e) {
                for (var t = [], n = 0, i = e.length; n < i; ++n) t[n] = e[n];
                return t }), N.util.toArray = t }();
    var A;
    e(document, "addEventListener") ? A = function(e, t, n) { e.addEventListener(t, n, !1) } : e(document, "attachEvent") ? A = function(e, t, n) { e.attachEvent("on" + t, n) } : l("Document does not have required addEventListener or attachEvent method"), N.util.addListener = A;
    var D = [];
    N.init = d, N.addInitListener = function(e) { N.initialized ? e(N) : D.push(e) };
    var R = [];
    N.addShimListener = function(e) { R.push(e) }, N.shim = N.createMissingNativeApi = f, h.prototype = { init: function() {
            for (var e, t, n = this.dependencies || [], i = 0, o = n.length; i < o; ++i) {
                if (t = n[i], !((e = k[t]) && e instanceof h)) throw new Error("required module '" + t + "' not found");
                if (e.init(), !e.supported) throw new Error("required module '" + t + "' not supported") }
            this.initializer(this) }, fail: function(e) {
            throw this.initialized = !0, this.supported = !1, new Error("Module '" + this.name + "' failed to load: " + e) }, warn: function(e) { N.warn("Module " + this.name + ": " + e) }, deprecationNotice: function(e, t) { N.warn("DEPRECATED: " + e + " in module " + this.name + "is deprecated. Please use " + t + " instead") }, createError: function(e) {
            return new Error("Error in Rangy " + this.name + " module: " + e) } }, N.createModule = function(e) {
        var t, n;
        2 == arguments.length ? (t = arguments[1], n = []) : (t = arguments[2], n = arguments[1]);
        var i = p(!1, e, n, t);
        N.initialized && i.init() }, N.createCoreModule = function(e, t, n) { p(!0, e, t, n) }, N.RangePrototype = m, N.rangePrototype = new m, N.selectionPrototype = new g;
    var $ = !1,
        M = function() { $ || ($ = !0, !N.initialized && N.config.autoInitialize && d()) };
    return typeof window == b ? void l("No window found") : typeof document == b ? void l("No document found") : (e(document, "addEventListener") && document.addEventListener("DOMContentLoaded", M, !1), A(window, "load", M), N.createCoreModule("DomUtil", [], function(e, t) {
        function n(e) {
            var t;
            return typeof e.namespaceURI == A || null === (t = e.namespaceURI) || "http://www.w3.org/1999/xhtml" == t }

        function i(e) {
            var t = e.parentNode;
            return 1 == t.nodeType ? t : null }

        function o(e) {
            for (var t = 0; e = e.previousSibling;) ++t;
            return t }

        function r(e) {
            switch (e.nodeType) {
                case 7:
                case 10:
                    return 0;
                case 3:
                case 8:
                    return e.length;
                default:
                    return e.childNodes.length } }

        function a(e, t) {
            var n, i = [];
            for (n = e; n; n = n.parentNode) i.push(n);
            for (n = t; n; n = n.parentNode)
                if (M(i, n)) return n;
            return null }

        function s(e, t, n) {
            for (var i = n ? t : t.parentNode; i;) {
                if (i === e) return !0;
                i = i.parentNode }
            return !1 }

        function l(e, t) {
            return s(e, t, !0) }

        function c(e, t, n) {
            for (var i, o = n ? e : e.parentNode; o;) {
                if ((i = o.parentNode) === t) return o;
                o = i }
            return null }

        function u(e) {
            var t = e.nodeType;
            return 3 == t || 4 == t || 8 == t }

        function d(e) {
            if (!e) return !1;
            var t = e.nodeType;
            return 3 == t || 8 == t }

        function f(e, t) {
            var n = t.nextSibling,
                i = t.parentNode;
            return n ? i.insertBefore(e, n) : i.appendChild(e), e }

        function h(e, t, n) {
            var i = e.cloneNode(!1);
            if (i.deleteData(0, t), e.deleteData(t, e.length - t), f(i, e), n)
                for (var r, a = 0; r = n[a++];) r.node == e && r.offset > t ? (r.node = i, r.offset -= t) : r.node == e.parentNode && r.offset > o(e) && ++r.offset;
            return i }

        function p(e) {
            if (9 == e.nodeType) return e;
            if (typeof e.ownerDocument != A) return e.ownerDocument;
            if (typeof e.document != A) return e.document;
            if (e.parentNode) return p(e.parentNode);
            throw t.createError("getDocument: no document found for node") }

        function m(e) {
            var n = p(e);
            if (typeof n.defaultView != A) return n.defaultView;
            if (typeof n.parentWindow != A) return n.parentWindow;
            throw t.createError("Cannot get a window object for node") }

        function g(e) {
            if (typeof e.contentDocument != A) return e.contentDocument;
            if (typeof e.contentWindow != A) return e.contentWindow.document;
            throw t.createError("getIframeDocument: No Document object found for iframe element") }

        function y(e) {
            if (typeof e.contentWindow != A) return e.contentWindow;
            if (typeof e.contentDocument != A) return e.contentDocument.defaultView;
            throw t.createError("getIframeWindow: No Window object found for iframe element") }

        function v(e) {
            return e && D.isHostMethod(e, "setTimeout") && D.isHostObject(e, "document") }

        function b(e, t, n) {
            var i;
            if (e ? D.isHostProperty(e, "nodeType") ? i = 1 == e.nodeType && "iframe" == e.tagName.toLowerCase() ? g(e) : p(e) : v(e) && (i = e.document) : i = document, !i) throw t.createError(n + "(): Parameter must be a Window object or DOM node");
            return i }

        function w(e) {
            for (var t; t = e.parentNode;) e = t;
            return e }

        function _(e, n, i, r) {
            var s, l, u, d, f;
            if (e == i) return n === r ? 0 : n < r ? -1 : 1;
            if (s = c(i, e, !0)) return n <= o(s) ? -1 : 1;
            if (s = c(e, i, !0)) return o(s) < r ? -1 : 1;
            if (!(l = a(e, i))) throw new Error("comparePoints error: nodes have no common ancestor");
            if (u = e === l ? l : c(e, l, !0), d = i === l ? l : c(i, l, !0), u === d) throw t.createError("comparePoints got to case 4 and childA and childB are the same!");
            for (f = l.firstChild; f;) {
                if (f === u) return -1;
                if (f === d) return 1;
                f = f.nextSibling } }

        function x(e) {
            try {
                return e.parentNode, !1 } catch (e) {
                return !0 } }

        function C(e) {
            if (!e) return "[No node]";
            if (O && x(e)) return "[Broken node]";
            if (u(e)) return '"' + e.data + '"';
            if (1 == e.nodeType) {
                var t = e.id ? ' id="' + e.id + '"' : "";
                return "<" + e.nodeName + t + ">[index:" + o(e) + ",length:" + e.childNodes.length + "][" + (e.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]" }
            return e.nodeName }

        function S(e) {
            for (var t, n = p(e).createDocumentFragment(); t = e.firstChild;) n.appendChild(t);
            return n }

        function T(e) { this.root = e, this._next = e }

        function E(e) {
            return new T(e) }

        function k(e, t) { this.node = e, this.offset = t }

        function N(e) { this.code = this[e], this.codeName = e, this.message = "DOMException: " + this.codeName }
        var A = "undefined",
            D = e.util;
        D.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"]) || t.fail("document missing a Node creation method"), D.isHostMethod(document, "getElementsByTagName") || t.fail("document missing getElementsByTagName method");
        var R = document.createElement("div");
        D.areHostMethods(R, ["insertBefore", "appendChild", "cloneNode"] || !D.areHostObjects(R, ["previousSibling", "nextSibling", "childNodes", "parentNode"])) || t.fail("Incomplete Element implementation"), D.isHostProperty(R, "innerHTML") || t.fail("Element is missing innerHTML property");
        var $ = document.createTextNode("test");
        D.areHostMethods($, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] || !D.areHostObjects(R, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) || !D.areHostProperties($, ["data"])) || t.fail("Incomplete Text Node implementation");
        var M = function(e, t) {
                for (var n = e.length; n--;)
                    if (e[n] === t) return !0;
                return !1 },
            O = !1;! function() {
            var t = document.createElement("b");
            t.innerHTML = "1";
            var n = t.firstChild;
            t.innerHTML = "<br>", O = x(n), e.features.crashyTextNodes = O }();
        var I;
        typeof window.getComputedStyle != A ? I = function(e, t) {
            return m(e).getComputedStyle(e, null)[t] } : typeof document.documentElement.currentStyle != A ? I = function(e, t) {
            return e.currentStyle[t] } : t.fail("No means of obtaining computed style properties found"), T.prototype = { _current: null, hasNext: function() {
                return !!this._next }, next: function() {
                var e, t, n = this._current = this._next;
                if (this._current)
                    if (e = n.firstChild) this._next = e;
                    else {
                        for (t = null; n !== this.root && !(t = n.nextSibling);) n = n.parentNode;
                        this._next = t }
                return this._current }, detach: function() { this._current = this._next = this.root = null } }, k.prototype = { equals: function(e) {
                return !!e && this.node === e.node && this.offset == e.offset }, inspect: function() {
                return "[DomPosition(" + C(this.node) + ":" + this.offset + ")]" }, toString: function() {
                return this.inspect() } }, N.prototype = { INDEX_SIZE_ERR: 1, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INVALID_STATE_ERR: 11, INVALID_NODE_TYPE_ERR: 24 }, N.prototype.toString = function() {
            return this.message }, e.dom = { arrayContains: M, isHtmlNamespace: n, parentElement: i, getNodeIndex: o, getNodeLength: r, getCommonAncestor: a, isAncestorOf: s, isOrIsAncestorOf: l, getClosestAncestorIn: c, isCharacterDataNode: u, isTextOrCommentNode: d, insertAfter: f, splitDataNode: h, getDocument: p, getWindow: m, getIframeWindow: y, getIframeDocument: g, getBody: D.getBody, isWindow: v, getContentDocument: b, getRootContainer: w, comparePoints: _, isBrokenNode: x, inspectNode: C, getComputedStyleProperty: I, fragmentFromNodeChildren: S, createIterator: E, DomPosition: k }, e.DOMException = N }), N.createCoreModule("DomRange", ["DomUtil"], function(e) {
        function t(e, t) {
            return 3 != e.nodeType && (j(e, t.startContainer) || j(e, t.endContainer)) }

        function n(e) {
            return e.document || F(e.startContainer) }

        function i(e) {
            return new L(e.parentNode, B(e)) }

        function o(e) {
            return new L(e.parentNode, B(e) + 1) }

        function r(e, t, n) {
            var i = 11 == e.nodeType ? e.firstChild : e;
            return H(t) ? n == t.length ? O.insertAfter(e, t) : t.parentNode.insertBefore(e, 0 == n ? t : q(t, n)) : n >= t.childNodes.length ? t.appendChild(e) : t.insertBefore(e, t.childNodes[n]), i
        }

        function a(e, t, i) {
            if (S(e), S(t), n(t) != n(e)) throw new P("WRONG_DOCUMENT_ERR");
            var o = W(e.startContainer, e.startOffset, t.endContainer, t.endOffset),
                r = W(e.endContainer, e.endOffset, t.startContainer, t.startOffset);
            return i ? o <= 0 && r >= 0 : o < 0 && r > 0 }

        function s(e) {
            for (var t, i, o, r = n(e.range).createDocumentFragment(); i = e.next();) {
                if (t = e.isPartiallySelectedSubtree(), i = i.cloneNode(!t), t && (o = e.getSubtreeIterator(), i.appendChild(s(o)), o.detach()), 10 == i.nodeType) throw new P("HIERARCHY_REQUEST_ERR");
                r.appendChild(i) }
            return r }

        function l(e, t, n) {
            var i, o;
            n = n || { stop: !1 };
            for (var r, a; r = e.next();)
                if (e.isPartiallySelectedSubtree()) {
                    if (!1 === t(r)) return void(n.stop = !0);
                    if (a = e.getSubtreeIterator(), l(a, t, n), a.detach(), n.stop) return } else
                    for (i = O.createIterator(r); o = i.next();)
                        if (!1 === t(o)) return void(n.stop = !0) }

        function c(e) {
            for (var t; e.next();) e.isPartiallySelectedSubtree() ? (t = e.getSubtreeIterator(), c(t), t.detach()) : e.remove() }

        function u(e) {
            for (var t, i, o = n(e.range).createDocumentFragment(); t = e.next();) {
                if (e.isPartiallySelectedSubtree() ? (t = t.cloneNode(!1), i = e.getSubtreeIterator(), t.appendChild(u(i)), i.detach()) : e.remove(), 10 == t.nodeType) throw new P("HIERARCHY_REQUEST_ERR");
                o.appendChild(t) }
            return o }

        function d(e, t, n) {
            var i, o = !(!t || !t.length),
                r = !!n;
            o && (i = new RegExp("^(" + t.join("|") + ")$"));
            var a = [];
            return l(new h(e, !1), function(t) {
                if ((!o || i.test(t.nodeType)) && (!r || n(t))) {
                    var s = e.startContainer;
                    if (t != s || !H(s) || e.startOffset != s.length) {
                        var l = e.endContainer;
                        t == l && H(l) && 0 == e.endOffset || a.push(t) } } }), a }

        function f(e) {
            return "[" + ("undefined" == typeof e.getName ? "Range" : e.getName()) + "(" + O.inspectNode(e.startContainer) + ":" + e.startOffset + ", " + O.inspectNode(e.endContainer) + ":" + e.endOffset + ")]" }

        function h(e, t) {
            if (this.range = e, this.clonePartiallySelectedTextNodes = t, !e.collapsed) { this.sc = e.startContainer, this.so = e.startOffset, this.ec = e.endContainer, this.eo = e.endOffset;
                var n = e.commonAncestorContainer;
                this.sc === this.ec && H(this.sc) ? (this.isSingleCharacterDataNode = !0, this._first = this._last = this._next = this.sc) : (this._first = this._next = this.sc !== n || H(this.sc) ? U(this.sc, n, !0) : this.sc.childNodes[this.so], this._last = this.ec !== n || H(this.ec) ? U(this.ec, n, !0) : this.ec.childNodes[this.eo - 1]) } }

        function p(e) {
            return function(t, n) {
                for (var i, o = n ? t : t.parentNode; o;) {
                    if (i = o.nodeType, Y(e, i)) return o;
                    o = o.parentNode }
                return null } }

        function m(e, t) {
            if (ne(e, t)) throw new P("INVALID_NODE_TYPE_ERR") }

        function g(e, t) {
            if (!Y(t, e.nodeType)) throw new P("INVALID_NODE_TYPE_ERR") }

        function y(e, t) {
            if (t < 0 || t > (H(e) ? e.length : e.childNodes.length)) throw new P("INDEX_SIZE_ERR") }

        function v(e, t) {
            if (ee(e, !0) !== ee(t, !0)) throw new P("WRONG_DOCUMENT_ERR") }

        function b(e) {
            if (te(e, !0)) throw new P("NO_MODIFICATION_ALLOWED_ERR") }

        function w(e, t) {
            if (!e) throw new P(t) }

        function _(e) {
            return G && O.isBrokenNode(e) || !Y(K, e.nodeType) && !ee(e, !0) }

        function x(e, t) {
            return t <= (H(e) ? e.length : e.childNodes.length) }

        function C(e) {
            return !!e.startContainer && !!e.endContainer && !_(e.startContainer) && !_(e.endContainer) && x(e.startContainer, e.startOffset) && x(e.endContainer, e.endOffset) }

        function S(e) {
            if (!C(e)) throw new Error("Range error: Range is no longer valid after DOM mutation (" + e.inspect() + ")") }

        function T(e, t) { S(e);
            var n = e.startContainer,
                i = e.startOffset,
                o = e.endContainer,
                r = e.endOffset,
                a = n === o;
            H(o) && r > 0 && r < o.length && q(o, r, t), H(n) && i > 0 && i < n.length && (n = q(n, i, t), a ? (r -= i, o = n) : o == n.parentNode && r >= B(n) && r++, i = 0), e.setStartAndEnd(n, i, o, r) }

        function E(e) { S(e);
            var t = e.commonAncestorContainer.parentNode.cloneNode(!1);
            return t.appendChild(e.cloneContents()), t.innerHTML }

        function k(e) { e.START_TO_START = se, e.START_TO_END = le, e.END_TO_END = ce, e.END_TO_START = ue, e.NODE_BEFORE = de, e.NODE_AFTER = fe, e.NODE_BEFORE_AND_AFTER = he, e.NODE_INSIDE = pe }

        function N(e) { k(e), k(e.prototype) }

        function A(e, t) {
            return function() { S(this);
                var n, i, r = this.startContainer,
                    a = this.startOffset,
                    s = this.commonAncestorContainer,
                    c = new h(this, !0);
                r !== s && (n = U(r, s, !0), i = o(n), r = i.node, a = i.offset), l(c, b), c.reset();
                var u = e(c);
                return c.detach(), t(this, r, a, r, a), u } }

        function D(n, r) {
            function a(e, t) {
                return function(n) { g(n, X), g(V(n), K);
                    var r = (e ? i : o)(n);
                    (t ? s : l)(this, r.node, r.offset) } }

            function s(e, t, n) {
                var i = e.endContainer,
                    o = e.endOffset;
                t === e.startContainer && n === e.startOffset || (V(t) == V(i) && 1 != W(t, n, i, o) || (i = t, o = n), r(e, t, n, i, o)) }

            function l(e, t, n) {
                var i = e.startContainer,
                    o = e.startOffset;
                t === e.endContainer && n === e.endOffset || (V(t) == V(i) && -1 != W(t, n, i, o) || (i = t, o = n), r(e, i, o, t, n)) }
            var d = function() {};
            d.prototype = e.rangePrototype, n.prototype = new d, I.extend(n.prototype, { setStart: function(e, t) { m(e, !0), y(e, t), s(this, e, t) }, setEnd: function(e, t) { m(e, !0), y(e, t), l(this, e, t) }, setStartAndEnd: function() {
                    var e = arguments,
                        t = e[0],
                        n = e[1],
                        i = t,
                        o = n;
                    switch (e.length) {
                        case 3:
                            o = e[2];
                            break;
                        case 4:
                            i = e[2], o = e[3] }
                    r(this, t, n, i, o) }, setBoundary: function(e, t, n) { this["set" + (n ? "Start" : "End")](e, t) }, setStartBefore: a(!0, !0), setStartAfter: a(!1, !0), setEndBefore: a(!0, !1), setEndAfter: a(!1, !1), collapse: function(e) { S(this), e ? r(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset) : r(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset) }, selectNodeContents: function(e) { m(e, !0), r(this, e, 0, e, z(e)) }, selectNode: function(e) { m(e, !1), g(e, X);
                    var t = i(e),
                        n = o(e);
                    r(this, t.node, t.offset, n.node, n.offset) }, extractContents: A(u, r), deleteContents: A(c, r), canSurroundContents: function() { S(this), b(this.startContainer), b(this.endContainer);
                    var e = new h(this, !0),
                        n = e._first && t(e._first, this) || e._last && t(e._last, this);
                    return e.detach(), !n }, splitBoundaries: function() { T(this) }, splitBoundariesPreservingPositions: function(e) { T(this, e) }, normalizeBoundaries: function() { S(this);
                    var e = this.startContainer,
                        t = this.startOffset,
                        n = this.endContainer,
                        i = this.endOffset,
                        o = function(e) {
                            var t = e.nextSibling;
                            t && t.nodeType == e.nodeType && (n = e, i = e.length, e.appendData(t.data), t.parentNode.removeChild(t)) },
                        a = function(o) {
                            var r = o.previousSibling;
                            if (r && r.nodeType == o.nodeType) { e = o;
                                var a = o.length;
                                if (t = r.length, o.insertData(0, r.data), r.parentNode.removeChild(r), e == n) i += t, n = e;
                                else if (n == o.parentNode) {
                                    var s = B(o);
                                    i == s ? (n = o, i = a) : i > s && i-- } } },
                        s = !0;
                    if (H(n)) n.length == i && o(n);
                    else {
                        if (i > 0) {
                            var l = n.childNodes[i - 1];
                            l && H(l) && o(l) }
                        s = !this.collapsed }
                    if (s) {
                        if (H(e)) 0 == t && a(e);
                        else if (t < e.childNodes.length) {
                            var c = e.childNodes[t];
                            c && H(c) && a(c) } } else e = n, t = i;
                    r(this, e, t, n, i) }, collapseToPoint: function(e, t) { m(e, !0), y(e, t), this.setStartAndEnd(e, t) } }), N(n) }

        function R(e) { e.collapsed = e.startContainer === e.endContainer && e.startOffset === e.endOffset, e.commonAncestorContainer = e.collapsed ? e.startContainer : O.getCommonAncestor(e.startContainer, e.endContainer) }

        function $(e, t, n, i, o) { e.startContainer = t, e.startOffset = n, e.endContainer = i, e.endOffset = o, e.document = O.getDocument(t), R(e) }

        function M(e) { this.startContainer = e, this.startOffset = 0, this.endContainer = e, this.endOffset = 0, this.document = e, R(this) }
        var O = e.dom,
            I = e.util,
            L = O.DomPosition,
            P = e.DOMException,
            H = O.isCharacterDataNode,
            B = O.getNodeIndex,
            j = O.isOrIsAncestorOf,
            F = O.getDocument,
            W = O.comparePoints,
            q = O.splitDataNode,
            U = O.getClosestAncestorIn,
            z = O.getNodeLength,
            Y = O.arrayContains,
            V = O.getRootContainer,
            G = e.features.crashyTextNodes;
        h.prototype = { _current: null, _next: null, _first: null, _last: null, isSingleCharacterDataNode: !1, reset: function() { this._current = null, this._next = this._first }, hasNext: function() {
                return !!this._next }, next: function() {
                var e = this._current = this._next;
                return e && (this._next = e !== this._last ? e.nextSibling : null, H(e) && this.clonePartiallySelectedTextNodes && (e === this.ec && (e = e.cloneNode(!0)).deleteData(this.eo, e.length - this.eo), this._current === this.sc && (e = e.cloneNode(!0)).deleteData(0, this.so))), e }, remove: function() {
                var e, t, n = this._current;!H(n) || n !== this.sc && n !== this.ec ? n.parentNode && n.parentNode.removeChild(n) : (e = n === this.sc ? this.so : 0, t = n === this.ec ? this.eo : n.length, e != t && n.deleteData(e, t - e)) }, isPartiallySelectedSubtree: function() {
                return t(this._current, this.range) }, getSubtreeIterator: function() {
                var e;
                if (this.isSingleCharacterDataNode) e = this.range.cloneRange(), e.collapse(!1);
                else { e = new M(n(this.range));
                    var t = this._current,
                        i = t,
                        o = 0,
                        r = t,
                        a = z(t);
                    j(t, this.sc) && (i = this.sc, o = this.so), j(t, this.ec) && (r = this.ec, a = this.eo), $(e, i, o, r, a) }
                return new h(e, this.clonePartiallySelectedTextNodes) }, detach: function() { this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null } };
        var X = [1, 3, 4, 5, 7, 8, 10],
            K = [2, 9, 11],
            Q = [5, 6, 10, 12],
            Z = [1, 3, 4, 5, 7, 8, 10, 11],
            J = [1, 3, 4, 5, 7, 8],
            ee = p([9, 11]),
            te = p(Q),
            ne = p([6, 10, 12]),
            ie = document.createElement("style"),
            oe = !1;
        try { ie.innerHTML = "<b>x</b>", oe = 3 == ie.firstChild.nodeType } catch (e) {}
        e.features.htmlParsingConforms = oe;
        var re = oe ? function(e) {
                var t = this.startContainer,
                    n = F(t);
                if (!t) throw new P("INVALID_STATE_ERR");
                var i = null;
                return 1 == t.nodeType ? i = t : H(t) && (i = O.parentElement(t)), i = null === i || "HTML" == i.nodeName && O.isHtmlNamespace(F(i).documentElement) && O.isHtmlNamespace(i) ? n.createElement("body") : i.cloneNode(!1), i.innerHTML = e, O.fragmentFromNodeChildren(i) } : function(e) {
                var t = n(this),
                    i = t.createElement("body");
                return i.innerHTML = e, O.fragmentFromNodeChildren(i) },
            ae = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
            se = 0,
            le = 1,
            ce = 2,
            ue = 3,
            de = 0,
            fe = 1,
            he = 2,
            pe = 3;
        I.extend(e.rangePrototype, { compareBoundaryPoints: function(e, t) { S(this), v(this.startContainer, t.startContainer);
                var n, i, o, r, a = e == ue || e == se ? "start" : "end",
                    s = e == le || e == se ? "start" : "end";
                return n = this[a + "Container"], i = this[a + "Offset"], o = t[s + "Container"], r = t[s + "Offset"], W(n, i, o, r) }, insertNode: function(e) {
                if (S(this), g(e, Z), b(this.startContainer), j(e, this.startContainer)) throw new P("HIERARCHY_REQUEST_ERR");
                var t = r(e, this.startContainer, this.startOffset);
                this.setStartBefore(t) }, cloneContents: function() { S(this);
                var e, t;
                if (this.collapsed) return n(this).createDocumentFragment();
                if (this.startContainer === this.endContainer && H(this.startContainer)) return e = this.startContainer.cloneNode(!0), e.data = e.data.slice(this.startOffset, this.endOffset), t = n(this).createDocumentFragment(), t.appendChild(e), t;
                var i = new h(this, !0);
                return e = s(i), i.detach(), e }, canSurroundContents: function() { S(this), b(this.startContainer), b(this.endContainer);
                var e = new h(this, !0),
                    n = e._first && t(e._first, this) || e._last && t(e._last, this);
                return e.detach(), !n }, surroundContents: function(e) {
                if (g(e, J), !this.canSurroundContents()) throw new P("INVALID_STATE_ERR");
                var t = this.extractContents();
                if (e.hasChildNodes())
                    for (; e.lastChild;) e.removeChild(e.lastChild);
                r(e, this.startContainer, this.startOffset), e.appendChild(t), this.selectNode(e) }, cloneRange: function() { S(this);
                for (var e, t = new M(n(this)), i = ae.length; i--;) e = ae[i], t[e] = this[e];
                return t }, toString: function() { S(this);
                var e = this.startContainer;
                if (e === this.endContainer && H(e)) return 3 == e.nodeType || 4 == e.nodeType ? e.data.slice(this.startOffset, this.endOffset) : "";
                var t = [],
                    n = new h(this, !0);
                return l(n, function(e) { 3 != e.nodeType && 4 != e.nodeType || t.push(e.data) }), n.detach(), t.join("") }, compareNode: function(e) { S(this);
                var t = e.parentNode,
                    n = B(e);
                if (!t) throw new P("NOT_FOUND_ERR");
                var i = this.comparePoint(t, n),
                    o = this.comparePoint(t, n + 1);
                return i < 0 ? o > 0 ? he : de : o > 0 ? fe : pe }, comparePoint: function(e, t) {
                return S(this), w(e, "HIERARCHY_REQUEST_ERR"), v(e, this.startContainer), W(e, t, this.startContainer, this.startOffset) < 0 ? -1 : W(e, t, this.endContainer, this.endOffset) > 0 ? 1 : 0 }, createContextualFragment: re, toHtml: function() {
                return E(this) }, intersectsNode: function(e, t) {
                if (S(this), w(e, "NOT_FOUND_ERR"), F(e) !== n(this)) return !1;
                var i = e.parentNode,
                    o = B(e);
                w(i, "NOT_FOUND_ERR");
                var r = W(i, o, this.endContainer, this.endOffset),
                    a = W(i, o + 1, this.startContainer, this.startOffset);
                return t ? r <= 0 && a >= 0 : r < 0 && a > 0 }, isPointInRange: function(e, t) {
                return S(this), w(e, "HIERARCHY_REQUEST_ERR"), v(e, this.startContainer), W(e, t, this.startContainer, this.startOffset) >= 0 && W(e, t, this.endContainer, this.endOffset) <= 0 }, intersectsRange: function(e) {
                return a(this, e, !1) }, intersectsOrTouchesRange: function(e) {
                return a(this, e, !0) }, intersection: function(e) {
                if (this.intersectsRange(e)) {
                    var t = W(this.startContainer, this.startOffset, e.startContainer, e.startOffset),
                        n = W(this.endContainer, this.endOffset, e.endContainer, e.endOffset),
                        i = this.cloneRange();
                    return -1 == t && i.setStart(e.startContainer, e.startOffset), 1 == n && i.setEnd(e.endContainer, e.endOffset), i }
                return null }, union: function(e) {
                if (this.intersectsOrTouchesRange(e)) {
                    var t = this.cloneRange();
                    return -1 == W(e.startContainer, e.startOffset, this.startContainer, this.startOffset) && t.setStart(e.startContainer, e.startOffset), 1 == W(e.endContainer, e.endOffset, this.endContainer, this.endOffset) && t.setEnd(e.endContainer, e.endOffset), t }
                throw new P("Ranges do not intersect") }, containsNode: function(e, t) {
                return t ? this.intersectsNode(e, !1) : this.compareNode(e) == pe }, containsNodeContents: function(e) {
                return this.comparePoint(e, 0) >= 0 && this.comparePoint(e, z(e)) <= 0 }, containsRange: function(e) {
                var t = this.intersection(e);
                return null !== t && e.equals(t) }, containsNodeText: function(e) {
                var t = this.cloneRange();
                t.selectNode(e);
                var n = t.getNodes([3]);
                if (n.length > 0) { t.setStart(n[0], 0);
                    var i = n.pop();
                    return t.setEnd(i, i.length), this.containsRange(t) }
                return this.containsNodeContents(e) }, getNodes: function(e, t) {
                return S(this), d(this, e, t) }, getDocument: function() {
                return n(this) }, collapseBefore: function(e) { this.setEndBefore(e), this.collapse(!1) }, collapseAfter: function(e) { this.setStartAfter(e), this.collapse(!0) }, getBookmark: function(t) {
                var i = n(this),
                    o = e.createRange(i);
                t = t || O.getBody(i), o.selectNodeContents(t);
                var r = this.intersection(o),
                    a = 0,
                    s = 0;
                return r && (o.setEnd(r.startContainer, r.startOffset), a = o.toString().length, s = a + r.toString().length), { start: a, end: s, containerNode: t } }, moveToBookmark: function(e) {
                var t = e.containerNode,
                    n = 0;
                this.setStart(t, 0), this.collapse(!0);
                for (var i, o, r, a, s = [t], l = !1, c = !1; !c && (i = s.pop());)
                    if (3 == i.nodeType) o = n + i.length, !l && e.start >= n && e.start <= o && (this.setStart(i, e.start - n), l = !0), l && e.end >= n && e.end <= o && (this.setEnd(i, e.end - n), c = !0), n = o;
                    else
                        for (a = i.childNodes, r = a.length; r--;) s.push(a[r]) }, getName: function() {
                return "DomRange" }, equals: function(e) {
                return M.rangesEqual(this, e) }, isValid: function() {
                return C(this) }, inspect: function() {
                return f(this) }, detach: function() {} }), D(M, $), I.extend(M, { rangeProperties: ae, RangeIterator: h, copyComparisonConstants: N, createPrototypeRange: D, inspect: f, toHtml: E, getRangeDocument: n, rangesEqual: function(e, t) {
                return e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset } }), e.DomRange = M
    }), N.createCoreModule("WrappedRange", ["DomRange"], function(e, t) {
        var n, i, o = e.dom,
            r = e.util,
            a = o.DomPosition,
            s = e.DomRange,
            l = o.getBody,
            c = o.getContentDocument,
            u = o.isCharacterDataNode;
        if (e.features.implementsDomRange && function() {
                function i(e) {
                    for (var t, n = f.length; n--;) t = f[n], e[t] = e.nativeRange[t];
                    e.collapsed = e.startContainer === e.endContainer && e.startOffset === e.endOffset }

                function a(e, t, n, i, o) {
                    var r = e.startContainer !== t || e.startOffset != n,
                        a = e.endContainer !== i || e.endOffset != o,
                        s = !e.equals(e.nativeRange);
                    (r || a || s) && (e.setEnd(i, o), e.setStart(t, n)) }
                var u, d, f = s.rangeProperties;
                n = function(e) {
                    if (!e) throw t.createError("WrappedRange: Range must be specified");
                    this.nativeRange = e, i(this) }, s.createPrototypeRange(n, a), u = n.prototype, u.selectNode = function(e) { this.nativeRange.selectNode(e), i(this) }, u.cloneContents = function() {
                    return this.nativeRange.cloneContents() }, u.surroundContents = function(e) { this.nativeRange.surroundContents(e), i(this) }, u.collapse = function(e) { this.nativeRange.collapse(e), i(this) }, u.cloneRange = function() {
                    return new n(this.nativeRange.cloneRange()) }, u.refresh = function() { i(this) }, u.toString = function() {
                    return this.nativeRange.toString() };
                var h = document.createTextNode("test");
                l(document).appendChild(h);
                var p = document.createRange();
                p.setStart(h, 0), p.setEnd(h, 0);
                try { p.setStart(h, 1), u.setStart = function(e, t) { this.nativeRange.setStart(e, t), i(this) }, u.setEnd = function(e, t) { this.nativeRange.setEnd(e, t), i(this) }, d = function(e) {
                        return function(t) { this.nativeRange[e](t), i(this) } } } catch (e) { u.setStart = function(e, t) {
                        try { this.nativeRange.setStart(e, t) } catch (n) { this.nativeRange.setEnd(e, t), this.nativeRange.setStart(e, t) }
                        i(this) }, u.setEnd = function(e, t) {
                        try { this.nativeRange.setEnd(e, t) } catch (n) { this.nativeRange.setStart(e, t), this.nativeRange.setEnd(e, t) }
                        i(this) }, d = function(e, t) {
                        return function(n) {
                            try { this.nativeRange[e](n) } catch (i) { this.nativeRange[t](n), this.nativeRange[e](n) }
                            i(this) } } }
                u.setStartBefore = d("setStartBefore", "setEndBefore"), u.setStartAfter = d("setStartAfter", "setEndAfter"), u.setEndBefore = d("setEndBefore", "setStartBefore"), u.setEndAfter = d("setEndAfter", "setStartAfter"), u.selectNodeContents = function(e) { this.setStartAndEnd(e, 0, o.getNodeLength(e)) }, p.selectNodeContents(h), p.setEnd(h, 3);
                var m = document.createRange();
                m.selectNodeContents(h), m.setEnd(h, 4), m.setStart(h, 2), -1 == p.compareBoundaryPoints(p.START_TO_END, m) && 1 == p.compareBoundaryPoints(p.END_TO_START, m) ? u.compareBoundaryPoints = function(e, t) {
                    return t = t.nativeRange || t, e == t.START_TO_END ? e = t.END_TO_START : e == t.END_TO_START && (e = t.START_TO_END), this.nativeRange.compareBoundaryPoints(e, t) } : u.compareBoundaryPoints = function(e, t) {
                    return this.nativeRange.compareBoundaryPoints(e, t.nativeRange || t) };
                var g = document.createElement("div");
                g.innerHTML = "123";
                var y = g.firstChild,
                    v = l(document);
                v.appendChild(g), p.setStart(y, 1), p.setEnd(y, 2), p.deleteContents(), "13" == y.data && (u.deleteContents = function() { this.nativeRange.deleteContents(), i(this) }, u.extractContents = function() {
                    var e = this.nativeRange.extractContents();
                    return i(this), e }), v.removeChild(g), v = null, r.isHostMethod(p, "createContextualFragment") && (u.createContextualFragment = function(e) {
                    return this.nativeRange.createContextualFragment(e) }), l(document).removeChild(h), u.getName = function() {
                    return "WrappedRange" }, e.WrappedRange = n, e.createNativeRange = function(e) {
                    return e = c(e, t, "createNativeRange"), e.createRange() } }(), e.features.implementsTextRange) {
            var d = function(e) {
                    var t = e.parentElement(),
                        n = e.duplicate();
                    n.collapse(!0);
                    var i = n.parentElement();
                    n = e.duplicate(), n.collapse(!1);
                    var r = n.parentElement(),
                        a = i == r ? i : o.getCommonAncestor(i, r);
                    return a == t ? a : o.getCommonAncestor(t, a) },
                f = function(e) {
                    return 0 == e.compareEndPoints("StartToEnd", e) },
                h = function(e, t, n, i, r) {
                    var s = e.duplicate();
                    s.collapse(n);
                    var l = s.parentElement();
                    if (o.isOrIsAncestorOf(t, l) || (l = t), !l.canHaveHTML) {
                        var c = new a(l.parentNode, o.getNodeIndex(l));
                        return { boundaryPosition: c, nodeInfo: { nodeIndex: c.offset, containerElement: c.node } } }
                    var d = o.getDocument(l).createElement("span");
                    d.parentNode && d.parentNode.removeChild(d);
                    for (var f, h, p, m, g, y = n ? "StartToStart" : "StartToEnd", v = r && r.containerElement == l ? r.nodeIndex : 0, b = l.childNodes.length, w = b, _ = w;;) {
                        if (_ == b ? l.appendChild(d) : l.insertBefore(d, l.childNodes[_]), s.moveToElementText(d), 0 == (f = s.compareEndPoints(y, e)) || v == w) break;
                        if (-1 == f) {
                            if (w == v + 1) break;
                            v = _ } else w = w == v + 1 ? v : _;
                        _ = Math.floor((v + w) / 2), l.removeChild(d) }
                    if (g = d.nextSibling, -1 == f && g && u(g)) { s.setEndPoint(n ? "EndToStart" : "EndToEnd", e);
                        var x;
                        if (/[\r\n]/.test(g.data)) {
                            var C = s.duplicate(),
                                S = C.text.replace(/\r\n/g, "\r").length;
                            for (x = C.moveStart("character", S); - 1 == (f = C.compareEndPoints("StartToEnd", C));) x++, C.moveStart("character", 1) } else x = s.text.length;
                        m = new a(g, x) } else h = (i || !n) && d.previousSibling, p = (i || n) && d.nextSibling, m = p && u(p) ? new a(p, 0) : h && u(h) ? new a(h, h.data.length) : new a(l, o.getNodeIndex(d));
                    return d.parentNode.removeChild(d), { boundaryPosition: m, nodeInfo: { nodeIndex: _, containerElement: l } } },
                p = function(e, t) {
                    var n, i, r, a, s = e.offset,
                        c = o.getDocument(e.node),
                        d = l(c).createTextRange(),
                        f = u(e.node);
                    return f ? (n = e.node, i = n.parentNode) : (a = e.node.childNodes, n = s < a.length ? a[s] : null, i = e.node), r = c.createElement("span"), r.innerHTML = "&#feff;", n ? i.insertBefore(r, n) : i.appendChild(r), d.moveToElementText(r), d.collapse(!t), i.removeChild(r), f && d[t ? "moveStart" : "moveEnd"]("character", s), d };
            i = function(e) { this.textRange = e, this.refresh() }, i.prototype = new s(document), i.prototype.refresh = function() {
                var e, t, n, i = d(this.textRange);
                f(this.textRange) ? t = e = h(this.textRange, i, !0, !0).boundaryPosition : (n = h(this.textRange, i, !0, !1), e = n.boundaryPosition, t = h(this.textRange, i, !1, !1, n.nodeInfo).boundaryPosition), this.setStart(e.node, e.offset), this.setEnd(t.node, t.offset) }, i.prototype.getName = function() {
                return "WrappedTextRange" }, s.copyComparisonConstants(i);
            var m = function(e) {
                if (e.collapsed) return p(new a(e.startContainer, e.startOffset), !0);
                var t = p(new a(e.startContainer, e.startOffset), !0),
                    n = p(new a(e.endContainer, e.endOffset), !1),
                    i = l(s.getRangeDocument(e)).createTextRange();
                return i.setEndPoint("StartToStart", t), i.setEndPoint("EndToEnd", n), i };
            if (i.rangeToTextRange = m, i.prototype.toTextRange = function() {
                    return m(this) }, e.WrappedTextRange = i, !e.features.implementsDomRange || e.config.preferTextRange) {
                var g = function() {
                    return this }(); "undefined" == typeof g.Range && (g.Range = i), e.createNativeRange = function(e) {
                    return e = c(e, t, "createNativeRange"), l(e).createTextRange() }, e.WrappedRange = i } }
        e.createRange = function(n) {
            return n = c(n, t, "createRange"), new e.WrappedRange(e.createNativeRange(n)) }, e.createRangyRange = function(e) {
            return e = c(e, t, "createRangyRange"), new s(e) }, e.createIframeRange = function(n) {
            return t.deprecationNotice("createIframeRange()", "createRange(iframeEl)"), e.createRange(n) }, e.createIframeRangyRange = function(n) {
            return t.deprecationNotice("createIframeRangyRange()", "createRangyRange(iframeEl)"), e.createRangyRange(n) }, e.addShimListener(function(t) {
            var n = t.document; "undefined" == typeof n.createRange && (n.createRange = function() {
                return e.createRange(n) }), n = t = null }) }), N.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(e, t) {
        function n(e) {
            return "string" == typeof e ? /^backward(s)?$/i.test(e) : !!e }

        function i(e, n) {
            if (e) {
                if (N.isWindow(e)) return e;
                if (e instanceof y) return e.win;
                var i = N.getContentDocument(e, t, n);
                return N.getWindow(i) }
            return window }

        function o(e) {
            return i(e, "getWinSelection").getSelection() }

        function r(e) {
            return i(e, "getDocSelection").document.selection }

        function a(e) {
            var t = !1;
            return e.anchorNode && (t = 1 == N.comparePoints(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset)), t }

        function s(e, t, n) {
            var i = n ? "end" : "start",
                o = n ? "start" : "end";
            e.anchorNode = t[i + "Container"], e.anchorOffset = t[i + "Offset"], e.focusNode = t[o + "Container"], e.focusOffset = t[o + "Offset"] }

        function l(e) {
            var t = e.nativeSelection;
            e.anchorNode = t.anchorNode, e.anchorOffset = t.anchorOffset, e.focusNode = t.focusNode, e.focusOffset = t.focusOffset }

        function c(e) { e.anchorNode = e.focusNode = null, e.anchorOffset = e.focusOffset = 0, e.rangeCount = 0, e.isCollapsed = !0, e._ranges.length = 0 }

        function u(t) {
            var n;
            return t instanceof R ? (n = e.createNativeRange(t.getDocument()), n.setEnd(t.endContainer, t.endOffset), n.setStart(t.startContainer, t.startOffset)) : t instanceof $ ? n = t.nativeRange : I.implementsDomRange && t instanceof N.getWindow(t.startContainer).Range && (n = t), n }

        function d(e) {
            if (!e.length || 1 != e[0].nodeType) return !1;
            for (var t = 1, n = e.length; t < n; ++t)
                if (!N.isAncestorOf(e[0], e[t])) return !1;
            return !0 }

        function f(e) {
            var n = e.getNodes();
            if (!d(n)) throw t.createError("getSingleElementFromRange: range " + e.inspect() + " did not consist of a single element");
            return n[0] }

        function h(e) {
            return !!e && "undefined" != typeof e.text }

        function p(e, t) {
            var n = new $(t);
            e._ranges = [n], s(e, n, !1), e.rangeCount = 1, e.isCollapsed = n.collapsed }

        function m(t) {
            if (t._ranges.length = 0, "None" == t.docSelection.type) c(t);
            else {
                var n = t.docSelection.createRange();
                if (h(n)) p(t, n);
                else { t.rangeCount = n.length;
                    for (var i, o = P(n.item(0)), r = 0; r < t.rangeCount; ++r) i = e.createRange(o), i.selectNode(n.item(r)), t._ranges.push(i);
                    t.isCollapsed = 1 == t.rangeCount && t._ranges[0].collapsed, s(t, t._ranges[t.rangeCount - 1], !1) } } }

        function g(e, n) {
            for (var i = e.docSelection.createRange(), o = f(n), r = P(i.item(0)), a = H(r).createControlRange(), s = 0, l = i.length; s < l; ++s) a.add(i.item(s));
            try { a.add(o) } catch (e) {
                throw t.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)") }
            a.select(), m(e) }

        function y(e, t, n) { this.nativeSelection = e, this.docSelection = t, this._ranges = [], this.win = n, this.refresh() }

        function v(e) { e.win = e.anchorNode = e.focusNode = e._ranges = null, e.rangeCount = e.anchorOffset = e.focusOffset = 0, e.detached = !0 }

        function b(e, t) {
            for (var n, i, o = te.length; o--;)
                if (n = te[o], i = n.selection, "deleteAll" == t) v(i);
                else if (n.win == e) return "delete" == t ? (te.splice(o, 1), !0) : i;
            return "deleteAll" == t && (te.length = 0), null }

        function w(e, n) {
            for (var i, o = P(n[0].startContainer), r = H(o).createControlRange(), a = 0, s = n.length; a < s; ++a) { i = f(n[a]);
                try { r.add(i) } catch (e) {
                    throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)") } }
            r.select(), m(e) }

        function _(e, t) {
            if (e.win.document != P(t)) throw new M("WRONG_DOCUMENT_ERR") }

        function x(t) {
            return function(n, i) {
                var o;
                this.rangeCount ? (o = this.getRangeAt(0), o["set" + (t ? "Start" : "End")](n, i)) : (o = e.createRange(this.win.document), o.setStartAndEnd(n, i)), this.setSingleRange(o, this.isBackward()) } }

        function C(e) {
            var t = [],
                n = new O(e.anchorNode, e.anchorOffset),
                i = new O(e.focusNode, e.focusOffset),
                o = "function" == typeof e.getName ? e.getName() : "Selection";
            if ("undefined" != typeof e.rangeCount)
                for (var r = 0, a = e.rangeCount; r < a; ++r) t[r] = R.inspect(e.getRangeAt(r));
            return "[" + o + "(Ranges: " + t.join(", ") + ")(anchor: " + n.inspect() + ", focus: " + i.inspect() + "]" }
        e.config.checkSelectionRanges = !0;
        var S, T, E = "boolean",
            k = "number",
            N = e.dom,
            A = e.util,
            D = A.isHostMethod,
            R = e.DomRange,
            $ = e.WrappedRange,
            M = e.DOMException,
            O = N.DomPosition,
            I = e.features,
            L = "Control",
            P = N.getDocument,
            H = N.getBody,
            B = R.rangesEqual,
            j = D(window, "getSelection"),
            F = A.isHostObject(document, "selection");
        I.implementsWinGetSelection = j, I.implementsDocSelection = F;
        var W = F && (!j || e.config.preferTextRange);
        W ? (S = r, e.isSelectionValid = function(e) {
            var t = i(e, "isSelectionValid").document,
                n = t.selection;
            return "None" != n.type || P(n.createRange().parentElement()) == t }) : j ? (S = o, e.isSelectionValid = function() {
            return !0 }) : t.fail("Neither document.selection or window.getSelection() detected."), e.getNativeSelection = S;
        var q = S(),
            U = e.createNativeRange(document),
            z = H(document),
            Y = A.areHostProperties(q, ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);
        I.selectionHasAnchorAndFocus = Y;
        var V = D(q, "extend");
        I.selectionHasExtend = V;
        var G = typeof q.rangeCount == k;
        I.selectionHasRangeCount = G;
        var X = !1,
            K = !0,
            Q = V ? function(t, n) {
                var i = R.getRangeDocument(n),
                    o = e.createRange(i);
                o.collapseToPoint(n.endContainer, n.endOffset), t.addRange(u(o)), t.extend(n.startContainer, n.startOffset) } : null;
        A.areHostMethods(q, ["addRange", "getRangeAt", "removeAllRanges"]) && typeof q.rangeCount == k && I.implementsDomRange && function() {
            var t = window.getSelection();
            if (t) {
                for (var n = t.rangeCount, i = n > 1, o = [], r = a(t), s = 0; s < n; ++s) o[s] = t.getRangeAt(s);
                var l = H(document),
                    c = l.appendChild(document.createElement("div"));
                c.contentEditable = "false";
                var u = c.appendChild(document.createTextNode("\xa0\xa0\xa0")),
                    d = document.createRange();
                if (d.setStart(u, 1), d.collapse(!0), t.addRange(d), K = 1 == t.rangeCount, t.removeAllRanges(), !i) {
                    var f = window.navigator.appVersion.match(/Chrome\/(.*?) /);
                    if (f && parseInt(f[1]) >= 36) X = !1;
                    else {
                        var h = d.cloneRange();
                        d.setStart(u, 0), h.setEnd(u, 3), h.setStart(u, 2), t.addRange(d), t.addRange(h), X = 2 == t.rangeCount } }
                for (l.removeChild(c), t.removeAllRanges(), s = 0; s < n; ++s) 0 == s && r ? Q ? Q(t, o[s]) : (e.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"), t.addRange(o[s])) : t.addRange(o[s]) } }(), I.selectionSupportsMultipleRanges = X, I.collapsedNonEditableSelectionsSupported = K;
        var Z, J = !1;
        z && D(z, "createControlRange") && (Z = z.createControlRange(), A.areHostProperties(Z, ["item", "add"]) && (J = !0)), I.implementsControlRange = J, T = Y ? function(e) {
            return e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset } : function(e) {
            return !!e.rangeCount && e.getRangeAt(e.rangeCount - 1).collapsed };
        var ee;
        D(q, "getRangeAt") ? ee = function(e, t) {
            try {
                return e.getRangeAt(t) } catch (e) {
                return null } } : Y && (ee = function(t) {
            var n = P(t.anchorNode),
                i = e.createRange(n);
            return i.setStartAndEnd(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset), i.collapsed !== this.isCollapsed && i.setStartAndEnd(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset), i }), y.prototype = e.selectionPrototype;
        var te = [],
            ne = function(e) {
                if (e && e instanceof y) return e.refresh(), e;
                e = i(e, "getNativeSelection");
                var t = b(e),
                    n = S(e),
                    o = F ? r(e) : null;
                return t ? (t.nativeSelection = n, t.docSelection = o, t.refresh()) : (t = new y(n, o, e), te.push({ win: e, selection: t })), t };
        e.getSelection = ne, e.getIframeSelection = function(n) {
            return t.deprecationNotice("getIframeSelection()", "getSelection(iframeEl)"), e.getSelection(N.getIframeWindow(n)) };
        var ie = y.prototype;
        if (!W && Y && A.areHostMethods(q, ["removeAllRanges", "addRange"])) { ie.removeAllRanges = function() { this.nativeSelection.removeAllRanges(), c(this) };
            var oe = function(e, t) { Q(e.nativeSelection, t), e.refresh() };
            ie.addRange = G ? function(t, i) {
                if (J && F && this.docSelection.type == L) g(this, t);
                else if (n(i) && V) oe(this, t);
                else {
                    var o;
                    if (X ? o = this.rangeCount : (this.removeAllRanges(), o = 0), this.nativeSelection.addRange(u(t).cloneRange()), this.rangeCount = this.nativeSelection.rangeCount, this.rangeCount == o + 1) {
                        if (e.config.checkSelectionRanges) {
                            var r = ee(this.nativeSelection, this.rangeCount - 1);
                            r && !B(r, t) && (t = new $(r)) }
                        this._ranges[this.rangeCount - 1] = t, s(this, t, se(this.nativeSelection)), this.isCollapsed = T(this) } else this.refresh() } } : function(e, t) { n(t) && V ? oe(this, e) : (this.nativeSelection.addRange(u(e)), this.refresh()) }, ie.setRanges = function(e) {
                if (J && F && e.length > 1) w(this, e);
                else { this.removeAllRanges();
                    for (var t = 0, n = e.length; t < n; ++t) this.addRange(e[t]) } } } else {
            if (!(D(q, "empty") && D(U, "select") && J && W)) return t.fail("No means of selecting a Range or TextRange was found"), !1;
            ie.removeAllRanges = function() {
                try {
                    if (this.docSelection.empty(), "None" != this.docSelection.type) {
                        var e;
                        if (this.anchorNode) e = P(this.anchorNode);
                        else if (this.docSelection.type == L) {
                            var t = this.docSelection.createRange();
                            t.length && (e = P(t.item(0))) }
                        if (e) { H(e).createTextRange().select(), this.docSelection.empty() } } } catch (e) {}
                c(this) }, ie.addRange = function(t) { this.docSelection.type == L ? g(this, t) : (e.WrappedTextRange.rangeToTextRange(t).select(), this._ranges[0] = t, this.rangeCount = 1, this.isCollapsed = this._ranges[0].collapsed, s(this, t, !1)) }, ie.setRanges = function(e) { this.removeAllRanges();
                var t = e.length;
                t > 1 ? w(this, e) : t && this.addRange(e[0]) } }
        ie.getRangeAt = function(e) {
            if (e < 0 || e >= this.rangeCount) throw new M("INDEX_SIZE_ERR");
            return this._ranges[e].cloneRange() };
        var re;
        if (W) re = function(t) {
            var n;
            e.isSelectionValid(t.win) ? n = t.docSelection.createRange() : (n = H(t.win.document).createTextRange(), n.collapse(!0)), t.docSelection.type == L ? m(t) : h(n) ? p(t, n) : c(t) };
        else if (D(q, "getRangeAt") && typeof q.rangeCount == k) re = function(t) {
            if (J && F && t.docSelection.type == L) m(t);
            else if (t._ranges.length = t.rangeCount = t.nativeSelection.rangeCount, t.rangeCount) {
                for (var n = 0, i = t.rangeCount; n < i; ++n) t._ranges[n] = new e.WrappedRange(t.nativeSelection.getRangeAt(n));
                s(t, t._ranges[t.rangeCount - 1], se(t.nativeSelection)), t.isCollapsed = T(t) } else c(t) };
        else {
            if (!Y || typeof q.isCollapsed != E || typeof U.collapsed != E || !I.implementsDomRange) return t.fail("No means of obtaining a Range or TextRange from the user's selection was found"), !1;
            re = function(e) {
                var t, n = e.nativeSelection;
                n.anchorNode ? (t = ee(n, 0), e._ranges = [t], e.rangeCount = 1, l(e), e.isCollapsed = T(e)) : c(e) } }
        ie.refresh = function(e) {
            var t = e ? this._ranges.slice(0) : null,
                n = this.anchorNode,
                i = this.anchorOffset;
            if (re(this), e) {
                var o = t.length;
                if (o != this._ranges.length) return !0;
                if (this.anchorNode != n || this.anchorOffset != i) return !0;
                for (; o--;)
                    if (!B(t[o], this._ranges[o])) return !0;
                return !1 } };
        var ae = function(e, t) {
            var n = e.getAllRanges();
            e.removeAllRanges();
            for (var i = 0, o = n.length; i < o; ++i) B(t, n[i]) || e.addRange(n[i]);
            e.rangeCount || c(e) };
        ie.removeRange = J && F ? function(e) {
            if (this.docSelection.type == L) {
                for (var t, n = this.docSelection.createRange(), i = f(e), o = P(n.item(0)), r = H(o).createControlRange(), a = !1, s = 0, l = n.length; s < l; ++s) t = n.item(s), t !== i || a ? r.add(n.item(s)) : a = !0;
                r.select(), m(this) } else ae(this, e) } : function(e) { ae(this, e) };
        var se;
        !W && Y && I.implementsDomRange ? (se = a, ie.isBackward = function() {
            return se(this) }) : se = ie.isBackward = function() {
            return !1 }, ie.isBackwards = ie.isBackward, ie.toString = function() {
            for (var e = [], t = 0, n = this.rangeCount; t < n; ++t) e[t] = "" + this._ranges[t];
            return e.join("") }, ie.collapse = function(t, n) { _(this, t);
            var i = e.createRange(t);
            i.collapseToPoint(t, n), this.setSingleRange(i), this.isCollapsed = !0 }, ie.collapseToStart = function() {
            if (!this.rangeCount) throw new M("INVALID_STATE_ERR");
            var e = this._ranges[0];
            this.collapse(e.startContainer, e.startOffset) }, ie.collapseToEnd = function() {
            if (!this.rangeCount) throw new M("INVALID_STATE_ERR");
            var e = this._ranges[this.rangeCount - 1];
            this.collapse(e.endContainer, e.endOffset) }, ie.selectAllChildren = function(t) { _(this, t);
            var n = e.createRange(t);
            n.selectNodeContents(t), this.setSingleRange(n) }, ie.deleteFromDocument = function() {
            if (J && F && this.docSelection.type == L) {
                for (var e, t = this.docSelection.createRange(); t.length;) e = t.item(0), t.remove(e), e.parentNode.removeChild(e);
                this.refresh() } else if (this.rangeCount) {
                var n = this.getAllRanges();
                if (n.length) {
                    this.removeAllRanges();
                    for (var i = 0, o = n.length; i < o; ++i) n[i].deleteContents();
                    this.addRange(n[o - 1])
                }
            }
        }, ie.eachRange = function(e, t) {
            for (var n = 0, i = this._ranges.length; n < i; ++n)
                if (e(this.getRangeAt(n))) return t }, ie.getAllRanges = function() {
            var e = [];
            return this.eachRange(function(t) { e.push(t) }), e }, ie.setSingleRange = function(e, t) { this.removeAllRanges(), this.addRange(e, t) }, ie.callMethodOnEachRange = function(e, t) {
            var n = [];
            return this.eachRange(function(i) { n.push(i[e].apply(i, t)) }), n }, ie.setStart = x(!0), ie.setEnd = x(!1), e.rangePrototype.select = function(e) { ne(this.getDocument()).setSingleRange(this, e) }, ie.changeEachRange = function(e) {
            var t = [],
                n = this.isBackward();
            this.eachRange(function(n) { e(n), t.push(n) }), this.removeAllRanges(), n && 1 == t.length ? this.addRange(t[0], "backward") : this.setRanges(t) }, ie.containsNode = function(e, t) {
            return this.eachRange(function(n) {
                return n.containsNode(e, t) }, !0) || !1 }, ie.getBookmark = function(e) {
            return { backward: this.isBackward(), rangeBookmarks: this.callMethodOnEachRange("getBookmark", [e]) } }, ie.moveToBookmark = function(t) {
            for (var n, i, o = [], r = 0; n = t.rangeBookmarks[r++];) i = e.createRange(this.win), i.moveToBookmark(n), o.push(i);
            t.backward ? this.setSingleRange(o[0], "backward") : this.setRanges(o) }, ie.toHtml = function() {
            var e = [];
            return this.eachRange(function(t) { e.push(R.toHtml(t)) }), e.join("") }, I.implementsTextRange && (ie.getNativeTextRange = function() {
            var n;
            if (n = this.docSelection) {
                var i = n.createRange();
                if (h(i)) return i;
                throw t.createError("getNativeTextRange: selection is a control selection") }
            if (this.rangeCount > 0) return e.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));
            throw t.createError("getNativeTextRange: selection contains no range") }), ie.getName = function() {
            return "WrappedSelection" }, ie.inspect = function() {
            return C(this) }, ie.detach = function() { b(this.win, "delete"), v(this) }, y.detachAll = function() { b(null, "deleteAll") }, y.inspect = C, y.isDirectionBackward = n, e.Selection = y, e.selectionPrototype = ie, e.addShimListener(function(e) { "undefined" == typeof e.getSelection && (e.getSelection = function() {
                return ne(e) }), e = null })
    }), N)
}, this),
function(e, t) { "function" == typeof define && define.amd ? define(["rangy"], e) : e(t.rangy) }(function(e) { e.createModule("SaveRestore", ["WrappedRange"], function(e, t) {
        function n(e, t) {
            return (t || document).getElementById(e) }

        function i(e, t) {
            var n, i = "selectionBoundary_" + +new Date + "_" + ("" + Math.random()).slice(2),
                o = p.getDocument(e.startContainer),
                r = e.cloneRange();
            return r.collapse(t), n = o.createElement("span"), n.id = i, n.style.lineHeight = "0", n.style.display = "none", n.className = "rangySelectionBoundary", n.appendChild(o.createTextNode(m)), r.insertNode(n), n }

        function o(e, i, o, r) {
            var a = n(o, e);
            a ? (i[r ? "setStartBefore" : "setEndBefore"](a), a.parentNode.removeChild(a)) : t.warn("Marker element has been removed. Cannot restore selection.") }

        function r(e, t) {
            return t.compareBoundaryPoints(e.START_TO_START, e) }

        function a(t, n) {
            var o, r, a = e.DomRange.getRangeDocument(t),
                s = t.toString();
            return t.collapsed ? (r = i(t, !1), { document: a, markerId: r.id, collapsed: !0 }) : (r = i(t, !1), o = i(t, !0), { document: a, startMarkerId: o.id, endMarkerId: r.id, collapsed: !1, backward: n, toString: function() {
                    return "original text: '" + s + "', new text: '" + t.toString() + "'" } }) }

        function s(i, r) {
            var a = i.document;
            void 0 === r && (r = !0);
            var s = e.createRange(a);
            if (i.collapsed) {
                var l = n(i.markerId, a);
                if (l) { l.style.display = "inline";
                    var c = l.previousSibling;
                    c && 3 == c.nodeType ? (l.parentNode.removeChild(l), s.collapseToPoint(c, c.length)) : (s.collapseBefore(l), l.parentNode.removeChild(l)) } else t.warn("Marker element has been removed. Cannot restore selection.") } else o(a, s, i.startMarkerId, !0), o(a, s, i.endMarkerId, !1);
            return r && s.normalizeBoundaries(), s }

        function l(t, i) {
            var o, s, l = [];
            t = t.slice(0), t.sort(r);
            for (var c = 0, u = t.length; c < u; ++c) l[c] = a(t[c], i);
            for (c = u - 1; c >= 0; --c) o = t[c], s = e.DomRange.getRangeDocument(o), o.collapsed ? o.collapseAfter(n(l[c].markerId, s)) : (o.setEndBefore(n(l[c].endMarkerId, s)), o.setStartAfter(n(l[c].startMarkerId, s)));
            return l }

        function c(n) {
            if (!e.isSelectionValid(n)) return t.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."), null;
            var i = e.getSelection(n),
                o = i.getAllRanges(),
                r = 1 == o.length && i.isBackward(),
                a = l(o, r);
            return r ? i.setSingleRange(o[0], "backward") : i.setRanges(o), { win: n, rangeInfos: a, restored: !1 } }

        function u(e) {
            for (var t = [], n = e.length, i = n - 1; i >= 0; i--) t[i] = s(e[i], !0);
            return t }

        function d(t, n) {
            if (!t.restored) {
                var i = t.rangeInfos,
                    o = e.getSelection(t.win),
                    r = u(i);
                1 == i.length && n && e.features.selectionHasExtend && i[0].backward ? (o.removeAllRanges(), o.addRange(r[0], !0)) : o.setRanges(r), t.restored = !0 } }

        function f(e, t) {
            var i = n(t, e);
            i && i.parentNode.removeChild(i) }

        function h(e) {
            for (var t, n = e.rangeInfos, i = 0, o = n.length; i < o; ++i) t = n[i], t.collapsed ? f(e.doc, t.markerId) : (f(e.doc, t.startMarkerId), f(e.doc, t.endMarkerId)) }
        var p = e.dom,
            m = "\ufeff";
        e.util.extend(e, { saveRange: a, restoreRange: s, saveRanges: l, restoreRanges: u, saveSelection: c, restoreSelection: d, removeMarkerElement: f, removeMarkers: h }) }) }, this);
var Base = function() {};
Base.extend = function(e, t) {
        var n = Base.prototype.extend;
        Base._prototyping = !0;
        var i = new this;
        n.call(i, e), i.base = function() {}, delete Base._prototyping;
        var o = i.constructor,
            r = i.constructor = function() {
                if (!Base._prototyping)
                    if (this._constructing || this.constructor == r) this._constructing = !0, o.apply(this, arguments), delete this._constructing;
                    else if (null != arguments[0]) return (arguments[0].extend || n).call(arguments[0], i) };
        return r.ancestor = this, r.extend = this.extend, r.forEach = this.forEach, r.implement = this.implement, r.prototype = i, r.toString = this.toString, r.valueOf = function(e) {
            return "object" == e ? r : o.valueOf() }, n.call(r, t), "function" == typeof r.init && r.init(), r }, Base.prototype = { extend: function(e, t) {
            if (arguments.length > 1) {
                var n = this[e];
                if (n && "function" == typeof t && (!n.valueOf || n.valueOf() != t.valueOf()) && /\bbase\b/.test(t)) {
                    var i = t.valueOf();
                    t = function() {
                        var e = this.base || Base.prototype.base;
                        this.base = n;
                        var t = i.apply(this, arguments);
                        return this.base = e, t }, t.valueOf = function(e) {
                        return "object" == e ? t : i }, t.toString = Base.toString }
                this[e] = t } else if (e) {
                var o = Base.prototype.extend;
                Base._prototyping || "function" == typeof this || (o = this.extend || o);
                for (var r = { toSource: null }, a = ["constructor", "toString", "valueOf"], s = Base._prototyping ? 0 : 1; l = a[s++];) e[l] != r[l] && o.call(this, l, e[l]);
                for (var l in e) r[l] || o.call(this, l, e[l]) }
            return this } }, Base = Base.extend({ constructor: function() { this.extend(arguments[0]) } }, { ancestor: Object, version: "1.1", forEach: function(e, t, n) {
            for (var i in e) this.prototype[i] === undefined && t.call(n, e[i], i, e) }, implement: function() {
            for (var e = 0; e < arguments.length; e++) "function" == typeof arguments[e] ? arguments[e](this.prototype) : this.prototype.extend(arguments[e]);
            return this }, toString: function() {
            return String(this.valueOf()) } }), wysihtml5.browser = function() {
        function e(e) {
            return +(/ipad|iphone|ipod/.test(e) && e.match(/ os (\d+).+? like mac os x/) || [undefined, 0])[1] }

        function t(e) {
            return +(e.match(/android (\d+)/) || [undefined, 0])[1] }

        function n(e, t) {
            var n, i = -1;
            return "Microsoft Internet Explorer" == navigator.appName ? n = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})") : "Netscape" == navigator.appName && (n = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})")), n && null != n.exec(navigator.userAgent) && (i = parseFloat(RegExp.$1)), -1 !== i && (!e || (t ? "<" === t ? e < i : ">" === t ? e > i : "<=" === t ? e <= i : ">=" === t ? e >= i : void 0 : e === i)) }
        var i = navigator.userAgent,
            o = document.createElement("div"),
            r = -1 !== i.indexOf("Gecko") && -1 === i.indexOf("KHTML"),
            a = -1 !== i.indexOf("AppleWebKit/"),
            s = -1 !== i.indexOf("Chrome/"),
            l = -1 !== i.indexOf("Opera/");
        return { USER_AGENT: i, supported: function() {
                var n = this.USER_AGENT.toLowerCase(),
                    i = "contentEditable" in o,
                    r = document.execCommand && document.queryCommandSupported && document.queryCommandState,
                    a = document.querySelector && document.querySelectorAll,
                    s = this.isIos() && e(n) < 5 || this.isAndroid() && t(n) < 4 || -1 !== n.indexOf("opera mobi") || -1 !== n.indexOf("hpwos/");
                return i && r && a && !s }, isTouchDevice: function() {
                return this.supportsEvent("touchmove") }, isIos: function() {
                return /ipad|iphone|ipod/i.test(this.USER_AGENT) }, isAndroid: function() {
                return -1 !== this.USER_AGENT.indexOf("Android") }, supportsSandboxedIframes: function() {
                return n() }, throwsMixedContentWarningWhenIframeSrcIsEmpty: function() {
                return !("querySelector" in document) }, displaysCaretInEmptyContentEditableCorrectly: function() {
                return n() }, hasCurrentStyleProperty: function() {
                return "currentStyle" in o }, hasHistoryIssue: function() {
                return r && "Mac" === navigator.platform.substr(0, 3) }, insertsLineBreaksOnReturn: function() {
                return r }, supportsPlaceholderAttributeOn: function(e) {
                return "placeholder" in e }, supportsEvent: function(e) {
                return "on" + e in o || function() {
                    return o.setAttribute("on" + e, "return;"), "function" == typeof o["on" + e] }() }, supportsEventsInIframeCorrectly: function() {
                return !l }, supportsHTML5Tags: function(e) {
                var t = e.createElement("div"),
                    n = "<article>foo</article>";
                return t.innerHTML = n, t.innerHTML.toLowerCase() === n }, supportsCommand: function() {
                var e = { formatBlock: n(10, "<="), insertUnorderedList: n(), insertOrderedList: n() },
                    t = { insertHTML: r };
                return function(n, i) {
                    if (!e[i]) {
                        try {
                            return n.queryCommandSupported(i) } catch (e) {}
                        try {
                            return n.queryCommandEnabled(i) } catch (e) {
                            return !!t[i] } }
                    return !1 } }(), doesAutoLinkingInContentEditable: function() {
                return n() }, canDisableAutoLinking: function() {
                return this.supportsCommand(document, "AutoUrlDetect") }, clearsContentEditableCorrectly: function() {
                return r || l || a }, supportsGetAttributeCorrectly: function() {
                return "1" != document.createElement("td").getAttribute("rowspan") }, canSelectImagesInContentEditable: function() {
                return r || n() || l }, autoScrollsToCaret: function() {
                return !a }, autoClosesUnclosedTags: function() {
                var e, t, n = o.cloneNode(!1);
                return n.innerHTML = "<p><div></div>", t = n.innerHTML.toLowerCase(), e = "<p></p><div></div>" === t || "<p><div></div></p>" === t, this.autoClosesUnclosedTags = function() {
                    return e }, e }, supportsNativeGetElementsByClassName: function() {
                return -1 !== String(document.getElementsByClassName).indexOf("[native code]") }, supportsSelectionModify: function() {
                return "getSelection" in window && "modify" in window.getSelection() }, needsSpaceAfterLineBreak: function() {
                return l }, supportsSpeechApiOn: function(e) {
                return (i.match(/Chrome\/(\d+)/) || [undefined, 0])[1] >= 11 && ("onwebkitspeechchange" in e || "speech" in e) }, crashesWhenDefineProperty: function(e) {
                return n(9) && ("XMLHttpRequest" === e || "XDomainRequest" === e) }, doesAsyncFocus: function() {
                return n() }, hasProblemsSettingCaretAfterImg: function() {
                return n() }, hasUndoInContextMenu: function() {
                return r || s || l }, hasInsertNodeIssue: function() {
                return l }, hasIframeFocusIssue: function() {
                return n() }, createsNestedInvalidMarkupAfterPaste: function() {
                return a }, supportsMutationEvents: function() {
                return "MutationEvent" in window } } }(), wysihtml5.lang.array = function(e) {
        return { contains: function(t) {
                if (Array.isArray(t)) {
                    for (var n = t.length; n--;)
                        if (-1 !== wysihtml5.lang.array(e).indexOf(t[n])) return !0;
                    return !1 }
                return -1 !== wysihtml5.lang.array(e).indexOf(t) }, indexOf: function(t) {
                if (e.indexOf) return e.indexOf(t);
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1 }, without: function(t) { t = wysihtml5.lang.array(t);
                for (var n = [], i = 0, o = e.length; i < o; i++) t.contains(e[i]) || n.push(e[i]);
                return n }, get: function() {
                for (var t = 0, n = e.length, i = []; t < n; t++) i.push(e[t]);
                return i }, map: function(t, n) {
                if (Array.prototype.map) return e.map(t, n);
                for (var i = e.length >>> 0, o = new Array(i), r = 0; r < i; r++) o[r] = t.call(n, e[r], r, e);
                return o }, unique: function() {
                for (var t = [], n = e.length, i = 0; i < n;) wysihtml5.lang.array(t).contains(e[i]) || t.push(e[i]), i++;
                return t } } }, wysihtml5.lang.Dispatcher = Base.extend({ on: function(e, t) {
            return this.events = this.events || {}, this.events[e] = this.events[e] || [], this.events[e].push(t), this }, off: function(e, t) { this.events = this.events || {};
            var n, i, o = 0;
            if (e) {
                for (n = this.events[e] || [], i = []; o < n.length; o++) n[o] !== t && t && i.push(n[o]);
                this.events[e] = i } else this.events = {};
            return this }, fire: function(e, t) { this.events = this.events || {};
            for (var n = this.events[e] || [], i = 0; i < n.length; i++) n[i].call(this, t);
            return this }, observe: function() {
            return this.on.apply(this, arguments) }, stopObserving: function() {
            return this.off.apply(this, arguments) } }), wysihtml5.lang.object = function(e) {
        return { merge: function(t) {
                for (var n in t) e[n] = t[n];
                return this }, get: function() {
                return e }, clone: function() {
                var t, n = {};
                for (t in e) n[t] = e[t];
                return n }, isArray: function() {
                return "[object Array]" === Object.prototype.toString.call(e) } } },
    function() {
        var e = /^\s+/,
            t = /\s+$/,
            n = /[&<>"]/g,
            i = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
        wysihtml5.lang.string = function(o) {
            return o = String(o), { trim: function() {
                    return o.replace(e, "").replace(t, "") }, interpolate: function(e) {
                    for (var t in e) o = this.replace("#{" + t + "}").by(e[t]);
                    return o }, replace: function(e) {
                    return { by: function(t) {
                            return o.split(e).join(t) } } }, escapeHTML: function() {
                    return o.replace(n, function(e) {
                        return i[e] }) } } } }(),
    function(e) {
        function t(e, t) {
            return r(e, t) ? e : (e === e.ownerDocument.documentElement && (e = e.ownerDocument.body), a(e, t)) }

        function n(e) {
            return e.replace(l, function(e, t) {
                var n = (t.match(c) || [])[1] || "",
                    i = d[n];
                t = t.replace(c, ""), t.split(i).length > t.split(n).length && (t += n, n = "");
                var o = t,
                    r = t;
                return t.length > u && (r = r.substr(0, u) + "..."), "www." === o.substr(0, 4) && (o = "http://" + o), '<a href="' + o + '">' + r + "</a>" + n }) }

        function i(e) {
            var t = e._wysihtml5_tempElement;
            return t || (t = e._wysihtml5_tempElement = e.createElement("div")), t }

        function o(t) {
            var o = t.parentNode,
                r = e.lang.string(t.data).escapeHTML(),
                a = i(o.ownerDocument);
            for (a.innerHTML = "<span></span>" + n(r), a.removeChild(a.firstChild); a.firstChild;) o.insertBefore(a.firstChild, t);
            o.removeChild(t) }

        function r(t, n) {
            for (var i; t.parentNode;) {
                if (t = t.parentNode, i = t.nodeName, t.className && e.lang.array(t.className.split(" ")).contains(n)) return !0;
                if (s.contains(i)) return !0;
                if ("body" === i) return !1 }
            return !1 }

        function a(t, n) {
            if (!(s.contains(t.nodeName) || t.className && e.lang.array(t.className.split(" ")).contains(n))) {
                if (t.nodeType === e.TEXT_NODE && t.data.match(l)) return void o(t);
                for (var i = e.lang.array(t.childNodes).get(), r = i.length, c = 0; c < r; c++) a(i[c], n);
                return t } }
        var s = e.lang.array(["CODE", "PRE", "A", "SCRIPT", "HEAD", "TITLE", "STYLE"]),
            l = /((https?:\/\/|www\.)[^\s<]{3,})/gi,
            c = /([^\w\/\-](,?))$/i,
            u = 100,
            d = { ")": "(", "]": "[", "}": "{" };
        e.dom.autoLink = t, e.dom.autoLink.URL_REG_EXP = l }(wysihtml5),
    function(e) {
        var t = e.dom;
        t.addClass = function(e, n) {
            var i = e.classList;
            if (i) return i.add(n);
            t.hasClass(e, n) || (e.className += " " + n) }, t.removeClass = function(e, t) {
            var n = e.classList;
            if (n) return n.remove(t);
            e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ") }, t.hasClass = function(e, t) {
            var n = e.classList;
            if (n) return n.contains(t);
            var i = e.className;
            return i.length > 0 && (i == t || new RegExp("(^|\\s)" + t + "(\\s|$)").test(i)) } }(wysihtml5), wysihtml5.dom.contains = function() {
        var e = document.documentElement;
        return e.contains ? function(e, t) {
            return t.nodeType !== wysihtml5.ELEMENT_NODE && (t = t.parentNode), e !== t && e.contains(t) } : e.compareDocumentPosition ? function(e, t) {
            return !!(16 & e.compareDocumentPosition(t)) } : void 0 }(), wysihtml5.dom.convertToList = function() {
        function e(e, t) {
            var n = e.createElement("li");
            return t.appendChild(n), n }

        function t(e, t) {
            return e.createElement(t) }

        function n(n, i, o) {
            if ("UL" === n.nodeName || "OL" === n.nodeName || "MENU" === n.nodeName) return n;
            var r, a, s, l, c, u, d, f, h, p = n.ownerDocument,
                m = t(p, i),
                g = n.querySelectorAll("br"),
                y = g.length;
            for (h = 0; h < y; h++)
                for (l = g[h];
                    (c = l.parentNode) && c !== n && c.lastChild === l;) {
                    if ("block" === wysihtml5.dom.getStyle("display").from(c)) { c.removeChild(l);
                        break }
                    wysihtml5.dom.insert(l).after(l.parentNode) }
            for (r = wysihtml5.lang.array(n.childNodes).get(), a = r.length, h = 0; h < a; h++) f = f || e(p, m), s = r[h], u = "block" === wysihtml5.dom.getStyle("display").from(s), d = "BR" === s.nodeName, !u || o && wysihtml5.dom.hasClass(s, o) ? d ? f = f.firstChild ? null : f : f.appendChild(s) : (f = f.firstChild ? e(p, m) : f, f.appendChild(s), f = null);
            return 0 === r.length && e(p, m), n.parentNode.replaceChild(m, n), m }
        return n }(), wysihtml5.dom.copyAttributes = function(e) {
        return { from: function(t) {
                return { to: function(n) {
                        for (var i, o = 0, r = e.length; o < r; o++) i = e[o], "undefined" != typeof t[i] && "" !== t[i] && (n[i] = t[i]);
                        return { andTo: arguments.callee } } } } } },
    function(e) {
        var t = ["-webkit-box-sizing", "-moz-box-sizing", "-ms-box-sizing", "box-sizing"],
            n = function(t) {
                return !!i(t) && parseInt(e.getStyle("width").from(t), 10) < t.offsetWidth },
            i = function(n) {
                for (var i = 0, o = t.length; i < o; i++)
                    if ("border-box" === e.getStyle(t[i]).from(n)) return t[i] };
        e.copyStyles = function(i) {
            return { from: function(o) { n(o) && (i = wysihtml5.lang.array(i).without(t));
                    for (var r, a = "", s = i.length, l = 0; l < s; l++) r = i[l], a += r + ":" + e.getStyle(r).from(o) + ";";
                    return { to: function(t) {
                            return e.setStyles(a).on(t), { andTo: arguments.callee } } } } } } }(wysihtml5.dom),
    function(e) { e.dom.delegate = function(t, n, i, o) {
            return e.dom.observe(t, i, function(i) {
                for (var r = i.target, a = e.lang.array(t.querySelectorAll(n)); r && r !== t;) {
                    if (a.contains(r)) { o.call(r, i);
                        break }
                    r = r.parentNode } }) } }(wysihtml5),
    function(e) { e.dom.domNode = function(t) {
            var n = [e.ELEMENT_NODE, e.TEXT_NODE],
                i = function(t) {
                    return t.nodeType === e.TEXT_NODE && /^\s*$/g.test(t.data) };
            return { prev: function(o) {
                    var r = t.previousSibling,
                        a = o && o.nodeTypes ? o.nodeTypes : n;
                    return r ? !e.lang.array(a).contains(r.nodeType) || o && o.ignoreBlankTexts && i(r) ? e.dom.domNode(r).prev(o) : r : null }, next: function(o) {
                    var r = t.nextSibling,
                        a = o && o.nodeTypes ? o.nodeTypes : n;
                    return r ? !e.lang.array(a).contains(r.nodeType) || o && o.ignoreBlankTexts && i(r) ? e.dom.domNode(r).next(o) : r : null } } } }(wysihtml5), wysihtml5.dom.getAsDom = function() {
        var e = function(e, t) {
                var n = t.createElement("div");
                n.style.display = "none", t.body.appendChild(n);
                try { n.innerHTML = e } catch (e) {}
                return t.body.removeChild(n), n },
            t = function(e) {
                if (!e._wysihtml5_supportsHTML5Tags) {
                    for (var t = 0, i = n.length; t < i; t++) e.createElement(n[t]);
                    e._wysihtml5_supportsHTML5Tags = !0 } },
            n = ["abbr", "article", "aside", "audio", "bdi", "canvas", "command", "datalist", "details", "figcaption", "figure", "footer", "header", "hgroup", "keygen", "mark", "meter", "nav", "output", "progress", "rp", "rt", "ruby", "svg", "section", "source", "summary", "time", "track", "video", "wbr"];
        return function(n, i) { i = i || document;
            var o;
            return "object" == typeof n && n.nodeType ? (o = i.createElement("div"), o.appendChild(n)) : wysihtml5.browser.supportsHTML5Tags(i) ? (o = i.createElement("div"), o.innerHTML = n) : (t(i), o = e(n, i)), o } }(), wysihtml5.dom.getParentElement = function() {
        function e(e, t) {
            return !t || !t.length || ("string" == typeof t ? e === t : wysihtml5.lang.array(t).contains(e)) }

        function t(e) {
            return e.nodeType === wysihtml5.ELEMENT_NODE }

        function n(e, t, n) {
            var i = (e.className || "").match(n) || [];
            return t ? i[i.length - 1] === t : !!i.length }

        function i(e, t, n) {
            var i = (e.getAttribute("style") || "").match(n) || [];
            return t ? i[i.length - 1] === t : !!i.length }
        return function(o, r, a, s) {
            var l = r.cssStyle || r.styleRegExp,
                c = r.className || r.classRegExp;
            for (a = a || 50; a-- && o && "BODY" !== o.nodeName && (!s || o !== s);) {
                if (t(o) && e(o.nodeName, r.nodeName) && (!l || i(o, r.cssStyle, r.styleRegExp)) && (!c || n(o, r.className, r.classRegExp))) return o;
                o = o.parentNode }
            return null } }(), wysihtml5.dom.getStyle = function() {
        function e(e) {
            return e.replace(n, function(e) {
                return e.charAt(1).toUpperCase() }) }
        var t = { "float": "styleFloat" in document.createElement("div").style ? "styleFloat" : "cssFloat" },
            n = /\-[a-z]/g;
        return function(n) {
            return { from: function(i) {
                    if (i.nodeType === wysihtml5.ELEMENT_NODE) {
                        var o = i.ownerDocument,
                            r = t[n] || e(n),
                            a = i.style,
                            s = i.currentStyle,
                            l = a[r];
                        if (l) return l;
                        if (s) try {
                            return s[r] } catch (e) {}
                        var c, u, d = o.defaultView || o.parentWindow,
                            f = ("height" === n || "width" === n) && "TEXTAREA" === i.nodeName;
                        return d.getComputedStyle ? (f && (c = a.overflow, a.overflow = "hidden"), u = d.getComputedStyle(i, null).getPropertyValue(n), f && (a.overflow = c || ""), u) : void 0 } } } } }(), wysihtml5.dom.getTextNodes = function(e, t) {
        var n = [];
        for (e = e.firstChild; e; e = e.nextSibling) 3 == e.nodeType ? t && /^\s*$/.test(e.innerText || e.textContent) || n.push(e) : n = n.concat(wysihtml5.dom.getTextNodes(e, t));
        return n }, wysihtml5.dom.hasElementWithTagName = function() {
        function e(e) {
            return e._wysihtml5_identifier || (e._wysihtml5_identifier = n++) }
        var t = {},
            n = 1;
        return function(n, i) {
            var o = e(n) + ":" + i,
                r = t[o];
            return r || (r = t[o] = n.getElementsByTagName(i)), r.length > 0 } }(),
    function(e) {
        function t(e) {
            return e._wysihtml5_identifier || (e._wysihtml5_identifier = i++) }
        var n = {},
            i = 1;
        e.dom.hasElementWithClassName = function(i, o) {
            if (!e.browser.supportsNativeGetElementsByClassName()) return !!i.querySelector("." + o);
            var r = t(i) + ":" + o,
                a = n[r];
            return a || (a = n[r] = i.getElementsByClassName(o)), a.length > 0 } }(wysihtml5), wysihtml5.dom.insert = function(e) {
        return { after: function(t) { t.parentNode.insertBefore(e, t.nextSibling) }, before: function(t) { t.parentNode.insertBefore(e, t) }, into: function(t) { t.appendChild(e) } } }, wysihtml5.dom.insertCSS = function(e) {
        return e = e.join("\n"), { into: function(t) {
                var n = t.createElement("style");
                n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e));
                var i = t.querySelector("head link");
                if (i) return void i.parentNode.insertBefore(n, i);
                var o = t.querySelector("head");
                o && o.appendChild(n) } } },
    function(e) { e.dom.lineBreaks = function(t) {
            function n(e) {
                return "BR" === e.nodeName }

            function i(t) {
                return !!n(t) || "block" === e.dom.getStyle("display").from(t) }
            return { add: function() {
                    var n = t.ownerDocument,
                        o = e.dom.domNode(t).next({ ignoreBlankTexts: !0 }),
                        r = e.dom.domNode(t).prev({ ignoreBlankTexts: !0 });
                    o && !i(o) && e.dom.insert(n.createElement("br")).after(t), r && !i(r) && e.dom.insert(n.createElement("br")).before(t) }, remove: function() {
                    var i = e.dom.domNode(t).next({ ignoreBlankTexts: !0 }),
                        o = e.dom.domNode(t).prev({ ignoreBlankTexts: !0 });
                    i && n(i) && i.parentNode.removeChild(i), o && n(o) && o.parentNode.removeChild(o) } } } }(wysihtml5), wysihtml5.dom.observe = function(e, t, n) { t = "string" == typeof t ? [t] : t;
        for (var i, o, r = 0, a = t.length; r < a; r++) o = t[r], e.addEventListener ? e.addEventListener(o, n, !1) : (i = function(t) { "target" in t || (t.target = t.srcElement), t.preventDefault = t.preventDefault || function() { this.returnValue = !1 }, t.stopPropagation = t.stopPropagation || function() { this.cancelBubble = !0 }, n.call(e, t) }, e.attachEvent("on" + o, i));
        return { stop: function() {
                for (var o, r = 0, a = t.length; r < a; r++) o = t[r], e.removeEventListener ? e.removeEventListener(o, n, !1) : e.detachEvent("on" + o, i) } } }, wysihtml5.dom.parse = function() {
        function e(e, n) { wysihtml5.lang.object(m).merge(p).merge(n.rules).get();
            var i, o, r, a = n.context || e.ownerDocument || document,
                s = a.createDocumentFragment(),
                l = "string" == typeof e,
                c = !1;
            for (!0 === n.clearInternals && (c = !0), n.uneditableClass && (g = n.uneditableClass), i = l ? wysihtml5.dom.getAsDom(e, a) : e; i.firstChild;) r = i.firstChild, o = t(r, n.cleanUp, c), o && s.appendChild(o), r !== o && i.removeChild(r);
            return i.innerHTML = "", i.appendChild(s), l ? wysihtml5.quirks.getCorrectInnerHTML(i) : i }

        function t(e, n, i) {
            var o, r, a, s = e.nodeType,
                l = e.childNodes,
                c = l.length,
                u = d[s],
                h = 0;
            if (g && 1 === s && wysihtml5.dom.hasClass(e, g)) return e;
            if (!(r = u && u(e, i))) {
                if (!1 === r) {
                    for (o = e.ownerDocument.createDocumentFragment(), h = c; h--;) l[h] && (a = t(l[h], n, i)) && (l[h] === a && h--, o.insertBefore(a, o.firstChild));
                    return wysihtml5.lang.array(["div", "pre", "p", "table", "td", "th", "ul", "ol", "li", "dd", "dl", "footer", "header", "section", "h1", "h2", "h3", "h4", "h5", "h6"]).contains(e.nodeName.toLowerCase()) && e.parentNode.lastChild !== e && (e.nextSibling && 3 === e.nextSibling.nodeType && /^\s/.test(e.nextSibling.nodeValue) || o.appendChild(e.ownerDocument.createTextNode(" "))), o.normalize && o.normalize(), o }
                return null }
            for (h = 0; h < c; h++) l[h] && (a = t(l[h], n, i)) && (l[h] === a && h--, r.appendChild(a));
            if (n && r.nodeName.toLowerCase() === f && (!r.childNodes.length || /^\s*$/gi.test(r.innerHTML) && (i || "_wysihtml5-temp-placeholder" !== e.className && "rangySelectionBoundary" !== e.className) || !r.attributes.length)) {
                for (o = r.ownerDocument.createDocumentFragment(); r.firstChild;) o.appendChild(r.firstChild);
                return o.normalize && o.normalize(), o }
            return r.normalize && r.normalize(), r }

        function n(e, t) {
            var n, o, s = m.tags,
                l = e.nodeName.toLowerCase(),
                c = e.scopeName;
            if (e._wysihtml5) return null;
            if (e._wysihtml5 = 1, "wysihtml5-temp" === e.className) return null;
            if (c && "HTML" != c && (l = c + ":" + l), "outerHTML" in e && (wysihtml5.browser.autoClosesUnclosedTags() || "P" !== e.nodeName || "</p>" === e.outerHTML.slice(-4).toLowerCase() || (l = "div")), l in s) {
                if (!(n = s[l]) || n.remove) return null;
                if (n.unwrap) return !1;
                n = "string" == typeof n ? { rename_tag: n } : n } else {
                if (!e.firstChild) return null;
                n = { rename_tag: f } }
            return o = e.ownerDocument.createElement(n.rename_tag || l), a(e, o, n, t), r(e, o, n), n.one_of_type && !i(e, m, n.one_of_type, t) ? (!n.remove_action || "unwrap" != n.remove_action) && null : (e = null, o.normalize && o.normalize(), o) }

        function i(e, t, n, i) {
            var r, a;
            if ("SPAN" === e.nodeName && !i && ("_wysihtml5-temp-placeholder" === e.className || "rangySelectionBoundary" === e.className)) return !0;
            for (a in n)
                if (n.hasOwnProperty(a) && t.type_definitions && t.type_definitions[a] && (r = t.type_definitions[a], o(e, r))) return !0;
            return !1 }

        function o(e, t) {
            var n, i, o, r, a, l = e.getAttribute("class"),
                c = e.getAttribute("style");
            if (t.methods)
                for (var u in t.methods)
                    if (t.methods.hasOwnProperty(u) && x[u] && x[u](e)) return !0;
            if (l && t.classes) { l = l.replace(/^\s+/g, "").replace(/\s+$/g, "").split(h), n = l.length;
                for (var d = 0; d < n; d++)
                    if (t.classes[l[d]]) return !0 }
            if (c && t.styles) { c = c.split(";");
                for (i in t.styles)
                    if (t.styles.hasOwnProperty(i))
                        for (var f = c.length; f--;)
                            if (a = c[f].split(":"), a[0].replace(/\s/g, "").toLowerCase() === i && (!0 === t.styles[i] || 1 === t.styles[i] || wysihtml5.lang.array(t.styles[i]).contains(a[1].replace(/\s/g, "").toLowerCase()))) return !0 }
            if (t.attrs)
                for (o in t.attrs)
                    if (t.attrs.hasOwnProperty(o) && "string" == typeof(r = s(e, o)) && r.search(t.attrs[o]) > -1) return !0;
            return !1 }

        function r(e, t, n) {
            var i;
            if (n && n.keep_styles)
                for (i in n.keep_styles) n.keep_styles.hasOwnProperty(i) && ("float" == i ? (e.style.styleFloat && (t.style.styleFloat = e.style.styleFloat), e.style.cssFloat && (t.style.cssFloat = e.style.cssFloat)) : e.style[i] && (t.style[i] = e.style[i])) }

        function a(e, t, n, i) {
            var o, r, a, l, c, u, d, f = {},
                p = n.set_class,
                g = n.add_class,
                y = n.add_style,
                v = n.set_attributes,
                x = n.check_attributes,
                C = m.classes,
                S = 0,
                T = [],
                E = [],
                k = [],
                N = [];
            if (v && (f = wysihtml5.lang.object(v).clone()), x)
                for (l in x)(u = b[x[l]]) && ((d = s(e, l)) || "alt" === l && "IMG" == e.nodeName) && "string" == typeof(c = u(d)) && (f[l] = c);
            if (p && T.push(p), g)
                for (l in g)(u = _[g[l]]) && "string" == typeof(a = u(s(e, l))) && T.push(a);
            if (y)
                for (l in y)(u = w[y[l]]) && (newStyle = u(s(e, l)), "string" == typeof newStyle && E.push(newStyle));
            if ("string" == typeof C && "any" === C && e.getAttribute("class")) f["class"] = e.getAttribute("class");
            else {
                for (i || (C["_wysihtml5-temp-placeholder"] = 1, C._rangySelectionBoundary = 1, C["wysiwyg-tmp-selected-cell"] = 1), N = e.getAttribute("class"), N && (T = T.concat(N.split(h))), o = T.length; S < o; S++) r = T[S], C[r] && k.push(r);
                k.length && (f["class"] = wysihtml5.lang.array(k).unique().join(" ")) }
            f["class"] && i && (f["class"] = f["class"].replace("wysiwyg-tmp-selected-cell", ""), /^\s*$/g.test(f["class"]) && delete f["class"]), E.length && (f.style = wysihtml5.lang.array(E).unique().join(" "));
            for (l in f) try { t.setAttribute(l, f[l]) } catch (e) {}
            f.src && ("undefined" != typeof f.width && t.setAttribute("width", f.width), "undefined" != typeof f.height && t.setAttribute("height", f.height)) }

        function s(e, t) {
            if (t = t.toLowerCase(), "IMG" == e.nodeName && "src" == t && !0 === l(e)) return e.src;
            if (y && "outerHTML" in e) {
                return -1 != e.outerHTML.toLowerCase().indexOf(" " + t + "=") ? e.getAttribute(t) : null }
            return e.getAttribute(t) }

        function l(e) {
            try {
                return e.complete && !e.mozMatchesSelector(":-moz-broken") } catch (t) {
                if (e.complete && "complete" === e.readyState) return !0 } }

        function c(e) {
            var t = e.nextSibling;
            if (!t || t.nodeType !== wysihtml5.TEXT_NODE) {
                var n = e.data.replace(v, "");
                return e.ownerDocument.createTextNode(n) }
            t.data = e.data.replace(v, "") + t.data.replace(v, "") }

        function u(e) {
            if (m.comments) return e.ownerDocument.createComment(e.nodeValue) }
        var d = { 1: n, 3: c, 8: u },
            f = "span",
            h = /\s+/,
            p = { tags: {}, classes: {} },
            m = {},
            g = !1,
            y = !wysihtml5.browser.supportsGetAttributeCorrectly(),
            v = /\uFEFF/g,
            b = { url: function() {
                    var e = /^https?:\/\//i;
                    return function(t) {
                        return t && t.match(e) ? t.replace(e, function(e) {
                            return e.toLowerCase() }) : null } }(), src: function() {
                    var e = /^(\/|https?:\/\/)/i;
                    return function(t) {
                        return t && t.match(e) ? t.replace(e, function(e) {
                            return e.toLowerCase() }) : null } }(), href: function() {
                    var e = /^(#|\/|https?:\/\/|mailto:)/i;
                    return function(t) {
                        return t && t.match(e) ? t.replace(e, function(e) {
                            return e.toLowerCase() }) : null } }(), alt: function() {
                    var e = /[^ a-z0-9_\-]/gi;
                    return function(t) {
                        return t ? t.replace(e, "") : "" } }(), numbers: function() {
                    var e = /\D/g;
                    return function(t) {
                        return (t = (t || "").replace(e, "")) || null } }(), any: function() {
                    return function(e) {
                        return e } }() },
            w = { align_text: function() {
                    var e = { left: "text-align: left;", right: "text-align: right;", center: "text-align: center;" };
                    return function(t) {
                        return e[String(t).toLowerCase()] } }() },
            _ = { align_img: function() {
                    var e = { left: "wysiwyg-float-left", right: "wysiwyg-float-right" };
                    return function(t) {
                        return e[String(t).toLowerCase()] } }(), align_text: function() {
                    var e = { left: "wysiwyg-text-align-left", right: "wysiwyg-text-align-right", center: "wysiwyg-text-align-center", justify: "wysiwyg-text-align-justify" };
                    return function(t) {
                        return e[String(t).toLowerCase()] } }(), clear_br: function() {
                    var e = { left: "wysiwyg-clear-left", right: "wysiwyg-clear-right", both: "wysiwyg-clear-both", all: "wysiwyg-clear-both" };
                    return function(t) {
                        return e[String(t).toLowerCase()] } }(), size_font: function() {
                    var e = { 1: "wysiwyg-font-size-xx-small", 2: "wysiwyg-font-size-small", 3: "wysiwyg-font-size-medium", 4: "wysiwyg-font-size-large", 5: "wysiwyg-font-size-x-large", 6: "wysiwyg-font-size-xx-large", 7: "wysiwyg-font-size-xx-large", "-": "wysiwyg-font-size-smaller", "+": "wysiwyg-font-size-larger" };
                    return function(t) {
                        return e[String(t).charAt(0)] } }() },
            x = { has_visible_contet: function() {
                    var e, t = ["img", "video", "picture", "br", "script", "noscript", "style", "table", "iframe", "object", "embed", "audio", "svg", "input", "button", "select", "textarea", "canvas"];
                    return function(n) {
                        if ((e = (n.innerText || n.textContent).replace(/\s/g, "")) && e.length > 0) return !0;
                        for (var i = t.length; i--;)
                            if (n.querySelector(t[i])) return !0;
                        return !!(n.offsetWidth && n.offsetWidth > 0 && n.offsetHeight && n.offsetHeight > 0) } }() };
        return e }(), wysihtml5.dom.removeEmptyTextNodes = function(e) {
        for (var t, n = wysihtml5.lang.array(e.childNodes).get(), i = n.length, o = 0; o < i; o++) t = n[o], t.nodeType === wysihtml5.TEXT_NODE && "" === t.data && t.parentNode.removeChild(t) }, wysihtml5.dom.renameElement = function(e, t) {
        for (var n, i = e.ownerDocument.createElement(t); n = e.firstChild;) i.appendChild(n);
        return wysihtml5.dom.copyAttributes(["align", "className"]).from(e).to(i), e.parentNode.replaceChild(i, e), i }, wysihtml5.dom.replaceWithChildNodes = function(e) {
        if (e.parentNode) {
            if (!e.firstChild) return void e.parentNode.removeChild(e);
            for (var t = e.ownerDocument.createDocumentFragment(); e.firstChild;) t.appendChild(e.firstChild);
            e.parentNode.replaceChild(t, e), e = t = null } },
    function(e) {
        function t(t) {
            return "block" === e.getStyle("display").from(t) }

        function n(e) {
            return "BR" === e.nodeName }

        function i(e) {
            var t = e.ownerDocument.createElement("br");
            e.appendChild(t) }

        function o(e, o) {
            if (e.nodeName.match(/^(MENU|UL|OL)$/)) {
                var r, a, s, l, c, u, d = e.ownerDocument,
                    f = d.createDocumentFragment(),
                    h = wysihtml5.dom.domNode(e).prev({ ignoreBlankTexts: !0 });
                if (o)
                    for (!h || t(h) || n(h) || i(f); u = e.firstElementChild || e.firstChild;) {
                        for (a = u.lastChild; r = u.firstChild;) s = r === a, l = s && !t(r) && !n(r), f.appendChild(r), l && i(f);
                        u.parentNode.removeChild(u) } else
                        for (; u = e.firstElementChild || e.firstChild;) {
                            if (u.querySelector && u.querySelector("div, p, ul, ol, menu, blockquote, h1, h2, h3, h4, h5, h6"))
                                for (; r = u.firstChild;) f.appendChild(r);
                            else {
                                for (c = d.createElement("p"); r = u.firstChild;) c.appendChild(r);
                                f.appendChild(c) }
                            u.parentNode.removeChild(u) }
                e.parentNode.replaceChild(f, e) } }
        e.resolveList = o }(wysihtml5.dom),
    function(e) {
        var t = document,
            n = ["parent", "top", "opener", "frameElement", "frames", "localStorage", "globalStorage", "sessionStorage", "indexedDB"],
            i = ["open", "close", "openDialog", "showModalDialog", "alert", "confirm", "prompt", "openDatabase", "postMessage", "XMLHttpRequest", "XDomainRequest"],
            o = ["referrer", "write", "open", "close"];
        e.dom.Sandbox = Base.extend({
            constructor: function(t, n) { this.callback = t || e.EMPTY_FUNCTION, this.config = e.lang.object({}).merge(n).get(), this.editableArea = this._createIframe() },
            insertInto: function(e) { "string" == typeof e && (e = t.getElementById(e)), e.appendChild(this.editableArea) },
            getIframe: function() {
                return this.editableArea },
            getWindow: function() { this._readyError() },
            getDocument: function() { this._readyError() },
            destroy: function() {
                var e = this.getIframe();
                e.parentNode.removeChild(e) },
            _readyError: function() {
                throw new Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet") },
            _createIframe: function() {
                var n = this,
                    i = t.createElement("iframe");
                return i.className = "wysihtml5-sandbox", e.dom.setAttributes({ security: "restricted", allowtransparency: "true", frameborder: 0, width: 0, height: 0, marginwidth: 0, marginheight: 0 }).on(i), e.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty() && (i.src = "javascript:'<html></html>'"), i.onload = function() { i.onreadystatechange = i.onload = null, n._onLoadIframe(i) }, i.onreadystatechange = function() { /loaded|complete/.test(i.readyState) && (i.onreadystatechange = i.onload = null, n._onLoadIframe(i)) }, i },
            _onLoadIframe: function(r) {
                if (e.dom.contains(t.documentElement, r)) {
                    var a = this,
                        s = r.contentWindow,
                        l = r.contentWindow.document,
                        c = t.characterSet || t.charset || "utf-8",
                        u = this._getHtml({ charset: c, stylesheets: this.config.stylesheets });
                    if (l.open("text/html", "replace"), l.write(u), l.close(), this.getWindow = function() {
                            return r.contentWindow }, this.getDocument = function() {
                            return r.contentWindow.document
                        }, s.onerror = function(e, t, n) {
                            throw new Error("wysihtml5.Sandbox: " + e, t, n) }, !e.browser.supportsSandboxedIframes()) {
                        var d, f;
                        for (d = 0, f = n.length; d < f; d++) this._unset(s, n[d]);
                        for (d = 0, f = i.length; d < f; d++) this._unset(s, i[d], e.EMPTY_FUNCTION);
                        for (d = 0, f = o.length; d < f; d++) this._unset(l, o[d]);
                        this._unset(l, "cookie", "", !0) }
                    this.loaded = !0, setTimeout(function() { a.callback(a) }, 0)
                }
            },
            _getHtml: function(t) {
                var n, i = t.stylesheets,
                    o = "",
                    r = 0;
                if (i = "string" == typeof i ? [i] : i)
                    for (n = i.length; r < n; r++) o += '<link rel="stylesheet" href="' + i[r] + '">';
                return t.stylesheets = o, e.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(t) },
            _unset: function(t, n, i, o) {
                try { t[n] = i } catch (e) {}
                try { t.__defineGetter__(n, function() {
                        return i }) } catch (e) {}
                if (o) try { t.__defineSetter__(n, function() {}) } catch (e) {}
                if (!e.browser.crashesWhenDefineProperty(n)) try {
                    var r = { get: function() {
                            return i } };
                    o && (r.set = function() {}), Object.defineProperty(t, n, r) } catch (e) {} }
        })
    }(wysihtml5),
    function(e) {
        var t = document;
        e.dom.ContentEditableArea = Base.extend({ getContentEditable: function() {
                return this.element }, getWindow: function() {
                return this.element.ownerDocument.defaultView }, getDocument: function() {
                return this.element.ownerDocument }, constructor: function(t, n, i) { this.callback = t || e.EMPTY_FUNCTION, this.config = e.lang.object({}).merge(n).get(), this.element = i ? this._bindElement(i) : this._createElement() }, _createElement: function() {
                var e = t.createElement("div");
                return e.className = "wysihtml5-sandbox", this._loadElement(e), e }, _bindElement: function(e) {
                return e.className = e.className && "" != e.className ? e.className + " wysihtml5-sandbox" : "wysihtml5-sandbox", this._loadElement(e, !0), e }, _loadElement: function(e, t) {
                var n = this;
                if (!t) {
                    var i = this._getHtml();
                    e.innerHTML = i }
                this.getWindow = function() {
                    return e.ownerDocument.defaultView }, this.getDocument = function() {
                    return e.ownerDocument }, this.loaded = !0, setTimeout(function() { n.callback(n) }, 0) }, _getHtml: function() {
                return "" } }) }(wysihtml5),
    function() {
        var e = { className: "class" };
        wysihtml5.dom.setAttributes = function(t) {
            return { on: function(n) {
                    for (var i in t) n.setAttribute(e[i] || i, t[i]) } } } }(), wysihtml5.dom.setStyles = function(e) {
        return { on: function(t) {
                var n = t.style;
                if ("string" == typeof e) return void(n.cssText += ";" + e);
                for (var i in e) "float" === i ? (n.cssFloat = e[i], n.styleFloat = e[i]) : n[i] = e[i] } } },
    function(e) { e.simulatePlaceholder = function(t, n, i) {
            var o = "placeholder",
                r = function() {
                    var t = n.element.offsetWidth > 0 && n.element.offsetHeight > 0;
                    n.hasPlaceholderSet() && (n.clear(), n.element.focus(), t && setTimeout(function() {
                        var e = n.selection.getSelection();
                        e.focusNode && e.anchorNode || n.selection.selectNode(n.element.firstChild || n.element) }, 0)), n.placeholderSet = !1, e.removeClass(n.element, o) },
                a = function() { n.isEmpty() && (n.placeholderSet = !0, n.setValue(i), e.addClass(n.element, o)) };
            t.on("set_placeholder", a).on("unset_placeholder", r).on("focus:composer", r).on("paste:composer", r).on("blur:composer", a), a() } }(wysihtml5.dom),
    function(e) {
        var t = document.documentElement; "textContent" in t ? (e.setTextContent = function(e, t) { e.textContent = t }, e.getTextContent = function(e) {
            return e.textContent }) : "innerText" in t ? (e.setTextContent = function(e, t) { e.innerText = t }, e.getTextContent = function(e) {
            return e.innerText }) : (e.setTextContent = function(e, t) { e.nodeValue = t }, e.getTextContent = function(e) {
            return e.nodeValue }) }(wysihtml5.dom), wysihtml5.dom.getAttribute = function(e, t) {
        var n = !wysihtml5.browser.supportsGetAttributeCorrectly();
        if (t = t.toLowerCase(), "IMG" == e.nodeName && "src" == t && !0 === _isLoadedImage(e)) return e.src;
        if (n && "outerHTML" in e) {
            return -1 != e.outerHTML.toLowerCase().indexOf(" " + t + "=") ? e.getAttribute(t) : null }
        return e.getAttribute(t) },
    function(e) {
        function t(e, t) {
            for (var n, i = [], o = 0, r = e.length; o < r; o++)
                if (n = e[o].querySelectorAll(t))
                    for (var a = n.length; a--; i.unshift(n[a]));
            return i }

        function n(e) { e.parentNode.removeChild(e) }

        function i(e, t) { e.parentNode.insertBefore(t, e.nextSibling) }

        function o(e, t) {
            for (var n = e.nextSibling; 1 != n.nodeType;)
                if (n = n.nextSibling, !t || t == n.tagName.toLowerCase()) return n;
            return null }
        var r = e.dom,
            a = function(e) { this.el = e, this.isColspan = !1, this.isRowspan = !1, this.firstCol = !0, this.lastCol = !0, this.firstRow = !0, this.lastRow = !0, this.isReal = !0, this.spanCollection = [], this.modified = !1 },
            s = function(e, t) { e ? (this.cell = e, this.table = r.getParentElement(e, { nodeName: ["TABLE"] })) : t && (this.table = t, this.cell = this.table.querySelectorAll("th, td")[0]) };
        s.prototype = { addSpannedCellToMap: function(e, t, n, i, o, r) {
                for (var s = [], l = n + (r ? parseInt(r, 10) - 1 : 0), c = i + (o ? parseInt(o, 10) - 1 : 0), u = n; u <= l; u++) { "undefined" == typeof t[u] && (t[u] = []);
                    for (var d = i; d <= c; d++) t[u][d] = new a(e), t[u][d].isColspan = o && parseInt(o, 10) > 1, t[u][d].isRowspan = r && parseInt(r, 10) > 1, t[u][d].firstCol = d == i, t[u][d].lastCol = d == c, t[u][d].firstRow = u == n, t[u][d].lastRow = u == l, t[u][d].isReal = d == i && u == n, t[u][d].spanCollection = s, s.push(t[u][d]) } }, setCellAsModified: function(e) {
                if (e.modified = !0, e.spanCollection.length > 0)
                    for (var t = 0, n = e.spanCollection.length; t < n; t++) e.spanCollection[t].modified = !0 }, setTableMap: function() {
                var e, t, n, i, o, s, l, c, u = [],
                    d = this.getTableRows();
                for (e = 0; e < d.length; e++)
                    for (t = d[e], n = this.getRowCells(t), s = 0, "undefined" == typeof u[e] && (u[e] = []), i = 0; i < n.length; i++) {
                        for (o = n[i];
                            "undefined" != typeof u[e][s];) s++;
                        l = r.getAttribute(o, "colspan"), c = r.getAttribute(o, "rowspan"), l || c ? (this.addSpannedCellToMap(o, u, e, s, l, c), s += l ? parseInt(l, 10) : 1) : (u[e][s] = new a(o), s++) }
                return this.map = u, u }, getRowCells: function(n) {
                var i = this.table.querySelectorAll("table"),
                    o = i ? t(i, "th, td") : [],
                    r = n.querySelectorAll("th, td");
                return o.length > 0 ? e.lang.array(r).without(o) : r }, getTableRows: function() {
                var n = this.table.querySelectorAll("table"),
                    i = n ? t(n, "tr") : [],
                    o = this.table.querySelectorAll("tr");
                return i.length > 0 ? e.lang.array(o).without(i) : o }, getMapIndex: function(e) {
                for (var t = this.map.length, n = this.map && this.map[0] ? this.map[0].length : 0, i = 0; i < t; i++)
                    for (var o = 0; o < n; o++)
                        if (this.map[i][o].el === e) return { row: i, col: o };
                return !1 }, getElementAtIndex: function(e) {
                return this.setTableMap(), this.map[e.row] && this.map[e.row][e.col] && this.map[e.row][e.col].el ? this.map[e.row][e.col].el : null }, getMapElsTo: function(e) {
                var t = [];
                if (this.setTableMap(), this.idx_start = this.getMapIndex(this.cell), this.idx_end = this.getMapIndex(e), this.idx_start.row > this.idx_end.row || this.idx_start.row == this.idx_end.row && this.idx_start.col > this.idx_end.col) {
                    var n = this.idx_start;
                    this.idx_start = this.idx_end, this.idx_end = n }
                if (this.idx_start.col > this.idx_end.col) {
                    var i = this.idx_start.col;
                    this.idx_start.col = this.idx_end.col, this.idx_end.col = i }
                if (null != this.idx_start && null != this.idx_end)
                    for (var o = this.idx_start.row, r = this.idx_end.row; o <= r; o++)
                        for (var a = this.idx_start.col, s = this.idx_end.col; a <= s; a++) t.push(this.map[o][a].el);
                return t }, orderSelectionEnds: function(e) {
                if (this.setTableMap(), this.idx_start = this.getMapIndex(this.cell), this.idx_end = this.getMapIndex(e), this.idx_start.row > this.idx_end.row || this.idx_start.row == this.idx_end.row && this.idx_start.col > this.idx_end.col) {
                    var t = this.idx_start;
                    this.idx_start = this.idx_end, this.idx_end = t }
                if (this.idx_start.col > this.idx_end.col) {
                    var n = this.idx_start.col;
                    this.idx_start.col = this.idx_end.col, this.idx_end.col = n }
                return { start: this.map[this.idx_start.row][this.idx_start.col].el, end: this.map[this.idx_end.row][this.idx_end.col].el } }, createCells: function(e, t, n) {
                for (var i, o = this.table.ownerDocument, r = o.createDocumentFragment(), a = 0; a < t; a++) {
                    if (i = o.createElement(e), n)
                        for (var s in n) n.hasOwnProperty(s) && i.setAttribute(s, n[s]);
                    i.appendChild(document.createTextNode("\xa0")), r.appendChild(i) }
                return r }, correctColIndexForUnreals: function(e, t) {
                for (var n = this.map[t], i = -1, o = 0; o < e; o++) n[o].isReal && i++;
                return i }, getLastNewCellOnRow: function(e, t) {
                for (var n, i, o = this.getRowCells(e), r = 0, a = o.length; r < a; r++)
                    if (n = o[r], !1 === (i = this.getMapIndex(n)) || void 0 !== t && i.row != t) return n;
                return null }, removeEmptyTable: function() {
                var e = this.table.querySelectorAll("td, th");
                return (!e || 0 == e.length) && (n(this.table), !0) }, splitRowToCells: function(e) {
                if (e.isColspan) {
                    var t = parseInt(r.getAttribute(e.el, "colspan") || 1, 10),
                        n = e.el.tagName.toLowerCase();
                    if (t > 1) {
                        var o = this.createCells(n, t - 1);
                        i(e.el, o) }
                    e.el.removeAttribute("colspan") } }, getRealRowEl: function(e, t) {
                var n = null,
                    i = null;
                t = t || this.idx;
                for (var o = 0, a = this.map[t.row].length; o < a; o++)
                    if (i = this.map[t.row][o], i.isReal && (n = r.getParentElement(i.el, { nodeName: ["TR"] }))) return n;
                return null === n && e && (n = r.getParentElement(this.map[t.row][t.col].el, { nodeName: ["TR"] }) || null), n }, injectRowAt: function(e, t, n, o, a) {
                var s = this.getRealRowEl(!1, { row: e, col: t }),
                    l = this.createCells(o, n);
                if (s) {
                    var c = this.correctColIndexForUnreals(t, e);
                    c >= 0 ? i(this.getRowCells(s)[c], l) : s.insertBefore(l, s.firstChild) } else {
                    var u = this.table.ownerDocument.createElement("tr");
                    u.appendChild(l), i(r.getParentElement(a.el, { nodeName: ["TR"] }), u) } }, canMerge: function(e) {
                if (this.to = e, this.setTableMap(), this.idx_start = this.getMapIndex(this.cell), this.idx_end = this.getMapIndex(this.to), this.idx_start.row > this.idx_end.row || this.idx_start.row == this.idx_end.row && this.idx_start.col > this.idx_end.col) {
                    var t = this.idx_start;
                    this.idx_start = this.idx_end, this.idx_end = t }
                if (this.idx_start.col > this.idx_end.col) {
                    var n = this.idx_start.col;
                    this.idx_start.col = this.idx_end.col, this.idx_end.col = n }
                for (var i = this.idx_start.row, o = this.idx_end.row; i <= o; i++)
                    for (var r = this.idx_start.col, a = this.idx_end.col; r <= a; r++)
                        if (this.map[i][r].isColspan || this.map[i][r].isRowspan) return !1;
                return !0 }, decreaseCellSpan: function(e, t) {
                var n = parseInt(r.getAttribute(e.el, t), 10) - 1;
                n >= 1 ? e.el.setAttribute(t, n) : (e.el.removeAttribute(t), "colspan" == t && (e.isColspan = !1), "rowspan" == t && (e.isRowspan = !1), e.firstCol = !0, e.lastCol = !0, e.firstRow = !0, e.lastRow = !0, e.isReal = !0) }, removeSurplusLines: function() {
                var e, t, i, o, a, s, l;
                if (this.setTableMap(), this.map) {
                    for (i = 0, o = this.map.length; i < o; i++) {
                        for (e = this.map[i], l = !0, a = 0, s = e.length; a < s; a++)
                            if (t = e[a], !(r.getAttribute(t.el, "rowspan") && parseInt(r.getAttribute(t.el, "rowspan"), 10) > 1 && !0 !== t.firstRow)) { l = !1;
                                break }
                        if (l)
                            for (a = 0; a < s; a++) this.decreaseCellSpan(e[a], "rowspan") }
                    var c = this.getTableRows();
                    for (i = 0, o = c.length; i < o; i++) e = c[i], 0 == e.childNodes.length && /^\s*$/.test(e.textContent || e.innerText) && n(e) } }, fillMissingCells: function() {
                var e = 0,
                    t = 0,
                    n = null;
                if (this.setTableMap(), this.map) { e = this.map.length;
                    for (var o = 0; o < e; o++) this.map[o].length > t && (t = this.map[o].length);
                    for (var r = 0; r < e; r++)
                        for (var s = 0; s < t; s++) this.map[r] && !this.map[r][s] && s > 0 && (this.map[r][s] = new a(this.createCells("td", 1)), (n = this.map[r][s - 1]) && n.el && n.el.parent && i(this.map[r][s - 1].el, this.map[r][s].el)) } }, rectify: function() {
                return !this.removeEmptyTable() && (this.removeSurplusLines(), this.fillMissingCells(), !0) }, unmerge: function() {
                if (this.rectify() && (this.setTableMap(), this.idx = this.getMapIndex(this.cell), this.idx)) {
                    var e = this.map[this.idx.row][this.idx.col],
                        t = r.getAttribute(e.el, "colspan") ? parseInt(r.getAttribute(e.el, "colspan"), 10) : 1,
                        n = e.el.tagName.toLowerCase();
                    if (e.isRowspan) {
                        var i = parseInt(r.getAttribute(e.el, "rowspan"), 10);
                        if (i > 1)
                            for (var o = 1, a = i - 1; o <= a; o++) this.injectRowAt(this.idx.row + o, this.idx.col, t, n, e);
                        e.el.removeAttribute("rowspan") }
                    this.splitRowToCells(e) } }, merge: function(e) {
                if (this.rectify())
                    if (this.canMerge(e)) {
                        for (var t = this.idx_end.row - this.idx_start.row + 1, i = this.idx_end.col - this.idx_start.col + 1, o = this.idx_start.row, r = this.idx_end.row; o <= r; o++)
                            for (var a = this.idx_start.col, s = this.idx_end.col; a <= s; a++) o == this.idx_start.row && a == this.idx_start.col ? (t > 1 && this.map[o][a].el.setAttribute("rowspan", t), i > 1 && this.map[o][a].el.setAttribute("colspan", i)) : (/^\s*<br\/?>\s*$/.test(this.map[o][a].el.innerHTML.toLowerCase()) || (this.map[this.idx_start.row][this.idx_start.col].el.innerHTML += " " + this.map[o][a].el.innerHTML), n(this.map[o][a].el));
                        this.rectify() } else window.console && console.log("Do not know how to merge allready merged cells.") }, collapseCellToNextRow: function(e) {
                var t = this.getMapIndex(e.el),
                    n = t.row + 1,
                    o = { row: n, col: t.col };
                if (n < this.map.length) {
                    var a = this.getRealRowEl(!1, o);
                    if (null !== a) {
                        var s = this.correctColIndexForUnreals(o.col, o.row);
                        if (s >= 0) i(this.getRowCells(a)[s], e.el);
                        else {
                            var l = this.getLastNewCellOnRow(a, n);
                            null !== l ? i(l, e.el) : a.insertBefore(e.el, a.firstChild) }
                        parseInt(r.getAttribute(e.el, "rowspan"), 10) > 2 ? e.el.setAttribute("rowspan", parseInt(r.getAttribute(e.el, "rowspan"), 10) - 1) : e.el.removeAttribute("rowspan") } } }, removeRowCell: function(e) { e.isReal ? e.isRowspan ? this.collapseCellToNextRow(e) : n(e.el) : parseInt(r.getAttribute(e.el, "rowspan"), 10) > 2 ? e.el.setAttribute("rowspan", parseInt(r.getAttribute(e.el, "rowspan"), 10) - 1) : e.el.removeAttribute("rowspan") }, getRowElementsByCell: function() {
                var e = [];
                if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), !1 !== this.idx)
                    for (var t = this.map[this.idx.row], n = 0, i = t.length; n < i; n++) t[n].isReal && e.push(t[n].el);
                return e }, getColumnElementsByCell: function() {
                var e = [];
                if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), !1 !== this.idx)
                    for (var t = 0, n = this.map.length; t < n; t++) this.map[t][this.idx.col] && this.map[t][this.idx.col].isReal && e.push(this.map[t][this.idx.col].el);
                return e }, removeRow: function() {
                var e = r.getParentElement(this.cell, { nodeName: ["TR"] });
                if (e) {
                    if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), !1 !== this.idx)
                        for (var t = this.map[this.idx.row], i = 0, o = t.length; i < o; i++) t[i].modified || (this.setCellAsModified(t[i]), this.removeRowCell(t[i]));
                    n(e) } }, removeColCell: function(e) { e.isColspan ? parseInt(r.getAttribute(e.el, "colspan"), 10) > 2 ? e.el.setAttribute("colspan", parseInt(r.getAttribute(e.el, "colspan"), 10) - 1) : e.el.removeAttribute("colspan") : e.isReal && n(e.el) }, removeColumn: function() {
                if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), !1 !== this.idx)
                    for (var e = 0, t = this.map.length; e < t; e++) this.map[e][this.idx.col].modified || (this.setCellAsModified(this.map[e][this.idx.col]), this.removeColCell(this.map[e][this.idx.col])) }, remove: function(e) {
                if (this.rectify()) {
                    switch (e) {
                        case "row":
                            this.removeRow();
                            break;
                        case "column":
                            this.removeColumn() }
                    this.rectify() } }, addRow: function(e) {
                var t = this.table.ownerDocument;
                if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), "below" == e && r.getAttribute(this.cell, "rowspan") && (this.idx.row = this.idx.row + parseInt(r.getAttribute(this.cell, "rowspan"), 10) - 1), !1 !== this.idx) {
                    for (var n = this.map[this.idx.row], o = t.createElement("tr"), a = 0, s = n.length; a < s; a++) n[a].modified || (this.setCellAsModified(n[a]), this.addRowCell(n[a], o, e));
                    switch (e) {
                        case "below":
                            i(this.getRealRowEl(!0), o);
                            break;
                        case "above":
                            var l = r.getParentElement(this.map[this.idx.row][this.idx.col].el, { nodeName: ["TR"] });
                            l && l.parentNode.insertBefore(o, l) } } }, addRowCell: function(e, t, n) {
                var i = e.isColspan ? { colspan: r.getAttribute(e.el, "colspan") } : null;
                e.isReal ? "above" != n && e.isRowspan ? e.el.setAttribute("rowspan", parseInt(r.getAttribute(e.el, "rowspan"), 10) + 1) : t.appendChild(this.createCells("td", 1, i)) : "above" != n && e.isRowspan && e.lastRow ? t.appendChild(this.createCells("td", 1, i)) : c.isRowspan && e.el.attr("rowspan", parseInt(r.getAttribute(e.el, "rowspan"), 10) + 1) }, add: function(e) { this.rectify() && ("below" != e && "above" != e || this.addRow(e), "before" != e && "after" != e || this.addColumn(e)) }, addColCell: function(e, t, n) {
                var o, a = e.el.tagName.toLowerCase();
                switch (n) {
                    case "before":
                        o = !e.isColspan || e.firstCol;
                        break;
                    case "after":
                        o = !e.isColspan || e.lastCol || e.isColspan && c.el == this.cell }
                if (o) {
                    switch (n) {
                        case "before":
                            e.el.parentNode.insertBefore(this.createCells(a, 1), e.el);
                            break;
                        case "after":
                            i(e.el, this.createCells(a, 1)) }
                    e.isRowspan && this.handleCellAddWithRowspan(e, t + 1, n) } else e.el.setAttribute("colspan", parseInt(r.getAttribute(e.el, "colspan"), 10) + 1) }, addColumn: function(e) {
                var t, n;
                if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), "after" == e && r.getAttribute(this.cell, "colspan") && (this.idx.col = this.idx.col + parseInt(r.getAttribute(this.cell, "colspan"), 10) - 1), !1 !== this.idx)
                    for (var i = 0, o = this.map.length; i < o; i++) t = this.map[i], t[this.idx.col] && (n = t[this.idx.col], n.modified || (this.setCellAsModified(n), this.addColCell(n, i, e))) }, handleCellAddWithRowspan: function(e, t, n) {
                for (var a, s, l, c = parseInt(r.getAttribute(this.cell, "rowspan"), 10) - 1, u = r.getParentElement(e.el, { nodeName: ["TR"] }), d = e.el.tagName.toLowerCase(), f = this.table.ownerDocument, h = 0; h < c; h++)
                    if (a = this.correctColIndexForUnreals(this.idx.col, t + h), u = o(u, "tr"))
                        if (a > 0) switch (n) {
                            case "before":
                                s = this.getRowCells(u), a > 0 && this.map[t + h][this.idx.col].el != s[a] && a == s.length - 1 ? i(s[a], this.createCells(d, 1)) : s[a].parentNode.insertBefore(this.createCells(d, 1), s[a]);
                                break;
                            case "after":
                                i(this.getRowCells(u)[a], this.createCells(d, 1)) } else u.insertBefore(this.createCells(d, 1), u.firstChild);
                        else l = f.createElement("tr"), l.appendChild(this.createCells(d, 1)), this.table.appendChild(l) } }, r.table = { getCellsBetween: function(e, t) {
                return new s(e).getMapElsTo(t) }, addCells: function(e, t) { new s(e).add(t) }, removeCells: function(e, t) { new s(e).remove(t) }, mergeCellsBetween: function(e, t) { new s(e).merge(t) }, unmergeCell: function(e) { new s(e).unmerge() }, orderSelectionEnds: function(e, t) {
                return new s(e).orderSelectionEnds(t) }, indexOf: function(e) {
                var t = new s(e);
                return t.setTableMap(), t.getMapIndex(e) }, findCell: function(e, t) {
                return new s(null, e).getElementAtIndex(t) }, findRowByCell: function(e) {
                return new s(e).getRowElementsByCell() }, findColumnByCell: function(e) {
                return new s(e).getColumnElementsByCell() }, canMerge: function(e, t) {
                return new s(e).canMerge(t) } } }(wysihtml5), wysihtml5.dom.query = function(e, t) {
        var n, i = [];
        e.nodeType && (e = [e]);
        for (var o = 0, r = e.length; o < r; o++)
            if (n = e[o].querySelectorAll(t))
                for (var a = n.length; a--; i.unshift(n[a]));
        return i }, wysihtml5.dom.compareDocumentPosition = function() {
        return document.documentElement.compareDocumentPosition ? function(e, t) {
            return e.compareDocumentPosition(t) } : function(e, t) {
            var n, i;
            if (n = 9 === e.nodeType ? e : e.ownerDocument, i = 9 === t.nodeType ? t : t.ownerDocument, e === t) return 0;
            if (e === t.ownerDocument) return 20;
            if (e.ownerDocument === t) return 10;
            if (n !== i) return 1;
            if (2 === e.nodeType && e.childNodes && -1 !== wysihtml5.lang.array(e.childNodes).indexOf(t)) return 20;
            if (2 === t.nodeType && t.childNodes && -1 !== wysihtml5.lang.array(t.childNodes).indexOf(e)) return 10;
            for (var o = e, r = [], a = null; o;) {
                if (o == t) return 10;
                r.push(o), o = o.parentNode }
            for (o = t, a = null; o;) {
                if (o == e) return 20;
                var s = wysihtml5.lang.array(r).indexOf(o);
                if (-1 !== s) {
                    var l = r[s];
                    return wysihtml5.lang.array(l.childNodes).indexOf(r[s - 1]) > wysihtml5.lang.array(l.childNodes).indexOf(a) ? 2 : 4 }
                a = o, o = o.parentNode }
            return 1 } }(), wysihtml5.dom.unwrap = function(e) {
        if (e.parentNode) {
            for (; e.lastChild;) wysihtml5.dom.insert(e.lastChild).after(e);
            e.parentNode.removeChild(e) } }, wysihtml5.quirks.cleanPastedHTML = function() {
        function e(e, n, i) { n = n || t, i = i || e.ownerDocument || document;
            var o, r, a, s, l, c, u = "string" == typeof e,
                d = 0;
            o = u ? wysihtml5.dom.getAsDom(e, i) : e;
            for (l in n)
                for (a = o.querySelectorAll(l), r = n[l], s = a.length; d < s; d++) r(a[d]);
            var f = wysihtml5.dom.getTextNodes(o);
            for (c = f.length; c--;) f[c].nodeValue = f[c].nodeValue.replace(/([\S\u00A0])\u00A0/gi, "$1 ");
            return a = e = n = null, u ? o.innerHTML : o }
        var t = { "a u": wysihtml5.dom.replaceWithChildNodes };
        return e }(), wysihtml5.quirks.ensureProperClearing = function() {
        var e = function() {
            var e = this;
            setTimeout(function() {
                var t = e.innerHTML.toLowerCase(); "<p>&nbsp;</p>" != t && "<p>&nbsp;</p><p>&nbsp;</p>" != t || (e.innerHTML = "") }, 0) };
        return function(t) { wysihtml5.dom.observe(t.element, ["cut", "keydown"], e) } }(),
    function(e) {
        var t = "%7E";
        e.quirks.getCorrectInnerHTML = function(n) {
            var i = n.innerHTML;
            if (-1 === i.indexOf(t)) return i;
            var o, r, a, s, l = n.querySelectorAll("[href*='~'], [src*='~']");
            for (s = 0, a = l.length; s < a; s++) o = l[s].href || l[s].src, r = e.lang.string(o).replace("~").by(t), i = e.lang.string(i).replace(r).by(o);
            return i } }(wysihtml5),
    function(e) {
        var t = "wysihtml5-quirks-redraw";
        e.quirks.redraw = function(n) { e.dom.addClass(n, t), e.dom.removeClass(n, t);
            try {
                var i = n.ownerDocument;
                i.execCommand("italic", !1, null), i.execCommand("italic", !1, null) } catch (e) {} } }(wysihtml5), wysihtml5.quirks.tableCellsSelection = function(e, t) {
        function n() {
            return u.observe(e, "mousedown", function(e) {
                var t = wysihtml5.dom.getParentElement(e.target, { nodeName: ["TD", "TH"] });
                t && i(t) }), d }

        function i(n) { d.start = n, d.end = n, d.cells = [n], d.table = u.getParentElement(d.start, { nodeName: ["TABLE"] }), d.table && (o(), u.addClass(n, f), h = u.observe(e, "mousemove", a), p = u.observe(e, "mouseup", s), t.fire("tableselectstart").fire("tableselectstart:composer")) }

        function o() {
            if (e) {
                var t = e.querySelectorAll("." + f);
                if (t.length > 0)
                    for (var n = 0; n < t.length; n++) u.removeClass(t[n], f) } }

        function r(e) {
            for (var t = 0; t < e.length; t++) u.addClass(e[t], f) }

        function a(e) {
            var n, i = null,
                a = u.getParentElement(e.target, { nodeName: ["TD", "TH"] });
            a && d.table && d.start && (i = u.getParentElement(a, { nodeName: ["TABLE"] })) && i === d.table && (o(), n = d.end, d.end = a, d.cells = u.table.getCellsBetween(d.start, a), d.cells.length > 1 && t.composer.selection.deselect(), r(d.cells), d.end !== n && t.fire("tableselectchange").fire("tableselectchange:composer")) }

        function s() { h.stop(), p.stop(), t.fire("tableselect").fire("tableselect:composer"), setTimeout(function() { l() }, 0) }

        function l() {
            var n = u.observe(e.ownerDocument, "click", function(e) { n.stop(), u.getParentElement(e.target, { nodeName: ["TABLE"] }) != d.table && (o(), d.table = null, d.start = null, d.end = null, t.fire("tableunselect").fire("tableunselect:composer")) }) }

        function c(e, n) { d.start = e, d.end = n, d.table = u.getParentElement(d.start, { nodeName: ["TABLE"] }), selectedCells = u.table.getCellsBetween(d.start, d.end), r(selectedCells), l(), t.fire("tableselect").fire("tableselect:composer") }
        var u = wysihtml5.dom,
            d = { table: null, start: null, end: null, cells: null, select: c },
            f = "wysiwyg-tmp-selected-cell",
            h = null,
            p = null;
        return n() },
    function(e) {
        var t = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d\.]+)\s*\)/i,
            n = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i,
            i = /^#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i,
            o = /^#([0-9a-f])([0-9a-f])([0-9a-f])/i,
            r = function(e) {
                return new RegExp("(^|\\s|;)" + e + "\\s*:\\s*[^;$]+", "gi") };
        e.quirks.styleParser = { parseColor: function(a, s) {
                var l, c, u = r(s),
                    d = a.match(u),
                    f = 10;
                if (d) {
                    for (var h = d.length; h--;) d[h] = e.lang.string(d[h].split(":")[1]).trim();
                    if (l = d[d.length - 1], t.test(l)) c = l.match(t);
                    else if (n.test(l)) c = l.match(n);
                    else if (i.test(l)) c = l.match(i), f = 16;
                    else if (o.test(l)) return c = l.match(o), c.shift(), c.push(1), e.lang.array(c).map(function(e, t) {
                        return t < 3 ? 16 * parseInt(e, 16) + parseInt(e, 16) : parseFloat(e) });
                    if (c) return c.shift(), c[3] || c.push(1), e.lang.array(c).map(function(e, t) {
                        return t < 3 ? parseInt(e, f) : parseFloat(e) }) }
                return !1 }, unparseColor: function(e, t) {
                if (t) {
                    if ("hex" == t) return e[0].toString(16).toUpperCase() + e[1].toString(16).toUpperCase() + e[2].toString(16).toUpperCase();
                    if ("hash" == t) return "#" + e[0].toString(16).toUpperCase() + e[1].toString(16).toUpperCase() + e[2].toString(16).toUpperCase();
                    if ("rgb" == t) return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")";
                    if ("rgba" == t) return "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + e[3] + ")";
                    if ("csv" == t) return e[0] + "," + e[1] + "," + e[2] + "," + e[3] }
                return e[3] && 1 !== e[3] ? "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + e[3] + ")" : "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")" }, parseFontSize: function(t) {
                var n = t.match(r("font-size"));
                return !!n && e.lang.string(n[n.length - 1].split(":")[1]).trim() } } }(wysihtml5),
    function(e) {
        function t(e) {
            var t = 0;
            if (e.parentNode)
                do { t += e.offsetTop || 0, e = e.offsetParent } while (e);
            return t }

        function n(e, t) {
            for (var n = 0; t !== e;)
                if (n++, !(t = t.parentNode)) throw new Error("not a descendant of ancestor!");
            return n }

        function i(e) {
            if (!e.canSurroundContents())
                for (var t = e.commonAncestorContainer, i = n(t, e.startContainer), o = n(t, e.endContainer); !e.canSurroundContents();) i > o ? (e.setStartBefore(e.startContainer), i = n(t, e.startContainer)) : (e.setEndAfter(e.endContainer), o = n(t, e.endContainer)) }
        var o = e.dom;
        e.Selection = Base.extend({
            constructor: function(e, t, n) { window.rangy.init(), this.editor = e, this.composer = e.composer, this.doc = this.composer.doc, this.contain = t, this.unselectableClass = n || !1 },
            getBookmark: function() {
                var e = this.getRange();
                return e && i(e), e && e.cloneRange() },
            setBookmark: function(e) { e && this.setSelection(e) },
            setBefore: function(e) {
                var t = rangy.createRange(this.doc);
                return t.setStartBefore(e), t.setEndBefore(e), this.setSelection(t) },
            setAfter: function(e) {
                var t = rangy.createRange(this.doc);
                return t.setStartAfter(e), t.setEndAfter(e), this.setSelection(t) },
            selectNode: function(t, n) {
                var i = rangy.createRange(this.doc),
                    r = t.nodeType === e.ELEMENT_NODE,
                    a = "canHaveHTML" in t ? t.canHaveHTML : "IMG" !== t.nodeName,
                    s = r ? t.innerHTML : t.data,
                    l = "" === s || s === e.INVISIBLE_SPACE,
                    c = o.getStyle("display").from(t),
                    u = "block" === c || "list-item" === c;
                if (l && r && a && !n) try { t.innerHTML = e.INVISIBLE_SPACE } catch (e) {}
                a ? i.selectNodeContents(t) : i.selectNode(t), a && l && r ? i.collapse(u) : a && l && (i.setStartAfter(t), i.setEndAfter(t)), this.setSelection(i) },
            getSelectedNode: function(e) {
                var t, n;
                return e && this.doc.selection && "Control" === this.doc.selection.type && (n = this.doc.selection.createRange()) && n.length ? n.item(0) : (t = this.getSelection(this.doc), t.focusNode === t.anchorNode ? t.focusNode : (n = this.getRange(this.doc), n ? n.commonAncestorContainer : this.doc.body)) },
            fixSelBorders: function() {
                var e = this.getRange();
                i(e), this.setSelection(e) },
            getSelectedOwnNodes: function() {
                for (var e = this.getOwnRanges(), t = [], n = 0, i = e.length; n < i; n++) t.push(e[n].commonAncestorContainer || this.doc.body);
                return t },
            findNodesInSelection: function(t) {
                for (var n, i = this.getOwnRanges(), o = [], r = 0, a = i.length; r < a; r++) n = i[r].getNodes([1], function(n) {
                    return e.lang.array(t).contains(n.nodeName) }), o = o.concat(n);
                return o },
            containsUneditable: function() {
                for (var e = this.getOwnUneditables(), t = this.getSelection(), n = 0, i = e.length; n < i; n++)
                    if (t.containsNode(e[n])) return !0;
                return !1 },
            deleteContents: function() {
                for (var e = this.getOwnRanges(), t = e.length; t--;) e[t].deleteContents();
                this.setSelection(e[0]) },
            getPreviousNode: function(t, n) {
                if (!t) { t = this.getSelection().anchorNode }
                if (t === this.contain) return !1;
                var i, o = t.previousSibling;
                return o !== this.contain && (o && 3 !== o.nodeType && 1 !== o.nodeType ? o = this.getPreviousNode(o, n) : o && 3 === o.nodeType && /^\s*$/.test(o.textContent) ? o = this.getPreviousNode(o, n) : n && o && 1 === o.nodeType && !e.lang.array(["BR", "HR", "IMG"]).contains(o.nodeName) && /^[\s]*$/.test(o.innerHTML) ? o = this.getPreviousNode(o, n) : o || t === this.contain || (i = t.parentNode) !== this.contain && (o = this.getPreviousNode(i, n)), o !== this.contain && o) },
            getSelectionParentsByTag: function() {
                for (var t, n = this.getSelectedOwnNodes(), i = [], o = 0, r = n.length; o < r; o++)(t = n[o].nodeName && "LI" === n[o].nodeName ? n[o] : e.dom.getParentElement(n[o], { nodeName: ["LI"] }, !1, this.contain)) && i.push(t);
                return i.length ? i : null },
            getRangeToNodeEnd: function() {
                if (this.isCollapsed()) {
                    var e = this.getRange(),
                        t = e.startContainer,
                        n = e.startOffset,
                        i = rangy.createRange(this.doc);
                    return i.selectNodeContents(t), i.setStart(t, n), i } },
            caretIsLastInSelection: function() {
                var e = (rangy.createRange(this.doc), this.getSelection(), this.getRangeToNodeEnd().cloneContents()),
                    t = e.textContent;
                return /^\s*$/.test(t) },
            caretIsFirstInSelection: function() {
                var t = rangy.createRange(this.doc),
                    n = this.getSelection(),
                    i = this.getRange(),
                    o = i.startContainer;
                return o.nodeType === e.TEXT_NODE ? this.isCollapsed() && o.nodeType === e.TEXT_NODE && /^\s*$/.test(o.data.substr(0, i.startOffset)) : (t.selectNodeContents(this.getRange().commonAncestorContainer), t.collapse(!0), this.isCollapsed() && (t.startContainer === n.anchorNode || t.endContainer === n.anchorNode) && t.startOffset === n.anchorOffset) },
            caretIsInTheBeginnig: function(t) {
                var n = this.getSelection(),
                    i = n.anchorNode,
                    o = n.anchorOffset;
                return t ? 0 === o && (i.nodeName && i.nodeName === t.toUpperCase() || e.dom.getParentElement(i.parentNode, { nodeName: t }, 1)) : 0 === o && !this.getPreviousNode(i, !0) },
            caretIsBeforeUneditable: function() {
                var e = this.getSelection(),
                    t = e.anchorNode;
                if (0 === e.anchorOffset) {
                    var n = this.getPreviousNode(t, !0);
                    if (n)
                        for (var i = this.getOwnUneditables(), o = 0, r = i.length; o < r; o++)
                            if (n === i[o]) return i[o] }
                return !1 },
            executeAndRestoreRangy: function(e) {
                var t = this.doc.defaultView || this.doc.parentWindow,
                    n = rangy.saveSelection(t);
                if (n) try { e() } catch (e) { setTimeout(function() {
                        throw e }, 0) } else e();
                rangy.restoreSelection(n) },
            executeAndRestore: function(t, n) {
                var i, r, a, s, l, c, u, d, f = this.doc.body,
                    h = n && f.scrollTop,
                    p = n && f.scrollLeft,
                    m = "_wysihtml5-temp-placeholder",
                    g = '<span class="' + m + '">' + e.INVISIBLE_SPACE + "</span>",
                    y = this.getRange(!0);
                if (!y) return void t(f, f);
                y.collapsed || (u = y.cloneRange(), c = u.createContextualFragment(g), u.collapse(!1), u.insertNode(c), u.detach()), l = y.createContextualFragment(g), y.insertNode(l), c && (i = this.contain.querySelectorAll("." + m), y.setStartBefore(i[0]), y.setEndAfter(i[i.length - 1])), this.setSelection(y);
                try { t(y.startContainer, y.endContainer) } catch (e) { setTimeout(function() {
                        throw e }, 0) }
                if ((i = this.contain.querySelectorAll("." + m)) && i.length) { d = rangy.createRange(this.doc), a = i[0].nextSibling, i.length > 1 && (s = i[i.length - 1].previousSibling), s && a ? (d.setStartBefore(a), d.setEndAfter(s)) : (r = this.doc.createTextNode(e.INVISIBLE_SPACE), o.insert(r).after(i[0]), d.setStartBefore(r), d.setEndAfter(r)), this.setSelection(d);
                    for (var v = i.length; v--;) i[v].parentNode.removeChild(i[v]) } else this.contain.focus();
                n && (f.scrollTop = h, f.scrollLeft = p);
                try { i.parentNode.removeChild(i) } catch (e) {} },
            set: function(e, t) {
                var n = rangy.createRange(this.doc);
                n.setStart(e, t || 0), this.setSelection(n) },
            insertHTML: function(e) {
                var t = rangy.createRange(this.doc),
                    n = t.createContextualFragment(e),
                    i = n.lastChild;
                this.insertNode(n), i && this.setAfter(i) },
            insertNode: function(e) {
                var t = this.getRange();
                t && t.insertNode(e) },
            surround: function(e) {
                var t, n = this.getOwnRanges(),
                    i = [];
                if (0 == n.length) return i;
                for (var o = n.length; o--;) { t = this.doc.createElement(e.nodeName), i.push(t), e.className && (t.className = e.className), e.cssStyle && t.setAttribute("style", e.cssStyle);
                    try { n[o].surroundContents(t), this.selectNode(t) } catch (e) { t.appendChild(n[o].extractContents()), n[o].insertNode(t) } }
                return i },
            deblockAndSurround: function(t) {
                var n, i, o, r = this.doc.createElement("div"),
                    a = rangy.createRange(this.doc);
                if (r.className = t.className, this.composer.commands.exec("formatBlock", t.nodeName, t.className), n = this.contain.querySelectorAll("." + t.className), n[0])
                    for (n[0].parentNode.insertBefore(r, n[0]), a.setStartBefore(n[0]), a.setEndAfter(n[n.length - 1]), i = a.extractContents(); i.firstChild;)
                        if (o = i.firstChild, 1 == o.nodeType && e.dom.hasClass(o, t.className)) {
                            for (; o.firstChild;) r.appendChild(o.firstChild); "BR" !== o.nodeName && r.appendChild(this.doc.createElement("br")), i.removeChild(o) } else r.appendChild(o);
                else r = null;
                return r },
            scrollIntoView: function() {
                var n, i = this.doc,
                    o = 5,
                    r = i.documentElement.scrollHeight > i.documentElement.offsetHeight,
                    a = i._wysihtml5ScrollIntoViewElement = i._wysihtml5ScrollIntoViewElement || function() {
                        var t = i.createElement("span");
                        return t.innerHTML = e.INVISIBLE_SPACE, t }();
                r && (this.insertNode(a), n = t(a), a.parentNode.removeChild(a), n >= i.body.scrollTop + i.documentElement.offsetHeight - o && (i.body.scrollTop = n)) },
            selectLine: function() { e.browser.supportsSelectionModify() ? this._selectLine_W3C() : this.doc.selection && this._selectLine_MSIE() },
            _selectLine_W3C: function() {
                var e = this.doc.defaultView,
                    t = e.getSelection();
                t.modify("move", "left", "lineboundary"), t.modify("extend", "right", "lineboundary") },
            _selectLine_MSIE: function() {
                var e, t, n, i, o, r = this.doc.selection.createRange(),
                    a = r.boundingTop,
                    s = this.doc.body.scrollWidth;
                if (r.moveToPoint) {
                    for (0 === a && (n = this.doc.createElement("span"), this.insertNode(n), a = n.offsetTop, n.parentNode.removeChild(n)), a += 1, i = -10; i < s; i += 2) try { r.moveToPoint(i, a);
                        break } catch (e) {}
                    for (e = a, t = this.doc.selection.createRange(), o = s; o >= 0; o--) try { t.moveToPoint(o, e);
                        break } catch (e) {}
                    r.setEndPoint("EndToEnd", t), r.select() } },
            getText: function() {
                var e = this.getSelection();
                return e ? e.toString() : "" },
            getNodes: function(e, t) {
                var n = this.getRange();
                return n ? n.getNodes([e], t) : [] },
            fixRangeOverflow: function(e) {
                if (this.contain && this.contain.firstChild && e) {
                    var t = e.compareNode(this.contain);
                    if (2 !== t) 1 === t && e.setStartBefore(this.contain.firstChild), 0 === t && e.setEndAfter(this.contain.lastChild), 3 === t && (e.setStartBefore(this.contain.firstChild), e.setEndAfter(this.contain.lastChild));
                    else if (this._detectInlineRangeProblems(e)) {
                        var n = e.endContainer.previousElementSibling;
                        n && e.setEnd(n, this._endOffsetForNode(n)) } } },
            _endOffsetForNode: function(e) {
                var t = document.createRange();
                return t.selectNodeContents(e), t.endOffset },
            _detectInlineRangeProblems: function(e) {
                var t = o.compareDocumentPosition(e.startContainer, e.endContainer);
                return 0 == e.endOffset && 4 & t },
            getRange: function(e) {
                var t = this.getSelection(),
                    n = t && t.rangeCount && t.getRangeAt(0);
                return !0 !== e && this.fixRangeOverflow(n), n },
            getOwnUneditables: function() {
                var t = o.query(this.contain, "." + this.unselectableClass),
                    n = o.query(t, "." + this.unselectableClass);
                return e.lang.array(t).without(n) },
            getOwnRanges: function() {
                var e, t = [],
                    n = this.getRange();
                if (n && t.push(n), this.unselectableClass && this.contain && n) {
                    var i, o = this.getOwnUneditables();
                    if (o.length > 0)
                        for (var r = 0, a = o.length; r < a; r++) { e = [];
                            for (var s = 0, l = t.length; s < l; s++) {
                                if (t[s]) switch (t[s].compareNode(o[r])) {
                                    case 2:
                                        break;
                                    case 3:
                                        i = t[s].cloneRange(), i.setEndBefore(o[r]), e.push(i), i = t[s].cloneRange(), i.setStartAfter(o[r]), e.push(i);
                                        break;
                                    default:
                                        e.push(t[s]) }
                                t = e } } }
                return t },
            getSelection: function() {
                return rangy.getSelection(this.doc.defaultView || this.doc.parentWindow) },
            setSelection: function(e) {
                var t = this.doc.defaultView || this.doc.parentWindow;
                return rangy.getSelection(t).setSingleRange(e) },
            createRange: function() {
                return rangy.createRange(this.doc)
            },
            isCollapsed: function() {
                return this.getSelection().isCollapsed },
            isEndToEndInNode: function(t) {
                var n = this.getRange(),
                    i = n.commonAncestorContainer,
                    o = n.startContainer,
                    r = n.endContainer;
                if (i.nodeType === e.TEXT_NODE && (i = i.parentNode), o.nodeType === e.TEXT_NODE && !/^\s*$/.test(o.data.substr(n.startOffset))) return !1;
                if (r.nodeType === e.TEXT_NODE && !/^\s*$/.test(r.data.substr(n.endOffset))) return !1;
                for (; o && o !== i;) {
                    if (o.nodeType !== e.TEXT_NODE && !e.dom.contains(i, o)) return !1;
                    if (e.dom.domNode(o).prev({ ignoreBlankTexts: !0 })) return !1;
                    o = o.parentNode }
                for (; r && r !== i;) {
                    if (r.nodeType !== e.TEXT_NODE && !e.dom.contains(i, r)) return !1;
                    if (e.dom.domNode(r).next({ ignoreBlankTexts: !0 })) return !1;
                    r = r.parentNode }
                return !!e.lang.array(t).contains(i.nodeName) && i },
            deselect: function() {
                var e = this.getSelection();
                e && e.removeAllRanges() }
        })
    }(wysihtml5),
    function(e, t) {
        function n(e, t, n) {
            if (!e.className) return !1;
            var i = e.className.match(n) || [];
            return i[i.length - 1] === t }

        function i(e, t) {
            if (!e.getAttribute || !e.getAttribute("style")) return !1;
            e.getAttribute("style").match(t);
            return !!e.getAttribute("style").match(t) }

        function o(e, t, n) { e.getAttribute("style") ? (s(e, n), e.getAttribute("style") && !/^\s*$/.test(e.getAttribute("style")) ? e.setAttribute("style", t + ";" + e.getAttribute("style")) : e.setAttribute("style", t)) : e.setAttribute("style", t) }

        function r(e, t, n) { e.className ? (a(e, n), e.className += " " + t) : e.className = t }

        function a(e, t) { e.className && (e.className = e.className.replace(t, "")) }

        function s(e, t) {
            var n, i = [];
            if (e.getAttribute("style")) { n = e.getAttribute("style").split(";");
                for (var o = n.length; o--;) n[o].match(t) || /^\s*$/.test(n[o]) || i.push(n[o]);
                i.length ? e.setAttribute("style", i.join(";")) : e.removeAttribute("style") } }

        function l(e, t) {
            var n = [],
                i = t.split(";"),
                o = e.getAttribute("style");
            if (o) { o = o.replace(/\s/gi, "").toLowerCase(), n.push(new RegExp("(^|\\s|;)" + t.replace(/\s/gi, "").replace(/([\(\)])/gi, "\\$1").toLowerCase().replace(";", ";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi, "\\s?rgb\\($1,\\s?$2,\\s?$3\\)"), "gi"));
                for (var r = i.length; r-- > 0;) /^\s*$/.test(i[r]) || n.push(new RegExp("(^|\\s|;)" + i[r].replace(/\s/gi, "").replace(/([\(\)])/gi, "\\$1").toLowerCase().replace(";", ";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi, "\\s?rgb\\($1,\\s?$2,\\s?$3\\)"), "gi"));
                for (var a = 0, s = n.length; a < s; a++)
                    if (o.match(n[a])) return n[a] }
            return !1 }

        function c(n, i, o, r) {
            return o ? l(n, o) : r ? e.dom.hasClass(n, r) : t.dom.arrayContains(i, n.tagName.toLowerCase()) }

        function u(e, t, n, i) {
            for (var o = e.length; o--;)
                if (!c(e[o], t, n, i)) return !1;
            return !!e.length }

        function d(e, t, n) {
            var i = l(e, t);
            return i ? (s(e, i), "remove") : (o(e, t, n), "change") }

        function f(e, t) {
            return e.className.replace(w, " ") == t.className.replace(w, " ") }

        function h(e) {
            for (var t = e.parentNode; e.firstChild;) t.insertBefore(e.firstChild, e);
            t.removeChild(e) }

        function p(e, t) {
            if (e.attributes.length != t.attributes.length) return !1;
            for (var n, i, o, r = 0, a = e.attributes.length; r < a; ++r)
                if (n = e.attributes[r], "class" != (o = n.name)) {
                    if (i = t.attributes.getNamedItem(o), n.specified != i.specified) return !1;
                    if (n.specified && n.nodeValue !== i.nodeValue) return !1 }
            return !0 }

        function m(e, n) {
            return t.dom.isCharacterDataNode(e) ? 0 == n ? !!e.previousSibling : n != e.length || !!e.nextSibling : n > 0 && n < e.childNodes.length }

        function g(e, n, i, o) {
            var r;
            if (t.dom.isCharacterDataNode(n) && (0 == i ? (i = t.dom.getNodeIndex(n), n = n.parentNode) : i == n.length ? (i = t.dom.getNodeIndex(n) + 1, n = n.parentNode) : r = t.dom.splitDataNode(n, i)), !(r || o && n === o)) { r = n.cloneNode(!1), r.id && r.removeAttribute("id");
                for (var a; a = n.childNodes[i];) r.appendChild(a);
                t.dom.insertAfter(r, n) }
            return n == e ? r : g(e, r.parentNode, t.dom.getNodeIndex(r), o) }

        function y(t) { this.isElementMerge = t.nodeType == e.ELEMENT_NODE, this.firstTextNode = this.isElementMerge ? t.lastChild : t, this.textNodes = [this.firstTextNode] }

        function v(e, t, n, i, o, r, a) { this.tagNames = e || [b], this.cssClass = t || !1 !== t && "", this.similarClassRegExp = n, this.cssStyle = o || "", this.similarStyleRegExp = r, this.normalize = i, this.applyToAnyTagName = !1, this.container = a }
        var b = "span",
            w = /\s+/g;
        y.prototype = { doMerge: function() {
                for (var e, t, n, i = [], o = 0, r = this.textNodes.length; o < r; ++o) e = this.textNodes[o], t = e.parentNode, i[o] = e.data, o && (t.removeChild(e), t.hasChildNodes() || t.parentNode.removeChild(t));
                return this.firstTextNode.data = n = i.join(""), n }, getLength: function() {
                for (var e = this.textNodes.length, t = 0; e--;) t += this.textNodes[e].length;
                return t }, toString: function() {
                for (var e = [], t = 0, n = this.textNodes.length; t < n; ++t) e[t] = "'" + this.textNodes[t].data + "'";
                return "[Merge(" + e.join(",") + ")]" } }, v.prototype = { getAncestorWithClass: function(i) {
                for (var o; i;) {
                    if (o = this.cssClass ? n(i, this.cssClass, this.similarClassRegExp) : "" === this.cssStyle, i.nodeType == e.ELEMENT_NODE && "false" != i.getAttribute("contenteditable") && t.dom.arrayContains(this.tagNames, i.tagName.toLowerCase()) && o) return i;
                    i = i.parentNode }
                return !1 }, getAncestorWithStyle: function(n) {
                for (var o; n;) {
                    if (o = !!this.cssStyle && i(n, this.similarStyleRegExp), n.nodeType == e.ELEMENT_NODE && "false" != n.getAttribute("contenteditable") && t.dom.arrayContains(this.tagNames, n.tagName.toLowerCase()) && o) return n;
                    n = n.parentNode }
                return !1 }, getMatchingAncestor: function(e) {
                var t = this.getAncestorWithClass(e),
                    n = !1;
                return t ? this.cssStyle && (n = "class") : (t = this.getAncestorWithStyle(e)) && (n = "style"), { element: t, type: n } }, postApply: function(e, t) {
                for (var n, i, o, r = e[0], a = e[e.length - 1], s = [], l = r, c = a, u = 0, d = a.length, f = 0, h = e.length; f < h; ++f) i = e[f], o = null, i && i.parentNode && (o = this.getAdjacentMergeableTextNode(i.parentNode, !1)), o ? (n || (n = new y(o), s.push(n)), n.textNodes.push(i), i === r && (l = n.firstTextNode, u = l.length), i === a && (c = n.firstTextNode, d = n.getLength())) : n = null;
                if (a && a.parentNode) {
                    var p = this.getAdjacentMergeableTextNode(a.parentNode, !0);
                    p && (n || (n = new y(a), s.push(n)), n.textNodes.push(p)) }
                if (s.length) {
                    for (f = 0, h = s.length; f < h; ++f) s[f].doMerge();
                    t.setStart(l, u), t.setEnd(c, d) } }, getAdjacentMergeableTextNode: function(t, n) {
                var i, o = t.nodeType == e.TEXT_NODE,
                    r = o ? t.parentNode : t,
                    a = n ? "nextSibling" : "previousSibling";
                if (o) {
                    if ((i = t[a]) && i.nodeType == e.TEXT_NODE) return i } else if ((i = r[a]) && this.areElementsMergeable(t, i)) return i[n ? "firstChild" : "lastChild"];
                return null }, areElementsMergeable: function(e, n) {
                return t.dom.arrayContains(this.tagNames, (e.tagName || "").toLowerCase()) && t.dom.arrayContains(this.tagNames, (n.tagName || "").toLowerCase()) && f(e, n) && p(e, n) }, createContainer: function(e) {
                var t = e.createElement(this.tagNames[0]);
                return this.cssClass && (t.className = this.cssClass), this.cssStyle && t.setAttribute("style", this.cssStyle), t }, applyToTextNode: function(e) {
                var n = e.parentNode;
                if (1 == n.childNodes.length && t.dom.arrayContains(this.tagNames, n.tagName.toLowerCase())) this.cssClass && r(n, this.cssClass, this.similarClassRegExp), this.cssStyle && o(n, this.cssStyle, this.similarStyleRegExp);
                else {
                    var i = this.createContainer(t.dom.getDocument(e));
                    e.parentNode.insertBefore(i, e), i.appendChild(e) } }, isRemovable: function(n) {
                return t.dom.arrayContains(this.tagNames, n.tagName.toLowerCase()) && "" === e.lang.string(n.className).trim() && (!n.getAttribute("style") || "" === e.lang.string(n.getAttribute("style")).trim()) }, undoToTextNode: function(e, t, n, i) {
                var o = !n,
                    r = n || i,
                    s = !1;
                if (!t.containsNode(r)) {
                    var l = t.cloneRange();
                    l.selectNode(r), l.isPointInRange(t.endContainer, t.endOffset) && m(t.endContainer, t.endOffset) && (g(r, t.endContainer, t.endOffset, this.container), t.setEndAfter(r)), l.isPointInRange(t.startContainer, t.startOffset) && m(t.startContainer, t.startOffset) && (r = g(r, t.startContainer, t.startOffset, this.container)) }!o && this.similarClassRegExp && a(r, this.similarClassRegExp), o && this.similarStyleRegExp && (s = "change" === d(r, this.cssStyle, this.similarStyleRegExp)), this.isRemovable(r) && !s && h(r) }, applyToRange: function(t) {
                for (var n, i = t.length; i--;) {
                    if (n = t[i].getNodes([e.TEXT_NODE]), !n.length) try {
                        var o = this.createContainer(t[i].endContainer.ownerDocument);
                        return t[i].surroundContents(o), void this.selectNode(t[i], o) } catch (e) {}
                    if (t[i].splitBoundaries(), n = t[i].getNodes([e.TEXT_NODE]), n.length) {
                        for (var r, a = 0, s = n.length; a < s; ++a) r = n[a], this.getMatchingAncestor(r).element || this.applyToTextNode(r);
                        t[i].setStart(n[0], 0), r = n[n.length - 1], t[i].setEnd(r, r.length), this.normalize && this.postApply(n, t[i]) } } }, undoToRange: function(t) {
                for (var n, i, o, r = t.length; r--;) {
                    if (n = t[r].getNodes([e.TEXT_NODE]), n.length) t[r].splitBoundaries(), n = t[r].getNodes([e.TEXT_NODE]);
                    else {
                        var a = t[r].endContainer.ownerDocument,
                            s = a.createTextNode(e.INVISIBLE_SPACE);
                        t[r].insertNode(s), t[r].selectNode(s), n = [s] }
                    for (var l = 0, c = n.length; l < c; ++l) t[r].isValid() && (i = n[l], o = this.getMatchingAncestor(i), "style" === o.type ? this.undoToTextNode(i, t[r], !1, o.element) : o.element && this.undoToTextNode(i, t[r], o.element));
                    1 == c ? this.selectNode(t[r], n[0]) : (t[r].setStart(n[0], 0), i = n[n.length - 1], t[r].setEnd(i, i.length), this.normalize && this.postApply(n, t[r])) } }, selectNode: function(t, n) {
                var i = n.nodeType === e.ELEMENT_NODE,
                    o = !("canHaveHTML" in n) || n.canHaveHTML,
                    r = i ? n.innerHTML : n.data,
                    a = "" === r || r === e.INVISIBLE_SPACE;
                if (a && i && o) try { n.innerHTML = e.INVISIBLE_SPACE } catch (e) {}
                t.selectNodeContents(n), a && i ? t.collapse(!1) : a && (t.setStartAfter(n), t.setEndAfter(n)) }, getTextSelectedByRange: function(e, t) {
                var n = t.cloneRange();
                n.selectNodeContents(e);
                var i = n.intersection(t),
                    o = i ? i.toString() : "";
                return n.detach(), o }, isAppliedToRange: function(t) {
                for (var n, i, o = [], r = "full", a = t.length; a--;) {
                    if (i = t[a].getNodes([e.TEXT_NODE]), !i.length) return !!(n = this.getMatchingAncestor(t[a].startContainer).element) && { elements: [n], coverage: r };
                    for (var s, l = 0, c = i.length; l < c; ++l) s = this.getTextSelectedByRange(i[l], t[a]), n = this.getMatchingAncestor(i[l]).element, n && "" != s ? (o.push(n), 1 === e.dom.getTextNodes(n, !0).length ? r = "full" : "full" === r && (r = "inline")) : n || (r = "partial") }
                return !!o.length && { elements: o, coverage: r } }, toggleRange: function(e) {
                var t, n = this.isAppliedToRange(e);
                n ? "full" === n.coverage ? this.undoToRange(e) : "inline" === n.coverage ? (t = u(n.elements, this.tagNames, this.cssStyle, this.cssClass), this.undoToRange(e), t || this.applyToRange(e)) : (u(n.elements, this.tagNames, this.cssStyle, this.cssClass) || this.undoToRange(e), this.applyToRange(e)) : this.applyToRange(e) } }, e.selection.HTMLApplier = v }(wysihtml5, rangy), wysihtml5.Commands = Base.extend({ constructor: function(e) { this.editor = e, this.composer = e.composer, this.doc = this.composer.doc }, support: function(e) {
            return wysihtml5.browser.supportsCommand(this.doc, e) }, exec: function(e, t) {
            var n = wysihtml5.commands[e],
                i = wysihtml5.lang.array(arguments).get(),
                o = n && n.exec,
                r = null;
            if (this.editor.fire("beforecommand:composer"), o) i.unshift(this.composer), r = o.apply(n, i);
            else try { r = this.doc.execCommand(e, !1, t) } catch (e) {}
            return this.editor.fire("aftercommand:composer"), r }, state: function(e) {
            var t = wysihtml5.commands[e],
                n = wysihtml5.lang.array(arguments).get(),
                i = t && t.state;
            if (i) return n.unshift(this.composer), i.apply(t, n);
            try {
                return this.doc.queryCommandState(e) } catch (e) {
                return !1 } }, stateValue: function(e) {
            var t = wysihtml5.commands[e],
                n = wysihtml5.lang.array(arguments).get(),
                i = t && t.stateValue;
            return !!i && (n.unshift(this.composer), i.apply(t, n)) } }), wysihtml5.commands.bold = { exec: function(e, t) { wysihtml5.commands.formatInline.execWithToggle(e, t, "b") }, state: function(e, t) {
            return wysihtml5.commands.formatInline.state(e, t, "b") } },
    function(e) {
        function t(t, n) {
            var a, s, l, c, u, d, f, h, p, m = t.doc,
                g = "_wysihtml5-temp-" + +new Date,
                y = /non-matching-class/g,
                v = 0;
            for (e.commands.formatInline.exec(t, i, o, g, y, i, i, !0, !0), s = m.querySelectorAll(o + "." + g), a = s.length; v < a; v++) { l = s[v], l.removeAttribute("class");
                for (p in n) "text" !== p && l.setAttribute(p, n[p]) }
            d = l, 1 === a && (f = r.getTextContent(l), c = !!l.querySelector("*"), u = "" === f || f === e.INVISIBLE_SPACE, !c && u && (r.setTextContent(l, n.text || l.href), h = m.createTextNode(" "), t.selection.setAfter(l), r.insert(h).after(l), d = h)), t.selection.setAfter(d) }

        function n(e, t, n) {
            for (var i, o = t.length; o--;) { i = t[o].attributes;
                for (var r = i.length; r--;) t[o].removeAttribute(i.item(r).name);
                for (var a in n) n.hasOwnProperty(a) && t[o].setAttribute(a, n[a]) } }
        var i, o = "A",
            r = e.dom;
        e.commands.createLink = { exec: function(e, i, o) {
                var r = this.state(e, i);
                r ? e.selection.executeAndRestore(function() { n(e, r, o) }) : (o = "object" == typeof o ? o : { href: o }, t(e, o)) }, state: function(t, n) {
                return e.commands.formatInline.state(t, n, "A") } } }(wysihtml5),
    function(e) {
        function t(e, t) {
            for (var i, o, r, a = t.length, s = 0; s < a; s++) i = t[s], o = n.getParentElement(i, { nodeName: "code" }), r = n.getTextContent(i), r.match(n.autoLink.URL_REG_EXP) && !o ? o = n.renameElement(i, "code") : n.replaceWithChildNodes(i) }
        var n = e.dom;
        e.commands.removeLink = { exec: function(e, n) {
                var i = this.state(e, n);
                i && e.selection.executeAndRestore(function() { t(e, i) }) }, state: function(t, n) {
                return e.commands.formatInline.state(t, n, "A") } } }(wysihtml5),
    function(e) {
        var t = /wysiwyg-font-size-[0-9a-z\-]+/g;
        e.commands.fontSize = { exec: function(n, i, o) { e.commands.formatInline.execWithToggle(n, i, "span", "wysiwyg-font-size-" + o, t) }, state: function(n, i, o) {
                return e.commands.formatInline.state(n, i, "span", "wysiwyg-font-size-" + o, t) } } }(wysihtml5),
    function(e) {
        var t = /(\s|^)font-size\s*:\s*[^;\s]+;?/gi;
        e.commands.fontSizeStyle = { exec: function(n, i, o) { o = "object" == typeof o ? o.size : o, /^\s*$/.test(o) || e.commands.formatInline.execWithToggle(n, i, "span", !1, !1, "font-size:" + o, t) }, state: function(n, i) {
                return e.commands.formatInline.state(n, i, "span", !1, !1, "font-size", t) }, stateValue: function(t, n) {
                var i, o = this.state(t, n);
                return o && e.lang.object(o).isArray() && (o = o[0]), !(!o || !(i = o.getAttribute("style"))) && e.quirks.styleParser.parseFontSize(i) } } }(wysihtml5),
    function(e) {
        var t = /wysiwyg-color-[0-9a-z]+/g;
        e.commands.foreColor = { exec: function(n, i, o) { e.commands.formatInline.execWithToggle(n, i, "span", "wysiwyg-color-" + o, t) }, state: function(n, i, o) {
                return e.commands.formatInline.state(n, i, "span", "wysiwyg-color-" + o, t) } } }(wysihtml5),
    function(e) {
        var t = /(\s|^)color\s*:\s*[^;\s]+;?/gi;
        e.commands.foreColorStyle = { exec: function(n, i, o) {
                var r, a = e.quirks.styleParser.parseColor("object" == typeof o ? "color:" + o.color : "color:" + o, "color");
                a && (r = "color: rgb(" + a[0] + "," + a[1] + "," + a[2] + ");", 1 !== a[3] && (r += "color: rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + ");"), e.commands.formatInline.execWithToggle(n, i, "span", !1, !1, r, t)) }, state: function(n, i) {
                return e.commands.formatInline.state(n, i, "span", !1, !1, "color", t) }, stateValue: function(t, n, i) {
                var o, r = this.state(t, n);
                return r && e.lang.object(r).isArray() && (r = r[0]), !!(r && (o = r.getAttribute("style")) && o) && (val = e.quirks.styleParser.parseColor(o, "color"), e.quirks.styleParser.unparseColor(val, i)) } } }(wysihtml5),
    function(e) {
        var t = /(\s|^)background-color\s*:\s*[^;\s]+;?/gi;
        e.commands.bgColorStyle = { exec: function(n, i, o) {
                var r, a = e.quirks.styleParser.parseColor("object" == typeof o ? "background-color:" + o.color : "background-color:" + o, "background-color");
                a && (r = "background-color: rgb(" + a[0] + "," + a[1] + "," + a[2] + ");", 1 !== a[3] && (r += "background-color: rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + ");"), e.commands.formatInline.execWithToggle(n, i, "span", !1, !1, r, t)) }, state: function(n, i) {
                return e.commands.formatInline.state(n, i, "span", !1, !1, "background-color", t) }, stateValue: function(t, n, i) {
                var o, r = this.state(t, n),
                    a = !1;
                return r && e.lang.object(r).isArray() && (r = r[0]), !(!r || !(o = r.getAttribute("style"))) && (a = e.quirks.styleParser.parseColor(o, "background-color"), e.quirks.styleParser.unparseColor(a, i)) } } }(wysihtml5),
    function(e) {
        function t(t, n, o) { t.className ? (i(t, o), t.className = e.lang.string(t.className + " " + n).trim()) : t.className = n }

        function n(t, n, i) { o(t, i), t.getAttribute("style") ? t.setAttribute("style", e.lang.string(t.getAttribute("style") + " " + n).trim()) : t.setAttribute("style", n) }

        function i(t, n) {
            var i = n.test(t.className);
            return t.className = t.className.replace(n, ""), "" == e.lang.string(t.className).trim() && t.removeAttribute("class"), i }

        function o(t, n) {
            var i = n.test(t.getAttribute("style"));
            return t.setAttribute("style", (t.getAttribute("style") || "").replace(n, "")), "" == e.lang.string(t.getAttribute("style") || "").trim() && t.removeAttribute("style"), i }

        function r(e) {
            var t = e.lastChild;
            t && a(t) && t.parentNode.removeChild(t) }

        function a(e) {
            return "BR" === e.nodeName }

        function s(t, n) { t.selection.isCollapsed() && t.selection.selectLine();
            for (var i = t.selection.surround(n), o = 0, a = i.length; o < a; o++) e.dom.lineBreaks(i[o]).remove(), r(i[o]) }

        function l(t) {
            return !!e.lang.string(t.className).trim() }

        function c(t) {
            return !!e.lang.string(t.getAttribute("style") || "").trim() }
        var u = e.dom,
            d = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "PRE", "DIV"];
        e.commands.formatBlock = { exec: function(r, a, f, h, p, m, g) {
                var y, v, b, w, _, x = (r.doc, this.state(r, a, f, h, p, m, g)),
                    C = r.config.useLineBreaks,
                    S = C ? "DIV" : "P";
                if (f = "string" == typeof f ? f.toUpperCase() : f, x.length) return void r.selection.executeAndRestoreRangy(function() {
                    for (var t = x.length; t--;) {
                        if (p && (v = i(x[t], p)), g && (w = o(x[t], g)), (w || v) && null === f && x[t].nodeName != S) return;
                        var n = l(x[t]),
                            r = c(x[t]);
                        n || r || !C && "P" !== f ? u.renameElement(x[t], "P" === f ? "DIV" : S) : (e.dom.lineBreaks(x[t]).add(), u.replaceWithChildNodes(x[t])) } });
                (null === f || e.lang.array(d).contains(f)) && (y = r.selection.findNodesInSelection(d).concat(r.selection.getSelectedOwnNodes()), r.selection.executeAndRestoreRangy(function() {
                    for (var e = y.length; e--;) _ = u.getParentElement(y[e], { nodeName: d }), _ == r.element && (_ = null), _ && (f && (_ = u.renameElement(_, f)), h && t(_, h, p), m && n(_, m, g), b = !0) }), b) || s(r, { nodeName: f || S, className: h || null, cssStyle: m || null }) }, state: function(t, n, i, o, r, a, s) {
                var l, c = t.selection.getSelectedOwnNodes(),
                    d = [];
                i = "string" == typeof i ? i.toUpperCase() : i;
                for (var f = 0, h = c.length; f < h; f++)(l = u.getParentElement(c[f], { nodeName: i, className: o, classRegExp: r, cssStyle: a, styleRegExp: s })) && -1 == e.lang.array(d).indexOf(l) && d.push(l);
                return 0 != d.length && d } } }(wysihtml5), wysihtml5.commands.formatCode = { exec: function(e, t, n) {
            var i, o, r, a = this.state(e);
            a ? e.selection.executeAndRestore(function() { i = a.querySelector("code"), wysihtml5.dom.replaceWithChildNodes(a), i && wysihtml5.dom.replaceWithChildNodes(i) }) : (o = e.selection.getRange(), r = o.extractContents(), a = e.doc.createElement("pre"), i = e.doc.createElement("code"), n && (i.className = n), a.appendChild(i), i.appendChild(r), o.insertNode(a), e.selection.selectNode(a)) }, state: function(e) {
            var t = e.selection.getSelectedNode();
            return t && t.nodeName && "PRE" == t.nodeName && t.firstChild && t.firstChild.nodeName && "CODE" == t.firstChild.nodeName ? t : wysihtml5.dom.getParentElement(t, { nodeName: "CODE" }) && wysihtml5.dom.getParentElement(t, { nodeName: "PRE" }) } },
    function(e) {
        function t(e) {
            var t = i[e];
            return t ? [e.toLowerCase(), t.toLowerCase()] : [e.toLowerCase()] }

        function n(n, i, r, a, s, l) {
            var c = n;
            return i && (c += ":" + i), a && (c += ":" + a), o[c] || (o[c] = new e.selection.HTMLApplier(t(n), i, r, !0, a, s, l)), o[c] }
        var i = { strong: "b", em: "i", b: "strong", i: "em" },
            o = {};
        e.commands.formatInline = { exec: function(e, t, i, o, r, a, s, l, c) {
                var u = e.selection.createRange(),
                    d = e.selection.getOwnRanges();
                if (!d || 0 == d.length) return !1;
                e.selection.getSelection().removeAllRanges(), n(i, o, r, a, s, e.element).toggleRange(d), l ? c || e.cleanUp() : (u.setStart(d[0].startContainer, d[0].startOffset), u.setEnd(d[d.length - 1].endContainer, d[d.length - 1].endOffset), e.selection.setSelection(u), e.selection.executeAndRestore(function() { c || e.cleanUp() }, !0, !0)) }, execWithToggle: function(t, n, i, o, r, a, s) {
                var l = this;
                if (this.state(t, n, i, o, r, a, s) && t.selection.isCollapsed() && !t.selection.caretIsLastInSelection() && !t.selection.caretIsFirstInSelection()) {
                    var c = l.state(t, n, i, o, r)[0];
                    t.selection.executeAndRestoreRangy(function() { c.parentNode;
                        t.selection.selectNode(c, !0), e.commands.formatInline.exec(t, n, i, o, r, a, s, !0, !0) }) } else this.state(t, n, i, o, r, a, s) && !t.selection.isCollapsed() ? t.selection.executeAndRestoreRangy(function() { e.commands.formatInline.exec(t, n, i, o, r, a, s, !0, !0) }) : e.commands.formatInline.exec(t, n, i, o, r, a, s) }, state: function(t, o, r, a, s, l, c) {
                var u, d, f = t.doc,
                    h = i[r] || r;
                return !(!e.dom.hasElementWithTagName(f, r) && !e.dom.hasElementWithTagName(f, h)) && (!(a && !e.dom.hasElementWithClassName(f, a)) && (!(!(u = t.selection.getOwnRanges()) || 0 === u.length) && (!(!(d = n(r, a, s, l, c, t.element).isAppliedToRange(u)) || !d.elements) && d.elements))) } } }(wysihtml5),
    function(e) { e.commands.insertBlockQuote = { exec: function(t, n) {
                var i = this.state(t, n),
                    o = t.selection.isEndToEndInNode(["H1", "H2", "H3", "H4", "H5", "H6", "P"]);
                t.selection.executeAndRestore(function() {
                    if (i) t.config.useLineBreaks && e.dom.lineBreaks(i).add(), e.dom.unwrap(i);
                    else if (t.selection.isCollapsed() && t.selection.selectLine(), o) {
                        var n = o.ownerDocument.createElement("blockquote");
                        e.dom.insert(n).after(o), n.appendChild(o) } else t.selection.surround({ nodeName: "blockquote" }) }) }, state: function(t) {
                var n = t.selection.getSelectedNode(),
                    i = e.dom.getParentElement(n, { nodeName: "BLOCKQUOTE" }, !1, t.element);
                return i || !1 } } }(wysihtml5), wysihtml5.commands.insertHTML = { exec: function(e, t, n) { e.commands.support(t) ? e.doc.execCommand(t, !1, n) : e.selection.insertHTML(n) }, state: function() {
            return !1 } },
    function(e) {
        var t = "IMG";
        e.commands.insertImage = { exec: function(n, i, o) { o = "object" == typeof o ? o : { src: o };
                var r, a, s = n.doc,
                    l = this.state(n);
                if (l) return n.selection.setBefore(l), a = l.parentNode, a.removeChild(l), e.dom.removeEmptyTextNodes(a), "A" !== a.nodeName || a.firstChild || (n.selection.setAfter(a), a.parentNode.removeChild(a)), void e.quirks.redraw(n.element);
                l = s.createElement(t);
                for (var c in o) l.setAttribute("className" === c ? "class" : c, o[c]);
                n.selection.insertNode(l), e.browser.hasProblemsSettingCaretAfterImg() ? (r = s.createTextNode(e.INVISIBLE_SPACE), n.selection.insertNode(r), n.selection.setAfter(r)) : n.selection.setAfter(l) }, state: function(n) {
                var i, o, r, a = n.doc;
                return !!e.dom.hasElementWithTagName(a, t) && (!!(i = n.selection.getSelectedNode()) && (i.nodeName === t ? i : i.nodeType === e.ELEMENT_NODE && (o = n.selection.getText(), !(o = e.lang.string(o).trim()) && (r = n.selection.getNodes(e.ELEMENT_NODE, function(e) {
                    return "IMG" === e.nodeName }), 1 === r.length && r[0])))) } } }(wysihtml5),
    function(e) {
        var t = "<br>" + (e.browser.needsSpaceAfterLineBreak() ? " " : "");
        e.commands.insertLineBreak = { exec: function(n, i) { n.commands.support(i) ? (n.doc.execCommand(i, !1, null), e.browser.autoScrollsToCaret() || n.selection.scrollIntoView()) : n.commands.exec("insertHTML", t) }, state: function() {
                return !1 } } }(wysihtml5), wysihtml5.commands.insertOrderedList = { exec: function(e, t) { wysihtml5.commands.insertList.exec(e, t, "OL") }, state: function(e, t) {
            return wysihtml5.commands.insertList.state(e, t, "OL") } }, wysihtml5.commands.insertUnorderedList = { exec: function(e, t) { wysihtml5.commands.insertList.exec(e, t, "UL") }, state: function(e, t) {
            return wysihtml5.commands.insertList.state(e, t, "UL") } }, wysihtml5.commands.insertList = function(e) {
        var t = function(e, t) {
                if (e && e.nodeName) { "string" == typeof t && (t = [t]);
                    for (var n = t.length; n--;)
                        if (e.nodeName === t[n]) return !0 }
                return !1 },
            n = function(n, i, o) {
                var r = { el: null, other: !1 };
                if (n) {
                    var a = e.dom.getParentElement(n, { nodeName: "LI" }),
                        s = "UL" === i ? "OL" : "UL";
                    t(n, i) ? r.el = n : t(n, s) ? r = { el: n, other: !0 } : a && (t(a.parentNode, i) ? r.el = a.parentNode : t(a.parentNode, s) && (r = { el: a.parentNode, other: !0 })) }
                return r.el && !o.element.contains(r.el) && (r.el = null), r },
            i = function(t, n, i) {
                var o, a = "UL" === n ? "OL" : "UL";
                i.selection.executeAndRestore(function() {
                    var s = r(a, i);
                    if (s.length)
                        for (var l = s.length; l--;) e.dom.renameElement(s[l], n.toLowerCase());
                    else { o = r(["OL", "UL"], i);
                        for (var c = o.length; c--;) e.dom.resolveList(o[c], i.config.useLineBreaks);
                        e.dom.resolveList(t, i.config.useLineBreaks) } }) },
            o = function(t, n, i) {
                var o = "UL" === n ? "OL" : "UL";
                i.selection.executeAndRestore(function() {
                    for (var a = [t].concat(r(o, i)), s = a.length; s--;) e.dom.renameElement(a[s], n.toLowerCase()) }) },
            r = function(e, n) {
                for (var i = n.selection.getOwnRanges(), o = [], r = i.length; r--;) o = o.concat(i[r].getNodes([1], function(n) {
                    return t(n, e) }));
                return o },
            a = function(t, n) { n.selection.executeAndRestoreRangy(function() {
                    var i, o, r = "_wysihtml5-temp-" + (new Date).getTime(),
                        a = n.selection.deblockAndSurround({ nodeName: "div", className: r }),
                        s = /\uFEFF/g;
                    a.innerHTML = a.innerHTML.replace(s, ""), a && (i = e.lang.array(["", "<br>", e.INVISIBLE_SPACE]).contains(a.innerHTML), o = e.dom.convertToList(a, t.toLowerCase(), n.parent.config.uneditableContainerClassname), i && n.selection.selectNode(o.querySelector("li"), !0)) }) };
        return { exec: function(e, t, r) {
                var s = e.doc,
                    l = "OL" === r ? "insertOrderedList" : "insertUnorderedList",
                    c = e.selection.getSelectedNode(),
                    u = n(c, r, e);
                u.el ? u.other ? o(u.el, r, e) : i(u.el, r, e) : e.commands.support(l) ? s.execCommand(l, !1, null) : a(r, e) }, state: function(e, t, i) {
                var o = e.selection.getSelectedNode(),
                    r = n(o, i, e);
                return !(!r.el || r.other) && r.el } } }(wysihtml5), wysihtml5.commands.italic = { exec: function(e, t) { wysihtml5.commands.formatInline.execWithToggle(e, t, "i") }, state: function(e, t) {
            return wysihtml5.commands.formatInline.state(e, t, "i") } },
    function(e) {
        var t = "wysiwyg-text-align-center",
            n = /wysiwyg-text-align-[0-9a-z]+/g;
        e.commands.justifyCenter = { exec: function(i) {
                return e.commands.formatBlock.exec(i, "formatBlock", null, t, n) }, state: function(i) {
                return e.commands.formatBlock.state(i, "formatBlock", null, t, n) } } }(wysihtml5),
    function(e) {
        var t = "wysiwyg-text-align-left",
            n = /wysiwyg-text-align-[0-9a-z]+/g;
        e.commands.justifyLeft = { exec: function(i) {
                return e.commands.formatBlock.exec(i, "formatBlock", null, t, n) }, state: function(i) {
                return e.commands.formatBlock.state(i, "formatBlock", null, t, n) } } }(wysihtml5),
    function(e) {
        var t = "wysiwyg-text-align-right",
            n = /wysiwyg-text-align-[0-9a-z]+/g;
        e.commands.justifyRight = { exec: function(i) {
                return e.commands.formatBlock.exec(i, "formatBlock", null, t, n) }, state: function(i) {
                return e.commands.formatBlock.state(i, "formatBlock", null, t, n) } } }(wysihtml5),
    function(e) {
        var t = "wysiwyg-text-align-justify",
            n = /wysiwyg-text-align-[0-9a-z]+/g;
        e.commands.justifyFull = { exec: function(i) {
                return e.commands.formatBlock.exec(i, "formatBlock", null, t, n) }, state: function(i) {
                return e.commands.formatBlock.state(i, "formatBlock", null, t, n) } } }(wysihtml5),
    function(e) {
        var t = "text-align: right;",
            n = /(\s|^)text-align\s*:\s*[^;\s]+;?/gi;
        e.commands.alignRightStyle = { exec: function(i) {
                return e.commands.formatBlock.exec(i, "formatBlock", null, null, null, t, n) }, state: function(i) {
                return e.commands.formatBlock.state(i, "formatBlock", null, null, null, t, n) } } }(wysihtml5),
    function(e) {
        var t = "text-align: left;",
            n = /(\s|^)text-align\s*:\s*[^;\s]+;?/gi;
        e.commands.alignLeftStyle = { exec: function(i) {
                return e.commands.formatBlock.exec(i, "formatBlock", null, null, null, t, n) }, state: function(i) {
                return e.commands.formatBlock.state(i, "formatBlock", null, null, null, t, n) } } }(wysihtml5),
    function(e) {
        var t = "text-align: center;",
            n = /(\s|^)text-align\s*:\s*[^;\s]+;?/gi;
        e.commands.alignCenterStyle = { exec: function(i) {
                return e.commands.formatBlock.exec(i, "formatBlock", null, null, null, t, n) }, state: function(i) {
                return e.commands.formatBlock.state(i, "formatBlock", null, null, null, t, n) } } }(wysihtml5), wysihtml5.commands.redo = { exec: function(e) {
            return e.undoManager.redo() }, state: function() {
            return !1 } }, wysihtml5.commands.underline = { exec: function(e, t) { wysihtml5.commands.formatInline.execWithToggle(e, t, "u") }, state: function(e, t) {
            return wysihtml5.commands.formatInline.state(e, t, "u") } }, wysihtml5.commands.undo = { exec: function(e) {
            return e.undoManager.undo() }, state: function() {
            return !1 } }, wysihtml5.commands.createTable = { exec: function(e, t, n) {
            var i, o, r;
            if (n && n.cols && n.rows && parseInt(n.cols, 10) > 0 && parseInt(n.rows, 10) > 0) {
                for (r = n.tableStyle ? '<table style="' + n.tableStyle + '">' : "<table>", r += "<tbody>", o = 0; o < n.rows; o++) {
                    for (r += "<tr>", i = 0; i < n.cols; i++) r += "<td>&nbsp;</td>";
                    r += "</tr>" }
                r += "</tbody></table>", e.commands.exec("insertHTML", r) } }, state: function() {
            return !1 } }, wysihtml5.commands.mergeTableCells = { exec: function(e, t) { e.tableSelection && e.tableSelection.start && e.tableSelection.end && (this.state(e, t) ? wysihtml5.dom.table.unmergeCell(e.tableSelection.start) : wysihtml5.dom.table.mergeCellsBetween(e.tableSelection.start, e.tableSelection.end)) }, state: function(e) {
            if (e.tableSelection) {
                var t = e.tableSelection.start,
                    n = e.tableSelection.end;
                if (t && n && t == n && (wysihtml5.dom.getAttribute(t, "colspan") && parseInt(wysihtml5.dom.getAttribute(t, "colspan"), 10) > 1 || wysihtml5.dom.getAttribute(t, "rowspan") && parseInt(wysihtml5.dom.getAttribute(t, "rowspan"), 10) > 1)) return [t] }
            return !1 } }, wysihtml5.commands.addTableCells = { exec: function(e, t, n) {
            if (e.tableSelection && e.tableSelection.start && e.tableSelection.end) {
                var i = wysihtml5.dom.table.orderSelectionEnds(e.tableSelection.start, e.tableSelection.end); "before" == n || "above" == n ? wysihtml5.dom.table.addCells(i.start, n) : "after" != n && "below" != n || wysihtml5.dom.table.addCells(i.end, n), setTimeout(function() { e.tableSelection.select(i.start, i.end) }, 0) } }, state: function() {
            return !1 } }, wysihtml5.commands.deleteTableCells = { exec: function(e, t, n) {
            if (e.tableSelection && e.tableSelection.start && e.tableSelection.end) {
                var i, o = wysihtml5.dom.table.orderSelectionEnds(e.tableSelection.start, e.tableSelection.end),
                    r = wysihtml5.dom.table.indexOf(o.start),
                    a = e.tableSelection.table;
                wysihtml5.dom.table.removeCells(o.start, n), setTimeout(function() { i = wysihtml5.dom.table.findCell(a, r), i || ("row" == n && (i = wysihtml5.dom.table.findCell(a, { row: r.row - 1, col: r.col })), "column" == n && (i = wysihtml5.dom.table.findCell(a, { row: r.row, col: r.col - 1 }))), i && e.tableSelection.select(i, i) }, 0) } }, state: function() {
            return !1 } }, wysihtml5.commands.indentList = { exec: function(e) {
            var t = e.selection.getSelectionParentsByTag("LI");
            return !!t && this.tryToPushLiLevel(t, e.selection) }, state: function() {
            return !1 }, tryToPushLiLevel: function(e, t) {
            var n, i, o, r, a, s = !1;
            return t.executeAndRestoreRangy(function() {
                for (var t = e.length; t--;) r = e[t], n = "OL" === r.parentNode.nodeName ? "OL" : "UL", i = r.ownerDocument.createElement(n), o = wysihtml5.dom.domNode(r).prev({ nodeTypes: [wysihtml5.ELEMENT_NODE] }), a = o ? o.querySelector("ul, ol") : null, o && (a ? a.appendChild(r) : (i.appendChild(r), o.appendChild(i)), s = !0) }), s } }, wysihtml5.commands.outdentList = { exec: function(e) {
            var t = e.selection.getSelectionParentsByTag("LI");
            return !!t && this.tryToPullLiLevel(t, e) }, state: function() {
            return !1 }, tryToPullLiLevel: function(e, t) {
            var n, i, o, r, a, s = !1,
                l = this;
            return t.selection.executeAndRestoreRangy(function() {
                for (var c = e.length; c--;)
                    if (r = e[c], r.parentNode && (n = r.parentNode, "OL" === n.tagName || "UL" === n.tagName)) {
                        if (s = !0, i = wysihtml5.dom.getParentElement(n.parentNode, { nodeName: ["OL", "UL"] }, !1, t.element), o = wysihtml5.dom.getParentElement(n.parentNode, { nodeName: ["LI"] }, !1, t.element), i && o) r.nextSibling && (a = l.getAfterList(n, r), r.appendChild(a)), i.insertBefore(r, o.nextSibling);
                        else { r.nextSibling && (a = l.getAfterList(n, r), r.appendChild(a));
                            for (var u = r.childNodes.length; u--;) n.parentNode.insertBefore(r.childNodes[u], n.nextSibling);
                            n.parentNode.insertBefore(document.createElement("br"), n.nextSibling), r.parentNode.removeChild(r) }
                        0 === n.childNodes.length && n.parentNode.removeChild(n) } }), s }, getAfterList: function(e, t) {
            for (var n = e.nodeName, i = document.createElement(n); t.nextSibling;) i.appendChild(t.nextSibling);
            return i } },
    function(e) {
        var t = 90,
            n = "data-wysihtml5-selection-node",
            i = "data-wysihtml5-selection-offset",
            o = (e.INVISIBLE_SPACE, e.INVISIBLE_SPACE, e.dom);
        e.UndoManager = e.lang.Dispatcher.extend({ constructor: function(e) { this.editor = e, this.composer = e.composer, this.element = this.composer.element, this.position = 0, this.historyStr = [], this.historyDom = [], this.transact(), this._observe() }, _observe: function() {
                var e, n = this;
                this.composer.sandbox.getDocument(), o.observe(this.element, "keydown", function(e) {
                    if (!e.altKey && (e.ctrlKey || e.metaKey)) {
                        var i = e.keyCode,
                            o = i === t && !e.shiftKey,
                            r = i === t && e.shiftKey || 89 === i;
                        o ? (n.undo(), e.preventDefault()) : r && (n.redo(), e.preventDefault()) } }), o.observe(this.element, "keydown", function(t) {
                    var i = t.keyCode;
                    i !== e && (e = i, 8 !== i && 46 !== i || n.transact()) }), this.editor.on("newword:composer", function() { n.transact() }).on("beforecommand:composer", function() { n.transact() }) }, transact: function() {
                var t, o, r, a, s, l = this.historyStr[this.position - 1],
                    c = this.composer.getValue(!1, !1),
                    u = this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
                if (c !== l) {
                    (this.historyStr.length = this.historyDom.length = this.position) > 25 && (this.historyStr.shift(), this.historyDom.shift(), this.position--), this.position++, u && (t = this.composer.selection.getRange(), o = t && t.startContainer ? t.startContainer : this.element, r = t && t.startOffset ? t.startOffset : 0, o.nodeType === e.ELEMENT_NODE ? a = o : (a = o.parentNode, s = this.getChildNodeIndex(a, o)), a.setAttribute(i, r), void 0 !== s && a.setAttribute(n, s));
                    var d = this.element.cloneNode(!!c);
                    this.historyDom.push(d), this.historyStr.push(c), a && (a.removeAttribute(i), a.removeAttribute(n)) } }, undo: function() { this.transact(), this.undoPossible() && (this.set(this.historyDom[--this.position - 1]), this.editor.fire("undo:composer")) }, redo: function() { this.redoPossible() && (this.set(this.historyDom[++this.position - 1]), this.editor.fire("redo:composer")) }, undoPossible: function() {
                return this.position > 1 }, redoPossible: function() {
                return this.position < this.historyStr.length }, set: function(e) { this.element.innerHTML = "";
                for (var t = 0, o = e.childNodes, r = e.childNodes.length; t < r; t++) this.element.appendChild(o[t].cloneNode(!0));
                var a, s, l;
                e.hasAttribute(i) ? (a = e.getAttribute(i), l = e.getAttribute(n), s = this.element) : (s = this.element.querySelector("[" + i + "]") || this.element, a = s.getAttribute(i), l = s.getAttribute(n), s.removeAttribute(i), s.removeAttribute(n)), null !== l && (s = this.getChildNodeByIndex(s, +l)), this.composer.selection.set(s, a) }, getChildNodeIndex: function(e, t) {
                for (var n = 0, i = e.childNodes, o = i.length; n < o; n++)
                    if (i[n] === t) return n }, getChildNodeByIndex: function(e, t) {
                return e.childNodes[t] } }) }(wysihtml5), wysihtml5.views.View = Base.extend({
        constructor: function(e, t, n) { this.parent = e, this.element = t, this.config = n, this.config.noTextarea || this._observeViewChange() },
        _observeViewChange: function() {
            var e = this;
            this.parent.on("beforeload", function() { e.parent.on("change_view", function(t) { t === e.name ? (e.parent.currentView = e, e.show(), setTimeout(function() { e.focus() }, 0)) : e.hide() }) })
        },
        focus: function() {
            if (this.element.ownerDocument.querySelector(":focus") !== this.element) try { this.element.focus() } catch (e) {} },
        hide: function() { this.element.style.display = "none" },
        show: function() { this.element.style.display = "" },
        disable: function() { this.element.setAttribute("disabled", "disabled") },
        enable: function() { this.element.removeAttribute("disabled") }
    }),
    function(e) {
        var t = e.dom,
            n = e.browser;
        e.views.Composer = e.views.View.extend({ name: "composer", CARET_HACK: "<br>", constructor: function(e, t, n) { this.base(e, t, n), this.config.noTextarea ? this.editableArea = t : this.textarea = this.parent.textarea, this.config.contentEditableMode ? this._initContentEditableArea() : this._initSandbox() }, clear: function() { this.element.innerHTML = n.displaysCaretInEmptyContentEditableCorrectly() ? "" : this.CARET_HACK }, getValue: function(t, n) {
                var i = this.isEmpty() ? "" : e.quirks.getCorrectInnerHTML(this.element);
                return !1 !== t && (i = this.parent.parse(i, !1 !== n)), i }, setValue: function(e, t) { t && (e = this.parent.parse(e));
                try { this.element.innerHTML = e } catch (t) { this.element.innerText = e } }, cleanUp: function() { this.parent.parse(this.element) }, show: function() { this.editableArea.style.display = this._displayStyle || "", this.config.noTextarea || this.textarea.element.disabled || (this.disable(), this.enable()) }, hide: function() { this._displayStyle = t.getStyle("display").from(this.editableArea), "none" === this._displayStyle && (this._displayStyle = null), this.editableArea.style.display = "none" }, disable: function() { this.parent.fire("disable:composer"), this.element.removeAttribute("contentEditable") }, enable: function() { this.parent.fire("enable:composer"), this.element.setAttribute("contentEditable", "true") }, focus: function(t) { e.browser.doesAsyncFocus() && this.hasPlaceholderSet() && this.clear(), this.base();
                var n = this.element.lastChild;
                t && n && this.selection && ("BR" === n.nodeName ? this.selection.setBefore(this.element.lastChild) : this.selection.setAfter(this.element.lastChild)) }, getTextContent: function() {
                return t.getTextContent(this.element) }, hasPlaceholderSet: function() {
                return this.getTextContent() == (this.config.noTextarea ? this.editableArea.getAttribute("data-placeholder") : this.textarea.element.getAttribute("placeholder")) && this.placeholderSet }, isEmpty: function() {
                var e = this.element.innerHTML.toLowerCase();
                return /^(\s|<br>|<\/br>|<p>|<\/p>)*$/i.test(e) || "" === e || "<br>" === e || "<p></p>" === e || "<p><br></p>" === e || this.hasPlaceholderSet() }, _initContentEditableArea: function() {
                var e = this;
                this.config.noTextarea ? this.sandbox = new t.ContentEditableArea(function() { e._create() }, {}, this.editableArea) : (this.sandbox = new t.ContentEditableArea(function() { e._create() }), this.editableArea = this.sandbox.getContentEditable(), t.insert(this.editableArea).after(this.textarea.element), this._createWysiwygFormField()) }, _initSandbox: function() {
                var e = this;
                this.sandbox = new t.Sandbox(function() { e._create() }, { stylesheets: this.config.stylesheets }), this.editableArea = this.sandbox.getIframe();
                var n = this.textarea.element;
                t.insert(this.editableArea).after(n), this._createWysiwygFormField() }, _createWysiwygFormField: function() {
                if (this.textarea.element.form) {
                    var e = document.createElement("input");
                    e.type = "hidden", e.name = "_wysihtml5_mode", e.value = 1, t.insert(e).after(this.textarea.element) } }, _create: function() {
                var i = this;
                this.doc = this.sandbox.getDocument(), this.element = this.config.contentEditableMode ? this.sandbox.getContentEditable() : this.doc.body, this.config.noTextarea ? this.cleanUp() : (this.textarea = this.parent.textarea, this.element.innerHTML = this.textarea.getValue(!0, !1)), this.selection = new e.Selection(this.parent, this.element, this.config.uneditableContainerClassname), this.commands = new e.Commands(this.parent), this.config.noTextarea || t.copyAttributes(["className", "spellcheck", "title", "lang", "dir", "accessKey"]).from(this.textarea.element).to(this.element), t.addClass(this.element, this.config.composerClassName), this.config.style && !this.config.contentEditableMode && this.style(), this.observe();
                var o = this.config.name;
                o && (t.addClass(this.element, o), this.config.contentEditableMode || t.addClass(this.editableArea, o)), this.enable(), !this.config.noTextarea && this.textarea.element.disabled && this.disable();
                var r = "string" == typeof this.config.placeholder ? this.config.placeholder : this.config.noTextarea ? this.editableArea.getAttribute("data-placeholder") : this.textarea.element.getAttribute("placeholder");
                r && t.simulatePlaceholder(this.parent, this, r), this.commands.exec("styleWithCSS", !1), this._initAutoLinking(), this._initObjectResizing(), this._initUndoManager(), this._initLineBreaking(), this.config.noTextarea || !this.textarea.element.hasAttribute("autofocus") && document.querySelector(":focus") != this.textarea.element || n.isIos() || setTimeout(function() { i.focus(!0) }, 100), n.clearsContentEditableCorrectly() || e.quirks.ensureProperClearing(this), this.initSync && this.config.sync && this.initSync(), this.config.noTextarea || this.textarea.hide(), this.parent.fire("beforeload").fire("load") }, _initAutoLinking: function() {
                var i = this,
                    o = n.canDisableAutoLinking(),
                    r = n.doesAutoLinkingInContentEditable();
                if (o && this.commands.exec("autoUrlDetect", !1), this.config.autoLink) {
                    (!r || r && o) && (this.parent.on("newword:composer", function() { t.getTextContent(i.element).match(t.autoLink.URL_REG_EXP) && i.selection.executeAndRestore(function(n, o) {
                            for (var r = i.element.querySelectorAll("." + i.config.uneditableContainerClassname), a = !1, s = r.length; s--;) e.dom.contains(r[s], o) && (a = !0);
                            a || t.autoLink(o.parentNode, [i.config.uneditableContainerClassname]) }) }), t.observe(this.element, "blur", function() { t.autoLink(i.element, [i.config.uneditableContainerClassname]) }));
                    var a = this.sandbox.getDocument().getElementsByTagName("a"),
                        s = t.autoLink.URL_REG_EXP,
                        l = function(n) {
                            var i = e.lang.string(t.getTextContent(n)).trim();
                            return "www." === i.substr(0, 4) && (i = "http://" + i), i };
                    t.observe(this.element, "keydown", function(e) {
                        if (a.length) {
                            var n, o = i.selection.getSelectedNode(e.target.ownerDocument),
                                r = t.getParentElement(o, { nodeName: "A" }, 4);
                            r && (n = l(r), setTimeout(function() {
                                var e = l(r);
                                e !== n && e.match(s) && r.setAttribute("href", e) }, 0)) } }) } }, _initObjectResizing: function() {
                if (this.commands.exec("enableObjectResizing", !0), n.supportsEvent("resizeend")) {
                    var i = ["width", "height"],
                        o = i.length,
                        r = this.element;
                    t.observe(r, "resizeend", function(t) {
                        var n, a = t.target || t.srcElement,
                            s = a.style,
                            l = 0;
                        if ("IMG" === a.nodeName) {
                            for (; l < o; l++) n = i[l], s[n] && (a.setAttribute(n, parseInt(s[n], 10)), s[n] = "");
                            e.quirks.redraw(r) } }) } }, _initUndoManager: function() { this.undoManager = new e.UndoManager(this.parent) }, _initLineBreaking: function() {
                function i(e) {
                    var n = t.getParentElement(e, { nodeName: ["P", "DIV"] }, 2);
                    n && t.contains(o.element, n) && o.selection.executeAndRestore(function() { o.config.useLineBreaks ? t.replaceWithChildNodes(n) : "P" !== n.nodeName && t.renameElement(n, "p") }) }
                var o = this,
                    r = ["LI", "P", "H1", "H2", "H3", "H4", "H5", "H6"],
                    a = ["UL", "OL", "MENU"];
                this.config.useLineBreaks || t.observe(this.element, ["focus", "keydown"], function() {
                    if (o.isEmpty()) {
                        var e = o.doc.createElement("P");
                        o.element.innerHTML = "", o.element.appendChild(e), n.displaysCaretInEmptyContentEditableCorrectly() ? o.selection.selectNode(e, !0) : (e.innerHTML = "<br>", o.selection.setBefore(e.firstChild)) } }), t.observe(this.element, "keydown", function(n) {
                    var s = n.keyCode;
                    if (!n.shiftKey && (s === e.ENTER_KEY || s === e.BACKSPACE_KEY)) {
                        var l = t.getParentElement(o.selection.getSelectedNode(), { nodeName: r }, 4);
                        if (l) return void setTimeout(function() {
                            var n, r = o.selection.getSelectedNode();
                            if ("LI" === l.nodeName) {
                                if (!r) return;
                                n = t.getParentElement(r, { nodeName: a }, 2), n || i(r) }
                            s === e.ENTER_KEY && l.nodeName.match(/^H[1-6]$/) && i(r) }, 0);
                        o.config.useLineBreaks && s === e.ENTER_KEY && !e.browser.insertsLineBreaksOnReturn() && (n.preventDefault(), o.commands.exec("insertLineBreak")) } }) } }) }(wysihtml5),
    function(e) {
        var t = e.dom,
            n = document,
            i = window,
            o = n.createElement("div"),
            r = ["background-color", "color", "cursor", "font-family", "font-size", "font-style", "font-variant", "font-weight", "line-height", "letter-spacing", "text-align", "text-decoration", "text-indent", "text-rendering", "word-break", "word-wrap", "word-spacing"],
            a = ["background-color", "border-collapse", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-left-color", "border-left-style", "border-left-width", "border-right-color", "border-right-style", "border-right-width", "border-top-color", "border-top-style", "border-top-width", "clear", "display", "float", "margin-bottom", "margin-left", "margin-right", "margin-top", "outline-color", "outline-offset", "outline-width", "outline-style", "padding-left", "padding-right", "padding-top", "padding-bottom", "position", "top", "left", "right", "bottom", "z-index", "vertical-align", "text-align", "-webkit-box-sizing", "-moz-box-sizing", "-ms-box-sizing", "box-sizing", "-webkit-box-shadow", "-moz-box-shadow", "-ms-box-shadow", "box-shadow", "-webkit-border-top-right-radius", "-moz-border-radius-topright", "border-top-right-radius", "-webkit-border-bottom-right-radius", "-moz-border-radius-bottomright", "border-bottom-right-radius", "-webkit-border-bottom-left-radius", "-moz-border-radius-bottomleft", "border-bottom-left-radius", "-webkit-border-top-left-radius", "-moz-border-radius-topleft", "border-top-left-radius", "width", "height"],
            s = ["html                 { height: 100%; }", "body                 { height: 100%; padding: 1px 0 0 0; margin: -1px 0 0 0; }", "body > p:first-child { margin-top: 0; }", "._wysihtml5-temp     { display: none; }", ".wysiwyg-color-black {color: black;}", ".wysiwyg-color-silver {color: silver;}", ".wysiwyg-color-gray {color: gray;}", ".wysiwyg-color-white {color: white;}", ".wysiwyg-color-maroon {color: maroon;}", ".wysiwyg-color-red {color: red;}", ".wysiwyg-color-purple {color: purple;}", ".wysiwyg-color-fuchsia {color: fuchsia;}", ".wysiwyg-color-green {color: green;}", ".wysiwyg-color-lime {color: lime;}", ".wysiwyg-color-olive {color: olive;}", ".wysiwyg-color-yellow {color: yellow;}", ".wysiwyg-color-navy {color: navy;}", ".wysiwyg-color-blue {color: blue;}", ".wysiwyg-color-teal {color: teal;}", ".wysiwyg-color-aqua {color: aqua;}", ".wysiwyg-color-orange {color: orange;}", e.browser.isGecko ? "body.placeholder { color: graytext !important; }" : "body.placeholder { color: #a9a9a9 !important; }", "img:-moz-broken      { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],
            l = function(e) {
                if (e.setActive) try { e.setActive() } catch (e) {} else {
                    var o = e.style,
                        r = n.documentElement.scrollTop || n.body.scrollTop,
                        a = n.documentElement.scrollLeft || n.body.scrollLeft,
                        s = { position: o.position, top: o.top, left: o.left, WebkitUserSelect: o.WebkitUserSelect };
                    t.setStyles({ position: "absolute", top: "-99999px", left: "-99999px", WebkitUserSelect: "none" }).on(e), e.focus(), t.setStyles(s).on(e), i.scrollTo && i.scrollTo(a, r) } };
        e.views.Composer.prototype.style = function() {
            var i, c = this,
                u = n.querySelector(":focus"),
                d = this.textarea.element,
                f = d.hasAttribute("placeholder"),
                h = f && d.getAttribute("placeholder"),
                p = d.style.display,
                m = d.disabled;
            this.focusStylesHost = o.cloneNode(!1), this.blurStylesHost = o.cloneNode(!1), this.disabledStylesHost = o.cloneNode(!1), f && d.removeAttribute("placeholder"), d === u && d.blur(), d.disabled = !1, d.style.display = i = "none", (d.getAttribute("rows") && "auto" === t.getStyle("height").from(d) || d.getAttribute("cols") && "auto" === t.getStyle("width").from(d)) && (d.style.display = i = p), t.copyStyles(a).from(d).to(this.editableArea).andTo(this.blurStylesHost), t.copyStyles(r).from(d).to(this.element).andTo(this.blurStylesHost), t.insertCSS(s).into(this.element.ownerDocument), d.disabled = !0, t.copyStyles(a).from(d).to(this.disabledStylesHost), t.copyStyles(r).from(d).to(this.disabledStylesHost), d.disabled = m, d.style.display = p, l(d), d.style.display = i, t.copyStyles(a).from(d).to(this.focusStylesHost), t.copyStyles(r).from(d).to(this.focusStylesHost), d.style.display = p, t.copyStyles(["display"]).from(d).to(this.editableArea);
            var g = e.lang.array(a).without(["display"]);
            return u ? u.focus() : d.blur(), f && d.setAttribute("placeholder", h), this.parent.on("focus:composer", function() { t.copyStyles(g).from(c.focusStylesHost).to(c.editableArea), t.copyStyles(r).from(c.focusStylesHost).to(c.element) }), this.parent.on("blur:composer", function() { t.copyStyles(g).from(c.blurStylesHost).to(c.editableArea), t.copyStyles(r).from(c.blurStylesHost).to(c.element) }), this.parent.observe("disable:composer", function() { t.copyStyles(g).from(c.disabledStylesHost).to(c.editableArea), t.copyStyles(r).from(c.disabledStylesHost).to(c.element) }), this.parent.observe("enable:composer", function() { t.copyStyles(g).from(c.blurStylesHost).to(c.editableArea), t.copyStyles(r).from(c.blurStylesHost).to(c.element) }), this } }(wysihtml5),
    function(e) {
        var t = e.dom,
            n = e.browser,
            i = { 66: "bold", 73: "italic", 85: "underline" },
            o = function(e, t, n) {
                var i = e.getPreviousNode(t, !0),
                    o = e.getSelectedNode();
                if (1 !== o.nodeType && o.parentNode !== n && (o = o.parentNode), i)
                    if (1 == o.nodeType) {
                        var r = o.firstChild;
                        if (1 == i.nodeType)
                            for (; o.firstChild;) i.appendChild(o.firstChild);
                        else
                            for (; o.firstChild;) t.parentNode.insertBefore(o.firstChild, t);
                        o.parentNode && o.parentNode.removeChild(o), e.setBefore(r) } else 1 == i.nodeType ? i.appendChild(o) : t.parentNode.insertBefore(o, t), e.setBefore(o) },
            r = function(e, t, n, i) {
                if (t.isCollapsed())
                    if (t.caretIsInTheBeginnig("LI")) e.preventDefault(), i.commands.exec("outdentList");
                    else if (t.caretIsInTheBeginnig()) e.preventDefault();
                else {
                    if (t.caretIsFirstInSelection() && t.getPreviousNode() && t.getPreviousNode().nodeName && /^H\d$/gi.test(t.getPreviousNode().nodeName)) {
                        var r = t.getPreviousNode();
                        if (e.preventDefault(), /^\s*$/.test(r.textContent || r.innerText)) r.parentNode.removeChild(r);
                        else {
                            var a = r.ownerDocument.createRange();
                            a.selectNodeContents(r), a.collapse(!1), t.setSelection(a) } }
                    var s = t.caretIsBeforeUneditable();
                    s && (e.preventDefault(), o(t, s, n)) } else t.containsUneditable() && (e.preventDefault(), t.deleteContents()) },
            a = function(e) {
                if (e.selection.isCollapsed()) {
                    if (e.selection.caretIsInTheBeginnig("LI") && e.commands.exec("indentList")) return } else e.selection.deleteContents();
                e.commands.exec("insertHTML", "&emsp;") };
        e.views.Composer.prototype.observe = function() {
            var o = this,
                s = this.getValue(!1, !1),
                l = this.sandbox.getIframe ? this.sandbox.getIframe() : this.sandbox.getContentEditable(),
                c = this.element,
                u = n.supportsEventsInIframeCorrectly() || this.sandbox.getContentEditable ? c : this.sandbox.getWindow(),
                d = ["drop", "paste"],
                f = ["drop", "paste", "mouseup", "focus", "keyup"];
            if (t.observe(l, "DOMNodeRemoved", function() { clearInterval(h), o.parent.fire("destroy:composer") }), !n.supportsMutationEvents()) var h = setInterval(function() { t.contains(document.documentElement, l) || (clearInterval(h), o.parent.fire("destroy:composer")) }, 250);
            t.observe(u, f, function() { setTimeout(function() { o.parent.fire("interaction").fire("interaction:composer") }, 0) }), this.config.handleTables && (!this.tableClickHandle && this.doc.execCommand && e.browser.supportsCommand(this.doc, "enableObjectResizing") && e.browser.supportsCommand(this.doc, "enableInlineTableEditing") && (this.sandbox.getIframe ? this.tableClickHandle = t.observe(l, ["focus", "mouseup", "mouseover"], function() { o.doc.execCommand("enableObjectResizing", !1, "false"), o.doc.execCommand("enableInlineTableEditing", !1, "false"), o.tableClickHandle.stop() }) : setTimeout(function() { o.doc.execCommand("enableObjectResizing", !1, "false"), o.doc.execCommand("enableInlineTableEditing", !1, "false") }, 0)), this.tableSelection = e.quirks.tableCellsSelection(c, o.parent)), t.observe(u, "focus", function(e) { o.parent.fire("focus", e).fire("focus:composer", e), setTimeout(function() { s = o.getValue(!1, !1) }, 0) }), t.observe(u, "blur", function(e) {
                if (s !== o.getValue(!1, !1)) {
                    var t = e; "function" == typeof Object.create && (t = Object.create(e, { type: { value: "change" } })), o.parent.fire("change", t).fire("change:composer", t) }
                o.parent.fire("blur", e).fire("blur:composer", e) }), t.observe(c, "dragenter", function() { o.parent.fire("unset_placeholder") }), t.observe(c, d, function(e) { setTimeout(function() { o.parent.fire(e.type, e).fire(e.type + ":composer", e) }, 0) }), t.observe(c, "keyup", function(t) {
                var n = t.keyCode;
                n !== e.SPACE_KEY && n !== e.ENTER_KEY || o.parent.fire("newword:composer") }), this.parent.on("paste:composer", function() { setTimeout(function() { o.parent.fire("newword:composer") }, 0) }), n.canSelectImagesInContentEditable() || t.observe(c, "mousedown", function(t) {
                var n = t.target,
                    i = c.querySelectorAll("img"),
                    r = c.querySelectorAll("." + o.config.uneditableContainerClassname + " img"),
                    a = e.lang.array(i).without(r); "IMG" === n.nodeName && e.lang.array(a).contains(n) && o.selection.selectNode(n) }), n.canSelectImagesInContentEditable() || t.observe(c, "drop", function() { setTimeout(function() { o.selection.getSelection().removeAllRanges() }, 0) }), n.hasHistoryIssue() && n.supportsSelectionModify() && t.observe(c, "keydown", function(e) {
                if (e.metaKey || e.ctrlKey) {
                    var t = e.keyCode,
                        n = c.ownerDocument.defaultView,
                        i = n.getSelection();
                    37 !== t && 39 !== t || (37 === t && (i.modify("extend", "left", "lineboundary"), e.shiftKey || i.collapseToStart()), 39 === t && (i.modify("extend", "right", "lineboundary"), e.shiftKey || i.collapseToEnd()), e.preventDefault()) } }), t.observe(c, "keydown", function(e) {
                var t = e.keyCode,
                    n = i[t];
                (e.ctrlKey || e.metaKey) && !e.altKey && n && (o.commands.exec(n), e.preventDefault()), 8 === t ? r(e, o.selection, c, o) : o.config.handleTabKey && 9 === t && (e.preventDefault(), a(o, c)) }), t.observe(c, "keydown", function(t) {
                var n, i = o.selection.getSelectedNode(!0),
                    r = t.keyCode;!i || "IMG" !== i.nodeName || r !== e.BACKSPACE_KEY && r !== e.DELETE_KEY || (n = i.parentNode, n.removeChild(i), "A" !== n.nodeName || n.firstChild || n.parentNode.removeChild(n), setTimeout(function() { e.quirks.redraw(c) }, 0), t.preventDefault()) }), !this.config.contentEditableMode && n.hasIframeFocusIssue() && (t.observe(l, "focus", function() { setTimeout(function() { o.doc.querySelector(":focus") !== o.element && o.focus() }, 0) }), t.observe(this.element, "blur", function() { setTimeout(function() { o.selection.getSelection().removeAllRanges() }, 0) }));
            var p = { IMG: "Image: ", A: "Link: " };
            t.observe(c, "mouseover", function(e) {
                var t, n = e.target,
                    i = n.nodeName;
                if ("A" === i || "IMG" === i) { n.hasAttribute("title") || (t = p[i] + (n.getAttribute("href") || n.getAttribute("src")), n.setAttribute("title", t)) } }) } }(wysihtml5),
    function(e) { e.views.Synchronizer = Base.extend({ constructor: function(e, t, n) { this.editor = e, this.textarea = t, this.composer = n, this._observe() }, fromComposerToTextarea: function(t) { this.textarea.setValue(e.lang.string(this.composer.getValue(!1, !1)).trim(), t) }, fromTextareaToComposer: function(e) {
                var t = this.textarea.getValue(!1, !1);
                t ? this.composer.setValue(t, e) : (this.composer.clear(), this.editor.fire("set_placeholder")) }, sync: function(e) { "textarea" === this.editor.currentView.name ? this.fromTextareaToComposer(e) : this.fromComposerToTextarea(e) }, _observe: function() {
                var t, n = this,
                    i = this.textarea.element.form,
                    o = function() { t = setInterval(function() { n.fromComposerToTextarea() }, 400) },
                    r = function() { clearInterval(t), t = null };
                o(), i && (e.dom.observe(i, "submit", function() { n.sync(!0) }), e.dom.observe(i, "reset", function() { setTimeout(function() { n.fromTextareaToComposer() }, 0) })), this.editor.on("change_view", function(e) { "composer" !== e || t ? "textarea" === e && (n.fromComposerToTextarea(!0), r()) : (n.fromTextareaToComposer(!0), o()) }), this.editor.on("destroy:composer", r) } }) }(wysihtml5), wysihtml5.views.Textarea = wysihtml5.views.View.extend({ name: "textarea", constructor: function(e, t, n) { this.base(e, t, n), this._observe() }, clear: function() { this.element.value = "" }, getValue: function(e) {
            var t = this.isEmpty() ? "" : this.element.value;
            return !1 !== e && (t = this.parent.parse(t)), t }, setValue: function(e, t) { t && (e = this.parent.parse(e)), this.element.value = e }, cleanUp: function() {
            var e = this.parent.parse(this.element.value);
            this.element.value = e }, hasPlaceholderSet: function() {
            var e = wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),
                t = this.element.getAttribute("placeholder") || null,
                n = this.element.value,
                i = !n;
            return e && i || n === t }, isEmpty: function() {
            return !wysihtml5.lang.string(this.element.value).trim() || this.hasPlaceholderSet() }, _observe: function() {
            var e = this.element,
                t = this.parent,
                n = { focusin: "focus", focusout: "blur" },
                i = wysihtml5.browser.supportsEvent("focusin") ? ["focusin", "focusout", "change"] : ["focus", "blur", "change"];
            t.on("beforeload", function() { wysihtml5.dom.observe(e, i, function(e) {
                    var i = n[e.type] || e.type;
                    t.fire(i).fire(i + ":textarea") }), wysihtml5.dom.observe(e, ["paste", "drop"], function() { setTimeout(function() { t.fire("paste").fire("paste:textarea") }, 0) }) }) } }),
    function(e) {
        var t, n = { name: t, style: !0, toolbar: t, showToolbarAfterInit: !0, autoLink: !0, handleTables: !0, handleTabKey: !0, parserRules: { tags: { br: {}, span: {}, div: {}, p: {} }, classes: {} }, parser: e.dom.parse, composerClassName: "wysihtml5-editor", bodyClassName: "wysihtml5-supported", useLineBreaks: !0, stylesheets: [], placeholderText: t, supportTouchDevices: !0, cleanUp: !0, contentEditableMode: !1, uneditableContainerClassname: "wysihtml5-uneditable-container" };
        e.Editor = e.lang.Dispatcher.extend({ constructor: function(t, i) {
                if (this.editableElement = "string" == typeof t ? document.getElementById(t) : t, this.config = e.lang.object({}).merge(n).merge(i).get(), this._isCompatible = e.browser.supported(), "textarea" != this.editableElement.nodeName.toLowerCase() && (this.config.contentEditableMode = !0, this.config.noTextarea = !0), this.config.noTextarea || (this.textarea = new e.views.Textarea(this, this.editableElement, this.config), this.currentView = this.textarea), !this._isCompatible || !this.config.supportTouchDevices && e.browser.isTouchDevice()) {
                    var o = this;
                    return void setTimeout(function() { o.fire("beforeload").fire("load") }, 0) }
                e.dom.addClass(document.body, this.config.bodyClassName), this.composer = new e.views.Composer(this, this.editableElement, this.config), this.currentView = this.composer, "function" == typeof this.config.parser && this._initParser(), this.on("beforeload", this.handleBeforeLoad) }, handleBeforeLoad: function() { this.config.noTextarea || (this.synchronizer = new e.views.Synchronizer(this, this.textarea, this.composer)), this.config.toolbar && (this.toolbar = new e.toolbar.Toolbar(this, this.config.toolbar, this.config.showToolbarAfterInit)) }, isCompatible: function() {
                return this._isCompatible }, clear: function() {
                return this.currentView.clear(), this }, getValue: function(e, t) {
                return this.currentView.getValue(e, t) }, setValue: function(e, t) {
                return this.fire("unset_placeholder"), e ? (this.currentView.setValue(e, t), this) : this.clear() }, cleanUp: function() { this.currentView.cleanUp() }, focus: function(e) {
                return this.currentView.focus(e), this }, disable: function() {
                return this.currentView.disable(), this }, enable: function() {
                return this.currentView.enable(), this }, isEmpty: function() {
                return this.currentView.isEmpty() }, hasPlaceholderSet: function() {
                return this.currentView.hasPlaceholderSet() }, parse: function(t, n) {
                var i = this.config.contentEditableMode ? document : this.composer ? this.composer.sandbox.getDocument() : null,
                    o = this.config.parser(t, { rules: this.config.parserRules, cleanUp: this.config.cleanUp, context: i, uneditableClass: this.config.uneditableContainerClassname, clearInternals: n });
                return "object" == typeof t && e.quirks.redraw(t), o }, _initParser: function() { this.on("paste:composer", function() {
                    var t = this;
                    t.composer.selection.executeAndRestore(function() { e.quirks.cleanPastedHTML(t.composer.element), t.parse(t.composer.element) }, !0) }) } }) }(wysihtml5),
    function(e) {
        var t = e.dom,
            n = "wysihtml5-command-dialog-opened",
            i = "input, select, textarea",
            o = "[data-wysihtml5-dialog-field]",
            r = "data-wysihtml5-dialog-field";
        e.toolbar.Dialog = e.lang.Dispatcher.extend({ constructor: function(e, t) { this.link = e, this.container = t }, _observe: function() {
                if (!this._observed) {
                    var o = this,
                        r = function(e) {
                            var t = o._serialize();
                            t == o.elementToChange ? o.fire("edit", t) : o.fire("save", t), o.hide(), e.preventDefault(), e.stopPropagation() };
                    t.observe(o.link, "click", function() { t.hasClass(o.link, n) && setTimeout(function() { o.hide() }, 0) }), t.observe(this.container, "keydown", function(t) {
                        var n = t.keyCode;
                        n === e.ENTER_KEY && r(t), n === e.ESCAPE_KEY && (o.fire("cancel"), o.hide()) }), t.delegate(this.container, "[data-wysihtml5-dialog-action=save]", "click", r), t.delegate(this.container, "[data-wysihtml5-dialog-action=cancel]", "click", function(e) { o.fire("cancel"), o.hide(), e.preventDefault(), e.stopPropagation() });
                    for (var a = this.container.querySelectorAll(i), s = 0, l = a.length, c = function() { clearInterval(o.interval) }; s < l; s++) t.observe(a[s], "change", c);
                    this._observed = !0 } }, _serialize: function() {
                for (var e = this.elementToChange || {}, t = this.container.querySelectorAll(o), n = t.length, i = 0; i < n; i++) e[t[i].getAttribute(r)] = t[i].value;
                return e }, _interpolate: function(e) {
                for (var t, n, i, a = document.querySelector(":focus"), s = this.container.querySelectorAll(o), l = s.length, c = 0; c < l; c++)(t = s[c]) !== a && (e && "hidden" === t.type || (n = t.getAttribute(r), i = this.elementToChange && "boolean" != typeof this.elementToChange ? this.elementToChange.getAttribute(n) || "" : t.defaultValue, t.value = i)) }, show: function(e) {
                if (!t.hasClass(this.link, n)) {
                    var o = this,
                        r = this.container.querySelector(i);
                    if (this.elementToChange = e, this._observe(), this._interpolate(), e && (this.interval = setInterval(function() { o._interpolate(!0) }, 500)), t.addClass(this.link, n), this.container.style.display = "", this.fire("show"), r && !e) try { r.focus() } catch (e) {} } }, hide: function() { clearInterval(this.interval), this.elementToChange = null, t.removeClass(this.link, n), this.container.style.display = "none", this.fire("hide") } }) }(wysihtml5),
    function(e) {
        var t = e.dom,
            n = { position: "relative" },
            i = { left: 0, margin: 0, opacity: 0, overflow: "hidden", padding: 0, position: "absolute", top: 0, zIndex: 1 },
            o = { cursor: "inherit", fontSize: "50px", height: "50px", marginTop: "-25px", outline: 0, padding: 0, position: "absolute", right: "-4px", top: "50%" },
            r = { "x-webkit-speech": "", speech: "" };
        e.toolbar.Speech = function(a, s) {
            var l = document.createElement("input");
            if (!e.browser.supportsSpeechApiOn(l)) return void(s.style.display = "none");
            var c = a.editor.textarea.element.getAttribute("lang");
            c && (r.lang = c);
            var u = document.createElement("div");
            e.lang.object(i).merge({ width: s.offsetWidth + "px", height: s.offsetHeight + "px" }), t.insert(l).into(u), t.insert(u).into(s), t.setStyles(o).on(l), t.setAttributes(r).on(l), t.setStyles(i).on(u), t.setStyles(n).on(s);
            var d = "onwebkitspeechchange" in l ? "webkitspeechchange" : "speechchange";
            t.observe(l, d, function() { a.execCommand("insertText", l.value), l.value = "" }), t.observe(l, "click", function(e) { t.hasClass(s, "wysihtml5-command-disabled") && e.preventDefault(), e.stopPropagation() }) } }(wysihtml5),
    function(e) {
        var t = "wysihtml5-command-disabled",
            n = "wysihtml5-commands-disabled",
            i = "wysihtml5-command-active",
            o = "wysihtml5-action-active",
            r = e.dom;
        e.toolbar.Toolbar = Base.extend({ constructor: function(t, n, i) { this.editor = t, this.container = "string" == typeof n ? document.getElementById(n) : n, this.composer = t.composer, this._getLinks("command"), this._getLinks("action"), this._observe(), i && this.show();
                for (var o = this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"), r = o.length, a = 0; a < r; a++) new e.toolbar.Speech(this, o[a]) }, _getLinks: function(t) {
                for (var n, i, o, r, a, s = this[t + "Links"] = e.lang.array(this.container.querySelectorAll("[data-wysihtml5-" + t + "]")).get(), l = s.length, c = 0, u = this[t + "Mapping"] = {}; c < l; c++) n = s[c], o = n.getAttribute("data-wysihtml5-" + t), r = n.getAttribute("data-wysihtml5-" + t + "-value"), i = this.container.querySelector("[data-wysihtml5-" + t + "-group='" + o + "']"), a = this._getDialog(n, o), u[o + ":" + r] = { link: n, group: i, name: o, value: r, dialog: a, state: !1 } }, _getDialog: function(t, n) {
                var i, o, r = this,
                    a = this.container.querySelector("[data-wysihtml5-dialog='" + n + "']");
                return a && (i = e.toolbar["Dialog_" + n] ? new e.toolbar["Dialog_" + n](t, a) : new e.toolbar.Dialog(t, a), i.on("show", function() { o = r.composer.selection.getBookmark(), r.editor.fire("show:dialog", { command: n, dialogContainer: a, commandLink: t }) }), i.on("save", function(e) { o && r.composer.selection.setBookmark(o), r._execCommand(n, e), r.editor.fire("save:dialog", { command: n, dialogContainer: a, commandLink: t }) }), i.on("cancel", function() { r.editor.focus(!1), r.editor.fire("cancel:dialog", { command: n, dialogContainer: a, commandLink: t }) })), i }, execCommand: function(e, t) {
                if (!this.commandsDisabled) {
                    var n = this.commandMapping[e + ":" + t];
                    n && n.dialog && !n.state ? n.dialog.show() : this._execCommand(e, t) } }, _execCommand: function(e, t) { this.editor.focus(!1), this.composer.commands.exec(e, t), this._updateLinkStates() }, execAction: function(e) {
                var t = this.editor; "change_view" === e && t.textarea && (t.currentView === t.textarea ? t.fire("change_view", "composer") : t.fire("change_view", "textarea")), "showSource" == e && t.fire("showSource") }, _observe: function() {
                for (var e = this, t = this.editor, i = this.container, o = this.commandLinks.concat(this.actionLinks), a = o.length, s = 0; s < a; s++) "A" === o[s].nodeName ? r.setAttributes({ href: "javascript:;", unselectable: "on" }).on(o[s]) : r.setAttributes({ unselectable: "on" }).on(o[s]);
                r.delegate(i, "[data-wysihtml5-command], [data-wysihtml5-action]", "mousedown", function(e) { e.preventDefault() }), r.delegate(i, "[data-wysihtml5-command]", "click", function(t) {
                    var n = this,
                        i = n.getAttribute("data-wysihtml5-command"),
                        o = n.getAttribute("data-wysihtml5-command-value");
                    e.execCommand(i, o), t.preventDefault() }), r.delegate(i, "[data-wysihtml5-action]", "click", function(t) {
                    var n = this.getAttribute("data-wysihtml5-action");
                    e.execAction(n), t.preventDefault() }), t.on("interaction:composer", function() { e._updateLinkStates() }), t.on("focus:composer", function() { e.bookmark = null }), this.editor.config.handleTables && (t.on("tableselect:composer", function() { e.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display = "" }), t.on("tableunselect:composer", function() { e.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display = "none" })), t.on("change_view", function(o) { t.textarea && setTimeout(function() { e.commandsDisabled = "composer" !== o, e._updateLinkStates(), e.commandsDisabled ? r.addClass(i, n) : r.removeClass(i, n) }, 0) }) }, _updateLinkStates: function() {
                var n, a, s, l, c = this.commandMapping,
                    u = this.actionMapping;
                for (n in c) l = c[n], this.commandsDisabled ? (a = !1, r.removeClass(l.link, i), l.group && r.removeClass(l.group, i), l.dialog && l.dialog.hide()) : (a = this.composer.commands.state(l.name, l.value), r.removeClass(l.link, t), l.group && r.removeClass(l.group, t)), l.state !== a && (l.state = a, a ? (r.addClass(l.link, i), l.group && r.addClass(l.group, i), l.dialog && ("object" == typeof a || e.lang.object(a).isArray() ? (!l.dialog.multiselect && e.lang.object(a).isArray() && (a = 1 !== a.length || a[0], l.state = a), l.dialog.show(a)) : l.dialog.hide())) : (r.removeClass(l.link, i), l.group && r.removeClass(l.group, i), l.dialog && l.dialog.hide()));
                for (n in u) s = u[n], "change_view" === s.name && (s.state = this.editor.currentView === this.editor.textarea, s.state ? r.addClass(s.link, o) : r.removeClass(s.link, o)) }, show: function() { this.container.style.display = "" }, hide: function() { this.container.style.display = "none" } }) }(wysihtml5),
    function(e) { e.toolbar.Dialog_createTable = e.toolbar.Dialog.extend({ show: function(e) { this.base(e) } }) }(wysihtml5),
    function(e) {
        var t = (e.dom, "[data-wysihtml5-dialog-field]"),
            n = "data-wysihtml5-dialog-field";
        e.toolbar.Dialog_foreColorStyle = e.toolbar.Dialog.extend({ multiselect: !0, _serialize: function() {
                for (var e = {}, i = this.container.querySelectorAll(t), o = i.length, r = 0; r < o; r++) e[i[r].getAttribute(n)] = i[r].value;
                return e }, _interpolate: function(i) {
                for (var o, r = document.querySelector(":focus"), a = this.container.querySelectorAll(t), s = a.length, l = 0, c = this.elementToChange ? e.lang.object(this.elementToChange).isArray() ? this.elementToChange[0] : this.elementToChange : null, u = c ? c.getAttribute("style") : null, d = u ? e.quirks.styleParser.parseColor(u, "color") : null; l < s; l++)(o = a[l]) !== r && (i && "hidden" === o.type || "color" === o.getAttribute(n) && (d ? d[3] && 1 != d[3] ? o.value = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + d[3] + ");" : o.value = "rgb(" + d[0] + "," + d[1] + "," + d[2] + ");" : o.value = "rgb(0,0,0);")) } }) }(wysihtml5),
    function(e) { e.dom;
        e.toolbar.Dialog_fontSizeStyle = e.toolbar.Dialog.extend({ multiselect: !0, _serialize: function() {
                return { size: this.container.querySelector('[data-wysihtml5-dialog-field="size"]').value } }, _interpolate: function() {
                var t = document.querySelector(":focus"),
                    n = this.container.querySelector("[data-wysihtml5-dialog-field='size']"),
                    i = this.elementToChange ? e.lang.object(this.elementToChange).isArray() ? this.elementToChange[0] : this.elementToChange : null,
                    o = i ? i.getAttribute("style") : null,
                    r = o ? e.quirks.styleParser.parseFontSize(o) : null;
                n && n !== t && r && !/^\s*$/.test(r) && (n.value = r) } }) }(wysihtml5),
    function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? exports.Handlebars = t() : e.Handlebars = t() }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var o = n[i] = { exports: {}, id: i, loaded: !1 };
                return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0) }([function(e, t, n) {
            (function(i) {
                "use strict";

                function o() {
                    var e = new s.HandlebarsEnvironment;
                    return h.extend(e, s), e.SafeString = c["default"], e.Exception = d["default"], e.Utils = h, e.escapeExpression = h.escapeExpression, e.VM = m, e.template = function(t) {
                        return m.template(t, e) }, e }
                var r = n(6)["default"];
                t.__esModule = !0;
                var a = n(1),
                    s = r(a),
                    l = n(2),
                    c = r(l),
                    u = n(3),
                    d = r(u),
                    f = n(4),
                    h = r(f),
                    p = n(5),
                    m = r(p),
                    g = o();
                g.create = o;
                var y = void 0 !== i ? i : window,
                    v = y.Handlebars;
                g.noConflict = function() { y.Handlebars === g && (y.Handlebars = v) }, g["default"] = g,
                    t["default"] = g, e.exports = t["default"]
            }).call(t, function() {
                return this }())
        }, function(e, t, n) { "use strict";

            function i(e, t) { this.helpers = e || {}, this.partials = t || {}, o(this) }

            function o(e) { e.registerHelper("helperMissing", function() {
                    if (1 !== arguments.length) throw new u["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"') }), e.registerHelper("blockHelperMissing", function(t, n) {
                    var i = n.inverse,
                        o = n.fn;
                    if (!0 === t) return o(this);
                    if (!1 === t || null == t) return i(this);
                    if (f(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
                    if (n.data && n.ids) {
                        var a = r(n.data);
                        a.contextPath = l.appendContextPath(n.data.contextPath, n.name), n = { data: a } }
                    return o(t, n) }), e.registerHelper("each", function(e, t) {
                    function n(t, n, o) { c && (c.key = t, c.index = n, c.first = 0 === n, c.last = !!o, d && (c.contextPath = d + t)), s += i(e[t], { data: c, blockParams: l.blockParams([e[t], t], [d + t, null]) }) }
                    if (!t) throw new u["default"]("Must pass iterator to #each");
                    var i = t.fn,
                        o = t.inverse,
                        a = 0,
                        s = "",
                        c = void 0,
                        d = void 0;
                    if (t.data && t.ids && (d = l.appendContextPath(t.data.contextPath, t.ids[0]) + "."), h(e) && (e = e.call(this)), t.data && (c = r(t.data)), e && "object" == typeof e)
                        if (f(e))
                            for (var p = e.length; p > a; a++) n(a, a, a === e.length - 1);
                        else {
                            var m = void 0;
                            for (var g in e) e.hasOwnProperty(g) && (m && n(m, a - 1), m = g, a++);
                            m && n(m, a - 1, !0) }
                    return 0 === a && (s = o(this)), s }), e.registerHelper("if", function(e, t) {
                    return h(e) && (e = e.call(this)), !t.hash.includeZero && !e || l.isEmpty(e) ? t.inverse(this) : t.fn(this) }), e.registerHelper("unless", function(t, n) {
                    return e.helpers["if"].call(this, t, { fn: n.inverse, inverse: n.fn, hash: n.hash }) }), e.registerHelper("with", function(e, t) { h(e) && (e = e.call(this));
                    var n = t.fn;
                    if (l.isEmpty(e)) return t.inverse(this);
                    if (t.data && t.ids) {
                        var i = r(t.data);
                        i.contextPath = l.appendContextPath(t.data.contextPath, t.ids[0]), t = { data: i } }
                    return n(e, t) }), e.registerHelper("log", function(t, n) {
                    var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                    e.log(i, t) }), e.registerHelper("lookup", function(e, t) {
                    return e && e[t] }) }

            function r(e) {
                var t = l.extend({}, e);
                return t._parent = e, t }
            var a = n(6)["default"];
            t.__esModule = !0, t.HandlebarsEnvironment = i, t.createFrame = r;
            var s = n(4),
                l = a(s),
                c = n(3),
                u = a(c);
            t.VERSION = "3.0.1", t.COMPILER_REVISION = 6;
            var d = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1" };
            t.REVISION_CHANGES = d;
            var f = l.isArray,
                h = l.isFunction,
                p = l.toString,
                m = "[object Object]";
            i.prototype = { constructor: i, logger: g, log: y, registerHelper: function(e, t) {
                    if (p.call(e) === m) {
                        if (t) throw new u["default"]("Arg not supported with multiple helpers");
                        l.extend(this.helpers, e) } else this.helpers[e] = t }, unregisterHelper: function(e) { delete this.helpers[e] }, registerPartial: function(e, t) {
                    if (p.call(e) === m) l.extend(this.partials, e);
                    else {
                        if (void 0 === t) throw new u["default"]("Attempting to register a partial as undefined");
                        this.partials[e] = t } }, unregisterPartial: function(e) { delete this.partials[e] } };
            var g = { methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" }, DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 1, log: function(e, t) {
                    if ("undefined" != typeof console && g.level <= e) {
                        var n = g.methodMap[e];
                        (console[n] || console.log).call(console, t) } } };
            t.logger = g;
            var y = g.log;
            t.log = y }, function(e, t) { "use strict";

            function n(e) { this.string = e }
            t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
                return "" + this.string }, t["default"] = n, e.exports = t["default"] }, function(e, t) { "use strict";

            function n(e, t) {
                var o = t && t.loc,
                    r = void 0,
                    a = void 0;
                o && (r = o.start.line, a = o.start.column, e += " - " + r + ":" + a);
                for (var s = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
                Error.captureStackTrace && Error.captureStackTrace(this, n), o && (this.lineNumber = r, this.column = a) }
            t.__esModule = !0;
            var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            n.prototype = new Error, t["default"] = n, e.exports = t["default"] }, function(e, t) { "use strict";

            function n(e) {
                return c[e] }

            function i(e) {
                for (var t = 1; t < arguments.length; t++)
                    for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                return e }

            function o(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1 }

            function r(e) {
                if ("string" != typeof e) {
                    if (e && e.toHTML) return e.toHTML();
                    if (null == e) return "";
                    if (!e) return e + "";
                    e = "" + e }
                return d.test(e) ? e.replace(u, n) : e }

            function a(e) {
                return !e && 0 !== e || !(!p(e) || 0 !== e.length) }

            function s(e, t) {
                return e.path = t, e }

            function l(e, t) {
                return (e ? e + "." : "") + t }
            t.__esModule = !0, t.extend = i, t.indexOf = o, t.escapeExpression = r, t.isEmpty = a, t.blockParams = s, t.appendContextPath = l;
            var c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                u = /[&<>"'`]/g,
                d = /[&<>"'`]/,
                f = Object.prototype.toString;
            t.toString = f;
            var h = function(e) {
                return "function" == typeof e };
            h(/x/) && (t.isFunction = h = function(e) {
                return "function" == typeof e && "[object Function]" === f.call(e) });
            var h;
            t.isFunction = h;
            var p = Array.isArray || function(e) {
                return !(!e || "object" != typeof e) && "[object Array]" === f.call(e) };
            t.isArray = p }, function(e, t, n) { "use strict";

            function i(e) {
                var t = e && e[0] || 1,
                    n = m.COMPILER_REVISION;
                if (t !== n) {
                    if (n > t) {
                        var i = m.REVISION_CHANGES[n],
                            o = m.REVISION_CHANGES[t];
                        throw new p["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + o + ").") }
                    throw new p["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").") } }

            function o(e, t) {
                function n(n, i, o) { o.hash && (i = f.extend({}, i, o.hash)), n = t.VM.resolvePartial.call(this, n, i, o);
                    var r = t.VM.invokePartial.call(this, n, i, o);
                    if (null == r && t.compile && (o.partials[o.name] = t.compile(n, e.compilerOptions, t), r = o.partials[o.name](i, o)), null != r) {
                        if (o.indent) {
                            for (var a = r.split("\n"), s = 0, l = a.length; l > s && (a[s] || s + 1 !== l); s++) a[s] = o.indent + a[s];
                            r = a.join("\n") }
                        return r }
                    throw new p["default"]("The partial " + o.name + " could not be compiled when running in runtime-only mode") }

                function i(t) {
                    var n = void 0 === arguments[1] ? {} : arguments[1],
                        r = n.data;
                    i._setup(n), !n.partial && e.useData && (r = c(t, r));
                    var a = void 0,
                        s = e.useBlockParams ? [] : void 0;
                    return e.useDepths && (a = n.depths ? [t].concat(n.depths) : [t]), e.main.call(o, t, o.helpers, o.partials, r, s, a) }
                if (!t) throw new p["default"]("No environment passed to template");
                if (!e || !e.main) throw new p["default"]("Unknown template object: " + typeof e);
                t.VM.checkRevision(e.compiler);
                var o = { strict: function(e, t) {
                        if (!(t in e)) throw new p["default"]('"' + t + '" not defined in ' + e);
                        return e[t] }, lookup: function(e, t) {
                        for (var n = e.length, i = 0; n > i; i++)
                            if (e[i] && null != e[i][t]) return e[i][t] }, lambda: function(e, t) {
                        return "function" == typeof e ? e.call(t) : e }, escapeExpression: f.escapeExpression, invokePartial: n, fn: function(t) {
                        return e[t] }, programs: [], program: function(e, t, n, i, o) {
                        var a = this.programs[e],
                            s = this.fn(e);
                        return t || o || i || n ? a = r(this, e, s, t, n, i, o) : a || (a = this.programs[e] = r(this, e, s)), a }, data: function(e, t) {
                        for (; e && t--;) e = e._parent;
                        return e }, merge: function(e, t) {
                        var n = e || t;
                        return e && t && e !== t && (n = f.extend({}, t, e)), n }, noop: t.VM.noop, compilerInfo: e.compiler };
                return i.isTop = !0, i._setup = function(n) { n.partial ? (o.helpers = n.helpers, o.partials = n.partials) : (o.helpers = o.merge(n.helpers, t.helpers), e.usePartial && (o.partials = o.merge(n.partials, t.partials))) }, i._child = function(t, n, i, a) {
                    if (e.useBlockParams && !i) throw new p["default"]("must pass block params");
                    if (e.useDepths && !a) throw new p["default"]("must pass parent depths");
                    return r(o, t, e[t], n, 0, i, a) }, i }

            function r(e, t, n, i, o, r, a) {
                function s(t) {
                    var o = void 0 === arguments[1] ? {} : arguments[1];
                    return n.call(e, t, e.helpers, e.partials, o.data || i, r && [o.blockParams].concat(r), a && [t].concat(a)) }
                return s.program = t, s.depth = a ? a.length : 0, s.blockParams = o || 0, s }

            function a(e, t, n) {
                return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = n.partials[n.name], e }

            function s(e, t, n) {
                if (n.partial = !0, void 0 === e) throw new p["default"]("The partial " + n.name + " could not be found");
                return e instanceof Function ? e(t, n) : void 0 }

            function l() {
                return "" }

            function c(e, t) {
                return t && "root" in t || (t = t ? m.createFrame(t) : {}, t.root = e), t }
            var u = n(6)["default"];
            t.__esModule = !0, t.checkRevision = i, t.template = o, t.wrapProgram = r, t.resolvePartial = a, t.invokePartial = s, t.noop = l;
            var d = n(4),
                f = u(d),
                h = n(3),
                p = u(h),
                m = n(1) }, function(e, t) { "use strict";
            t["default"] = function(e) {
                return e && e.__esModule ? e : { "default": e } }, t.__esModule = !0 }])
    }), this.wysihtml5 = this.wysihtml5 || {}, this.wysihtml5.tpl = this.wysihtml5.tpl || {}, this.wysihtml5.tpl.blockquote = Handlebars.template({ 1: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, 3: function() {
            return '      <span class="fa fa-quote-left"></span>\n' }, 5: function() {
            return '      <span class="glyphicon glyphicon-quote"></span>\n' }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o;
            return '<li>\n  <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(3, i, 0), inverse: this.program(5, i, 0), data: i })) ? o : "") + "  </a>\n</li>\n" }, useData: !0 }), this.wysihtml5.tpl.color = Handlebars.template({ 1: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o, r = this.lambda,
                a = this.escapeExpression;
            return '<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + '" data-toggle="dropdown" tabindex="-1">\n    <span class="current-color">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.black : o, e)) + '</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="black"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="black">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.black : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="silver"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="silver">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.silver : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="gray"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="gray">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.gray : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="maroon"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="maroon">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.maroon : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="red"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="red">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.red : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="purple"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="purple">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.purple : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="green"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="green">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.green : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="olive"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="olive">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.olive : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="navy"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="navy">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.navy : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="blue"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="blue">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.blue : o, e)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="orange"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="orange">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.colours : o) ? o.orange : o, e)) + "</a></li>\n  </ul>\n</li>\n" }, useData: !0 }), this.wysihtml5.tpl.emphasis = Handlebars.template({ 1: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, 3: function(e, t, n, i) {
            var o;
            return '    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="small" title="CTRL+S" tabindex="-1">' + this.escapeExpression(this.lambda(null != (o = null != (o = null != e ? e.locale : e) ? o.emphasis : o) ? o.small : o, e)) + "</a>\n" }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o, r = this.lambda,
                a = this.escapeExpression;
            return '<li>\n  <div class="btn-group">\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.emphasis : o) ? o.bold : o, e)) + '</a>\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.emphasis : o) ? o.italic : o, e)) + '</a>\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.emphasis : o) ? o.underline : o, e)) + "</a>\n" + (null != (o = t["if"].call(e, null != (o = null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.emphasis : o) ? o.small : o, { name: "if", hash: {}, fn: this.program(3, i, 0), inverse: this.noop, data: i })) ? o : "") + "  </div>\n</li>\n" }, useData: !0 }), this.wysihtml5.tpl["font-styles"] = Handlebars.template({ 1: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, 3: function() {
            return '      <span class="fa fa-font"></span>\n' }, 5: function() {
            return '      <span class="glyphicon glyphicon-font"></span>\n' }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o, r = this.lambda,
                a = this.escapeExpression;
            return '<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + '" data-toggle="dropdown">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(3, i, 0), inverse: this.program(5, i, 0), data: i })) ? o : "") + '    <span class="current-font">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.normal : o, e)) + '</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.normal : o, e)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.h1 : o, e)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.h2 : o, e)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.h3 : o, e)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.h4 : o, e)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.h5 : o, e)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.font_styles : o) ? o.h6 : o, e)) + "</a></li>\n  </ul>\n</li>\n" }, useData: !0 }), this.wysihtml5.tpl.html = Handlebars.template({ 1: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, 3: function() {
            return '        <span class="fa fa-pencil"></span>\n' }, 5: function() {
            return '        <span class="glyphicon glyphicon-pencil"></span>\n' }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o;
            return '<li>\n  <div class="btn-group">\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-action="change_view" title="' + this.escapeExpression(this.lambda(null != (o = null != (o = null != e ? e.locale : e) ? o.html : o) ? o.edit : o, e)) + '" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(3, i, 0), inverse: this.program(5, i, 0), data: i })) ? o : "") + "    </a>\n  </div>\n</li>\n" }, useData: !0 }), this.wysihtml5.tpl.image = Handlebars.template({ 1: function() {
            return "modal-sm" }, 3: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, 5: function() {
            return '      <span class="fa fa-file-image-o"></span>\n' }, 7: function() {
            return '      <span class="glyphicon glyphicon-picture"></span>\n' }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o, r = this.lambda,
                a = this.escapeExpression;
            return '<li>\n  <div class="bootstrap-wysihtml5-insert-image-modal modal fade" data-wysihtml5-dialog="insertImage">\n    <div class="modal-dialog ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.smallmodals : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + '">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.image : o) ? o.insert : o, e)) + '</h3>\n        </div>\n        <div class="modal-body">\n          <div class="form-group">\n            <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control" data-wysihtml5-dialog-field="src">\n          </div> \n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.image : o) ? o.cancel : o, e)) + '</a>\n          <a class="btn btn-primary" data-dismiss="modal"  data-wysihtml5-dialog-action="save" href="#">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.image : o) ? o.insert : o, e)) + '</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(3, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="insertImage" title="' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.image : o) ? o.insert : o, e)) + '" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(5, i, 0), inverse: this.program(7, i, 0), data: i })) ? o : "") + "  </a>\n</li>\n" }, useData: !0 }), this.wysihtml5.tpl.link = Handlebars.template({ 1: function() {
            return "modal-sm" }, 3: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, 5: function() {
            return '      <span class="fa fa-share-square-o"></span>\n' }, 7: function() {
            return '      <span class="glyphicon glyphicon-share"></span>\n' }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o, r = this.lambda,
                a = this.escapeExpression;
            return '<li>\n  <div class="bootstrap-wysihtml5-insert-link-modal modal fade" data-wysihtml5-dialog="createLink">\n    <div class="modal-dialog ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.smallmodals : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + '">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.link : o) ? o.insert : o, e)) + '</h3>\n        </div>\n        <div class="modal-body">\n          <div class="form-group">\n            <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control" data-wysihtml5-dialog-field="href">\n          </div> \n          <div class="checkbox">\n            <label> \n              <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked>' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.link : o) ? o.target : o, e)) + '\n            </label>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.link : o) ? o.cancel : o, e)) + '</a>\n          <a href="#" class="btn btn-primary" data-dismiss="modal" data-wysihtml5-dialog-action="save">' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.link : o) ? o.insert : o, e)) + '</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(3, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="createLink" title="' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.link : o) ? o.insert : o, e)) + '" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(5, i, 0), inverse: this.program(7, i, 0), data: i })) ? o : "") + "  </a>\n</li>\n" }, useData: !0 }), this.wysihtml5.tpl.lists = Handlebars.template({ 1: function(e) {
            var t;
            return "btn-" + this.escapeExpression(this.lambda(null != (t = null != (t = null != e ? e.options : e) ? t.toolbar : t) ? t.size : t, e)) }, 3: function() {
            return '      <span class="fa fa-list-ul"></span>\n' }, 5: function() {
            return '      <span class="glyphicon glyphicon-list"></span>\n' }, 7: function() {
            return '      <span class="fa fa-list-ol"></span>\n' }, 9: function() {
            return '      <span class="glyphicon glyphicon-th-list"></span>\n' }, 11: function() {
            return '      <span class="fa fa-outdent"></span>\n' }, 13: function() {
            return '      <span class="glyphicon glyphicon-indent-right"></span>\n' }, 15: function() {
            return '      <span class="fa fa-indent"></span>\n' }, 17: function() {
            return '      <span class="glyphicon glyphicon-indent-left"></span>\n' }, compiler: [6, ">= 2.0.0-beta.1"], main: function(e, t, n, i) {
            var o, r = this.lambda,
                a = this.escapeExpression;
            return '<li>\n  <div class="btn-group">\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="insertUnorderedList" title="' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.lists : o) ? o.unordered : o, e)) + '" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(3, i, 0), inverse: this.program(5, i, 0), data: i })) ? o : "") + '    </a>\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="insertOrderedList" title="' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.lists : o) ? o.ordered : o, e)) + '" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(7, i, 0), inverse: this.program(9, i, 0), data: i })) ? o : "") + '    </a>\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="Outdent" title="' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.lists : o) ? o.outdent : o, e)) + '" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(11, i, 0), inverse: this.program(13, i, 0), data: i })) ? o : "") + '    </a>\n    <a class="btn ' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.size : o, { name: "if", hash: {}, fn: this.program(1, i, 0), inverse: this.noop, data: i })) ? o : "") + ' btn-default" data-wysihtml5-command="Indent" title="' + a(r(null != (o = null != (o = null != e ? e.locale : e) ? o.lists : o) ? o.indent : o, e)) + '" tabindex="-1">\n' + (null != (o = t["if"].call(e, null != (o = null != (o = null != e ? e.options : e) ? o.toolbar : o) ? o.fa : o, { name: "if", hash: {}, fn: this.program(15, i, 0), inverse: this.program(17, i, 0), data: i })) ? o : "") + "    </a>\n  </div>\n</li>\n" }, useData: !0 }),
    function(e) { "function" == typeof define && define.amd ? define("bootstrap.wysihtml5", ["jquery", "wysihtml5", "bootstrap", "bootstrap.wysihtml5.templates", "bootstrap.wysihtml5.commands"], e) : e(jQuery, wysihtml5) }(function(e, t) {! function(e, t) { "use strict";
            var n = function(e, n, i) {
                    if (t.tpl[e]) return t.tpl[e]({ locale: n, options: i }) },
                i = function(n, i) { this.el = n;
                    var o = e.extend(!0, {}, r, i);
                    for (var a in o.customTemplates) t.tpl[a] = o.customTemplates[a];
                    this.toolbar = this.createToolbar(n, o), this.editor = this.createEditor(o) };
            i.prototype = { constructor: i, createEditor: function(n) { n = n || {}, n = e.extend(!0, {}, n), n.toolbar = this.toolbar[0];
                    var i = new t.Editor(this.el[0], n);
                    if (i.composer.editableArea.contentDocument ? this.addMoreShortcuts(i, i.composer.editableArea.contentDocument.body || i.composer.editableArea.contentDocument, n.shortcuts) : this.addMoreShortcuts(i, i.composer.editableArea, n.shortcuts), n && n.events)
                        for (var o in n.events) i.on(o, n.events[o]);
                    return i.on("beforeload", this.syncBootstrapDialogEvents), i }, syncBootstrapDialogEvents: function() {
                    var t = this;
                    e.map(this.toolbar.commandMapping, function(e) {
                        return [e] }).filter(function(e) {
                        return e.dialog }).map(function(e) {
                        return e.dialog }).forEach(function(n) { n.on("show", function() { e(this.container).modal("show") }), n.on("hide", function() { e(this.container).modal("hide"), t.composer.focus() }), e(n.container).on("shown.bs.modal", function() { e(this).find("input, select, textarea").first().focus() }) }) }, createToolbar: function(t, i) {
                    var o = this,
                        s = e("<ul/>", { "class": "wysihtml5-toolbar", style: "display:none" }),
                        l = i.locale || r.locale || "en";
                    a.hasOwnProperty(l) || (console.debug("Locale '" + l + "' not found. Available locales are: " + Object.keys(a) + ". Falling back to 'en'."), l = "en");
                    var c = e.extend(!0, {}, a.en, a[l]);
                    for (var u in i.toolbar) i.toolbar[u] && (s.append(n(u, c, i)), "html" === u && this.initHtml(s));
                    return s.find('a[data-wysihtml5-command="formatBlock"]').click(function(t) {
                        var n = t.delegateTarget || t.target || t.srcElement,
                            i = e(n),
                            r = i.data("wysihtml5-display-format-name"),
                            a = i.data("wysihtml5-format-name") || i.html();
                        r !== undefined && "true" !== r || o.toolbar.find(".current-font").text(a) }), s.find('a[data-wysihtml5-command="foreColor"]').click(function(t) {
                        var n = t.target || t.srcElement,
                            i = e(n);
                        o.toolbar.find(".current-color").text(i.html()) }), this.el.before(s), s }, initHtml: function(e) {
                    var t = 'a[data-wysihtml5-action="change_view"]';
                    e.find(t).click(function() { e.find("a.btn").not(t).toggleClass("disabled") }) }, addMoreShortcuts: function(e, n, i) { t.dom.observe(n, "keydown", function(n) {
                        var o = n.keyCode,
                            r = i[o];
                        if ((n.ctrlKey || n.metaKey || n.altKey) && r && t.commands[r]) {
                            var a = e.toolbar.commandMapping[r + ":null"];
                            a && a.dialog && !a.state ? a.dialog.show() : t.commands[r].exec(e.composer, r), n.preventDefault() } }) } };
            var o = { resetDefaults: function() { e.fn.wysihtml5.defaultOptions = e.extend(!0, {}, e.fn.wysihtml5.defaultOptionsCache) }, bypassDefaults: function(t) {
                    return this.each(function() {
                        var n = e(this);
                        n.data("wysihtml5", new i(n, t)) }) }, shallowExtend: function(t) {
                    var n = e.extend({}, e.fn.wysihtml5.defaultOptions, t || {}, e(this).data()),
                        i = this;
                    return o.bypassDefaults.apply(i, [n]) }, deepExtend: function(t) {
                    var n = e.extend(!0, {}, e.fn.wysihtml5.defaultOptions, t || {}),
                        i = this;
                    return o.bypassDefaults.apply(i, [n]) }, init: function(e) {
                    var t = this;
                    return o.shallowExtend.apply(t, [e]) } };
            e.fn.wysihtml5 = function(t) {
                return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.wysihtml5") : o.init.apply(this, arguments) }, e.fn.wysihtml5.Constructor = i;
            var r = e.fn.wysihtml5.defaultOptions = { toolbar: { "font-styles": !0, color: !1, emphasis: { small: !0 }, blockquote: !0, lists: !0, html: !1, link: !0, image: !0, smallmodals: !1 }, parserRules: { classes: { "wysiwyg-color-silver": 1, "wysiwyg-color-gray": 1, "wysiwyg-color-white": 1, "wysiwyg-color-maroon": 1, "wysiwyg-color-red": 1, "wysiwyg-color-purple": 1, "wysiwyg-color-fuchsia": 1, "wysiwyg-color-green": 1, "wysiwyg-color-lime": 1, "wysiwyg-color-olive": 1, "wysiwyg-color-yellow": 1, "wysiwyg-color-navy": 1, "wysiwyg-color-blue": 1, "wysiwyg-color-teal": 1, "wysiwyg-color-aqua": 1, "wysiwyg-color-orange": 1 }, tags: { b: {}, i: {}, strong: {}, em: {}, p: {}, br: {}, ol: {}, ul: {}, li: {}, h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, h6: {}, blockquote: {}, u: 1, img: { check_attributes: { width: "numbers", alt: "alt", src: "url", height: "numbers" } }, a: { check_attributes: { href: "url" }, set_attributes: { target: "_blank", rel: "nofollow" } }, span: 1, div: 1, small: 1, code: 1, pre: 1 } }, locale: "en", shortcuts: { 83: "small" } }; "undefined" == typeof e.fn.wysihtml5.defaultOptionsCache && (e.fn.wysihtml5.defaultOptionsCache = e.extend(!0, {}, e.fn.wysihtml5.defaultOptions));
            var a = e.fn.wysihtml5.locale = {} }(e, t) }),
    function(e) { e.commands.small = { exec: function(t, n) {
                return e.commands.formatInline.exec(t, n, "small") }, state: function(t, n) {
                return e.commands.formatInline.state(t, n, "small") } } }(wysihtml5),
    function(e) { "function" == typeof define && define.amd ? define("bootstrap.wysihtml5.en-US", ["jquery", "bootstrap.wysihtml5"], e) : e(jQuery) }(function(e) { e.fn.wysihtml5.locale.en = e.fn.wysihtml5.locale["en-US"] = { font_styles: { normal: "Normal text", h1: "Heading 1", h2: "Heading 2", h3: "Heading 3", h4: "Heading 4", h5: "Heading 5", h6: "Heading 6" }, emphasis: { bold: "Bold", italic: "Italic", underline: "Underline", small: "Small" }, lists: { unordered: "Unordered list", ordered: "Ordered list", outdent: "Outdent", indent: "Indent" }, link: { insert: "Insert link", cancel: "Cancel", target: "Open link in new window" }, image: { insert: "Insert image", cancel: "Cancel" }, html: { edit: "Edit HTML" }, colours: { black: "Black", silver: "Silver", gray: "Grey", maroon: "Maroon", red: "Red", purple: "Purple", green: "Green", olive: "Olive", navy: "Navy", blue: "Blue", orange: "Orange" } } }),
    function() { $(document).on("page:change", function() {
            return null != window._gaq ? _gaq.push(["_trackPageview"]) : null != window.pageTracker ? pageTracker._trackPageview() : void 0 }) }.call(this);
var styles = [{ featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] }, { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] }, { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: .2 }] }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, { lightness: 18 }]
    }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 17 }] }],
    goldStar = { path: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0", fillColor: "#00bbff", fillOpacity: .7, scale: .08, strokeColor: "white", strokeWeight: 1 },
    $navbar_transparent;
gsdk = { checkScrollForTransparentNavbar: debounce(function() { $(document).scrollTop() > 80 ? transparent && (transparent = !1, $navbar_transparent.removeClass("navbar-transparent").addClass("filled")) : transparent || (transparent = !0, $navbar_transparent.addClass("navbar-transparent").removeClass("filled")) }, 17) }, contact = { initContactUsMap: function() {
            var e = new google.maps.LatLng(44.43353, 26.093928),
                t = { zoom: 13, center: e, scrollwheel: !1 },
                n = new google.maps.Map(document.getElementById("contactUsMap"), t);
            new google.maps.Marker({ position: e, title: "Hello World!", icon: goldStar }).setMap(n) } }, sponsor = { initSponsorMap: function() {
            var e, t = new google.maps.LatLng(44.43353, -20.093928),
                n = { zoom: 3, center: t, scrollwheel: !1, styles: styles, language: "english" },
                i = new google.maps.Map(document.getElementById("sponsorMap"), n),
                o = new google.maps.InfoWindow,
                r = [{ name: "Startup Weekend Mankato", link: "http://www.up.co/communities/usa/mankato-mn-usa/startup-weekend/5333", lat: "44.1834814", "long": "-93.9774519" }, { name: "Startup Weekend Wearables and Fashion Tech Global", link: "http://www.up.co/communities/usa/miami/startup-weekend/7111", lat: "25.7975593", "long": "-80.2344575" }, { name: "Startup Weekend International Ventures Mexico", link: "http://www.up.co/communities/mexico/mexicocity/startup-weekend/5177", lat: "19.4175447", "long": "-99.1624129" }, { name: "Startup Weekend Cape Town", link: "http://www.up.co/communities/south-africa/cape-town/startup-weekend/6644 ", lat: "-34.0452834", "long": "18.6561316" }, { name: "Startup Weekend Dresden", link: "http://www.up.co/communities/germany/dresden/startup-weekend/5536", lat: "51.1072068", "long": "13.7583268" }, { name: "Startup Weekend Chihuahua MEGA - Mobile", link: "http://www.up.co/communities/mexico/startup-weekend/6844", lat: "28.7059955", "long": "-106.1401202" }, { name: "Startup Weekend Education Nairobi", link: "http://www.up.co/communities/kenya/nairobi/startup-weekend/5621", lat: "-1.3048035", "long": "36.8473969" }, { name: "Startup Weekend Krak\xf3w", link: "http://www.up.co/communities/poland/krakow/startup-weekend/6325", lat: "50.0619853", "long": "19.9431151" }, { name: "Startup Weekend Bordeaux", link: "http://www.up.co/communities/france/bordeaux/startup-weekend/6067", lat: "44.7964981", "long": "-0.6020615" }, { name: "Startup Weekend Paderborn ", link: "http://www.up.co/communities/germany/paderborn/startup-weekend/5808", lat: "51.7095138", "long": "8.7743854" }, { name: "Startup Weekend Tourism Gold Coast", link: "http://www.up.co/communities/australia/startup-weekend/5875", lat: "-28.079251", "long": "153.410862" }, { name: "Startup Weekend Lisbon", link: "http://www.up.co/communities/portugal/lisbon/startup-weekend/6040", lat: "38.7321675", "long": "-9.1550593" }, { name: "Startup Weekend Southampton", link: "http://www.up.co/communities/uk/southampton/startup-weekend/6255", lat: "50.934739", "long": " -1.4138285" }, { name: "Startup Weekend San Diego", link: "http://www.up.co/communities/usa/san-diego/startup-weekend/5947", lat: "37.0625", "long": "-95.677068" }, { name: "Startup Weekend Conejo Valley, Westlake Village", link: "http://www.up.co/communities/usa/conejo-valley/startup-weekend/5873", lat: "34.145003", "long": "-118.805604" }, { name: "Startup Weekend PEI, Charlottetown", link: "http://www.up.co/communities/canada/pei/startup-weekend/5679", lat: "46.2473738", "long": "-63.1358525" }, { name: "Startup Weekend Leuven", link: "http://www.up.co/communities/belgium/leuven/startup-weekend/5813", lat: "50.874201", "long": "4.7037124" }, { name: "Startup Weekend Women Hamburg", link: "http://www.up.co/communities/germany/hamburg/startup-weekend/5307", lat: "53.53839", "long": "10.02744" }, { name: "Startup Wekeend Madrid", link: "http://www.up.co/communities/spain/madrid/startup-weekend/5110", lat: "40.446065", "long": "-3.6734312" }, { name: "Startup Weekend Bandung", link: "http://www.up.co/communities/indonesia/bandung-indonesia/startup-weekend/5426", lat: "-6.8907709", "long": "107.6170374" }, { name: "Startup Weekend Kosice", link: "http://www.up.co/communities/slovakia/kosice/startup-weekend/5533", lat: "48.7342635", "long": "21.2448587" }, { name: "3 Day Startup Cluj", link: "http://cluj.3daystartup.org/", lat: "46.7833856", "long": "23.6165124" }, { name: "Startup Weekend Palermo", link: "http://www.up.co/communities/italy/palermo/startup-weekend/5577", lat: "38.1434836", "long": "13.3565626" }, { name: "Startup Weekend Berlin Future Shopping", link: "http://www.up.co/communities/germany/berlin/startup-weekend/5264", lat: "52.5143536", "long": "13.4184051" }, { name: "Startup Weekend Social Innovation Berlin", link: "http://www.up.co/communities/germany/berlin/startup-weekend/5885", lat: "52.4756316", "long": "13.4303355" }, { name: "Startup Weekend Athens, OH", link: "http://www.up.co/communities/usa/athens-oh/startup-weekend/5699", lat: "39.3344136", "long": "-82.1150887" }, { name: "Startup Weekend Cologne Germany", link: "http://www.up.co/communities/germany/cologne/startup-weekend/5112", lat: "50.948478", "long": "6.94499" }, { name: "Startup Weekend NYCEDU  New York", link: "http://www.up.co/communities/usa/nyc/startup-weekend/5546", lat: "40.749418", "long": "-74.003322" }],
                a = new Array;
            for (e = 0; e <= 27; e++) {
                var s = '<h5><a href="' + r[e].link + '" target="_blank" />' + r[e].name + "</a></h5>",
                    l = [s, r[e].lat, r[e]["long"]];
                a.push(l) }
            var c;
            for (e = 0; e < a.length; e++) c = new google.maps.Marker({ position: new google.maps.LatLng(a[e][1], a[e][2]), map: i, icon: goldStar }), google.maps.event.addListener(c, "click", function(e, t) {
                return function() { o.setContent(a[t][0]), o.open(i, e) } }(c, e)) } },
    function(e) {
        var t = function(e, t) { this.init(e, t) };
        t.prototype = { constructor: t, init: function(t, n) {
                var i = this.$element = e(t);
                this.options = e.extend({}, e.fn.checkbox.defaults, n), i.before(this.options.template), this.setState() }, setState: function() {
                var e = this.$element,
                    t = e.closest(".checkbox");
                e.prop("disabled") && t.addClass("disabled"), e.prop("checked") && t.addClass("checked") }, toggle: function() {
                var t = "checked",
                    n = this.$element,
                    i = n.closest(".checkbox"),
                    o = n.prop(t),
                    r = e.Event("toggle");
                0 == n.prop("disabled") && (i.toggleClass(t) && o ? n.removeAttr(t) : n.prop(t, t), n.trigger(r).trigger("change")) }, setCheck: function(t) {
                var n = "checked",
                    i = this.$element,
                    o = i.closest(".checkbox"),
                    r = "check" == t,
                    a = e.Event(t);
                o[r ? "addClass" : "removeClass"](n) && r ? i.prop(n, n) : i.removeAttr(n), i.trigger(a).trigger("change") } };
        var n = e.fn.checkbox;
        e.fn.checkbox = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("checkbox"),
                    r = e.extend({}, e.fn.checkbox.defaults, i.data(), "object" == typeof n && n);
                o || i.data("checkbox", o = new t(this, r)), "toggle" == n && o.toggle(), "check" == n || "uncheck" == n ? o.setCheck(n) : n && o.setState() }) }, e.fn.checkbox.defaults = { template: '<span class="icons"><span class="first-icon fa fa-square-o"></span><span class="second-icon fa fa-check-square-o"></span></span>' }, e.fn.checkbox.noConflict = function() {
            return e.fn.checkbox = n, this }, e(document).on("click.checkbox.data-api", "[data-toggle^=checkbox], .checkbox", function(t) {
            var n = e(t.target); "A" != t.target.tagName && (t && t.preventDefault() && t.stopPropagation(), n.hasClass("checkbox") || (n = n.closest(".checkbox")), n.find(":checkbox").checkbox("toggle")) }), e(function() { e('[data-toggle="checkbox"]').each(function() { e(this).checkbox() }) }) }(window.jQuery),
    function(e) { "use strict";
        e.fn.bootstrapSwitch = function(t) {
            var n = { init: function() {
                    return this.each(function() {
                        var t, n, i, o, r, a, s = e(this),
                            l = "",
                            c = s.attr("class"),
                            u = "ON",
                            d = "OFF",
                            f = !1;
                        e.each(["switch-mini", "switch-small", "switch-large"], function(e, t) { c.indexOf(t) >= 0 && (l = t) }), s.addClass("has-switch"), s.data("on") !== undefined && (r = "switch-" + s.data("on")), s.data("on-label") !== undefined && (u = s.data("on-label")), s.data("off-label") !== undefined && (d = s.data("off-label")), s.data("icon") !== undefined && (f = s.data("icon")), n = e("<span>").addClass("switch-left").addClass(l).addClass(r).html(u), r = "", s.data("off") !== undefined && (r = "switch-" + s.data("off")), i = e("<span>").addClass("switch-right").addClass(l).addClass(r).html(d), o = e("<label>").html("&nbsp;").addClass(l).attr("for", s.find("input").attr("id")), f && o.html('<i class="' + f + '"></i>'), t = s.find(":checkbox").wrap(e("<div>")).parent().data("animated", !1), !1 !== s.data("animated") && t.addClass("switch-animate").data("animated", !0), t.append(n).append(o).append(i), s.find(">div").addClass(s.find("input").is(":checked") ? "switch-on" : "switch-off"), s.find("input").is(":disabled") && e(this).addClass("deactivate");
                        var h = function(e) { e.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click") };
                        s.on("keydown", function(t) { 32 === t.keyCode && (t.stopImmediatePropagation(), t.preventDefault(), h(e(t.target).find("span:first"))) }), n.on("click", function() { h(e(this)) }), i.on("click", function() { h(e(this)) }), s.find("input").on("change", function(t) {
                            var n = e(this),
                                i = n.parent(),
                                o = n.is(":checked"),
                                r = i.is(".switch-off");
                            t.preventDefault(), i.css("left", ""), r === o && (o ? i.removeClass("switch-off").addClass("switch-on") : i.removeClass("switch-on").addClass("switch-off"), !1 !== i.data("animated") && i.addClass("switch-animate"), i.parent().trigger("switch-change", { el: n, value: o })) }), s.find("label").on("mousedown touchstart", function(t) {
                            var n = e(this);
                            a = !1, t.preventDefault(), t.stopImmediatePropagation(), n.closest("div").removeClass("switch-animate"), n.closest(".has-switch").is(".deactivate") ? n.unbind("click") : (n.on("mousemove touchmove", function(t) {
                                var n = e(this).closest(".switch"),
                                    i = (t.pageX || t.originalEvent.targetTouches[0].pageX) - n.offset().left,
                                    o = i / n.width() * 100,
                                    r = 25,
                                    s = 75;
                                a = !0, o < r ? o = r : o > s && (o = s), n.find(">div").css("left", o - s + "%") }), n.on("click touchend", function(t) {
                                var n = e(this),
                                    i = e(t.target),
                                    o = i.siblings("input");
                                t.stopImmediatePropagation(), t.preventDefault(), n.unbind("mouseleave"), a ? o.prop("checked", !(parseInt(n.parent().css("left")) < -25)) : o.prop("checked", !o.is(":checked")), a = !1, o.trigger("change") }), n.on("mouseleave", function(t) {
                                var n = e(this),
                                    i = n.siblings("input");
                                t.preventDefault(), t.stopImmediatePropagation(), n.unbind("mouseleave"), n.trigger("mouseup"), i.prop("checked", !(parseInt(n.parent().css("left")) < -25)).trigger("change") }), n.on("mouseup", function(t) { t.stopImmediatePropagation(), t.preventDefault(), e(this).unbind("mousemove") })) }) }) }, toggleActivation: function() { e(this).toggleClass("deactivate") }, isActive: function() {
                    return !e(this).hasClass("deactivate") }, setActive: function(t) { t ? e(this).removeClass("deactivate") : e(this).addClass("deactivate") }, toggleState: function(t) {
                    var n = e(this).find("input:checkbox");
                    n.prop("checked", !n.is(":checked")).trigger("change", t) }, setState: function(t, n) { e(this).find("input:checkbox").prop("checked", t).trigger("change", n) }, status: function() {
                    return e(this).find("input:checkbox").is(":checked") }, destroy: function() {
                    var t, n = e(this).find("div");
                    return n.find(":not(input:checkbox)").remove(), t = n.children(), t.unwrap().unwrap(), t.unbind("change"), t } };
            return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist!") : n.init.apply(this, arguments) } }(jQuery),
    function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function(e) { "use strict";

        function t(e) {
            if (e instanceof Date) return e;
            if (String(e).match(a)) return String(e).match(/^[0-9]*$/) && (e = Number(e)), String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")), new Date(e);
            throw new Error("Couldn't cast `" + e + "` to a date object.") }

        function n(e) {
            var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            return new RegExp(t) }

        function i(e) {
            return function(t) {
                var i = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (i)
                    for (var r = 0, a = i.length; a > r; ++r) {
                        var s = i[r].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            c = n(s[0]),
                            u = s[1] || "",
                            d = s[3] || "",
                            f = null;
                        s = s[2], l.hasOwnProperty(s) && (f = l[s], f = Number(e[f])), null !== f && ("!" === u && (f = o(d, f)), "" === u && 10 > f && (f = "0" + f.toString()), t = t.replace(c, f.toString())) }
                return t = t.replace(/%%/, "%") } }

        function o(e, t) {
            var n = "s",
                i = "";
            return e && (e = e.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === e.length ? n = e[0] : (i = e[0], n = e[1])), 1 === Math.abs(t) ? i : n }
        var r = [],
            a = [],
            s = { precision: 100, elapse: !1 };
        a.push(/^[0-9]*$/.source), a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a = new RegExp(a.join("|"));
        var l = { Y: "years", m: "months", n: "daysToMonth", w: "weeks", d: "daysToWeek", D: "totalDays", H: "hours", M: "minutes", S: "seconds" },
            c = function(t, n, i) { this.el = t, this.$el = e(t), this.interval = null, this.offset = {}, this.options = e.extend({}, s), this.instanceNumber = r.length, r.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = e.extend({}, s, i)), this.setFinalDate(n), this.start() };
        e.extend(c.prototype, { start: function() { null !== this.interval && clearInterval(this.interval);
                var e = this;
                this.update(), this.interval = setInterval(function() { e.update.call(e) }, this.options.precision) }, stop: function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") }, toggle: function() { this.interval ? this.stop() : this.start() }, pause: function() { this.stop() }, resume: function() { this.start() }, remove: function() { this.stop.call(this), r[this.instanceNumber] = null, delete this.$el.data().countdownInstance }, setFinalDate: function(e) { this.finalDate = t(e) }, update: function() {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var t, n = void 0 !== e._data(this.el, "events"),
                    i = new Date;
                t = this.finalDate.getTime() - i.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && 0 > t ? 0 : Math.abs(t), this.totalSecsLeft !== t && n && (this.totalSecsLeft = t, this.elapsed = i >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()) }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))) }, dispatchEvent: function(t) {
                var n = e.Event(t + ".countdown");
                n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = e.extend({}, this.offset), n.strftime = i(this.offset), this.$el.trigger(n) } }), e.fn.countdown = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var n = e(this).data("countdown-instance");
                if (void 0 !== n) {
                    var i = r[n],
                        o = t[0];
                    c.prototype.hasOwnProperty(o) ? i[o].apply(i, t.slice(1)) : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, o), i.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, o)) } else new c(this, t[0], t[1]) }) } }),
    function(e, t) {
        e.MixItUp = function() {
            var t = this;
            t._execAction("_constructor", 0), e.extend(t, { selectors: { target: ".mix", filter: ".filter", sort: ".sort" }, animation: { enable: !0, effects: "fade scale", duration: 600, easing: "ease", perspectiveDistance: "3000", perspectiveOrigin: "50% 50%", queue: !0, queueLimit: 1, animateChangeLayout: !1, animateResizeContainer: !0, animateResizeTargets: !1, staggerSequence: !1, reverseOut: !1 }, callbacks: { onMixLoad: !1, onMixStart: !1, onMixBusy: !1, onMixEnd: !1, onMixFail: !1, _user: !1 }, controls: { enable: !0, live: !1, toggleFilterButtons: !1, toggleLogic: "or", activeClass: "active" }, layout: { display: "inline-block", containerClass: "", containerClassFail: "fail" }, load: { filter: "all", sort: !1 }, _$body: null, _$container: null, _$targets: null, _$parent: null, _$sortButtons: null, _$filterButtons: null, _suckMode: !1, _mixing: !1, _sorting: !1, _clicking: !1, _loading: !0, _changingLayout: !1, _changingClass: !1, _changingDisplay: !1, _origOrder: [], _startOrder: [], _newOrder: [], _activeFilter: null, _toggleArray: [], _toggleString: "", _activeSort: "default:asc", _newSort: null, _startHeight: null, _newHeight: null, _incPadding: !0, _newDisplay: null, _newClass: null, _targetsBound: 0, _targetsDone: 0, _queue: [], _$show: e(), _$hide: e() }), t._execAction("_constructor", 1) }, e.MixItUp.prototype = {
            constructor: e.MixItUp,
            _instances: {},
            _handled: { _filter: {}, _sort: {} },
            _bound: { _filter: {}, _sort: {} },
            _actions: {},
            _filters: {},
            extend: function(t) {
                for (var n in t) e.MixItUp.prototype[n] = t[n] },
            addAction: function(t, n, i, o) { e.MixItUp.prototype._addHook("_actions", t, n, i, o) },
            addFilter: function(t, n, i, o) { e.MixItUp.prototype._addHook("_filters", t, n, i, o) },
            _addHook: function(t, n, i, o, r) {
                var a = e.MixItUp.prototype[t],
                    s = {};
                r = 1 === r || "post" === r ? "post" : "pre", s[n] = {}, s[n][r] = {}, s[n][r][i] = o, e.extend(!0, a, s) },
            _init: function(t, n) {
                var i = this;
                if (i._execAction("_init", 0, arguments), n && e.extend(!0, i, n), i._$body = e("body"), i._domNode = t, i._$container = e(t), i._$container.addClass(i.layout.containerClass), i._id = t.id, i._platformDetect(), i._brake = i._getPrefixedCSS("transition", "none"), i._refresh(!0), i._$parent = i._$targets.parent().length ? i._$targets.parent() : i._$container, i.load.sort && (i._newSort = i._parseSort(i.load.sort), i._newSortString = i.load.sort, i._activeSort = i.load.sort, i._sort(), i._printSort()), i._activeFilter = "all" === i.load.filter ? i.selectors.target : "none" === i.load.filter ? "" : i.load.filter, i.controls.enable && i._bindHandlers(), i.controls.toggleFilterButtons) { i._buildToggleArray();
                    for (var o = 0; o < i._toggleArray.length; o++) i._updateControls({ filter: i._toggleArray[o], sort: i._activeSort }, !0) } else i.controls.enable && i._updateControls({ filter: i._activeFilter, sort: i._activeSort });
                i._filter(), i._init = !0, i._$container.data("mixItUp", i), i._execAction("_init", 1, arguments), i._buildState(), i._$targets.css(i._brake), i._goMix(i.animation.enable) },
            _platformDetect: function() {
                var e = this,
                    n = ["Webkit", "Moz", "O", "ms"],
                    i = ["webkit", "moz"],
                    o = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
                    r = "undefined" != typeof InstallTrigger,
                    a = function(e) {
                        for (var t = 0; t < n.length; t++)
                            if (n[t] + "Transition" in e.style) return { prefix: "-" + n[t].toLowerCase() + "-", vendor: n[t] };
                        return "transition" in e.style && "" },
                    s = a(e._domNode);
                e._execAction("_platformDetect", 0), e._chrome = !!o && parseInt(o[1], 10), e._ff = !!r && parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]), e._prefix = s.prefix, e._vendor = s.vendor, e._suckMode = !window.atob || !e._prefix, e._suckMode && (e.animation.enable = !1), e._ff && e._ff <= 4 && (e.animation.enable = !1);
                for (var l = 0; l < i.length && !window.requestAnimationFrame; l++) window.requestAnimationFrame = window[i[l] + "RequestAnimationFrame"]; "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(e) {
                    return e.__proto__ } : Object.getPrototypeOf = function(e) {
                    return e.constructor.prototype }), e._domNode.nextElementSibling === t && Object.defineProperty(Element.prototype, "nextElementSibling", { get: function() {
                        for (var e = this.nextSibling; e;) {
                            if (1 === e.nodeType) return e;
                            e = e.nextSibling }
                        return null } }), e._execAction("_platformDetect", 1) },
            _refresh: function(e, n) {
                var i = this;
                i._execAction("_refresh", 0, arguments), i._$targets = i._$container.find(i.selectors.target);
                for (var o = 0; o < i._$targets.length; o++) {
                    var r = i._$targets[o];
                    if (r.dataset === t || n) { r.dataset = {};
                        for (var a = 0; a < r.attributes.length; a++) {
                            var s = r.attributes[a],
                                l = s.name,
                                c = s.value;
                            if (l.indexOf("data-") > -1) {
                                var u = i._helpers._camelCase(l.substring(5, l.length));
                                r.dataset[u] = c } } }
                    r.mixParent === t && (r.mixParent = i._id) }
                if (i._$targets.length && e || !i._origOrder.length && i._$targets.length) { i._origOrder = [];
                    for (var o = 0; o < i._$targets.length; o++) {
                        var r = i._$targets[o];
                        i._origOrder.push(r) } }
                i._execAction("_refresh", 1, arguments) },
            _bindHandlers: function() {
                var n = this,
                    i = e.MixItUp.prototype._bound._filter,
                    o = e.MixItUp.prototype._bound._sort;
                n._execAction("_bindHandlers", 0), n.controls.live ? n._$body.on("click.mixItUp." + n._id, n.selectors.sort, function() { n._processClick(e(this), "sort") }).on("click.mixItUp." + n._id, n.selectors.filter, function() { n._processClick(e(this), "filter") }) : (n._$sortButtons = e(n.selectors.sort), n._$filterButtons = e(n.selectors.filter), n._$sortButtons.on("click.mixItUp." + n._id, function() { n._processClick(e(this), "sort") }), n._$filterButtons.on("click.mixItUp." + n._id, function() { n._processClick(e(this), "filter") })), i[n.selectors.filter] = i[n.selectors.filter] === t ? 1 : i[n.selectors.filter] + 1, o[n.selectors.sort] = o[n.selectors.sort] === t ? 1 : o[n.selectors.sort] + 1, n._execAction("_bindHandlers", 1) },
            _processClick: function(n, i) {
                var o = this,
                    r = function(n, i, r) {
                        var a = e.MixItUp.prototype;
                        a._handled["_" + i][o.selectors[i]] = a._handled["_" + i][o.selectors[i]] === t ? 1 : a._handled["_" + i][o.selectors[i]] + 1, a._handled["_" + i][o.selectors[i]] === a._bound["_" + i][o.selectors[i]] && (n[(r ? "remove" : "add") + "Class"](o.controls.activeClass), delete a._handled["_" + i][o.selectors[i]]) };
                if (o._execAction("_processClick", 0, arguments), !o._mixing || o.animation.queue && o._queue.length < o.animation.queueLimit) {
                    if (o._clicking = !0, "sort" === i) {
                        var a = n.attr("data-sort");
                        (!n.hasClass(o.controls.activeClass) || a.indexOf("random") > -1) && (e(o.selectors.sort).removeClass(o.controls.activeClass), r(n, i), o.sort(a)) }
                    if ("filter" === i) {
                        var s, l = n.attr("data-filter"),
                            c = "or" === o.controls.toggleLogic ? "," : "";
                        o.controls.toggleFilterButtons ? (o._buildToggleArray(), n.hasClass(o.controls.activeClass) ? (r(n, i, !0), s = o._toggleArray.indexOf(l), o._toggleArray.splice(s, 1)) : (r(n, i), o._toggleArray.push(l)), o._toggleArray = e.grep(o._toggleArray, function(e) {
                            return e }), o._toggleString = o._toggleArray.join(c), o.filter(o._toggleString)) : n.hasClass(o.controls.activeClass) || (e(o.selectors.filter).removeClass(o.controls.activeClass), r(n, i), o.filter(l)) }
                    o._execAction("_processClick", 1, arguments) } else "function" == typeof o.callbacks.onMixBusy && o.callbacks.onMixBusy.call(o._domNode, o._state, o), o._execAction("_processClickBusy", 1, arguments) },
            _buildToggleArray: function() {
                var e = this,
                    t = e._activeFilter.replace(/\s/g, "");
                if (e._execAction("_buildToggleArray", 0, arguments), "or" === e.controls.toggleLogic) e._toggleArray = t.split(",");
                else { e._toggleArray = t.split("."), !e._toggleArray[0] && e._toggleArray.shift();
                    for (var n, i = 0; n = e._toggleArray[i]; i++) e._toggleArray[i] = "." + n }
                e._execAction("_buildToggleArray", 1, arguments) },
            _updateControls: function(n, i) {
                var o = this,
                    r = { filter: n.filter, sort: n.sort },
                    a = function(e, t) { i && "filter" === s && "none" !== r.filter && "" !== r.filter ? e.filter(t).addClass(o.controls.activeClass) : e.removeClass(o.controls.activeClass).filter(t).addClass(o.controls.activeClass) },
                    s = "filter",
                    l = null;
                o._execAction("_updateControls", 0, arguments), n.filter === t && (r.filter = o._activeFilter), n.sort === t && (r.sort = o._activeSort), r.filter === o.selectors.target && (r.filter = "all");
                for (var c = 0; c < 2; c++) l = o.controls.live ? e(o.selectors[s]) : o["_$" + s + "Buttons"], l && a(l, "[data-" + s + '="' + r[s] + '"]'), s = "sort";
                o._execAction("_updateControls", 1, arguments) },
            _filter: function() {
                var t = this;
                t._execAction("_filter", 0);
                for (var n = 0; n < t._$targets.length; n++) {
                    var i = e(t._$targets[n]);
                    i.is(t._activeFilter) ? t._$show = t._$show.add(i) : t._$hide = t._$hide.add(i) }
                t._execAction("_filter", 1) },
            _sort: function() {
                var e = this,
                    t = function(e) {
                        for (var t = e.slice(), n = t.length, i = n; i--;) {
                            var o = parseInt(Math.random() * n),
                                r = t[i];
                            t[i] = t[o], t[o] = r }
                        return t };
                e._execAction("_sort", 0), e._startOrder = [];
                for (var n = 0; n < e._$targets.length; n++) {
                    var i = e._$targets[n];
                    e._startOrder.push(i) }
                switch (e._newSort[0].sortBy) {
                    case "default":
                        e._newOrder = e._origOrder;
                        break;
                    case "random":
                        e._newOrder = t(e._startOrder);
                        break;
                    case "custom":
                        e._newOrder = e._newSort[0].order;
                        break;
                    default:
                        e._newOrder = e._startOrder.concat().sort(function(t, n) {
                            return e._compare(t, n) }) }
                e._execAction("_sort", 1) },
            _compare: function(e, t, n) { n = n || 0;
                var i = this,
                    o = i._newSort[n].order,
                    r = function(e) {
                        return e.dataset[i._newSort[n].sortBy] || 0 },
                    a = isNaN(1 * r(e)) ? r(e).toLowerCase() : 1 * r(e),
                    s = isNaN(1 * r(t)) ? r(t).toLowerCase() : 1 * r(t);
                return a < s ? "asc" === o ? -1 : 1 : a > s ? "asc" === o ? 1 : -1 : a === s && i._newSort.length > n + 1 ? i._compare(e, t, n + 1) : 0 },
            _printSort: function(e) {
                var t = this,
                    n = e ? t._startOrder : t._newOrder,
                    i = t._$parent[0].querySelectorAll(t.selectors.target),
                    o = i.length ? i[i.length - 1].nextElementSibling : null,
                    r = document.createDocumentFragment();
                t._execAction("_printSort", 0, arguments);
                for (var a = 0; a < i.length; a++) {
                    var s = i[a],
                        l = s.nextSibling; "absolute" !== s.style.position && (l && "#text" === l.nodeName && t._$parent[0].removeChild(l), t._$parent[0].removeChild(s)) }
                for (var a = 0; a < n.length; a++) {
                    var c = n[a];
                    if ("default" !== t._newSort[0].sortBy || "desc" !== t._newSort[0].order || e) r.appendChild(c), r.appendChild(document.createTextNode(" "));
                    else {
                        var u = r.firstChild;
                        r.insertBefore(c, u), r.insertBefore(document.createTextNode(" "), c) } }
                o ? t._$parent[0].insertBefore(r, o) : t._$parent[0].appendChild(r), t._execAction("_printSort", 1, arguments) },
            _parseSort: function(e) {
                for (var t = this, n = "string" == typeof e ? e.split(" ") : [e], i = [], o = 0; o < n.length; o++) {
                    var r = "string" == typeof e ? n[o].split(":") : ["custom", n[o]],
                        a = { sortBy: t._helpers._camelCase(r[0]), order: r[1] || "asc" };
                    if (i.push(a), "default" === a.sortBy || "random" === a.sortBy) break }
                return t._execFilter("_parseSort", i, arguments) },
            _parseEffects: function() {
                var e = this,
                    t = { opacity: "", transformIn: "", transformOut: "", filter: "" },
                    n = function(t, n) {
                        if (e.animation.effects.indexOf(t) > -1) {
                            if (n) {
                                var i = e.animation.effects.indexOf(t + "(");
                                if (i > -1) {
                                    var o = e.animation.effects.substring(i);
                                    return { val: /\(([^)]+)\)/.exec(o)[1] } } }
                            return !0 }
                        return !1 },
                    i = function(e, t) {
                        return t ? "-" === e.charAt(0) ? e.substr(1, e.length) : "-" + e : e },
                    o = function(e, o) {
                        for (var r = [
                                ["scale", ".01"],
                                ["translateX", "20px"],
                                ["translateY", "20px"],
                                ["translateZ", "20px"],
                                ["rotateX", "90deg"],
                                ["rotateY", "90deg"],
                                ["rotateZ", "180deg"]
                            ], a = 0; a < r.length; a++) {
                            var s = r[a][0],
                                l = r[a][1],
                                c = o && "scale" !== s;
                            t[e] += n(s) ? s + "(" + i(n(s, !0).val || l, c) + ") " : "" } };
                return t.opacity = n("fade") ? n("fade", !0).val || "0" : "1", o("transformIn"), e.animation.reverseOut ? o("transformOut", !0) : t.transformOut = t.transformIn, t.transition = {}, t.transition = e._getPrefixedCSS("transition", "all " + e.animation.duration + "ms " + e.animation.easing + ", opacity " + e.animation.duration + "ms linear"), e.animation.stagger = !!n("stagger"), e.animation.staggerDuration = parseInt(n("stagger") && n("stagger", !0).val ? n("stagger", !0).val : 100), e._execFilter("_parseEffects", t) },
            _buildState: function(e) {
                var t = this,
                    n = {};
                if (t._execAction("_buildState", 0), n = { activeFilter: "" === t._activeFilter ? "none" : t._activeFilter, activeSort: e && t._newSortString ? t._newSortString : t._activeSort, fail: !t._$show.length && "" !== t._activeFilter, $targets: t._$targets, $show: t._$show, $hide: t._$hide, totalTargets: t._$targets.length, totalShow: t._$show.length, totalHide: t._$hide.length, display: e && t._newDisplay ? t._newDisplay : t.layout.display }, e) return t._execFilter("_buildState", n);
                t._state = n, t._execAction("_buildState", 1) },
            _goMix: function(e) {
                var t = this,
                    n = function() { t._chrome && 31 === t._chrome && r(t._$parent[0]), t._setInter(), i() },
                    i = function() {
                        var e = window.pageYOffset,
                            n = window.pageXOffset;
                        document.documentElement.scrollHeight;
                        t._getInterMixData(), t._setFinal(), t._getFinalMixData(), window.pageYOffset !== e && window.scrollTo(n, e), t._prepTargets(), window.requestAnimationFrame ? requestAnimationFrame(o) : setTimeout(function() { o() }, 20) },
                    o = function() { t._animateTargets(), 0 === t._targetsBound && t._cleanUp() },
                    r = function(e) {
                        var t = e.parentElement,
                            n = document.createElement("div"),
                            i = document.createDocumentFragment();
                        t.insertBefore(n, e), i.appendChild(e), t.replaceChild(e, n) },
                    a = t._buildState(!0);
                t._execAction("_goMix", 0, arguments), !t.animation.duration && (e = !1), t._mixing = !0, t._$container.removeClass(t.layout.containerClassFail), "function" == typeof t.callbacks.onMixStart && t.callbacks.onMixStart.call(t._domNode, t._state, a, t), t._$container.trigger("mixStart", [t._state, a, t]), t._getOrigMixData(), e && !t._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(n) : n() : t._cleanUp(), t._execAction("_goMix", 1, arguments) },
            _getTargetData: function(e, t) {
                var n, i = this;
                e.dataset[t + "PosX"] = e.offsetLeft, e.dataset[t + "PosY"] = e.offsetTop, i.animation.animateResizeTargets && (n = window.getComputedStyle(e), e.dataset[t + "MarginBottom"] = parseInt(n.marginBottom), e.dataset[t + "MarginRight"] = parseInt(n.marginRight), e.dataset[t + "Width"] = e.offsetWidth, e.dataset[t + "Height"] = e.offsetHeight) },
            _getOrigMixData: function() {
                var e = this,
                    t = e._suckMode ? { boxSizing: "" } : window.getComputedStyle(e._$parent[0]),
                    n = t.boxSizing || t[e._vendor + "BoxSizing"];
                e._incPadding = "border-box" === n, e._execAction("_getOrigMixData", 0), !e._suckMode && (e.effects = e._parseEffects()), e._$toHide = e._$hide.filter(":visible"), e._$toShow = e._$show.filter(":hidden"), e._$pre = e._$targets.filter(":visible"), e._startHeight = e._incPadding ? e._$parent.outerHeight() : e._$parent.height();
                for (var i = 0; i < e._$pre.length; i++) {
                    var o = e._$pre[i];
                    e._getTargetData(o, "orig") }
                e._execAction("_getOrigMixData", 1) },
            _setInter: function() {
                var e = this;
                e._execAction("_setInter", 0), e._changingLayout && e.animation.animateChangeLayout ? (e._$toShow.css("display", e._newDisplay), e._changingClass && e._$container.removeClass(e.layout.containerClass).addClass(e._newClass)) : e._$toShow.css("display", e.layout.display), e._execAction("_setInter", 1) },
            _getInterMixData: function() {
                var e = this;
                e._execAction("_getInterMixData", 0);
                for (var t = 0; t < e._$toShow.length; t++) {
                    var n = e._$toShow[t];
                    e._getTargetData(n, "inter") }
                for (var t = 0; t < e._$pre.length; t++) {
                    var n = e._$pre[t];
                    e._getTargetData(n, "inter") }
                e._execAction("_getInterMixData", 1) },
            _setFinal: function() {
                var e = this;
                e._execAction("_setFinal", 0), e._sorting && e._printSort(), e._$toHide.removeStyle("display"), e._changingLayout && e.animation.animateChangeLayout && e._$pre.css("display", e._newDisplay), e._execAction("_setFinal", 1) },
            _getFinalMixData: function() {
                var e = this;
                e._execAction("_getFinalMixData", 0);
                for (var t = 0; t < e._$toShow.length; t++) {
                    var n = e._$toShow[t];
                    e._getTargetData(n, "final") }
                for (var t = 0; t < e._$pre.length; t++) {
                    var n = e._$pre[t];
                    e._getTargetData(n, "final") }
                e._newHeight = e._incPadding ? e._$parent.outerHeight() : e._$parent.height(), e._sorting && e._printSort(!0), e._$toShow.removeStyle("display"), e._$pre.css("display", e.layout.display), e._changingClass && e.animation.animateChangeLayout && e._$container.removeClass(e._newClass).addClass(e.layout.containerClass), e._execAction("_getFinalMixData", 1) },
            _prepTargets: function() {
                var t = this,
                    n = { _in: t._getPrefixedCSS("transform", t.effects.transformIn), _out: t._getPrefixedCSS("transform", t.effects.transformOut) };
                t._execAction("_prepTargets", 0), t.animation.animateResizeContainer && t._$parent.css("height", t._startHeight + "px");
                for (var i = 0; i < t._$toShow.length; i++) {
                    var o = t._$toShow[i],
                        r = e(o);
                    o.style.opacity = t.effects.opacity, o.style.display = t._changingLayout && t.animation.animateChangeLayout ? t._newDisplay : t.layout.display, r.css(n._in), t.animation.animateResizeTargets && (o.style.width = o.dataset.finalWidth + "px", o.style.height = o.dataset.finalHeight + "px", o.style.marginRight = -(o.dataset.finalWidth - o.dataset.interWidth) + 1 * o.dataset.finalMarginRight + "px", o.style.marginBottom = -(o.dataset.finalHeight - o.dataset.interHeight) + 1 * o.dataset.finalMarginBottom + "px") }
                for (var i = 0; i < t._$pre.length; i++) {
                    var o = t._$pre[i],
                        r = e(o),
                        a = { x: o.dataset.origPosX - o.dataset.interPosX, y: o.dataset.origPosY - o.dataset.interPosY },
                        n = t._getPrefixedCSS("transform", "translate(" + a.x + "px," + a.y + "px)");
                    r.css(n), t.animation.animateResizeTargets && (o.style.width = o.dataset.origWidth + "px", o.style.height = o.dataset.origHeight + "px", o.dataset.origWidth - o.dataset.finalWidth && (o.style.marginRight = -(o.dataset.origWidth - o.dataset.interWidth) + 1 * o.dataset.origMarginRight + "px"), o.dataset.origHeight - o.dataset.finalHeight && (o.style.marginBottom = -(o.dataset.origHeight - o.dataset.interHeight) + 1 * o.dataset.origMarginBottom + "px")) }
                t._execAction("_prepTargets", 1) },
            _animateTargets: function() {
                var t = this;
                t._execAction("_animateTargets", 0), t._targetsDone = 0, t._targetsBound = 0, t._$parent.css(t._getPrefixedCSS("perspective", t.animation.perspectiveDistance + "px")).css(t._getPrefixedCSS("perspective-origin", t.animation.perspectiveOrigin)), t.animation.animateResizeContainer && t._$parent.css(t._getPrefixedCSS("transition", "height " + t.animation.duration + "ms ease")).css("height", t._newHeight + "px");
                for (var n = 0; n < t._$toShow.length; n++) {
                    var i = t._$toShow[n],
                        o = e(i),
                        r = { x: i.dataset.finalPosX - i.dataset.interPosX, y: i.dataset.finalPosY - i.dataset.interPosY },
                        a = t._getDelay(n),
                        s = {};
                    i.style.opacity = "";
                    for (var l = 0; l < 2; l++) {
                        var c = 0 === l ? c = t._prefix : "";
                        t._ff && t._ff <= 20 && (s[c + "transition-property"] = "all", s[c + "transition-timing-function"] = t.animation.easing + "ms", s[c + "transition-duration"] = t.animation.duration + "ms"), s[c + "transition-delay"] = a + "ms", s[c + "transform"] = "translate(" + r.x + "px," + r.y + "px)" }(t.effects.transform || t.effects.opacity) && t._bindTargetDone(o), t._ff && t._ff <= 20 ? o.css(s) : o.css(t.effects.transition).css(s) }
                for (var n = 0; n < t._$pre.length; n++) {
                    var i = t._$pre[n],
                        o = e(i),
                        r = { x: i.dataset.finalPosX - i.dataset.interPosX, y: i.dataset.finalPosY - i.dataset.interPosY },
                        a = t._getDelay(n);
                    i.dataset.finalPosX === i.dataset.origPosX && i.dataset.finalPosY === i.dataset.origPosY || t._bindTargetDone(o),
                        o.css(t._getPrefixedCSS("transition", "all " + t.animation.duration + "ms " + t.animation.easing + " " + a + "ms")), o.css(t._getPrefixedCSS("transform", "translate(" + r.x + "px," + r.y + "px)")), t.animation.animateResizeTargets && (i.dataset.origWidth - i.dataset.finalWidth && 1 * i.dataset.finalWidth && (i.style.width = i.dataset.finalWidth + "px", i.style.marginRight = -(i.dataset.finalWidth - i.dataset.interWidth) + 1 * i.dataset.finalMarginRight + "px"), i.dataset.origHeight - i.dataset.finalHeight && 1 * i.dataset.finalHeight && (i.style.height = i.dataset.finalHeight + "px", i.style.marginBottom = -(i.dataset.finalHeight - i.dataset.interHeight) + 1 * i.dataset.finalMarginBottom + "px"))
                }
                t._changingClass && t._$container.removeClass(t.layout.containerClass).addClass(t._newClass);
                for (var n = 0; n < t._$toHide.length; n++) {
                    for (var i = t._$toHide[n], o = e(i), a = t._getDelay(n), u = {}, l = 0; l < 2; l++) {
                        var c = 0 === l ? c = t._prefix : "";
                        u[c + "transition-delay"] = a + "ms", u[c + "transform"] = t.effects.transformOut, u.opacity = t.effects.opacity }
                    o.css(t.effects.transition).css(u), (t.effects.transform || t.effects.opacity) && t._bindTargetDone(o) }
                t._execAction("_animateTargets", 1)
            },
            _bindTargetDone: function(t) {
                var n = this,
                    i = t[0];
                n._execAction("_bindTargetDone", 0, arguments), i.dataset.bound || (i.dataset.bound = !0, n._targetsBound++, t.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(o) {
                    (o.originalEvent.propertyName.indexOf("transform") > -1 || o.originalEvent.propertyName.indexOf("opacity") > -1) && e(o.originalEvent.target).is(n.selectors.target) && (t.off(".mixItUp"), delete i.dataset.bound, n._targetDone()) })), n._execAction("_bindTargetDone", 1, arguments) },
            _targetDone: function() {
                var e = this;
                e._execAction("_targetDone", 0), e._targetsDone++, e._targetsDone === e._targetsBound && e._cleanUp(), e._execAction("_targetDone", 1) },
            _cleanUp: function() {
                var t = this,
                    n = t.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity";
                unBrake = function() { t._$targets.removeStyle("transition", t._prefix) }, t._execAction("_cleanUp", 0), t._changingLayout ? t._$show.css("display", t._newDisplay) : t._$show.css("display", t.layout.display), t._$targets.css(t._brake), t._$targets.removeStyle(n, t._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"), t._$hide.removeStyle("display"), t._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", t._prefix), t._sorting && (t._printSort(), t._activeSort = t._newSortString, t._sorting = !1), t._changingLayout && (t._changingDisplay && (t.layout.display = t._newDisplay, t._changingDisplay = !1), t._changingClass && (t._$parent.removeClass(t.layout.containerClass).addClass(t._newClass), t.layout.containerClass = t._newClass, t._changingClass = !1), t._changingLayout = !1), t._refresh(), t._buildState(), t._state.fail && t._$container.addClass(t.layout.containerClassFail), t._$show = e(), t._$hide = e(), window.requestAnimationFrame && requestAnimationFrame(unBrake), t._mixing = !1, "function" == typeof t.callbacks._user && t.callbacks._user.call(t._domNode, t._state, t), "function" == typeof t.callbacks.onMixEnd && t.callbacks.onMixEnd.call(t._domNode, t._state, t), t._$container.trigger("mixEnd", [t._state, t]), t._state.fail && ("function" == typeof t.callbacks.onMixFail && t.callbacks.onMixFail.call(t._domNode, t._state, t), t._$container.trigger("mixFail", [t._state, t])), t._loading && ("function" == typeof t.callbacks.onMixLoad && t.callbacks.onMixLoad.call(t._domNode, t._state, t), t._$container.trigger("mixLoad", [t._state, t])), t._queue.length && (t._execAction("_queue", 0), t.multiMix(t._queue[0][0], t._queue[0][1], t._queue[0][2]), t._queue.splice(0, 1)), t._execAction("_cleanUp", 1), t._loading = !1 },
            _getPrefixedCSS: function(e, t, n) {
                var o = this,
                    r = {};
                for (i = 0; i < 2; i++) {
                    var a = 0 === i ? o._prefix : "";
                    r[a + e] = n ? a + t : t }
                return o._execFilter("_getPrefixedCSS", r, arguments) },
            _getDelay: function(e) {
                var t = this,
                    n = "function" == typeof t.animation.staggerSequence ? t.animation.staggerSequence.call(t._domNode, e, t._state) : e,
                    i = t.animation.stagger ? n * t.animation.staggerDuration : 0;
                return t._execFilter("_getDelay", i, arguments) },
            _parseMultiMixArgs: function(e) {
                for (var t = this, n = { command: null, animate: t.animation.enable, callback: null }, i = 0; i < e.length; i++) {
                    var o = e[i];
                    null !== o && ("object" == typeof o || "string" == typeof o ? n.command = o : "boolean" == typeof o ? n.animate = o : "function" == typeof o && (n.callback = o)) }
                return t._execFilter("_parseMultiMixArgs", n, arguments) },
            _parseInsertArgs: function(t) {
                for (var n = this, i = { index: 0, $object: e(), multiMix: { filter: n._state.activeFilter }, callback: null }, o = 0; o < t.length; o++) {
                    var r = t[o]; "number" == typeof r ? i.index = r : "object" == typeof r && r instanceof e ? i.$object = r : "object" == typeof r && n._helpers._isElement(r) ? i.$object = e(r) : "object" == typeof r && null !== r ? i.multiMix = r : "boolean" != typeof r || r ? "function" == typeof r && (i.callback = r) : i.multiMix = !1 }
                return n._execFilter("_parseInsertArgs", i, arguments) },
            _execAction: function(e, t, n) {
                var i = this,
                    o = t ? "post" : "pre";
                if (!i._actions.isEmptyObject && i._actions.hasOwnProperty(e))
                    for (var r in i._actions[e][o]) i._actions[e][o][r].call(i, n) },
            _execFilter: function(e, t, n) {
                var i = this;
                if (i._filters.isEmptyObject || !i._filters.hasOwnProperty(e)) return t;
                for (var o in i._filters[e]) return i._filters[e][o].call(i, n) },
            _helpers: { _camelCase: function(e) {
                    return e.replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase() }) }, _isElement: function(e) {
                    return window.HTMLElement ? e instanceof HTMLElement : null !== e && 1 === e.nodeType && "string" === e.nodeName } },
            isMixing: function() {
                var e = this;
                return e._execFilter("isMixing", e._mixing) },
            filter: function() {
                var e = this,
                    t = e._parseMultiMixArgs(arguments);
                e._clicking && (e._toggleString = ""), e.multiMix({ filter: t.command }, t.animate, t.callback) },
            sort: function() {
                var e = this,
                    t = e._parseMultiMixArgs(arguments);
                e.multiMix({ sort: t.command }, t.animate, t.callback) },
            changeLayout: function() {
                var e = this,
                    t = e._parseMultiMixArgs(arguments);
                e.multiMix({ changeLayout: t.command }, t.animate, t.callback) },
            multiMix: function() {
                var e = this,
                    n = e._parseMultiMixArgs(arguments);
                if (e._execAction("multiMix", 0, arguments), e._mixing) e.animation.queue && e._queue.length < e.animation.queueLimit ? (e._queue.push(arguments), e.controls.enable && !e._clicking && e._updateControls(n.command), e._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof e.callbacks.onMixBusy && e.callbacks.onMixBusy.call(e._domNode, e._state, e), e._$container.trigger("mixBusy", [e._state, e]), e._execAction("multiMixBusy", 1, arguments));
                else { e.controls.enable && !e._clicking && (e.controls.toggleFilterButtons && e._buildToggleArray(), e._updateControls(n.command, e.controls.toggleFilterButtons)), e._queue.length < 2 && (e._clicking = !1), delete e.callbacks._user, n.callback && (e.callbacks._user = n.callback);
                    var i = n.command.sort,
                        o = n.command.filter,
                        r = n.command.changeLayout;
                    e._refresh(), i && (e._newSort = e._parseSort(i), e._newSortString = i, e._sorting = !0, e._sort()), o !== t && (o = "all" === o ? e.selectors.target : o, e._activeFilter = o), e._filter(), r && (e._newDisplay = "string" == typeof r ? r : r.display || e.layout.display, e._newClass = r.containerClass || "", e._newDisplay === e.layout.display && e._newClass === e.layout.containerClass || (e._changingLayout = !0, e._changingClass = e._newClass !== e.layout.containerClass, e._changingDisplay = e._newDisplay !== e.layout.display)), e._$targets.css(e._brake), e._goMix(n.animate ^ e.animation.enable ? n.animate : e.animation.enable), e._execAction("multiMix", 1, arguments) } },
            insert: function() {
                var e = this,
                    t = e._parseInsertArgs(arguments),
                    n = "function" == typeof t.callback ? t.callback : null,
                    i = document.createDocumentFragment(),
                    o = function() {
                        return e._refresh(), e._$targets.length ? t.index < e._$targets.length || !e._$targets.length ? e._$targets[t.index] : e._$targets[e._$targets.length - 1].nextElementSibling : e._$parent[0].children[0] }();
                if (e._execAction("insert", 0, arguments), t.$object) {
                    for (var r = 0; r < t.$object.length; r++) {
                        var a = t.$object[r];
                        i.appendChild(a), i.appendChild(document.createTextNode(" ")) }
                    e._$parent[0].insertBefore(i, o) }
                e._execAction("insert", 1, arguments), "object" == typeof t.multiMix && e.multiMix(t.multiMix, n) },
            prepend: function() {
                var e = this,
                    t = e._parseInsertArgs(arguments);
                e.insert(0, t.$object, t.multiMix, t.callback) },
            append: function() {
                var e = this,
                    t = e._parseInsertArgs(arguments);
                e.insert(e._state.totalTargets, t.$object, t.multiMix, t.callback) },
            getOption: function(e) {
                var n = this,
                    i = function(e, n) {
                        for (var i = n.split("."), o = i.pop(), r = i.length, a = 1, s = i[0] || n;
                            (e = e[s]) && a < r;) s = i[a], a++;
                        if (e !== t) return e[o] !== t ? e[o] : e };
                return e ? n._execFilter("getOption", i(n, e), arguments) : n },
            setOptions: function(t) {
                var n = this;
                n._execAction("setOptions", 0, arguments), "object" == typeof t && e.extend(!0, n, t), n._execAction("setOptions", 1, arguments) },
            getState: function() {
                var e = this;
                return e._execFilter("getState", e._state, e) },
            forceRefresh: function() { this._refresh(!1, !0) },
            destroy: function(t) {
                var n = this;
                n._execAction("destroy", 0, arguments), n._$body.add(e(n.selectors.sort)).add(e(n.selectors.filter)).off(".mixItUp");
                for (var i = 0; i < n._$targets.length; i++) {
                    var o = n._$targets[i];
                    t && (o.style.display = ""), delete o.mixParent }
                n._execAction("destroy", 1, arguments), delete e.MixItUp.prototype._instances[n._id] }
        }, e.fn.mixItUp = function() {
            var n, i = arguments,
                o = [],
                r = function(t, n) {
                    var i = new e.MixItUp,
                        o = function() {
                            return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase() };
                    i._execAction("_instantiate", 0, arguments), t.id = t.id ? t.id : "MixItUp" + o(), i._instances[t.id] || (i._instances[t.id] = i, i._init(t, n)), i._execAction("_instantiate", 1, arguments) };
            return n = this.each(function() {
                if (i && "string" == typeof i[0]) {
                    var n = e.MixItUp.prototype._instances[this.id];
                    if ("isLoaded" === i[0]) o.push(!!n);
                    else {
                        var a = n[i[0]](i[1], i[2], i[3]);
                        a !== t && o.push(a) } } else r(this, i[0]) }), o.length ? o.length > 1 ? o : o[0] : n }, e.fn.removeStyle = function(n, i) {
            return i = i || "", this.each(function() {
                for (var o = this, r = n.split(" "), a = 0; a < r.length; a++)
                    for (var s = 0; s < 4; s++) {
                        switch (s) {
                            case 0:
                                var l = r[a];
                                break;
                            case 1:
                                var l = e.MixItUp.prototype._helpers._camelCase(l);
                                break;
                            case 2:
                                var l = i + r[a];
                                break;
                            case 3:
                                var l = e.MixItUp.prototype._helpers._camelCase(i + r[a]) }
                        if (o.style[l] !== t && "unknown" != typeof o.style[l] && o.style[l].length > 0 && (o.style[l] = ""), !i && 1 === s) break }
                o.attributes && o.attributes.style && o.attributes.style !== t && "" === o.attributes.style.value && o.attributes.removeNamedItem("style") }) }
    }(jQuery),
    function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t() }(this, function() {
        "use strict";

        function e() {
            return mi.apply(null, arguments) }

        function t(e) { mi = e }

        function n(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

        function i(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e) }

        function o(e) {
            var t;
            for (t in e) return !1;
            return !0 }

        function r(e) {
            return "number" == typeof value || "[object Number]" === Object.prototype.toString.call(e) }

        function a(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

        function s(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i }

        function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t) }

        function c(e, t) {
            for (var n in t) l(t, n) && (e[n] = t[n]);
            return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e }

        function u(e, t, n, i) {
            return yt(e, t, n, i, !0).utc() }

        function d() {
            return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null } }

        function f(e) {
            return null == e._pf && (e._pf = d()), e._pf }

        function h(e) {
            if (null == e._isValid) {
                var t = f(e),
                    n = yi.call(t.parsedDateParts, function(e) {
                        return null != e }),
                    i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && t.bigHour === undefined), null != Object.isFrozen && Object.isFrozen(e)) return i;
                e._isValid = i }
            return e._isValid }

        function p(e) {
            var t = u(NaN);
            return null != e ? c(f(t), e) : f(t).userInvalidated = !0, t }

        function m(e) {
            return void 0 === e }

        function g(e, t) {
            var n, i, o;
            if (m(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), m(t._i) || (e._i = t._i), m(t._f) || (e._f = t._f), m(t._l) || (e._l = t._l), m(t._strict) || (e._strict = t._strict), m(t._tzm) || (e._tzm = t._tzm), m(t._isUTC) || (e._isUTC = t._isUTC), m(t._offset) || (e._offset = t._offset), m(t._pf) || (e._pf = f(t)), m(t._locale) || (e._locale = t._locale), vi.length > 0)
                for (n in vi) i = vi[n], o = t[i], m(o) || (e[i] = o);
            return e }

        function y(t) { g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), !1 === bi && (bi = !0, e.updateOffset(this), bi = !1) }

        function v(e) {
            return e instanceof y || null != e && null != e._isAMomentObject }

        function b(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

        function w(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = b(t)), n }

        function _(e, t, n) {
            var i, o = Math.min(e.length, t.length),
                r = Math.abs(e.length - t.length),
                a = 0;
            for (i = 0; i < o; i++)(n && e[i] !== t[i] || !n && w(e[i]) !== w(t[i])) && a++;
            return a + r }

        function x(t) {!1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

        function C(t, n) {
            var i = !0;
            return c(function() {
                if (null != e.deprecationHandler && e.deprecationHandler(null, t), i) {
                    for (var o, r = [], a = 0; a < arguments.length; a++) {
                        if (o = "", "object" == typeof arguments[a]) { o += "\n[" + a + "] ";
                            for (var s in arguments[0]) o += s + ": " + arguments[0][s] + ", ";
                            o = o.slice(0, -2) } else o = arguments[a];
                        r.push(o) }
                    x(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), i = !1 }
                return n.apply(this, arguments) }, n) }

        function S(t, n) { null != e.deprecationHandler && e.deprecationHandler(t, n), wi[t] || (x(n), wi[t] = !0) }

        function T(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

        function E(e) {
            var t, n;
            for (n in e) t = e[n], T(t) ? this[n] = t : this["_" + n] = t;
            this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source) }

        function k(e, t) {
            var n, o = c({}, e);
            for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (o[n] = {}, c(o[n], e[n]), c(o[n], t[n])) : null != t[n] ? o[n] = t[n] : delete o[n]);
            for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (o[n] = c({}, o[n]));
            return o }

        function N(e) { null != e && this.set(e) }

        function A(e, t, n) {
            var i = this._calendar[e] || this._calendar.sameElse;
            return T(i) ? i.call(t, n) : i }

        function D(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1) }), this._longDateFormat[e]) }

        function R() {
            return this._invalidDate }

        function $(e) {
            return this._ordinal.replace("%d", e) }

        function M(e, t, n, i) {
            var o = this._relativeTime[n];
            return T(o) ? o(e, t, n, i) : o.replace(/%d/i, e) }

        function O(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return T(n) ? n(t) : n.replace(/%s/i, t) }

        function I(e, t) {
            var n = e.toLowerCase();
            Di[n] = Di[n + "s"] = Di[t] = e }

        function L(e) {
            return "string" == typeof e ? Di[e] || Di[e.toLowerCase()] : undefined }

        function P(e) {
            var t, n, i = {};
            for (n in e) l(e, n) && (t = L(n)) && (i[t] = e[n]);
            return i }

        function H(e, t) { Ri[e] = t }

        function B(e) {
            var t = [];
            for (var n in e) t.push({ unit: n, priority: Ri[n] });
            return t.sort(function(e, t) {
                return e.priority - t.priority }), t }

        function j(t, n) {
            return function(i) {
                return null != i ? (W(this, t, i), e.updateOffset(this, n), this) : F(this, t) } }

        function F(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

        function W(e, t, n) { e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n) }

        function q(e) {
            return e = L(e), T(this[e]) ? this[e]() : this }

        function U(e, t) {
            if ("object" == typeof e) { e = P(e);
                for (var n = B(e), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]) } else if (e = L(e), T(this[e])) return this[e](t);
            return this }

        function z(e, t, n) {
            var i = "" + Math.abs(e),
                o = t - i.length;
            return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + i }

        function Y(e, t, n, i) {
            var o = i; "string" == typeof i && (o = function() {
                return this[i]() }), e && (Ii[e] = o), t && (Ii[t[0]] = function() {
                return z(o.apply(this, arguments), t[1], t[2]) }), n && (Ii[n] = function() {
                return this.localeData().ordinal(o.apply(this, arguments), e) }) }

        function V(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") }

        function G(e) {
            var t, n, i = e.match($i);
            for (t = 0, n = i.length; t < n; t++) Ii[i[t]] ? i[t] = Ii[i[t]] : i[t] = V(i[t]);
            return function(t) {
                var o, r = "";
                for (o = 0; o < n; o++) r += i[o] instanceof Function ? i[o].call(t, e) : i[o];
                return r } }

        function X(e, t) {
            return e.isValid() ? (t = K(t, e.localeData()), Oi[t] = Oi[t] || G(t), Oi[t](e)) : e.localeData().invalidDate() }

        function K(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e }
            var i = 5;
            for (Mi.lastIndex = 0; i >= 0 && Mi.test(e);) e = e.replace(Mi, n), Mi.lastIndex = 0, i -= 1;
            return e }

        function Q(e, t, n) { Ji[e] = T(t) ? t : function(e) {
                return e && n ? n : t } }

        function Z(e, t) {
            return l(Ji, e) ? Ji[e](t._strict, t._locale) : new RegExp(J(e)) }

        function J(e) {
            return ee(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, o) {
                return t || n || i || o })) }

        function ee(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

        function te(e, t) {
            var n, i = t;
            for ("string" == typeof e && (e = [e]), r(t) && (i = function(e, n) { n[t] = w(e) }), n = 0; n < e.length; n++) eo[e[n]] = i }

        function ne(e, t) { te(e, function(e, n, i, o) { i._w = i._w || {}, t(e, i._w, i, o) }) }

        function ie(e, t, n) { null != t && l(eo, e) && eo[e](t, n._a, n, e) }

        function oe(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate() }

        function re(e, t) {
            return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || fo).test(t) ? "format" : "standalone"][e.month()] : this._months }

        function ae(e, t) {
            return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[fo.test(t) ? "format" : "standalone"][e.month()] : this._monthsShort }

        function se(e, t, n) {
            var i, o, r, a = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = u([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? (o = uo.call(this._shortMonthsParse, a), -1 !== o ? o : null) : (o = uo.call(this._longMonthsParse, a), -1 !== o ? o : null) : "MMM" === t ? -1 !== (o = uo.call(this._shortMonthsParse, a)) ? o : (o = uo.call(this._longMonthsParse, a), -1 !== o ? o : null) : -1 !== (o = uo.call(this._longMonthsParse, a)) ? o : (o = uo.call(this._shortMonthsParse, a), -1 !== o ? o : null) }

        function le(e, t, n) {
            var i, o, r;
            if (this._monthsParseExact) return se.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (o = u([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i } }

        function ce(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = w(t);
                else if (t = e.localeData().monthsParse(t), !r(t)) return e;
            return n = Math.min(e.date(), oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e }

        function ue(t) {
            return null != t ? (ce(this, t), e.updateOffset(this, !0), this) : F(this, "Month") }

        function de() {
            return oe(this.year(), this.month()) }

        function fe(e) {
            return this._monthsParseExact ? (l(this, "_monthsRegex") || pe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = mo), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }

        function he(e) {
            return this._monthsParseExact ? (l(this, "_monthsRegex") || pe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = go), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }

        function pe() {
            function e(e, t) {
                return t.length - e.length }
            var t, n, i = [],
                o = [],
                r = [];
            for (t = 0; t < 12; t++) n = u([2e3, t]), i.push(this.monthsShort(n, "")), o.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
            for (i.sort(e), o.sort(e), r.sort(e), t = 0; t < 12; t++) i[t] = ee(i[t]), o[t] = ee(o[t]);
            for (t = 0; t < 24; t++) r[t] = ee(r[t]);
            this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i") }

        function me(e) {
            return ge(e) ? 366 : 365 }

        function ge(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }

        function ye() {
            return ge(this.year()) }

        function ve(e, t, n, i, o, r, a) {
            var s = new Date(e, t, n, i, o, r, a);
            return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s }

        function be(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t }

        function we(e, t, n) {
            var i = 7 + t - n;
            return -(7 + be(e, 0, i).getUTCDay() - t) % 7 + i - 1 }

        function _e(e, t, n, i, o) {
            var r, a, s = (7 + n - i) % 7,
                l = we(e, i, o),
                c = 1 + 7 * (t - 1) + s + l;
            return c <= 0 ? (r = e - 1, a = me(r) + c) : c > me(e) ? (r = e + 1, a = c - me(e)) : (r = e, a = c), { year: r, dayOfYear: a } }

        function xe(e, t, n) {
            var i, o, r = we(e.year(), t, n),
                a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
            return a < 1 ? (o = e.year() - 1, i = a + Ce(o, t, n)) : a > Ce(e.year(), t, n) ? (i = a - Ce(e.year(), t, n), o = e.year() + 1) : (o = e.year(), i = a), { week: i, year: o } }

        function Ce(e, t, n) {
            var i = we(e, t, n),
                o = we(e + 1, t, n);
            return (me(e) - i + o) / 7 }

        function Se(e) {
            return xe(e, this._week.dow, this._week.doy).week }

        function Te() {
            return this._week.dow }

        function Ee() {
            return this._week.doy }

        function ke(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d") }

        function Ne(e) {
            var t = xe(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d") }

        function Ae(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10) }

        function De(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }

        function Re(e, t) {
            return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : this._weekdays }

        function $e(e) {
            return e ? this._weekdaysShort[e.day()] : this._weekdaysShort }

        function Me(e) {
            return e ? this._weekdaysMin[e.day()] : this._weekdaysMin }

        function Oe(e, t, n) {
            var i, o, r, a = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = u([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? (o = uo.call(this._weekdaysParse, a), -1 !== o ? o : null) : "ddd" === t ? (o = uo.call(this._shortWeekdaysParse, a), -1 !== o ? o : null) : (o = uo.call(this._minWeekdaysParse, a), -1 !== o ? o : null) : "dddd" === t ? -1 !== (o = uo.call(this._weekdaysParse, a)) ? o : -1 !== (o = uo.call(this._shortWeekdaysParse, a)) ? o : (o = uo.call(this._minWeekdaysParse, a), -1 !== o ? o : null) : "ddd" === t ? -1 !== (o = uo.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = uo.call(this._weekdaysParse, a)) ? o : (o = uo.call(this._minWeekdaysParse, a), -1 !== o ? o : null) : -1 !== (o = uo.call(this._minWeekdaysParse, a)) ? o : -1 !== (o = uo.call(this._weekdaysParse, a)) ? o : (o = uo.call(this._shortWeekdaysParse, a), -1 !== o ? o : null) }

        function Ie(e, t, n) {
            var i, o, r;
            if (this._weekdaysParseExact) return Oe.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                if (o = u([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(o, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
                if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
                if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
                if (!n && this._weekdaysParse[i].test(e)) return i } }

        function Le(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Ae(e, this.localeData()), this.add(e - t, "d")) : t }

        function Pe(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d") }

        function He(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var t = De(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7) }
            return this.day() || 7 }

        function Be(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = xo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }

        function je(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Co), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }

        function Fe(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = So), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }

        function We() {
            function e(e, t) {
                return t.length - e.length }
            var t, n, i, o, r, a = [],
                s = [],
                l = [],
                c = [];
            for (t = 0; t < 7; t++) n = u([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), o = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(i), s.push(o), l.push(r), c.push(i), c.push(o), c.push(r);
            for (a.sort(e), s.sort(e), l.sort(e), c.sort(e), t = 0; t < 7; t++) s[t] = ee(s[t]), l[t] = ee(l[t]), c[t] = ee(c[t]);
            this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") }

        function qe() {
            return this.hours() % 12 || 12 }

        function Ue() {
            return this.hours() || 24 }

        function ze(e, t) { Y(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

        function Ye(e, t) {
            return t._meridiemParse }

        function Ve(e) {
            return "p" === (e + "").toLowerCase().charAt(0) }

        function Ge(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }

        function Xe(e) {
            return e ? e.toLowerCase().replace("_", "-") : e }

        function Ke(e) {
            for (var t, n, i, o, r = 0; r < e.length;) {
                for (o = Xe(e[r]).split("-"), t = o.length, n = Xe(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = Qe(o.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && _(o, n, !0) >= t - 1) break;
                    t-- }
                r++ }
            return null }

        function Qe(e) {
            var t = null;
            if (!Ao[e] && "undefined" != typeof module && module && module.exports) try { t = To._abbr, require("./locale/" + e), Ze(t) } catch (e) {}
            return Ao[e] }

        function Ze(e, t) {
            var n;
            return e && (n = m(t) ? tt(e) : Je(e, t)) && (To = n), To._abbr }

        function Je(e, t) {
            if (null !== t) {
                var n = No;
                if (t.abbr = e, null != Ao[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Ao[e]._config;
                else if (null != t.parentLocale) {
                    if (null == Ao[t.parentLocale]) return Do[t.parentLocale] || (Do[t.parentLocale] = []), Do[t.parentLocale].push({ name: e, config: t }), null;
                    n = Ao[t.parentLocale]._config }
                return Ao[e] = new N(k(n, t)), Do[e] && Do[e].forEach(function(e) { Je(e.name, e.config) }), Ze(e), Ao[e] }
            return delete Ao[e], null }

        function et(e, t) {
            if (null != t) {
                var n, i = No;
                null != Ao[e] && (i = Ao[e]._config), t = k(i, t), n = new N(t), n.parentLocale = Ao[e], Ao[e] = n, Ze(e) } else null != Ao[e] && (null != Ao[e].parentLocale ? Ao[e] = Ao[e].parentLocale : null != Ao[e] && delete Ao[e]);
            return Ao[e] }

        function tt(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return To;
            if (!n(e)) {
                if (t = Qe(e)) return t;
                e = [e] }
            return Ke(e) }

        function nt() {
            return Ci(Ao) }

        function it(e) {
            var t, n = e._a;
            return n && -2 === f(e).overflow && (t = n[no] < 0 || n[no] > 11 ? no : n[io] < 1 || n[io] > oe(n[to], n[no]) ? io : n[oo] < 0 || n[oo] > 24 || 24 === n[oo] && (0 !== n[ro] || 0 !== n[ao] || 0 !== n[so]) ? oo : n[ro] < 0 || n[ro] > 59 ? ro : n[ao] < 0 || n[ao] > 59 ? ao : n[so] < 0 || n[so] > 999 ? so : -1, f(e)._overflowDayOfYear && (t < to || t > io) && (t = io), f(e)._overflowWeeks && -1 === t && (t = lo), f(e)._overflowWeekday && -1 === t && (t = co), f(e).overflow = t), e }

        function ot(e) {
            var t, n, i, o, r, a, s = e._i,
                l = Ro.exec(s) || $o.exec(s);
            if (l) {
                for (f(e).iso = !0, t = 0, n = Oo.length; t < n; t++)
                    if (Oo[t][1].exec(l[1])) { o = Oo[t][0], i = !1 !== Oo[t][2];
                        break }
                if (null == o) return void(e._isValid = !1);
                if (l[3]) {
                    for (t = 0, n = Io.length; t < n; t++)
                        if (Io[t][1].exec(l[3])) { r = (l[2] || " ") + Io[t][0];
                            break }
                    if (null == r) return void(e._isValid = !1) }
                if (!i && null != r) return void(e._isValid = !1);
                if (l[4]) {
                    if (!Mo.exec(l[4])) return void(e._isValid = !1);
                    a = "Z" }
                e._f = o + (r || "") + (a || ""), ut(e) } else e._isValid = !1 }

        function rt(t) {
            var n = Lo.exec(t._i);
            if (null !== n) return void(t._d = new Date(+n[1]));
            ot(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)) }

        function at(e, t, n) {
            return null != e ? e : null != t ? t : n }

        function st(t) {
            var n = new Date(e.now());
            return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()] }

        function lt(e) {
            var t, n, i, o, r = [];
            if (!e._d) {
                for (i = st(e), e._w && null == e._a[io] && null == e._a[no] && ct(e), e._dayOfYear && (o = at(e._a[to], i[to]), e._dayOfYear > me(o) && (f(e)._overflowDayOfYear = !0), n = be(o, 0, e._dayOfYear), e._a[no] = n.getUTCMonth(), e._a[io] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = i[t];
                for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[oo] && 0 === e._a[ro] && 0 === e._a[ao] && 0 === e._a[so] && (e._nextDay = !0, e._a[oo] = 0), e._d = (e._useUTC ? be : ve).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[oo] = 24) } }

        function ct(e) {
            var t, n, i, o, r, a, s, l;
            if (t = e._w, null != t.GG || null != t.W || null != t.E) r = 1, a = 4, n = at(t.GG, e._a[to], xe(vt(), 1, 4).year), i = at(t.W, 1), ((o = at(t.E, 1)) < 1 || o > 7) && (l = !0);
            else { r = e._locale._week.dow, a = e._locale._week.doy;
                var c = xe(vt(), r, a);
                n = at(t.gg, e._a[to], c.year), i = at(t.w, c.week), null != t.d ? ((o = t.d) < 0 || o > 6) && (l = !0) : null != t.e ? (o = t.e + r, (t.e < 0 || t.e > 6) && (l = !0)) : o = r }
            i < 1 || i > Ce(n, r, a) ? f(e)._overflowWeeks = !0 : null != l ? f(e)._overflowWeekday = !0 : (s = _e(n, i, o, r, a), e._a[to] = s.year, e._dayOfYear = s.dayOfYear) }

        function ut(t) {
            if (t._f === e.ISO_8601) return void ot(t);
            t._a = [], f(t).empty = !0;
            var n, i, o, r, a, s = "" + t._i,
                l = s.length,
                c = 0;
            for (o = K(t._f, t._locale).match($i) || [], n = 0; n < o.length; n++) r = o[n], i = (s.match(Z(r, t)) || [])[0], i && (a = s.substr(0, s.indexOf(i)), a.length > 0 && f(t).unusedInput.push(a), s = s.slice(s.indexOf(i) + i.length), c += i.length), Ii[r] ? (i ? f(t).empty = !1 : f(t).unusedTokens.push(r), ie(r, i, t)) : t._strict && !i && f(t).unusedTokens.push(r);
            f(t).charsLeftOver = l - c, s.length > 0 && f(t).unusedInput.push(s), t._a[oo] <= 12 && !0 === f(t).bigHour && t._a[oo] > 0 && (f(t).bigHour = undefined), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[oo] = dt(t._locale, t._a[oo], t._meridiem), lt(t), it(t) }

        function dt(e, t, n) {
            var i;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && t < 12 && (t += 12), i || 12 !== t || (t = 0), t) : t }

        function ft(e) {
            var t, n, i, o, r;
            if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (o = 0; o < e._f.length; o++) r = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[o], ut(t), h(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == i || r < i) && (i = r, n = t));
            c(e, n || t) }

        function ht(e) {
            if (!e._d) {
                var t = P(e._i);
                e._a = s([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10) }), lt(e) } }

        function pt(e) {
            var t = new y(it(mt(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = undefined), t }

        function mt(e) {
            var t = e._i,
                i = e._f;
            return e._locale = e._locale || tt(e._l), null === t || i === undefined && "" === t ? p({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new y(it(t)) : (a(t) ? e._d = t : n(i) ? ft(e) : i ? ut(e) : gt(e), h(e) || (e._d = null), e)) }

        function gt(t) {
            var i = t._i;
            i === undefined ? t._d = new Date(e.now()) : a(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? rt(t) : n(i) ? (t._a = s(i.slice(0), function(e) {
                return parseInt(e, 10) }), lt(t)) : "object" == typeof i ? ht(t) : r(i) ? t._d = new Date(i) : e.createFromInputFallback(t) }

        function yt(e, t, r, a, s) {
            var l = {};
            return !0 !== r && !1 !== r || (a = r, r = undefined), (i(e) && o(e) || n(e) && 0 === e.length) && (e = undefined), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = r, l._i = e, l._f = t, l._strict = a, pt(l) }

        function vt(e, t, n, i) {
            return yt(e, t, n, i, !1) }

        function bt(e, t) {
            var i, o;
            if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return vt();
            for (i = t[0], o = 1; o < t.length; ++o) t[o].isValid() && !t[o][e](i) || (i = t[o]);
            return i }

        function wt() {
            return bt("isBefore", [].slice.call(arguments, 0)) }

        function _t() {
            return bt("isAfter", [].slice.call(arguments, 0)) }

        function xt(e) {
            var t = P(e),
                n = t.year || 0,
                i = t.quarter || 0,
                o = t.month || 0,
                r = t.week || 0,
                a = t.day || 0,
                s = t.hour || 0,
                l = t.minute || 0,
                c = t.second || 0,
                u = t.millisecond || 0;
            this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * s * 60 * 60, this._days = +a + 7 * r, this._months = +o + 3 * i + 12 * n, this._data = {}, this._locale = tt(), this._bubble()
        }

        function Ct(e) {
            return e instanceof xt }

        function St(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

        function Tt(e, t) { Y(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return e < 0 && (e = -e, n = "-"), n + z(~~(e / 60), 2) + t + z(~~e % 60, 2) }) }

        function Et(e, t) {
            var n = (t || "").match(e);
            if (null === n) return null;
            var i = n[n.length - 1] || [],
                o = (i + "").match(jo) || ["-", 0, 0],
                r = 60 * o[1] + w(o[2]);
            return 0 === r ? 0 : "+" === o[0] ? r : -r }

        function kt(t, n) {
            var i, o;
            return n._isUTC ? (i = n.clone(), o = (v(t) || a(t) ? t.valueOf() : vt(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + o), e.updateOffset(i, !1), i) : vt(t).local() }

        function Nt(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

        function At(t, n) {
            var i, o = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                if ("string" == typeof t) {
                    if (null === (t = Et(Ki, t))) return this } else Math.abs(t) < 16 && (t *= 60);
                return !this._isUTC && n && (i = Nt(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), o !== t && (!n || this._changeInProgress ? zt(this, jt(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this }
            return this._isUTC ? o : Nt(this) }

        function Dt(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }

        function Rt(e) {
            return this.utcOffset(0, e) }

        function $t(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Nt(this), "m")), this }

        function Mt() {
            if (null != this._tzm) this.utcOffset(this._tzm);
            else if ("string" == typeof this._i) {
                var e = Et(Xi, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0) }
            return this }

        function Ot(e) {
            return !!this.isValid() && (e = e ? vt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }

        function It() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

        function Lt() {
            if (!m(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (g(e, this), e = mt(e), e._a) {
                var t = e._isUTC ? u(e._a) : vt(e._a);
                this._isDSTShifted = this.isValid() && _(e._a, t.toArray()) > 0 } else this._isDSTShifted = !1;
            return this._isDSTShifted }

        function Pt() {
            return !!this.isValid() && !this._isUTC }

        function Ht() {
            return !!this.isValid() && this._isUTC }

        function Bt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset) }

        function jt(e, t) {
            var n, i, o, a = e,
                s = null;
            return Ct(e) ? a = { ms: e._milliseconds, d: e._days, M: e._months } : r(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (s = Fo.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = { y: 0, d: w(s[io]) * n, h: w(s[oo]) * n, m: w(s[ro]) * n, s: w(s[ao]) * n, ms: w(St(1e3 * s[so])) * n }) : (s = Wo.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = { y: Ft(s[2], n), M: Ft(s[3], n), w: Ft(s[4], n), d: Ft(s[5], n), h: Ft(s[6], n), m: Ft(s[7], n), s: Ft(s[8], n) }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = qt(vt(a.from), vt(a.to)), a = {}, a.ms = o.milliseconds, a.M = o.months), i = new xt(a), Ct(e) && l(e, "_locale") && (i._locale = e._locale), i }

        function Ft(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t }

        function Wt(e, t) {
            var n = { milliseconds: 0, months: 0 };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

        function qt(e, t) {
            var n;
            return e.isValid() && t.isValid() ? (t = kt(t, e), e.isBefore(t) ? n = Wt(e, t) : (n = Wt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 } }

        function Ut(e, t) {
            return function(n, i) {
                var o, r;
                return null === i || isNaN(+i) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), n = "string" == typeof n ? +n : n, o = jt(n, i), zt(this, o, e), this } }

        function zt(t, n, i, o) {
            var r = n._milliseconds,
                a = St(n._days),
                s = St(n._months);
            t.isValid() && (o = null == o || o, r && t._d.setTime(t._d.valueOf() + r * i), a && W(t, "Date", F(t, "Date") + a * i), s && ce(t, F(t, "Month") + s * i), o && e.updateOffset(t, a || s)) }

        function Yt(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }

        function Vt(t, n) {
            var i = t || vt(),
                o = kt(i, this).startOf("day"),
                r = e.calendarFormat(this, o) || "sameElse",
                a = n && (T(n[r]) ? n[r].call(this, i) : n[r]);
            return this.format(a || this.localeData().calendar(r, this, vt(i))) }

        function Gt() {
            return new y(this) }

        function Xt(e, t) {
            var n = v(e) ? e : vt(e);
            return !(!this.isValid() || !n.isValid()) && (t = L(m(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }

        function Kt(e, t) {
            var n = v(e) ? e : vt(e);
            return !(!this.isValid() || !n.isValid()) && (t = L(m(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }

        function Qt(e, t, n, i) {
            return i = i || "()", ("(" === i[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n)) }

        function Zt(e, t) {
            var n, i = v(e) ? e : vt(e);
            return !(!this.isValid() || !i.isValid()) && (t = L(t || "millisecond"), "millisecond" === t ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }

        function Jt(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t) }

        function en(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t) }

        function tn(e, t, n) {
            var i, o, r, a;
            return this.isValid() ? (i = kt(e, this), i.isValid() ? (o = 6e4 * (i.utcOffset() - this.utcOffset()), t = L(t), "year" === t || "month" === t || "quarter" === t ? (a = nn(this, i), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (r = this - i, a = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - o) / 864e5 : "week" === t ? (r - o) / 6048e5 : r), n ? a : b(a)) : NaN) : NaN }

        function nn(e, t) {
            var n, i, o = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                r = e.clone().add(o, "months");
            return t - r < 0 ? (n = e.clone().add(o - 1, "months"), i = (t - r) / (r - n)) : (n = e.clone().add(o + 1, "months"), i = (t - r) / (n - r)), -(o + i) || 0 }

        function on() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

        function rn() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? T(Date.prototype.toISOString) ? this.toDate().toISOString() : X(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }

        function an() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment",
                t = "";
            this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
            var n = "[" + e + '("]',
                i = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                o = t + '[")]';
            return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + o) }

        function sn(t) { t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var n = X(this, t);
            return this.localeData().postformat(n) }

        function ln(e, t) {
            return this.isValid() && (v(e) && e.isValid() || vt(e).isValid()) ? jt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }

        function cn(e) {
            return this.from(vt(), e) }

        function un(e, t) {
            return this.isValid() && (v(e) && e.isValid() || vt(e).isValid()) ? jt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }

        function dn(e) {
            return this.to(vt(), e) }

        function fn(e) {
            var t;
            return e === undefined ? this._locale._abbr : (t = tt(e), null != t && (this._locale = t), this) }

        function hn() {
            return this._locale }

        function pn(e) {
            switch (e = L(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0) }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this }

        function mn(e) {
            return (e = L(e)) === undefined || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")) }

        function gn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0) }

        function yn() {
            return Math.floor(this.valueOf() / 1e3) }

        function vn() {
            return new Date(this.valueOf()) }

        function bn() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }

        function wn() {
            var e = this;
            return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }

        function _n() {
            return this.isValid() ? this.toISOString() : null }

        function xn() {
            return h(this) }

        function Cn() {
            return c({}, f(this)) }

        function Sn() {
            return f(this).overflow }

        function Tn() {
            return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }

        function En(e, t) { Y(0, [e, e.length], 0, t) }

        function kn(e) {
            return Rn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }

        function Nn(e) {
            return Rn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }

        function An() {
            return Ce(this.year(), 1, 4) }

        function Dn() {
            var e = this.localeData()._week;
            return Ce(this.year(), e.dow, e.doy) }

        function Rn(e, t, n, i, o) {
            var r;
            return null == e ? xe(this, i, o).year : (r = Ce(e, i, o), t > r && (t = r), $n.call(this, e, t, n, i, o)) }

        function $n(e, t, n, i, o) {
            var r = _e(e, t, n, i, o),
                a = be(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this }

        function Mn(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }

        function On(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d") }

        function In(e, t) { t[so] = w(1e3 * ("0." + e)) }

        function Ln() {
            return this._isUTC ? "UTC" : "" }

        function Pn() {
            return this._isUTC ? "Coordinated Universal Time" : "" }

        function Hn(e) {
            return vt(1e3 * e) }

        function Bn() {
            return vt.apply(null, arguments).parseZone() }

        function jn(e) {
            return e }

        function Fn(e, t, n, i) {
            var o = tt(),
                r = u().set(i, t);
            return o[n](r, e) }

        function Wn(e, t, n) {
            if (r(e) && (t = e, e = undefined), e = e || "", null != t) return Fn(e, t, n, "month");
            var i, o = [];
            for (i = 0; i < 12; i++) o[i] = Fn(e, i, n, "month");
            return o }

        function qn(e, t, n, i) { "boolean" == typeof e ? (r(t) && (n = t, t = undefined), t = t || "") : (t = e, n = t, e = !1, r(t) && (n = t, t = undefined), t = t || "");
            var o = tt(),
                a = e ? o._week.dow : 0;
            if (null != n) return Fn(t, (n + a) % 7, i, "day");
            var s, l = [];
            for (s = 0; s < 7; s++) l[s] = Fn(t, (s + a) % 7, i, "day");
            return l }

        function Un(e, t) {
            return Wn(e, t, "months") }

        function zn(e, t) {
            return Wn(e, t, "monthsShort") }

        function Yn(e, t, n) {
            return qn(e, t, n, "weekdays") }

        function Vn(e, t, n) {
            return qn(e, t, n, "weekdaysShort") }

        function Gn(e, t, n) {
            return qn(e, t, n, "weekdaysMin") }

        function Xn() {
            var e = this._data;
            return this._milliseconds = Jo(this._milliseconds), this._days = Jo(this._days), this._months = Jo(this._months), e.milliseconds = Jo(e.milliseconds), e.seconds = Jo(e.seconds), e.minutes = Jo(e.minutes), e.hours = Jo(e.hours), e.months = Jo(e.months), e.years = Jo(e.years), this }

        function Kn(e, t, n, i) {
            var o = jt(t, n);
            return e._milliseconds += i * o._milliseconds, e._days += i * o._days, e._months += i * o._months, e._bubble() }

        function Qn(e, t) {
            return Kn(this, e, t, 1) }

        function Zn(e, t) {
            return Kn(this, e, t, -1) }

        function Jn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e) }

        function ei() {
            var e, t, n, i, o, r = this._milliseconds,
                a = this._days,
                s = this._months,
                l = this._data;
            return r >= 0 && a >= 0 && s >= 0 || r <= 0 && a <= 0 && s <= 0 || (r += 864e5 * Jn(ni(s) + a), a = 0, s = 0), l.milliseconds = r % 1e3, e = b(r / 1e3), l.seconds = e % 60, t = b(e / 60), l.minutes = t % 60, n = b(t / 60), l.hours = n % 24, a += b(n / 24), o = b(ti(a)), s += o, a -= Jn(ni(o)), i = b(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this }

        function ti(e) {
            return 4800 * e / 146097 }

        function ni(e) {
            return 146097 * e / 4800 }

        function ii(e) {
            var t, n, i = this._milliseconds;
            if ("month" === (e = L(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + ti(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(ni(this._months)), e) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + e) } }

        function oi() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) }

        function ri(e) {
            return function() {
                return this.as(e) } }

        function ai(e) {
            return e = L(e), this[e + "s"]() }

        function si(e) {
            return function() {
                return this._data[e] } }

        function li() {
            return b(this.days() / 7) }

        function ci(e, t, n, i, o) {
            return o.relativeTime(t || 1, !!n, e, i) }

        function ui(e, t, n) {
            var i = jt(e).abs(),
                o = mr(i.as("s")),
                r = mr(i.as("m")),
                a = mr(i.as("h")),
                s = mr(i.as("d")),
                l = mr(i.as("M")),
                c = mr(i.as("y")),
                u = o < gr.s && ["s", o] || r <= 1 && ["m"] || r < gr.m && ["mm", r] || a <= 1 && ["h"] || a < gr.h && ["hh", a] || s <= 1 && ["d"] || s < gr.d && ["dd", s] || l <= 1 && ["M"] || l < gr.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
            return u[2] = t, u[3] = +e > 0, u[4] = n, ci.apply(null, u) }

        function di(e) {
            return e === undefined ? mr : "function" == typeof e && (mr = e, !0) }

        function fi(e, t) {
            return gr[e] !== undefined && (t === undefined ? gr[e] : (gr[e] = t, !0)) }

        function hi(e) {
            var t = this.localeData(),
                n = ui(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n) }

        function pi() {
            var e, t, n, i = yr(this._milliseconds) / 1e3,
                o = yr(this._days),
                r = yr(this._months);
            e = b(i / 60), t = b(e / 60), i %= 60, e %= 60, n = b(r / 12), r %= 12;
            var a = n,
                s = r,
                l = o,
                c = t,
                u = e,
                d = i,
                f = this.asSeconds();
            return f ? (f < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (c || u || d ? "T" : "") + (c ? c + "H" : "") + (u ? u + "M" : "") + (d ? d + "S" : "") : "P0D" }
        var mi, gi;
        gi = Array.prototype.some ? Array.prototype.some : function(e) {
            for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
                if (i in t && e.call(this, t[i], i, t)) return !0;
            return !1 };
        var yi = gi,
            vi = e.momentProperties = [],
            bi = !1,
            wi = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var _i;
        _i = Object.keys ? Object.keys : function(e) {
            var t, n = [];
            for (t in e) l(e, t) && n.push(t);
            return n };
        var xi, Ci = _i,
            Si = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            Ti = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
            Ei = "Invalid date",
            ki = "%d",
            Ni = /\d{1,2}/,
            Ai = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            Di = {},
            Ri = {},
            $i = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Mi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Oi = {},
            Ii = {},
            Li = /\d/,
            Pi = /\d\d/,
            Hi = /\d{3}/,
            Bi = /\d{4}/,
            ji = /[+-]?\d{6}/,
            Fi = /\d\d?/,
            Wi = /\d\d\d\d?/,
            qi = /\d\d\d\d\d\d?/,
            Ui = /\d{1,3}/,
            zi = /\d{1,4}/,
            Yi = /[+-]?\d{1,6}/,
            Vi = /\d+/,
            Gi = /[+-]?\d+/,
            Xi = /Z|[+-]\d\d:?\d\d/gi,
            Ki = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Qi = /[+-]?\d+(\.\d{1,3})?/,
            Zi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Ji = {},
            eo = {},
            to = 0,
            no = 1,
            io = 2,
            oo = 3,
            ro = 4,
            ao = 5,
            so = 6,
            lo = 7,
            co = 8;
        xi = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1 };
        var uo = xi;
        Y("M", ["MM", 2], "Mo", function() {
            return this.month() + 1 }), Y("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e) }), Y("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e) }), I("month", "M"), H("month", 8), Q("M", Fi), Q("MM", Fi, Pi), Q("MMM", function(e, t) {
            return t.monthsShortRegex(e) }), Q("MMMM", function(e, t) {
            return t.monthsRegex(e) }), te(["M", "MM"], function(e, t) { t[no] = w(e) - 1 }), te(["MMM", "MMMM"], function(e, t, n, i) {
            var o = n._locale.monthsParse(e, i, n._strict);
            null != o ? t[no] = o : f(n).invalidMonth = e });
        var fo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            ho = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            po = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            mo = Zi,
            go = Zi;
        Y("Y", 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e }), Y(0, ["YY", 2], 0, function() {
            return this.year() % 100 }), Y(0, ["YYYY", 4], 0, "year"), Y(0, ["YYYYY", 5], 0, "year"), Y(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), H("year", 1), Q("Y", Gi), Q("YY", Fi, Pi), Q("YYYY", zi, Bi), Q("YYYYY", Yi, ji), Q("YYYYYY", Yi, ji), te(["YYYYY", "YYYYYY"], to), te("YYYY", function(t, n) { n[to] = 2 === t.length ? e.parseTwoDigitYear(t) : w(t) }), te("YY", function(t, n) { n[to] = e.parseTwoDigitYear(t) }), te("Y", function(e, t) { t[to] = parseInt(e, 10) }), e.parseTwoDigitYear = function(e) {
            return w(e) + (w(e) > 68 ? 1900 : 2e3) };
        var yo = j("FullYear", !0);
        Y("w", ["ww", 2], "wo", "week"), Y("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), H("week", 5), H("isoWeek", 5), Q("w", Fi), Q("ww", Fi, Pi), Q("W", Fi), Q("WW", Fi, Pi), ne(["w", "ww", "W", "WW"], function(e, t, n, i) { t[i.substr(0, 1)] = w(e) });
        var vo = { dow: 0, doy: 6 };
        Y("d", 0, "do", "day"), Y("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e) }), Y("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e) }), Y("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e) }), Y("e", 0, 0, "weekday"), Y("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), Q("d", Fi), Q("e", Fi), Q("E", Fi), Q("dd", function(e, t) {
            return t.weekdaysMinRegex(e) }), Q("ddd", function(e, t) {
            return t.weekdaysShortRegex(e) }), Q("dddd", function(e, t) {
            return t.weekdaysRegex(e) }), ne(["dd", "ddd", "dddd"], function(e, t, n, i) {
            var o = n._locale.weekdaysParse(e, i, n._strict);
            null != o ? t.d = o : f(n).invalidWeekday = e }), ne(["d", "e", "E"], function(e, t, n, i) { t[i] = w(e) });
        var bo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            wo = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            _o = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            xo = Zi,
            Co = Zi,
            So = Zi;
        Y("H", ["HH", 2], 0, "hour"), Y("h", ["hh", 2], 0, qe), Y("k", ["kk", 2], 0, Ue), Y("hmm", 0, 0, function() {
            return "" + qe.apply(this) + z(this.minutes(), 2) }), Y("hmmss", 0, 0, function() {
            return "" + qe.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2) }), Y("Hmm", 0, 0, function() {
            return "" + this.hours() + z(this.minutes(), 2) }), Y("Hmmss", 0, 0, function() {
            return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2) }), ze("a", !0), ze("A", !1), I("hour", "h"), H("hour", 13), Q("a", Ye), Q("A", Ye), Q("H", Fi), Q("h", Fi), Q("HH", Fi, Pi), Q("hh", Fi, Pi), Q("hmm", Wi), Q("hmmss", qi), Q("Hmm", Wi), Q("Hmmss", qi), te(["H", "HH"], oo), te(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), te(["h", "hh"], function(e, t, n) { t[oo] = w(e), f(n).bigHour = !0 }), te("hmm", function(e, t, n) {
            var i = e.length - 2;
            t[oo] = w(e.substr(0, i)), t[ro] = w(e.substr(i)), f(n).bigHour = !0 }), te("hmmss", function(e, t, n) {
            var i = e.length - 4,
                o = e.length - 2;
            t[oo] = w(e.substr(0, i)), t[ro] = w(e.substr(i, 2)), t[ao] = w(e.substr(o)), f(n).bigHour = !0 }), te("Hmm", function(e, t) {
            var n = e.length - 2;
            t[oo] = w(e.substr(0, n)), t[ro] = w(e.substr(n)) }), te("Hmmss", function(e, t) {
            var n = e.length - 4,
                i = e.length - 2;
            t[oo] = w(e.substr(0, n)), t[ro] = w(e.substr(n, 2)), t[ao] = w(e.substr(i)) });
        var To, Eo = /[ap]\.?m?\.?/i,
            ko = j("Hours", !0),
            No = { calendar: Si, longDateFormat: Ti, invalidDate: Ei, ordinal: ki, ordinalParse: Ni, relativeTime: Ai, months: ho, monthsShort: po, week: vo, weekdays: bo, weekdaysMin: _o, weekdaysShort: wo, meridiemParse: Eo },
            Ao = {},
            Do = {},
            Ro = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            $o = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Mo = /Z|[+-]\d\d(?::?\d\d)?/,
            Oo = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Io = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            Lo = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = C("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), e.ISO_8601 = function() {};
        var Po = C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : p() }),
            Ho = C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : p() }),
            Bo = function() {
                return Date.now ? Date.now() : +new Date };
        Tt("Z", ":"), Tt("ZZ", ""), Q("Z", Ki), Q("ZZ", Ki), te(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = Et(Ki, e) });
        var jo = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Fo = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Wo = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        jt.fn = xt.prototype;
        var qo = Ut(1, "add"),
            Uo = Ut(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var zo = C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return e === undefined ? this.localeData() : this.locale(e) });
        Y(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100 }), Y(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100 }), En("gggg", "weekYear"), En("ggggg", "weekYear"), En("GGGG", "isoWeekYear"), En("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), Q("G", Gi), Q("g", Gi), Q("GG", Fi, Pi), Q("gg", Fi, Pi), Q("GGGG", zi, Bi), Q("gggg", zi, Bi), Q("GGGGG", Yi, ji), Q("ggggg", Yi, ji), ne(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) { t[i.substr(0, 2)] = w(e) }), ne(["gg", "GG"], function(t, n, i, o) { n[o] = e.parseTwoDigitYear(t) }), Y("Q", 0, "Qo", "quarter"), I("quarter", "Q"), H("quarter", 7), Q("Q", Li), te("Q", function(e, t) { t[no] = 3 * (w(e) - 1) }), Y("D", ["DD", 2], "Do", "date"), I("date", "D"), H("date", 9), Q("D", Fi), Q("DD", Fi, Pi), Q("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient }), te(["D", "DD"], io), te("Do", function(e, t) { t[io] = w(e.match(Fi)[0], 10) });
        var Yo = j("Date", !0);
        Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), H("dayOfYear", 4), Q("DDD", Ui), Q("DDDD", Hi), te(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = w(e) }), Y("m", ["mm", 2], 0, "minute"), I("minute", "m"), H("minute", 14), Q("m", Fi), Q("mm", Fi, Pi), te(["m", "mm"], ro);
        var Vo = j("Minutes", !1);
        Y("s", ["ss", 2], 0, "second"), I("second", "s"), H("second", 15), Q("s", Fi), Q("ss", Fi, Pi), te(["s", "ss"], ao);
        var Go = j("Seconds", !1);
        Y("S", 0, 0, function() {
            return ~~(this.millisecond() / 100) }), Y(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10) }), Y(0, ["SSS", 3], 0, "millisecond"), Y(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond() }), Y(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond() }), Y(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond() }), Y(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond() }), Y(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond() }), Y(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond() }), I("millisecond", "ms"), H("millisecond", 16), Q("S", Ui, Li), Q("SS", Ui, Pi), Q("SSS", Ui, Hi);
        var Xo;
        for (Xo = "SSSS"; Xo.length <= 9; Xo += "S") Q(Xo, Vi);
        for (Xo = "S"; Xo.length <= 9; Xo += "S") te(Xo, In);
        var Ko = j("Milliseconds", !1);
        Y("z", 0, 0, "zoneAbbr"), Y("zz", 0, 0, "zoneName");
        var Qo = y.prototype;
        Qo.add = qo, Qo.calendar = Vt, Qo.clone = Gt, Qo.diff = tn, Qo.endOf = mn, Qo.format = sn, Qo.from = ln, Qo.fromNow = cn, Qo.to = un, Qo.toNow = dn, Qo.get = q, Qo.invalidAt = Sn, Qo.isAfter = Xt, Qo.isBefore = Kt, Qo.isBetween = Qt, Qo.isSame = Zt, Qo.isSameOrAfter = Jt, Qo.isSameOrBefore = en, Qo.isValid = xn, Qo.lang = zo, Qo.locale = fn, Qo.localeData = hn, Qo.max = Ho, Qo.min = Po, Qo.parsingFlags = Cn, Qo.set = U, Qo.startOf = pn, Qo.subtract = Uo, Qo.toArray = bn, Qo.toObject = wn, Qo.toDate = vn, Qo.toISOString = rn, Qo.inspect = an, Qo.toJSON = _n, Qo.toString = on, Qo.unix = yn, Qo.valueOf = gn, Qo.creationData = Tn, Qo.year = yo, Qo.isLeapYear = ye, Qo.weekYear = kn, Qo.isoWeekYear = Nn, Qo.quarter = Qo.quarters = Mn, Qo.month = ue, Qo.daysInMonth = de, Qo.week = Qo.weeks = ke, Qo.isoWeek = Qo.isoWeeks = Ne, Qo.weeksInYear = Dn, Qo.isoWeeksInYear = An, Qo.date = Yo, Qo.day = Qo.days = Le, Qo.weekday = Pe, Qo.isoWeekday = He, Qo.dayOfYear = On, Qo.hour = Qo.hours = ko, Qo.minute = Qo.minutes = Vo, Qo.second = Qo.seconds = Go, Qo.millisecond = Qo.milliseconds = Ko, Qo.utcOffset = At, Qo.utc = Rt, Qo.local = $t, Qo.parseZone = Mt, Qo.hasAlignedHourOffset = Ot, Qo.isDST = It, Qo.isLocal = Pt, Qo.isUtcOffset = Ht, Qo.isUtc = Bt, Qo.isUTC = Bt, Qo.zoneAbbr = Ln, Qo.zoneName = Pn, Qo.dates = C("dates accessor is deprecated. Use date instead.", Yo), Qo.months = C("months accessor is deprecated. Use month instead", ue), Qo.years = C("years accessor is deprecated. Use year instead", yo), Qo.zone = C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Dt), Qo.isDSTShifted = C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Lt);
        var Zo = N.prototype;
        Zo.calendar = A, Zo.longDateFormat = D, Zo.invalidDate = R, Zo.ordinal = $, Zo.preparse = jn, Zo.postformat = jn, Zo.relativeTime = M, Zo.pastFuture = O, Zo.set = E, Zo.months = re, Zo.monthsShort = ae, Zo.monthsParse = le, Zo.monthsRegex = he, Zo.monthsShortRegex = fe, Zo.week = Se, Zo.firstDayOfYear = Ee, Zo.firstDayOfWeek = Te, Zo.weekdays = Re, Zo.weekdaysMin = Me, Zo.weekdaysShort = $e, Zo.weekdaysParse = Ie, Zo.weekdaysRegex = Be, Zo.weekdaysShortRegex = je, Zo.weekdaysMinRegex = Fe, Zo.isPM = Ve, Zo.meridiem = Ge, Ze("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) {
                var t = e % 10;
                return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), e.lang = C("moment.lang is deprecated. Use moment.locale instead.", Ze), e.langData = C("moment.langData is deprecated. Use moment.localeData instead.", tt);
        var Jo = Math.abs,
            er = ri("ms"),
            tr = ri("s"),
            nr = ri("m"),
            ir = ri("h"),
            or = ri("d"),
            rr = ri("w"),
            ar = ri("M"),
            sr = ri("y"),
            lr = si("milliseconds"),
            cr = si("seconds"),
            ur = si("minutes"),
            dr = si("hours"),
            fr = si("days"),
            hr = si("months"),
            pr = si("years"),
            mr = Math.round,
            gr = { s: 45, m: 45, h: 22, d: 26, M: 11 },
            yr = Math.abs,
            vr = xt.prototype;
        return vr.abs = Xn, vr.add = Qn, vr.subtract = Zn, vr.as = ii, vr.asMilliseconds = er, vr.asSeconds = tr, vr.asMinutes = nr, vr.asHours = ir, vr.asDays = or, vr.asWeeks = rr, vr.asMonths = ar, vr.asYears = sr, vr.valueOf = oi, vr._bubble = ei, vr.get = ai, vr.milliseconds = lr, vr.seconds = cr, vr.minutes = ur, vr.hours = dr, vr.days = fr, vr.weeks = li, vr.months = hr, vr.years = pr, vr.humanize = hi, vr.toISOString = pi, vr.toString = pi, vr.toJSON = pi, vr.locale = fn, vr.localeData = hn, vr.toIsoString = C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", pi), vr.lang = zo, Y("X", 0, 0, "unix"), Y("x", 0, 0, "valueOf"), Q("x", Gi), Q("X", Qi), te("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), te("x", function(e, t, n) { n._d = new Date(w(e)) }), e.version = "2.16.0", t(vt), e.fn = Qo, e.min = wt, e.max = _t, e.now = Bo, e.utc = u, e.unix = Hn, e.months = Un, e.isDate = a, e.locale = Ze, e.invalid = p, e.duration = jt, e.isMoment = v, e.weekdays = Yn, e.parseZone = Bn, e.localeData = tt, e.isDuration = Ct, e.monthsShort = zn, e.weekdaysMin = Gn, e.defineLocale = Je, e.updateLocale = et, e.locales = nt, e.weekdaysShort = Vn, e.normalizeUnits = L, e.relativeTimeRounding = di, e.relativeTimeThreshold = fi, e.calendarFormat = Yt, e.prototype = Qo, e
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define(["moment"], t) : "object" == typeof module && module.exports ? module.exports = t(require("moment")) : t(e.moment) }(this, function(e) {
        "use strict";

        function t(e) {
            return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48 }

        function n(e) {
            var n, i = 0,
                o = e.split("."),
                r = o[0],
                a = o[1] || "",
                s = 1,
                l = 0,
                c = 1;
            for (45 === e.charCodeAt(0) && (i = 1, c = -1), i; i < r.length; i++) n = t(r.charCodeAt(i)), l = 60 * l + n;
            for (i = 0; i < a.length; i++) s /= 60, n = t(a.charCodeAt(i)), l += n * s;
            return l * c }

        function i(e) {
            for (var t = 0; t < e.length; t++) e[t] = n(e[t]) }

        function o(e, t) {
            for (var n = 0; n < t; n++) e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
            e[t - 1] = Infinity }

        function r(e, t) {
            var n, i = [];
            for (n = 0; n < t.length; n++) i[n] = e[t[n]];
            return i }

        function a(e) {
            var t = e.split("|"),
                n = t[2].split(" "),
                a = t[3].split(""),
                s = t[4].split(" ");
            return i(n), i(a), i(s), o(s, a.length), { name: t[0], abbrs: r(t[1].split(" "), a), offsets: r(n, a), untils: s, population: 0 | t[5] } }

        function s(e) { e && this._set(a(e)) }

        function l(e) {
            var t = e.toTimeString(),
                n = t.match(/\([a-z ]+\)/i);
            n && n[0] ? (n = n[0].match(/[A-Z]/g), n = n ? n.join("") : undefined) : (n = t.match(/[A-Z]{3,5}/g), n = n ? n[0] : undefined), "GMT" === n && (n = undefined), this.at = +e, this.abbr = n, this.offset = e.getTimezoneOffset() }

        function c(e) { this.zone = e, this.offsetScore = 0, this.abbrScore = 0 }

        function u(e, t) {
            for (var n, i; i = 6e4 * ((t.at - e.at) / 12e4 | 0);) n = new l(new Date(e.at + i)), n.offset === e.offset ? e = n : t = n;
            return e }

        function d() {
            var e, t, n, i = (new Date).getFullYear() - 2,
                o = new l(new Date(i, 0, 1)),
                r = [o];
            for (n = 1; n < 48; n++) t = new l(new Date(i, n, 1)), t.offset !== o.offset && (e = u(o, t), r.push(e), r.push(new l(new Date(e.at + 6e4)))), o = t;
            for (n = 0; n < 4; n++) r.push(new l(new Date(i + n, 0, 1))), r.push(new l(new Date(i + n, 6, 1)));
            return r }

        function f(e, t) {
            return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : t.zone.population - e.zone.population }

        function h(e, t) {
            var n, o;
            for (i(t), n = 0; n < t.length; n++) o = t[n], O[o] = O[o] || {}, O[o][e] = !0 }

        function p(e) {
            var t, n, i, o = e.length,
                r = {},
                a = [];
            for (t = 0; t < o; t++) { i = O[e[t].offset] || {};
                for (n in i) i.hasOwnProperty(n) && (r[n] = !0) }
            for (t in r) r.hasOwnProperty(t) && a.push(M[t]);
            return a }

        function m() {
            try {
                var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (e) {
                    var t = M[y(e)];
                    if (t) return t;
                    T("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.") } } catch (e) {}
            var n, i, o, r = d(),
                a = r.length,
                s = p(r),
                l = [];
            for (i = 0; i < s.length; i++) {
                for (n = new c(b(s[i]), a), o = 0; o < a; o++) n.scoreOffsetAt(r[o]);
                l.push(n) }
            return l.sort(f), l.length > 0 ? l[0].zone.name : undefined }

        function g(e) {
            return A && !e || (A = m()), A }

        function y(e) {
            return (e || "").toLowerCase().replace(/\//g, "_") }

        function v(e) {
            var t, n, i, o;
            for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) i = e[t].split("|"), n = i[0], o = y(n), R[o] = e[t], M[o] = n, i[5] && h(o, i[2].split(" ")) }

        function b(e, t) { e = y(e);
            var n, i = R[e];
            return i instanceof s ? i : "string" == typeof i ? (i = new s(i), R[e] = i, i) : $[e] && t !== b && (n = b($[e], b)) ? (i = R[e] = new s, i._set(n), i.name = M[e], i) : null }

        function w() {
            var e, t = [];
            for (e in M) M.hasOwnProperty(e) && (R[e] || R[$[e]]) && M[e] && t.push(M[e]);
            return t.sort() }

        function _(e) {
            var t, n, i, o;
            for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) n = e[t].split("|"), i = y(n[0]), o = y(n[1]), $[i] = o, M[i] = n[0], $[o] = i, M[o] = n[1] }

        function x(e) { v(e.zones), _(e.links), E.dataVersion = e.version }

        function C(e) {
            return C.didShowError || (C.didShowError = !0, T("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")), !!b(e) }

        function S(e) {
            return !(!e._a || e._tzm !== undefined) }

        function T(e) { "undefined" != typeof console && "function" == typeof console.error && console.error(e) }

        function E(t) {
            var n = Array.prototype.slice.call(arguments, 0, -1),
                i = arguments[arguments.length - 1],
                o = b(i),
                r = e.utc.apply(null, n);
            return o && !e.isMoment(t) && S(r) && r.add(o.parse(r), "minutes"), r.tz(i), r }

        function k(e) {
            return function() {
                return this._z ? this._z.abbr(this) : e.call(this) } }

        function N(e) {
            return function() {
                return this._z = null, e.apply(this, arguments) } }
        if (e.tz !== undefined) return T("Moment Timezone " + e.tz.version + " was already loaded " + (e.tz.dataVersion ? "with data from " : "without any data") + e.tz.dataVersion), e;
        var A, D = "0.5.9",
            R = {},
            $ = {},
            M = {},
            O = {},
            I = e.version.split("."),
            L = +I[0],
            P = +I[1];
        (L < 2 || 2 === L && P < 6) && T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), s.prototype = { _set: function(e) { this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population }, _index: function(e) {
                var t, n = +e,
                    i = this.untils;
                for (t = 0; t < i.length; t++)
                    if (n < i[t]) return t }, parse: function(e) {
                var t, n, i, o, r = +e,
                    a = this.offsets,
                    s = this.untils,
                    l = s.length - 1;
                for (o = 0; o < l; o++)
                    if (t = a[o], n = a[o + 1], i = a[o ? o - 1 : o], t < n && E.moveAmbiguousForward ? t = n : t > i && E.moveInvalidForward && (t = i), r < s[o] - 6e4 * t) return a[o];
                return a[l] }, abbr: function(e) {
                return this.abbrs[this._index(e)] }, offset: function(e) {
                return this.offsets[this._index(e)] } }, c.prototype.scoreOffsetAt = function(e) { this.offsetScore += Math.abs(this.zone.offset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++ }, E.version = D, E.dataVersion = "", E._zones = R, E._links = $, E._names = M, E.add = v, E.link = _, E.load = x, E.zone = b, E.zoneExists = C, E.guess = g, E.names = w, E.Zone = s, E.unpack = a, E.unpackBase60 = n, E.needsOffset = S, E.moveInvalidForward = !0, E.moveAmbiguousForward = !1;
        var H = e.fn;
        e.tz = E, e.defaultZone = null, e.updateOffset = function(t, n) {
            var i, o = e.defaultZone;
            t._z === undefined && (o && S(t) && !t._isUTC && (t._d = e.utc(t._a)._d, t.utc().add(o.parse(t), "minutes")), t._z = o), t._z && (i = t._z.offset(t), Math.abs(i) < 16 && (i /= 60), t.utcOffset !== undefined ? t.utcOffset(-i, n) : t.zone(i, n)) }, H.tz = function(t) {
            return t ? (this._z = b(t), this._z ? e.updateOffset(this) : T("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name : void 0 }, H.zoneName = k(H.zoneName), H.zoneAbbr = k(H.zoneAbbr), H.utc = N(H.utc), e.tz.setDefault = function(t) {
            return (L < 2 || 2 === L && P < 9) && T("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."), e.defaultZone = t ? b(t) : null, e };
        var B = e.momentProperties;
        return "[object Array]" === Object.prototype.toString.call(B) ? (B.push("_z"), B.push("_a")) : B && (B._z = null), e
    });
var _downloadsChart, _chartOptions, _usersChart, suggestions_distance, section_floating, header_height, is_bottom = !1,
    pay_height, license_type, license_type_cards_switch, product_price, transparent = !0,
    my_url, just_assets, payment_visible = !1,
    parallax_gallery, parallax_trigger, child_product_height = 0,
    editor, timeoutObj, searchVisible = 0,
    facebook_add_to_cart_initialised = !1,
    product_fb_price_view = "$0",
    bla, fakeVar;
$(document).on("page:load", onPageLoad), $(document).ready(onPageLoad);
var parallax = function(e, t) { $(this).scrollTop();
        oVal = ($(window).scrollTop() - t) / 5, e.css("top", oVal) },
    click_rate = 0;
filled = !1, fixed_section = !1;
var top_moving_bar_visible = !1,
    checkScrollForTopMovingBar = debounce(function() { scroll_top = $(this).scrollTop(), scroll_top >= 600 ? top_moving_bar_visible || ($(".top-moving-bar").addClass("visible"), top_moving_bar_visible = !0) : top_moving_bar_visible && ($(".top-moving-bar").removeClass("visible"), top_moving_bar_visible = !1) }, 100);
$.fn.scrollTo = function(e, t, n) { "function" == typeof t && 2 == arguments.length && (n = t, t = e);
    var i = $.extend({ scrollTarget: e, offsetTop: 50, duration: 500, easing: "swing" }, t);
    return this.each(function() {
        var e = $(this),
            t = "number" == typeof i.scrollTarget ? i.scrollTarget : $(i.scrollTarget),
            o = "number" == typeof t ? t : t.offset().top + e.scrollTop() - parseInt(i.offsetTop);
        e.animate({ scrollTop: o }, parseInt(i.duration), i.easing, function() { "function" == typeof n && n.call(this) }) }) };
var comments_initialized = !1,
    buttonFilter = { $filters: null, $reset: null, groups: [], outputArray: [], outputString: "", init: function() {
            var e = this;
            e.$filters = $("#Filters"), e.$reset = $(".reset-filter"), e.$container = $("#mix-container"), e.$filters.find("fieldset").each(function() { e.groups.push({ $buttons: $(this).find(".filter"), active: "" }) }), e.bindHandlers() }, bindHandlers: function() {
            var e = this;
            e.$filters.on("click", ".filter", function(t) { t.preventDefault();
                var n = $(this);
                n.hasClass("active") ? n.removeClass("active") : n.addClass("active").siblings(".filter").removeClass("active"), e.parseFilters(), e.$reset.addClass("visible") }), e.$reset.on("click", function(t) { t.preventDefault(), e.$filters.find(".filter").removeClass("active"), e.parseFilters(), $(this).removeClass("visible") }) }, parseFilters: function() {
            for (var e, t = this, n = 0; e = t.groups[n]; n++) e.active = e.$buttons.filter(".active").attr("data-filter") || "";
            t.concatenate() }, concatenate: function() {
            var e = this;
            e.outputString = "";
            for (var t, n = 0; t = e.groups[n]; n++) e.outputString += t.active;!e.outputString.length && (e.outputString = "all"), e.$container.mixItUp("isLoaded") && e.$container.mixItUp("filter", e.outputString) } },
    initPhotoSwipeFromDOM = function(e) {
        for (var t = function(e) {
                for (var t, n, i, o, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++) t = r[l], 1 === t.nodeType && (n = t.children[0], i = n.getAttribute("data-size"), i = i.split("x"), o = { src: n.getAttribute("href"), w: parseInt(i[0], 10), h: parseInt(i[1], 10) }, t.children.length > 1 && (o.title = t.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = t, s.push(o));
                return s }, n = function e(t, n) {
                return t && (n(t) ? t : e(t.parentNode, n)) }, i = function(e) { e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                var t = e.target || e.srcElement,
                    i = n(t, function(e) {
                        return e.tagName && "FIGURE" === e.tagName.toUpperCase() });
                if (i) {
                    for (var o, a = i.parentNode, s = i.parentNode.childNodes, l = s.length, c = 0, u = 0; u < l; u++)
                        if (1 === s[u].nodeType) {
                            if (s[u] === i) { o = c;
                                break }
                            c++ }
                    return o >= 0 && r(o, a), !1 } }, o = function() {
                var e = window.location.hash.substring(1),
                    t = {};
                if (e.length < 5) return t;
                for (var n = e.split("&"), i = 0; i < n.length; i++)
                    if (n[i]) {
                        var o = n[i].split("=");
                        o.length < 2 || (t[o[0]] = o[1]) }
                return t.gid && (t.gid = parseInt(t.gid, 10)), t }, r = function(e, n, i, o) {
                var r, a, s, l = document.querySelectorAll(".pswp")[0];
                if (s = t(n), a = { galleryUID: n.getAttribute("data-pswp-uid"), getThumbBoundsFn: function(e) {
                            var t = s[e].el.getElementsByTagName("img")[0],
                                n = window.pageYOffset || document.documentElement.scrollTop,
                                i = t.getBoundingClientRect();
                            return { x: i.left, y: i.top + n, w: i.width } } }, o)
                    if (a.galleryPIDs) {
                        for (var c = 0; c < s.length; c++)
                            if (s[c].pid == e) { a.index = c;
                                break } } else a.index = parseInt(e, 10) - 1;
                else a.index = parseInt(e, 10);
                isNaN(a.index) || (i && (a.showAnimationDuration = 0), r = new PhotoSwipe(l, PhotoSwipeUI_Default, s, a), r.init()) }, a = document.querySelectorAll(e), s = 0, l = a.length; s < l; s++) a[s].setAttribute("data-pswp-uid", s + 1), a[s].onclick = i;
        var c = o();
        c.pid && c.gid && r(c.pid, a[c.gid - 1], !0, !0) };
! function(e) { e.fn.rating = function() {
        function t(t, n) {
            var i = e(t).find("[data-value=" + n + "]");
            i.removeClass("fa fa-star fa-empty").addClass("fa fa-star fa-full"), i.prevAll("[data-value]").removeClass("fa fa-star fa-empty").addClass("fa fa-star fa-full"), i.nextAll("[data-value]").removeClass("fa fa-star fa-full").addClass("fa fa-star fa-empty") }

        function n(t) {
            var n = e(t);
            n.find("[data-value]").removeClass("fa fa-star fa-full").addClass("fa fa-star fa-empty"), n.find(".rating-clear").hide(), n.find("input").val("").trigger("change") }
        var i;
        for (i = this.length - 1; i >= 0; i--) {
            var o, r, a = e(this[i]),
                s = a.data("max") || 5,
                l = a.data("min") || 0,
                c = a.data("clearable") || null,
                u = "";
            for (r = l; r <= s; r++) 1 != a.parent(".field-rating-dashboard").length ? u += ['<span class="fa fa-star fa-empty" data-value="', r, '"></span>'].join("") : u += ['<span class="fa fa-star fa-empty" data-value="', r, '"role="button" data-toggle="modal" ></span>'].join("");
            c && (u += [' <a class="rating-clear" style="display:none;" href="javascript:void">', '<span class="fa fa-times"></span> ', c, "</a>"].join("")), o = ['<div class="rating-input">', u, '<input type="hidden" name="', a.attr("name"), '" value="', a.val(), '" id="', a.attr("id"), '" />', "</div>"].join(""), a.replaceWith(o) }
        e(".rating-input").on("mouseenter", "[data-value]", function() {
            var n = e(this);
            t(n.closest(".rating-input"), n.data("value")) }).on("mouseleave", "[data-value]", function() {
            var i = e(this),
                o = i.siblings("input").val();
            o ? t(i.closest(".rating-input"), o) : n(i.closest(".rating-input")) }).on("click", "[data-value]", function(t) {
            var n = e(this),
                i = n.data("value");
            n.siblings("input").val(i).trigger("change"), n.siblings(".rating-clear").show(), 1 == e(this).parent().parent(".field-rating-dashboard").length && (number = e(this).parent().parent(".field-rating-dashboard").data("number"), e(this).attr("href", "#product-review-" + number), star = e(this).data("value"), e("#product-review-" + number).find("input[name='rating']").attr("value", star), e("#product-review-" + number).find(".rating-input span").removeClass("fa-full").addClass("fa-empty"), e("#product-review-" + number).find(".rating-input span").each(function(t) { t + 1 <= star && e(this).addClass("fa-full") }), e(this).modal("show")), t.preventDefault() }).on("click", ".rating-clear", function(t) { n(e(this).closest(".rating-input")), t.preventDefault() }).each(function() {
            var n = e(this).find("input").val();
            n && (t(this, n), e(this).find(".rating-clear").show()) }) }, e(function() { e("input.rating[type=number]").length > 0 && e("input.rating[type=number]").rating() }) }(jQuery);
