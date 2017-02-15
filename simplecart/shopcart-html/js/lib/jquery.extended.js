
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ============ EXTENDED METHOD JQUERY ========================
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */


(function ($) {

    /* Toggle Slide */
    $.fn.toggleShow = function (s, options) {
        var $this = this;
        var l = $this.length;
        if (l == 0) {
            console.log('Item toggle not exist!');
        } else if (l == 1) {
            var $s = $(s);
            $this.HANDLE_TOGGLE_ABSOLUTE($s, options);
            $this.click(function () {
                toggleHandle($(this), $s, options);
            });
        } else {
            var $s = $(this).siblings(s);
            $this.HANDLE_TOGGLE_ABSOLUTE($s, options);
            $this.click(function () {
                $s = $(this).siblings(s);
                toggleHandle($(this), $s, options);
            });
        }
    };


    /*******************************************************************************************************************************************/

    $.fn.HANDLE_TOGGLE_ABSOLUTE = function ($s, options) {
        var defaults = {
            effect: "slide", // slide, fade
            duration: 200,
            outcollapse: false // out click collapse
        };
        var settings = $.extend(defaults, options);
        var $this = this;

        var isHidden = $s.is(':hidden');
        toggleStyle(isHidden, $this, $s);
    };
    $.fn.HANDLE_OUT_COLLAPSE_ABSOLUTE = function ($s, settings) {
        var $this = this;
        $(window).on("click.Bst", function (e) {
            if ($this.parent().has(e.target).length === 0 && !$this.parent().is(e.target)) {
                switch (settings.effect) {
                    case 'fade':
                        $s.stop(true, true).fadeOut(settings.duration);
                        break;
                    default:
                        $s.stop(true, true).slideUp(settings.duration);
                        break;
                }
                $this.removeClass('minimize').addClass('maximize');
                $s.removeClass('expand').addClass('collapse');
            }
        });
    }

    function toggleHandle($this, $s, settings) {
        isHidden = $s.is(':hidden');
        switch (settings.effect) {
            case 'fade':
                (isHidden) ? $s.stop(true, true).fadeIn(settings.duration) : $s.stop(true, true).fadeOut(settings.duration);
                break;
            default:
                $s.stop(true, true).slideToggle(settings.duration);
                break;
        }
        toggleStyle(!isHidden, $this, $s);
        (settings.outcollapse) ? $this.HANDLE_OUT_COLLAPSE_ABSOLUTE($s, settings) : '';
    }
    function toggleStyle(isHidden, $this, $s) {
        (isHidden) ? $this.removeClass('minimize').addClass('maximize') : $this.removeClass('maximize').addClass('minimize');
        (isHidden) ? $s.removeClass('expand').addClass('collapse') : $s.removeClass('collapse').addClass('expand');
    }

}(jQuery));